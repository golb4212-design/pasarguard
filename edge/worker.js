/* BLUEPANEL_EDGE_WORKER
 * Dedicated BluePanel Edge bundle.
 * D1 binding: EDGE_DB
 * Service bindings: CORE_WORKER, PROCESSOR_WORKER
 * Version: 2.9.0
 */

const BLUEPANEL_EDGE_APP = (() => {
/* BLUEPANEL_EDGE_WORKER
 * BluePanel reseller edge / secondary Worker
 * Version: 2.9.0
 * Required D1 binding: EDGE_DB
 */

const EDGE_VERSION = "2.9.0";
const JSON_HEADERS = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
let schemaPromise = null;

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), { status, headers: { ...JSON_HEADERS, ...headers } });
}
function fail(error, status = 400, code = "EDGE_ERROR") {
  return json({ success: false, error: String(error || "خطا"), code }, status);
}
function nowIso() { return new Date().toISOString(); }
function randomId(prefix = "job") {
  const bytes = crypto.getRandomValues(new Uint8Array(18));
  const raw = btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  return prefix + "_" + raw;
}
function randomApiKey() {
  const bytes = crypto.getRandomValues(new Uint8Array(36));
  return "bpe_" + btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
async function sha256Hex(value) {
  const data = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(value || "")));
  return Array.from(new Uint8Array(data)).map(x => x.toString(16).padStart(2, "0")).join("");
}
function constantTimeEqual(a, b) {
  const x = new TextEncoder().encode(String(a || ""));
  const y = new TextEncoder().encode(String(b || ""));
  let diff = x.length ^ y.length;
  const n = Math.max(x.length, y.length);
  for (let i = 0; i < n; i++) diff |= (x[i % Math.max(1, x.length)] || 0) ^ (y[i % Math.max(1, y.length)] || 0);
  return diff === 0;
}
function normalizeUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) throw new Error("URL ورکر مرکزی وارد نشده است");
  const u = new URL(raw.includes("://") ? raw : "https://" + raw);
  if (u.protocol !== "https:") throw new Error("URL باید با HTTPS باشد");
  u.pathname = ""; u.search = ""; u.hash = "";
  return u.origin;
}
function inferScriptName(hostname) {
  const host = String(hostname || "").toLowerCase();
  if (host.endsWith(".workers.dev")) return host.split(".")[0] || "";
  return "";
}
async function parseJson(request) {
  const raw = await request.text();
  if (!raw) return {};
  try { return JSON.parse(raw); } catch (_) { throw new Error("بدنه JSON معتبر نیست"); }
}

async function ensureDb(env) {
  if (!env.EDGE_DB) throw new Error("Binding دیتابیس EDGE_DB متصل نیست");
  if (!schemaPromise) {
    schemaPromise = (async () => {
      // هر دستور جداگانه اجرا می‌شود. استفاده از exec چنددستوری در بعضی
      // استقرارهای D1 باعث بریده‌شدن SQL در اولین سمی‌کالن و خطای
      // "incomplete input" می‌شد.
      const schemaStatements = [
        `CREATE TABLE IF NOT EXISTS edge_settings (
          key TEXT PRIMARY KEY,
          value TEXT NOT NULL,
          updated_at TEXT NOT NULL
        )`,
        `CREATE TABLE IF NOT EXISTS edge_jobs (
          id TEXT PRIMARY KEY,
          method TEXT NOT NULL,
          path_query TEXT NOT NULL,
          headers_json TEXT NOT NULL DEFAULT '{}',
          body_text TEXT NOT NULL DEFAULT '',
          status TEXT NOT NULL DEFAULT 'pending',
          attempts INTEGER NOT NULL DEFAULT 0,
          next_attempt_at TEXT NOT NULL,
          last_error TEXT,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL
        )`,
        `CREATE INDEX IF NOT EXISTS idx_edge_jobs_pending
          ON edge_jobs(status, next_attempt_at, created_at)`,
        `CREATE TABLE IF NOT EXISTS edge_metrics (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          kind TEXT NOT NULL,
          path TEXT,
          status INTEGER,
          duration_ms INTEGER NOT NULL DEFAULT 0,
          created_at TEXT NOT NULL
        )`,
        `CREATE INDEX IF NOT EXISTS idx_edge_metrics_created
          ON edge_metrics(created_at DESC)`
      ];

      for (let index = 0; index < schemaStatements.length; index++) {
        try {
          await env.EDGE_DB.prepare(schemaStatements[index]).run();
        } catch (error) {
          throw new Error(`EDGE_DB schema step ${index + 1} failed: ${error?.message || error}`);
        }
      }

      // یک کوئری واقعی بعد از مهاجرت، سلامت ساختار را تأیید می‌کند.
      await env.EDGE_DB.prepare("SELECT key FROM edge_settings LIMIT 1").first();
      return true;
    })().catch(error => { schemaPromise = null; throw error; });
  }
  return schemaPromise;
}
async function getSettings(env) {
  await ensureDb(env);
  const rows = await env.EDGE_DB.prepare("SELECT key,value FROM edge_settings").all();
  const out = { core_url: "", public_origin: "", connection_mode: "service_binding", paired: "false", paired_at: "", core_version: "", last_core_ok_at: "", last_core_error: "", cache_seconds: "45" };
  for (const row of rows.results || []) out[row.key] = row.value;
  return out;
}
async function setSettings(env, values) {
  await ensureDb(env);
  const ts = nowIso();
  const statements = Object.entries(values).map(([k, v]) => env.EDGE_DB.prepare("INSERT INTO edge_settings(key,value,updated_at) VALUES(?,?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at").bind(k, String(v ?? ""), ts));
  if (statements.length) await env.EDGE_DB.batch(statements);
}
async function authenticate(request, env) {
  const settings = await getSettings(env);
  const header = String(request.headers.get("authorization") || "");
  const bearer = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
  const direct = String(request.headers.get("x-bluepanel-edge-key") || "").trim();
  const key = bearer || direct;
  if (!key || !settings.api_key_hash || !constantTimeEqual(await sha256Hex(key), settings.api_key_hash)) return { ok: false, settings };
  return { ok: true, key, settings };
}


