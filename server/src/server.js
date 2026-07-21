import http from 'node:http';
import { createHash, randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import os from 'node:os';

const SERVER_BUILD = '1.1.1';
const PORT = integerEnv('BLUEPANEL_INTERNAL_PORT', 8787, 1, 65535);
const CORE_URL = normalizeUrl(process.env.BLUEPANEL_CORE_URL || '');
const PUBLIC_URL = normalizeUrl(process.env.BLUEPANEL_SERVER_PUBLIC_URL || '') || '';
const SERVER_LABEL = String(process.env.BLUEPANEL_SERVER_LABEL || 'BluePanel Server').trim().slice(0, 80);
const SERVER_TOKEN = String(process.env.BLUEPANEL_SERVER_TOKEN || '').trim();
const REGISTRATION_CODE = String(process.env.BLUEPANEL_REGISTRATION_CODE || '').trim();
const PHASE_INTERVAL_MS = integerEnv('BLUEPANEL_PHASE_INTERVAL_SECONDS', 30, 10, 300) * 1000;
const HEARTBEAT_INTERVAL_MS = integerEnv('BLUEPANEL_HEARTBEAT_INTERVAL_SECONDS', 20, 10, 300) * 1000;
const REQUEST_TIMEOUT_MS = integerEnv('BLUEPANEL_REQUEST_TIMEOUT_SECONDS', 25, 5, 120) * 1000;
const ALERT_BOT_TOKEN = String(process.env.BLUEPANEL_ALERT_BOT_TOKEN || '').trim();
const ALERT_CHAT_ID = String(process.env.BLUEPANEL_ALERT_CHAT_ID || '').trim();
const ALERT_TOPIC_ID = String(process.env.BLUEPANEL_ALERT_TOPIC_ID || '').trim();
const STATE_DIR = '/data';
const STATE_PATH = `${STATE_DIR}/state.json`;
const SERVER_ID = process.env.BLUEPANEL_SERVER_ID || `srv_${createHash('sha256').update(`${os.hostname()}|${SERVER_TOKEN}`).digest('hex').slice(0, 24)}`;
const startedAt = new Date().toISOString();

if (!CORE_URL) fatal('BLUEPANEL_CORE_URL تنظیم نشده است');
if (SERVER_TOKEN.length < 32) fatal('BLUEPANEL_SERVER_TOKEN باید حداقل ۳۲ کاراکتر باشد');

let state = {
  registered: false,
  registered_at: '',
  last_heartbeat_at: '',
  last_heartbeat_ok_at: '',
  last_phase: -1,
  last_phase_at: '',
  last_phase_ok_at: '',
  last_job_id: '',
  last_error: '',
  consecutive_failures: 0,
  phase_cursor: -1,
  core_version: '',
  server_id: SERVER_ID
};
let phaseRunning = false;
let shuttingDown = false;
let heartbeatTimer = null;
let phaseTimer = null;

function integerEnv(name, fallback, min, max) {
  const value = Number(process.env[name] ?? fallback);
  if (!Number.isFinite(value)) return fallback;
  return Math.max(min, Math.min(max, Math.trunc(value)));
}

function normalizeUrl(value) {
  const raw = String(value || '').trim().replace(/\/+$/, '');
  if (!raw) return '';
  try {
    const url = new URL(raw);
    if (!['http:', 'https:'].includes(url.protocol)) return '';
    if (url.username || url.password) return '';
    return url.toString().replace(/\/+$/, '');
  } catch {
    return '';
  }
}

function fatal(message) {
  console.error(`[bluepanel-server] ${message}`);
  process.exit(1);
}

function safeError(error) {
  return String(error?.message || error || 'خطای نامشخص').replace(/(token|password|secret|authorization)[=: ]+[^\s,}\]]+/gi, '$1=[REDACTED]').slice(0, 1600);
}

async function loadState() {
  await mkdir(STATE_DIR, { recursive: true });
  try {
    const parsed = JSON.parse(await readFile(STATE_PATH, 'utf8'));
    if (parsed && typeof parsed === 'object') state = { ...state, ...parsed, server_id: SERVER_ID };
  } catch {}
}

async function saveState() {
  const temp = `${STATE_PATH}.${process.pid}.tmp`;
  await writeFile(temp, JSON.stringify(state, null, 2), { mode: 0o600 });
  await rename(temp, STATE_PATH);
}

async function jsonFetch(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(new Error('مهلت درخواست تمام شد')), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      cache: 'no-store',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'user-agent': `BluePanelServer/${SERVER_BUILD}`,
        ...(options.headers || {})
      }
    });
    const raw = await response.text();
    let data = {};
    try { data = raw ? JSON.parse(raw) : {}; } catch { data = { raw: raw.slice(0, 1000) }; }
    if (!response.ok || data?.success === false) {
      const error = new Error(data?.error || data?.message || `HTTP ${response.status}`);
      error.status = response.status;
      error.data = data;
      throw error;
    }
    return data;
  } finally {
    clearTimeout(timer);
  }
}

