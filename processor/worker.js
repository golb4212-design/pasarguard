/* BLUEPANEL_PROCESSOR_WORKER
 * Fully split BluePanel runtime.
 * Version: 3.2.1
 * Generated from the last stable 2.9.0 codebase.
 * Extracted application declarations: 88954 bytes.
 */

const APP_VERSION = "3.2.1";

const RESELLER_BACKUP_FIELDS = Object.freeze([
  "brand_name","welcome_text","support_username","card_holder","card_number","bank_name","iban",
  "trial_enabled","trial_data_limit_bytes","trial_duration_days","trial_duration_hours",
  "referral_reward_toman","referral_reward_type","referral_reward_percent","referral_banner_file_id","referral_banner_file_type",
  "recharge_bonus_percent","forward_enabled","join_enabled","join_channels_json",
  "cashback_enabled","cashback_percent","cashback_min_purchase_toman","cashback_max_toman",
  "notifications_enabled","expiry_reminder_hours","usage_reminder_percent","ticketing_enabled",
  "phone_verification_required","ticket_auto_close_hours","daily_report_enabled","daily_report_hour_utc",
  "blupal_enabled","blupal_base_url","blupal_card_number","miniapp_enabled",
  "sales_automation_enabled","abandoned_reminder_minutes","winback_days","loyalty_enabled","loyalty_profile",
  "fraud_protection_enabled","order_cooldown_seconds","max_pending_orders","daily_order_limit",
  "daily_wallet_charge_limit_toman","duplicate_receipt_protection","auto_block_risk_score",
  "payment_card_enabled","payment_wallet_enabled","payment_method_order","payment_default_method"
]);



const CENTRAL_REPORT_TOPICS = Object.freeze([
  { key: "overview", title: "📊 گزارش جامع همه ربات‌ها", color: 7322096 },
  { key: "nightly", title: "🌙 گزارش شبانه", color: 13338331 },
  { key: "bots", title: "🤖 گزارش ربات‌های نماینده", color: 9367192 },
  { key: "orders", title: "🛍 گزارش‌های خرید", color: 16766590 },
  { key: "payments", title: "💰 گزارش مالی", color: 16478047 },
  { key: "service_purchases", title: "📌 گزارش خرید خدمات", color: 7322096 },
  { key: "service_imports", title: "🔗 اتصال سرویس‌های قبلی", color: 9367192 },
  { key: "trial_accounts", title: "🔑 گزارش اکانت تست", color: 13338331 },
  { key: "announcements", title: "📝 گزارش اطلاع‌رسانی‌ها", color: 9367192 },
  { key: "commissions", title: "🎁 گزارش پورسانت‌ها", color: 16766590 },
  { key: "backups", title: "🤖 بکاپ ربات", color: 16478047 },
  { key: "customers", title: "👥 گزارش کاربران", color: 7322096 },
  { key: "support", title: "🎫 گزارش پشتیبانی", color: 13338331 },
  { key: "errors", title: "❌ گزارش خطاها", color: 16749490 },
  { key: "misc", title: "⚙️ سایر گزارشات", color: 9367192 },
  { key: "system", title: "🛠 گزارش سامانه و بروزرسانی", color: 7322096 }
]);

const RESELLER_REPORT_TOPICS = Object.freeze([
  { key: "overview", title: "📊 گزارش جامع ربات", color: 7322096 },
  { key: "nightly", title: "🌙 گزارش شبانه", color: 13338331 },
  { key: "orders", title: "🛍 گزارش‌های خرید", color: 16766590 },
  { key: "payments", title: "💰 گزارش مالی", color: 16478047 },
  { key: "service_purchases", title: "📌 گزارش خرید خدمات", color: 7322096 },
  { key: "service_imports", title: "🔗 اتصال سرویس‌های قبلی", color: 9367192 },
  { key: "trial_accounts", title: "🔑 گزارش اکانت تست", color: 13338331 },
  { key: "announcements", title: "📝 گزارش اطلاع‌رسانی‌ها", color: 9367192 },
  { key: "commissions", title: "🎁 گزارش پورسانت‌ها", color: 16766590 },
  { key: "backups", title: "🤖 بکاپ ربات", color: 16478047 },
  { key: "customers", title: "👥 گزارش کاربران", color: 7322096 },
  { key: "support", title: "🎫 گزارش پشتیبانی", color: 13338331 },
  { key: "errors", title: "❌ گزارش خطاها", color: 16749490 },
  { key: "misc", title: "⚙️ سایر گزارشات", color: 9367192 }
]);

const GIB = 1024 * 1024 * 1024;

const RESELLER_LICENSE_DAYS = 30;

const RESELLER_LICENSE_MS = RESELLER_LICENSE_DAYS * 24 * 60 * 60 * 1000;

const JSON_HEADERS = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };

let schemaReady = false;

let schemaReadyPromise = null;

let settingsCache = null;

let settingsCacheAt = 0;

let encryptionKeyCache = null;

let encryptionKeyCacheSource = "";

const resellerTokenCache = new Map();

const SETTINGS_CACHE_TTL_MS = 15000;

const RESELLER_TOKEN_CACHE_TTL_MS = 300000;

const DEFAULT_SETTINGS = {
  install_completed: "false",
  last_runtime_version: "",
  setup_password_hash: "",
  setup_password_salt: "",
  brand_name: "پنل نمایندگی پاسارگارد",
  price_per_gb: "2000",
  setup_fee: "0",
  reseller_bot_setup_fee: "0",
  reseller_bot_license_renewal_fee: "0",
  reseller_store_bot_setup_fee: "0",
  reseller_store_bot_license_renewal_fee: "0",
  reseller_master_bot_setup_fee: "0",
  reseller_master_bot_license_renewal_fee: "0",
  master_min_markup_toman: "100",
  agency_sales_enabled: "true",
  reseller_bot_sales_enabled: "true",
  central_recharge_bonus_percent: "0",
  central_trial_enabled: "false",
  central_trial_data_limit_bytes: "1073741824",
  central_trial_duration_hours: "24",
  central_join_enabled: "false",
  central_join_channels: "[]",
  release_channel_enabled: "false",
  release_channel_chat_id: "",
  release_channel_title: "",
  release_channel_url: "",
  release_last_announced_version: "",
  release_announcement_claim_version: "",
  release_last_announcement_message_id: "",
  release_last_announcement_at: "",
  release_last_announcement_error: "",
  central_report_hour_utc: "18",
  central_report_last_daily_date: "",
  min_recharge: "100000",
  support_username: "",
  blupal_base_url: "https://blupal.net/api",
  blupal_api_key: "",
  blupal_card_number: "",
  blupal_webhook_token: "",
  payment_poll_enabled: "true",
  auto_delete_pending_invoices: "true",
  pending_invoice_ttl_hours: "24",
  usage_sync_enabled: "true",
  auto_update: "true",
  auto_update_interval_seconds: "5",
  auto_update_last_check_epoch: "0",
  auto_update_last_status: "never",
  auto_update_last_version: "",
  auto_update_last_worker_sha: "",
  auto_update_last_error: "",
  auto_update_last_source: "",
  bot_token: "",
  central_bot_telegram_id: "",
  central_bot_username: "",
  central_bot_name: "",
  central_bot_token_updated_at: "",
  central_bot_admin_ids_updated_at: "",
  admin_ids: "",
  auth_max_age_seconds: "86400",
  web_login_enabled: "true",
  web_session_days: "30",
  sales_web_otp_minutes: "10",
  allow_dev_auth: "false",
  dev_telegram_id: "",
  app_encryption_key: "",
  app_url: "",
  telegram_webhook_secret: "",
  pasarguard_panel_url: "",
  pasarguard_access_token: "",
  pasarguard_admin_username: "",
  pasarguard_admin_password: "",
  pasarguard_reseller_role_id: "",
  pasarguard_reseller_role_name: "",
  pasarguard_sales_role_id: "",
  pasarguard_sales_role_name: "نماینده فروش",
  pasarguard_master_role_id: "",
  pasarguard_master_role_name: "مستر نمایندگی",
  pasarguard_set_telegram_id: "true",
  pasarguard_admin_data_limit_bytes: "0",
  pasarguard_sub_domain: "",
  pasarguard_support_url: "",
  github_repo: "golb4212-design/pasarguard",
  github_branch: "main",
  github_worker_file: "core/worker.js",
  github_version_file: "version",
  github_token: "",
  cf_account_id: "",
  cf_api_token: "",
  cf_worker_name: "",
  edge_worker_enabled: "true",
  edge_worker_mode: "service_binding",
  edge_worker_manual_disabled: "false",
  edge_worker_url: "",
  edge_worker_api_key: "",
  edge_worker_script_name: "",
  edge_worker_status: "disconnected",
  edge_worker_last_check_at: "",
  edge_worker_last_error: "",
  edge_worker_last_version: "",
  edge_worker_last_sha: "",
  edge_worker_last_deployed_at: "",
  edge_worker_route_mode: "reseller",
  github_edge_worker_file: "edge/worker.js",
  github_processor_worker_file: "processor/worker.js",
  python_helper_auto_provision: "true",
  python_helper_worker_name: "",
  python_helper_last_check_epoch: "0",
  python_helper_last_status: "never",
  python_helper_last_error: "",
  python_helper_last_deployed_at: "",
  python_helper_last_version: ""
};

function nowIso() {
  return new Date().toISOString();
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...JSON_HEADERS, ...extraHeaders }
  });
}

function fail(message, status = 400, code = "BAD_REQUEST") {
  return json({ success: false, error: message, code }, status);
}

function id(prefix = "id") {
  return prefix + "_" + crypto.randomUUID().replace(/-/g, "");
}

function clampInt(value, min = 0, max = Number.MAX_SAFE_INTEGER) {
  const n = Number.parseInt(String(value), 10);
  if (!Number.isFinite(n)) return min;
  return Math.max(min, Math.min(max, n));
}

function cleanText(value, max = 200) {
  return String(value ?? "").trim().slice(0, max);
}

function normalizeUsername(value) {
  let text = String(value || "").toLowerCase().replace(/[^a-z0-9_]/g, "");
  if (!text) text = "reseller_" + Math.random().toString(36).slice(2, 9);
  if (!/^[a-z]/.test(text)) text = "u_" + text;
  return text.slice(0, 32);
}

async function getSettings(env) {
  await ensureDb(env);
  const currentTime = Date.now();
  if (settingsCache && currentTime - settingsCacheAt < SETTINGS_CACHE_TTL_MS) return { ...settingsCache };
  const result = await env.PASARGUARD_DB.prepare("SELECT key, value FROM app_settings").all();
  const settings = { ...DEFAULT_SETTINGS };
  for (const row of result.results || []) settings[row.key] = row.value;
  const legacy = {
    bot_token: "BOT_TOKEN", admin_ids: "ADMIN_IDS", auth_max_age_seconds: "AUTH_MAX_AGE_SECONDS",
    allow_dev_auth: "ALLOW_DEV_AUTH", dev_telegram_id: "DEV_TELEGRAM_ID",
    app_encryption_key: "APP_ENCRYPTION_KEY", app_url: "APP_URL",
    telegram_webhook_secret: "TELEGRAM_WEBHOOK_SECRET",
    pasarguard_panel_url: "PASARGUARD_PANEL_URL", pasarguard_access_token: "PASARGUARD_ACCESS_TOKEN",
    pasarguard_admin_username: "PASARGUARD_ADMIN_USERNAME", pasarguard_admin_password: "PASARGUARD_ADMIN_PASSWORD",
    pasarguard_reseller_role_id: "PASARGUARD_RESELLER_ROLE_ID", pasarguard_reseller_role_name: "PASARGUARD_RESELLER_ROLE_NAME",
    pasarguard_sales_role_id: "PASARGUARD_SALES_ROLE_ID", pasarguard_sales_role_name: "PASARGUARD_SALES_ROLE_NAME",
    pasarguard_master_role_id: "PASARGUARD_MASTER_ROLE_ID", pasarguard_master_role_name: "PASARGUARD_MASTER_ROLE_NAME",
    pasarguard_set_telegram_id: "PASARGUARD_SET_TELEGRAM_ID", pasarguard_admin_data_limit_bytes: "PASARGUARD_ADMIN_DATA_LIMIT_BYTES",
    pasarguard_sub_domain: "PASARGUARD_SUB_DOMAIN", pasarguard_support_url: "PASARGUARD_SUPPORT_URL",
    github_repo: "GITHUB_REPO", github_token: "GITHUB_TOKEN", cf_account_id: "CF_ACCOUNT_ID",
    cf_api_token: "CF_API_TOKEN", cf_worker_name: "CF_WORKER_NAME"
  };
  for (const [key, envKey] of Object.entries(legacy)) {
    if (!settings[key] && env[envKey] !== undefined) settings[key] = String(env[envKey]);
  }
  settingsCache = Object.freeze({ ...settings });
  settingsCacheAt = currentTime;
  return { ...settingsCache };
}

function normalizeResellerLicenseType(value) {
  return String(value || "store").toLowerCase() === "master" ? "master" : "store";
}

function resellerHasIndependentPanel(bot) {
  return Boolean(bot) && !bot.parent_bot_id && String(bot.purchase_source || "central") === "central";
}

function resellerBotCanCreateDownline(bot) {
  return resellerHasIndependentPanel(bot) && normalizeResellerLicenseType(bot?.license_type) === "master";
}

function centralMinimumDownlinePrice(settings) {
  const base = clampInt(settings?.price_per_gb || 0, 0, 1000000000);
  const markup = Math.max(1, clampInt(settings?.master_min_markup_toman || 100, 1, 1000000000));
  return base + markup;
}

async function audit(env, actorUserId, action, details = {}) {
  await env.PASARGUARD_DB.prepare("INSERT INTO audit_logs(id, actor_user_id, action, details, created_at) VALUES(?, ?, ?, ?, ?)")
    .bind(id("log"), actorUserId || null, action, JSON.stringify(details), nowIso()).run();
}

function base64ToBytes(text) {
  const binary = atob(text);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function encryptionKey(env) {
  const settings = await getSettings(env);
  const source = String(settings.app_encryption_key || settings.bot_token || "change-me");
  if (encryptionKeyCache && encryptionKeyCacheSource === source) return encryptionKeyCache;
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(source));
  encryptionKeyCache = await crypto.subtle.importKey("raw", digest, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
  encryptionKeyCacheSource = source;
  return encryptionKeyCache;
}

async function decryptSecret(value, env) {
  if (!value || !value.includes(".")) return "";
  const [ivB64, dataB64] = value.split(".");
  const key = await encryptionKey(env);
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: base64ToBytes(ivB64) },
    key,
    base64ToBytes(dataB64)
  );
  return new TextDecoder().decode(decrypted);
}

async function telegramApi(env, method, body) {
  const settings = await getSettings(env);
  if (!settings.bot_token) throw new Error("توکن ربات در پنل مدیریت تنظیم نشده است");
  const response = await fetch("https://api.telegram.org/bot" + settings.bot_token + "/" + method, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.ok === false) throw new Error(data.description || "Telegram API error");
  return data;
}

function pasarguardBaseUrl(settings) {
  const raw = String(settings.pasarguard_panel_url || "").trim();
  if (!raw) throw new Error("آدرس پنل PasarGuard در مدیریت تنظیم نشده است");
  return raw.replace(/\/+$/, "").replace(/\/dashboard$/i, "");
}

function normalizeBlupalBaseUrl(value) {
  const raw = String(value || "https://blupal.net/api").trim();
  let url;
  try { url = new URL(raw); } catch (_) { throw new Error("آدرس پایه بلوپال معتبر نیست"); }
  if (url.protocol !== "https:" || url.hostname.toLowerCase() !== "blupal.net") {
    throw new Error("آدرس پایه بلوپال باید روی دامنه امن blupal.net باشد");
  }
  const path = url.pathname.replace(/\/+$/, "") || "/api";
  if (path !== "/api") throw new Error("مسیر پایه بلوپال باید /api باشد");
  return "https://blupal.net/api";
}

function normalizePaymentStatus(value) {
  const status = String(value || "PENDING").toUpperCase();
  return ["PENDING", "PAID", "EXPIRED", "CANCELED"].includes(status) ? status : "PENDING";
}

function botEscape(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function botMoney(value) {
  return Number(value || 0).toLocaleString("fa-IR");
}

function botGb(value) {
  return (Number(value || 0) / GIB).toLocaleString("fa-IR", { maximumFractionDigits: 2 }) + " GB";
}

function botDate(value) {
  if (!value) return "—";
  try {
    return new Date(value).toLocaleString("fa-IR", {
      year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"
    });
  } catch (_) {
    return String(value);
  }
}

async function telegramApiWithToken(token, method, body) {
  if (!token) throw new Error("توکن ربات تنظیم نشده است");
  const response = await fetch("https://api.telegram.org/bot" + token + "/" + method, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body || {})
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.ok === false) throw new Error(data.description || "Telegram API error");
  return data;
}