function isServiceBinding(binding) {
  return Boolean(binding && typeof binding.fetch === "function");
}
function hasCoreServiceBinding(env) {
  return isServiceBinding(env?.CORE_WORKER);
}
function hasProcessorServiceBinding(env) {
  return isServiceBinding(env?.PROCESSOR_WORKER);
}
function edgeRelatedBindingNames(env) { try { return Object.keys(env || {}).filter(name => /(?:WORKER|_DB$|BLUEPANEL_ROLE)/i.test(String(name))).sort(); } catch (_) { return []; } }
function edgeBindingRuntimeInfo(env, name) { const exact=Object.prototype.hasOwnProperty.call(env||{},name),value=exact?env[name]:undefined,related=edgeRelatedBindingNames(env),normalized=String(name).replace(/[^a-z0-9]/gi,'').toLowerCase(); return { name, exact_key_present:exact, value_present:value!==undefined&&value!==null, value_type:value===null?'null':typeof value, fetch_callable:Boolean(value&&typeof value.fetch==='function'), constructor_name:value?.constructor?.name||'', related_binding_names:related, similar_binding_names:related.filter(item=>String(item).replace(/[^a-z0-9]/gi,'').toLowerCase()===normalized&&item!==name) }; }
async function edgeProbeBinding(env,name,expectedRole,url,hop='edge-diagnostics') { const runtime=edgeBindingRuntimeInfo(env,name),probeId=randomId('edgeprobe'),base={name,expected_role:expectedRole,checked_at:nowIso(),probe_id:probeId,runtime,binding_detected:runtime.fetch_callable,reachable:false,healthy:false,latency_ms:null,http_status:null,response_role:'',response_version:'',error_stage:runtime.fetch_callable?'':(runtime.exact_key_present?'binding_not_fetchable':'binding_missing'),error:runtime.fetch_callable?'':`Binding ${name} در Runtime فعال نیست`}; if(!runtime.fetch_callable)return base; const started=Date.now(); try { const response=await Promise.race([env[name].fetch(new Request(url,{headers:{'x-bluepanel-service-hop':hop,'x-bluepanel-probe-id':probeId,'x-bluepanel-source-version':EDGE_VERSION,'accept':'application/json'}})),new Promise((_,reject)=>setTimeout(()=>reject(new Error('مهلت پاسخ Service Binding تمام شد')),6000))]); const raw=await response.text(); let data=null; try{data=raw?JSON.parse(raw):{}}catch(_){}; const out={...base,reachable:true,latency_ms:Date.now()-started,http_status:response.status,content_type:response.headers.get('content-type')||'',response_role:String(data?.role||response.headers.get('x-bluepanel-role')||''),response_version:String(data?.version||response.headers.get('x-bluepanel-version')||''),response_preview:raw.slice(0,320),data:data||undefined}; if(!data){out.error_stage='non_json_response';out.error=`پاسخ ${name} JSON نیست`;}else if(out.response_role!==expectedRole){out.error_stage='role_mismatch';out.error=`نقش مقصد ${out.response_role||'نامشخص'} است؛ ${expectedRole} انتظار می‌رود`;}else if(data.database_query_ok===false||data.ok===false){out.error_stage=data.database_query_ok===false?'target_database_error':'target_unhealthy';out.error=String(data.error||'Worker مقصد سالم نیست').slice(0,800);}else if(!response.ok){out.error_stage='http_error';out.error=String(data.error||`HTTP ${response.status}`).slice(0,800);}else{out.healthy=true;out.error_stage='';out.error='';} return out; } catch(error){return {...base,latency_ms:Date.now()-started,error_stage:String(error?.message||'').includes('مهلت')?'timeout':'fetch_failed',error:String(error?.message||error).slice(0,800)};} }
function isInternalHost(hostname) {
  return String(hostname || "").toLowerCase().endsWith(".internal");
}
async function rememberPublicOrigin(request, env, ctx) {
  try {
    const url = new URL(request.url);
    const hop = String(request.headers.get("x-bluepanel-service-hop") || "");
    if (isInternalHost(url.hostname) || hop) return;
    const origin = url.origin;
    const task = (async () => {
      const settings = await getSettings(env);
      if (settings.public_origin !== origin) await setSettings(env, { public_origin: origin });
    })();
    if (ctx?.waitUntil) ctx.waitUntil(task); else await task;
  } catch (_) {}
}
async function coreServiceHealth(env) {
  const probe = await edgeProbeBinding(env, 'CORE_WORKER', 'bluepanel-core', 'https://bluepanel-core.internal/__bluepanel/service/core-health', 'edge-control');
  return { ...(probe.data || {}), ok: probe.healthy === true, binding_detected: probe.runtime?.fetch_callable === true, probe, error: probe.error || '' };
}