function coreHeaders() {
  return {
    authorization: `Bearer ${SERVER_TOKEN}`,
    'x-bluepanel-server-token': SERVER_TOKEN,
    'x-bluepanel-server-id': SERVER_ID
  };
}

async function sendTelegramAlert(title, message) {
  if (!ALERT_BOT_TOKEN || !ALERT_CHAT_ID) return false;
  const body = {
    chat_id: ALERT_CHAT_ID,
    text: `🚨 <b>${escapeHtml(title)}</b>\n━━━━━━━━━━━━━━\n${escapeHtml(message).slice(0, 3000)}\n\nسرور: <code>${escapeHtml(SERVER_ID)}</code>`,
    parse_mode: 'HTML',
    disable_web_page_preview: true
  };
  if (/^-?\d+$/.test(ALERT_TOPIC_ID)) body.message_thread_id = Number(ALERT_TOPIC_ID);
  try {
    await jsonFetch(`https://api.telegram.org/bot${ALERT_BOT_TOKEN}/sendMessage`, { method: 'POST', body: JSON.stringify(body), headers: {} });
    return true;
  } catch (error) {
    console.error('[bluepanel-server] telegram alert failed:', safeError(error));
    return false;
  }
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

async function register() {
  if (state.registered && !REGISTRATION_CODE) return true;
  if (!REGISTRATION_CODE) {
    console.warn('[bluepanel-server] registration code is empty; waiting for an existing registration');
    return state.registered;
  }
  const result = await jsonFetch(`${CORE_URL}/__bluepanel/server/register`, {
    method: 'POST',
    body: JSON.stringify({
      registration_code: REGISTRATION_CODE,
      server_url: PUBLIC_URL,
      server_token: SERVER_TOKEN,
      label: SERVER_LABEL,
      hostname: os.hostname(),
      os_info: `${os.type()} ${os.release()}`,
      architecture: os.arch(),
      server_id: SERVER_ID,
      server_version: SERVER_BUILD,
      started_at: startedAt
    })
  });
  state.registered = true;
  state.registered_at = new Date().toISOString();
  state.core_version = String(result?.core_version || '');
  state.last_error = '';
  state.consecutive_failures = 0;
  await saveState();
  console.log(`[bluepanel-server] registered with Core ${state.core_version || ''}`.trim());
  return true;
}

async function heartbeat() {
  if (shuttingDown) return;
  state.last_heartbeat_at = new Date().toISOString();
  try {
    const result = await jsonFetch(`${CORE_URL}/__bluepanel/server/heartbeat`, {
      method: 'POST',
      headers: coreHeaders(),
      body: JSON.stringify({
        server_id: SERVER_ID,
        server_version: SERVER_BUILD,
        public_url: PUBLIC_URL,
        hostname: os.hostname(),
        os_info: `${os.type()} ${os.release()}`,
        architecture: os.arch(),
        last_error: state.last_error || '',
        uptime_seconds: Math.floor(process.uptime()),
        phase_cursor: state.phase_cursor,
        last_phase: state.last_phase,
        last_phase_at: state.last_phase_at,
        last_phase_ok_at: state.last_phase_ok_at,
        consecutive_failures: state.consecutive_failures,
        status: 'online'
      })
    });
    state.registered = true;
    state.last_heartbeat_ok_at = new Date().toISOString();
    state.core_version = String(result?.core_version || state.core_version || '');
    state.last_error = '';
    if (state.consecutive_failures > 0) state.consecutive_failures = 0;
    await saveState();
  } catch (error) {
    state.consecutive_failures += 1;
    state.last_error = safeError(error);
    await saveState();
    console.error('[bluepanel-server] heartbeat failed:', state.last_error);
    if ([3, 10, 30].includes(state.consecutive_failures)) {
      await sendTelegramAlert('ارتباط سرور بلوپنل با Core قطع شد', `${state.last_error}\nتکرار: ${state.consecutive_failures}`);
    }
  }
}

async function runNextPhase(forcePhase = null) {
  if (shuttingDown || phaseRunning || !state.registered) return;
  phaseRunning = true;
  const phase = forcePhase == null ? (Number(state.phase_cursor || -1) + 1 + 8) % 8 : Math.max(0, Math.min(7, Number(forcePhase)));
  const jobId = `server:${SERVER_ID}:${Date.now()}:${phase}:${randomUUID()}`;
  state.last_phase = phase;
  state.last_phase_at = new Date().toISOString();
  state.last_job_id = jobId;
  await saveState();
  try {
    const result = await jsonFetch(`${CORE_URL}/__bluepanel/server/run-phase`, {
      method: 'POST',
      headers: coreHeaders(),
      body: JSON.stringify({ phase, job_id: jobId, server_id: SERVER_ID, requested_at: state.last_phase_at })
    });
    state.phase_cursor = phase;
    state.last_phase_ok_at = new Date().toISOString();
    state.last_error = '';
    state.consecutive_failures = 0;
    state.core_version = String(result?.core_version || state.core_version || '');
    await saveState();
    console.log(`[bluepanel-server] phase ${phase} completed`);
  } catch (error) {
    state.consecutive_failures += 1;
    state.last_error = safeError(error);
    await saveState();
    console.error(`[bluepanel-server] phase ${phase} failed:`, state.last_error);
    if ([3, 10, 30].includes(state.consecutive_failures)) {
      await sendTelegramAlert(`اجرای فاز ${phase} سرور بلوپنل ناموفق شد`, `${state.last_error}\nتکرار: ${state.consecutive_failures}`);
    }
  } finally {
    phaseRunning = false;
  }
}

async function readJsonBody(request, limit = 1024 * 1024) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > limit) throw new Error('بدنه درخواست بیش از حد مجاز است');
    chunks.push(chunk);
  }
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function authorized(request) {
  const supplied = String(request.headers['x-bluepanel-server-token'] || request.headers.authorization || '').replace(/^Bearer\s+/i, '').trim();
  if (!supplied || supplied.length !== SERVER_TOKEN.length) return false;
  return createHash('sha256').update(supplied).digest('hex') === createHash('sha256').update(SERVER_TOKEN).digest('hex');
}