function reportScopeKey(botId = "") { return botId ? "reseller:" + String(botId) : "central"; }
function reportTopicDefinition(scopeType, topicKey) { const aliases={services:"service_purchases",service:"service_purchases",imports:"service_imports",legacy:"service_imports",subscription_import:"service_imports",security:"errors",error:"errors",trials:"trial_accounts",trial:"trial_accounts",daily:"nightly",backup:"backups",announcement:"announcements",commission:"commissions",finance:"payments",purchases:"orders",other:"misc"};const normalizedKey=aliases[String(topicKey||"")]||String(topicKey||"overview");const list=scopeType==="central"?CENTRAL_REPORT_TOPICS:RESELLER_REPORT_TOPICS;return list.find(x=>x.key===normalizedKey)||list[0]; }
async function queueReportEvent(env,botId,topicKey,title,messageHtml,dedupeKey){
  const ts=nowIso();
  try{
    await env.PASARGUARD_DB.prepare(`INSERT OR IGNORE INTO report_outbox(
      id,bot_id,topic_key,title,message_html,dedupe_key,central_status,reseller_status,attempts,next_attempt_at,created_at,updated_at
    ) VALUES(?,?,?,?,?,?,'pending','pending',0,?,?,?)`)
      .bind(id("rpt"),botId,topicKey,cleanText(title,160),cleanText(messageHtml,3500),cleanText(dedupeKey,220),ts,ts,ts).run();
  }catch(_){}
}
async function ensureReportTopic(env,forum,scopeType,topicKey,apiCall){
  const scopeKey=forum.scope_key,definition=reportTopicDefinition(scopeType,topicKey);
  let topic=await env.PASARGUARD_DB.prepare("SELECT * FROM report_forum_topics WHERE scope_key=? AND topic_key=?").bind(scopeKey,definition.key).first();
  if(topic?.thread_id){
    if(String(topic.title||"")!==definition.title){
      try{await apiCall("editForumTopic",{chat_id:String(forum.chat_id),message_thread_id:Number(topic.thread_id),name:definition.title});}
      catch(error){if(!/not modified/i.test(String(error?.message||error)))throw error;}
      await env.PASARGUARD_DB.prepare("UPDATE report_forum_topics SET title=?,updated_at=? WHERE scope_key=? AND topic_key=?")
        .bind(definition.title,nowIso(),scopeKey,definition.key).run();
      topic={...topic,title:definition.title};
    }
    return topic;
  }
  const created=await apiCall("createForumTopic",{chat_id:String(forum.chat_id),name:definition.title,icon_color:definition.color});
  const threadId=Number(created?.result?.message_thread_id||0);if(!threadId)throw new Error("ساخت Topic گزارش ناموفق بود");const ts=nowIso();
  await env.PASARGUARD_DB.prepare(`INSERT INTO report_forum_topics(scope_key,topic_key,thread_id,title,created_at,updated_at) VALUES(?,?,?,?,?,?)
    ON CONFLICT(scope_key,topic_key) DO UPDATE SET thread_id=excluded.thread_id,title=excluded.title,updated_at=excluded.updated_at`).bind(scopeKey,definition.key,threadId,definition.title,ts,ts).run();
  return {scope_key:scopeKey,topic_key:definition.key,thread_id:threadId,title:definition.title};
}
async function sendReportMessage(env,scopeKey,scopeType,topicKey,text,apiCall){
  const forum=await env.PASARGUARD_DB.prepare("SELECT * FROM report_forums WHERE scope_key=? AND status='active'").bind(scopeKey).first();
  if(!forum)return {skipped:true,reason:"not_configured"};
  let topic=await ensureReportTopic(env,forum,scopeType,topicKey,apiCall);
  try{
    const r=await apiCall("sendMessage",{chat_id:String(forum.chat_id),message_thread_id:Number(topic.thread_id),text:cleanText(text,3900),parse_mode:"HTML",disable_web_page_preview:true});
    const ts=nowIso();
    await env.PASARGUARD_DB.prepare("UPDATE report_forums SET last_delivery_at=?,last_error=NULL,updated_at=? WHERE scope_key=?").bind(ts,ts,scopeKey).run();
    return {delivered:true,message_id:Number(r?.result?.message_id||0)};
  }catch(error){
    const msg=String(error?.message||error);
    if(/thread|topic|message thread/i.test(msg)){
      await env.PASARGUARD_DB.prepare("DELETE FROM report_forum_topics WHERE scope_key=? AND topic_key=?").bind(scopeKey,topic.topic_key).run();
      topic=await ensureReportTopic(env,forum,scopeType,topicKey,apiCall);
      const r=await apiCall("sendMessage",{chat_id:String(forum.chat_id),message_thread_id:Number(topic.thread_id),text:cleanText(text,3900),parse_mode:"HTML",disable_web_page_preview:true});
      const ts=nowIso();
      await env.PASARGUARD_DB.prepare("UPDATE report_forums SET last_delivery_at=?,last_error=NULL,updated_at=? WHERE scope_key=?").bind(ts,ts,scopeKey).run();
      return {delivered:true,message_id:Number(r?.result?.message_id||0),recreated:true};
    }
    await env.PASARGUARD_DB.prepare("UPDATE report_forums SET last_error=?,updated_at=? WHERE scope_key=?").bind(cleanText(msg,500),nowIso(),scopeKey).run();
    throw error;
  }
}
async function migrateLegacyReportTopicKeys(env,forum,scopeType){
  const pairs=[
    ["services","service_purchases"],
    ["security","errors"]
  ];
  for(const [legacyKey,currentKey] of pairs){
    const legacy=await env.PASARGUARD_DB.prepare("SELECT * FROM report_forum_topics WHERE scope_key=? AND topic_key=?").bind(forum.scope_key,legacyKey).first();
    if(!legacy?.thread_id)continue;
    const current=await env.PASARGUARD_DB.prepare("SELECT thread_id FROM report_forum_topics WHERE scope_key=? AND topic_key=?").bind(forum.scope_key,currentKey).first();
    if(current?.thread_id)continue;
    const definition=reportTopicDefinition(scopeType,currentKey);
    await env.PASARGUARD_DB.prepare("UPDATE report_forum_topics SET topic_key=?,title=?,updated_at=? WHERE scope_key=? AND topic_key=?")
      .bind(currentKey,definition.title,nowIso(),forum.scope_key,legacyKey).run();
  }
}

async function syncConfiguredReportTopics(env,limit=10){
  const rows=await env.PASARGUARD_DB.prepare(`SELECT * FROM report_forums WHERE status='active' ORDER BY updated_at ASC LIMIT ?`)
    .bind(Math.max(1,Math.min(50,Number(limit||10)))).all();
  let forums=0,topics=0,failed=0;
  for(const forum of rows.results||[]){
    const scopeType=String(forum.scope_type||"")==="reseller"?"reseller":"central";
    const definitions=scopeType==="central"?CENTRAL_REPORT_TOPICS:RESELLER_REPORT_TOPICS;
    let apiCall=null;
    try{
      await migrateLegacyReportTopicKeys(env,forum,scopeType);
      if(scopeType==="central") apiCall=(method,body)=>telegramApi(env,method,body);
      else{
        const bot=await env.PASARGUARD_DB.prepare("SELECT * FROM reseller_bots WHERE id=? AND status='active'").bind(forum.bot_id).first();
        if(!bot)throw new Error("ربات نماینده فعال پیدا نشد");
        apiCall=(method,body)=>resellerTelegramApi(env,bot,method,body);
      }
      for(const definition of definitions){
        await ensureReportTopic(env,forum,scopeType,definition.key,apiCall);
        topics++;
      }
      await env.PASARGUARD_DB.prepare("UPDATE report_forums SET last_error=NULL,updated_at=? WHERE scope_key=?")
        .bind(nowIso(),forum.scope_key).run();
      forums++;
    }catch(error){
      failed++;
      await env.PASARGUARD_DB.prepare("UPDATE report_forums SET last_error=?,updated_at=? WHERE scope_key=?")
        .bind(cleanText(String(error?.message||error),500),nowIso(),forum.scope_key).run();
    }
  }
  return {checked:(rows.results||[]).length,forums,topics,failed};
}

async function processReportOutbox(env,limit=100){
  const rows=await env.PASARGUARD_DB.prepare(`SELECT * FROM report_outbox
    WHERE next_attempt_at<=? AND (central_status='pending' OR reseller_status='pending')
    ORDER BY created_at LIMIT ?`).bind(nowIso(),Math.max(1,Math.min(300,Number(limit||100)))).all();
  let delivered=0,failed=0;
  for(const row of rows.results||[]){
    let centralStatus=String(row.central_status||"pending");
    let resellerStatus=String(row.reseller_status||"pending");
    const errors=[];
    let bot=null;
    try{
      if(row.bot_id){
        bot=await env.PASARGUARD_DB.prepare(`SELECT rb.*,u.telegram_id AS owner_telegram_id,u.username AS owner_username,u.first_name AS owner_first_name
          FROM reseller_bots rb JOIN users u ON u.id=rb.user_id WHERE rb.id=?`).bind(row.bot_id).first();
      }
    }catch(error){ errors.push("خواندن ربات: "+String(error?.message||error)); }
    const botHeader=bot
      ? "🤖 ربات: <b>"+botEscape(bot.brand_name||bot.bot_name||bot.bot_username)+"</b> (@"+botEscape(bot.bot_username||"-")+")\n👤 مالک: <code>"+botEscape(bot.owner_telegram_id||"-")+"</code>\n"
      : row.bot_id ? "🤖 شناسه ربات: <code>"+botEscape(row.bot_id)+"</code>\n" : "";
    if(centralStatus==="pending"){
      try{
        const r=await sendReportMessage(env,"central","central",row.topic_key,"<b>"+botEscape(row.title)+"</b>\n━━━━━━━━━━━━━━\n"+botHeader+row.message_html,(m,b)=>telegramApi(env,m,b));
        centralStatus=r.skipped?"skipped":"delivered";
      }catch(error){ errors.push("مرکزی: "+String(error?.message||error)); }
    }
    if(resellerStatus==="pending"){
      if(!bot){ resellerStatus="skipped"; }
      else{
        try{
          const r=await sendReportMessage(env,reportScopeKey(bot.id),"reseller",row.topic_key,"<b>"+botEscape(row.title)+"</b>\n━━━━━━━━━━━━━━\n"+row.message_html,(m,b)=>resellerTelegramApi(env,bot,m,b));
          resellerStatus=r.skipped?"skipped":"delivered";
        }catch(error){ errors.push("نماینده: "+String(error?.message||error)); }
      }
    }
    if(errors.length){
      const attempts=Number(row.attempts||0)+1;
      const next=new Date(Date.now()+Math.min(3600000,15000*Math.pow(2,Math.min(attempts,8)))).toISOString();
      await env.PASARGUARD_DB.prepare("UPDATE report_outbox SET central_status=?,reseller_status=?,attempts=?,next_attempt_at=?,last_error=?,updated_at=? WHERE id=?")
        .bind(centralStatus,resellerStatus,attempts,next,cleanText(errors.join(" | "),600),nowIso(),row.id).run();
      failed++;
    }else{
      await env.PASARGUARD_DB.prepare("UPDATE report_outbox SET central_status=?,reseller_status=?,last_error=NULL,updated_at=? WHERE id=?")
        .bind(centralStatus,resellerStatus,nowIso(),row.id).run();
      delivered++;
    }
  }
  await env.PASARGUARD_DB.prepare("DELETE FROM report_outbox WHERE central_status<>'pending' AND reseller_status<>'pending' AND updated_at<?")
    .bind(new Date(Date.now()-7*86400000).toISOString()).run();
  return {checked:(rows.results||[]).length,delivered,failed};
}

async function processCentralComprehensiveReport(env){
  const forum=await env.PASARGUARD_DB.prepare("SELECT * FROM report_forums WHERE scope_key='central' AND status='active'").first();if(!forum)return {skipped:true};
  const settings=await getSettings(env),now=new Date(),hour=Math.max(0,Math.min(23,Number(settings.central_report_hour_utc||18))),dateKey=now.toISOString().slice(0,10);if(now.getUTCHours()<hour||String(settings.central_report_last_daily_date||"")===dateKey)return {skipped:true};
  const start=dateKey+"T00:00:00.000Z";
  const stats=await env.PASARGUARD_DB.prepare(`SELECT
    (SELECT COUNT(*) FROM reseller_bots) bots_total,(SELECT COUNT(*) FROM reseller_bots WHERE status='active') bots_active,
    (SELECT COUNT(*) FROM reseller_bots WHERE license_type='master' AND status='active') masters_active,
    (SELECT COUNT(*) FROM sales_customers) customers_total,(SELECT COUNT(*) FROM sales_customers WHERE created_at>=?) customers_today,
    (SELECT COUNT(*) FROM sales_orders WHERE created_at>=?) orders_today,(SELECT COUNT(*) FROM sales_orders WHERE status='delivered' AND created_at>=?) delivered_today,
    (SELECT COALESCE(SUM(amount_toman),0) FROM sales_orders WHERE status='delivered' AND created_at>=?) revenue_today,
    (SELECT COUNT(*) FROM sales_orders WHERE status IN ('pending_review','provision_failed')) pending_orders,
    (SELECT COUNT(*) FROM sales_wallet_requests WHERE status='pending_review') pending_wallet,
    (SELECT COUNT(*) FROM sales_tickets WHERE status='waiting_owner') waiting_tickets,
    (SELECT COUNT(*) FROM sales_trials WHERE status='delivered' AND created_at>=?) trials_today,
    (SELECT COUNT(*) FROM sales_security_events WHERE severity IN ('warning','critical') AND created_at>=?) security_today`).bind(start,start,start,start,start,start).first();
  const top=await env.PASARGUARD_DB.prepare(`SELECT rb.brand_name,rb.bot_username,COUNT(o.id) orders_count,COALESCE(SUM(o.amount_toman),0) revenue FROM reseller_bots rb LEFT JOIN sales_orders o ON o.bot_id=rb.id AND o.status='delivered' AND o.created_at>=? GROUP BY rb.id ORDER BY revenue DESC,orders_count DESC LIMIT 5`).bind(start).all();
  const topLines=(top.results||[]).filter(x=>Number(x.orders_count||0)>0).map((x,i)=>(i+1)+". <b>"+botEscape(x.brand_name||x.bot_username)+"</b> · "+botMoney(x.orders_count)+" سفارش · "+botMoney(x.revenue)+" تومان").join("\n")||"امروز فروش موفقی ثبت نشده است.";
  const text="📊 <b>گزارش جامع روزانه همه ربات‌ها</b>\n━━━━━━━━━━━━━━\n📅 تاریخ UTC: <code>"+dateKey+"</code>\n\n🤖 کل ربات‌ها: <b>"+botMoney(stats?.bots_total)+"</b> · فعال: <b>"+botMoney(stats?.bots_active)+"</b> · مستر: <b>"+botMoney(stats?.masters_active)+"</b>\n👥 کل کاربران: <b>"+botMoney(stats?.customers_total)+"</b> · جدید امروز: <b>"+botMoney(stats?.customers_today)+"</b>\n🛒 سفارش امروز: <b>"+botMoney(stats?.orders_today)+"</b> · تحویل: <b>"+botMoney(stats?.delivered_today)+"</b>\n💰 فروش امروز: <b>"+botMoney(stats?.revenue_today)+" تومان</b>\n⏳ سفارش منتظر: <b>"+botMoney(stats?.pending_orders)+"</b> · شارژ منتظر: <b>"+botMoney(stats?.pending_wallet)+"</b>\n🎫 تیکت منتظر: <b>"+botMoney(stats?.waiting_tickets)+"</b> · تست تحویلی: <b>"+botMoney(stats?.trials_today)+"</b>\n⚠️ هشدار امنیتی امروز: <b>"+botMoney(stats?.security_today)+"</b>\n\n🏆 <b>برترین ربات‌های امروز</b>\n"+topLines;
  await sendReportMessage(env,"central","central","nightly",text,(m,b)=>telegramApi(env,m,b));
  await env.PASARGUARD_DB.prepare("INSERT INTO app_settings(key,value,updated_at) VALUES('central_report_last_daily_date',?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at").bind(dateKey,nowIso()).run();settingsCache=null;settingsCacheAt=0;return {sent:true};
}

const agencyPasarguardTokenCache = new Map();

function resellerLicenseState(bot, at = Date.now()) {
  const expiresAt = String(bot?.license_expires_at || "").trim();
  const expiresMs = Date.parse(expiresAt);
  const validExpiry = Number.isFinite(expiresMs) ? expiresMs : 0;
  const remainingMs = Math.max(0, validExpiry - at);
  const active = validExpiry > at;
  return {
    active,
    expired: !active,
    expires_at: expiresAt,
    expires_ms: validExpiry,
    remaining_ms: remainingMs,
    remaining_days: active ? Math.max(1, Math.ceil(remainingMs / 86400000)) : 0,
    renewal_count: Number(bot?.license_renewal_count || 0)
  };
}

function resellerLicenseExpiryLabel(bot) {
  const state = resellerLicenseState(bot);
  return state.expires_at ? botDate(state.expires_at) : "نامشخص";
}