async function processorServiceHealth(env) {
  const probe = await edgeProbeBinding(env, 'PROCESSOR_WORKER', 'bluepanel-processor', 'https://bluepanel-processor.internal/__bluepanel/service/processor-health', 'edge-control');
  return { ...(probe.data || {}), ok: probe.healthy === true, binding_detected: probe.runtime?.fetch_callable === true, probe, error: probe.error || '' };
}

async function forwardToProcessor(request, env, ctx) {
  if (!hasProcessorServiceBinding(env)) return null;
  const headers = new Headers(request.headers);
  ["host","content-length","cf-ray","cf-visitor","cf-ew-via","cdn-loop"].forEach(h => headers.delete(h));
  headers.set("x-bluepanel-service-hop", "edge-to-processor");
  const init = { method: request.method, headers, redirect: "manual" };
  if (!["GET","HEAD"].includes(request.method)) init.body = request.body;
  try {
    const response = await env.PROCESSOR_WORKER.fetch(new Request(request.url, init));
    const responseHeaders = new Headers(response.headers);
    responseHeaders.set("x-bluepanel-edge", EDGE_VERSION);
    responseHeaders.set("x-bluepanel-upstream", "processor-service-binding");
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers: responseHeaders });
  } catch (error) {
    console.error("processor delegation failed", error);
    return null;
  }
}