function respond(response, status, payload) {
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'x-bluepanel-server-version': SERVER_BUILD
  });
  response.end(JSON.stringify(payload));
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);
  try {
    if (request.method === 'GET' && url.pathname === '/health') {
      return respond(response, 200, {
        ok: true,
        success: true,
        role: 'bluepanel-server',
        version: SERVER_BUILD,
        server_id: SERVER_ID,
        registered: Boolean(state.registered),
        core_url: CORE_URL,
        public_url: PUBLIC_URL,
        started_at: startedAt,
        uptime_seconds: Math.floor(process.uptime()),
        phase_running: phaseRunning,
        state
      });
    }
    if (request.method === 'POST' && url.pathname === '/v1/run-now') {
      if (!authorized(request)) return respond(response, 403, { success: false, error: 'Forbidden' });
      const body = await readJsonBody(request);
      const phase = body.phase == null ? null : Number(body.phase);
      runNextPhase(phase).catch(error => console.error('[bluepanel-server] manual phase failed:', safeError(error)));
      return respond(response, 202, { success: true, accepted: true, phase });
    }
    if (request.method === 'POST' && url.pathname === '/v1/alert') {
      if (!authorized(request)) return respond(response, 403, { success: false, error: 'Forbidden' });
      const body = await readJsonBody(request);
      const sent = await sendTelegramAlert(String(body.title || 'هشدار سرور بلوپنل'), String(body.message || 'بدون جزئیات'));
      return respond(response, sent ? 200 : 503, { success: sent });
    }
    return respond(response, 404, { success: false, error: 'Not found' });
  } catch (error) {
    console.error('[bluepanel-server] request error:', safeError(error));
    return respond(response, 500, { success: false, error: safeError(error) });
  }
});

async function start() {
  await loadState();
  server.listen(PORT, '0.0.0.0', () => console.log(`[bluepanel-server] listening on 0.0.0.0:${PORT}`));
  try { await register(); }
  catch (error) {
    state.last_error = safeError(error);
    state.consecutive_failures += 1;
    await saveState();
    console.error('[bluepanel-server] registration failed:', state.last_error);
  }
  await heartbeat();
  setTimeout(() => runNextPhase().catch(error => console.error(safeError(error))), 5000).unref();
  heartbeatTimer = setInterval(() => heartbeat().catch(error => console.error(safeError(error))), HEARTBEAT_INTERVAL_MS);
  phaseTimer = setInterval(() => runNextPhase().catch(error => console.error(safeError(error))), PHASE_INTERVAL_MS);
  heartbeatTimer.unref();
  phaseTimer.unref();
}

async function shutdown(signal) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.log(`[bluepanel-server] shutting down (${signal})`);
  clearInterval(heartbeatTimer);
  clearInterval(phaseTimer);
  try {
    await jsonFetch(`${CORE_URL}/__bluepanel/server/heartbeat`, {
      method: 'POST',
      headers: coreHeaders(),
      body: JSON.stringify({ server_id: SERVER_ID, server_version: SERVER_BUILD, status: 'stopping', uptime_seconds: Math.floor(process.uptime()) })
    });
  } catch {}
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 4000).unref();
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('uncaughtException', async error => {
  console.error('[bluepanel-server] uncaughtException:', safeError(error));
  await sendTelegramAlert('خطای بحرانی BluePanel Server', safeError(error));
});
process.on('unhandledRejection', async reason => {
  console.error('[bluepanel-server] unhandledRejection:', safeError(reason));
  await sendTelegramAlert('Promise ردشده در BluePanel Server', safeError(reason));
});

start().catch(error => fatal(safeError(error)));