async function processResellerLicenseNotifications(env, limit = 100) {
  const rows = await env.PASARGUARD_DB.prepare(`
    SELECT rb.id,rb.bot_username,rb.brand_name,rb.license_expires_at,rb.license_notice_key,
           rb.license_renewal_count,u.telegram_id AS owner_telegram_id
    FROM reseller_bots rb JOIN users u ON u.id=rb.user_id
    WHERE rb.license_expires_at IS NOT NULL
    ORDER BY rb.license_expires_at ASC LIMIT ?
  `).bind(Math.max(1, Math.min(500, Number(limit || 100)))).all();
  let notified = 0;
  for (const bot of rows.results || []) {
    const state = resellerLicenseState(bot);
    let key = "";
    let title = "";
    if (!state.active) { key = "expired:" + state.expires_at; title = "🔴 لایسنس ربات نماینده منقضی شد"; }
    else if (state.remaining_days <= 1) { key = "day1:" + state.expires_at; title = "⏳ یک روز تا پایان لایسنس ربات نماینده"; }
    else if (state.remaining_days <= 3) { key = "day3:" + state.expires_at; title = "⏳ سه روز تا پایان لایسنس ربات نماینده"; }
    if (!key || key === String(bot.license_notice_key || "")) continue;
    try {
      await telegramApi(env, "sendMessage", {
        chat_id: bot.owner_telegram_id,
        text: title + "\n━━━━━━━━━━━━━━\nربات: <b>@" + botEscape(bot.bot_username) + "</b>\nتاریخ پایان: <b>" + botEscape(resellerLicenseExpiryLabel(bot)) + "</b>\n\nبرای جلوگیری از توقف فروش، لایسنس یک‌ماهه را تمدید کنید.",
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: [[{ text: "🪪 تمدید یک‌ماهه", callback_data: "bot:sales:renew" }], [{ text: "🤖 مشاهده ربات نماینده", callback_data: "bot:sales" }]] }
      });
      await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET license_notice_key=?,updated_at=? WHERE id=?").bind(key, nowIso(), bot.id).run();
      notified++;
    } catch (_) {}
  }
  return { checked: (rows.results || []).length, notified };
}

async function resolveResellerServiceAgency(env, bot) {
  if (!bot?.parent_bot_id) return bot;
  const parent = await env.PASARGUARD_DB.prepare(`
    SELECT rb.id,rb.user_id,rb.agency_id,rb.license_type,rb.purchase_source,rb.status,
           rb.bot_username AS parent_bot_username,a.title AS agency_title,a.panel_username,
           a.panel_password_enc,a.status AS agency_status,a.remote_manager_id
    FROM reseller_bots rb JOIN agencies a ON a.id=rb.agency_id
    WHERE rb.id=?
  `).bind(bot.parent_bot_id).first();
  if (!parent) throw new Error("مستر نمایندگی بالادست یا پنل سرویس آن پیدا نشد");
  if (!resellerBotCanCreateDownline(parent)) throw new Error("ساختار ربات زیرمجموعه معتبر نیست؛ ربات بالادست باید لایسنس مستر مستقیم از مرکز داشته باشد");
  if (String(bot.agency_id || "") !== String(parent.agency_id || "")) {
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET agency_id=?,updated_at=? WHERE id=? AND parent_bot_id=?")
      .bind(parent.agency_id, nowIso(), bot.id, parent.id).run();
  }
  return {
    ...bot,
    agency_id: parent.agency_id,
    agency_title: parent.agency_title,
    panel_username: parent.panel_username,
    panel_password_enc: parent.panel_password_enc,
    agency_status: parent.agency_status,
    remote_manager_id: parent.remote_manager_id,
    parent_bot_username: parent.parent_bot_username,
    independent_panel_access: false
  };
}

async function hydrateResellerBotRelations(env, bot) {
  if (!bot) return null;
  const relation = await env.PASARGUARD_DB.prepare(`
    SELECT a.title AS agency_title,a.panel_username,a.panel_password_enc,a.status AS agency_status,a.remote_manager_id,
           u.telegram_id AS owner_telegram_id,u.username AS owner_username,u.first_name AS owner_first_name,
           u.last_name AS owner_last_name,u.wallet_balance AS owner_wallet_balance,
           CASE WHEN a.panel_password_enc IS NULL THEN 0 ELSE 1 END AS agency_has_password
    FROM users u LEFT JOIN agencies a ON a.id=?
    WHERE u.id=?
  `).bind(bot.agency_id, bot.user_id).first();
  return { ...bot, ...(relation || {}) };
}

async function getResellerBotById(env, botId) {
  let bot = await env.PASARGUARD_DB.prepare("SELECT * FROM reseller_bots WHERE id=? LIMIT 1").bind(botId).first();
  bot = await hydrateResellerBotRelations(env, bot);
  const resolved = await resolveResellerServiceAgency(env, bot);
  if (resolved) resolved.independent_panel_access = resellerHasIndependentPanel(resolved);
  return resolved;
}

function resellerUsageAmount(deltaBytes, pricePerGb, previousRemainder = 0) {
  const delta = BigInt(Math.max(0, Math.floor(Number(deltaBytes || 0))));
  const price = BigInt(Math.max(0, Math.floor(Number(pricePerGb || 0))));
  const remainder = BigInt(Math.max(0, Math.floor(Number(previousRemainder || 0))));
  const denominator = BigInt(GIB);
  const numerator = delta * price + remainder;
  return {
    amount: Number(numerator / denominator),
    remainder: Number(numerator % denominator)
  };
}

async function downlineUsageTotal(env, botId) {
  const row = await env.PASARGUARD_DB.prepare(`
    SELECT COALESCE(SUM(used),0) AS total_usage FROM (
      SELECT remote_username,MAX(COALESCE(remote_used_traffic,0)) AS used
      FROM sales_orders
      WHERE bot_id=? AND status='delivered' AND remote_username IS NOT NULL
      GROUP BY LOWER(remote_username)
    )
  `).bind(botId).first();
  return Math.max(0, Number(row?.total_usage || 0));
}

async function syncDownlineRemoteServices(env, childBot, limit = 120) {
  const rows = await env.PASARGUARD_DB.prepare(`
    SELECT MIN(o.id) AS order_id,o.customer_id,o.remote_username
    FROM sales_orders o
    WHERE o.bot_id=? AND o.status='delivered' AND o.remote_username IS NOT NULL
    GROUP BY o.customer_id,LOWER(o.remote_username)
    ORDER BY MAX(o.updated_at) DESC LIMIT ?
  `).bind(childBot.id, Math.max(1, Math.min(500, Number(limit || 120)))).all();
  let synced = 0, failed = 0;
  for (const row of rows.results || []) {
    try {
      await syncSalesService(env, childBot, { id: row.customer_id }, row.order_id);
      synced++;
    } catch (_) { failed++; }
  }
  return { synced, failed };
}

async function billDownlineResellerBot(env, childBot, options = {}) {
  if (!childBot?.parent_bot_id) return { processed: false, charged: 0, collected: 0, unpaid: 0 };
  const settings = await getSettings(env);
  const parent = await getResellerBotById(env, childBot.parent_bot_id);
  if (!parent) throw new Error("ربات مستر بالادست پیدا نشد");
  if (options.sync !== false) await syncDownlineRemoteServices(env, childBot, options.limit || 120);
  const currentUsage = await downlineUsageTotal(env, childBot.id);
  const previousUsage = Math.max(0, Number(childBot.upstream_last_usage_bytes || 0));
  let delta = currentUsage - previousUsage;
  if (delta < 0) delta = currentUsage;
  const price = Math.max(centralMinimumDownlinePrice(settings), Number(childBot.upstream_price_per_gb || 0));
  const calc = resellerUsageAmount(delta, price, childBot.upstream_billing_remainder || 0);
  const centralCalc = resellerUsageAmount(delta, Math.max(0, Number(settings.price_per_gb || 0)), 0);
  const newlyDue = calc.amount;
  const dueBeforeCollection = Math.max(0, Number(childBot.upstream_unpaid_toman || 0)) + newlyDue;
  const childUser = await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE id=?").bind(childBot.user_id).first();
  const available = Math.max(0, Number(childUser?.wallet_balance || 0));
  const collected = Math.min(available, dueBeforeCollection);
  const unpaid = Math.max(0, dueBeforeCollection - collected);
  const ts = nowIso();
  const status = unpaid > 0 ? "suspended_balance" : (childBot.status === "suspended_balance" ? "active" : childBot.status);
  const statements = [
    env.PASARGUARD_DB.prepare(`UPDATE reseller_bots SET upstream_price_per_gb=?,upstream_last_usage_bytes=?,upstream_billing_remainder=?,
      upstream_unpaid_toman=?,upstream_total_charged=upstream_total_charged+?,upstream_total_profit=upstream_total_profit+?,status=?,updated_at=? WHERE id=?`)
      .bind(price,currentUsage,calc.remainder,unpaid,newlyDue,Math.max(0,newlyDue-centralCalc.amount),status,ts,childBot.id)
  ];
  if (collected > 0) {
    statements.push(
      env.PASARGUARD_DB.prepare("UPDATE users SET wallet_balance=wallet_balance-?,updated_at=? WHERE id=?").bind(collected,ts,childBot.user_id),
      env.PASARGUARD_DB.prepare("UPDATE users SET wallet_balance=wallet_balance+?,updated_at=? WHERE id=?").bind(collected,ts,parent.user_id),
      env.PASARGUARD_DB.prepare(`INSERT INTO wallet_ledger(id,user_id,type,amount,balance_after,ref_type,ref_id,description,created_at)
        SELECT ?,id,'downline_usage',-?,wallet_balance,'reseller_bot',?,'هزینه مصرف ربات زیرمجموعه',? FROM users WHERE id=?`)
        .bind(id("led"),collected,childBot.id,ts,childBot.user_id),
      env.PASARGUARD_DB.prepare(`INSERT INTO wallet_ledger(id,user_id,type,amount,balance_after,ref_type,ref_id,description,created_at)
        SELECT ?,id,'downline_usage_income',?,wallet_balance,'reseller_bot',?,'درآمد مصرف نماینده زیرمجموعه',? FROM users WHERE id=?`)
        .bind(id("led"),collected,childBot.id,ts,parent.user_id)
    );
  }
  if (delta > 0 || newlyDue > 0) {
    const eventKey = "downline:" + childBot.id + ":" + String(currentUsage);
    statements.push(env.PASARGUARD_DB.prepare(`INSERT OR IGNORE INTO reseller_usage_events(
      event_key,bot_id,parent_bot_id,owner_user_id,usage_from,usage_to,charged_amount,collected_amount,unpaid_after,
      central_cost_amount,master_profit_amount,price_per_gb,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`)
      .bind(eventKey,childBot.id,parent.id,childBot.user_id,previousUsage,currentUsage,newlyDue,collected,unpaid,
        centralCalc.amount,Math.max(0,newlyDue-centralCalc.amount),price,ts));
  }
  await env.PASARGUARD_DB.batch(statements);
  return { processed: true, usage: currentUsage, delta, charged: newlyDue, collected, unpaid, price_per_gb: price, status };
}

async function syncDownlineUsage(env, parentBotId = null, limit = 100) {
  const sql = parentBotId
    ? "SELECT id FROM reseller_bots WHERE parent_bot_id=? ORDER BY updated_at LIMIT ?"
    : "SELECT id FROM reseller_bots WHERE parent_bot_id IS NOT NULL ORDER BY updated_at LIMIT ?";
  const query = env.PASARGUARD_DB.prepare(sql);
  const rows = parentBotId ? await query.bind(parentBotId,limit).all() : await query.bind(limit).all();
  let processed=0,charged=0,collected=0,failed=0;
  for (const row of rows.results || []) {
    try {
      const bot = await getResellerBotById(env,row.id);
      if (!bot) continue;
      const result = await billDownlineResellerBot(env,bot,{sync:true,limit:120});
      processed++;charged+=Number(result.charged||0);collected+=Number(result.collected||0);
    } catch (error) {
      failed++;
      try { await audit(env,null,"downline_usage_sync_failed",{botId:row.id,message:String(error?.message||error)}); } catch (_) {}
    }
  }
  return {processed,charged,collected,failed};
}

async function resellerBotToken(env, bot) {
  const encrypted = String(bot?.bot_token_enc || "");
  const cacheKey = String(bot?.id || "") + ":" + encrypted;
  const cached = resellerTokenCache.get(cacheKey);
  if (cached && Date.now() - cached.at < RESELLER_TOKEN_CACHE_TTL_MS) return cached.token;
  const token = await decryptSecret(encrypted, env);
  if (!token) throw new Error("توکن ربات فروش قابل بازیابی نیست");
  resellerTokenCache.set(cacheKey, { at: Date.now(), token });
  if (resellerTokenCache.size > 250) resellerTokenCache.delete(resellerTokenCache.keys().next().value);
  return token;
}

async function resellerTelegramApi(env, bot, method, body) {
  return telegramApiWithToken(await resellerBotToken(env, bot), method, body);
}

async function getAgencyPasarguardToken(env, agency, forceRefresh = false) {
  const settings = await getSettings(env);
  const cacheKey = String(agency.id);
  const cached = agencyPasarguardTokenCache.get(cacheKey);
  if (!forceRefresh && cached?.token && cached.expiresAt > Date.now() + 60000) return cached.token;
  const password = await decryptSecret(agency.panel_password_enc || "", env);
  if (!password) throw new Error("رمز پنل انتخاب‌شده در سامانه ذخیره نشده است");
  const form = new URLSearchParams();
  form.set("username", String(agency.panel_username));
  form.set("password", password);
  const response = await fetch(pasarguardBaseUrl(settings) + "/api/admin/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: form.toString()
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.access_token) {
    const detail = data.detail || data.message || data.error || ("HTTP " + response.status);
    throw new Error("ورود پنل نماینده ناموفق بود: " + (typeof detail === "string" ? detail : JSON.stringify(detail)));
  }
  const token = String(data.access_token);
  agencyPasarguardTokenCache.set(cacheKey, { token, expiresAt: Date.now() + 10 * 60 * 1000 });
  return token;
}