function htmlEscape(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}
function htmlResponse(body, status = 200, headers = {}) {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store, no-cache, must-revalidate, max-age=0",
      pragma: "no-cache",
      expires: "0",
      "x-content-type-options": "nosniff",
      ...headers
    }
  });
}
function setupPageHtml(status = {}, options = {}) {
  const dbOk = status.binding_detected === true && status.database_query_ok !== false;
  const coreOk = status.core_binding_detected === true && status.core_ok === true;
  const processorOk = status.processor_binding_detected === true && status.processor_ok === true;
  const allOk = dbOk && coreOk && processorOk;
  const content = '<span class="pill">' + (allOk ? 'متصل و فعال' : 'نیازمند اتصال Binding') + '</span>' +
    '<h3>' + (allOk ? 'تقسیم بار آماده است' : 'اتصال داخلی کامل نیست') + '</h3>' +
    '<div class="status">' +
      (dbOk ? '✅ دیتابیس EDGE_DB سالم است' : '❌ دیتابیس EDGE_DB متصل یا سالم نیست') + '<br>' +
      (status.core_binding_detected ? '✅ Binding با نام CORE_WORKER شناسایی شد' : '❌ Binding با نام CORE_WORKER متصل نیست') + '<br>' +
      (status.core_ok ? '✅ Worker مرکزی پاسخ سالم داد' : '❌ Worker مرکزی هنوز پاسخ سالم نداده است') + '<br>' +
      (status.processor_binding_detected ? '✅ Binding با نام PROCESSOR_WORKER شناسایی شد' : '❌ Binding با نام PROCESSOR_WORKER متصل نیست') + '<br>' +
      (status.processor_ok ? '✅ Worker سوم پاسخ سالم داد' : '❌ Worker سوم هنوز پاسخ سالم نداده است') + '<br>' +
      'نسخه Worker دوم: ' + htmlEscape(status.version || EDGE_VERSION) + '<br>' +
      'نسخه Worker مرکزی: ' + htmlEscape(status.core_version || '—') + '<br>' +
      'نسخه Worker سوم: ' + htmlEscape(status.processor_version || '—') + '<br>' +
      'صف محلی جایگزین: ' + Number(status.pending_jobs || 0).toLocaleString('fa-IR') +
      (status.last_core_error ? '<br><span class="err">' + htmlEscape(status.last_core_error) + '</span>' : '') +
    '</div>' +
    '<ol class="steps"><li>همین فایل <code>worker.js</code> را روی هر سه Worker قرار دهید.</li><li>Worker مرکزی: <code>EDGE_WORKER</code> به Worker دوم و <code>PROCESSOR_WORKER</code> به Worker سوم.</li><li>Worker دوم: <code>CORE_WORKER</code> به Worker مرکزی و <code>PROCESSOR_WORKER</code> به Worker سوم.</li><li>Worker سوم: <code>CORE_WORKER</code> به Worker مرکزی و <code>EDGE_WORKER</code> به Worker دوم.</li><li>هیچ URL یا API Key لازم نیست؛ اتصال بعد از Save and Deploy خودکار است.</li></ol>';
  return `<!doctype html><html lang="fa" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#07111f"><title>BluePanel Edge</title><style>
:root{--bg:#07111f;--surface:#102138;--surface2:#152b46;--line:rgba(150,180,220,.16);--text:#f7fbff;--muted:#91a5be;--primary:#3388ff;--ok:#35d59a;--danger:#ff667b}*{box-sizing:border-box}body{margin:0;min-height:100vh;background:radial-gradient(circle at 10% 0,rgba(51,136,255,.20),transparent 35%),radial-gradient(circle at 90% 10%,rgba(121,92,255,.15),transparent 28%),var(--bg);color:var(--text);font-family:Tahoma,Arial,sans-serif}.wrap{width:min(760px,100%);margin:auto;padding:30px 16px}.hero{border:1px solid var(--line);background:linear-gradient(145deg,#112944,#13223e);border-radius:28px;padding:24px;box-shadow:0 24px 70px rgba(0,0,0,.30)}.logo{width:64px;height:64px;border-radius:21px;display:grid;place-items:center;background:linear-gradient(145deg,#3388ff,#765cff);font-size:21px;font-weight:1000;box-shadow:0 16px 38px rgba(51,136,255,.28)}h1{font-size:24px;margin:16px 0 8px}h3{margin:8px 0 12px}.muted{color:var(--muted);font-size:12px;line-height:1.9}.card{margin-top:14px;border:1px solid var(--line);background:rgba(16,33,56,.96);border-radius:22px;padding:18px}.status{border:1px solid var(--line);background:var(--surface2);border-radius:14px;padding:13px;font-size:12px;line-height:2;word-break:break-word}.ok{color:var(--ok)}.err{color:var(--danger)}.steps{padding-right:18px;color:var(--muted);font-size:12px;line-height:2}.pill{display:inline-flex;padding:6px 9px;border-radius:999px;background:rgba(53,213,154,.12);color:var(--ok);font-size:10px;font-weight:bold}code{direction:ltr;display:inline-block;color:#9bc7ff}@media(max-width:600px){.wrap{padding:16px 10px}.hero{padding:18px;border-radius:22px}h1{font-size:20px}}</style></head><body><div class="wrap"><div class="hero"><div class="logo">E2</div><h1>ورکر دوم BluePanel</h1><div class="muted">نقش Worker به‌صورت خودکار از روی EDGE_DB تشخیص داده شده است.</div><div class="card">${content}</div></div></div></body></html>`;
}
async function renderSetupPage(request, env, options = {}) {
  try {
    const status = await setupStatus(env);
    return htmlResponse(setupPageHtml(status, options));
  } catch (error) {
    const fallback = { binding_detected: Boolean(env.EDGE_DB), paired: false, version: EDGE_VERSION, core_url: options.coreUrl || "" };
    return htmlResponse(setupPageHtml(fallback, { ...options, error: options.error || error?.message || String(error) }), 500);
  }
}
async function parseSetupBody(request) {
  const contentType = String(request.headers.get("content-type") || "").toLowerCase();
  if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    return { core_url: String(form.get("core_url") || "") };
  }
  return parseJson(request);
}

async function setupStatus(env) {
  const binding = Boolean(env.EDGE_DB);
  if (!binding) return { success: true, binding_detected: false, database_query_ok: false, core_binding_detected: hasCoreServiceBinding(env), core_ok: false, paired: false, version: EDGE_VERSION };
  try {
    await ensureDb(env);
    const s = await getSettings(env);
    const pending = await env.EDGE_DB.prepare("SELECT COUNT(*) AS count FROM edge_jobs WHERE status='pending'").first();
    const core = await coreServiceHealth(env);
    const processor = await processorServiceHealth(env);
    const paired = core.ok === true && processor.ok === true;
    if (paired && (s.paired !== "true" || s.core_version !== String(core.version || ""))) {
      await setSettings(env, { connection_mode: "service_binding", paired: "true", paired_at: s.paired_at || nowIso(), core_version: String(core.version || ""), last_core_ok_at: nowIso(), last_core_error: "" });
    } else if (!paired && s.last_core_error !== String(core.error || "")) {
      await setSettings(env, { connection_mode: "service_binding", paired: "false", last_core_error: String(core.error || "").slice(0, 800) });
    }
    return { success: true, binding_detected: true, database_query_ok: true, core_binding_detected: core.binding_detected === true, core_ok: core.ok === true, processor_binding_detected: processor.binding_detected === true, processor_ok: processor.ok === true, paired, connected: paired, status: paired ? "connected" : "partial", core_version: core.version || s.core_version || "", processor_version: processor.version || "", version: EDGE_VERSION, pending_jobs: Number(pending?.count || 0), public_origin: s.public_origin || "", last_core_ok_at: paired ? nowIso() : (s.last_core_ok_at || ""), last_core_error: paired ? "" : (core.error || processor.error || s.last_core_error || ""), checked_at: nowIso(), runtime_bindings: { CORE_WORKER: edgeBindingRuntimeInfo(env, "CORE_WORKER"), PROCESSOR_WORKER: edgeBindingRuntimeInfo(env, "PROCESSOR_WORKER") }, core_probe: core.probe || null, processor_probe: processor.probe || null };
  } catch (error) {
    return { success: true, binding_detected: true, database_query_ok: false, core_binding_detected: hasCoreServiceBinding(env), core_ok: false, processor_binding_detected: hasProcessorServiceBinding(env), processor_ok: false, paired: false, version: EDGE_VERSION, error: String(error?.message || error) };
  }
}