async function agencyPasarguardRequest(env, agency, method, path, body, retry = true) {
  const settings = await getSettings(env);
  const token = await getAgencyPasarguardToken(env, agency, false);
  const response = await fetch(pasarguardBaseUrl(settings) + path, {
    method,
    headers: {
      authorization: "Bearer " + token,
      ...(body === undefined ? {} : { "content-type": "application/json" })
    },
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  if (response.status === 401 && retry) {
    agencyPasarguardTokenCache.delete(String(agency.id));
    return agencyPasarguardRequest(env, agency, method, path, body, false);
  }
  if (response.status === 204) return {};
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = data.detail || data.message || data.error || ("HTTP " + response.status);
    const error = new Error(typeof detail === "string" ? detail : JSON.stringify(detail));
    error.status = response.status;
    throw error;
  }
  return data;
}

function salesRemoteExpireValue(value) {
  if (value === null || value === undefined || value === "" || value === 0 || value === "0") return null;
  const normalized = typeof value === "string" ? value.trim() : value;
  if ((typeof normalized === "number" && Number.isFinite(normalized)) || (typeof normalized === "string" && /^\d+$/.test(normalized))) {
    const numeric = Number(normalized);
    const ms = numeric > 1000000000000 ? numeric : numeric * 1000;
    const date = new Date(ms);
    return Number.isFinite(date.getTime()) ? date.toISOString() : null;
  }
  const parsed = Date.parse(String(normalized));
  return Number.isFinite(parsed) ? new Date(parsed).toISOString() : null;
}

function salesRemoteSnapshot(remote = {}, fallback = {}) {
  const nested = remote && typeof remote.data === "object" && remote.data ? remote.data : {};
  const source = { ...remote, ...nested };
  const dataLimit = Math.max(0, Number(source.data_limit ?? source.dataLimit ?? fallback.remote_data_limit ?? 0));
  const usedTraffic = Math.max(0, Number(source.used_traffic ?? source.usedTraffic ?? fallback.remote_used_traffic ?? 0));
  const expire = salesRemoteExpireValue(source.expire ?? fallback.remote_expire);
  const subscriptionUrl = cleanText(source.subscription_url || fallback.subscription_url, 2000);
  return {
    status: cleanText(source.status || fallback.remote_status || "active", 40) || "active",
    dataLimit,
    usedTraffic,
    expire,
    onlineAt: salesRemoteExpireValue(source.online_at || source.onlineAt || fallback.remote_online_at),
    subscriptionUrl,
    syncedAt: nowIso()
  };
}

async function getSalesServiceOrder(env, bot, customer, serviceId) {
  const row = await env.PASARGUARD_DB.prepare(`
    SELECT o.*,p.title AS plan_title,p.category_id,p.location_id,
           c.title AS category_title,c.emoji AS category_emoji,
           l.title AS location_title,l.emoji AS location_emoji
    FROM sales_orders o
    JOIN sales_plans p ON p.id=o.plan_id
    LEFT JOIN sales_categories c ON c.id=p.category_id
    LEFT JOIN sales_locations l ON l.id=p.location_id
    WHERE o.id=? AND o.bot_id=? AND o.customer_id=? AND o.status='delivered' AND o.remote_username IS NOT NULL
  `).bind(serviceId, bot.id, customer.id).first();
  if (!row) throw new Error("سرویس انتخاب‌شده پیدا نشد");
  return row;
}

async function syncSalesService(env, bot, customer, serviceId) {
  const target = await getSalesServiceOrder(env, bot, customer, serviceId);
  if (bot.agency_status !== "active") throw new Error("پنل متصل نماینده فعال نیست");
  const agency = { id: bot.agency_id, panel_username: bot.panel_username, panel_password_enc: bot.panel_password_enc };
  const remote = await agencyPasarguardRequest(env, agency, "GET", "/api/user/" + encodeURIComponent(target.remote_username));
  const snapshot = salesRemoteSnapshot(remote, target);
  let subscriptionUrl = snapshot.subscriptionUrl;
  if (subscriptionUrl && subscriptionUrl.startsWith("/")) {
    const settings = await getSettings(env);
    subscriptionUrl = pasarguardBaseUrl(settings) + subscriptionUrl;
  }
  await env.PASARGUARD_DB.prepare(`
    UPDATE sales_orders SET subscription_url=CASE WHEN ?<>'' THEN ? ELSE subscription_url END,
      remote_status=?,remote_data_limit=?,remote_used_traffic=?,remote_expire=?,remote_online_at=?,remote_last_synced_at=?,updated_at=updated_at
    WHERE bot_id=? AND customer_id=? AND remote_username=? AND status='delivered'
  `).bind(subscriptionUrl, subscriptionUrl, snapshot.status, snapshot.dataLimit, snapshot.usedTraffic,
    snapshot.expire, snapshot.onlineAt, snapshot.syncedAt, bot.id, customer.id, target.remote_username).run();
  await salesEvent(env, bot.id, customer.id, "service_synced", { serviceId: target.id, username: target.remote_username });
  return {
    id: target.id,
    remote_username: target.remote_username,
    subscription_url: subscriptionUrl || target.subscription_url || "",
    remote_status: snapshot.status,
    remote_data_limit: snapshot.dataLimit,
    remote_used_traffic: snapshot.usedTraffic,
    remote_expire: snapshot.expire,
    remote_online_at: snapshot.onlineAt,
    remote_last_synced_at: snapshot.syncedAt
  };
}

async function salesBotText(env, botId, key, fallback = "") {
  const row = await env.PASARGUARD_DB.prepare("SELECT text_value FROM reseller_bot_texts WHERE bot_id=? AND text_key=?")
    .bind(botId, key).first();
  return cleanText(row?.text_value, 3500) || fallback;
}

async function salesReleasePromoForOrder(env, orderId) {
  const redemption = await env.PASARGUARD_DB.prepare(`
    SELECT * FROM sales_promo_redemptions WHERE order_id=? AND status='reserved'
  `).bind(orderId).first();
  if (!redemption) return false;
  const changed = await env.PASARGUARD_DB.prepare("UPDATE sales_promo_redemptions SET status='released',updated_at=? WHERE id=? AND status='reserved'")
    .bind(nowIso(), redemption.id).run();
  if (Number(changed?.meta?.changes || 0)) {
    await env.PASARGUARD_DB.prepare("UPDATE sales_promo_codes SET use_count=MAX(0,use_count-1),updated_at=? WHERE id=?")
      .bind(nowIso(), redemption.promo_id).run();
    return true;
  }
  return false;
}

async function salesFinalizePromoForOrder(env, orderId) {
  await env.PASARGUARD_DB.prepare("UPDATE sales_promo_redemptions SET status='used',updated_at=? WHERE order_id=? AND status='reserved'")
    .bind(nowIso(), orderId).run();
}

async function salesEvent(env, botId, customerId, eventType, details = {}) {
  try {
    await env.PASARGUARD_DB.prepare(`
      INSERT INTO sales_bot_events(id,bot_id,customer_id,event_type,details,created_at) VALUES(?,?,?,?,?,?)
    `).bind(id("evt"), botId, customerId || null, eventType, JSON.stringify(details || {}), nowIso()).run();
  } catch (_) {}
}

function salesMiniAppUrl(bot, settingsOrOrigin) {
  let origin = "";
  try {
    if (typeof settingsOrOrigin === "string") origin = new URL(settingsOrOrigin).origin;
    else origin = new URL(String(settingsOrOrigin?.app_url || "")).origin;
  } catch (_) {}
  return origin ? origin + "/sales-app/" + encodeURIComponent(bot.id) : "";
}

function salesQrUrl(value) {
  return "https://api.qrserver.com/v1/create-qr-code/?size=420x420&margin=18&data=" + encodeURIComponent(String(value || ""));
}

async function adjustSalesCustomerBalance(env, botId, customerId, amount, type, refType, refId, description) {
  const value = Number(amount || 0);
  if (!Number.isSafeInteger(value) || value === 0) throw new Error("مبلغ تغییر موجودی معتبر نیست");
  const ts = nowIso();
  const result = value > 0
    ? await env.PASARGUARD_DB.prepare("UPDATE sales_customers SET wallet_balance=wallet_balance+?,updated_at=? WHERE id=? AND bot_id=?")
      .bind(value, ts, customerId, botId).run()
    : await env.PASARGUARD_DB.prepare("UPDATE sales_customers SET wallet_balance=wallet_balance+?,updated_at=? WHERE id=? AND bot_id=? AND wallet_balance>=?")
      .bind(value, ts, customerId, botId, Math.abs(value)).run();
  if (!Number(result?.meta?.changes || 0)) throw new Error(value < 0 ? "موجودی کیف پول کافی نیست" : "تغییر موجودی انجام نشد");
  const fresh = await env.PASARGUARD_DB.prepare("SELECT wallet_balance FROM sales_customers WHERE id=?").bind(customerId).first();
  await env.PASARGUARD_DB.prepare(`
    INSERT INTO sales_customer_ledger(id,bot_id,customer_id,type,amount,balance_after,ref_type,ref_id,description,created_at)
    VALUES(?,?,?,?,?,?,?,?,?,?)
  `).bind(id("cled"), botId, customerId, type, value, Number(fresh?.wallet_balance || 0), refType || null, refId || null, cleanText(description, 500), ts).run();
  return Number(fresh?.wallet_balance || 0);
}

function salesGroupIds(location) {
  try {
    const value = JSON.parse(location?.group_ids_json || "[]");
    return Array.isArray(value) ? value.map(Number).filter(Number.isInteger) : [];
  } catch (_) { return []; }
}

async function sendSalesServiceDelivery(env, bot, chatId, data) {
  const link = cleanText(data.subscriptionUrl, 2000);
  const custom = await salesBotText(env, bot.id, "delivery", "لینک را در برنامه موردنظر وارد کنید. این پیام قابل کپی و فوروارد است.");
  const buttons = [];
  if (link) buttons.push([{ text: "📋 کپی واقعی لینک اشتراک", copy_text: { text: link } }]);
  buttons.push([{ text: "📦 سرویس‌های من", callback_data: "sale:orders" }]);
  let caption = "✅ <b>" + botEscape(data.title || "سرویس شما آماده شد") + "</b>\n━━━━━━━━━━━━━━\n" +
    (data.planTitle ? "پلن: <b>" + botEscape(data.planTitle) + "</b>\n" : "") +
    "نام کاربری: <code>" + botEscape(data.username || "") + "</code>\n" +
    (data.volumeBytes != null ? "حجم: <b>" + botGb(data.volumeBytes) + "</b>\n" : "") +
    (data.durationHours != null ? "اعتبار: <b>" + botMoney(data.durationHours) + " ساعت</b>\n" : (data.durationDays != null ? "اعتبار افزوده: <b>" + botMoney(data.durationDays) + " روز</b>\n" : "")) +
    (link ? "\n🔗 لینک اشتراک:\n<code>" + botEscape(link) + "</code>\n" : "") + "\n" + botEscape(custom);
  if (caption.length > 1010) caption = caption.slice(0, 1000) + "…";
  if (link) {
    try { await resellerTelegramApi(env, bot, "sendPhoto", { chat_id: chatId, photo: salesQrUrl(link), caption, parse_mode: "HTML", protect_content: Number(bot.forward_enabled ?? 1) !== 1, reply_markup: { inline_keyboard: buttons } }); return; } catch (_) {}
  }
  await resellerTelegramApi(env, bot, "sendMessage", { chat_id: chatId, text: caption, parse_mode: "HTML", disable_web_page_preview: true, protect_content: Number(bot.forward_enabled ?? 1) !== 1, reply_markup: { inline_keyboard: buttons } });
}

async function rewardSalesReferral(env, bot, order, customer) {
  if (!customer.referrer_customer_id) return;
  const type = String(bot.referral_reward_type || "fixed");
  const reward = type === "percent" ? Math.floor(Math.max(0, Number(order.amount_toman || 0)) * Math.max(0, Math.min(100, Number(bot.referral_reward_percent || 0))) / 100) : Math.max(0, Number(bot.referral_reward_toman || 0));
  if (!reward) return;
  const claim = await env.PASARGUARD_DB.prepare("UPDATE sales_orders SET referral_rewarded=1 WHERE id=? AND referral_rewarded=0").bind(order.id).run();
  if (!Number(claim?.meta?.changes || 0)) return;
  try {
    const balance = await adjustSalesCustomerBalance(env, bot.id, customer.referrer_customer_id, reward, "referral_reward", "sales_order", order.id, "پورسانت خرید موفق زیرمجموعه");
    const referrer = await env.PASARGUARD_DB.prepare("SELECT telegram_id FROM sales_customers WHERE id=?").bind(customer.referrer_customer_id).first();
    if (order.origin !== "miniapp" && referrer?.telegram_id) await resellerTelegramApi(env, bot, "sendMessage", { chat_id: referrer.telegram_id, text: "🎉 <b>پورسانت زیرمجموعه دریافت کردید</b>\nمبلغ: <b>" + botMoney(reward) + " تومان</b>\nموجودی جدید: <b>" + botMoney(balance) + " تومان</b>", parse_mode: "HTML" });
    await queueReportEvent(env, bot.id, "commissions", "پورسانت زیرمجموعه پرداخت شد",
      "سفارش: <code>" + botEscape(order.id) + "</code>\n" +
      "مبلغ پورسانت: <b>" + botMoney(reward) + " تومان</b>\n" +
      "دریافت‌کننده: <code>" + botEscape(referrer?.telegram_id || customer.referrer_customer_id) + "</code>\n" +
      "موجودی جدید: <b>" + botMoney(balance) + " تومان</b>",
      "commission:" + order.id);
  } catch (error) { await env.PASARGUARD_DB.prepare("UPDATE sales_orders SET referral_rewarded=0 WHERE id=?").bind(order.id).run(); throw error; }
}

function salesCashbackAmount(bot, amountToman) {
  if (Number(bot?.cashback_enabled || 0) !== 1) return 0;
  const amount = Math.max(0, Number(amountToman || 0));
  const minPurchase = Math.max(0, Number(bot.cashback_min_purchase_toman || 0));
  if (!amount || amount < minPurchase) return 0;
  const percent = Math.max(0, Math.min(100, Number(bot.cashback_percent || 0)));
  let reward = Math.floor(amount * percent / 100);
  const cap = Math.max(0, Number(bot.cashback_max_toman || 0));
  if (cap > 0) reward = Math.min(reward, cap);
  return Math.max(0, reward);
}

async function createSalesNotification(env, bot, customer, orderId, type, title, message, dedupeKey, options = {}) {
  const notificationId = id("ntf");
  const insert = await env.PASARGUARD_DB.prepare(`
    INSERT OR IGNORE INTO sales_notifications(
      id,bot_id,customer_id,order_id,type,title,message,status,sent_to_bot,dedupe_key,created_at
    ) VALUES(?,?,?,?,?,?,?,'unread',0,?,?)
  `).bind(notificationId, bot.id, customer.id, orderId || null, cleanText(type, 40), cleanText(title, 180), cleanText(message, 1500), cleanText(dedupeKey, 500), nowIso()).run();
  if (!Number(insert?.meta?.changes || 0)) return { created: false };
  let sentToBot = false;
  if (options.sendBot !== false && customer.telegram_id) {
    const settings = await getSettings(env);
    const appUrl = salesMiniAppUrl(bot, settings);
    const rows = appUrl ? [[{ text: "🔔 مشاهده در مینی‌اپ", web_app: { url: appUrl } }]] : [];
    try {
      await resellerTelegramApi(env, bot, "sendMessage", {
        chat_id: customer.telegram_id,
        text: "🔔 <b>" + botEscape(title) + "</b>\n━━━━━━━━━━━━━━\n" + botEscape(message),
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: rows.length ? { inline_keyboard: rows } : undefined
      });
      sentToBot = true;
      await env.PASARGUARD_DB.prepare("UPDATE sales_notifications SET sent_to_bot=1 WHERE id=?").bind(notificationId).run();
    } catch (_) {}
  }
  return { created: true, id: notificationId, sentToBot };
}

async function rewardSalesCashback(env, bot, order, customer) {
  const reward = salesCashbackAmount(bot, order.amount_toman);
  if (!reward) return 0;
  const claim = await env.PASARGUARD_DB.prepare(`
    UPDATE sales_orders SET cashback_rewarded=1,cashback_toman=?,updated_at=?
    WHERE id=? AND cashback_rewarded=0
  `).bind(reward, nowIso(), order.id).run();
  if (!Number(claim?.meta?.changes || 0)) return Number(order.cashback_toman || 0);
  try {
    const balance = await adjustSalesCustomerBalance(env, bot.id, customer.id, reward, "cashback", "sales_order", order.id, "کش‌بک خرید موفق");
    await createSalesNotification(env, bot, customer, order.id, "cashback", "کش‌بک خرید دریافت شد", "مبلغ " + botMoney(reward) + " تومان به کیف پول شما اضافه شد. موجودی جدید: " + botMoney(balance) + " تومان.", "cashback:" + order.id, { sendBot: order.origin !== "miniapp" });
    await salesEvent(env, bot.id, customer.id, "cashback_rewarded", { orderId: order.id, reward, balance });
    return reward;
  } catch (error) {
    await env.PASARGUARD_DB.prepare("UPDATE sales_orders SET cashback_rewarded=0,cashback_toman=0,updated_at=? WHERE id=?").bind(nowIso(), order.id).run();
    throw error;
  }
}

const RESELLER_LOYALTY_PROFILES = Object.freeze({
  standard: Object.freeze({ label: "استاندارد", silver: 500000, gold: 2000000, vip: 5000000, discounts: { silver: 1, gold: 3, vip: 5 } }),
  growth: Object.freeze({ label: "رشد سریع", silver: 250000, gold: 1000000, vip: 3000000, discounts: { silver: 2, gold: 4, vip: 7 } }),
  premium: Object.freeze({ label: "پریمیوم", silver: 1000000, gold: 5000000, vip: 12000000, discounts: { silver: 2, gold: 5, vip: 8 } })
});

function resellerLoyaltyProfile(bot) {
  return RESELLER_LOYALTY_PROFILES[String(bot?.loyalty_profile || "standard")] || RESELLER_LOYALTY_PROFILES.standard;
}

function salesLoyaltyLevelForSpend(bot, spend) {
  const total = Math.max(0, Number(spend || 0));
  if (Number(bot?.loyalty_enabled ?? 1) !== 1) return { level: "bronze", discount: 0 };
  const profile = resellerLoyaltyProfile(bot);
  if (total >= profile.vip) return { level: "vip", discount: profile.discounts.vip };
  if (total >= profile.gold) return { level: "gold", discount: profile.discounts.gold };
  if (total >= profile.silver) return { level: "silver", discount: profile.discounts.silver };
  return { level: "bronze", discount: 0 };
}

function salesLoyaltyLabel(level) {
  return ({ bronze: "برنزی", silver: "نقره‌ای", gold: "طلایی", vip: "VIP" })[String(level || "bronze")] || "برنزی";
}

async function refreshSalesCustomerLoyalty(env, bot, customerId, options = {}) {
  const customer = await env.PASARGUARD_DB.prepare("SELECT * FROM sales_customers WHERE id=? AND bot_id=?").bind(customerId, bot.id).first();
  if (!customer) return null;
  const stats = await env.PASARGUARD_DB.prepare(`
    SELECT COALESCE(SUM(amount_toman),0) AS spend,MAX(COALESCE(reviewed_at,updated_at,created_at)) AS last_purchase
    FROM sales_orders WHERE bot_id=? AND customer_id=? AND status='delivered'
  `).bind(bot.id, customer.id).first();
  const spend = Math.max(0, Number(stats?.spend || 0));
  const next = salesLoyaltyLevelForSpend(bot, spend);
  const previous = String(customer.loyalty_level || "bronze");
  await env.PASARGUARD_DB.prepare(`
    UPDATE sales_customers SET lifetime_spend_toman=?,loyalty_level=?,loyalty_discount_percent=?,last_purchase_at=?,updated_at=?
    WHERE id=? AND bot_id=?
  `).bind(spend, next.level, next.discount, stats?.last_purchase || null, nowIso(), customer.id, bot.id).run();
  if (previous !== next.level && next.level !== "bronze" && options.notify !== false) {
    await createSalesNotification(env, bot, customer, null, "loyalty", "ارتقای سطح باشگاه مشتریان",
      "سطح شما به " + salesLoyaltyLabel(next.level) + " ارتقا یافت و از " + next.discount + "٪ تخفیف خودکار بهره‌مند شدید.",
      "loyalty:" + customer.id + ":" + next.level, { sendBot: true });
  }
  return { spend, level: next.level, discount: next.discount, previous };
}

async function processResellerSalesAutomation(env, limit = 100, onlyBotId = null) {
  const max = Math.max(1, Math.min(300, Number(limit || 100)));
  const botsResult = onlyBotId
    ? await env.PASARGUARD_DB.prepare("SELECT * FROM reseller_bots WHERE id=? AND status='active'").bind(onlyBotId).all()
    : await env.PASARGUARD_DB.prepare("SELECT * FROM reseller_bots WHERE status='active' AND COALESCE(sales_automation_enabled,1)=1 ORDER BY COALESCE(automation_last_run_at,created_at) ASC LIMIT 50").all();
  let bots = 0, abandoned = 0, winback = 0, loyalty = 0, failed = 0;
  for (const bot of botsResult.results || []) {
    if (Number(bot.sales_automation_enabled ?? 1) !== 1 && !onlyBotId) continue;
    bots++;
    try {
      const abandonedMinutes = Math.max(15, Math.min(1440, Number(bot.abandoned_reminder_minutes || 60)));
      const abandonedCutoff = new Date(Date.now() - abandonedMinutes * 60000).toISOString();
      const recentCutoff = new Date(Date.now() - 7 * 86400000).toISOString();
      const pending = await env.PASARGUARD_DB.prepare(`
        SELECT o.id,o.origin,o.amount_toman,o.status,o.customer_id,p.title AS plan_title,
               c.telegram_id,c.first_name,c.username
        FROM sales_orders o JOIN sales_customers c ON c.id=o.customer_id JOIN sales_plans p ON p.id=o.plan_id
        WHERE o.bot_id=? AND o.status IN ('awaiting_receipt','payment_pending') AND o.created_at<=? AND o.created_at>=?
        ORDER BY o.created_at ASC LIMIT ?
      `).bind(bot.id, abandonedCutoff, recentCutoff, Math.min(40, max)).all();
      for (const row of pending.results || []) {
        const notice = await createSalesNotification(env, bot, row, row.id, "abandoned_order", "سفارش شما هنوز تکمیل نشده",
          "پلن «" + row.plan_title + "» با مبلغ " + botMoney(row.amount_toman) + " تومان در انتظار پرداخت یا ثبت رسید است.",
          "automation:abandoned:" + row.id, { sendBot: true });
        if (notice.created) abandoned++;
      }

      const winbackDays = Math.max(7, Math.min(365, Number(bot.winback_days || 30)));
      const winbackCutoff = new Date(Date.now() - winbackDays * 86400000).toISOString();
      const inactive = await env.PASARGUARD_DB.prepare(`
        SELECT c.id,c.telegram_id,c.first_name,c.username,MAX(COALESCE(o.reviewed_at,o.updated_at,o.created_at)) AS last_purchase
        FROM sales_customers c JOIN sales_orders o ON o.customer_id=c.id AND o.bot_id=c.bot_id AND o.status='delivered'
        WHERE c.bot_id=? AND c.status='active'
        GROUP BY c.id HAVING last_purchase<=? ORDER BY last_purchase ASC LIMIT ?
      `).bind(bot.id, winbackCutoff, Math.min(40, max)).all();
      const bucket = new Date().toISOString().slice(0,7);
      for (const row of inactive.results || []) {
        const notice = await createSalesNotification(env, bot, row, null, "winback", "دلمان برایتان تنگ شده",
          "مدتی از آخرین خرید شما گذشته است. پلن‌های تازه و پیشنهادهای فعال را در مینی‌اپ ببینید.",
          "automation:winback:" + row.id + ":" + bucket, { sendBot: true });
        if (notice.created) winback++;
      }

      if (Number(bot.loyalty_enabled ?? 1) === 1) {
        const customers = await env.PASARGUARD_DB.prepare(`
          SELECT DISTINCT customer_id FROM sales_orders WHERE bot_id=? AND status='delivered' ORDER BY updated_at DESC LIMIT ?
        `).bind(bot.id, Math.min(80, max)).all();
        for (const row of customers.results || []) {
          try { await refreshSalesCustomerLoyalty(env, bot, row.customer_id); loyalty++; } catch (_) { failed++; }
        }
      }
      await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET automation_last_run_at=?,updated_at=? WHERE id=?")
        .bind(nowIso(), nowIso(), bot.id).run();
    } catch (error) {
      failed++;
      try { await audit(env, null, "reseller_sales_automation_failed", { botId: bot.id, message: error.message }); } catch (_) {}
    }
  }
  return { bots, abandoned, winback, loyalty, failed };
}

async function processSalesServiceNotifications(env, limit = 30) {
  const result = await env.PASARGUARD_DB.prepare(`
    SELECT o.id,o.bot_id,o.customer_id,o.remote_username,o.subscription_url,o.remote_status,
           o.remote_data_limit,o.remote_used_traffic,o.remote_expire,o.remote_online_at,o.remote_last_synced_at,
           c.telegram_id,c.first_name,c.username
    FROM sales_orders o
    JOIN sales_customers c ON c.id=o.customer_id
    JOIN reseller_bots rb ON rb.id=o.bot_id
    WHERE o.status='delivered' AND o.order_type='new' AND o.target_order_id IS NULL
      AND o.remote_username IS NOT NULL AND rb.status='active' AND COALESCE(rb.notifications_enabled,1)=1
    ORDER BY COALESCE(o.remote_last_synced_at,o.updated_at) ASC
    LIMIT ?
  `).bind(Math.max(1, Math.min(100, Number(limit || 30)))).all();
  let checked = 0, created = 0, failed = 0;
  for (const row of result.results || []) {
    checked++;
    try {
      const bot = await getResellerBotById(env, row.bot_id);
      if (!bot || bot.agency_status !== "active") continue;
      const customer = { id: row.customer_id, telegram_id: row.telegram_id, first_name: row.first_name, username: row.username };
      const agency = { id: bot.agency_id, panel_username: bot.panel_username, panel_password_enc: bot.panel_password_enc };
      const remote = await agencyPasarguardRequest(env, agency, "GET", "/api/user/" + encodeURIComponent(row.remote_username));
      const snapshot = salesRemoteSnapshot(remote, row);
      let subscriptionUrl = snapshot.subscriptionUrl;
      if (subscriptionUrl && subscriptionUrl.startsWith("/")) {
        const settings = await getSettings(env);
        subscriptionUrl = pasarguardBaseUrl(settings) + subscriptionUrl;
      }
      await env.PASARGUARD_DB.prepare(`
        UPDATE sales_orders SET subscription_url=CASE WHEN ?<>'' THEN ? ELSE subscription_url END,
          remote_status=?,remote_data_limit=?,remote_used_traffic=?,remote_expire=?,remote_online_at=?,remote_last_synced_at=?
        WHERE bot_id=? AND customer_id=? AND remote_username=? AND status='delivered'
      `).bind(subscriptionUrl, subscriptionUrl, snapshot.status, snapshot.dataLimit, snapshot.usedTraffic, snapshot.expire,
        snapshot.onlineAt, snapshot.syncedAt, bot.id, customer.id, row.remote_username).run();

      const threshold = Math.max(1, Math.min(100, Number(bot.usage_reminder_percent || 80)));
      if (snapshot.dataLimit > 0) {
        const usagePercent = Math.floor(snapshot.usedTraffic * 100 / snapshot.dataLimit);
        if (usagePercent >= threshold) {
          const remaining = Math.max(0, snapshot.dataLimit - snapshot.usedTraffic);
          const notice = await createSalesNotification(env, bot, customer, row.id, "usage", "هشدار مصرف سرویس",
            "مصرف سرویس " + row.remote_username + " به " + usagePercent + "٪ رسیده و " + botGb(remaining) + " باقی مانده است.",
            "usage:" + row.remote_username + ":" + threshold + ":" + snapshot.dataLimit);
          if (notice.created) created++;
        }
      }

      const expiryHours = Math.max(1, Math.min(720, Number(bot.expiry_reminder_hours || 48)));
      if (snapshot.expire) {
        const remainingMs = Date.parse(snapshot.expire) - Date.now();
        if (remainingMs > 0 && remainingMs <= expiryHours * 3600000) {
          const hoursLeft = Math.max(1, Math.ceil(remainingMs / 3600000));
          const notice = await createSalesNotification(env, bot, customer, row.id, "expiry", "اعتبار سرویس رو به پایان است",
            "از اعتبار سرویس " + row.remote_username + " حدود " + hoursLeft + " ساعت باقی مانده است. برای جلوگیری از قطع سرویس، آن را تمدید کنید.",
            "expiry:" + row.remote_username + ":" + snapshot.expire + ":" + expiryHours);
          if (notice.created) created++;
        }
      }

      const status = String(snapshot.status || "").toLowerCase();
      if (["expired", "disabled", "limited"].includes(status)) {
        const notice = await createSalesNotification(env, bot, customer, row.id, "status", "وضعیت سرویس تغییر کرد",
          "وضعیت سرویس " + row.remote_username + " اکنون «" + status + "» است. جزئیات را در مینی‌اپ بررسی کنید.",
          "status:" + row.remote_username + ":" + status + ":" + (snapshot.expire || "none"));
        if (notice.created) created++;
      }
    } catch (_) { failed++; }
  }
  return { checked, created, failed };
}

async function processSalesTicketAutoClose(env, limit = 100) {
  const result = await env.PASARGUARD_DB.prepare(`
    SELECT t.id,t.bot_id,t.customer_id,t.public_code,t.subject,t.updated_at,t.origin,
           rb.ticket_auto_close_hours,c.telegram_id,c.first_name,c.username
    FROM sales_tickets t
    JOIN reseller_bots rb ON rb.id=t.bot_id
    JOIN sales_customers c ON c.id=t.customer_id
    WHERE t.status='answered' AND COALESCE(rb.ticketing_enabled,1)=1
    ORDER BY t.updated_at ASC LIMIT ?
  `).bind(Math.max(1, Math.min(300, Number(limit || 100)))).all();
  let checked = 0, closed = 0;
  for (const row of result.results || []) {
    checked++;
    const hours = Math.max(1, Math.min(720, Number(row.ticket_auto_close_hours || 72)));
    const updatedAt = Date.parse(row.updated_at || "");
    if (!Number.isFinite(updatedAt) || Date.now() - updatedAt < hours * 3600000) continue;
    const ts = nowIso();
    const claim = await env.PASARGUARD_DB.prepare(`
      UPDATE sales_tickets SET status='closed',closed_at=?,updated_at=?
      WHERE id=? AND status='answered'
    `).bind(ts, ts, row.id).run();
    if (!Number(claim?.meta?.changes || 0)) continue;
    closed++;
    const bot = await getResellerBotById(env, row.bot_id);
    if (!bot) continue;
    const customer = { id: row.customer_id, telegram_id: row.telegram_id, first_name: row.first_name, username: row.username };
    await createSalesNotification(
      env, bot, customer, null, "support_closed", "تیکت پشتیبانی بسته شد",
      "تیکت " + row.public_code + " پس از " + hours + " ساعت بدون پاسخ جدید به‌صورت خودکار بسته شد.",
      "ticket_auto_close:" + row.id + ":" + row.updated_at,
      { sendBot: row.origin !== "miniapp" }
    );
    await salesEvent(env, row.bot_id, row.customer_id, "ticket_auto_closed", { ticketId: row.id, hours });
  }
  return { checked, closed };
}

async function provisionSalesOrder(env, ownerUser, orderId) {
  const order = await env.PASARGUARD_DB.prepare(`
    SELECT o.*,p.title AS plan_title,p.data_limit_bytes,p.duration_days,p.price_toman,p.location_id,
           c.id AS customer_record_id,c.telegram_id AS customer_telegram_id,c.username AS customer_username,
           c.first_name AS customer_first_name,c.referrer_customer_id,
           rb.user_id AS owner_user_id,rb.brand_name,rb.bot_token_enc,rb.bot_username,rb.webhook_secret,rb.id AS reseller_bot_id,
           rb.referral_reward_toman,rb.forward_enabled,
           a.id AS agency_id,a.panel_username,a.panel_password_enc,a.status AS agency_status,
           l.group_ids_json
    FROM sales_orders o
    JOIN sales_plans p ON p.id=o.plan_id
    JOIN sales_customers c ON c.id=o.customer_id
    JOIN reseller_bots rb ON rb.id=o.bot_id
    LEFT JOIN reseller_bots parent_rb ON parent_rb.id=rb.parent_bot_id
    JOIN agencies a ON a.id=CASE WHEN rb.parent_bot_id IS NOT NULL THEN parent_rb.agency_id ELSE rb.agency_id END
    LEFT JOIN sales_locations l ON l.id=p.location_id
    WHERE o.id=?
  `).bind(orderId).first();
  if (!order || Number(order.owner_user_id) !== Number(ownerUser.id)) throw new Error("سفارش پیدا نشد");
  const staleProvisioning = order.status === "provisioning" && Date.now() - new Date(order.updated_at).getTime() > 2 * 60 * 1000;
  if (!["pending_review", "provision_failed"].includes(String(order.status)) && !staleProvisioning) throw new Error("این سفارش قابل تأیید نیست");
  if (order.agency_status !== "active") throw new Error("پنل متصل فعال نیست");
  const claim = await env.PASARGUARD_DB.prepare(`
    UPDATE sales_orders SET status='provisioning',error_message=NULL,updated_at=?,reviewed_at=?,reviewed_by=?
    WHERE id=? AND (status IN ('pending_review','provision_failed') OR (status='provisioning' AND updated_at<?))
  `).bind(nowIso(), nowIso(), ownerUser.id, order.id, new Date(Date.now() - 2 * 60 * 1000).toISOString()).run();
  if (!Number(claim?.meta?.changes || 0)) throw new Error("سفارش هم‌زمان در حال پردازش است");
  const agency = { id: order.agency_id, panel_username: order.panel_username, panel_password_enc: order.panel_password_enc };
  const bot = await getResellerBotById(env, order.reseller_bot_id);
  try {
    let created, username, subscriptionUrl = "";
    if (order.order_type === "renewal" || order.order_type === "volume") {
      const target = await env.PASARGUARD_DB.prepare(`
        SELECT * FROM sales_orders WHERE id=? AND bot_id=? AND customer_id=? AND status='delivered'
      `).bind(order.target_order_id, order.bot_id, order.customer_id).first();
      if (!target?.remote_username) throw new Error(order.order_type === "volume" ? "سرویس مقصد افزایش حجم پیدا نشد" : "سرویس مقصد تمدید پیدا نشد");
      username = target.remote_username;
      const current = await agencyPasarguardRequest(env, agency, "GET", "/api/user/" + encodeURIComponent(username));
      const payload = {
        status: "active",
        data_limit: Math.max(0, Number(current?.data_limit || 0)) + Math.max(0, Number(order.data_limit_bytes || 0)),
        note: "Telegram " + order.order_type + " order " + order.id
      };
      if (order.order_type === "renewal" && Number(order.duration_days || 0) > 0) {
        const normalizedExpire = salesRemoteExpireValue(current?.expire);
        const currentExpireTime = normalizedExpire ? Date.parse(normalizedExpire) : 0;
        const baseTime = Math.max(Date.now(), Number.isFinite(currentExpireTime) ? currentExpireTime : 0);
        payload.expire = new Date(baseTime + Number(order.duration_days) * 86400000).toISOString();
      }
      created = await agencyPasarguardRequest(env, agency, "PUT", "/api/user/" + encodeURIComponent(username), payload);
      subscriptionUrl = cleanText(created.subscription_url || current.subscription_url || created?.data?.subscription_url, 2000);
    } else {
      username = normalizeUsername("ord_" + String(order.id).replace(/[^a-zA-Z0-9]/g, "").slice(-24));
      const expiresAt = Number(order.duration_days) > 0 ? new Date(Date.now() + Number(order.duration_days) * 86400000).toISOString() : 0;
      const payload = {
        username,
        status: "active",
        data_limit: Math.max(0, Number(order.data_limit_bytes || 0)),
        expire: expiresAt,
        data_limit_reset_strategy: "no_reset",
        note: "Telegram sales order " + order.id + " / customer " + order.customer_telegram_id
      };
      const groups = salesGroupIds(order);
      if (groups.length) payload.group_ids = groups;
      for (let attempt = 0; attempt < 3 && !created; attempt++) {
        try { created = await agencyPasarguardRequest(env, agency, "POST", "/api/user", payload); }
        catch (error) {
          if (error.status === 409 || /username|already|وجود|تکرار/i.test(String(error.message || ""))) {
            created = await agencyPasarguardRequest(env, agency, "GET", "/api/user/" + encodeURIComponent(username));
            break;
          }
          if (attempt < 2 && (!error.status || error.status >= 500)) continue;
          throw error;
        }
      }
      if (!created) throw new Error("ساخت سرویس پس از چند تلاش ناموفق بود");
      subscriptionUrl = cleanText(created.subscription_url || created?.data?.subscription_url, 2000);
    }
    if (subscriptionUrl && subscriptionUrl.startsWith("/")) {
      const settings = await getSettings(env);
      subscriptionUrl = pasarguardBaseUrl(settings) + subscriptionUrl;
    }
    const remoteId = created?.id || created?.data?.id || "";
    let remoteForSnapshot = created || {};
    try { remoteForSnapshot = await agencyPasarguardRequest(env, agency, "GET", "/api/user/" + encodeURIComponent(username)); } catch (_) {}
    const snapshot = salesRemoteSnapshot(remoteForSnapshot, { subscription_url: subscriptionUrl });
    if (!subscriptionUrl) subscriptionUrl = snapshot.subscriptionUrl;
    await env.PASARGUARD_DB.prepare(`
      UPDATE sales_orders SET status='delivered',remote_user_id=?,remote_username=?,subscription_url=?,
        remote_status=?,remote_data_limit=?,remote_used_traffic=?,remote_expire=?,remote_online_at=?,remote_last_synced_at=?,
        error_message=NULL,updated_at=? WHERE id=?
    `).bind(String(remoteId || ""), username, subscriptionUrl, snapshot.status, snapshot.dataLimit,
      snapshot.usedTraffic, snapshot.expire, snapshot.onlineAt, snapshot.syncedAt, nowIso(), order.id).run();
    await env.PASARGUARD_DB.prepare(`
      UPDATE sales_orders SET subscription_url=?,remote_status=?,remote_data_limit=?,remote_used_traffic=?,
        remote_expire=?,remote_online_at=?,remote_last_synced_at=?
      WHERE bot_id=? AND customer_id=? AND remote_username=? AND status='delivered'
    `).bind(subscriptionUrl, snapshot.status, snapshot.dataLimit, snapshot.usedTraffic, snapshot.expire,
      snapshot.onlineAt, snapshot.syncedAt, order.bot_id, order.customer_id, username).run();
    await salesFinalizePromoForOrder(env, order.id);
    if (order.origin !== "miniapp") {
      await sendSalesServiceDelivery(env, bot, order.customer_telegram_id, {
        title: order.order_type === "renewal" ? "تمدید سرویس با موفقیت انجام شد" : order.order_type === "volume" ? "حجم سرویس با موفقیت افزایش یافت" : "سرویس شما آماده شد",
        planTitle: order.plan_title,
        username,
        volumeBytes: order.data_limit_bytes,
        durationDays: order.duration_days,
        subscriptionUrl
      });
    }
    await rewardSalesReferral(env, bot, order, { id: order.customer_record_id, referrer_customer_id: order.referrer_customer_id });
    let cashbackToman = 0;
    try {
      cashbackToman = await rewardSalesCashback(env, bot, order, { id: order.customer_record_id, telegram_id: order.customer_telegram_id });
    } catch (cashbackError) {
      try { await audit(env, ownerUser.id, "sales_cashback_failed", { orderId: order.id, message: cashbackError.message }); } catch (_) {}
    }
    let loyalty = null;
    try { loyalty = await refreshSalesCustomerLoyalty(env, bot, order.customer_record_id); } catch (_) {}
    await salesEvent(env, bot.id, order.customer_record_id, "order_delivered", { orderId: order.id, username, orderType: order.order_type, cashbackToman, loyalty });
    await queueReportEvent(env, bot.id, "service_purchases", "سفارش با موفقیت تحویل شد",
      "مشتری: <code>" + botEscape(order.customer_telegram_id) + "</code>\n" +
      "پلن: <b>" + botEscape(order.plan_title) + "</b>\n" +
      "کاربر سرویس: <code>" + botEscape(username) + "</code>\n" +
      "مبلغ: <b>" + botMoney(order.amount_toman) + " تومان</b>\n" +
      "سفارش: <code>" + botEscape(order.id) + "</code>",
      "order-delivered:" + order.id);
    try { await audit(env, ownerUser.id, "sales_order_delivered", { orderId: order.id, remoteUserId: remoteId, username, orderType: order.order_type, cashbackToman }); } catch (_) {}
    return { ...order, status: "delivered", remote_username: username, subscription_url: subscriptionUrl, cashback_toman: cashbackToman };
  } catch (error) {
    await env.PASARGUARD_DB.prepare("UPDATE sales_orders SET status='provision_failed',error_message=?,updated_at=? WHERE id=?")
      .bind(cleanText(error.message, 1000), nowIso(), order.id).run();
    await queueReportEvent(env, bot.id, "errors", "خطا در ساخت سرویس",
      "سفارش: <code>" + botEscape(order.id) + "</code>\n" +
      "پلن: <b>" + botEscape(order.plan_title) + "</b>\n" +
      "خطا: <code>" + botEscape(cleanText(error.message, 700)) + "</code>",
      "order-failed:" + order.id + ":" + cleanText(error.message, 80));
    await audit(env, ownerUser.id, "sales_order_provision_failed", { orderId: order.id, message: error.message });
    throw error;
  }
}

function resellerCampaignRecipientQuery(scope) {
  const base = "SELECT c.telegram_id FROM sales_customers c WHERE c.bot_id=? AND c.status='active'";
  const map = {
    buyers: " AND EXISTS(SELECT 1 FROM sales_orders o WHERE o.bot_id=c.bot_id AND o.customer_id=c.id AND o.status='delivered')",
    no_purchase: " AND NOT EXISTS(SELECT 1 FROM sales_orders o WHERE o.bot_id=c.bot_id AND o.customer_id=c.id AND o.status='delivered')",
    wholesale: " AND c.customer_type='wholesale'",
    retail: " AND COALESCE(c.customer_type,'retail')<>'wholesale'",
    verified: " AND c.phone_verified_at IS NOT NULL",
    unverified: " AND c.phone_verified_at IS NULL"
  };
  return base + (map[String(scope || "all")] || "") + " ORDER BY c.created_at LIMIT 2000";
}

async function processSalesCampaign(env, campaign) {
  const bot = await getResellerBotById(env, campaign.bot_id);
  if (!bot) throw new Error("ربات کمپین پیدا نشد");
  const claim = await env.PASARGUARD_DB.prepare("UPDATE sales_campaigns SET status='running',started_at=?,error_message=NULL WHERE id=? AND status='pending'")
    .bind(nowIso(), campaign.id).run();
  if (!Number(claim?.meta?.changes || 0)) return { skipped: true };
  let success = 0, failed = 0;
  try {
    const recipients = await env.PASARGUARD_DB.prepare(resellerCampaignRecipientQuery(campaign.target_scope)).bind(bot.id).all();
    const list = recipients.results || [];
    for (let offset = 0; offset < list.length; offset += 20) {
      const batch = list.slice(offset, offset + 20);
      const results = await Promise.all(batch.map(async recipient => {
        try {
          if (cleanText(campaign.message_text, 4000)) {
            await resellerTelegramApi(env, bot, "sendMessage", { chat_id: recipient.telegram_id, text: cleanText(campaign.message_text, 4000), disable_web_page_preview: true });
          } else {
            const payload = { chat_id: recipient.telegram_id, from_chat_id: campaign.source_chat_id, message_id: campaign.source_message_id };
            await resellerTelegramApi(env, bot, campaign.send_mode === "forward" ? "forwardMessage" : "copyMessage", payload);
          }
          return true;
        } catch (_) { return false; }
      }));
      const ok = results.filter(Boolean).length;
      success += ok;
      failed += results.length - ok;
    }
    await env.PASARGUARD_DB.prepare("UPDATE sales_campaigns SET status='completed',success_count=?,failed_count=?,finished_at=? WHERE id=?")
      .bind(success, failed, nowIso(), campaign.id).run();
    await queueReportEvent(env, bot.id, "announcements", "اطلاع‌رسانی گروهی انجام شد",
      "کمپین: <code>" + botEscape(campaign.id) + "</code>\n" +
      "مخاطبان موفق: <b>" + botMoney(success) + "</b>\n" +
      "ارسال ناموفق: <b>" + botMoney(failed) + "</b>\n" +
      "گروه هدف: <b>" + botEscape(campaign.target_scope || "all") + "</b>",
      "campaign-completed:" + campaign.id);
    return { success, failed };
  } catch (error) {
    await env.PASARGUARD_DB.prepare("UPDATE sales_campaigns SET status='failed',success_count=?,failed_count=?,finished_at=?,error_message=? WHERE id=?")
      .bind(success, failed, nowIso(), cleanText(error.message, 500), campaign.id).run();
    await queueReportEvent(env, bot.id, "errors", "خطا در اطلاع‌رسانی گروهی",
      "کمپین: <code>" + botEscape(campaign.id) + "</code>\n" +
      "ارسال موفق تا لحظه خطا: <b>" + botMoney(success) + "</b>\n" +
      "خطا: <code>" + botEscape(cleanText(error.message, 700)) + "</code>",
      "campaign-failed:" + campaign.id + ":" + cleanText(error.message, 80));
    throw error;
  }
}

async function processScheduledSalesCampaigns(env, limit = 5) {
  const due = await env.PASARGUARD_DB.prepare(`
    SELECT * FROM sales_campaigns WHERE status='pending' AND scheduled_at<=? ORDER BY scheduled_at LIMIT ?
  `).bind(nowIso(), Math.max(1, Math.min(20, Number(limit || 5)))).all();
  let completed = 0, failed = 0;
  for (const campaign of due.results || []) {
    try { await processSalesCampaign(env, campaign); completed += 1; }
    catch (_) { failed += 1; }
  }
  return { completed, failed };
}

async function processResellerDailyReports(env, limit = 50) {
  const now = new Date();
  const utcHour = now.getUTCHours();
  const dateKey = now.toISOString().slice(0, 10);
  const startIso = dateKey + "T00:00:00.000Z";
  const bots = await env.PASARGUARD_DB.prepare(`
    SELECT rb.id,rb.bot_token_enc,rb.bot_username,rb.brand_name,rb.daily_report_enabled,rb.daily_report_hour_utc,rb.updated_at,
           u.telegram_id AS owner_telegram_id
    FROM reseller_bots rb JOIN users u ON u.id=rb.user_id
    WHERE rb.status='active'
      AND (COALESCE(rb.daily_report_enabled,0)=1 OR EXISTS(
        SELECT 1 FROM report_forums rf WHERE rf.scope_key=('reseller:' || rb.id) AND rf.status='active'
      ))
      AND COALESCE(rb.last_daily_report_date,'')<>? AND COALESCE(rb.daily_report_hour_utc,18)<=?
    ORDER BY rb.updated_at LIMIT ?
  `).bind(dateKey, utcHour, Math.max(1, Math.min(200, Number(limit || 50)))).all();
  let sent = 0;
  for (const bot of bots.results || []) {
    try {
      const stats = await env.PASARGUARD_DB.prepare(`
        SELECT
          (SELECT COUNT(*) FROM sales_customers WHERE bot_id=? AND created_at>=?) AS new_users,
          (SELECT COUNT(*) FROM sales_orders WHERE bot_id=? AND created_at>=?) AS orders_count,
          (SELECT COUNT(*) FROM sales_orders WHERE bot_id=? AND status='delivered' AND created_at>=?) AS delivered_count,
          (SELECT COALESCE(SUM(amount_toman),0) FROM sales_orders WHERE bot_id=? AND status='delivered' AND created_at>=?) AS revenue,
          (SELECT COUNT(*) FROM sales_orders WHERE bot_id=? AND status='pending_review') AS pending_orders,
          (SELECT COUNT(*) FROM sales_tickets WHERE bot_id=? AND status='waiting_owner') AS waiting_tickets
      `).bind(bot.id,startIso,bot.id,startIso,bot.id,startIso,bot.id,startIso,bot.id,bot.id).first();
      const text = "📊 <b>گزارش روزانه ربات نماینده</b>\n━━━━━━━━━━━━━━\n" +
        "🤖 ربات: <b>" + botEscape(bot.brand_name || bot.bot_username) + "</b>\n" +
        "📅 تاریخ UTC: <code>" + dateKey + "</code>\n" +
        "👤 کاربر جدید: <b>" + botMoney(stats?.new_users) + "</b>\n" +
        "🧾 سفارش امروز: <b>" + botMoney(stats?.orders_count) + "</b>\n" +
        "✅ تحویل موفق: <b>" + botMoney(stats?.delivered_count) + "</b>\n" +
        "💰 فروش امروز: <b>" + botMoney(stats?.revenue) + " تومان</b>\n" +
        "⏳ رسید در انتظار: <b>" + botMoney(stats?.pending_orders) + "</b>\n" +
        "🎫 تیکت منتظر پاسخ: <b>" + botMoney(stats?.waiting_tickets) + "</b>";
      let deliveredSomewhere = false;
      if (Number(bot.daily_report_enabled || 0) === 1) {
        try {
          await resellerTelegramApi(env, bot, "sendMessage", { chat_id: bot.owner_telegram_id, parse_mode: "HTML", text });
          deliveredSomewhere = true;
        } catch (_) {}
      }
      try {
        const result = await sendReportMessage(env, reportScopeKey(bot.id), "reseller", "nightly", text, (method, body) => resellerTelegramApi(env, bot, method, body));
        if (!result?.skipped) deliveredSomewhere = true;
      } catch (_) {}
      if (deliveredSomewhere) {
        await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET last_daily_report_date=?,updated_at=? WHERE id=?")
          .bind(dateKey, nowIso(), bot.id).run();
        sent += 1;
      }
    } catch (_) {}
  }
  return { sent };
}

function resellerSnapshotSettings(bot) {
  const out = {};
  for (const key of RESELLER_BACKUP_FIELDS) out[key] = bot?.[key] ?? null;
  return out;
}

async function pruneResellerSnapshots(env, botId, retentionDays = 14) {
  const days = Math.max(1, Math.min(365, Number(retentionDays || 14)));
  const cutoff = new Date(Date.now() - days * 86400000).toISOString();
  const result = await env.PASARGUARD_DB.prepare("DELETE FROM reseller_snapshots WHERE bot_id=? AND created_at<?").bind(botId, cutoff).run();
  return Number(result?.meta?.changes || 0);
}

async function createResellerSnapshot(env, bot, actorTelegramId = "system", snapshotType = "manual") {
  const fresh = await getResellerBotById(env, bot.id);
  if (!fresh) throw new Error("ربات نماینده پیدا نشد");
  try {
    const [locations, categories, plans, texts, promos] = await Promise.all([
      env.PASARGUARD_DB.prepare("SELECT id,title,emoji,description,group_ids_json,status,sort_order,created_at,updated_at FROM sales_locations WHERE bot_id=? ORDER BY sort_order,created_at").bind(fresh.id).all(),
      env.PASARGUARD_DB.prepare("SELECT id,title,emoji,status,sort_order,created_at,updated_at FROM sales_categories WHERE bot_id=? ORDER BY sort_order,created_at").bind(fresh.id).all(),
      env.PASARGUARD_DB.prepare("SELECT id,title,data_limit_bytes,duration_days,price_toman,status,sort_order,category_id,location_id,plan_type,created_at,updated_at FROM sales_plans WHERE bot_id=? ORDER BY sort_order,created_at").bind(fresh.id).all(),
      env.PASARGUARD_DB.prepare("SELECT text_key,text_value,updated_at FROM reseller_bot_texts WHERE bot_id=? ORDER BY text_key").bind(fresh.id).all(),
      env.PASARGUARD_DB.prepare("SELECT id,code,kind,value_type,value,min_purchase_toman,max_uses,per_user_limit,use_count,status,expires_at,description,created_at,updated_at FROM sales_promo_codes WHERE bot_id=? ORDER BY created_at").bind(fresh.id).all()
    ]);
    const createdAt = nowIso();
    const payload = {
      schema: 1,
      app_version: APP_VERSION,
      bot_id: fresh.id,
      bot_username: fresh.bot_username,
      created_at: createdAt,
      settings: resellerSnapshotSettings(fresh),
      locations: locations.results || [],
      categories: categories.results || [],
      plans: plans.results || [],
      texts: texts.results || [],
      promos: promos.results || []
    };
    const raw = JSON.stringify(payload);
    const snapshotId = id("snap");
    await env.PASARGUARD_DB.prepare(`
      INSERT INTO reseller_snapshots(id,bot_id,snapshot_type,label,payload_json,size_bytes,created_by_telegram_id,created_at)
      VALUES(?,?,?,?,?,?,?,?)
    `).bind(snapshotId, fresh.id, snapshotType, snapshotType === "auto" ? "پشتیبان خودکار" : "پشتیبان دستی", raw, new TextEncoder().encode(raw).length, String(actorTelegramId || "system"), createdAt).run();
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET last_backup_at=?,last_backup_status='success',last_backup_error=NULL,updated_at=? WHERE id=?")
      .bind(createdAt, createdAt, fresh.id).run();
    await pruneResellerSnapshots(env, fresh.id, fresh.backup_retention_days || 14);
    await queueReportEvent(env, fresh.id, "backups", snapshotType === "auto" ? "بکاپ خودکار ربات ساخته شد" : "بکاپ دستی ربات ساخته شد",
      "ربات: <b>" + botEscape(fresh.brand_name || fresh.bot_username) + "</b>\n" +
      "نوع: <b>" + (snapshotType === "auto" ? "خودکار" : "دستی") + "</b>\n" +
      "حجم فایل: <b>" + botMoney(new TextEncoder().encode(raw).length) + " بایت</b>\n" +
      "شناسه بکاپ: <code>" + botEscape(snapshotId) + "</code>",
      "backup-success:" + snapshotId);
    return { id: snapshotId, created_at: createdAt, size_bytes: new TextEncoder().encode(raw).length, type: snapshotType };
  } catch (error) {
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET last_backup_status='failed',last_backup_error=?,updated_at=? WHERE id=?")
      .bind(cleanText(error.message, 500), nowIso(), fresh.id).run();
    await queueReportEvent(env, fresh.id, "errors", "خطا در بکاپ ربات",
      "ربات: <b>" + botEscape(fresh.brand_name || fresh.bot_username) + "</b>\n" +
      "نوع بکاپ: <b>" + (snapshotType === "auto" ? "خودکار" : "دستی") + "</b>\n" +
      "خطا: <code>" + botEscape(cleanText(error.message, 700)) + "</code>",
      "backup-failed:" + fresh.id + ":" + snapshotType + ":" + cleanText(error.message, 80));
    throw error;
  }
}

async function processResellerAutoBackups(env, limit = 50) {
  const now = new Date();
  const dateKey = now.toISOString().slice(0,10);
  const hour = now.getUTCHours();
  const rows = await env.PASARGUARD_DB.prepare(`SELECT * FROM reseller_bots
    WHERE status='active' AND COALESCE(auto_backup_enabled,1)=1 AND COALESCE(backup_hour_utc,2)<=?
      AND (last_backup_at IS NULL OR substr(last_backup_at,1,10)<>?) ORDER BY updated_at LIMIT ?`)
    .bind(hour,dateKey,Math.max(1,Math.min(200,Number(limit||50)))).all();
  let success=0, failed=0;
  for (const bot of rows.results || []) {
    try { await createResellerSnapshot(env,bot,"system","auto"); success += 1; }
    catch (_) { failed += 1; }
  }
  return { success, failed };
}

async function runResellerHealthCheck(env, bot) {
  const details=[];
  let score=100;
  const add=(key,label,status,message,penalty=0)=>{ details.push({key,label,status,message}); if(status!=="ok") score-=penalty; };
  try { await env.PASARGUARD_DB.prepare("SELECT 1 AS ok").first(); add("database","دیتابیس","ok","اتصال D1 برقرار است"); }
  catch(error){ add("database","دیتابیس","error",cleanText(error.message,180),35); }
  try {
    const me=await resellerTelegramApi(env,bot,"getMe",{});
    add("telegram","ربات تلگرام","ok","@"+String(me?.result?.username||bot.bot_username||"bot"));
  } catch(error){ add("telegram","ربات تلگرام","error",cleanText(error.message,180),25); }
  try {
    const info=await resellerTelegramApi(env,bot,"getWebhookInfo",{});
    const url=String(info?.result?.url||"");
    const pending=Number(info?.result?.pending_update_count||0);
    if(!url || !url.includes("/sales-bot/"+bot.id+"/webhook")) add("webhook","Webhook","warning","آدرس Webhook با ربات همگام نیست",12);
    else if(pending>100) add("webhook","Webhook","warning","صف بروزرسانی تلگرام: "+pending,8);
    else add("webhook","Webhook","ok","فعال · صف "+pending);
  } catch(error){ add("webhook","Webhook","error",cleanText(error.message,180),18); }
  try {
    const agency=await env.PASARGUARD_DB.prepare("SELECT * FROM agencies WHERE id=?").bind(bot.agency_id).first();
    if(!agency) throw new Error("پنل متصل پیدا نشد");
    await getAgencyPasarguardToken(env,agency,true);
    add("panel","پنل PasarGuard","ok","ورود پنل موفق بود");
  } catch(error){ add("panel","پنل PasarGuard","error",cleanText(error.message,180),25); }
  if(Number(bot.blupal_enabled||0)===1){
    if(String(bot.blupal_api_key_enc||"").trim()) add("blupal","بلوپال","ok","API رمزگذاری‌شده و درگاه فعال است");
    else add("blupal","بلوپال","error","درگاه فعال است اما API Key ثبت نشده",18);
  } else add("blupal","بلوپال","idle","غیرفعال",0);
  if(Number(bot.auto_backup_enabled??1)===1){
    const age=bot.last_backup_at ? Date.now()-new Date(bot.last_backup_at).getTime() : Number.POSITIVE_INFINITY;
    if(age>48*3600000) add("backup","پشتیبان‌گیری","warning","بیش از ۴۸ ساعت پشتیبان موفق ثبت نشده",10);
    else add("backup","پشتیبان‌گیری","ok","آخرین پشتیبان: "+botDate(bot.last_backup_at));
  } else add("backup","پشتیبان‌گیری","idle","پشتیبان خودکار غیرفعال است",0);
  const pending=await env.PASARGUARD_DB.prepare(`SELECT
    (SELECT COUNT(*) FROM sales_orders WHERE bot_id=? AND status='pending_review') AS orders_count,
    (SELECT COUNT(*) FROM sales_payment_invoices WHERE bot_id=? AND status IN ('PENDING','PAID') AND processed_at IS NULL) AS payments_count,
    (SELECT COUNT(*) FROM sales_tickets WHERE bot_id=? AND status='waiting_owner') AS tickets_count`).bind(bot.id,bot.id,bot.id).first();
  const queue=Number(pending?.orders_count||0)+Number(pending?.payments_count||0)+Number(pending?.tickets_count||0);
  if(queue>30) add("queue","صف عملیاتی","warning","تعداد موارد نیازمند رسیدگی: "+queue,8);
  else add("queue","صف عملیاتی","ok","موارد نیازمند رسیدگی: "+queue);
  score=Math.max(0,Math.min(100,Math.round(score)));
  const overall=score>=85?"healthy":score>=60?"warning":"critical";
  const checkId=id("health");
  await env.PASARGUARD_DB.prepare("INSERT INTO reseller_health_checks(id,bot_id,overall_status,score,details_json,created_at) VALUES(?,?,?,?,?,?)")
    .bind(checkId,bot.id,overall,score,JSON.stringify(details),nowIso()).run();
  return {id:checkId,overall_status:overall,score,details,created_at:nowIso()};
}

async function processResellerScheduledHealth(env, limit=30) {
  const cutoff=new Date(Date.now()-24*3600000).toISOString();
  const rows=await env.PASARGUARD_DB.prepare(`SELECT rb.* FROM reseller_bots rb WHERE rb.status='active'
    AND COALESCE((SELECT MAX(created_at) FROM reseller_health_checks h WHERE h.bot_id=rb.id),'')<? ORDER BY rb.updated_at LIMIT ?`)
    .bind(cutoff,Math.max(1,Math.min(100,Number(limit||30)))).all();
  let checked=0,failed=0;
  for(const bot of rows.results||[]){ try{await runResellerHealthCheck(env,bot);checked+=1;}catch(_){failed+=1;} }
  return {checked,failed};
}

async function resellerBlupalApiKey(env, bot) {
  const encrypted = String(bot.blupal_api_key_enc || "").trim();
  if (!encrypted) throw new Error("API Key بلوپال برای این ربات ثبت نشده است");
  try {
    const value = await decryptSecret(encrypted, env);
    if (!value) throw new Error("empty");
    return value;
  } catch (_) {
    throw new Error("API Key بلوپال قابل بازیابی نیست؛ آن را دوباره ثبت کنید");
  }
}

async function resellerBlupalRequest(env, bot, method, path, body = undefined) {
  if (Number(bot.blupal_enabled || 0) !== 1) throw new Error("پرداخت آنلاین بلوپال برای این ربات غیرفعال است");
  const apiKey = await resellerBlupalApiKey(env, bot);
  const headers = { "X-API-Key": apiKey, "accept": "application/json" };
  if (body !== undefined) headers["content-type"] = "application/json";
  const response = await fetch(normalizeBlupalBaseUrl(bot.blupal_base_url || "https://blupal.net/api") + path, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.success === false) {
    const message = data.message || data.error || ("BluePal HTTP " + response.status);
    const error = new Error(message);
    error.code = data.error || "BLUPAL_ERROR";
    error.status = response.status;
    throw error;
  }
  return data;
}

async function finalizeSalesBlupalWallet(env, bot, payment) {
  const requestRow = await env.PASARGUARD_DB.prepare("SELECT * FROM sales_wallet_requests WHERE id=? AND bot_id=? AND customer_id=?")
    .bind(payment.target_id, bot.id, payment.customer_id).first();
  if (!requestRow) throw new Error("درخواست شارژ مرتبط پیدا نشد");
  if (requestRow.status === "approved") {
    await env.PASARGUARD_DB.prepare("UPDATE sales_payment_invoices SET processed_at=COALESCE(processed_at,?),updated_at=? WHERE id=?")
      .bind(nowIso(), nowIso(), payment.id).run();
    return { already_processed: true };
  }
  const bonusPercent = Math.max(0, Math.min(100, Number(bot.recharge_bonus_percent || 0)));
  const baseAmount = Number(payment.amount_toman || 0);
  const bonusAmount = Math.floor(baseAmount * bonusPercent / 100);
  const creditedAmount = baseAmount + bonusAmount;
  const token = nowIso();
  const ledgerId = "cled_blupal_" + String(payment.id).replace(/[^a-zA-Z0-9_]/g, "");
  const results = await env.PASARGUARD_DB.batch([
    env.PASARGUARD_DB.prepare(`
      UPDATE sales_payment_invoices SET processed_at=?,updated_at=?,error_message=NULL
      WHERE id=? AND processed_at IS NULL AND status='PAID'
    `).bind(token, token, payment.id),
    env.PASARGUARD_DB.prepare(`
      UPDATE sales_wallet_requests SET status='approved',bonus_toman=?,reviewed_at=?,updated_at=?
      WHERE id=? AND EXISTS(SELECT 1 FROM sales_payment_invoices WHERE id=? AND processed_at=?)
    `).bind(bonusAmount, token, token, requestRow.id, payment.id, token),
    env.PASARGUARD_DB.prepare(`
      UPDATE sales_customers SET wallet_balance=wallet_balance+?,updated_at=?
      WHERE id=? AND bot_id=? AND EXISTS(SELECT 1 FROM sales_payment_invoices WHERE id=? AND processed_at=?)
    `).bind(creditedAmount, token, payment.customer_id, bot.id, payment.id, token),
    env.PASARGUARD_DB.prepare(`
      INSERT OR IGNORE INTO sales_customer_ledger(id,bot_id,customer_id,type,amount,balance_after,ref_type,ref_id,description,created_at)
      SELECT ?,?,?, 'recharge', ?, wallet_balance, 'blupal', ?, ?, ?
      FROM sales_customers WHERE id=? AND bot_id=? AND EXISTS(SELECT 1 FROM sales_payment_invoices WHERE id=? AND processed_at=?)
    `).bind(ledgerId, bot.id, payment.customer_id, creditedAmount, payment.id,
      bonusAmount > 0 ? ("شارژ آنلاین بلوپال + بونس " + bonusPercent + "٪") : "شارژ آنلاین بلوپال",
      token, payment.customer_id, bot.id, payment.id, token)
  ]);
  const processed = Number(results?.[0]?.meta?.changes || 0) > 0;
  if (processed) {
    const customer = await env.PASARGUARD_DB.prepare("SELECT * FROM sales_customers WHERE id=?").bind(payment.customer_id).first();
    if (customer) await createSalesNotification(env, bot, customer, null, "payment_success", "شارژ آنلاین موفق", "مبلغ " + botMoney(creditedAmount) + " تومان به کیف پول شما اضافه شد.", "blupal_wallet:" + payment.id, { sendBot: false });
    await salesEvent(env, bot.id, payment.customer_id, "blupal_wallet_credited", { paymentId: payment.id, baseAmount, bonusAmount, creditedAmount });
  }
  return { processed, bonusAmount, creditedAmount };
}

async function finalizeSalesBlupalOrder(env, bot, payment) {
  const order = await env.PASARGUARD_DB.prepare("SELECT * FROM sales_orders WHERE id=? AND bot_id=? AND customer_id=?")
    .bind(payment.target_id, bot.id, payment.customer_id).first();
  if (!order) throw new Error("سفارش مرتبط با فاکتور پیدا نشد");
  if (order.status === "delivered") {
    await env.PASARGUARD_DB.prepare("UPDATE sales_payment_invoices SET processed_at=COALESCE(processed_at,?),updated_at=?,error_message=NULL WHERE id=?")
      .bind(nowIso(), nowIso(), payment.id).run();
    return { delivered: true, already_processed: true, order };
  }
  if (!["payment_pending", "payment_paid", "pending_review", "provision_failed"].includes(String(order.status))) {
    throw new Error("وضعیت سفارش برای تحویل آنلاین معتبر نیست");
  }
  await env.PASARGUARD_DB.prepare("UPDATE sales_orders SET status='pending_review',updated_at=? WHERE id=? AND status IN ('payment_pending','payment_paid')")
    .bind(nowIso(), order.id).run();
  const owner = await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE id=?").bind(bot.user_id).first();
  if (!owner) throw new Error("حساب مالک ربات پیدا نشد");
  try {
    const delivered = await provisionSalesOrder(env, owner, order.id);
    await env.PASARGUARD_DB.prepare("UPDATE sales_payment_invoices SET processed_at=?,updated_at=?,error_message=NULL WHERE id=? AND processed_at IS NULL")
      .bind(nowIso(), nowIso(), payment.id).run();
    const customer = await env.PASARGUARD_DB.prepare("SELECT * FROM sales_customers WHERE id=?").bind(payment.customer_id).first();
    if (customer) await createSalesNotification(env, bot, customer, order.id, "payment_success", "پرداخت و تحویل موفق", "پرداخت آنلاین تأیید شد و سرویس شما آماده است.", "blupal_order:" + payment.id, { sendBot: false });
    await salesEvent(env, bot.id, payment.customer_id, "blupal_order_delivered", { paymentId: payment.id, orderId: order.id });
    return { delivered: true, order: delivered };
  } catch (error) {
    await env.PASARGUARD_DB.prepare("UPDATE sales_payment_invoices SET error_message=?,updated_at=? WHERE id=?")
      .bind(cleanText(error.message, 800), nowIso(), payment.id).run();
    throw error;
  }
}

async function applyVerifiedSalesBlupalPayment(env, bot, payment, providerData) {
  const providerInvoiceId = String(providerData.invoice_id || "");
  const status = normalizePaymentStatus(providerData.status);
  const amountRial = clampInt(providerData.amount, 0, Number.MAX_SAFE_INTEGER);
  const finalAmountRial = clampInt(providerData.final_amount, 0, Number.MAX_SAFE_INTEGER);
  if (providerInvoiceId !== String(payment.provider_invoice_id)) throw new Error("شناسه فاکتور تطبیق ندارد");
  if (amountRial !== Number(payment.amount_rial) || finalAmountRial !== Number(payment.final_amount_rial)) throw new Error("مبلغ فاکتور بلوپال با رکورد داخلی تطبیق ندارد");
  const ts = nowIso();
  if (status !== "PAID") {
    await env.PASARGUARD_DB.prepare("UPDATE sales_payment_invoices SET status=?,provider_payload=?,updated_at=? WHERE id=? AND processed_at IS NULL")
      .bind(status, JSON.stringify(providerData), ts, payment.id).run();
    if (["EXPIRED", "CANCELED"].includes(status)) {
      if (payment.target_type === "order") {
        await env.PASARGUARD_DB.prepare("UPDATE sales_orders SET status='cancelled',updated_at=? WHERE id=? AND status='payment_pending'").bind(ts, payment.target_id).run();
        try { await salesReleasePromoForOrder(env, payment.target_id); } catch (_) {}
      } else {
        await env.PASARGUARD_DB.prepare("UPDATE sales_wallet_requests SET status='rejected',updated_at=? WHERE id=? AND status='payment_pending'").bind(ts, payment.target_id).run();
      }
    }
    return { status, processed: false };
  }
  await env.PASARGUARD_DB.prepare("UPDATE sales_payment_invoices SET status='PAID',paid_at=?,provider_payload=?,updated_at=? WHERE id=?")
    .bind(cleanText(providerData.paid_at, 100) || ts, JSON.stringify(providerData), ts, payment.id).run();
  await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET blupal_last_verified_at=?,blupal_last_error=NULL,updated_at=? WHERE id=?")
    .bind(ts, ts, bot.id).run();
  const fresh = await env.PASARGUARD_DB.prepare("SELECT * FROM sales_payment_invoices WHERE id=?").bind(payment.id).first();
  if (fresh.processed_at) return { status: "PAID", processed: true };
  return fresh.target_type === "wallet" ? finalizeSalesBlupalWallet(env, bot, fresh) : finalizeSalesBlupalOrder(env, bot, fresh);
}

async function reconcileSalesBlupalInvoice(env, payment) {
  const bot = await getResellerBotById(env, payment.bot_id);
  if (!bot) throw new Error("ربات نماینده فاکتور پیدا نشد");
  const providerData = await resellerBlupalRequest(env, bot, "GET", "/v1/invoices/" + encodeURIComponent(payment.provider_invoice_id));
  await applyVerifiedSalesBlupalPayment(env, bot, payment, providerData);
  return await env.PASARGUARD_DB.prepare("SELECT * FROM sales_payment_invoices WHERE id=?").bind(payment.id).first();
}

async function pollPendingSalesBlupalPayments(env, limit = 50, botId = "") {
  const sql = `SELECT spi.* FROM sales_payment_invoices spi JOIN reseller_bots rb ON rb.id=spi.bot_id
    WHERE spi.status IN ('PENDING','PAID') AND spi.processed_at IS NULL AND rb.blupal_enabled=1
    ${botId ? "AND spi.bot_id=?" : ""} ORDER BY spi.updated_at ASC LIMIT ?`;
  const stmt = env.PASARGUARD_DB.prepare(sql);
  const rows = botId ? await stmt.bind(botId, Math.max(1, Math.min(200, Number(limit || 50)))).all() : await stmt.bind(Math.max(1, Math.min(200, Number(limit || 50)))).all();
  let checked = 0, processed = 0;
  const errors = [];
  for (const payment of rows.results || []) {
    try {
      const updated = await reconcileSalesBlupalInvoice(env, payment);
      checked++;
      if (updated?.processed_at) processed++;
    } catch (error) {
      errors.push({ paymentId: payment.id, error: error.message });
      await env.PASARGUARD_DB.prepare("UPDATE sales_payment_invoices SET error_message=?,updated_at=? WHERE id=?")
        .bind(cleanText(error.message, 800), nowIso(), payment.id).run();
    }
  }
  return { checked, processed, errors };
}



class BluePanelRemoteStatement {
  constructor(binding, sql, params = []) { this.binding = binding; this.sql = String(sql || ''); this.params = params; }
  bind(...params) { return new BluePanelRemoteStatement(this.binding, this.sql, params); }
  async first() { return bluePanelRemoteD1Call(this.binding, { op: 'query', mode: 'first', sql: this.sql, params: this.params }); }
  async all() { return bluePanelRemoteD1Call(this.binding, { op: 'query', mode: 'all', sql: this.sql, params: this.params }); }
  async run() { return bluePanelRemoteD1Call(this.binding, { op: 'query', mode: 'run', sql: this.sql, params: this.params }); }
}
class BluePanelRemoteD1 {
  constructor(binding, sourceRole) { this.binding = binding; this.sourceRole = sourceRole; }
  prepare(sql) { return new BluePanelRemoteStatement(this.binding, sql); }
  async batch(statements) {
    const queries = (statements || []).map(statement => ({ sql: statement.sql, params: statement.params || [] }));
    return bluePanelRemoteD1Call(this.binding, { op: 'batch', queries });
  }
}
async function bluePanelRemoteD1Call(binding, payload) {
  if (!binding || typeof binding.fetch !== 'function') throw new Error('Service Binding با نام CORE_WORKER متصل نیست');
  const response = await binding.fetch(new Request('https://bluepanel-core.internal/__bluepanel/internal/d1', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'accept': 'application/json', 'x-bluepanel-service-hop': 'split-runtime-d1' },
    body: JSON.stringify(payload)
  }));
  let data = null;
  try { data = await response.json(); } catch (_) {}
  if (!response.ok || !data || data.success === false) throw new Error(data?.error || ('Remote D1 HTTP ' + response.status));
  return data.result;
}
function bluePanelRuntimeEnv(env, role) {
  const out = Object.assign({}, env);
  out.PASARGUARD_DB = new BluePanelRemoteD1(env.CORE_WORKER, role);
  return out;
}
async function ensureDb(env) {
  // Real reads/writes validate the binding; avoid doubling every background DB call.
  if (!env?.PASARGUARD_DB || typeof env.PASARGUARD_DB.prepare !== 'function') throw new Error('اتصال دیتابیس مرکزی در دسترس نیست');
  return true;
}