async function edgeDiscovery(request, env) {
  const status = await setupStatus(env);
  return json({ success: true, ok: status.binding_detected === true && status.database_query_ok !== false, role: "bluepanel-edge", service: "bluepanel-edge", connection_mode: "service_binding", origin: status.public_origin || new URL(request.url).origin, script_name: status.public_origin ? inferScriptName(new URL(status.public_origin).hostname) : "", ...status }, status.binding_detected === true && status.database_query_ok !== false ? 200 : 500);
}
async function setupEdge(request, env, asHtml = false) {
  const message = "اتصال با URL و API Key حذف شده است؛ فقط Service Bindingهای EDGE_WORKER و CORE_WORKER را در تنظیمات Cloudflare متصل کنید";
  return asHtml ? renderSetupPage(request, env, { error: message }) : fail(message, 410, "SERVICE_BINDING_REQUIRED");
}
async function pairConfirm(request, env) {
  const status = await setupStatus(env);
  return json({ success: status.paired === true, role: "bluepanel-edge", connection_mode: "service_binding", ...status }, status.paired ? 200 : 503);
}

function selectedHeaders(headers) {
  const skip = new Set(["host","content-length","connection","accept-encoding","cf-ray","cf-visitor","cf-ew-via","cdn-loop"]);
  const out = {};
  for (const [k, v] of headers.entries()) if (!skip.has(k.toLowerCase())) out[k] = v;
  return out;
}
function isAllowedProxyPath(path) {
  return /^\/(sales-bot|sales-payments|sales-app|sales-api|sales-auth|sales-manifest|reseller-control|reseller-control-auth|reseller-control-api)(\/|$)/.test(path) || path === "/assets/bluepanel-icon.svg" || path === "/favicon.ico";
}
function isQueuedWebhook(path, method) {
  return method === "POST" && (/^\/sales-bot\/[^/]+\/webhook$/.test(path) || /^\/sales-payments\/[^/]+\/blupal\/webhook$/.test(path));
}
function isCacheable(path, method) {
  return method === "GET" && (/^\/sales-app\/[^/]+$/.test(path) || /^\/sales-manifest\/[^/]+\.webmanifest$/.test(path) || /^\/reseller-control\/[^/]+$/.test(path) || path === "/assets/bluepanel-icon.svg");
}
async function recordMetric(env, kind, path, status, duration) {
  try { await env.EDGE_DB.prepare("INSERT INTO edge_metrics(kind,path,status,duration_ms,created_at) VALUES(?,?,?,?,?)").bind(kind, String(path).slice(0,400), Number(status || 0), Number(duration || 0), nowIso()).run(); } catch (_) {}
}
async function forwardToCore(request, env, settings, ctx, options = {}) {
  if (!hasCoreServiceBinding(env)) return fail("Service Binding با نام CORE_WORKER روی Worker دوم متصل نیست", 503, "CORE_BINDING_MISSING");
  const start = Date.now();
  const incoming = new URL(request.url);
  const headers = new Headers(request.headers);
  ["host","content-length","cf-ray","cf-visitor","cf-ew-via","cdn-loop"].forEach(h => headers.delete(h));
  headers.set("x-bluepanel-service-hop", "edge-to-core");
  headers.set("x-bluepanel-edge-delivery", "1");
  const publicOrigin = String(request.headers.get("x-bluepanel-public-origin") || settings.public_origin || (!isInternalHost(incoming.hostname) ? incoming.origin : ""));
  if (publicOrigin) headers.set("x-bluepanel-public-origin", publicOrigin);
  headers.set("x-forwarded-host", incoming.host);
  const init = { method: request.method, headers, redirect: "manual" };
  if (!["GET","HEAD"].includes(request.method)) init.body = request.body;
  const upstream = await env.CORE_WORKER.fetch(new Request(request.url, init));
  const responseHeaders = new Headers(upstream.headers);
  responseHeaders.set("x-bluepanel-edge", EDGE_VERSION);
  responseHeaders.set("x-bluepanel-upstream", "core-service-binding");
  ctx?.waitUntil(recordMetric(env, options.cacheHit ? "cache" : "proxy", incoming.pathname, upstream.status, Date.now() - start));
  return new Response(upstream.body, { status: upstream.status, statusText: upstream.statusText, headers: responseHeaders });
}
async function queueWebhook(request, env, ctx) {
  const settings = await getSettings(env);
  if (!hasCoreServiceBinding(env)) return fail("Service Binding با نام CORE_WORKER متصل نیست", 503, "CORE_BINDING_MISSING");
  const url = new URL(request.url);
  const body = await request.text();
  if (body.length > 2_000_000) return fail("بدنه Webhook بیش از حد بزرگ است", 413, "PAYLOAD_TOO_LARGE");
  if (hasProcessorServiceBinding(env)) {
    try {
      const headers = new Headers(request.headers);
      ["host","content-length","cf-ray","cf-visitor","cf-ew-via","cdn-loop"].forEach(h => headers.delete(h));
      headers.set("x-bluepanel-service-hop", "edge-to-processor");
      if (settings.public_origin) headers.set("x-bluepanel-public-origin", settings.public_origin);
      const processorResponse = await env.PROCESSOR_WORKER.fetch(new Request(request.url, { method: request.method, headers, body, redirect: "manual" }));
      if (processorResponse.ok) return processorResponse;
    } catch (error) { console.error("processor webhook fallback", error); }
  }
  const id = randomId("edgejob");
  const ts = nowIso();
  await env.EDGE_DB.prepare("INSERT INTO edge_jobs(id,method,path_query,headers_json,body_text,status,attempts,next_attempt_at,created_at,updated_at) VALUES(?,?,?,?,?,'pending',0,?,?,?)")
    .bind(id, request.method, url.pathname + url.search, JSON.stringify(selectedHeaders(request.headers)), body, ts, ts, ts).run();
  ctx.waitUntil(processPendingJobs(env, 20));
  return json({ ok: true, queued: true, id }, 200);
}
async function deliverJob(env, id) {
  const job = await env.EDGE_DB.prepare("SELECT * FROM edge_jobs WHERE id=? AND status='pending'").bind(id).first();
  if (!job) return { skipped: true };
  const settings = await getSettings(env);
  const start = Date.now();
  try {
    if (!hasCoreServiceBinding(env)) throw new Error("CORE_WORKER binding missing");
    const headers = new Headers(JSON.parse(job.headers_json || "{}"));
    headers.set("x-bluepanel-service-hop", "edge-to-core");
    headers.set("x-bluepanel-edge-delivery", "1");
    if (!headers.get("x-bluepanel-public-origin") && settings.public_origin) headers.set("x-bluepanel-public-origin", settings.public_origin);
    const targetOrigin = headers.get("x-bluepanel-public-origin") || settings.public_origin || "https://bluepanel-core.internal";
    const response = await env.CORE_WORKER.fetch(new Request(targetOrigin + job.path_query, { method: job.method, headers, body: job.body_text, redirect: "manual" }));
    const raw = await response.text();
    if (!response.ok) throw new Error("Core HTTP " + response.status + (raw ? ": " + raw.slice(0, 240) : ""));
    await env.EDGE_DB.prepare("DELETE FROM edge_jobs WHERE id=?").bind(id).run();
    await setSettings(env, { last_core_ok_at: nowIso(), last_core_error: "" });
    await recordMetric(env, "webhook", job.path_query, response.status, Date.now() - start);
    return { delivered: true };
  } catch (error) {
    const attempts = Number(job.attempts || 0) + 1;
    const delay = Math.min(900, Math.max(5, Math.pow(2, Math.min(8, attempts))));
    const next = new Date(Date.now() + delay * 1000).toISOString();
    await env.EDGE_DB.prepare("UPDATE edge_jobs SET attempts=?,next_attempt_at=?,last_error=?,updated_at=? WHERE id=?").bind(attempts, next, String(error?.message || error).slice(0, 900), nowIso(), id).run();
    await setSettings(env, { last_core_error: String(error?.message || error).slice(0, 800) });
    await recordMetric(env, "webhook_error", job.path_query, 0, Date.now() - start);
    return { delivered: false, error: error.message || String(error) };
  }
}
async function processPendingJobs(env, limit = 50) {
  await ensureDb(env);
  const rows = await env.EDGE_DB.prepare("SELECT id FROM edge_jobs WHERE status='pending' AND next_attempt_at<=? ORDER BY created_at ASC LIMIT ?").bind(nowIso(), Math.max(1, Math.min(200, Number(limit || 50)))).all();
  let delivered = 0, failed = 0;
  for (let i = 0; i < (rows.results || []).length; i += 5) {
    const results = await Promise.all((rows.results || []).slice(i, i + 5).map(x => deliverJob(env, x.id)));
    for (const r of results) r?.delivered ? delivered++ : failed++;
  }
  return { checked: (rows.results || []).length, delivered, failed };
}
async function proxyRequest(request, env, ctx) {
  const settings = await getSettings(env);
  if (!hasCoreServiceBinding(env)) return fail("Service Binding با نام CORE_WORKER متصل نیست", 503, "CORE_BINDING_MISSING");
  const url = new URL(request.url);
  if (!isAllowedProxyPath(url.pathname)) return fail("این مسیر در ورکر دوم مجاز نیست", 404, "NOT_FOUND");
  if (isQueuedWebhook(url.pathname, request.method)) return queueWebhook(request, env, ctx);
  if (isCacheable(url.pathname, request.method)) {
    if (hasProcessorServiceBinding(env)) {
      const delegated = await forwardToProcessor(request, env, ctx);
      if (delegated && delegated.status !== 503) return delegated;
    }
    const cache = caches.default;
    const key = new Request(url.toString(), { method: "GET" });
    const cached = await cache.match(key);
    if (cached) {
      const headers = new Headers(cached.headers); headers.set("x-bluepanel-edge-cache", "HIT");
      ctx.waitUntil(recordMetric(env, "cache_hit", url.pathname, cached.status, 0));
      return new Response(cached.body, { status: cached.status, headers });
    }
    const response = await forwardToCore(request, env, settings, ctx);
    if (response.ok && !response.headers.has("set-cookie")) {
      const copy = new Response(response.clone().body, { status: response.status, headers: response.headers });
      copy.headers.set("cache-control", "public,max-age=" + Math.max(10, Math.min(300, Number(settings.cache_seconds || 45))));
      copy.headers.set("x-bluepanel-edge-cache", "MISS");
      ctx.waitUntil(cache.put(key, copy.clone()));
      return copy;
    }
    return response;
  }
  return forwardToCore(request, env, settings, ctx);
}

return {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    try {
      await rememberPublicOrigin(request, env, ctx);
      if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: { "access-control-allow-origin": "*", "access-control-allow-methods": "GET,POST,PUT,DELETE,OPTIONS", "access-control-allow-headers": "content-type,authorization,x-telegram-init-data,x-web-session,x-telegram-bot-api-secret-token" } });
      if (path === "/__bluepanel/service/edge-health" && isInternalHost(url.hostname)) {
        const bindingDetected = Boolean(env.EDGE_DB);
        let databaseQueryOk = false, pendingJobs = 0;
        if (bindingDetected) {
          try { await ensureDb(env); await env.EDGE_DB.prepare("SELECT 1 AS ok").first(); databaseQueryOk = true; const p = await env.EDGE_DB.prepare("SELECT COUNT(*) AS count FROM edge_jobs WHERE status='pending'").first(); pendingJobs = Number(p?.count || 0); } catch (_) {}
        }
        const probeId = request.headers.get("x-bluepanel-probe-id") || "";
        return json({ success: true, ok: bindingDetected && databaseQueryOk, role: "bluepanel-edge", service: "bluepanel-edge", version: EDGE_VERSION, split_runtime: true, role_bundle: "edge", binding_detected: bindingDetected, database_query_ok: databaseQueryOk, core_binding_detected: hasCoreServiceBinding(env), processor_binding_detected: hasProcessorServiceBinding(env), pending_jobs: pendingJobs, checked_at: nowIso(), probe_id: probeId, runtime_bindings: { CORE_WORKER: edgeBindingRuntimeInfo(env, "CORE_WORKER"), PROCESSOR_WORKER: edgeBindingRuntimeInfo(env, "PROCESSOR_WORKER") } }, bindingDetected && databaseQueryOk ? 200 : 500, { "x-bluepanel-role": "bluepanel-edge", "x-bluepanel-version": EDGE_VERSION, "x-bluepanel-probe-id": probeId });
      }
      if (["/__bluepanel/service/health", "/__bluepanel/service/diagnostics"].includes(path) && isInternalHost(url.hostname)) {
        const status = await setupStatus(env);
        const probeId = request.headers.get("x-bluepanel-probe-id") || "";
        return json({ success: true, ok: status.binding_detected === true && status.database_query_ok !== false, role: "bluepanel-edge", service: "bluepanel-edge", connection_mode: "service_binding", script_name: status.public_origin ? inferScriptName(new URL(status.public_origin).hostname) : "", probe_id: probeId, ...status }, status.binding_detected === true && status.database_query_ok !== false ? 200 : 500, { "x-bluepanel-role": "bluepanel-edge", "x-bluepanel-version": EDGE_VERSION, "x-bluepanel-probe-id": probeId });
      }
      if (path === "/" && request.method === "GET") return renderSetupPage(request, env);
      if (path === "/setup" && request.method === "POST") return setupEdge(request, env, true);
      if (path === "/api/setup/status" && request.method === "GET") return json(await setupStatus(env));
      if (path === "/api/setup" && request.method === "POST") return setupEdge(request, env);
      if (["/api/edge/discovery", "/api/discovery", "/.well-known/bluepanel-edge", "/bluepanel-edge", "/edge/discovery"].includes(path) && request.method === "GET") return edgeDiscovery(request, env);
      if (["/api/pair/confirm", "/api/edge/pair", "/pair/confirm", "/edge/pair"].includes(path) && request.method === "POST") return pairConfirm(request, env);
      if (["/api/internal/health", "/api/edge/health", "/internal/health", "/edge/health", "/health"].includes(path) && ["GET", "POST"].includes(request.method)) return edgeDiscovery(request, env);
      return proxyRequest(request, env, ctx);
    } catch (error) {
      console.error("edge fetch error", error);
      return fail(error?.message || error, 500, "INTERNAL_ERROR");
    }
  },
  async scheduled(controller, env, ctx) {
    ctx.waitUntil((async () => {
      try {
        if (hasProcessorServiceBinding(env)) {
          try { await env.PROCESSOR_WORKER.fetch(new Request("https://bluepanel-processor.internal/__bluepanel/service/process", { method: "POST", headers: { "x-bluepanel-service-hop": "edge-scheduled" } })); }
          catch (_) { await processPendingJobs(env, 100); }
        } else {
          await processPendingJobs(env, 100);
        }
        await env.EDGE_DB.prepare("DELETE FROM edge_metrics WHERE created_at<?").bind(new Date(Date.now() - 7 * 86400000).toISOString()).run();
        await env.EDGE_DB.prepare("DELETE FROM edge_jobs WHERE attempts>25 AND updated_at<?").bind(new Date(Date.now() - 3 * 86400000).toISOString()).run();
      } catch (error) { console.error("edge scheduled error", error); }
    })());
  }
};

})();