const BLUEPANEL_PROCESSOR_VERSION='3.2.1';
let processorSchemaPromise=null;
function processorJson(data,status=200,headers={}){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store',...headers}})}
function processorInternal(request){try{return new URL(request.url).hostname.endsWith('.internal')}catch(_){return false}}
async function ensureProcessorDb(env){if(!env.PROCESSOR_DB)throw new Error('PROCESSOR_DB متصل نیست');if(!processorSchemaPromise)processorSchemaPromise=(async()=>{for(const sql of [
 `CREATE TABLE IF NOT EXISTS processor_jobs (id TEXT PRIMARY KEY,method TEXT NOT NULL,path_query TEXT NOT NULL,headers_json TEXT NOT NULL DEFAULT '{}',body_text TEXT NOT NULL DEFAULT '',status TEXT NOT NULL DEFAULT 'pending',attempts INTEGER NOT NULL DEFAULT 0,next_attempt_at TEXT NOT NULL,last_error TEXT,created_at TEXT NOT NULL,updated_at TEXT NOT NULL)`,
 'CREATE INDEX IF NOT EXISTS idx_processor_jobs_pending ON processor_jobs(status,next_attempt_at,created_at)',
 'CREATE TABLE IF NOT EXISTS processor_metrics (id INTEGER PRIMARY KEY AUTOINCREMENT,kind TEXT NOT NULL,status INTEGER NOT NULL DEFAULT 0,duration_ms INTEGER NOT NULL DEFAULT 0,created_at TEXT NOT NULL)'
])await env.PROCESSOR_DB.prepare(sql).run();return true})().catch(e=>{processorSchemaPromise=null;throw e});return processorSchemaPromise}
function processorId(){const b=crypto.getRandomValues(new Uint8Array(18));return 'job_'+btoa(String.fromCharCode(...b)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
async function processorQueue(request,env){await ensureProcessorDb(env);const b=await request.json();const id=processorId(),ts=nowIso();await env.PROCESSOR_DB.prepare("INSERT INTO processor_jobs(id,method,path_query,headers_json,body_text,status,attempts,next_attempt_at,created_at,updated_at) VALUES(?,?,?,?,?,'pending',0,?,?,?)").bind(id,String(b.method||'POST'),String(b.path_query||'/'),JSON.stringify(b.headers||{}),String(b.body_text||''),ts,ts,ts).run();return processorJson({success:true,queued:true,id})}
async function processorDeliver(env,id){const row=await env.PROCESSOR_DB.prepare('SELECT * FROM processor_jobs WHERE id=?').bind(id).first();if(!row||row.status!=='pending')return{skipped:true};if(!env.EDGE_WORKER||typeof env.EDGE_WORKER.fetch!=='function')throw new Error('EDGE_WORKER متصل نیست');const headers=new Headers(JSON.parse(row.headers_json||'{}'));headers.set('x-bluepanel-service-hop','processor-to-edge');const r=await env.EDGE_WORKER.fetch(new Request('https://bluepanel-edge.internal'+row.path_query,{method:row.method,headers,body:['GET','HEAD'].includes(row.method)?undefined:row.body_text}));if(r.ok){await env.PROCESSOR_DB.prepare("UPDATE processor_jobs SET status='delivered',updated_at=? WHERE id=?").bind(nowIso(),id).run();return{delivered:true}}const attempts=Number(row.attempts||0)+1,next=new Date(Date.now()+Math.min(3600000,1000*Math.pow(2,Math.min(attempts,10)))).toISOString();await env.PROCESSOR_DB.prepare("UPDATE processor_jobs SET attempts=?,next_attempt_at=?,last_error=?,updated_at=? WHERE id=?").bind(attempts,next,'HTTP '+r.status,nowIso(),id).run();return{delivered:false}}
async function processorRunQueue(env,limit=120){await ensureProcessorDb(env);const rows=await env.PROCESSOR_DB.prepare("SELECT id FROM processor_jobs WHERE status='pending' AND next_attempt_at<=? ORDER BY created_at LIMIT ?").bind(nowIso(),Math.max(1,Math.min(300,Number(limit||120)))).all();let delivered=0,failed=0;for(let i=0;i<(rows.results||[]).length;i+=6){const results=await Promise.all((rows.results||[]).slice(i,i+6).map(async x=>{try{return await processorDeliver(env,x.id)}catch(e){failed++;return null}}));for(const r of results)if(r?.delivered)delivered++;}return{checked:(rows.results||[]).length,delivered,failed}}
function processorRuntimeBinding(env,name){const value=env?.[name];return{name,exact_key_present:Object.prototype.hasOwnProperty.call(env||{},name),value_present:value!==undefined&&value!==null,fetch_callable:Boolean(value&&typeof value.fetch==='function'),constructor_name:value?.constructor?.name||''}}
async function processorLocalHealth(env){let db=false,error='';try{await ensureProcessorDb(env);await env.PROCESSOR_DB.prepare('SELECT 1 AS ok').first();db=true}catch(e){error=String(e?.message||e)}const coreBinding=processorRuntimeBinding(env,'CORE_WORKER'),edgeBinding=processorRuntimeBinding(env,'EDGE_WORKER');const coreDetected=coreBinding.fetch_callable,edgeDetected=edgeBinding.fetch_callable;let pending=0;try{pending=Number((await env.PROCESSOR_DB.prepare("SELECT COUNT(*) AS c FROM processor_jobs WHERE status='pending'").first())?.c||0)}catch(_){}return{ok:db,cluster_ready:db&&coreDetected&&edgeDetected,role:'bluepanel-processor',version:APP_VERSION,database_query_ok:db,binding_detected:true,core_binding_detected:coreDetected,edge_binding_detected:edgeDetected,core_ok:coreDetected,edge_ok:edgeDetected,core_probe:{binding_detected:coreDetected,healthy:coreDetected,mode:'runtime_binding_presence',detail:coreDetected?'CORE_WORKER در Runtime شناسایی شد':'CORE_WORKER در Runtime وجود ندارد',error:coreDetected?'':'CORE_WORKER متصل نیست'},edge_probe:{binding_detected:edgeDetected,healthy:edgeDetected,mode:'runtime_binding_presence',detail:edgeDetected?'EDGE_WORKER در Runtime شناسایی شد':'EDGE_WORKER در Runtime وجود ندارد',error:edgeDetected?'':'EDGE_WORKER متصل نیست'},runtime_bindings:{CORE_WORKER:coreBinding,EDGE_WORKER:edgeBinding},pending_jobs:pending,split_runtime:true,bundle:'processor',verification_mode:'cycle_safe_local',error}}
async function processorProbePeer(binding,url,expectedRole,name){const started=Date.now();if(!binding||typeof binding.fetch!=='function')return{binding_detected:false,healthy:false,reachable:false,latency_ms:0,error:name+' متصل نیست'};try{const timeout=new Promise((_,reject)=>setTimeout(()=>reject(new Error('مهلت پاسخ تمام شد')),2500));const response=await Promise.race([binding.fetch(new Request(url,{headers:{'x-bluepanel-service-hop':'processor-public-health','accept':'application/json'}})),timeout]);const raw=await response.text();let data={};try{data=raw?JSON.parse(raw):{}}catch(_){return{binding_detected:true,healthy:false,reachable:true,http_status:response.status,latency_ms:Date.now()-started,error:'پاسخ JSON نیست'}}const healthy=response.ok&&data.role===expectedRole&&data.database_query_ok!==false;return{binding_detected:true,healthy,reachable:true,http_status:response.status,latency_ms:Date.now()-started,response_role:data.role||'',response_version:data.version||'',error:healthy?'':(data.error||'پاسخ ناسالم')}}catch(e){return{binding_detected:true,healthy:false,reachable:false,latency_ms:Date.now()-started,error:String(e?.message||e)}}}
async function processorHealth(env){const local=await processorLocalHealth(env);const [coreProbe,edgeProbe]=await Promise.all([processorProbePeer(env.CORE_WORKER,'https://bluepanel-core.internal/__bluepanel/service/core-local-health','bluepanel-core','CORE_WORKER'),processorProbePeer(env.EDGE_WORKER,'https://bluepanel-edge.internal/__bluepanel/service/edge-local-health','bluepanel-edge','EDGE_WORKER')]);const coreOk=coreProbe.healthy===true,edgeOk=edgeProbe.healthy===true;return{...local,ok:local.database_query_ok&&coreOk&&edgeOk,cluster_ready:local.database_query_ok&&coreOk&&edgeOk,core_ok:coreOk,edge_ok:edgeOk,core_probe:coreProbe,edge_probe:edgeProbe,verification_mode:'direct_outbound_no_cycle',error:local.error||coreProbe.error||edgeProbe.error||''}}
async function runProcessorBusinessJobs(runtime, options = {}){
  const started=Date.now(),startedAt=nowIso();
  const topicSync=await syncConfiguredReportTopics(runtime,25);
  const outboxBefore=await processReportOutbox(runtime,200);
  if (options.skipUsage !== true) await syncDownlineUsage(runtime,null,100);
  await processSalesServiceNotifications(runtime,30);
  await processResellerSalesAutomation(runtime,120);
  await processSalesTicketAutoClose(runtime,100);
  await processScheduledSalesCampaigns(runtime,5);
  await processResellerDailyReports(runtime,50);
  await processCentralComprehensiveReport(runtime);
  await processResellerAutoBackups(runtime,50);
  await processResellerScheduledHealth(runtime,30);
  await processResellerLicenseNotifications(runtime,100);
  await pollPendingSalesBlupalPayments(runtime,60);
  const outboxAfter=await processReportOutbox(runtime,200);
  const result={
    started_at:startedAt,duration_ms:Date.now()-started,topic_sync:topicSync,
    outbox:{checked:Number(outboxBefore?.checked||0)+Number(outboxAfter?.checked||0),delivered:Number(outboxBefore?.delivered||0)+Number(outboxAfter?.delivered||0),failed:Number(outboxBefore?.failed||0)+Number(outboxAfter?.failed||0)}
  };
  const ts=nowIso();
  await runtime.PASARGUARD_DB.prepare("INSERT INTO app_settings(key,value,updated_at) VALUES('last_processor_business_run_at',?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at").bind(ts,ts).run();
  await runtime.PASARGUARD_DB.prepare("INSERT INTO app_settings(key,value,updated_at) VALUES('last_report_processor_result',?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at").bind(JSON.stringify(result),ts).run();
  return result;
}
export default {
 async fetch(request,env,ctx){const path=new URL(request.url).pathname.replace(/\/+$/,'')||'/';try{if(path==='/__bluepanel/service/queue'&&processorInternal(request)&&request.method==='POST')return processorQueue(request,env);if(path==='/__bluepanel/service/process'&&processorInternal(request)&&request.method==='POST'){const runtime=bluePanelRuntimeEnv(env,'bluepanel-processor');const queue=await processorRunQueue(env,150);const skipUsage=String(request.headers.get('x-bluepanel-live-usage-active')||'')==='true';const business=await runProcessorBusinessJobs(runtime,{skipUsage});return processorJson({success:true,queue,business})}if((path==='/__bluepanel/service/processor-local-health'||path==='/__bluepanel/service/processor-health')&&processorInternal(request)){const h=await processorLocalHealth(env);return processorJson(h,h.ok?200:503,{'x-bluepanel-role':'bluepanel-processor','x-bluepanel-version':APP_VERSION})}if(path==='/health'){const h=await processorHealth(env);return processorJson(h,h.ok?200:503)}if(path==='/'&&request.method==='GET'){const h=await processorHealth(env);return new Response('<!doctype html><html lang="fa" dir="rtl"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{background:#07111f;color:#fff;font-family:Tahoma;padding:30px}.c{max-width:680px;margin:auto;background:#112944;padding:24px;border-radius:24px}.ok{color:#35d59a}.bad{color:#ff667b}</style><div class="c"><h1>BluePanel Processor</h1><p class="'+(h.ok?'ok':'bad')+'">'+(h.ok?'اتصال کامل برقرار است':'اتصال کامل نیست')+'</p><pre>'+JSON.stringify(h,null,2)+'</pre></div></html>',{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}})}return processorJson({success:false,error:'Not found'},404)}catch(error){console.error('processor fetch error',error);return processorJson({success:false,ok:false,role:'bluepanel-processor',version:APP_VERSION,error:String(error?.message||error),code:'PROCESSOR_RUNTIME_ERROR'},500)}},
 async scheduled(controller,env,ctx){ctx.waitUntil((async()=>{try{const runtime=bluePanelRuntimeEnv(env,'bluepanel-processor');await processorRunQueue(env,200);await runProcessorBusinessJobs(runtime);await env.PROCESSOR_DB.prepare("DELETE FROM processor_jobs WHERE status='delivered' AND updated_at<?").bind(new Date(Date.now()-86400000).toISOString()).run()}catch(error){console.error('processor scheduled error',error)}})())}
};