function bluePanelSplitIsCentralManagementPath(path) {
  return ["/control", "/admin", "/panel", "/dashboard", "/control-advanced", "/auth/control/magic"].includes(path) ||
    path === "/api/auth/control/status" ||
    path === "/api/auth/control/login" ||
    path === "/api/auth/web/logout" ||
    path.startsWith("/api/admin/control/");
}

async function bluePanelSplitForwardManagementToCore(request, env, role) {
  const apiLike = new URL(request.url).pathname.startsWith("/api/");
  if (!env?.CORE_WORKER || typeof env.CORE_WORKER.fetch !== "function") {
    const payload = { success: false, ok: false, version: "2.9.0", role, code: "CORE_BINDING_MISSING", error: "Service Binding با نام CORE_WORKER به Worker مرکزی متصل نیست" };
    return new Response(apiLike ? JSON.stringify(payload) : payload.error, { status: 503, headers: { "content-type": apiLike ? "application/json; charset=utf-8" : "text/plain; charset=utf-8", "cache-control": "no-store", "x-bluepanel-role": role } });
  }
  const sourceUrl = new URL(request.url);
  const targetUrl = "https://bluepanel-core.internal" + sourceUrl.pathname + sourceUrl.search;
  const first = new Request(targetUrl, request);
  const headers = new Headers(first.headers);
  headers.set("x-bluepanel-service-hop", role + "-management-to-core");
  headers.set("x-bluepanel-public-origin", sourceUrl.origin);
  headers.set("x-bluepanel-original-host", sourceUrl.host);
  const response = await env.CORE_WORKER.fetch(new Request(first, { headers, redirect: "manual" }));
  const outHeaders = new Headers(response.headers);
  outHeaders.set("x-bluepanel-management-proxy", role + "-to-core");
  outHeaders.set("cache-control", "no-store");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers: outHeaders });
}

function bluePanelSplitRuntimeError(request, error, role) {
  const path = new URL(request.url).pathname;
  const apiLike = path.startsWith("/api/") || path.startsWith("/sales-api/") || path.startsWith("/reseller-control-api/");
  const payload = { success: false, ok: false, version: "2.9.0", role, code: "WORKER_RUNTIME_ERROR", error: String(error?.message || "خطای داخلی Worker").replace(/[\u0000-\u001F]/g, " ").slice(0, 900) };
  return new Response(apiLike ? JSON.stringify(payload) : payload.error, { status: 500, headers: { "content-type": apiLike ? "application/json; charset=utf-8" : "text/plain; charset=utf-8", "cache-control": "no-store", "x-bluepanel-role": role } });
}


export default {
  async fetch(request, env, ctx) {
    try {
      const path = new URL(request.url).pathname.replace(/\/+$/, "") || "/";
      if (bluePanelSplitIsCentralManagementPath(path)) return await bluePanelSplitForwardManagementToCore(request, env, "bluepanel-edge");
      return await BLUEPANEL_EDGE_APP.fetch(request, env, ctx);
    } catch (error) {
      console.error("BluePanel edge fetch error", error);
      return bluePanelSplitRuntimeError(request, error, "bluepanel-edge");
    }
  },
  async scheduled(controller, env, ctx) {
    if (BLUEPANEL_EDGE_APP.scheduled) return BLUEPANEL_EDGE_APP.scheduled(controller, env, ctx);
  }
};
