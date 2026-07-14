/* BLUEPANEL_CORE_WORKER
 * Fully split BluePanel runtime.
 * Version: 3.0.8
 * Generated from the last stable 2.9.0 codebase.
 * Extracted application declarations: 544411 bytes.
 */

const APP_VERSION = "3.0.8";

const RESELLER_BOT_VERSION = APP_VERSION;

const RELEASE_NOTES = Object.freeze({
  central: Object.freeze([
    { emoji: "⚡", text: "کاهش رفت‌وبرگشت بین Workerها در مسیرهای پرتکرار" },
    { emoji: "🚀", text: "ارسال سریع‌تر منوی شروع با انتقال ثبت گزارش و پاک‌سازی نشست به پس‌زمینه" },
    { emoji: "🧠", text: "کش کوتاه‌مدت تنظیمات و وضعیت عضویت برای پاسخ سریع‌تر" }
  ]),
  reseller: Object.freeze([
    { emoji: "📦", text: "تجمیع درخواست‌های اولیه پنل فروش و مدیریت در یک Batch دیتابیس" },
    { emoji: "🤖", text: "حذف همگام‌سازی سنگین BotFather از مسیر پاسخ کاربران" },
    { emoji: "⚡", text: "افزایش سرعت پاسخ ربات‌های نماینده و بازشدن پنل‌ها" }
  ])
});

const RESELLER_BACKUP_FIELDS = Object.freeze([
  "brand_name","welcome_text","support_username","card_holder","card_number","bank_name","iban",
  "trial_enabled","trial_data_limit_bytes","trial_duration_days","trial_duration_hours",
  "referral_reward_toman","referral_reward_type","referral_reward_percent","referral_banner_file_id","referral_banner_file_type",
  "recharge_bonus_percent","forward_enabled","join_enabled","join_channels_json",
  "cashback_enabled","cashback_percent","cashback_min_purchase_toman","cashback_max_toman",
  "notifications_enabled","expiry_reminder_hours","usage_reminder_percent","ticketing_enabled",
  "phone_verification_required","ticket_auto_close_hours","daily_report_enabled","daily_report_hour_utc",
  "blupal_enabled","blupal_base_url","blupal_card_number",
  "bitpin_enabled","bitpin_base_url","bitpin_asset","bitpin_network","bitpin_deposit_address","bitpin_toman_per_unit","bitpin_min_crypto_amount",
  "miniapp_enabled",
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

const LIVE_USAGE_MIN_INTERVAL_SECONDS = 8;

const RESELLER_LICENSE_DAYS = 30;

const RESELLER_LICENSE_MS = RESELLER_LICENSE_DAYS * 24 * 60 * 60 * 1000;

const JSON_HEADERS = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };

const SALES_TEXT_LABELS = Object.freeze({
  welcome: "پیام خوش‌آمدگویی",
  payment: "راهنمای پرداخت",
  delivery: "پیام تحویل سرویس",
  trial: "متن تست رایگان",
  referral: "متن زیرمجموعه‌گیری",
  support: "متن پشتیبانی",
  faq: "سوالات متداول",
  tutorial_android: "آموزش اتصال اندروید",
  tutorial_ios: "آموزش اتصال آیفون",
  tutorial_windows: "آموزش اتصال ویندوز"
});

let schemaReady = false;

let schemaReadyPromise = null;

let settingsCache = null;

let settingsCacheAt = 0;

let encryptionKeyCache = null;

let encryptionKeyCacheSource = "";

const resellerTokenCache = new Map();

const joinStatusCache = new Map();

const SETTINGS_CACHE_TTL_MS = 60000;

const PY_HELPER_INSIGHT_TIMEOUT_MS = 350;

const RESELLER_TOKEN_CACHE_TTL_MS = 300000;

const JOIN_STATUS_CACHE_TTL_MS = 120000;

const TELEGRAM_GITHUB_ZIP_MAX_BYTES = 20 * 1024 * 1024;
const GITHUB_ZIP_MAX_UNCOMPRESSED_BYTES = 30 * 1024 * 1024;
const GITHUB_ZIP_MAX_FILE_BYTES = 10 * 1024 * 1024;
const GITHUB_ZIP_MAX_FILES = 200;
const GITHUB_ZIP_REQUIRED_PATHS = Object.freeze([
  "core/worker.js", "edge/worker.js", "processor/worker.js", "version", "release.json"
]);
let ZIP_CRC32_TABLE = null;

const PYTHON_HELPER_VERSION = "1.0.3";

const PYTHON_HELPER_SOURCE = String.raw`import json

from workers import Response, WorkerEntrypoint


def _number(value, default=0):
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


def build_insight(payload):
    wallet = _number(payload.get("wallet_balance"))
    min_recharge = max(1, _number(payload.get("min_recharge"), 100_000))
    active = max(0, int(_number(payload.get("active_agencies"))))
    suspended = max(0, int(_number(payload.get("suspended_agencies"))))
    pending = max(0, int(_number(payload.get("pending_payments"))))
    total = active + suspended

    score = 88 if total == 0 else 100
    recommendations = []

    if wallet <= 0:
        score -= 42
        recommendations.append("برای جلوگیری از توقف سرویس، کیف پول را شارژ کنید.")
    elif wallet < min_recharge:
        score -= 18
        recommendations.append("موجودی به حداقل شارژ نزدیک است.")

    if suspended:
        score -= min(36, suspended * 12)
        recommendations.append("نمایندگی‌های تعلیق‌شده را بررسی کنید.")

    if pending:
        score -= min(15, pending * 3)
        recommendations.append("فاکتورهای معلق را تعیین تکلیف کنید.")

    if total and active == 0:
        score -= 18

    score = max(0, min(100, round(score)))
    tone = "good"
    title = "حساب آماده فعالیت است"
    message = "همه‌چیز منظم است و می‌توانید با خیال راحت ادامه دهید."

    if score < 45:
        tone = "critical"
        title = "نیاز به رسیدگی فوری"
        message = recommendations[0] if recommendations else "وضعیت حساب را بررسی کنید."
    elif score < 75:
        tone = "warning"
        title = "چند مورد نیاز به توجه دارد"
        message = recommendations[0] if recommendations else "برای پایداری بهتر، وضعیت حساب را مرور کنید."
    elif total == 0:
        title = "آماده ساخت اولین نمایندگی"
        message = "حساب شما آماده است؛ اولین پنل را از بخش نمایندگی بسازید."

    return {
        "success": True,
        "score": score,
        "tone": tone,
        "title": title,
        "message": message,
        "recommendations": recommendations[:4],
        "source": "python-worker",
        "version": "1.0.3",
    }


class Default(WorkerEntrypoint):
    async def fetch(self, request):
        url = str(request.url)
        remainder = url.split("://", 1)[-1]
        path = "/" + remainder.split("/", 1)[1].split("?", 1)[0] if "/" in remainder else "/"
        method = str(request.method)

        if method == "GET" and path in ("/", "/health"):
            return Response.from_json(
                {
                    "ok": True,
                    "service": "pasargard-python-helper",
                    "version": "1.0.3",
                    "external_sdk": False,
                }
            )

        if method == "POST" and path == "/insights":
            try:
                payload = await request.json()
                if not isinstance(payload, dict):
                    raise ValueError("JSON body must be an object")
                return Response.from_json(build_insight(payload))
            except Exception as exc:
                return Response.from_json(
                    {"success": False, "error": str(exc)}, status=400
                )

        return Response.from_json(
            {"success": False, "error": "Not found"}, status=404
        )
`;

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
  bitpin_enabled: "false",
  bitpin_base_url: "https://api.bitpin.ir",
  bitpin_api_key: "",
  bitpin_api_secret: "",
  bitpin_asset: "USDT",
  bitpin_network: "TRC20",
  bitpin_deposit_address: "",
  bitpin_toman_per_unit: "100000",
  bitpin_min_crypto_amount: "1",
  bitpin_last_verified_at: "",
  bitpin_last_error: "",
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
  github_zip_upload_enabled: "true",
  github_zip_last_commit_sha: "",
  github_zip_last_version: "",
  github_zip_last_uploaded_at: "",
  github_zip_last_error: "",
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

const SECRET_SETTING_KEYS = new Set([
  "bot_token", "app_encryption_key", "telegram_webhook_secret",
  "pasarguard_access_token", "pasarguard_admin_password",
  "blupal_api_key", "blupal_webhook_token", "bitpin_api_key", "bitpin_api_secret",
  "github_token", "cf_api_token", "edge_worker_api_key", "setup_password_hash", "setup_password_salt"
]);

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS app_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  telegram_id TEXT NOT NULL UNIQUE,
  username TEXT,
  first_name TEXT,
  last_name TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  status TEXT NOT NULL DEFAULT 'active',
  wallet_balance INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS wallet_ledger (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  type TEXT NOT NULL,
  amount INTEGER NOT NULL,
  balance_after INTEGER NOT NULL,
  ref_type TEXT,
  ref_id TEXT,
  description TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_wallet_ledger_user ON wallet_ledger(user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS recharge_requests (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  amount INTEGER NOT NULL,
  tracking_code TEXT NOT NULL,
  payer_name TEXT,
  card_last4 TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  provider_ref TEXT,
  note TEXT,
  created_at TEXT NOT NULL,
  reviewed_at TEXT,
  reviewed_by INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_recharges_status ON recharge_requests(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_recharges_user ON recharge_requests(user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS payment_invoices (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  provider TEXT NOT NULL DEFAULT 'blupal',
  provider_invoice_id TEXT NOT NULL,
  amount_rial INTEGER NOT NULL,
  amount_toman INTEGER NOT NULL,
  final_amount_rial INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING',
  payment_link TEXT,
  card_number TEXT,
  paid_at TEXT,
  credited_at TEXT,
  provider_payload TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  UNIQUE(provider, provider_invoice_id)
);

CREATE INDEX IF NOT EXISTS idx_payment_invoices_user ON payment_invoices(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_payment_invoices_status ON payment_invoices(status, updated_at DESC);

CREATE TABLE IF NOT EXISTS bitpin_deposits (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  asset TEXT NOT NULL DEFAULT 'USDT',
  network TEXT NOT NULL DEFAULT 'TRC20',
  txid TEXT NOT NULL UNIQUE,
  crypto_amount REAL NOT NULL,
  rate_toman INTEGER NOT NULL,
  amount_toman INTEGER NOT NULL,
  destination_address TEXT,
  status TEXT NOT NULL DEFAULT 'pending_review',
  wallet_balance_snapshot TEXT,
  provider_payload TEXT,
  note TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  reviewed_at TEXT,
  reviewed_by INTEGER,
  credited_at TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_bitpin_deposits_user ON bitpin_deposits(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bitpin_deposits_status ON bitpin_deposits(status, updated_at DESC);

CREATE TABLE IF NOT EXISTS agencies (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  remote_manager_id TEXT,
  panel_username TEXT NOT NULL,
  panel_password_enc TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  last_usage_bytes INTEGER NOT NULL DEFAULT 0,
  last_billed_bytes INTEGER NOT NULL DEFAULT 0,
  usage_epoch INTEGER NOT NULL DEFAULT 0,
  billing_remainder INTEGER NOT NULL DEFAULT 0,
  total_charged INTEGER NOT NULL DEFAULT 0,
  is_trial INTEGER NOT NULL DEFAULT 0,
  trial_expires_at TEXT,
  trial_data_limit_bytes INTEGER NOT NULL DEFAULT 0,
  trial_expiry_notified_at TEXT,
  provisioning_source TEXT NOT NULL DEFAULT 'central',
  runtime_version TEXT NOT NULL DEFAULT '0.0.0',
  update_applied_at TEXT,
  update_channel_sent_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_agencies_user ON agencies(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_agencies_status ON agencies(status);

CREATE TABLE IF NOT EXISTS billing_events (
  event_key TEXT PRIMARY KEY,
  agency_id TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  usage_from INTEGER NOT NULL,
  usage_to INTEGER NOT NULL,
  charged_amount INTEGER NOT NULL,
  price_per_gb INTEGER NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS bot_sessions (
  telegram_id TEXT PRIMARY KEY,
  state TEXT NOT NULL,
  data TEXT NOT NULL DEFAULT '{}',
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_bot_sessions_updated ON bot_sessions(updated_at);

CREATE TABLE IF NOT EXISTS bot_notice_deliveries (
  id TEXT PRIMARY KEY,
  notice_key TEXT NOT NULL,
  bot_scope TEXT NOT NULL,
  telegram_id TEXT NOT NULL,
  delivered_at TEXT NOT NULL,
  UNIQUE(notice_key, bot_scope, telegram_id)
);

CREATE INDEX IF NOT EXISTS idx_bot_notice_deliveries_lookup
  ON bot_notice_deliveries(notice_key, bot_scope, telegram_id);

CREATE TABLE IF NOT EXISTS audit_logs (
  id TEXT PRIMARY KEY,
  actor_user_id INTEGER,
  action TEXT NOT NULL,
  details TEXT,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS github_zip_uploads (
  id TEXT PRIMARY KEY,
  telegram_id TEXT NOT NULL,
  file_unique_id TEXT NOT NULL UNIQUE,
  file_name TEXT NOT NULL,
  repository TEXT,
  branch TEXT,
  version TEXT,
  file_count INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'processing',
  commit_sha TEXT,
  commit_url TEXT,
  error TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_github_zip_uploads_status
  ON github_zip_uploads(status, updated_at DESC);

CREATE TABLE IF NOT EXISTS reseller_bots (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL UNIQUE,
  agency_id TEXT NOT NULL,
  parent_bot_id TEXT,
  purchase_source TEXT NOT NULL DEFAULT 'central',
  license_type TEXT NOT NULL DEFAULT 'store',
  control_username TEXT,
  control_password_hash TEXT,
  control_password_salt TEXT,
  upstream_price_per_gb INTEGER NOT NULL DEFAULT 0,
  upstream_last_usage_bytes INTEGER NOT NULL DEFAULT 0,
  upstream_billing_remainder INTEGER NOT NULL DEFAULT 0,
  upstream_unpaid_toman INTEGER NOT NULL DEFAULT 0,
  upstream_total_charged INTEGER NOT NULL DEFAULT 0,
  upstream_total_profit INTEGER NOT NULL DEFAULT 0,
  downline_sales_enabled INTEGER NOT NULL DEFAULT 1,
  downline_default_price_per_gb INTEGER NOT NULL DEFAULT 0,
  downline_setup_fee INTEGER NOT NULL DEFAULT 0,
  downline_renewal_fee INTEGER NOT NULL DEFAULT 0,
  bot_telegram_id TEXT NOT NULL UNIQUE,
  bot_username TEXT NOT NULL,
  bot_name TEXT,
  bot_token_enc TEXT NOT NULL,
  webhook_secret TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  license_started_at TEXT,
  license_expires_at TEXT,
  license_last_renewed_at TEXT,
  license_notice_key TEXT,
  license_renewal_count INTEGER NOT NULL DEFAULT 0,
  brand_name TEXT NOT NULL,
  welcome_text TEXT,
  support_username TEXT,
  card_holder TEXT NOT NULL,
  card_number TEXT NOT NULL,
  bank_name TEXT NOT NULL,
  iban TEXT,
  trial_enabled INTEGER NOT NULL DEFAULT 0,
  trial_data_limit_bytes INTEGER NOT NULL DEFAULT 1073741824,
  trial_duration_days INTEGER NOT NULL DEFAULT 1,
  trial_duration_hours INTEGER NOT NULL DEFAULT 24,
  referral_reward_toman INTEGER NOT NULL DEFAULT 0,
  referral_reward_type TEXT NOT NULL DEFAULT 'fixed',
  referral_reward_percent REAL NOT NULL DEFAULT 0,
  referral_banner_file_id TEXT,
  referral_banner_file_type TEXT,
  recharge_bonus_percent REAL NOT NULL DEFAULT 0,
  bot_version TEXT NOT NULL DEFAULT '0.0.0',
  miniapp_enabled INTEGER NOT NULL DEFAULT 1,
  forward_enabled INTEGER NOT NULL DEFAULT 1,
  join_enabled INTEGER NOT NULL DEFAULT 0,
  join_channels_json TEXT NOT NULL DEFAULT '[]',
  cashback_enabled INTEGER NOT NULL DEFAULT 0,
  cashback_percent REAL NOT NULL DEFAULT 0,
  cashback_min_purchase_toman INTEGER NOT NULL DEFAULT 0,
  cashback_max_toman INTEGER NOT NULL DEFAULT 0,
  notifications_enabled INTEGER NOT NULL DEFAULT 1,
  expiry_reminder_hours INTEGER NOT NULL DEFAULT 48,
  usage_reminder_percent INTEGER NOT NULL DEFAULT 80,
  ticketing_enabled INTEGER NOT NULL DEFAULT 1,
  phone_verification_required INTEGER NOT NULL DEFAULT 0,
  ticket_auto_close_hours INTEGER NOT NULL DEFAULT 72,
  daily_report_enabled INTEGER NOT NULL DEFAULT 0,
  daily_report_hour_utc INTEGER NOT NULL DEFAULT 18,
  last_daily_report_date TEXT,
  auto_backup_enabled INTEGER NOT NULL DEFAULT 1,
  backup_hour_utc INTEGER NOT NULL DEFAULT 2,
  backup_retention_days INTEGER NOT NULL DEFAULT 14,
  last_backup_at TEXT,
  last_backup_status TEXT,
  last_backup_error TEXT,
  sales_automation_enabled INTEGER NOT NULL DEFAULT 1,
  abandoned_reminder_minutes INTEGER NOT NULL DEFAULT 60,
  winback_days INTEGER NOT NULL DEFAULT 30,
  loyalty_enabled INTEGER NOT NULL DEFAULT 1,
  loyalty_profile TEXT NOT NULL DEFAULT 'standard',
  automation_last_run_at TEXT,
  fraud_protection_enabled INTEGER NOT NULL DEFAULT 1,
  order_cooldown_seconds INTEGER NOT NULL DEFAULT 30,
  max_pending_orders INTEGER NOT NULL DEFAULT 3,
  daily_order_limit INTEGER NOT NULL DEFAULT 10,
  daily_wallet_charge_limit_toman INTEGER NOT NULL DEFAULT 5000000,
  duplicate_receipt_protection INTEGER NOT NULL DEFAULT 1,
  auto_block_risk_score INTEGER NOT NULL DEFAULT 100,
  blupal_enabled INTEGER NOT NULL DEFAULT 0,
  blupal_base_url TEXT NOT NULL DEFAULT 'https://blupal.net/api',
  blupal_api_key_enc TEXT,
  blupal_card_number TEXT,
  blupal_webhook_token TEXT,
  blupal_configured_at TEXT,
  blupal_last_verified_at TEXT,
  blupal_last_error TEXT,
  payment_card_enabled INTEGER NOT NULL DEFAULT 1,
  payment_wallet_enabled INTEGER NOT NULL DEFAULT 1,
  payment_method_order TEXT NOT NULL DEFAULT 'card,blupal,wallet',
  payment_default_method TEXT NOT NULL DEFAULT 'card',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(agency_id) REFERENCES agencies(id),
  FOREIGN KEY(parent_bot_id) REFERENCES reseller_bots(id)
);

CREATE INDEX IF NOT EXISTS idx_reseller_bots_status ON reseller_bots(status, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_reseller_bots_agency ON reseller_bots(agency_id);
CREATE INDEX IF NOT EXISTS idx_reseller_bots_parent ON reseller_bots(parent_bot_id,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reseller_bots_license_type ON reseller_bots(license_type,purchase_source,status);

CREATE TABLE IF NOT EXISTS reseller_bitpin_configs (
  bot_id TEXT PRIMARY KEY,
  bitpin_enabled INTEGER NOT NULL DEFAULT 0,
  bitpin_base_url TEXT NOT NULL DEFAULT 'https://api.bitpin.ir',
  bitpin_api_key_enc TEXT,
  bitpin_api_secret_enc TEXT,
  bitpin_asset TEXT NOT NULL DEFAULT 'USDT',
  bitpin_network TEXT NOT NULL DEFAULT 'TRC20',
  bitpin_deposit_address TEXT,
  bitpin_toman_per_unit INTEGER NOT NULL DEFAULT 100000,
  bitpin_min_crypto_amount REAL NOT NULL DEFAULT 1,
  bitpin_configured_at TEXT,
  bitpin_last_verified_at TEXT,
  bitpin_last_error TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);

CREATE INDEX IF NOT EXISTS idx_reseller_bitpin_enabled ON reseller_bitpin_configs(bitpin_enabled,updated_at DESC);

CREATE TABLE IF NOT EXISTS reseller_usage_events (
  event_key TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  parent_bot_id TEXT NOT NULL,
  owner_user_id INTEGER NOT NULL,
  usage_from INTEGER NOT NULL,
  usage_to INTEGER NOT NULL,
  charged_amount INTEGER NOT NULL,
  collected_amount INTEGER NOT NULL DEFAULT 0,
  unpaid_after INTEGER NOT NULL DEFAULT 0,
  central_cost_amount INTEGER NOT NULL DEFAULT 0,
  master_profit_amount INTEGER NOT NULL DEFAULT 0,
  price_per_gb INTEGER NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(parent_bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(owner_user_id) REFERENCES users(id)
);
CREATE INDEX IF NOT EXISTS idx_reseller_usage_events_bot ON reseller_usage_events(bot_id,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reseller_usage_events_parent ON reseller_usage_events(parent_bot_id,created_at DESC);

CREATE TABLE IF NOT EXISTS sales_plans (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  title TEXT NOT NULL,
  data_limit_bytes INTEGER NOT NULL,
  duration_days INTEGER NOT NULL,
  price_toman INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  sort_order INTEGER NOT NULL DEFAULT 0,
  category_id TEXT,
  location_id TEXT,
  plan_type TEXT NOT NULL DEFAULT 'sale',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);

CREATE INDEX IF NOT EXISTS idx_sales_plans_bot ON sales_plans(bot_id, status, sort_order, created_at);

CREATE TABLE IF NOT EXISTS sales_customers (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  telegram_id TEXT NOT NULL,
  username TEXT,
  first_name TEXT,
  last_name TEXT,
  wallet_balance INTEGER NOT NULL DEFAULT 0,
  referral_code TEXT,
  referrer_customer_id TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  last_seen_at TEXT,
  customer_type TEXT NOT NULL DEFAULT 'retail',
  discount_percent REAL NOT NULL DEFAULT 0,
  active_promo_code_id TEXT,
  phone_number TEXT,
  phone_verified_at TEXT,
  phone_verified_by TEXT,
  lifetime_spend_toman INTEGER NOT NULL DEFAULT 0,
  loyalty_level TEXT NOT NULL DEFAULT 'bronze',
  loyalty_discount_percent REAL NOT NULL DEFAULT 0,
  last_purchase_at TEXT,
  risk_score INTEGER NOT NULL DEFAULT 0,
  risk_level TEXT NOT NULL DEFAULT 'normal',
  last_security_event_at TEXT,
  security_note TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  UNIQUE(bot_id, telegram_id)
);

CREATE INDEX IF NOT EXISTS idx_sales_customers_bot ON sales_customers(bot_id, updated_at DESC);

CREATE TABLE IF NOT EXISTS sales_orders (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  plan_id TEXT NOT NULL,
  customer_id TEXT NOT NULL,
  amount_toman INTEGER NOT NULL,
  original_amount_toman INTEGER NOT NULL DEFAULT 0,
  discount_toman INTEGER NOT NULL DEFAULT 0,
  promo_code_id TEXT,
  promo_code TEXT,
  status TEXT NOT NULL DEFAULT 'awaiting_receipt',
  receipt_file_id TEXT,
  receipt_file_type TEXT,
  receipt_message_id TEXT,
  receipt_caption TEXT,
  receipt_unique_id TEXT,
  remote_user_id TEXT,
  remote_username TEXT,
  subscription_url TEXT,
  remote_status TEXT,
  remote_data_limit INTEGER,
  remote_used_traffic INTEGER,
  remote_expire TEXT,
  remote_online_at TEXT,
  remote_last_synced_at TEXT,
  error_message TEXT,
  order_type TEXT NOT NULL DEFAULT 'new',
  target_order_id TEXT,
  payment_method TEXT NOT NULL DEFAULT 'card',
  referral_rewarded INTEGER NOT NULL DEFAULT 0,
  cashback_rewarded INTEGER NOT NULL DEFAULT 0,
  cashback_toman INTEGER NOT NULL DEFAULT 0,
  qr_sent INTEGER NOT NULL DEFAULT 0,
  origin TEXT NOT NULL DEFAULT 'bot',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  reviewed_at TEXT,
  reviewed_by INTEGER,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(plan_id) REFERENCES sales_plans(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id),
  FOREIGN KEY(reviewed_by) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_sales_orders_bot ON sales_orders(bot_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sales_orders_customer ON sales_orders(customer_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sales_orders_status ON sales_orders(status, updated_at DESC);

CREATE TABLE IF NOT EXISTS reseller_bot_sessions (
  bot_id TEXT NOT NULL,
  telegram_id TEXT NOT NULL,
  state TEXT NOT NULL,
  data TEXT NOT NULL DEFAULT '{}',
  updated_at TEXT NOT NULL,
  PRIMARY KEY(bot_id, telegram_id),
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);

CREATE INDEX IF NOT EXISTS idx_reseller_bot_sessions_updated ON reseller_bot_sessions(updated_at);

CREATE TABLE IF NOT EXISTS sales_categories (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  title TEXT NOT NULL,
  emoji TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);
CREATE INDEX IF NOT EXISTS idx_sales_categories_bot ON sales_categories(bot_id,status,sort_order,created_at);

CREATE TABLE IF NOT EXISTS sales_locations (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  title TEXT NOT NULL,
  emoji TEXT,
  description TEXT,
  group_ids_json TEXT NOT NULL DEFAULT '[]',
  status TEXT NOT NULL DEFAULT 'active',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);
CREATE INDEX IF NOT EXISTS idx_sales_locations_bot ON sales_locations(bot_id,status,sort_order,created_at);

CREATE TABLE IF NOT EXISTS sales_customer_ledger (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  customer_id TEXT NOT NULL,
  type TEXT NOT NULL,
  amount INTEGER NOT NULL,
  balance_after INTEGER NOT NULL,
  ref_type TEXT,
  ref_id TEXT,
  description TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id)
);
CREATE INDEX IF NOT EXISTS idx_sales_customer_ledger_customer ON sales_customer_ledger(customer_id,created_at DESC);

CREATE TABLE IF NOT EXISTS sales_wallet_requests (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  customer_id TEXT NOT NULL,
  amount_toman INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'awaiting_receipt',
  receipt_file_id TEXT,
  receipt_file_type TEXT,
  receipt_message_id TEXT,
  receipt_caption TEXT,
  receipt_unique_id TEXT,
  bonus_toman INTEGER NOT NULL DEFAULT 0,
  origin TEXT NOT NULL DEFAULT 'bot',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  reviewed_at TEXT,
  reviewed_by INTEGER,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id),
  FOREIGN KEY(reviewed_by) REFERENCES users(id)
);
CREATE INDEX IF NOT EXISTS idx_sales_wallet_requests_bot ON sales_wallet_requests(bot_id,status,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sales_wallet_requests_customer ON sales_wallet_requests(customer_id,created_at DESC);

CREATE TABLE IF NOT EXISTS sales_bitpin_deposits (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  customer_id TEXT NOT NULL,
  asset TEXT NOT NULL,
  network TEXT NOT NULL,
  txid TEXT NOT NULL,
  crypto_amount REAL NOT NULL,
  rate_toman INTEGER NOT NULL,
  amount_toman INTEGER NOT NULL,
  destination_address TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending_review',
  wallet_balance_snapshot TEXT,
  provider_payload TEXT,
  note TEXT,
  origin TEXT NOT NULL DEFAULT 'bot',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  reviewed_at TEXT,
  reviewed_by_telegram_id TEXT,
  credited_at TEXT,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id),
  UNIQUE(bot_id,txid)
);
CREATE INDEX IF NOT EXISTS idx_sales_bitpin_deposits_bot ON sales_bitpin_deposits(bot_id,status,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sales_bitpin_deposits_customer ON sales_bitpin_deposits(customer_id,created_at DESC);

CREATE TABLE IF NOT EXISTS sales_payment_invoices (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  customer_id TEXT NOT NULL,
  provider TEXT NOT NULL DEFAULT 'blupal',
  provider_invoice_id TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT NOT NULL,
  amount_rial INTEGER NOT NULL,
  amount_toman INTEGER NOT NULL,
  final_amount_rial INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING',
  payment_link TEXT,
  card_number TEXT,
  paid_at TEXT,
  processed_at TEXT,
  provider_payload TEXT,
  error_message TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id),
  UNIQUE(bot_id,provider,provider_invoice_id)
);
CREATE INDEX IF NOT EXISTS idx_sales_payment_invoices_bot ON sales_payment_invoices(bot_id,status,updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_sales_payment_invoices_customer ON sales_payment_invoices(customer_id,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sales_payment_invoices_target ON sales_payment_invoices(target_type,target_id);

CREATE TABLE IF NOT EXISTS sales_trials (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  customer_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'provisioning',
  remote_user_id TEXT,
  remote_username TEXT,
  subscription_url TEXT,
  error_message TEXT,
  origin TEXT NOT NULL DEFAULT 'bot',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id),
  UNIQUE(bot_id,customer_id)
);
CREATE INDEX IF NOT EXISTS idx_sales_trials_bot ON sales_trials(bot_id,status,created_at DESC);

CREATE TABLE IF NOT EXISTS reseller_bot_texts (
  bot_id TEXT NOT NULL,
  text_key TEXT NOT NULL,
  text_value TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY(bot_id,text_key),
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);

CREATE TABLE IF NOT EXISTS sales_promo_codes (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  code TEXT NOT NULL,
  kind TEXT NOT NULL DEFAULT 'discount',
  value_type TEXT NOT NULL DEFAULT 'percent',
  value INTEGER NOT NULL DEFAULT 0,
  min_purchase_toman INTEGER NOT NULL DEFAULT 0,
  max_uses INTEGER NOT NULL DEFAULT 0,
  per_user_limit INTEGER NOT NULL DEFAULT 1,
  use_count INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active',
  expires_at TEXT,
  description TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  UNIQUE(bot_id, code)
);
CREATE INDEX IF NOT EXISTS idx_sales_promo_codes_bot ON sales_promo_codes(bot_id,status,created_at DESC);

CREATE TABLE IF NOT EXISTS sales_promo_redemptions (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  promo_id TEXT NOT NULL,
  customer_id TEXT NOT NULL,
  order_id TEXT,
  status TEXT NOT NULL DEFAULT 'used',
  amount_toman INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(promo_id) REFERENCES sales_promo_codes(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id)
);
CREATE INDEX IF NOT EXISTS idx_sales_promo_redemptions_customer ON sales_promo_redemptions(customer_id,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sales_promo_redemptions_promo ON sales_promo_redemptions(promo_id,status,created_at DESC);
CREATE UNIQUE INDEX IF NOT EXISTS idx_sales_promo_redemptions_order ON sales_promo_redemptions(order_id) WHERE order_id IS NOT NULL;

CREATE TABLE IF NOT EXISTS sales_notifications (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  customer_id TEXT NOT NULL,
  order_id TEXT,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'unread',
  sent_to_bot INTEGER NOT NULL DEFAULT 0,
  dedupe_key TEXT NOT NULL,
  created_at TEXT NOT NULL,
  read_at TEXT,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id),
  FOREIGN KEY(order_id) REFERENCES sales_orders(id),
  UNIQUE(bot_id,dedupe_key)
);
CREATE INDEX IF NOT EXISTS idx_sales_notifications_customer ON sales_notifications(customer_id,status,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sales_notifications_bot ON sales_notifications(bot_id,created_at DESC);

CREATE TABLE IF NOT EXISTS sales_tickets (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  customer_id TEXT NOT NULL,
  public_code TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'technical',
  priority TEXT NOT NULL DEFAULT 'normal',
  subject TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'waiting_owner',
  origin TEXT NOT NULL DEFAULT 'miniapp',
  last_message_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  closed_at TEXT,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id),
  UNIQUE(bot_id,public_code)
);
CREATE INDEX IF NOT EXISTS idx_sales_tickets_bot ON sales_tickets(bot_id,status,last_message_at DESC);
CREATE INDEX IF NOT EXISTS idx_sales_tickets_customer ON sales_tickets(customer_id,last_message_at DESC);

CREATE TABLE IF NOT EXISTS sales_ticket_messages (
  id TEXT PRIMARY KEY,
  ticket_id TEXT NOT NULL,
  bot_id TEXT NOT NULL,
  sender_type TEXT NOT NULL,
  sender_id TEXT,
  message_text TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(ticket_id) REFERENCES sales_tickets(id),
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);
CREATE INDEX IF NOT EXISTS idx_sales_ticket_messages_ticket ON sales_ticket_messages(ticket_id,created_at ASC);

CREATE TABLE IF NOT EXISTS reseller_staff (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  telegram_id TEXT NOT NULL,
  display_name TEXT,
  role TEXT NOT NULL DEFAULT 'support',
  status TEXT NOT NULL DEFAULT 'active',
  invited_by_telegram_id TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  UNIQUE(bot_id,telegram_id)
);
CREATE INDEX IF NOT EXISTS idx_reseller_staff_bot ON reseller_staff(bot_id,status,created_at DESC);

CREATE TABLE IF NOT EXISTS reseller_audit_logs (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  actor_telegram_id TEXT NOT NULL,
  actor_role TEXT NOT NULL,
  action TEXT NOT NULL,
  details TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);
CREATE INDEX IF NOT EXISTS idx_reseller_audit_bot ON reseller_audit_logs(bot_id,created_at DESC);

CREATE TABLE IF NOT EXISTS sales_campaigns (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  created_by_telegram_id TEXT NOT NULL,
  send_mode TEXT NOT NULL DEFAULT 'copy',
  target_scope TEXT NOT NULL DEFAULT 'all',
  source_chat_id TEXT NOT NULL,
  source_message_id INTEGER NOT NULL,
  message_text TEXT,
  scheduled_at TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  success_count INTEGER NOT NULL DEFAULT 0,
  failed_count INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  started_at TEXT,
  finished_at TEXT,
  error_message TEXT,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);
CREATE INDEX IF NOT EXISTS idx_sales_campaigns_due ON sales_campaigns(status,scheduled_at);
CREATE INDEX IF NOT EXISTS idx_sales_campaigns_bot ON sales_campaigns(bot_id,created_at DESC);

CREATE TABLE IF NOT EXISTS reseller_snapshots (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  snapshot_type TEXT NOT NULL DEFAULT 'manual',
  label TEXT,
  payload_json TEXT NOT NULL,
  size_bytes INTEGER NOT NULL DEFAULT 0,
  created_by_telegram_id TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);
CREATE INDEX IF NOT EXISTS idx_reseller_snapshots_bot ON reseller_snapshots(bot_id,created_at DESC);

CREATE TABLE IF NOT EXISTS reseller_health_checks (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  overall_status TEXT NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  details_json TEXT NOT NULL DEFAULT '[]',
  created_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);
CREATE INDEX IF NOT EXISTS idx_reseller_health_bot ON reseller_health_checks(bot_id,created_at DESC);

CREATE TABLE IF NOT EXISTS sales_security_events (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  customer_id TEXT,
  event_type TEXT NOT NULL,
  severity TEXT NOT NULL DEFAULT 'info',
  score_delta INTEGER NOT NULL DEFAULT 0,
  details TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id)
);
CREATE INDEX IF NOT EXISTS idx_sales_security_events_bot ON sales_security_events(bot_id,severity,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sales_security_events_customer ON sales_security_events(customer_id,created_at DESC);

CREATE TABLE IF NOT EXISTS web_sessions (
  token_hash TEXT PRIMARY KEY,
  scope TEXT NOT NULL,
  user_id INTEGER,
  customer_id TEXT,
  bot_id TEXT,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  last_seen_at TEXT NOT NULL,
  user_agent TEXT,
  ip_hash TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id),
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);
CREATE INDEX IF NOT EXISTS idx_web_sessions_expiry ON web_sessions(expires_at);
CREATE INDEX IF NOT EXISTS idx_web_sessions_user ON web_sessions(scope,user_id,expires_at);
CREATE INDEX IF NOT EXISTS idx_web_sessions_customer ON web_sessions(scope,bot_id,customer_id,expires_at);

CREATE TABLE IF NOT EXISTS web_login_codes (
  id TEXT PRIMARY KEY,
  scope TEXT NOT NULL,
  bot_id TEXT,
  customer_id TEXT,
  code_hash TEXT NOT NULL,
  code_salt TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  consumed_at TEXT,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id)
);
CREATE INDEX IF NOT EXISTS idx_web_login_codes_lookup ON web_login_codes(scope,bot_id,customer_id,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_web_login_codes_expiry ON web_login_codes(expires_at);

CREATE TABLE IF NOT EXISTS sales_bot_events (
  id TEXT PRIMARY KEY,
  bot_id TEXT NOT NULL,
  customer_id TEXT,
  event_type TEXT NOT NULL,
  details TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id),
  FOREIGN KEY(customer_id) REFERENCES sales_customers(id)
);
CREATE INDEX IF NOT EXISTS idx_sales_bot_events_bot ON sales_bot_events(bot_id,event_type,created_at DESC);

CREATE TABLE IF NOT EXISTS report_forums (
  scope_key TEXT PRIMARY KEY,
  scope_type TEXT NOT NULL,
  bot_id TEXT,
  chat_id TEXT NOT NULL,
  chat_title TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  setup_by_telegram_id TEXT,
  last_delivery_at TEXT,
  last_error TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);
CREATE INDEX IF NOT EXISTS idx_report_forums_bot ON report_forums(bot_id,status);

CREATE TABLE IF NOT EXISTS report_forum_topics (
  scope_key TEXT NOT NULL,
  topic_key TEXT NOT NULL,
  thread_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY(scope_key,topic_key),
  FOREIGN KEY(scope_key) REFERENCES report_forums(scope_key)
);

CREATE TABLE IF NOT EXISTS report_outbox (
  id TEXT PRIMARY KEY,
  bot_id TEXT,
  topic_key TEXT NOT NULL,
  title TEXT NOT NULL,
  message_html TEXT NOT NULL,
  dedupe_key TEXT NOT NULL UNIQUE,
  central_status TEXT NOT NULL DEFAULT 'pending',
  reseller_status TEXT NOT NULL DEFAULT 'pending',
  attempts INTEGER NOT NULL DEFAULT 0,
  next_attempt_at TEXT NOT NULL,
  last_error TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(bot_id) REFERENCES reseller_bots(id)
);
CREATE INDEX IF NOT EXISTS idx_report_outbox_due ON report_outbox(next_attempt_at,central_status,reseller_status,created_at);

`;

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

function canonicalAppUrl(value, fallbackOrigin) {
  try {
    const base = new URL(fallbackOrigin).origin;
    const parsed = new URL(cleanText(value, 500) || base, base);
    // Telegram Web Apps require HTTPS outside local development.
    if (!["localhost", "127.0.0.1", "::1"].includes(parsed.hostname)) parsed.protocol = "https:";
    parsed.username = "";
    parsed.password = "";
    parsed.search = "";
    parsed.hash = "";
    parsed.pathname = "/app";
    return parsed.toString();
  } catch (_) {
    return new URL("/app", fallbackOrigin).toString();
  }
}

function normalizeUsername(value) {
  let text = String(value || "").toLowerCase().replace(/[^a-z0-9_]/g, "");
  if (!text) text = "reseller_" + Math.random().toString(36).slice(2, 9);
  if (!/^[a-z]/.test(text)) text = "u_" + text;
  return text.slice(0, 32);
}

function randomPassword(length = 16) {
  const upper = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const lower = "abcdefghijkmnopqrstuvwxyz";
  const digits = "23456789";
  const special = "!@#$%^&*_-+";
  const all = upper + lower + digits + special;
  const pick = chars => chars[crypto.getRandomValues(new Uint8Array(1))[0] % chars.length];
  const out = [pick(upper), pick(upper), pick(lower), pick(lower), pick(digits), pick(digits), pick(special)];
  while (out.length < Math.max(12, length)) out.push(pick(all));
  for (let i = out.length - 1; i > 0; i--) {
    const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out.join("");
}

function validatePasarguardPassword(password, username = "") {
  const errors = [];
  if (new TextEncoder().encode(password).length > 72) errors.push("حداکثر طول رمز ۷۲ بایت است");
  if (password.length < 12) errors.push("رمز باید حداقل ۱۲ کاراکتر باشد");
  if ((password.match(/\d/g) || []).length < 2) errors.push("رمز باید حداقل ۲ عدد داشته باشد");
  if ((password.match(/[A-Z]/g) || []).length < 2) errors.push("رمز باید حداقل ۲ حرف بزرگ انگلیسی داشته باشد");
  if ((password.match(/[a-z]/g) || []).length < 2) errors.push("رمز باید حداقل ۲ حرف کوچک انگلیسی داشته باشد");
  if (!/[!@#$%^&*()\-_=+\[\]{}|;:,.<>?/~`]/.test(password)) errors.push("رمز باید حداقل یک نماد ویژه داشته باشد");
  if (username && password.toLowerCase().includes(username.toLowerCase())) errors.push("رمز نباید شامل نام کاربری باشد");
  if (password.includes('"')) errors.push("استفاده از علامت نقل‌قول دوتایی در رمز مجاز نیست");
  return errors;
}

async function parseBody(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

async function ensureDb(env) {
  if (!env.PASARGUARD_DB) throw new Error("D1 binding PASARGUARD_DB is missing (database: pasarguard-reseller-db)");
  if (schemaReady) return;
  if (!schemaReadyPromise) {
    schemaReadyPromise = ensureDbInternal(env)
      .catch((error) => {
        schemaReady = false;
        throw error;
      })
      .finally(() => {
        schemaReadyPromise = null;
      });
  }
  return schemaReadyPromise;
}

async function ensureDbInternal(env) {
  if (schemaReady) return;

  // Existing D1 databases may already contain an older table without the new
  // columns. Running CREATE INDEX before ALTER TABLE then fails with errors such
  // as "no such column: parent_bot_id". Create/upgrade tables first and defer all
  // indexes until after incremental columns have been added.
  const rawSchemaStatements = SCHEMA_SQL
    .split(";")
    .map((sql) => sql.trim())
    .filter(Boolean);
  const tableSchemaStatements = rawSchemaStatements
    .filter((sql) => !/^CREATE\s+(?:UNIQUE\s+)?INDEX\b/i.test(sql));
  const indexSchemaStatements = rawSchemaStatements
    .filter((sql) => /^CREATE\s+(?:UNIQUE\s+)?INDEX\b/i.test(sql));

  // Run table creation sequentially. D1 may validate a whole batch before all
  // legacy ALTER TABLE operations have completed, so indexes are never prepared
  // or executed in this phase.
  for (const sql of tableSchemaStatements) {
    await env.PASARGUARD_DB.prepare(sql).run();
  }

  // Incremental D1 migrations for installations upgraded from older versions.
  const requiredColumns = {
    agencies: [
      ["is_trial", "INTEGER NOT NULL DEFAULT 0"],
      ["trial_expires_at", "TEXT"],
      ["trial_data_limit_bytes", "INTEGER NOT NULL DEFAULT 0"],
      ["trial_expiry_notified_at", "TEXT"],
      ["provisioning_source", "TEXT NOT NULL DEFAULT 'central'"],
      ["runtime_version", "TEXT NOT NULL DEFAULT '0.0.0'"],
      ["update_applied_at", "TEXT"],
      ["update_channel_sent_at", "TEXT"]
    ],
    reseller_bots: [
      ["parent_bot_id", "TEXT"],
      ["purchase_source", "TEXT NOT NULL DEFAULT 'central'"],
      ["license_type", "TEXT NOT NULL DEFAULT 'store'"],
      ["control_username", "TEXT"],
      ["control_password_hash", "TEXT"],
      ["control_password_salt", "TEXT"],
      ["upstream_price_per_gb", "INTEGER NOT NULL DEFAULT 0"],
      ["upstream_last_usage_bytes", "INTEGER NOT NULL DEFAULT 0"],
      ["upstream_billing_remainder", "INTEGER NOT NULL DEFAULT 0"],
      ["upstream_unpaid_toman", "INTEGER NOT NULL DEFAULT 0"],
      ["upstream_total_charged", "INTEGER NOT NULL DEFAULT 0"],
      ["upstream_total_profit", "INTEGER NOT NULL DEFAULT 0"],
      ["downline_sales_enabled", "INTEGER NOT NULL DEFAULT 1"],
      ["downline_default_price_per_gb", "INTEGER NOT NULL DEFAULT 0"],
      ["downline_setup_fee", "INTEGER NOT NULL DEFAULT 0"],
      ["downline_renewal_fee", "INTEGER NOT NULL DEFAULT 0"],
      ["license_started_at", "TEXT"],
      ["license_expires_at", "TEXT"],
      ["license_last_renewed_at", "TEXT"],
      ["license_notice_key", "TEXT"],
      ["license_renewal_count", "INTEGER NOT NULL DEFAULT 0"],
      ["trial_enabled", "INTEGER NOT NULL DEFAULT 0"],
      ["trial_data_limit_bytes", "INTEGER NOT NULL DEFAULT 1073741824"],
      ["trial_duration_days", "INTEGER NOT NULL DEFAULT 1"],
      ["trial_duration_hours", "INTEGER NOT NULL DEFAULT 24"],
      ["referral_reward_toman", "INTEGER NOT NULL DEFAULT 0"],
      ["referral_reward_type", "TEXT NOT NULL DEFAULT 'fixed'"],
      ["referral_reward_percent", "REAL NOT NULL DEFAULT 0"],
      ["referral_banner_file_id", "TEXT"],
      ["referral_banner_file_type", "TEXT"],
      ["recharge_bonus_percent", "REAL NOT NULL DEFAULT 0"],
      ["bot_version", "TEXT NOT NULL DEFAULT '0.0.0'"],
      ["miniapp_enabled", "INTEGER NOT NULL DEFAULT 1"],
      ["forward_enabled", "INTEGER NOT NULL DEFAULT 1"],
      ["join_enabled", "INTEGER NOT NULL DEFAULT 0"],
      ["join_channels_json", "TEXT NOT NULL DEFAULT '[]'"],
      ["cashback_enabled", "INTEGER NOT NULL DEFAULT 0"],
      ["cashback_percent", "REAL NOT NULL DEFAULT 0"],
      ["cashback_min_purchase_toman", "INTEGER NOT NULL DEFAULT 0"],
      ["cashback_max_toman", "INTEGER NOT NULL DEFAULT 0"],
      ["notifications_enabled", "INTEGER NOT NULL DEFAULT 1"],
      ["expiry_reminder_hours", "INTEGER NOT NULL DEFAULT 48"],
      ["usage_reminder_percent", "INTEGER NOT NULL DEFAULT 80"],
      ["ticketing_enabled", "INTEGER NOT NULL DEFAULT 1"],
      ["phone_verification_required", "INTEGER NOT NULL DEFAULT 0"],
      ["ticket_auto_close_hours", "INTEGER NOT NULL DEFAULT 72"],
      ["daily_report_enabled", "INTEGER NOT NULL DEFAULT 0"],
      ["daily_report_hour_utc", "INTEGER NOT NULL DEFAULT 18"],
      ["last_daily_report_date", "TEXT"],
      ["auto_backup_enabled", "INTEGER NOT NULL DEFAULT 1"],
      ["backup_hour_utc", "INTEGER NOT NULL DEFAULT 2"],
      ["backup_retention_days", "INTEGER NOT NULL DEFAULT 14"],
      ["last_backup_at", "TEXT"],
      ["last_backup_status", "TEXT"],
      ["last_backup_error", "TEXT"],
      ["sales_automation_enabled", "INTEGER NOT NULL DEFAULT 1"],
      ["abandoned_reminder_minutes", "INTEGER NOT NULL DEFAULT 60"],
      ["winback_days", "INTEGER NOT NULL DEFAULT 30"],
      ["loyalty_enabled", "INTEGER NOT NULL DEFAULT 1"],
      ["loyalty_profile", "TEXT NOT NULL DEFAULT 'standard'"],
      ["automation_last_run_at", "TEXT"],
      ["fraud_protection_enabled", "INTEGER NOT NULL DEFAULT 1"],
      ["order_cooldown_seconds", "INTEGER NOT NULL DEFAULT 30"],
      ["max_pending_orders", "INTEGER NOT NULL DEFAULT 3"],
      ["daily_order_limit", "INTEGER NOT NULL DEFAULT 10"],
      ["daily_wallet_charge_limit_toman", "INTEGER NOT NULL DEFAULT 5000000"],
      ["duplicate_receipt_protection", "INTEGER NOT NULL DEFAULT 1"],
      ["auto_block_risk_score", "INTEGER NOT NULL DEFAULT 100"],
      ["blupal_enabled", "INTEGER NOT NULL DEFAULT 0"],
      ["blupal_base_url", "TEXT NOT NULL DEFAULT 'https://blupal.net/api'"],
      ["blupal_api_key_enc", "TEXT"],
      ["blupal_card_number", "TEXT"],
      ["blupal_webhook_token", "TEXT"],
      ["blupal_configured_at", "TEXT"],
      ["blupal_last_verified_at", "TEXT"],
      ["blupal_last_error", "TEXT"],
      ["payment_card_enabled", "INTEGER NOT NULL DEFAULT 1"],
      ["payment_wallet_enabled", "INTEGER NOT NULL DEFAULT 1"],
      ["payment_method_order", "TEXT NOT NULL DEFAULT 'card,blupal,wallet'"],
      ["payment_default_method", "TEXT NOT NULL DEFAULT 'card'"]
    ],
    reseller_usage_events: [
      ["parent_bot_id", "TEXT"],
      ["owner_user_id", "INTEGER NOT NULL DEFAULT 0"],
      ["usage_from", "INTEGER NOT NULL DEFAULT 0"],
      ["usage_to", "INTEGER NOT NULL DEFAULT 0"],
      ["charged_amount", "INTEGER NOT NULL DEFAULT 0"],
      ["collected_amount", "INTEGER NOT NULL DEFAULT 0"],
      ["unpaid_after", "INTEGER NOT NULL DEFAULT 0"],
      ["central_cost_amount", "INTEGER NOT NULL DEFAULT 0"],
      ["master_profit_amount", "INTEGER NOT NULL DEFAULT 0"],
      ["price_per_gb", "INTEGER NOT NULL DEFAULT 0"],
      ["created_at", "TEXT"]
    ],
    sales_plans: [
      ["category_id", "TEXT"],
      ["location_id", "TEXT"],
      ["plan_type", "TEXT NOT NULL DEFAULT 'sale'"]
    ],
    sales_customers: [
      ["wallet_balance", "INTEGER NOT NULL DEFAULT 0"],
      ["referral_code", "TEXT"],
      ["referrer_customer_id", "TEXT"],
      ["status", "TEXT NOT NULL DEFAULT 'active'"],
      ["last_seen_at", "TEXT"],
      ["customer_type", "TEXT NOT NULL DEFAULT 'retail'"],
      ["discount_percent", "REAL NOT NULL DEFAULT 0"],
      ["active_promo_code_id", "TEXT"],
      ["phone_number", "TEXT"],
      ["phone_verified_at", "TEXT"],
      ["phone_verified_by", "TEXT"],
      ["lifetime_spend_toman", "INTEGER NOT NULL DEFAULT 0"],
      ["loyalty_level", "TEXT NOT NULL DEFAULT 'bronze'"],
      ["loyalty_discount_percent", "REAL NOT NULL DEFAULT 0"],
      ["last_purchase_at", "TEXT"],
      ["risk_score", "INTEGER NOT NULL DEFAULT 0"],
      ["risk_level", "TEXT NOT NULL DEFAULT 'normal'"],
      ["last_security_event_at", "TEXT"],
      ["security_note", "TEXT"]
    ],
    sales_wallet_requests: [
      ["bonus_toman", "INTEGER NOT NULL DEFAULT 0"],
      ["origin", "TEXT NOT NULL DEFAULT 'bot'"],
      ["receipt_unique_id", "TEXT"]
    ],
    sales_trials: [
      ["origin", "TEXT NOT NULL DEFAULT 'bot'"]
    ],
    sales_campaigns: [
      ["message_text", "TEXT"]
    ],
    sales_orders: [
      ["order_type", "TEXT NOT NULL DEFAULT 'new'"],
      ["target_order_id", "TEXT"],
      ["payment_method", "TEXT NOT NULL DEFAULT 'card'"],
      ["referral_rewarded", "INTEGER NOT NULL DEFAULT 0"],
      ["cashback_rewarded", "INTEGER NOT NULL DEFAULT 0"],
      ["cashback_toman", "INTEGER NOT NULL DEFAULT 0"],
      ["qr_sent", "INTEGER NOT NULL DEFAULT 0"],
      ["origin", "TEXT NOT NULL DEFAULT 'bot'"],
      ["original_amount_toman", "INTEGER NOT NULL DEFAULT 0"],
      ["discount_toman", "INTEGER NOT NULL DEFAULT 0"],
      ["promo_code_id", "TEXT"],
      ["promo_code", "TEXT"],
      ["remote_status", "TEXT"],
      ["remote_data_limit", "INTEGER"],
      ["remote_used_traffic", "INTEGER"],
      ["remote_expire", "TEXT"],
      ["remote_online_at", "TEXT"],
      ["remote_last_synced_at", "TEXT"],
      ["receipt_unique_id", "TEXT"]
    ]
  };
  for (const [table, columns] of Object.entries(requiredColumns)) {
    const info = await env.PASARGUARD_DB.prepare("PRAGMA table_info(" + table + ")").all();
    const names = new Set((info.results || []).map(row => String(row.name)));
    for (const [column, definition] of columns) {
      if (!names.has(column)) {
        try {
          await env.PASARGUARD_DB.prepare("ALTER TABLE " + table + " ADD COLUMN " + column + " " + definition).run();
        } catch (error) {
          // Multiple Worker isolates can start at the same time. If another
          // isolate already added the column, continue after verification.
          if (!/duplicate column name/i.test(String(error?.message || error))) throw error;
        }
        const verify = await env.PASARGUARD_DB.prepare("PRAGMA table_info(" + table + ")").all();
        const verifiedNames = new Set((verify.results || []).map(row => String(row.name)));
        if (!verifiedNames.has(column)) {
          throw new Error("D1 migration failed: missing column " + table + "." + column);
        }
        names.add(column);
      }
    }
  }

  // Explicitly verify the columns used by the new indexes before creating any
  // index. This turns a vague SQLite offset error into a deterministic migration.
  const criticalIndexColumns = {
    reseller_bots: ["parent_bot_id", "created_at", "license_type", "purchase_source", "status"],
    reseller_usage_events: ["bot_id", "parent_bot_id", "created_at"]
  };
  for (const [table, columns] of Object.entries(criticalIndexColumns)) {
    const info = await env.PASARGUARD_DB.prepare("PRAGMA table_info(" + table + ")").all();
    const names = new Set((info.results || []).map(row => String(row.name)));
    for (const column of columns) {
      if (!names.has(column)) throw new Error("D1 migration failed before indexes: missing column " + table + "." + column);
    }
  }

  // Indexes are deliberately executed one by one and only after verification.
  for (const sql of indexSchemaStatements) {
    await env.PASARGUARD_DB.prepare(sql).run();
  }

  await env.PASARGUARD_DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_agencies_trial_user ON agencies(user_id) WHERE is_trial=1").run();
  await env.PASARGUARD_DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_sales_customers_referral ON sales_customers(bot_id,referral_code) WHERE referral_code IS NOT NULL").run();
  await env.PASARGUARD_DB.prepare("CREATE INDEX IF NOT EXISTS idx_reseller_bots_license ON reseller_bots(license_expires_at)").run();
  await env.PASARGUARD_DB.prepare("CREATE INDEX IF NOT EXISTS idx_reseller_bots_parent ON reseller_bots(parent_bot_id,created_at DESC)").run();
  await env.PASARGUARD_DB.prepare("CREATE INDEX IF NOT EXISTS idx_reseller_bots_license_type ON reseller_bots(license_type,purchase_source,status)").run();
  await env.PASARGUARD_DB.prepare("CREATE INDEX IF NOT EXISTS idx_reseller_usage_events_bot ON reseller_usage_events(bot_id,created_at DESC)").run();
  await env.PASARGUARD_DB.prepare("CREATE INDEX IF NOT EXISTS idx_reseller_usage_events_parent ON reseller_usage_events(parent_bot_id,created_at DESC)").run();
  await env.PASARGUARD_DB.prepare(`
    UPDATE reseller_bots
    SET purchase_source=CASE WHEN parent_bot_id IS NOT NULL THEN 'master' ELSE COALESCE(NULLIF(TRIM(purchase_source),''),'central') END,
        license_type=CASE WHEN parent_bot_id IS NOT NULL THEN 'store' WHEN license_type='master' THEN 'master' ELSE 'store' END
  `).run();
  // A downline never owns a PasarGuard panel. Its agency_id is only an internal
  // service route and must always follow the direct master purchaser's panel.
  await env.PASARGUARD_DB.prepare(`
    UPDATE reseller_bots AS child
    SET agency_id=(SELECT parent.agency_id FROM reseller_bots AS parent WHERE parent.id=child.parent_bot_id),
        updated_at=COALESCE(updated_at,?)
    WHERE child.parent_bot_id IS NOT NULL
      AND EXISTS(SELECT 1 FROM reseller_bots AS parent WHERE parent.id=child.parent_bot_id)
      AND child.agency_id<>(SELECT parent.agency_id FROM reseller_bots AS parent WHERE parent.id=child.parent_bot_id)
  `).bind(nowIso()).run();
  await env.PASARGUARD_DB.prepare("CREATE INDEX IF NOT EXISTS idx_agencies_source_version ON agencies(provisioning_source,runtime_version)").run();

  const ts = nowIso();
  await env.PASARGUARD_DB.prepare(`
    UPDATE agencies
    SET provisioning_source=CASE
          WHEN COALESCE(is_trial,0)=1 THEN 'central'
          WHEN id LIKE 'agn_pg_%' THEN 'pasarguard_manual'
          WHEN COALESCE(provisioning_source,'')='' THEN 'central'
          ELSE provisioning_source END,
        runtime_version=?,
        update_applied_at=CASE WHEN COALESCE(runtime_version,'')<>? THEN ? ELSE update_applied_at END
  `).bind(APP_VERSION, APP_VERSION, ts).run();
  await env.PASARGUARD_DB.prepare(`
    UPDATE agencies
    SET trial_expiry_notified_at=COALESCE(trial_expiry_notified_at,updated_at,?)
    WHERE COALESCE(is_trial,0)=1 AND status='trial_expired' AND trial_expiry_notified_at IS NULL
  `).bind(ts).run();
  // اگر نسخه قبلی پیام پایان تست را فرستاده ولی همگام‌سازی وضعیت را دوباره
  // active/disabled کرده باشد، سابقه audit مانع یک ارسال اضافه بعد از ارتقا می‌شود.
  await env.PASARGUARD_DB.prepare(`
    UPDATE agencies
    SET trial_expiry_notified_at=COALESCE(trial_expiry_notified_at,updated_at,?)
    WHERE COALESCE(is_trial,0)=1 AND trial_expiry_notified_at IS NULL
      AND EXISTS(
        SELECT 1 FROM audit_logs l
        WHERE l.action='central_trial_expired'
          AND l.actor_user_id=agencies.user_id
          AND l.details LIKE '%' || agencies.id || '%'
      )
  `).bind(ts).run();
  // Existing bots receive a fresh full month when this licensed build is first installed.
  await env.PASARGUARD_DB.prepare(`
    UPDATE reseller_bots
    SET license_started_at=COALESCE(license_started_at,?),
        license_expires_at=COALESCE(NULLIF(TRIM(license_expires_at),''),?),
        license_last_renewed_at=COALESCE(license_last_renewed_at,?),
        license_notice_key=NULL
    WHERE license_expires_at IS NULL OR TRIM(license_expires_at)=''
  `).bind(ts, new Date(Date.now()+RESELLER_LICENSE_MS).toISOString(), ts).run();
  const statements = Object.entries(DEFAULT_SETTINGS).map(([key, value]) =>
    env.PASARGUARD_DB.prepare("INSERT OR IGNORE INTO app_settings(key, value, updated_at) VALUES(?, ?, ?)").bind(key, value, ts)
  );
  await env.PASARGUARD_DB.batch(statements);

  // کاربران فعلی لینک مدیریت را در نسخه‌های قبلی دریافت کرده‌اند؛
  // این مهاجرت یک‌باره جلوی ارسال دوباره پس از ارتقا را می‌گیرد.
  const managementDeliveryMigration = await env.PASARGUARD_DB.prepare(
    "SELECT value FROM app_settings WHERE key='management_notice_delivery_migrated_v277'"
  ).first();
  if (!managementDeliveryMigration) {
    const migrationAt = nowIso();
    const currentSettings = await env.PASARGUARD_DB.prepare(
      "SELECT value FROM app_settings WHERE key='admin_ids'"
    ).first();
    const existingAdminIds = String(currentSettings?.value || "")
      .split(",").map(value => value.trim()).filter(Boolean);
    const existingOwners = await env.PASARGUARD_DB.prepare(`
      SELECT rb.id AS bot_id,u.telegram_id
      FROM reseller_bots rb JOIN users u ON u.id=rb.user_id
      WHERE u.telegram_id IS NOT NULL AND TRIM(u.telegram_id)<>''
    `).all();
    const deliveryStatements = [];
    for (const telegramId of existingAdminIds) {
      deliveryStatements.push(env.PASARGUARD_DB.prepare(`
        INSERT OR IGNORE INTO bot_notice_deliveries(id,notice_key,bot_scope,telegram_id,delivered_at)
        VALUES(?,?,?,?,?)
      `).bind(id("notice"), "management_access", "central", String(telegramId), migrationAt));
    }
    for (const owner of existingOwners.results || []) {
      deliveryStatements.push(env.PASARGUARD_DB.prepare(`
        INSERT OR IGNORE INTO bot_notice_deliveries(id,notice_key,bot_scope,telegram_id,delivered_at)
        VALUES(?,?,?,?,?)
      `).bind(id("notice"), "management_access", "reseller:" + String(owner.bot_id), String(owner.telegram_id), migrationAt));
    }
    deliveryStatements.push(env.PASARGUARD_DB.prepare(`
      INSERT OR REPLACE INTO app_settings(key,value,updated_at) VALUES('management_notice_delivery_migrated_v277','true',?)
    `).bind(migrationAt));
    if (deliveryStatements.length) await env.PASARGUARD_DB.batch(deliveryStatements);
  }

  const centralMagicRemovalMigration = await env.PASARGUARD_DB.prepare(
    "SELECT value FROM app_settings WHERE key='central_magic_login_removed_v301'"
  ).first();
  if (!centralMagicRemovalMigration) {
    const migrationAt = nowIso();
    await env.PASARGUARD_DB.batch([
      env.PASARGUARD_DB.prepare("DELETE FROM web_login_codes WHERE scope='central_admin_magic'"),
      env.PASARGUARD_DB.prepare(
        "INSERT OR REPLACE INTO app_settings(key,value,updated_at) VALUES('central_magic_login_removed_v301','true',?)"
      ).bind(migrationAt)
    ]);
  }

  try {
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET miniapp_enabled=1 WHERE COALESCE(miniapp_enabled,1)<>1").run();
  } catch (_) {}
  schemaReady = true;
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

async function setSettings(env, values) {
  const ts = nowIso();
  const statements = Object.entries(values).map(([key, value]) =>
    env.PASARGUARD_DB.prepare(
      "INSERT INTO app_settings(key, value, updated_at) VALUES(?, ?, ?) ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at"
    ).bind(key, String(value), ts)
  );
  if (statements.length) await env.PASARGUARD_DB.batch(statements);
  settingsCache = null;
  settingsCacheAt = 0;
  encryptionKeyCache = null;
  encryptionKeyCacheSource = "";
}

function settingFlag(value, defaultValue = true) {
  if (typeof value === "boolean") return value;
  if (value === null || value === undefined || String(value).trim() === "") return Boolean(defaultValue);
  const normalized = String(value).trim().toLowerCase();
  if (["false", "0", "off", "no", "disabled", "closed"].includes(normalized)) return false;
  if (["true", "1", "on", "yes", "enabled", "open"].includes(normalized)) return true;
  return Boolean(defaultValue);
}

function agencySalesOpen(settings) {
  return settingFlag(settings?.agency_sales_enabled, true);
}

function resellerBotSalesOpen(settings) {
  return settingFlag(settings?.reseller_bot_sales_enabled, true);
}

function normalizeResellerLicenseType(value) {
  return String(value || "store").toLowerCase() === "master" ? "master" : "store";
}

function resellerLicenseTypeLabel(value) {
  return normalizeResellerLicenseType(value) === "master" ? "مستر نمایندگی" : "نماینده فروش";
}

function resellerBotSetupFee(settings, type = "store") {
  const kind = normalizeResellerLicenseType(type);
  const specific = kind === "master" ? settings?.reseller_master_bot_setup_fee : settings?.reseller_store_bot_setup_fee;
  const fallback = settings?.reseller_bot_setup_fee;
  return clampInt(specific === undefined || specific === null || specific === "" ? fallback : specific, 0, 1000000000000);
}

function resellerBotRenewalFee(settings, type = "store") {
  const kind = normalizeResellerLicenseType(type);
  const specific = kind === "master" ? settings?.reseller_master_bot_license_renewal_fee : settings?.reseller_store_bot_license_renewal_fee;
  const fallback = settings?.reseller_bot_license_renewal_fee;
  return clampInt(specific === undefined || specific === null || specific === "" ? fallback : specific, 0, 1000000000000);
}

function resellerBotTypeChangeFee(settings, currentType, targetType) {
  const current = normalizeResellerLicenseType(currentType);
  const target = normalizeResellerLicenseType(targetType);
  if (current === target) return 0;
  if (current === "store" && target === "master") {
    return Math.max(0, resellerBotSetupFee(settings, "master") - resellerBotSetupFee(settings, "store"));
  }
  return 0;
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

function centralTrialConfig(settings) {
  return {
    enabled: settings.central_trial_enabled === "true",
    dataLimitBytes: Math.max(1024 * 1024, clampInt(settings.central_trial_data_limit_bytes || GIB, 1024 * 1024, 1024 * GIB)),
    durationHours: Math.max(1, Math.min(720, clampInt(settings.central_trial_duration_hours || 24, 1, 720)))
  };
}

function centralTrialExpired(agency, usageBytes = null) {
  if (!agency || Number(agency.is_trial || 0) !== 1) return false;
  const usage = usageBytes === null ? Number(agency.last_usage_bytes || 0) : Number(usageBytes || 0);
  const dataLimit = Number(agency.trial_data_limit_bytes || 0);
  const expiresAt = Date.parse(agency.trial_expires_at || "") || 0;
  return (dataLimit > 0 && usage >= dataLimit) || (expiresAt > 0 && expiresAt <= Date.now());
}

function centralTrialSummary(settings, agency = null) {
  const config = centralTrialConfig(settings);
  return {
    enabled: config.enabled,
    available: config.enabled && !agency,
    claimed: Boolean(agency),
    data_limit_bytes: agency ? Number(agency.trial_data_limit_bytes || config.dataLimitBytes) : config.dataLimitBytes,
    duration_hours: config.durationHours,
    status: agency?.status || (config.enabled ? "available" : "disabled"),
    expires_at: agency?.trial_expires_at || "",
    used_bytes: Number(agency?.last_usage_bytes || 0),
    agency_id: agency?.id || ""
  };
}

function publicSettings(settings) {
  return {
    brand_name: settings.brand_name,
    price_per_gb: Number(settings.price_per_gb || 0),
    setup_fee: Number(settings.setup_fee || 0),
    reseller_bot_setup_fee: Number(settings.reseller_bot_setup_fee || 0),
    reseller_bot_license_days: RESELLER_LICENSE_DAYS,
    reseller_bot_license_renewal_fee: Number(settings.reseller_bot_license_renewal_fee || 0),
    reseller_store_bot_setup_fee: resellerBotSetupFee(settings, "store"),
    reseller_store_bot_license_renewal_fee: resellerBotRenewalFee(settings, "store"),
    reseller_master_bot_setup_fee: resellerBotSetupFee(settings, "master"),
    reseller_master_bot_license_renewal_fee: resellerBotRenewalFee(settings, "master"),
    master_min_markup_toman: Number(settings.master_min_markup_toman || 100),
    agency_sales_enabled: agencySalesOpen(settings),
    reseller_bot_sales_enabled: resellerBotSalesOpen(settings),
    central_recharge_bonus_percent: Number(settings.central_recharge_bonus_percent || 0),
    central_trial_enabled: settings.central_trial_enabled === "true",
    central_trial_data_limit_bytes: Number(settings.central_trial_data_limit_bytes || 1073741824),
    central_trial_duration_hours: Number(settings.central_trial_duration_hours || 24),
    central_join_enabled: settings.central_join_enabled === "true",
    central_join_channels: parseJoinChannels(settings.central_join_channels),
    release_channel_enabled: settings.release_channel_enabled === "true",
    release_channel_chat_id: settings.release_channel_chat_id || "",
    release_channel_title: settings.release_channel_title || "",
    release_channel_url: settings.release_channel_url || "",
    release_last_announced_version: settings.release_last_announced_version || "",
    release_last_announcement_at: settings.release_last_announcement_at || "",
    release_last_announcement_error: settings.release_last_announcement_error || "",
    min_recharge: Number(settings.min_recharge || 0),
    payment_provider: "blupal",
    bitpin_enabled: settings.bitpin_enabled === "true" && Boolean(settings.bitpin_deposit_address),
    bitpin_asset: settings.bitpin_asset || "USDT",
    bitpin_network: settings.bitpin_network || "TRC20",
    bitpin_deposit_address: settings.bitpin_deposit_address || "",
    bitpin_toman_per_unit: Number(settings.bitpin_toman_per_unit || 0),
    bitpin_min_crypto_amount: Number(settings.bitpin_min_crypto_amount || 0),
    bitpin_review_mode: "txid_manual_review",
    support_username: settings.support_username || "",
    version: APP_VERSION
  };
}

function adminSettings(settings) {
  const result = {
    brand_name: settings.brand_name || "",
    price_per_gb: Number(settings.price_per_gb || 0),
    setup_fee: Number(settings.setup_fee || 0),
    reseller_bot_setup_fee: Number(settings.reseller_bot_setup_fee || 0),
    reseller_bot_license_days: RESELLER_LICENSE_DAYS,
    reseller_bot_license_renewal_fee: Number(settings.reseller_bot_license_renewal_fee || 0),
    reseller_store_bot_setup_fee: resellerBotSetupFee(settings, "store"),
    reseller_store_bot_license_renewal_fee: resellerBotRenewalFee(settings, "store"),
    reseller_master_bot_setup_fee: resellerBotSetupFee(settings, "master"),
    reseller_master_bot_license_renewal_fee: resellerBotRenewalFee(settings, "master"),
    master_min_markup_toman: Number(settings.master_min_markup_toman || 100),
    agency_sales_enabled: agencySalesOpen(settings),
    reseller_bot_sales_enabled: resellerBotSalesOpen(settings),
    central_recharge_bonus_percent: Number(settings.central_recharge_bonus_percent || 0),
    central_trial_enabled: settings.central_trial_enabled === "true",
    central_trial_data_limit_bytes: Number(settings.central_trial_data_limit_bytes || 1073741824),
    central_trial_duration_hours: Number(settings.central_trial_duration_hours || 24),
    central_join_enabled: settings.central_join_enabled === "true",
    central_join_channels: parseJoinChannels(settings.central_join_channels),
    release_channel_enabled: settings.release_channel_enabled === "true",
    release_channel_chat_id: settings.release_channel_chat_id || "",
    release_channel_title: settings.release_channel_title || "",
    release_channel_url: settings.release_channel_url || "",
    release_last_announced_version: settings.release_last_announced_version || "",
    release_last_announcement_at: settings.release_last_announcement_at || "",
    release_last_announcement_error: settings.release_last_announcement_error || "",
    min_recharge: Number(settings.min_recharge || 0),
    payment_provider: "blupal",
    support_username: settings.support_username || "",
    blupal_base_url: settings.blupal_base_url || "https://blupal.net/api",
    blupal_card_number: settings.blupal_card_number || "",
    bitpin_enabled: settings.bitpin_enabled === "true",
    bitpin_base_url: settings.bitpin_base_url || "https://api.bitpin.ir",
    bitpin_asset: settings.bitpin_asset || "USDT",
    bitpin_network: settings.bitpin_network || "TRC20",
    bitpin_deposit_address: settings.bitpin_deposit_address || "",
    bitpin_toman_per_unit: Number(settings.bitpin_toman_per_unit || 0),
    bitpin_min_crypto_amount: Number(settings.bitpin_min_crypto_amount || 0),
    bitpin_last_verified_at: settings.bitpin_last_verified_at || "",
    bitpin_last_error: settings.bitpin_last_error || "",
    payment_poll_enabled: settings.payment_poll_enabled === "true",
    auto_delete_pending_invoices: settings.auto_delete_pending_invoices === "true",
    pending_invoice_ttl_hours: Number(settings.pending_invoice_ttl_hours || 24),
    usage_sync_enabled: settings.usage_sync_enabled === "true",
    auto_update: true,
    auto_update_interval_seconds: Number(settings.auto_update_interval_seconds || 5),
    auto_update_ready: Boolean(settings.github_repo && settings.cf_account_id && settings.cf_api_token && settings.cf_worker_name),
    auto_update_last_status: settings.auto_update_last_status || "never",
    auto_update_last_version: settings.auto_update_last_version || "",
    auto_update_last_worker_sha: settings.auto_update_last_worker_sha || "",
    auto_update_last_error: settings.auto_update_last_error || "",
    auto_update_last_source: settings.auto_update_last_source || "",
    auto_update_last_check_epoch: Number(settings.auto_update_last_check_epoch || 0),
    admin_ids: settings.admin_ids || "",
    central_bot_telegram_id: settings.central_bot_telegram_id || (String(settings.bot_token || "").split(":")[0] || ""),
    central_bot_username: settings.central_bot_username || "",
    central_bot_name: settings.central_bot_name || "",
    central_bot_token_updated_at: settings.central_bot_token_updated_at || "",
    central_bot_admin_ids_updated_at: settings.central_bot_admin_ids_updated_at || "",
    auth_max_age_seconds: Number(settings.auth_max_age_seconds || 86400),
    allow_dev_auth: settings.allow_dev_auth === "true",
    dev_telegram_id: settings.dev_telegram_id || "",
    app_url: settings.app_url || "",
    pasarguard_panel_url: settings.pasarguard_panel_url || "",
    pasarguard_admin_username: settings.pasarguard_admin_username || "",
    pasarguard_reseller_role_id: settings.pasarguard_reseller_role_id || "",
    pasarguard_reseller_role_name: settings.pasarguard_reseller_role_name || "",
    pasarguard_sales_role_id: settings.pasarguard_sales_role_id || settings.pasarguard_reseller_role_id || "",
    pasarguard_sales_role_name: settings.pasarguard_sales_role_name || settings.pasarguard_reseller_role_name || "نماینده فروش",
    pasarguard_master_role_id: settings.pasarguard_master_role_id || "",
    pasarguard_master_role_name: settings.pasarguard_master_role_name || "مستر نمایندگی",
    pasarguard_set_telegram_id: true,
    pasarguard_admin_data_limit_bytes: Number(settings.pasarguard_admin_data_limit_bytes || 0),
    pasarguard_sub_domain: settings.pasarguard_sub_domain || "",
    pasarguard_support_url: settings.pasarguard_support_url || "",
    github_repo: settings.github_repo || "",
    github_branch: settings.github_branch || "main",
    github_worker_file: settings.github_worker_file || "worker.js",
    github_version_file: settings.github_version_file || "version",
    cf_account_id: settings.cf_account_id || "",
    cf_worker_name: settings.cf_worker_name || "",
    python_helper_auto_provision: true,
    python_helper_worker_name: settings.python_helper_worker_name || derivePythonHelperWorkerName(settings),
    python_helper_last_status: settings.python_helper_last_status || "never",
    python_helper_last_error: settings.python_helper_last_error || "",
    python_helper_last_check_epoch: Number(settings.python_helper_last_check_epoch || 0),
    python_helper_last_deployed_at: settings.python_helper_last_deployed_at || "",
    python_helper_last_version: settings.python_helper_last_version || "",
    edge_worker_enabled: settings.edge_worker_enabled !== "false",
    edge_worker_mode: settings.edge_worker_mode || "service_binding",
    edge_worker_manual_disabled: settings.edge_worker_manual_disabled === "true",
    edge_worker_url: settings.edge_worker_url || "",
    edge_worker_script_name: settings.edge_worker_script_name || "",
    edge_worker_status: settings.edge_worker_status || "disconnected",
    edge_worker_last_check_at: settings.edge_worker_last_check_at || "",
    edge_worker_last_error: settings.edge_worker_last_error || "",
    edge_worker_last_version: settings.edge_worker_last_version || "",
    edge_worker_last_deployed_at: settings.edge_worker_last_deployed_at || "",
    edge_worker_api_key_set: Boolean(settings.edge_worker_api_key),
    github_edge_worker_file: settings.github_edge_worker_file || "worker.js",
    python_helper_binding_detected: false
  };
  for (const key of SECRET_SETTING_KEYS) result[key + "_set"] = Boolean(settings[key]);
  return result;
}

function randomHex(bytes = 24) {
  const data = crypto.getRandomValues(new Uint8Array(bytes));
  return Array.from(data).map(x => x.toString(16).padStart(2, "0")).join("");
}

async function sha256Hex(value) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(value)));
  return bytesToHex(digest);
}

async function passwordHash(password, salt) {
  return sha256Hex(String(salt) + ":" + String(password));
}

const CENTRAL_WEB_COOKIE = "bp_central_session";

function webCookieSuffix(botId = "") {
  return String(botId || "default").replace(/[^a-zA-Z0-9_-]/g, "").slice(-36) || "default";
}

function salesWebCookieName(botId = "") {
  return "bp_sales_" + webCookieSuffix(botId);
}

function resellerAdminWebCookieName(botId = "") {
  return "bp_reseller_admin_" + webCookieSuffix(botId);
}

function webSessionCookieName(scope, botId = "") {
  if (scope === "central") return CENTRAL_WEB_COOKIE;
  if (scope === "reseller_admin") return resellerAdminWebCookieName(botId);
  return salesWebCookieName(botId);
}

function webAuthError(message = "برای ورود به نسخه وب احراز هویت کنید") {
  const error = new Error(message);
  error.code = "WEB_LOGIN_REQUIRED";
  return error;
}

function parseCookieHeader(request) {
  const out = {};
  const raw = request.headers.get("cookie") || "";
  for (const part of raw.split(";")) {
    const pos = part.indexOf("=");
    if (pos < 1) continue;
    const key = part.slice(0, pos).trim();
    const value = part.slice(pos + 1).trim();
    try { out[key] = decodeURIComponent(value); } catch (_) { out[key] = value; }
  }
  return out;
}

function webCookie(request, name, value, maxAgeSeconds) {
  const url = new URL(request.url);
  const secure = url.protocol === "https:" && !["localhost", "127.0.0.1", "::1"].includes(url.hostname);
  return name + "=" + encodeURIComponent(value) + "; Path=/; HttpOnly; SameSite=Lax; Max-Age=" + Math.max(0, Number(maxAgeSeconds || 0)) + (secure ? "; Secure" : "");
}

function clearWebCookie(request, name) {
  return webCookie(request, name, "", 0);
}

function requestIp(request) {
  return cleanText(request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "", 120);
}

async function requestIpHash(request) {
  const ip = requestIp(request);
  return ip ? await sha256Hex("bluepanel:" + ip) : "";
}

async function issueWebSession(request, env, scope, subject = {}) {
  const settings = await getSettings(env);
  const days = clampInt(settings.web_session_days || 30, 1, 90);
  const seconds = days * 86400;
  const token = randomHex(32);
  const tokenHash = await sha256Hex(token);
  const ts = nowIso();
  const expiresAt = new Date(Date.now() + seconds * 1000).toISOString();
  await env.PASARGUARD_DB.prepare(`
    INSERT INTO web_sessions(token_hash,scope,user_id,customer_id,bot_id,expires_at,created_at,last_seen_at,user_agent,ip_hash)
    VALUES(?,?,?,?,?,?,?,?,?,?)
  `).bind(
    tokenHash,
    scope,
    subject.user_id || null,
    subject.customer_id || null,
    subject.bot_id || null,
    expiresAt,
    ts,
    ts,
    cleanText(request.headers.get("user-agent"), 300),
    await requestIpHash(request)
  ).run();
  await env.PASARGUARD_DB.prepare("DELETE FROM web_sessions WHERE expires_at<=?").bind(ts).run();
  return { token, tokenHash, expiresAt, seconds };
}

async function webSessionFromRequest(request, env, scope, botId = "") {
  const cookies = parseCookieHeader(request);
  const cookieName = webSessionCookieName(scope, botId);
  const token = cleanText(cookies[cookieName] || request.headers.get("x-web-session") || "", 200);
  if (!token) return null;
  const tokenHash = await sha256Hex(token);
  const row = await env.PASARGUARD_DB.prepare("SELECT * FROM web_sessions WHERE token_hash=? AND scope=?").bind(tokenHash, scope).first();
  if (!row) return null;
  if (botId && String(row.bot_id || "") !== String(botId)) return null;
  if (!row.expires_at || new Date(row.expires_at).getTime() <= Date.now()) {
    await env.PASARGUARD_DB.prepare("DELETE FROM web_sessions WHERE token_hash=?").bind(tokenHash).run();
    return null;
  }
  if (!row.last_seen_at || Date.now() - new Date(row.last_seen_at).getTime() > 300000) {
    await env.PASARGUARD_DB.prepare("UPDATE web_sessions SET last_seen_at=? WHERE token_hash=?").bind(nowIso(), tokenHash).run();
  }
  return row;
}

async function revokeWebSession(request, env, scope, botId = "") {
  const cookies = parseCookieHeader(request);
  const cookieName = webSessionCookieName(scope, botId);
  const token = cleanText(cookies[cookieName] || request.headers.get("x-web-session") || "", 200);
  if (token) await env.PASARGUARD_DB.prepare("DELETE FROM web_sessions WHERE token_hash=? AND scope=?").bind(await sha256Hex(token), scope).run();
  return cookieName;
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort("timeout"), Math.max(1000, Number(timeoutMs || 15000)));
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function readJsonResponseSafe(response, sourceName = "سرور") {
  const raw = await response.text();
  if (!raw) return { data: {}, raw: "" };
  try {
    return { data: JSON.parse(raw), raw };
  } catch (_) {
    const clean = raw.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 220);
    const error = new Error("پاسخ " + sourceName + " معتبر نیست (HTTP " + response.status + ")" + (clean ? ": " + clean : ""));
    error.code = "UPSTREAM_INVALID_RESPONSE";
    error.status = response.status;
    throw error;
  }
}

async function verifyPasarguardWebCredentials(env, username, password) {
  const settings = await getSettings(env);
  const baseUrl = pasarguardBaseUrl(settings);
  const form = new URLSearchParams();
  form.set("username", username);
  form.set("password", password);

  let response;
  try {
    response = await fetchWithTimeout(baseUrl + "/api/admin/token", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "accept": "application/json"
      },
      body: form.toString(),
      redirect: "manual"
    }, 18000);
  } catch (error) {
    if (String(error?.name || "").toLowerCase() === "aborterror" || String(error?.message || "").toLowerCase().includes("timeout")) {
      const timeoutError = new Error("پاسخ پنل PasarGuard طول کشید؛ اتصال پنل و آدرس آن را بررسی کنید");
      timeoutError.code = "PASARGUARD_TIMEOUT";
      throw timeoutError;
    }
    const networkError = new Error("ارتباط با پنل PasarGuard برقرار نشد: " + cleanText(error?.message || error, 180));
    networkError.code = "PASARGUARD_UNREACHABLE";
    throw networkError;
  }

  let parsed;
  try {
    parsed = await readJsonResponseSafe(response, "پنل PasarGuard");
  } catch (error) {
    error.code = error.code || "PASARGUARD_INVALID_RESPONSE";
    throw error;
  }
  const data = parsed.data || {};
  if (!response.ok || !data.access_token) {
    const authError = new Error(data.detail || data.error || "نام کاربری یا رمز پنل صحیح نیست");
    authError.code = response.status === 401 || response.status === 403 ? "INVALID_CREDENTIALS" : "PASARGUARD_AUTH_FAILED";
    authError.status = response.status;
    throw authError;
  }

  let profile = null;
  try {
    const profileResponse = await fetchWithTimeout(baseUrl + "/api/admin", {
      headers: {
        authorization: "Bearer " + String(data.access_token),
        accept: "application/json"
      },
      redirect: "manual"
    }, 12000);
    if (profileResponse.ok) {
      const profileParsed = await readJsonResponseSafe(profileResponse, "پروفایل PasarGuard");
      profile = profileParsed.data || null;
    }
  } catch (error) {
    console.error("pasarguard profile fetch error", error);
  }
  return { token: String(data.access_token), profile, settings };
}

async function centralWebLogin(request, env, adminRequired = false) {
  await ensureDb(env);
  const settings = await getSettings(env);
  if (settings.web_login_enabled === "false") return fail("ورود خارج از تلگرام غیرفعال است", 403, "WEB_LOGIN_DISABLED");
  const body = await parseBody(request);
  const username = cleanText(body.username, 80);
  const password = cleanText(body.password, 200);
  if (!username || !password) return fail("نام کاربری و رمز پنل را وارد کنید", 400, "LOGIN_FIELDS_REQUIRED");

  const normalizedUsername = String(username).trim().toLowerCase();
  const configuredOwnerUsername = String(settings.pasarguard_admin_username || "").trim().toLowerCase();
  const ownerLogin = Boolean(configuredOwnerUsername) && normalizedUsername === configuredOwnerUsername;
  let verified = null;
  let authSource = "pasarguard_remote";

  // The central owner can authenticate against the encrypted credentials already stored in Core D1.
  // This removes PasarGuard/network/HTML-proxy failures from the critical central-admin login path.
  if (adminRequired && ownerLogin && String(settings.pasarguard_admin_password || "")) {
    const suppliedHash = await sha256Hex(String(password));
    const storedHash = await sha256Hex(String(settings.pasarguard_admin_password));
    if (timingSafeEqualHex(suppliedHash, storedHash)) {
      const adminTelegramId = parseAdminTelegramIds(settings.admin_ids || "")[0] || "";
      verified = {
        token: String(settings.pasarguard_access_token || ""),
        settings,
        local_owner: true,
        profile: {
          username: settings.pasarguard_admin_username || username,
          telegram_id: adminTelegramId,
          profile_title: "مدیر مرکزی",
          status: "active"
        }
      };
      authSource = "stored_core_credentials";
    }
  }

  if (!verified) verified = await verifyPasarguardWebCredentials(env, username, password);
  let agency = await env.PASARGUARD_DB.prepare("SELECT * FROM agencies WHERE LOWER(panel_username)=LOWER(?) ORDER BY updated_at DESC LIMIT 1").bind(username).first();
  let user = agency ? await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE id=?").bind(agency.user_id).first() : null;

  const profile = verified.profile && typeof verified.profile === "object" ? verified.profile : null;
  const telegramId = cleanText(profile?.telegram_id, 80);
  if (!user && telegramId) user = await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE telegram_id=?").bind(telegramId).first();
  if (!user && ownerLogin) {
    const adminTelegramId = String(settings.admin_ids || "").split(",").map(x => x.trim()).filter(Boolean)[0];
    if (adminTelegramId) {
      const ts = nowIso();
      await env.PASARGUARD_DB.prepare(`
        INSERT INTO users(telegram_id,username,first_name,last_name,role,status,wallet_balance,created_at,updated_at)
        VALUES(?,?,?,'','admin','active',0,?,?)
        ON CONFLICT(telegram_id) DO UPDATE SET role='admin',status='active',updated_at=excluded.updated_at
      `).bind(adminTelegramId, username, cleanText(profile?.profile_title || profile?.username || "مدیر", 100), ts, ts).run();
      user = await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE telegram_id=?").bind(adminTelegramId).first();
    }
  }

  if (!user) return fail("این پنل هنوز به حساب BluePanel متصل نشده است؛ ابتدا یک‌بار ربات مرکزی را باز کنید", 403, "PANEL_NOT_LINKED");
  if (user.status !== "active") return fail("حساب شما غیرفعال است", 403, "ACCOUNT_DISABLED");
  const webIsAdmin = user.role === "admin" || isAdminTelegramId(settings, user.telegram_id);
  if (adminRequired && !webIsAdmin) return fail("این صفحه فقط برای مدیر مرکزی است", 403, "ADMIN_REQUIRED");

  if (!agency && profile && profile.id != null && !ownerLogin) {
    const ts = nowIso();
    const agencyId = "agn_pg_" + String(profile.id).replace(/[^a-zA-Z0-9_-]/g, "");
    const encryptedPassword = await encryptSecret(password, env);
    await env.PASARGUARD_DB.prepare(`
      INSERT INTO agencies(id,user_id,title,remote_manager_id,panel_username,panel_password_enc,status,last_usage_bytes,last_billed_bytes,usage_epoch,billing_remainder,total_charged,is_trial,trial_data_limit_bytes,provisioning_source,runtime_version,update_applied_at,created_at,updated_at)
      VALUES(?,?,?,?,?,?,?, ?,0,0,0,0,0,0,'pasarguard_manual',?,?,?,?)
      ON CONFLICT(id) DO UPDATE SET user_id=excluded.user_id,title=excluded.title,panel_username=excluded.panel_username,panel_password_enc=excluded.panel_password_enc,status=excluded.status,runtime_version=excluded.runtime_version,update_applied_at=excluded.update_applied_at,updated_at=excluded.updated_at
    `).bind(
      agencyId, user.id, cleanText(profile.profile_title || profile.username || username, 100), String(profile.id), username, encryptedPassword,
      String(profile.status || "active") === "active" ? "active" : "disabled", Number(profile.used_traffic || 0), APP_VERSION, ts, ts, ts
    ).run();
    agency = await env.PASARGUARD_DB.prepare("SELECT * FROM agencies WHERE id=?").bind(agencyId).first();
  } else if (agency) {
    try {
      await env.PASARGUARD_DB.prepare("UPDATE agencies SET panel_password_enc=?,runtime_version=?,update_applied_at=?,updated_at=? WHERE id=?")
        .bind(await encryptSecret(password, env), APP_VERSION, nowIso(), nowIso(), agency.id).run();
    } catch (_) {}
  }

  const session = await issueWebSession(request, env, "central", { user_id: user.id });
  await audit(env, user.id, "web_login", { username, agencyId: agency?.id || null, mode: authSource });
  return json({ success: true, message: "ورود موفق بود", version: APP_VERSION, auth_source: authSource, expires_at: session.expiresAt, user: { id: user.id, username: user.username, role: user.role } }, 200, {
    "set-cookie": webCookie(request, CENTRAL_WEB_COOKIE, session.token, session.seconds),
    "x-bluepanel-auth-source": authSource
  });
}

async function centralControlAuthStatus(env) {
  let databaseQueryOk = false;
  let databaseError = "";
  try {
    await ensureDb(env);
    await env.PASARGUARD_DB.prepare("SELECT 1 AS ok").first();
    databaseQueryOk = true;
  } catch (error) {
    databaseError = cleanText(error?.message || error, 500);
  }
  let settings = {};
  try { settings = await getSettings(env); } catch (_) {}
  let panelHost = "";
  try { panelHost = new URL(pasarguardBaseUrl(settings)).host; } catch (_) {}
  return json({
    success: true,
    ok: databaseQueryOk,
    version: APP_VERSION,
    role: "bluepanel-core",
    database_binding_detected: Boolean(env.PASARGUARD_DB),
    database_query_ok: databaseQueryOk,
    database_error: databaseError,
    installed: settings.install_completed === "true",
    web_login_enabled: settings.web_login_enabled !== "false",
    panel_url_configured: Boolean(settings.pasarguard_panel_url),
    panel_host: panelHost,
    owner_username_configured: Boolean(settings.pasarguard_admin_username),
    owner_password_configured: Boolean(settings.pasarguard_admin_password),
    passwordless_control_login: false,
    password_control_login: true,
    central_bot_username: settings.central_bot_username || "",
    local_owner_login_ready: Boolean(
      parseAdminTelegramIds(settings.admin_ids || "").length &&
      settings.pasarguard_admin_username &&
      settings.pasarguard_admin_password
    ),
    checked_at: nowIso()
  }, databaseQueryOk ? 200 : 500, { "x-bluepanel-role": "bluepanel-core", "x-bluepanel-version": APP_VERSION });
}

async function centralWebLogout(request, env) {
  await ensureDb(env);
  const cookieName = await revokeWebSession(request, env, "central");
  return json({ success: true, message: "از نسخه وب خارج شدید" }, 200, { "set-cookie": clearWebCookie(request, cookieName) });
}

async function centralWebSessionAuth(request, env) {
  const session = await webSessionFromRequest(request, env, "central");
  if (!session?.user_id) return null;
  const user = await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE id=?").bind(session.user_id).first();
  if (!user || user.status !== "active") return null;
  const settings = await getSettings(env);
  const isAdmin = user.role === "admin" || isAdminTelegramId(settings, user.telegram_id);
  const joinStatus = await centralRequiredJoinStatus(env, settings, user.telegram_id, isAdmin);
  if (!joinStatus.ok) throw joinRequiredError(joinStatus.missing);
  return {
    user,
    telegramUser: { id: user.telegram_id, username: user.username, first_name: user.first_name, last_name: user.last_name },
    isAdmin,
    authMode: "web"
  };
}

function bytesToHex(bytes) {
  return Array.from(new Uint8Array(bytes)).map(b => b.toString(16).padStart(2, "0")).join("");
}

function timingSafeEqualHex(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function hmacSha256(keyBytes, message) {
  const key = await crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  return crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
}

async function validateTelegramInitData(initData, botToken, maxAgeSeconds = 86400) {
  if (!initData || !botToken) throw new Error("Telegram authentication is not configured");
  const params = new URLSearchParams(initData);
  const receivedHash = params.get("hash") || "";
  params.delete("hash");
  const dataCheckString = Array.from(params.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => key + "=" + value)
    .join("\n");

  const secret = await hmacSha256(new TextEncoder().encode("WebAppData"), botToken);
  const computed = bytesToHex(await hmacSha256(new Uint8Array(secret), dataCheckString));
  if (!timingSafeEqualHex(computed, receivedHash)) throw new Error("Invalid Telegram signature");

  const authDate = Number(params.get("auth_date") || 0);
  const age = Math.floor(Date.now() / 1000) - authDate;
  if (!authDate || age < -60 || age > maxAgeSeconds) throw new Error("Telegram session has expired");

  const userRaw = params.get("user");
  if (!userRaw) throw new Error("Telegram user is missing");
  return JSON.parse(userRaw);
}

function isAdminTelegramId(settings, telegramId) {
  const ids = String(settings.admin_ids || "").split(",").map(x => x.trim()).filter(Boolean);
  return ids.includes(String(telegramId));
}

async function authenticate(request, env) {
  await ensureDb(env);
  const settings = await getSettings(env);
  if (settings.install_completed !== "true") throw new Error("ابتدا نصب را از مسیر /setup کامل کنید");
  let telegramUser;
  const initData = request.headers.get("x-telegram-init-data") || "";

  if (initData) {
    telegramUser = await validateTelegramInitData(
      initData,
      settings.bot_token,
      clampInt(settings.auth_max_age_seconds || 86400, 300, 604800)
    );
  } else {
    const webAuth = await centralWebSessionAuth(request, env);
    if (webAuth) return webAuth;
    if (settings.allow_dev_auth === "true" && settings.dev_telegram_id) {
    telegramUser = {
      id: String(settings.dev_telegram_id),
      username: "dev_user",
      first_name: "Development",
      last_name: "User"
    };
    } else {
      throw webAuthError();
    }
  }

  const telegramId = String(telegramUser.id);
  const admin = isAdminTelegramId(settings, telegramId);
  const joinStatus = await centralRequiredJoinStatus(env, settings, telegramId, admin);
  if (!joinStatus.ok) throw joinRequiredError(joinStatus.missing);
  const ts = nowIso();
  await env.PASARGUARD_DB.prepare(`
    INSERT INTO users(telegram_id, username, first_name, last_name, role, status, wallet_balance, created_at, updated_at)
    VALUES(?, ?, ?, ?, ?, 'active', 0, ?, ?)
    ON CONFLICT(telegram_id) DO UPDATE SET
      username=excluded.username,
      first_name=excluded.first_name,
      last_name=excluded.last_name,
      role=CASE WHEN excluded.role='admin' THEN 'admin' ELSE users.role END,
      updated_at=excluded.updated_at
  `).bind(
    telegramId,
    cleanText(telegramUser.username, 64),
    cleanText(telegramUser.first_name, 100),
    cleanText(telegramUser.last_name, 100),
    admin ? "admin" : "user",
    ts,
    ts
  ).run();

  const user = await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE telegram_id=?").bind(telegramId).first();
  if (!user || user.status !== "active") throw new Error("حساب شما غیرفعال است");
  return { user, telegramUser, isAdmin: user.role === "admin" || admin };
}

async function requireAuth(request, env, adminOnly = false) {
  try {
    const auth = await authenticate(request, env);
    if (adminOnly && !auth.isAdmin) return { response: fail("دسترسی مدیر لازم است", 403, "FORBIDDEN") };
    return auth;
  } catch (error) {
    if (error?.code === "JOIN_REQUIRED") return { response: json({ success: false, error: error.message, code: "JOIN_REQUIRED", channels: error.channels || [] }, 403) };
    if (error?.code === "WEB_LOGIN_REQUIRED") return { response: fail(error.message || "ورود نسخه وب لازم است", 401, "WEB_LOGIN_REQUIRED") };
    return { response: fail(error.message || "Unauthorized", 401, error?.code || "UNAUTHORIZED") };
  }
}

async function audit(env, actorUserId, action, details = {}) {
  await env.PASARGUARD_DB.prepare("INSERT INTO audit_logs(id, actor_user_id, action, details, created_at) VALUES(?, ?, ?, ?, ?)")
    .bind(id("log"), actorUserId || null, action, JSON.stringify(details), nowIso()).run();
}

function arrayBufferToBase64(buffer) {
  let binary = "";
  for (const byte of new Uint8Array(buffer)) binary += String.fromCharCode(byte);
  return btoa(binary);
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

async function encryptSecret(value, env) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await encryptionKey(env);
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(value));
  return arrayBufferToBase64(iv) + "." + arrayBufferToBase64(encrypted);
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

async function notifyTelegramUser(env, telegramId, text) {
  try {
    await telegramApi(env, "sendMessage", { chat_id: telegramId, text, parse_mode: "HTML" });
  } catch (_) {}
}

async function notifyAdmins(env, text) {
  const settings = await getSettings(env);
  const ids = String(settings.admin_ids || "").split(",").map(x => x.trim()).filter(Boolean);
  await Promise.all(ids.map(adminId => notifyTelegramUser(env, adminId, text)));
}

function managementNoticeScope(kind, botId = "") {
  return kind === "reseller" ? "reseller:" + String(botId || "") : "central";
}

async function managementNoticeWasDelivered(env, kind, telegramId, botId = "") {
  if (!telegramId) return false;
  await ensureDb(env);
  const row = await env.PASARGUARD_DB.prepare(`
    SELECT id FROM bot_notice_deliveries
    WHERE notice_key='management_access' AND bot_scope=? AND telegram_id=?
    LIMIT 1
  `).bind(managementNoticeScope(kind, botId), String(telegramId)).first();
  return Boolean(row);
}

async function markManagementNoticeDelivered(env, kind, telegramId, botId = "") {
  if (!telegramId) return;
  await ensureDb(env);
  await env.PASARGUARD_DB.prepare(`
    INSERT OR IGNORE INTO bot_notice_deliveries(id,notice_key,bot_scope,telegram_id,delivered_at)
    VALUES(?,?,?,?,?)
  `).bind(id("notice"), "management_access", managementNoticeScope(kind, botId), String(telegramId), nowIso()).run();
}

function parseReleaseChannelText(text) {
  const raw = String(text || "").trim();
  if (!raw || raw === "-") return null;
  const parts = raw.split("|").map(x => x.trim());
  let target = parts[0] || "";
  const publicLink = target.match(/^https:\/\/t\.me\/([A-Za-z0-9_]+)\/?$/i);
  if (publicLink) target = "@" + publicLink[1];
  if (/^t\.me\/([A-Za-z0-9_]+)\/?$/i.test(target)) target = "@" + target.match(/^t\.me\/([A-Za-z0-9_]+)\/?$/i)[1];
  const channel = normalizeJoinChannel({ chat_id: target, title: parts[1] || "", url: parts[2] || "" });
  if (!channel) throw new Error("آیدی کانال معتبر نیست؛ @username یا شناسه عددی -100... ارسال کنید");
  return channel;
}

function releaseChannelPublicUrl(settings) {
  const explicit = cleanText(settings?.release_channel_url, 500).trim();
  if (explicit && /^https:\/\//i.test(explicit)) return explicit;
  const target = String(settings?.release_channel_chat_id || "").trim();
  if (target.startsWith("@")) return "https://t.me/" + target.slice(1);
  return "";
}

async function sendUpdateChannelAfterPanelDelivery(env, telegramId, suppliedSettings = null) {
  const settings = suppliedSettings || await getSettings(env);
  const url = releaseChannelPublicUrl(settings);
  if (!url || !telegramId) return { sent: false, reason: "channel_link_unavailable" };
  try {
    await telegramApi(env, "sendMessage", {
      chat_id: String(telegramId),
      text: "📣 <b>کانال رسمی اخبار و بروزرسانی‌ها</b>\n\nبرای اطلاع از آخرین تغییرات، آموزش‌ها و نسخه‌های جدید، عضو کانال رسمی بروزرسانی‌ها شوید.",
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: [[{ text: "📢 عضویت در کانال آپدیت‌ها", url }]] }
    });
    return { sent: true, url };
  } catch (error) {
    return { sent: false, reason: cleanText(error.message || String(error), 500), url };
  }
}

function normalizeAgencySupportUrl(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  if (/^https:\/\/t\.me\/[A-Za-z0-9_+\-]+\/?$/i.test(raw)) return raw.replace(/\/$/, "");
  const username = raw.replace(/^@+/, "");
  if (/^[A-Za-z0-9_]{3,64}$/.test(username)) return "https://t.me/" + username;
  throw new Error("آدرس پشتیبانی باید به‌صورت @username یا https://t.me/username باشد");
}

function releaseNotesSection(title, items) {
  if (!Array.isArray(items) || !items.length) return "";
  const rows = items.map(item => item.emoji + " " + botEscape(item.text)).join("\n");
  return "<b>" + title + "</b>\n" + rows;
}

function releaseAnnouncementText(settings, test = false) {
  const brand = cleanText(settings.brand_name, 120) || "سامانه پاسارگارد";
  const sections = [
    releaseNotesSection("🤖 ربات مرکزی", RELEASE_NOTES.central),
    releaseNotesSection("🧑‍💼 ربات نماینده", RELEASE_NOTES.reseller)
  ].filter(Boolean);
  const changes = sections.length ? sections.join("\n\n") : "▫️ تغییری برای این نسخه ثبت نشده است.";
  return (test ? "🧪 <b>پیام آزمایشی کانال آپدیت‌ها</b>" : "🚀 <b>بروزرسانی رسمی " + botEscape(brand) + "</b>") + "\n" +
    "━━━━━━━━━━━━━━\n" +
    "🏷 نسخه جدید: <code>" + botEscape(APP_VERSION) + "</code>\n\n" +
    changes +
    (test ? "\n\nℹ️ این پیام فقط برای بررسی دسترسی ربات به کانال ارسال شده است." : "");
}

async function sendReleaseAnnouncement(env, options = {}) {
  await ensureDb(env);
  const settings = await getSettings(env);
  const test = options.test === true;
  const force = options.force === true;
  const allowRepeat = options.allowRepeat === true;
  const target = String(settings.release_channel_chat_id || "").trim();
  if (settings.install_completed !== "true" || !settings.bot_token) return { sent: false, reason: "not_installed" };
  if (!target) return { sent: false, reason: "channel_not_configured" };
  if (!test && !force && settings.release_channel_enabled !== "true") return { sent: false, reason: "disabled" };
  // force فقط اجازه انتشار دستی در حالت غیرفعال را می‌دهد؛ تکرار همان نسخه
  // تنها با allowRepeat صریح مجاز است تا کلیک یا درخواست تکراری کانال را اسپم نکند.
  if (!test && !allowRepeat && settings.release_last_announced_version === APP_VERSION) return { sent: false, reason: "already_sent" };

  let claimed = false;
  if (!test && !allowRepeat) {
    const claim = await env.PASARGUARD_DB.prepare(`
      UPDATE app_settings SET value=?,updated_at=?
      WHERE key='release_announcement_claim_version' AND value<>?
    `).bind(APP_VERSION, nowIso(), APP_VERSION).run();
    claimed = Number(claim?.meta?.changes || 0) > 0;
    if (!claimed) return { sent: false, reason: "already_claimed" };
  }

  try {
    const response = await telegramApi(env, "sendMessage", {
      chat_id: target,
      text: releaseAnnouncementText(settings, test),
      parse_mode: "HTML",
      disable_web_page_preview: true
    });
    const messageId = response?.result?.message_id ? String(response.result.message_id) : "";
    if (!test) {
      await setSettings(env, {
        release_last_announced_version: APP_VERSION,
        release_announcement_claim_version: APP_VERSION,
        release_last_announcement_message_id: messageId,
        release_last_announcement_at: nowIso(),
        release_last_announcement_error: ""
      });
      try { await audit(env, null, "release_announcement_sent", { version: APP_VERSION, target, messageId, force, allowRepeat }); } catch (_) {}
    }
    return { sent: true, test, version: APP_VERSION, target, messageId };
  } catch (error) {
    if (!test) {
      await setSettings(env, {
        release_announcement_claim_version: claimed ? "" : String(settings.release_announcement_claim_version || ""),
        release_last_announcement_error: cleanText(error.message || String(error), 800)
      });
      try { await audit(env, null, "release_announcement_failed", { version: APP_VERSION, target, message: error.message }); } catch (_) {}
    }
    throw error;
  }
}

async function notifyVersionActivation(env) {
  await ensureDb(env);
  const settings = await getSettings(env);
  if (settings.install_completed !== "true" || !settings.bot_token) return { sent: false };
  const ts = nowIso();
  const result = await env.PASARGUARD_DB.prepare(`
    UPDATE app_settings SET value=?,updated_at=?
    WHERE key='last_runtime_version' AND value<>?
  `).bind(APP_VERSION, ts, APP_VERSION).run();
  const activated = Number(result?.meta?.changes || 0) > 0;
  let resellerSync = { success: 0, failed: 0 };
  let agencySync = { migrated: 0, manualSync: { checked: 0, imported: 0, updated: 0, failed: 0 } };

  if (activated) {
    try { agencySync = await applyCurrentReleaseToAllAgencies(env); } catch (error) { agencySync = { migrated: 0, error: cleanText(error.message, 500) }; }
    const pythonState = settings.python_helper_last_status || "never";
    await notifyAdmins(env,
      "🚀 <b>نسخه جدید سامانه فعال شد</b>\n" +
      "نسخه: <code>" + botEscape(APP_VERSION) + "</code>\n" +
      "✅ دیتابیس مشترک: <code>PASARGUARD_DB</code>\n" +
      "✅ نسخه ربات مرکزی و نماینده‌ها همگام شد\n" +
      "✅ پنل‌های دستی پاسارگارد نیز به نسخه جدید متصل شدند\n" +
      "📣 ارسال خودکار اطلاعیه کانال: <code>" + (settings.release_channel_enabled === "true" ? "فعال" : "غیرفعال") + "</code>\n" +
      "🐍 وضعیت Python: <code>" + botEscape(pythonState) + "</code>"
    );
    try { resellerSync = await syncAllResellerBotMenus(env, false); } catch (_) {}
    try { await audit(env, null, "runtime_version_activated", { version: APP_VERSION, independentBot: true, resellerSalesBots: true, resellerSync, agencySync }); } catch (_) {}
  }

  let announcement = { sent: false, reason: "disabled" };
  try {
    announcement = await sendReleaseAnnouncement(env);
  } catch (error) {
    if (activated) {
      await notifyAdmins(env,
        "📣❌ <b>ارسال اطلاعیه نسخه " + botEscape(APP_VERSION) + " ناموفق بود</b>\n" +
        botEscape(error.message || String(error)) + "\n\n" +
        "ربات در درخواست‌های بعدی دوباره تلاش می‌کند."
      );
    }
  }
  return { sent: activated, version: APP_VERSION, resellerSync, agencySync, announcement };
}

let pasarguardTokenCache = { token: "", expiresAt: 0 };

function pasarguardBaseUrl(settings) {
  const raw = String(settings.pasarguard_panel_url || "").trim();
  if (!raw) throw new Error("آدرس پنل PasarGuard در مدیریت تنظیم نشده است");
  return raw.replace(/\/+$/, "").replace(/\/dashboard$/i, "");
}

function pasarguardDashboardUrl(settings) {
  return pasarguardBaseUrl(settings) + "/dashboard";
}

async function getPasarguardToken(env, forceRefresh = false, suppliedSettings = null) {
  const settings = suppliedSettings || await getSettings(env);
  if (settings.pasarguard_access_token) return String(settings.pasarguard_access_token).trim();
  if (!forceRefresh && pasarguardTokenCache.token && pasarguardTokenCache.expiresAt > Date.now() + 60000) {
    return pasarguardTokenCache.token;
  }
  if (!settings.pasarguard_admin_username || !settings.pasarguard_admin_password) {
    throw new Error("نام کاربری و رمز مدیر PasarGuard در پنل مدیریت تنظیم نشده‌اند");
  }
  const form = new URLSearchParams();
  form.set("username", String(settings.pasarguard_admin_username));
  form.set("password", String(settings.pasarguard_admin_password));
  const response = await fetch(pasarguardBaseUrl(settings) + "/api/admin/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: form.toString()
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.access_token) {
    const detail = data.detail || data.message || data.error || ("HTTP " + response.status);
    throw new Error("ورود به PasarGuard ناموفق بود: " + detail);
  }
  pasarguardTokenCache = { token: String(data.access_token), expiresAt: Date.now() + 10 * 60 * 1000 };
  return pasarguardTokenCache.token;
}

async function pasargadRequest(env, method, path, body, retry = true) {
  const settings = await getSettings(env);
  const token = await getPasarguardToken(env, false, settings);
  const response = await fetch(pasarguardBaseUrl(settings) + path, {
    method,
    headers: {
      authorization: "Bearer " + token,
      ...(body === undefined ? {} : { "content-type": "application/json" })
    },
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  if (response.status === 401 && retry && !settings.pasarguard_access_token) {
    pasarguardTokenCache = { token: "", expiresAt: 0 };
    return pasargadRequest(env, method, path, body, false);
  }
  if (response.status === 204) return {};
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = data.detail || data.message || data.error || ("HTTP " + response.status);
    const text = typeof detail === "string" ? detail : JSON.stringify(detail);
    throw new Error(text);
  }
  return data;
}

async function resolvePasarguardRoleId(env, suppliedSettings = null, roleKind = "sales") {
  const settings = suppliedSettings || await getSettings(env);
  const kind = roleKind === "master" ? "master" : "sales";
  const configuredRaw = kind === "master"
    ? settings.pasarguard_master_role_id
    : (settings.pasarguard_sales_role_id || settings.pasarguard_reseller_role_id);
  const configuredId = Number.parseInt(String(configuredRaw || ""), 10);
  if (Number.isInteger(configuredId) && configuredId > 1) return configuredId;
  const roleName = String(kind === "master"
    ? (settings.pasarguard_master_role_name || "مستر نمایندگی")
    : (settings.pasarguard_sales_role_name || settings.pasarguard_reseller_role_name || "نماینده فروش")).trim();
  const data = await pasargadRequest(env, "GET", "/api/admin-roles/simple");
  const roles = Array.isArray(data) ? data : (data.roles || data.data || []);
  const role = roles.find(item => String(item.name || "").trim().toLowerCase() === roleName.toLowerCase());
  if (!role?.id) throw new Error("Role پاسارگارد با نام «" + roleName + "» پیدا نشد؛ ابتدا آن را در PasarGuard بسازید یا Role ID را در مدیریت مرکزی ثبت کنید");
  if (Number(role.id) === 1) throw new Error("Role مالک را نمی‌توان به نماینده اختصاص داد");
  return Number(role.id);
}

async function pasargadSetManagerRole(env, remoteId, roleKind, suppliedSettings = null) {
  if (!remoteId) throw new Error("شناسه مدیر PasarGuard در دسترس نیست");
  const settings = suppliedSettings || await getSettings(env);
  const roleId = await resolvePasarguardRoleId(env, settings, roleKind);
  await pasargadRequest(env, "PUT", "/api/admin/by-id/" + encodeURIComponent(remoteId), { role_id: roleId });
  return roleId;
}

async function applyBotLicenseRoleToAgency(env, agency, licenseType, actorUserId = null) {
  if (!agency?.remote_manager_id) throw new Error("پنل انتخاب‌شده شناسه مدیر PasarGuard ندارد");
  const roleKind = normalizeResellerLicenseType(licenseType) === "master" ? "master" : "sales";
  const roleId = await pasargadSetManagerRole(env, agency.remote_manager_id, roleKind);
  await audit(env, actorUserId, "pasarguard_role_synced_for_bot_license", {
    agencyId: agency.id,
    remoteManagerId: agency.remote_manager_id,
    licenseType: normalizeResellerLicenseType(licenseType),
    roleId
  });
  return roleId;
}

function telegramRepresentativeSupportUrl(username) {
  const normalized = String(username || "").trim().replace(/^@+/, "");
  if (!normalized || !/^[A-Za-z0-9_]{3,64}$/.test(normalized)) return "";
  return "https://t.me/" + normalized;
}

async function pasargadCreateManager(env, input) {
  const settings = await getSettings(env);
  const roleId = await resolvePasarguardRoleId(env, settings, input.roleKind || "sales");
  const payload = {
    username: input.username,
    password: input.password,
    role_id: roleId,
    status: input.enabled === false ? "disabled" : "active",
    note: "Created by Telegram reseller mini app for Telegram ID " + input.telegramId
  };
  const telegramId = Number(input.telegramId);
  if (!Number.isSafeInteger(telegramId) || telegramId <= 0) {
    throw new Error("شناسه تلگرام کاربر معتبر نیست");
  }
  // Keep the PasarGuard manager connected to its real Telegram representative.
  payload.telegram_id = telegramId;

  const profileTitle = cleanText(input.title, 80);
  if (profileTitle) payload.profile_title = profileTitle;

  const representativeSupportUrl = telegramRepresentativeSupportUrl(input.telegramUsername);
  if (representativeSupportUrl) {
    payload.support_url = representativeSupportUrl;
  } else if (settings.pasarguard_support_url) {
    // Preserve the configured global fallback only when the Telegram account
    // has no public username and therefore no valid https://t.me/<username> URL.
    payload.support_url = String(settings.pasarguard_support_url).trim();
  }

  const requestedDataLimit = input.dataLimit === undefined || input.dataLimit === null
    ? settings.pasarguard_admin_data_limit_bytes
    : input.dataLimit;
  const dataLimit = Number.parseInt(String(requestedDataLimit || "0"), 10);
  if (Number.isInteger(dataLimit) && dataLimit > 0) payload.data_limit = dataLimit;
  if (settings.pasarguard_sub_domain) payload.sub_domain = String(settings.pasarguard_sub_domain).trim();
  const data = await pasargadRequest(env, "POST", "/api/admin", payload);
  const remoteId = data?.id || data?.data?.id;
  if (!remoteId) throw new Error("شناسه مدیر در پاسخ PasarGuard پیدا نشد");
  return { remoteId: String(remoteId), raw: data };
}

async function pasargadDeleteManager(env, remoteId) {
  if (!remoteId) return;
  try { await pasargadRequest(env, "DELETE", "/api/admin/by-id/" + encodeURIComponent(remoteId)); } catch (_) {}
}

function extractUsageBytes(data) {
  const direct = data?.used_traffic ?? data?.usage_bytes ?? data?.used_bytes ?? data?.data?.used_traffic;
  if (direct !== undefined && direct !== null) return Math.max(0, Number(direct) || 0);
  throw new Error("فیلد used_traffic در پاسخ PasarGuard پیدا نشد");
}

async function pasargadGetManager(env, remoteId) {
  const query = new URLSearchParams({ ids: String(remoteId), limit: "1" });
  const data = await pasargadRequest(env, "GET", "/api/admins?" + query.toString());
  const admins = Array.isArray(data) ? data : (data.admins || data.data || []);
  const admin = admins.find(item => String(item.id) === String(remoteId)) || admins[0];
  if (!admin) throw new Error("مدیر فروش در PasarGuard پیدا نشد");
  return admin;
}

function pasarguardAdminList(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.admins)) return data.admins;
  if (Array.isArray(data?.data)) return data.data;
  return [];
}

function isPasarguardOwnerAdmin(admin, settings) {
  if (admin?.role?.is_owner === true) return true;
  if (Number(admin?.role?.id || admin?.role_id || 0) === 1) return true;
  return Boolean(settings?.pasarguard_admin_username) &&
    String(admin?.username || "").toLowerCase() === String(settings.pasarguard_admin_username).toLowerCase();
}

function normalizePasarguardAdminStatus(value) {
  const status = String(value || "active").toLowerCase();
  return ["active", "disabled", "limited"].includes(status) ? status : "active";
}

function importedAgencyId(remoteId) {
  const safe = String(remoteId || "unknown").replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 80);
  return "agn_pg_" + safe;
}

function isManualAgency(agency) {
  return String(agency?.provisioning_source || "") === "pasarguard_manual" || String(agency?.id || "").startsWith("agn_pg_");
}

async function pasarguardFindManagersByTelegramId(env, telegramId) {
  const settings = await getSettings(env);
  const expected = String(telegramId);
  const matches = [];
  const pageSize = 100;
  let offset = 0;
  let total = Number.POSITIVE_INFINITY;

  for (let page = 0; page < 100 && offset < total; page++) {
    const query = new URLSearchParams({ offset: String(offset), limit: String(pageSize) });
    const data = await pasargadRequest(env, "GET", "/api/admins?" + query.toString());
    const admins = pasarguardAdminList(data);
    const reportedTotal = Number(data?.total);
    total = Number.isFinite(reportedTotal) ? reportedTotal : Number.POSITIVE_INFINITY;

    for (const admin of admins) {
      if (admin?.telegram_id === undefined || admin?.telegram_id === null) continue;
      if (String(admin.telegram_id) !== expected) continue;
      if (isPasarguardOwnerAdmin(admin, settings)) continue;
      matches.push(admin);
    }

    if (!admins.length) break;
    offset += admins.length;
    if (Number.isFinite(total) && offset >= total) break;
    if (!Number.isFinite(total) && admins.length < pageSize) break;
  }

  return matches;
}

async function syncPasarguardManagersForUser(env, user) {
  const matches = await pasarguardFindManagersByTelegramId(env, user.telegram_id);
  const matchedRemoteIds = new Set();
  let imported = 0;
  let updated = 0;
  let transferred = 0;
  let conflicts = 0;
  const ts = nowIso();

  for (const admin of matches) {
    const remoteId = admin?.id ?? admin?.data?.id;
    if (remoteId === undefined || remoteId === null) continue;
    const remoteKey = String(remoteId);
    matchedRemoteIds.add(remoteKey);

    const username = cleanText(admin.username, 64) || ("admin_" + remoteKey);
    const title = cleanText(admin.profile_title, 80) || ("پنل " + username);
    const status = normalizePasarguardAdminStatus(admin.status);
    let usage = 0;
    try { usage = extractUsageBytes(admin); } catch (_) {}

    const existing = await env.PASARGUARD_DB.prepare(
      "SELECT * FROM agencies WHERE remote_manager_id=? LIMIT 1"
    ).bind(remoteKey).first();

    if (existing) {
      const isImported = isManualAgency(existing);
      if (Number(existing.user_id) !== Number(user.id) && !isImported) {
        conflicts += 1;
        await audit(env, user.id, "pasarguard_admin_link_conflict", {
          remoteId: remoteKey,
          currentUserId: existing.user_id,
          requestedUserId: user.id,
          telegramId: user.telegram_id
        });
        continue;
      }

      const ownershipChanged = Number(existing.user_id) !== Number(user.id);
      if (ownershipChanged) transferred += 1;

      // تست مرکزی یک رکورد سیستمی است و نباید در همگام‌سازی مدیران دستی
      // به پنل pasarguard_manual تبدیل یا وضعیت پایان تست آن دوباره active شود.
      if (Number(existing.is_trial || 0) === 1) {
        const trialExpired = existing.status === "trial_expired" || centralTrialExpired(existing, usage);
        if (trialExpired && status !== "disabled") {
          try { await pasargadSetManagerStatus(env, existing.remote_manager_id, false); }
          catch (error) {
            await audit(env, existing.user_id, "central_trial_remote_disable_retry_failed", { agencyId: existing.id, message: error.message });
          }
        }
        await env.PASARGUARD_DB.prepare(`
          UPDATE agencies SET
            user_id=?, title=?, panel_username=?, status=?, last_usage_bytes=?,
            provisioning_source='central',runtime_version=?,update_applied_at=?,updated_at=?
          WHERE id=?
        `).bind(
          user.id, title, username, trialExpired ? "trial_expired" : status, usage,
          APP_VERSION, ts, ts, existing.id
        ).run();
        updated += 1;
        continue;
      }

      // پنل دستی در اولین اتصال از مصرف فعلی به عنوان نقطه شروع استفاده می‌کند؛
      // در همگام‌سازی‌های بعدی last_billed_bytes حفظ می‌شود تا مصرف جدید صورتحساب شود.
      const preserveBalanceSuspension = isImported && existing.status === "suspended_balance" && status === "disabled";
      const localStatus = preserveBalanceSuspension ? "suspended_balance" : status;
      const resetImportedBilling = isImported && ownershipChanged;
      const nextLastBilled = resetImportedBilling ? usage : Number(existing.last_billed_bytes || 0);
      const nextRemainder = resetImportedBilling ? 0 : Number(existing.billing_remainder || 0);
      const nextEpoch = resetImportedBilling
        ? Number(existing.usage_epoch || 0) + 1
        : Number(existing.usage_epoch || 0);
      const nextTotalCharged = resetImportedBilling ? 0 : Number(existing.total_charged || 0);

      await env.PASARGUARD_DB.prepare(`
        UPDATE agencies SET
          user_id=?, title=?, panel_username=?, status=?, last_usage_bytes=?,
          last_billed_bytes=?, billing_remainder=?, usage_epoch=?, total_charged=?,
          provisioning_source='pasarguard_manual',runtime_version=?,update_applied_at=?,updated_at=?
        WHERE id=?
      `).bind(
        user.id, title, username, localStatus, usage,
        nextLastBilled, nextRemainder, nextEpoch, nextTotalCharged, APP_VERSION, ts, ts, existing.id
      ).run();
      updated += 1;
      continue;
    }

    const insertResult = await env.PASARGUARD_DB.prepare(`
      INSERT OR IGNORE INTO agencies(
        id, user_id, title, remote_manager_id, panel_username, panel_password_enc,
        status, last_usage_bytes, last_billed_bytes, usage_epoch, billing_remainder,
        total_charged, provisioning_source, runtime_version, update_applied_at, created_at, updated_at
      ) VALUES(?, ?, ?, ?, ?, NULL, ?, ?, ?, 0, 0, 0, 'pasarguard_manual', ?, ?, ?, ?)
    `).bind(
      importedAgencyId(remoteKey),
      user.id,
      title,
      remoteKey,
      username,
      status,
      usage,
      usage,
      APP_VERSION,
      ts,
      ts,
      ts
    ).run();
    imported += Number(insertResult?.meta?.changes || 0);
  }

  const existingImported = await env.PASARGUARD_DB.prepare(`
    SELECT a.id,a.remote_manager_id,a.panel_password_enc,
           EXISTS(SELECT 1 FROM reseller_bots rb WHERE rb.agency_id=a.id) AS has_reseller_bot
    FROM agencies a
    WHERE a.user_id=? AND (a.provisioning_source='pasarguard_manual' OR a.id LIKE 'agn_pg_%')
  `).bind(user.id).all();
  let removed = 0;
  for (const agency of existingImported.results || []) {
    if (matchedRemoteIds.has(String(agency.remote_manager_id))) continue;
    if (!agency.panel_password_enc && !Number(agency.has_reseller_bot || 0)) {
      const result = await env.PASARGUARD_DB.prepare("DELETE FROM agencies WHERE id=? AND user_id=?")
        .bind(agency.id, user.id).run();
      removed += Number(result?.meta?.changes || 0);
    } else {
      await env.PASARGUARD_DB.prepare("UPDATE agencies SET status='remote_missing',runtime_version=?,update_applied_at=?,updated_at=? WHERE id=? AND user_id=?")
        .bind(APP_VERSION, ts, ts, agency.id, user.id).run();
    }
  }

  const pendingUpdateLink = await env.PASARGUARD_DB.prepare(`
    SELECT COUNT(*) AS c FROM agencies
    WHERE user_id=? AND provisioning_source='pasarguard_manual' AND update_channel_sent_at IS NULL
  `).bind(user.id).first();
  if (Number(pendingUpdateLink?.c || 0) > 0) {
    const sent = await sendUpdateChannelAfterPanelDelivery(env, user.telegram_id);
    if (sent.sent) {
      await env.PASARGUARD_DB.prepare("UPDATE agencies SET update_channel_sent_at=?,updated_at=? WHERE user_id=? AND provisioning_source='pasarguard_manual' AND update_channel_sent_at IS NULL")
        .bind(ts, ts, user.id).run();
    }
  }

  if (imported || transferred || removed) {
    await audit(env, user.id, "pasarguard_admins_auto_linked", {
      telegramId: user.telegram_id,
      matched: matches.length,
      imported,
      updated,
      transferred,
      removed,
      conflicts
    });
  }

  return { matched: matches.length, imported, updated, transferred, removed, conflicts };
}

async function syncPasarguardManagersForAllUsers(env, limit = 100) {
  await ensureDb(env);
  const rows = await env.PASARGUARD_DB.prepare(`
    SELECT id,telegram_id,username,first_name,last_name
    FROM users WHERE telegram_id IS NOT NULL AND TRIM(telegram_id)<>''
    ORDER BY updated_at ASC LIMIT ?
  `).bind(Math.max(1, Math.min(500, Number(limit || 100)))).all();
  let checked = 0, imported = 0, updated = 0, removed = 0, failed = 0;
  const errors = [];
  for (const user of rows.results || []) {
    try {
      const result = await syncPasarguardManagersForUser(env, user);
      checked++;
      imported += Number(result.imported || 0);
      updated += Number(result.updated || 0);
      removed += Number(result.removed || 0);
    } catch (error) {
      failed++;
      errors.push({ userId: user.id, telegramId: user.telegram_id, error: cleanText(error.message, 300) });
    }
  }
  return { checked, imported, updated, removed, failed, errors };
}

async function applyCurrentReleaseToAllAgencies(env) {
  const ts = nowIso();
  const manualSync = await syncPasarguardManagersForAllUsers(env, 250);
  const result = await env.PASARGUARD_DB.prepare(`
    UPDATE agencies SET runtime_version=?,update_applied_at=?,updated_at=CASE WHEN updated_at IS NULL THEN ? ELSE updated_at END
    WHERE COALESCE(runtime_version,'')<>?
  `).bind(APP_VERSION, ts, ts, APP_VERSION).run();
  return { version: APP_VERSION, migrated: Number(result?.meta?.changes || 0), manualSync };
}

async function refreshImportedAgency(env, agency) {
  const admin = await pasarguardGetManager(env, agency.remote_manager_id);
  const usage = extractUsageBytes(admin);
  const remoteStatus = normalizePasarguardAdminStatus(admin.status);
  const username = cleanText(admin.username, 64) || agency.panel_username;
  const title = cleanText(admin.profile_title, 80) || agency.title || ("پنل " + username);

  // نسخه‌های قبلی ممکن بود تست مرکزی را اشتباهاً manual علامت بزنند.
  // این مسیر رکورد را به central برمی‌گرداند و وضعیت پایان تست را حفظ می‌کند.
  if (Number(agency.is_trial || 0) === 1) {
    const status = agency.status === "trial_expired" || centralTrialExpired(agency, usage)
      ? "trial_expired"
      : remoteStatus;
    await env.PASARGUARD_DB.prepare(`
      UPDATE agencies SET title=?, panel_username=?, status=?, last_usage_bytes=?,
        provisioning_source='central',runtime_version=?,update_applied_at=?,updated_at=?
      WHERE id=?
    `).bind(title, username, status, usage, APP_VERSION, nowIso(), nowIso(), agency.id).run();
    return { usage, status };
  }

  // اگر پنل به علت اتمام موجودی توسط سامانه تعلیق شده، پاسخ disabled پاسارگارد
  // نباید دلیل تعلیق محلی را از بین ببرد؛ تا پس از شارژ دوباره فعال شود.
  const status = ["suspended_balance", "paused_admin"].includes(agency.status) && remoteStatus === "disabled"
    ? agency.status
    : remoteStatus;
  await env.PASARGUARD_DB.prepare(`
    UPDATE agencies SET title=?, panel_username=?, status=?, last_usage_bytes=?,
      provisioning_source='pasarguard_manual',runtime_version=?,update_applied_at=?,updated_at=?
    WHERE id=? AND (provisioning_source='pasarguard_manual' OR id LIKE 'agn_pg_%')
  `).bind(title, username, status, usage, APP_VERSION, nowIso(), nowIso(), agency.id).run();
  return { usage, status };
}
async function pasargadGetUsage(env, agency) {
  const admin = await pasargadGetManager(env, agency.remote_manager_id);
  return extractUsageBytes(admin);
}

async function pasargadSetManagerStatus(env, remoteId, enabled) {
  if (!remoteId) return;
  await pasargadRequest(env, "PUT", "/api/admin/by-id/" + encodeURIComponent(remoteId), {
    status: enabled ? "active" : "disabled"
  });
}

async function reconcileUserAgencies(env, userId) {
  const user = await env.PASARGUARD_DB.prepare(
    "SELECT wallet_balance, telegram_id FROM users WHERE id=?"
  ).bind(userId).first();
  if (!user) return { changed: 0, shouldSuspend: false, balance: 0 };

  const balance = Number(user.wallet_balance || 0);
  const shouldSuspend = balance <= 0;
  const desiredFrom = shouldSuspend ? "active" : "suspended_balance";
  const desiredTo = shouldSuspend ? "suspended_balance" : "active";
  const result = await env.PASARGUARD_DB.prepare(
    "SELECT id, remote_manager_id FROM agencies WHERE user_id=? AND status=? AND COALESCE(is_trial,0)=0"
  ).bind(userId, desiredFrom).all();

  let changed = 0;
  for (const agency of result.results || []) {
    try {
      await pasargadSetManagerStatus(env, agency.remote_manager_id, !shouldSuspend);
      const update = await env.PASARGUARD_DB.prepare(
        "UPDATE agencies SET status=?, updated_at=? WHERE id=? AND status=?"
      ).bind(desiredTo, nowIso(), agency.id, desiredFrom).run();
      changed += Number(update?.meta?.changes || 0);
    } catch (error) {
      await audit(env, null, "agency_status_sync_failed", {
        agencyId: agency.id,
        userId,
        balance,
        targetStatus: desiredTo,
        message: error.message
      });
    }
  }

  if (changed > 0 && shouldSuspend) {
    await notifyTelegramUser(
      env,
      user.telegram_id,
      "⚠️ موجودی حساب شما به صفر رسیده است و پنل نمایندگی تا زمان شارژ حساب غیرفعال شد."
    );
  } else if (changed > 0 && !shouldSuspend) {
    await notifyTelegramUser(
      env,
      user.telegram_id,
      "✅ حساب شما شارژ شد و پنل نمایندگی دوباره فعال گردید."
    );
  }

  return { changed, shouldSuspend, balance, status: desiredTo };
}

async function reconcileAllAgencyBalanceStates(env, limit = 200) {
  const result = await env.PASARGUARD_DB.prepare(`
    SELECT DISTINCT u.id
    FROM users u
    INNER JOIN agencies a ON a.user_id=u.id
    WHERE COALESCE(a.is_trial,0)=0 AND ((u.wallet_balance<=0 AND a.status='active')
       OR (u.wallet_balance>0 AND a.status='suspended_balance'))
    ORDER BY u.updated_at ASC
    LIMIT ?
  `).bind(limit).all();

  let users = 0;
  let changed = 0;
  const errors = [];
  for (const row of result.results || []) {
    try {
      const state = await reconcileUserAgencies(env, row.id);
      users += 1;
      changed += Number(state?.changed || 0);
    } catch (error) {
      errors.push({ userId: row.id, error: error.message });
      await audit(env, null, "balance_status_reconcile_failed", { userId: row.id, message: error.message });
    }
  }
  return { users, changed, errors };
}

async function enforceCentralTrialAgency(env, agency, currentUsageBytes = null) {
  if (Number(agency?.is_trial || 0) !== 1) return { charged: 0, trial: false };
  const usage = currentUsageBytes === null ? Number(agency.last_usage_bytes || 0) : Math.max(0, Number(currentUsageBytes || 0));
  const expired = centralTrialExpired(agency, usage);
  const ts = nowIso();
  if (!expired) {
    await env.PASARGUARD_DB.prepare(
      "UPDATE agencies SET last_usage_bytes=?,last_billed_bytes=?,billing_remainder=0,total_charged=0,updated_at=? WHERE id=?"
    ).bind(usage, usage, ts, agency.id).run();
    return { charged: 0, trial: true, expired: false };
  }

  // وضعیت پایان تست محلی مرجع است. همگام‌سازی PasarGuard دیگر اجازه ندارد
  // آن را به active/disabled برگرداند. به‌روزرسانی مستقل از اعلان انجام می‌شود.
  const transitioned = await env.PASARGUARD_DB.prepare(
    "UPDATE agencies SET status='trial_expired',provisioning_source='central',last_usage_bytes=?,last_billed_bytes=?,billing_remainder=0,total_charged=0,updated_at=? WHERE id=? AND status<>'trial_expired'"
  ).bind(usage, usage, ts, agency.id).run();
  if (Number(transitioned?.meta?.changes || 0) > 0) {
    try { await pasargadSetManagerStatus(env, agency.remote_manager_id, false); }
    catch (error) {
      await audit(env, agency.user_id, "central_trial_remote_disable_failed", { agencyId: agency.id, message: error.message });
    }
  } else {
    await env.PASARGUARD_DB.prepare(
      "UPDATE agencies SET provisioning_source='central',last_usage_bytes=?,last_billed_bytes=?,billing_remainder=0,total_charged=0,updated_at=? WHERE id=?"
    ).bind(usage, usage, ts, agency.id).run();
  }

  // این UPDATE نقش قفل اتمیک را دارد. حتی اگر چند Cron یا درخواست هم‌زمان
  // به این تابع برسند، فقط یک اجرا اجازه ارسال پیام پایان تست را می‌گیرد.
  const noticeClaim = await env.PASARGUARD_DB.prepare(
    "UPDATE agencies SET trial_expiry_notified_at=? WHERE id=? AND trial_expiry_notified_at IS NULL"
  ).bind(ts, agency.id).run();
  const shouldNotify = Number(noticeClaim?.meta?.changes || 0) > 0;
  if (shouldNotify) {
    const owner = await env.PASARGUARD_DB.prepare("SELECT telegram_id FROM users WHERE id=?").bind(agency.user_id).first();
    if (owner?.telegram_id) {
      try {
        await notifyTelegramUser(env, owner.telegram_id,
          "⏳ تست رایگان مرکزی شما به پایان رسید. برای ادامه استفاده، از بخش پنل‌های من یک پنل اصلی بسازید.");
      } catch (error) {
        await audit(env, agency.user_id, "central_trial_expiry_notice_failed", { agencyId: agency.id, message: error.message });
      }
    }
    await audit(env, agency.user_id, "central_trial_expired", {
      agencyId: agency.id,
      usedBytes: usage,
      dataLimitBytes: Number(agency.trial_data_limit_bytes || 0),
      expiresAt: agency.trial_expires_at || ""
    });
  }
  return { charged: 0, trial: true, expired: true, notified: shouldNotify };
}
async function processCentralTrialExpirations(env, limit = 100) {
  await ensureDb(env);
  const rows = await env.PASARGUARD_DB.prepare(`
    SELECT * FROM agencies
    WHERE is_trial=1 AND status='active'
    ORDER BY trial_expires_at ASC LIMIT ?
  `).bind(limit).all();
  let checked = 0, expired = 0;
  const errors = [];
  for (const agency of rows.results || []) {
    checked++;
    if (!centralTrialExpired(agency)) continue;
    try {
      const result = await enforceCentralTrialAgency(env, agency, Number(agency.last_usage_bytes || 0));
      if (result.expired) expired++;
    } catch (error) {
      errors.push({ agencyId: agency.id, error: error.message });
    }
  }
  return { checked, expired, errors };
}

async function getCentralTrialAgency(env, userId) {
  return env.PASARGUARD_DB.prepare(
    "SELECT * FROM agencies WHERE user_id=? AND is_trial=1 ORDER BY created_at DESC LIMIT 1"
  ).bind(userId).first();
}

async function createCentralTrialForUser(env, user) {
  const settings = await getSettings(env);
  const config = centralTrialConfig(settings);
  if (!config.enabled) throw new Error("تست رایگان مرکزی در حال حاضر غیرفعال است");
  const existing = await getCentralTrialAgency(env, user.id);
  if (existing) throw new Error("تست رایگان این حساب قبلاً دریافت شده است");

  const usernameSeed = "trial_" + String(user.telegram_id || user.id).slice(-7) + "_" + Math.random().toString(36).slice(2, 6);
  const username = normalizeUsername(usernameSeed);
  const password = randomPassword();
  const title = "تست رایگان مرکزی";
  let remote;
  try {
    remote = await pasargadCreateManager(env, {
      title,
      username,
      password,
      telegramId: user.telegram_id,
      telegramUsername: user.username,
      enabled: true,
      dataLimit: config.dataLimitBytes
    });
  } catch (error) {
    throw new Error("ساخت تست در پاسارگارد ناموفق بود: " + error.message);
  }

  const agencyId = id("trial");
  const encryptedPassword = await encryptSecret(password, env);
  const ts = nowIso();
  const expiresAt = new Date(Date.now() + config.durationHours * 3600000).toISOString();
  try {
    await env.PASARGUARD_DB.prepare(`
      INSERT INTO agencies(
        id,user_id,title,remote_manager_id,panel_username,panel_password_enc,status,
        is_trial,trial_expires_at,trial_data_limit_bytes,created_at,updated_at
      ) VALUES(?,?,?,?,?,?,'active',1,?,?,?,?)
    `).bind(
      agencyId,user.id,title,remote.remoteId,username,encryptedPassword,
      expiresAt,config.dataLimitBytes,ts,ts
    ).run();
  } catch (error) {
    try { await pasargadDeleteManager(env, remote.remoteId); } catch (_) {}
    if (String(error.message || "").toLowerCase().includes("unique")) throw new Error("تست رایگان این حساب قبلاً دریافت شده است");
    throw error;
  }

  await audit(env, user.id, "central_trial_created", {
    agencyId, remoteId: remote.remoteId, dataLimitBytes: config.dataLimitBytes, durationHours: config.durationHours, expiresAt
  });
  await sendUpdateChannelAfterPanelDelivery(env, user.telegram_id, settings);
  return {
    id: agencyId,
    title,
    username,
    password,
    panelUrl: pasarguardDashboardUrl(settings),
    status: "active",
    is_trial: 1,
    trial_expires_at: expiresAt,
    trial_data_limit_bytes: config.dataLimitBytes,
    duration_hours: config.durationHours
  };
}

async function createCentralTrial(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  try {
    const trial = await createCentralTrialForUser(env, auth.user);
    return json({ success: true, message: "تست رایگان با موفقیت ساخته شد.", trial });
  } catch (error) {
    return fail(error.message || "ساخت تست رایگان ناموفق بود", 400, "CENTRAL_TRIAL_FAILED");
  }
}

async function billAgency(env, agency, currentUsageBytes, pricePerGb) {
  if (Number(agency.is_trial || 0) === 1) return enforceCentralTrialAgency(env, agency, currentUsageBytes);
  const oldUsage = Number(agency.last_billed_bytes || 0);
  let epoch = Number(agency.usage_epoch || 0);
  if (currentUsageBytes < oldUsage) {
    epoch += 1;
    await env.PASARGUARD_DB.prepare(
      "UPDATE agencies SET last_usage_bytes=?, last_billed_bytes=?, usage_epoch=?, billing_remainder=0, updated_at=? WHERE id=?"
    ).bind(currentUsageBytes, currentUsageBytes, epoch, nowIso(), agency.id).run();
    await audit(env, null, "usage_counter_reset", { agencyId: agency.id, previous: oldUsage, current: currentUsageBytes });
    return { charged: 0, reset: true };
  }

  const delta = currentUsageBytes - oldUsage;
  if (delta <= 0) {
    await env.PASARGUARD_DB.prepare("UPDATE agencies SET last_usage_bytes=?, updated_at=? WHERE id=?")
      .bind(currentUsageBytes, nowIso(), agency.id).run();
    return { charged: 0 };
  }

  const numerator = delta * pricePerGb + Number(agency.billing_remainder || 0);
  const charge = Math.floor(numerator / GIB);
  const remainder = Math.floor(numerator % GIB);
  const ts = nowIso();

  if (charge <= 0) {
    await env.PASARGUARD_DB.prepare(
      "UPDATE agencies SET last_usage_bytes=?, last_billed_bytes=?, billing_remainder=?, updated_at=? WHERE id=?"
    ).bind(currentUsageBytes, currentUsageBytes, remainder, ts, agency.id).run();
    return { charged: 0 };
  }

  const eventKey = [agency.id, epoch, currentUsageBytes, pricePerGb].join(":");
  const ledgerId = id("led");
  const statements = [
    env.PASARGUARD_DB.prepare(`
      INSERT OR IGNORE INTO billing_events(event_key, agency_id, user_id, usage_from, usage_to, charged_amount, price_per_gb, created_at)
      VALUES(?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(eventKey, agency.id, agency.user_id, oldUsage, currentUsageBytes, charge, pricePerGb, ts),
    env.PASARGUARD_DB.prepare(`
      UPDATE agencies SET last_usage_bytes=?, last_billed_bytes=?, billing_remainder=?, total_charged=total_charged+?, updated_at=?
      WHERE id=? AND changes()=1
    `).bind(currentUsageBytes, currentUsageBytes, remainder, charge, ts, agency.id),
    env.PASARGUARD_DB.prepare("UPDATE users SET wallet_balance=wallet_balance-?, updated_at=? WHERE id=? AND changes()=1")
      .bind(charge, ts, agency.user_id),
    env.PASARGUARD_DB.prepare(`
      INSERT INTO wallet_ledger(id, user_id, type, amount, balance_after, ref_type, ref_id, description, created_at)
      SELECT ?, id, 'usage_charge', ?, wallet_balance, 'agency', ?, ?, ? FROM users WHERE id=? AND changes()=1
    `).bind(ledgerId, -charge, agency.id, "هزینه مصرف پنل " + agency.title, ts, agency.user_id)
  ];
  const results = await env.PASARGUARD_DB.batch(statements);
  const inserted = Number(results?.[0]?.meta?.changes || 0) > 0;
  if (inserted) await reconcileUserAgencies(env, agency.user_id);
  return { charged: inserted ? charge : 0 };
}

async function syncUsage(env, limit = 50) {
  await ensureDb(env);
  const settings = await getSettings(env);
  if (settings.usage_sync_enabled !== "true") return { processed: 0, charged: 0 };
  const pricePerGb = clampInt(settings.price_per_gb, 0, 1000000000);
  const result = await env.PASARGUARD_DB.prepare(
    "SELECT * FROM agencies WHERE (COALESCE(is_trial,0)=0 AND provisioning_source='pasarguard_manual') OR status IN ('active','suspended_balance') ORDER BY updated_at ASC LIMIT ?"
  ).bind(limit).all();

  let processed = 0;
  let charged = 0;
  const errors = [];
  for (const agency of result.results || []) {
    try {
      let usage;
      if (isManualAgency(agency)) {
        const refreshed = await refreshImportedAgency(env, agency);
        usage = refreshed.usage;
      } else {
        usage = await pasargadGetUsage(env, agency);
      }
      const bill = await billAgency(env, agency, usage, pricePerGb);
      processed += 1;
      charged += Number(bill.charged || 0);
    } catch (error) {
      errors.push({ agencyId: agency.id, error: error.message });
      await audit(env, null, "usage_sync_failed", { agencyId: agency.id, message: error.message });
    }
  }
  return { processed, charged, errors };
}

async function syncUsageForUser(env, userId, limit = 30, minIntervalSeconds = LIVE_USAGE_MIN_INTERVAL_SECONDS) {
  await ensureDb(env);
  const settings = await getSettings(env);
  if (settings.usage_sync_enabled !== "true") return { processed: 0, charged: 0, errors: [] };

  const pricePerGb = clampInt(settings.price_per_gb, 0, 1000000000);
  const rows = await env.PASARGUARD_DB.prepare(`
    SELECT * FROM agencies
    WHERE user_id=? AND ((COALESCE(is_trial,0)=0 AND provisioning_source='pasarguard_manual') OR status IN ('active','suspended_balance'))
    ORDER BY updated_at ASC LIMIT ?
  `).bind(userId, limit).all();

  const cutoff = Date.now() - Math.max(0, Number(minIntervalSeconds || 0)) * 1000;
  let processed = 0;
  let charged = 0;
  const errors = [];

  for (const agency of rows.results || []) {
    const updatedAt = Date.parse(agency.updated_at || "") || 0;
    if (minIntervalSeconds > 0 && updatedAt > cutoff) continue;
    try {
      let usage;
      if (isManualAgency(agency)) {
        const refreshed = await refreshImportedAgency(env, agency);
        usage = refreshed.usage;
      } else {
        usage = await pasargadGetUsage(env, agency);
      }
      const bill = await billAgency(env, agency, usage, pricePerGb);
      processed += 1;
      charged += Number(bill.charged || 0);
    } catch (error) {
      errors.push({ agencyId: agency.id, error: error.message });
      await audit(env, userId, "user_usage_sync_failed", { agencyId: agency.id, message: error.message });
    }
  }

  await reconcileUserAgencies(env, userId);
  return { processed, charged, errors };
}

async function liveUsageSnapshot(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  await ensureDb(env);

  const settings = await getSettings(env);
  const pricePerGb = clampInt(settings.price_per_gb, 0, 1000000000);
  const agencyRows = await env.PASARGUARD_DB.prepare(
    "SELECT * FROM agencies WHERE user_id=? ORDER BY created_at DESC"
  ).bind(auth.user.id).all();

  let processed = 0;
  let charged = 0;
  const errors = [];
  const cutoff = Date.now() - LIVE_USAGE_MIN_INTERVAL_SECONDS * 1000;

  if (settings.usage_sync_enabled === "true") {
    for (const agency of agencyRows.results || []) {
      const updatedAt = Date.parse(agency.updated_at || "") || 0;
      if (updatedAt > cutoff) continue;
      try {
        let usage;
        if (isManualAgency(agency)) {
          const refreshed = await refreshImportedAgency(env, agency);
          usage = refreshed.usage;
        } else {
          usage = await pasargadGetUsage(env, agency);
        }
        const bill = await billAgency(env, agency, usage, pricePerGb);
        processed += 1;
        charged += Number(bill.charged || 0);
      } catch (error) {
        errors.push({ agencyId: agency.id, message: error.message });
        await audit(env, auth.user.id, "live_usage_sync_failed", {
          agencyId: agency.id,
          message: error.message
        });
      }
    }
  }

  await reconcileUserAgencies(env, auth.user.id);

  const user = await env.PASARGUARD_DB.prepare(
    "SELECT wallet_balance FROM users WHERE id=?"
  ).bind(auth.user.id).first();
  const agencies = await env.PASARGUARD_DB.prepare(`
    SELECT id, title, remote_manager_id, panel_username, status, last_usage_bytes,
           total_charged, is_trial, trial_expires_at, trial_data_limit_bytes, created_at, updated_at,
           CASE WHEN provisioning_source='pasarguard_manual' OR id LIKE 'agn_pg_%' THEN 1 ELSE 0 END AS imported
    FROM agencies WHERE user_id=? ORDER BY created_at DESC
  `).bind(auth.user.id).all();
  const ledger = await env.PASARGUARD_DB.prepare(`
    SELECT id, type, amount, balance_after, description, created_at
    FROM wallet_ledger WHERE user_id=? ORDER BY created_at DESC LIMIT 40
  `).bind(auth.user.id).all();

  const list = agencies.results || [];
  return json({
    success: true,
    live: settings.usage_sync_enabled === "true",
    interval_seconds: LIVE_USAGE_MIN_INTERVAL_SECONDS,
    server_time: nowIso(),
    processed,
    charged,
    errors,
    wallet_balance: Number(user?.wallet_balance || 0),
    agencies: list,
    ledger: ledger.results || [],
    summary: {
      total_usage_bytes: list.reduce((sum, item) => sum + Number(item.last_usage_bytes || 0), 0),
      total_charged: list.reduce((sum, item) => sum + Number(item.total_charged || 0), 0),
      active_agencies: list.filter(item => item.status === "active").length,
      suspended_agencies: list.filter(item => item.status !== "active").length
    }
  });
}

function localDashboardInsight(metrics) {
  const wallet = Number(metrics.wallet_balance || 0);
  const minRecharge = Math.max(1, Number(metrics.min_recharge || 100000));
  const active = Math.max(0, Number(metrics.active_agencies || 0));
  const suspended = Math.max(0, Number(metrics.suspended_agencies || 0));
  const pending = Math.max(0, Number(metrics.pending_payments || 0));
  const total = active + suspended;
  let score = total === 0 ? 88 : 100;
  const recommendations = [];

  if (wallet <= 0) {
    score -= 42;
    recommendations.push("برای جلوگیری از توقف سرویس، کیف پول را شارژ کنید.");
  } else if (wallet < minRecharge) {
    score -= 18;
    recommendations.push("موجودی به حداقل شارژ نزدیک است.");
  }
  if (suspended > 0) {
    score -= Math.min(36, suspended * 12);
    recommendations.push("نمایندگی‌های تعلیق‌شده را بررسی کنید.");
  }
  if (pending > 0) {
    score -= Math.min(15, pending * 3);
    recommendations.push("فاکتورهای معلق را تعیین تکلیف کنید.");
  }
  if (total > 0 && active === 0) score -= 18;
  score = Math.max(0, Math.min(100, Math.round(score)));

  let tone = "good", title = "حساب آماده فعالیت است", message = "همه‌چیز منظم است و می‌توانید با خیال راحت ادامه دهید.";
  if (score < 45) {
    tone = "critical";
    title = "نیاز به رسیدگی فوری";
    message = recommendations[0] || "وضعیت حساب را بررسی کنید.";
  } else if (score < 75) {
    tone = "warning";
    title = "چند مورد نیاز به توجه دارد";
    message = recommendations[0] || "برای پایداری بهتر، وضعیت حساب را مرور کنید.";
  } else if (total === 0) {
    title = "آماده ساخت اولین نمایندگی";
    message = "حساب شما آماده است؛ اولین پنل را از بخش نمایندگی بسازید.";
  }
  return { success: true, score, tone, title, message, recommendations, source: "javascript-fallback" };
}

async function dashboardInsight(env, metrics, options = {}) {
  const fallback = localDashboardInsight(metrics);
  if (options.fast === true || !env.PY_HELPER || typeof env.PY_HELPER.fetch !== "function") return fallback;

  const timeoutMs = Math.max(100, Math.min(1500, Number(options.timeoutMs || PY_HELPER_INSIGHT_TIMEOUT_MS)));
  const controller = new AbortController();
  let timeoutId = null;
  try {
    const helperRequest = new Request("https://python-helper/insights", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(metrics),
      signal: controller.signal
    });
    const response = await Promise.race([
      env.PY_HELPER.fetch(helperRequest),
      new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
          try { controller.abort("python-helper-timeout"); } catch (_) {}
          reject(new Error("PY_HELPER_TIMEOUT"));
        }, timeoutMs);
      })
    ]);
    if (!response?.ok) return fallback;
    const data = await response.json();
    if (!data || data.success === false || !Number.isFinite(Number(data.score))) return fallback;
    return {
      success: true,
      score: Math.max(0, Math.min(100, Math.round(Number(data.score)))),
      tone: ["good", "warning", "critical"].includes(data.tone) ? data.tone : "good",
      title: cleanText(data.title, 160) || fallback.title,
      message: cleanText(data.message, 400) || fallback.message,
      recommendations: Array.isArray(data.recommendations) ? data.recommendations.slice(0, 4).map(x => cleanText(x, 240)) : [],
      source: "python-worker"
    };
  } catch (_) {
    return fallback;
  } finally {
    if (timeoutId !== null) clearTimeout(timeoutId);
  }
}

async function bootstrap(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  let pasarguardSync = null;
  try {
    pasarguardSync = await syncPasarguardManagersForUser(env, auth.user);
  } catch (error) {
    pasarguardSync = { error: error.message };
    await audit(env, auth.user.id, "pasarguard_admin_auto_link_failed", {
      telegramId: auth.user.telegram_id,
      message: error.message
    });
  }
  await reconcileUserAgencies(env, auth.user.id);
  const settings = await getSettings(env);
  const agencies = await env.PASARGUARD_DB.prepare(`
    SELECT id, title, remote_manager_id, panel_username, status, last_usage_bytes, total_charged,
           is_trial, trial_expires_at, trial_data_limit_bytes, created_at, updated_at,
           CASE WHEN provisioning_source='pasarguard_manual' OR id LIKE 'agn_pg_%' THEN 1 ELSE 0 END AS imported
    FROM agencies WHERE user_id=? ORDER BY created_at DESC
  `).bind(auth.user.id).all();
  const payments = await env.PASARGUARD_DB.prepare(`
    SELECT id, provider_invoice_id, amount_toman, amount_rial, final_amount_rial, status,
           payment_link, card_number, paid_at, credited_at, created_at, updated_at
    FROM payment_invoices WHERE user_id=? ORDER BY created_at DESC LIMIT 30
  `).bind(auth.user.id).all();
  const bitpinDeposits = await env.PASARGUARD_DB.prepare(`
    SELECT id,asset,network,txid,crypto_amount,rate_toman,amount_toman,destination_address,status,note,
           created_at,updated_at,reviewed_at,credited_at
    FROM bitpin_deposits WHERE user_id=? ORDER BY created_at DESC LIMIT 30
  `).bind(auth.user.id).all();
  const ledger = await env.PASARGUARD_DB.prepare(`
    SELECT id, type, amount, balance_after, description, created_at
    FROM wallet_ledger WHERE user_id=? ORDER BY created_at DESC LIMIT 40
  `).bind(auth.user.id).all();

  const agencyList = agencies.results || [];
  const centralTrialAgency = agencyList.find(item => Number(item.is_trial || 0) === 1) || null;
  const centralTrial = centralTrialSummary(settings, centralTrialAgency);
  const paymentList = payments.results || [];
  const dashboardInsightResult = await dashboardInsight(env, {
    wallet_balance: Number(auth.user.wallet_balance || 0),
    min_recharge: Number(settings.min_recharge || 100000),
    active_agencies: agencyList.filter(item => item.status === "active").length,
    suspended_agencies: agencyList.filter(item => item.status !== "active").length,
    pending_payments: paymentList.filter(item => String(item.status || "").toUpperCase() === "PENDING").length,
    total_usage_bytes: agencyList.reduce((sum, item) => sum + Number(item.last_usage_bytes || 0), 0),
    price_per_gb: Number(settings.price_per_gb || 0)
  });

  const controlMode = String(request.headers.get("x-client-mode") || "").toLowerCase() === "control";
  let admin = null;
  if (auth.isAdmin && controlMode) {
    const recentPayments = await env.PASARGUARD_DB.prepare(`
      SELECT p.id,p.provider_invoice_id,p.amount_toman,p.final_amount_rial,p.status,p.paid_at,
             p.credited_at,p.created_at,u.telegram_id,u.username,u.first_name,u.last_name
      FROM payment_invoices p JOIN users u ON u.id=p.user_id
      ORDER BY p.created_at DESC LIMIT 100
    `).all();
    const recentBitpinDeposits = await env.PASARGUARD_DB.prepare(`
      SELECT d.id,d.asset,d.network,d.txid,d.crypto_amount,d.rate_toman,d.amount_toman,d.status,d.note,
             d.created_at,d.updated_at,d.reviewed_at,d.credited_at,u.telegram_id,u.username,u.first_name,u.last_name
      FROM bitpin_deposits d JOIN users u ON u.id=d.user_id
      ORDER BY d.created_at DESC LIMIT 100
    `).all();
    const stats = await env.PASARGUARD_DB.prepare(`
      SELECT
        (SELECT COUNT(*) FROM users) AS users_count,
        (SELECT COUNT(*) FROM agencies) AS agencies_count,
        (SELECT COUNT(*) FROM agencies WHERE status='active') AS active_agencies,
        ((SELECT COUNT(*) FROM payment_invoices WHERE status='PENDING') + (SELECT COUNT(*) FROM bitpin_deposits WHERE status='pending_review')) AS pending_payments,
        (SELECT COALESCE(SUM(wallet_balance),0) FROM users) AS total_wallet_balance,
        (SELECT COALESCE(SUM(total_charged),0) FROM agencies) AS total_usage_revenue
    `).first();
    const users = await env.PASARGUARD_DB.prepare(`
      SELECT u.id,u.telegram_id,u.username,u.first_name,u.last_name,u.role,u.status,
             u.wallet_balance,u.created_at,u.updated_at,
             (SELECT COUNT(*) FROM agencies a WHERE a.user_id=u.id) AS agencies_count
      FROM users u
      ORDER BY u.updated_at DESC
      LIMIT 500
    `).all();
    const configuration = adminSettings(settings);
    configuration.python_helper_binding_detected = Boolean(env.PY_HELPER && typeof env.PY_HELPER.fetch === "function");
    admin = {
      recentPayments: recentPayments.results || [],
      recentBitpinDeposits: recentBitpinDeposits.results || [],
      users: users.results || [],
      stats,
      configuration
    };
  }

  return json({
    success: true,
    user: {
      id: auth.user.id,
      telegram_id: auth.user.telegram_id,
      username: auth.user.username,
      first_name: auth.user.first_name,
      last_name: auth.user.last_name,
      role: auth.isAdmin ? "admin" : auth.user.role,
      wallet_balance: Number(auth.user.wallet_balance || 0)
    },
    settings: publicSettings(settings),
    central_trial: centralTrial,
    agencies: agencyList,
    payments: paymentList,
    bitpin_deposits: bitpinDeposits.results || [],
    ledger: ledger.results || [],
    dashboard_insight: dashboardInsightResult,
    pasarguard_sync: pasarguardSync,
    admin
  });
}

function centralPaymentUrls(origin, settings = {}) {
  const base = String(origin || "").replace(/\/+$/, "");
  return {
    webhook_url: base + "/payments/blupal/webhook?token=" + encodeURIComponent(String(settings.blupal_webhook_token || "")),
    callback_url: base + "/payments/blupal/return",
    return_url: base + "/payments/blupal/return",
    miniapp_url: canonicalAppUrl(settings.app_url || (base + "/app"), base || "https://localhost")
  };
}

function htmlEscape(value) {
  return String(value ?? "").replace(/[&<>\"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;", "'": "&#39;" })[ch]);
}

function centralBlupalReturnPage(settings, origin, url) {
  const urls = centralPaymentUrls(origin, settings);
  const username = String(settings.central_bot_username || "").replace(/^@/, "").replace(/[^A-Za-z0-9_]/g, "");
  const botLink = username ? ("https://t.me/" + username + "?start=payment_return") : urls.miniapp_url;
  const brand = htmlEscape(settings.brand_name || "پنل نمایندگی پاسارگارد");
  const invoiceId = cleanText(url?.searchParams?.get("invoice_id") || url?.searchParams?.get("invoice") || url?.searchParams?.get("id") || "", 100);
  const invoiceLine = invoiceId ? ('<div class="invoice">شماره فاکتور: <b dir="ltr">' + htmlEscape(invoiceId) + '</b></div>') : "";
  return `<!doctype html><html lang="fa" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#eef4ff"><meta name="robots" content="noindex,nofollow"><title>بازگشت از پرداخت | ${brand}</title><style>*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;padding:20px;background:radial-gradient(circle at 88% 2%,#536dfe24,transparent 38%),radial-gradient(circle at 8% 95%,#22c9971e,transparent 36%),linear-gradient(180deg,#f9fbff,#edf3ff);color:#18233a;font-family:Tahoma,Arial,sans-serif}.card{width:min(100%,500px);border:1px solid #fff;border-radius:30px;padding:30px;background:#fffffff2;box-shadow:0 24px 80px #40508028;text-align:center}.icon{width:78px;height:78px;display:grid;place-items:center;margin:auto;border-radius:25px;background:#35d39a22;font-size:38px}.muted{color:#69758e;line-height:2;font-size:14px}.notice{margin:18px 0;padding:14px;border-radius:16px;background:#f2f6ff;color:#405070;font-size:13px;line-height:1.9}.invoice{margin:12px 0;padding:11px;border-radius:14px;background:#f7f9ff;color:#53607b;font-size:13px}.btn{display:block;text-decoration:none;margin-top:12px;border-radius:17px;padding:15px;background:linear-gradient(135deg,#4e8cff,#765eff);color:#fff;font-weight:900}.secondary{background:#edf2ff;color:#425073}.tiny{margin-top:18px;color:#8a95aa;font-size:11px;line-height:1.8}</style></head><body><main class="card"><div class="icon">↩️</div><h1>بازگشت از درگاه بلوپال</h1><p class="muted">به صفحه بازگشت منتقل شدید. وضعیت نهایی پرداخت فقط از طریق Webhook و استعلام امن بلوپال بررسی می‌شود.</p>${invoiceLine}<div class="notice">برای مشاهده نتیجه پرداخت و موجودی جدید، به ربات مرکزی یا مینی‌اپ ${brand} برگردید.</div><a class="btn" href="${htmlEscape(botLink)}">بازکردن ربات مرکزی</a><a class="btn secondary" href="${htmlEscape(urls.miniapp_url)}#payments">مشاهده وضعیت در مینی‌اپ</a><div class="tiny">بستن این صفحه باعث لغو پرداخت نمی‌شود.</div></main></body></html>`;
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

function blupalBaseUrl(settings) {
  return normalizeBlupalBaseUrl(settings.blupal_base_url);
}

async function blupalRequest(env, method, path, body = undefined) {
  const settings = await getSettings(env);
  const apiKey = String(settings.blupal_api_key || "").trim();
  if (!apiKey) throw new Error("API Key بلوپال در پنل مدیریت تنظیم نشده است");
  const headers = { "X-API-Key": apiKey, "accept": "application/json" };
  if (body !== undefined) headers["content-type"] = "application/json";
  const response = await fetch(blupalBaseUrl(settings) + path, {
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


function normalizeBitpinBaseUrl(value) {
  const raw = String(value || "https://api.bitpin.ir").trim();
  let url;
  try { url = new URL(raw); } catch (_) { throw new Error("آدرس API بیت‌پین معتبر نیست"); }
  if (url.protocol !== "https:" || url.hostname.toLowerCase() !== "api.bitpin.ir") {
    throw new Error("آدرس API بیت‌پین باید https://api.bitpin.ir باشد");
  }
  return "https://api.bitpin.ir";
}

function bitpinWalletRows(payload) {
  if (Array.isArray(payload)) return payload;
  for (const key of ["results", "wallets", "data", "items"]) {
    if (Array.isArray(payload?.[key])) return payload[key];
  }
  if (payload?.data && typeof payload.data === "object") {
    for (const key of ["results", "wallets", "items"]) if (Array.isArray(payload.data[key])) return payload.data[key];
  }
  return [];
}

function bitpinWalletSymbol(row) {
  return cleanText(
    row?.currency?.code || row?.currency?.symbol || row?.currency?.title || row?.symbol || row?.code ||
    row?.currency_symbol || row?.asset || row?.coin || row?.name,
    40
  ).toUpperCase();
}

function bitpinWalletBalance(row) {
  const candidates = [row?.available_balance, row?.available, row?.balance, row?.total_balance, row?.total, row?.amount, row?.credit];
  for (const value of candidates) {
    const number = Number(value);
    if (Number.isFinite(number)) return number;
  }
  return 0;
}

function sanitizeBitpinWallets(payload) {
  return bitpinWalletRows(payload).slice(0, 250).map(row => ({
    asset: bitpinWalletSymbol(row),
    balance: bitpinWalletBalance(row),
    frozen: Number(row?.frozen_balance ?? row?.frozen ?? row?.blocked ?? 0) || 0
  })).filter(row => row.asset);
}

async function bitpinSettingSecret(settings, key, env) {
  const raw = String(settings?.[key] || "").trim();
  if (!raw) return "";
  if (!raw.startsWith("enc:")) return raw;
  try { return await decryptSecret(raw.slice(4), env); }
  catch (_) {
    const error = new Error("رمزگشایی اطلاعات اتصال بیت‌پین ناموفق بود؛ کلید رمزگذاری برنامه را بررسی کنید");
    error.code = "BITPIN_SECRET_DECRYPT_FAILED";
    error.status = 500;
    throw error;
  }
}

async function bitpinApiSession(settings, env) {
  const apiKey = (await bitpinSettingSecret(settings, "bitpin_api_key", env)).trim();
  const apiSecret = (await bitpinSettingSecret(settings, "bitpin_api_secret", env)).trim();
  if (!apiKey || !apiSecret) {
    const error = new Error("API Key و Secret بیت‌پین در تنظیمات ثبت نشده است");
    error.code = "BITPIN_NOT_CONFIGURED";
    error.status = 400;
    throw error;
  }
  const base = normalizeBitpinBaseUrl(settings.bitpin_base_url);
  const response = await fetchWithTimeout(base + "/v1/usr/api/login/", {
    method: "POST",
    headers: { "content-type": "application/json", "accept": "application/json" },
    body: JSON.stringify({ api_key: apiKey, secret_key: apiSecret })
  }, 15000);
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data?.access) {
    const error = new Error(cleanText(data?.detail || data?.message || data?.error || ("Bitpin HTTP " + response.status), 500));
    error.code = "BITPIN_LOGIN_FAILED";
    error.status = response.status || 502;
    throw error;
  }
  return { base, access: String(data.access), refresh: String(data.refresh || "") };
}

async function fetchBitpinWallets(settings, env) {
  const session = await bitpinApiSession(settings, env);
  const response = await fetchWithTimeout(session.base + "/v1/wlt/wallets/", {
    method: "GET",
    headers: { "accept": "application/json", "Authorization": "Bearer " + session.access }
  }, 15000);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(cleanText(data?.detail || data?.message || data?.error || ("Bitpin HTTP " + response.status), 500));
    error.code = "BITPIN_WALLETS_FAILED";
    error.status = response.status || 502;
    throw error;
  }
  return { raw: data, wallets: sanitizeBitpinWallets(data) };
}

async function recordBitpinConnectionState(env, success, errorMessage = "") {
  const values = success
    ? { bitpin_last_verified_at: nowIso(), bitpin_last_error: "" }
    : { bitpin_last_error: cleanText(errorMessage, 800) };
  try { await setSettings(env, values); } catch (_) {}
}

async function testBitpinConnection(request, env) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;
  const settings = await getSettings(env);
  try {
    const snapshot = await fetchBitpinWallets(settings, env);
    await recordBitpinConnectionState(env, true);
    const asset = String(settings.bitpin_asset || "USDT").toUpperCase();
    const selected = snapshot.wallets.find(row => row.asset === asset) || null;
    await audit(env, auth.user.id, "bitpin_connection_tested", { asset, walletFound: Boolean(selected) });
    return json({ success: true, asset, selected_wallet: selected, wallets: snapshot.wallets });
  } catch (error) {
    await recordBitpinConnectionState(env, false, error.message);
    return fail("اتصال به بیت‌پین ناموفق بود: " + error.message, error.status || 502, error.code || "BITPIN_TEST_FAILED");
  }
}

async function createBitpinDepositClaim(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const settings = await getSettings(env);
  if (settings.bitpin_enabled !== "true") return fail("واریز رمزارزی بیت‌پین غیرفعال است", 403, "BITPIN_DISABLED");
  const address = cleanText(settings.bitpin_deposit_address, 300);
  if (!address) return fail("آدرس واریز بیت‌پین در تنظیمات ثبت نشده است", 503, "BITPIN_ADDRESS_MISSING");
  const body = await parseBody(request);
  const cryptoAmount = Number(body.crypto_amount);
  const minCrypto = Math.max(0.00000001, Number(settings.bitpin_min_crypto_amount || 1));
  if (!Number.isFinite(cryptoAmount) || cryptoAmount < minCrypto || cryptoAmount > 1000000000) {
    return fail("مقدار رمزارز معتبر نیست؛ حداقل " + minCrypto + " است", 400, "INVALID_CRYPTO_AMOUNT");
  }
  const txid = cleanText(body.txid, 220).replace(/\s+/g, "").toLowerCase();
  if (!/^[a-z0-9:_-]{16,220}$/i.test(txid)) return fail("شناسه تراکنش (TXID) معتبر نیست", 400, "INVALID_TXID");
  const rate = clampInt(settings.bitpin_toman_per_unit, 1, 1000000000000);
  const amountToman = Math.floor(cryptoAmount * rate);
  if (amountToman < Math.max(10000, clampInt(settings.min_recharge, 0))) {
    return fail("ارزش واریز از حداقل شارژ کمتر است", 400, "AMOUNT_TOO_LOW");
  }
  let snapshot;
  try {
    snapshot = await fetchBitpinWallets(settings, env);
    await recordBitpinConnectionState(env, true);
  } catch (error) {
    await recordBitpinConnectionState(env, false, error.message);
    return fail("استعلام حساب بیت‌پین ناموفق بود: " + error.message, error.status || 502, error.code || "BITPIN_SYNC_FAILED");
  }
  const asset = cleanText(settings.bitpin_asset || "USDT", 30).toUpperCase();
  const network = cleanText(settings.bitpin_network || "TRC20", 40).toUpperCase();
  const selectedWallet = snapshot.wallets.find(row => row.asset === asset) || null;
  const claimId = id("bpd");
  const ts = nowIso();
  try {
    await env.PASARGUARD_DB.prepare(`
      INSERT INTO bitpin_deposits(
        id,user_id,asset,network,txid,crypto_amount,rate_toman,amount_toman,destination_address,status,
        wallet_balance_snapshot,provider_payload,note,created_at,updated_at
      ) VALUES(?,?,?,?,?,?,?,?,?,'pending_review',?,?,?,?,?)
    `).bind(
      claimId, auth.user.id, asset, network, txid, cryptoAmount, rate, amountToman, address,
      selectedWallet ? String(selectedWallet.balance) : "", JSON.stringify({ wallets: snapshot.wallets }), cleanText(body.note, 300), ts, ts
    ).run();
  } catch (error) {
    if (/unique|constraint/i.test(String(error?.message || error))) return fail("این TXID قبلاً ثبت شده است", 409, "DUPLICATE_TXID");
    return fail("ثبت درخواست واریز ناموفق بود", 500, "BITPIN_CLAIM_STORAGE_FAILED");
  }
  await audit(env, auth.user.id, "bitpin_deposit_claim_created", { claimId, asset, network, txid, cryptoAmount, rate, amountToman });
  const adminIds = parseAdminTelegramIds(settings.admin_ids || "");
  for (const adminId of adminIds.slice(0, 20)) {
    try {
      await notifyTelegramUser(env, adminId, "🪙 درخواست واریز بیت‌پین\n" +
        "کاربر: " + String(auth.user.telegram_id) + "\n" +
        "مقدار: " + cryptoAmount + " " + asset + "\n" +
        "ارزش: " + amountToman.toLocaleString("fa-IR") + " تومان\n" +
        "شبکه: " + network + "\nTXID: " + txid);
    } catch (_) {}
  }
  return json({ success: true, deposit: { id: claimId, asset, network, txid, crypto_amount: cryptoAmount, rate_toman: rate, amount_toman: amountToman, status: "pending_review", created_at: ts } });
}

async function reviewBitpinDeposit(request, env, claimId, decision, providedBody = null) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;
  const body = providedBody && typeof providedBody === "object" ? providedBody : await parseBody(request);
  const claim = await env.PASARGUARD_DB.prepare(`
    SELECT d.*,u.telegram_id,u.username,u.first_name,u.last_name,u.wallet_balance
    FROM bitpin_deposits d JOIN users u ON u.id=d.user_id WHERE d.id=?
  `).bind(claimId).first();
  if (!claim) return fail("درخواست بیت‌پین پیدا نشد", 404, "BITPIN_CLAIM_NOT_FOUND");
  if (decision === "reject") {
    if (claim.credited_at) return fail("درخواست قبلاً شارژ شده و قابل رد نیست", 409, "ALREADY_CREDITED");
    const ts = nowIso();
    const result = await env.PASARGUARD_DB.prepare(`
      UPDATE bitpin_deposits SET status='rejected',note=?,reviewed_at=?,reviewed_by=?,updated_at=?
      WHERE id=? AND status='pending_review' AND credited_at IS NULL
    `).bind(cleanText(body.note, 400), ts, auth.user.id, ts, claim.id).run();
    if (!Number(result?.meta?.changes || 0)) return fail("این درخواست قبلاً بررسی شده است", 409, "ALREADY_REVIEWED");
    await audit(env, auth.user.id, "bitpin_deposit_rejected", { claimId: claim.id, txid: claim.txid, note: cleanText(body.note, 400) });
    await notifyTelegramUser(env, claim.telegram_id, "❌ درخواست واریز رمزارزی شما رد شد.\nTXID: " + claim.txid + (body.note ? "\nتوضیح: " + cleanText(body.note, 300) : ""));
    return json({ success: true, status: "rejected" });
  }

  if (claim.credited_at) return json({ success: true, status: "approved", already_credited: true });
  if (claim.status !== "pending_review") return fail("فقط درخواست در انتظار بررسی قابل تأیید است", 409, "INVALID_CLAIM_STATUS");
  const settings = await getSettings(env);
  let snapshot;
  try {
    snapshot = await fetchBitpinWallets(settings, env);
    await recordBitpinConnectionState(env, true);
  } catch (error) {
    await recordBitpinConnectionState(env, false, error.message);
    return fail("پیش از تأیید، اتصال بیت‌پین ناموفق بود: " + error.message, error.status || 502, error.code || "BITPIN_SYNC_FAILED");
  }
  const wallet = snapshot.wallets.find(row => row.asset === String(claim.asset || "").toUpperCase()) || null;
  const ts = nowIso();
  const ledgerId = "led_bitpin_" + claim.id;
  const description = "شارژ بیت‌پین " + claim.crypto_amount + " " + claim.asset + " · TXID " + claim.txid;
  const statements = [
    env.PASARGUARD_DB.prepare(`
      UPDATE bitpin_deposits
      SET status='approved',credited_at=?,reviewed_at=?,reviewed_by=?,updated_at=?,note=?,provider_payload=?,wallet_balance_snapshot=?
      WHERE id=? AND status='pending_review' AND credited_at IS NULL
    `).bind(ts, ts, auth.user.id, ts, cleanText(body.note, 400), JSON.stringify({ wallets: snapshot.wallets }), wallet ? String(wallet.balance) : "", claim.id),
    env.PASARGUARD_DB.prepare(`
      UPDATE users SET wallet_balance=wallet_balance+?,updated_at=?
      WHERE id=?
        AND EXISTS(SELECT 1 FROM bitpin_deposits WHERE id=? AND status='approved' AND credited_at=?)
        AND NOT EXISTS(SELECT 1 FROM wallet_ledger WHERE id=?)
    `).bind(Number(claim.amount_toman), ts, claim.user_id, claim.id, ts, ledgerId),
    env.PASARGUARD_DB.prepare(`
      INSERT OR IGNORE INTO wallet_ledger(id,user_id,type,amount,balance_after,ref_type,ref_id,description,created_at)
      SELECT ?,id,'recharge',?,wallet_balance,'bitpin',?,?,?
      FROM users WHERE id=? AND EXISTS(SELECT 1 FROM bitpin_deposits WHERE id=? AND credited_at=?)
    `).bind(ledgerId, Number(claim.amount_toman), claim.id, description, ts, claim.user_id, claim.id, ts)
  ];
  const results = await env.PASARGUARD_DB.batch(statements);
  if (!Number(results?.[0]?.meta?.changes || 0)) return fail("تأیید انجام نشد یا درخواست هم‌زمان بررسی شده است", 409, "BITPIN_APPROVAL_CONFLICT");
  const updatedUser = await env.PASARGUARD_DB.prepare("SELECT wallet_balance FROM users WHERE id=?").bind(claim.user_id).first();
  await audit(env, auth.user.id, "bitpin_deposit_approved", { claimId: claim.id, txid: claim.txid, cryptoAmount: claim.crypto_amount, amountToman: claim.amount_toman, walletBalance: wallet?.balance ?? null });
  await notifyTelegramUser(env, claim.telegram_id, "✅ واریز رمزارزی شما تأیید شد.\n" +
    "مقدار: " + claim.crypto_amount + " " + claim.asset + "\n" +
    "شارژ: " + Number(claim.amount_toman).toLocaleString("fa-IR") + " تومان\n" +
    "موجودی جدید: " + Number(updatedUser?.wallet_balance || 0).toLocaleString("fa-IR") + " تومان");
  return json({ success: true, status: "approved", amount_toman: Number(claim.amount_toman), wallet_balance: Number(updatedUser?.wallet_balance || 0), bitpin_wallet: wallet });
}


async function createBitpinDepositClaimForTelegram(env, user, settings, cryptoAmountRaw, txidRaw, note = "") {
  if (settings.bitpin_enabled !== "true") throw new Error("واریز رمزارزی بیت‌پین غیرفعال است");
  const address = cleanText(settings.bitpin_deposit_address, 300).replace(/\s+/g, "");
  if (!address) throw new Error("آدرس واریز بیت‌پین ثبت نشده است");
  const cryptoAmount = Number(cryptoAmountRaw);
  const minCrypto = Math.max(0.00000001, Number(settings.bitpin_min_crypto_amount || 1));
  if (!Number.isFinite(cryptoAmount) || cryptoAmount < minCrypto || cryptoAmount > 1000000000) throw new Error("مقدار رمزارز معتبر نیست؛ حداقل " + minCrypto + " است");
  const txid = cleanText(txidRaw, 220).replace(/\s+/g, "").toLowerCase();
  if (!/^[a-z0-9:_-]{16,220}$/i.test(txid)) throw new Error("شناسه تراکنش (TXID) معتبر نیست");
  const rate = clampInt(settings.bitpin_toman_per_unit, 1, 1000000000000);
  const amountToman = Math.floor(cryptoAmount * rate);
  if (amountToman < Math.max(10000, clampInt(settings.min_recharge, 0))) throw new Error("ارزش واریز از حداقل شارژ کمتر است");
  let snapshot;
  try { snapshot = await fetchBitpinWallets(settings, env); await recordBitpinConnectionState(env, true); }
  catch (error) { await recordBitpinConnectionState(env, false, error.message); throw new Error("استعلام حساب بیت‌پین ناموفق بود: " + error.message); }
  const asset = cleanText(settings.bitpin_asset || "USDT", 30).toUpperCase();
  const network = cleanText(settings.bitpin_network || "TRC20", 40).toUpperCase();
  const selectedWallet = snapshot.wallets.find(row => row.asset === asset) || null;
  const claimId = id("bpd");
  const ts = nowIso();
  try {
    await env.PASARGUARD_DB.prepare(`INSERT INTO bitpin_deposits(
      id,user_id,asset,network,txid,crypto_amount,rate_toman,amount_toman,destination_address,status,
      wallet_balance_snapshot,provider_payload,note,created_at,updated_at
    ) VALUES(?,?,?,?,?,?,?,?,?,'pending_review',?,?,?,?,?)`).bind(
      claimId,user.id,asset,network,txid,cryptoAmount,rate,amountToman,address,
      selectedWallet ? String(selectedWallet.balance) : "",JSON.stringify({wallets:snapshot.wallets}),cleanText(note,300),ts,ts
    ).run();
  } catch (error) {
    if (/unique|constraint/i.test(String(error?.message || error))) throw new Error("این TXID قبلاً ثبت شده است");
    throw error;
  }
  await audit(env,user.id,"bitpin_deposit_claim_created_bot",{claimId,asset,network,txid,cryptoAmount,rate,amountToman});
  return {id:claimId,asset,network,txid,crypto_amount:cryptoAmount,rate_toman:rate,amount_toman:amountToman,status:"pending_review",created_at:ts};
}

async function reviewBitpinDepositFromTelegram(env, adminUser, claimId, decision) {
  const claim = await env.PASARGUARD_DB.prepare(`SELECT d.*,u.telegram_id,u.username,u.first_name,u.last_name,u.wallet_balance
    FROM bitpin_deposits d JOIN users u ON u.id=d.user_id WHERE d.id=?`).bind(claimId).first();
  if (!claim) throw new Error("درخواست بیت‌پین پیدا نشد");
  if (decision === "reject") {
    if (claim.credited_at) throw new Error("این درخواست قبلاً شارژ شده است");
    const ts=nowIso();
    const result=await env.PASARGUARD_DB.prepare(`UPDATE bitpin_deposits SET status='rejected',reviewed_at=?,reviewed_by=?,updated_at=? WHERE id=? AND status='pending_review' AND credited_at IS NULL`).bind(ts,adminUser.id,ts,claim.id).run();
    if(!Number(result?.meta?.changes||0)) throw new Error("این درخواست قبلاً بررسی شده است");
    await audit(env,adminUser.id,"bitpin_deposit_rejected_bot",{claimId:claim.id,txid:claim.txid});
    await notifyTelegramUser(env,claim.telegram_id,"❌ درخواست واریز رمزارزی شما رد شد.\nTXID: "+claim.txid);
    return {status:"rejected"};
  }
  if (claim.credited_at) return {status:"approved",already_credited:true};
  if (claim.status !== "pending_review") throw new Error("فقط درخواست در انتظار بررسی قابل تأیید است");
  const settings=await getSettings(env);
  const snapshot=await fetchBitpinWallets(settings,env);
  await recordBitpinConnectionState(env,true);
  const wallet=snapshot.wallets.find(row=>row.asset===String(claim.asset||"").toUpperCase())||null;
  const ts=nowIso(),ledgerId="led_bitpin_"+claim.id;
  const description="شارژ بیت‌پین "+claim.crypto_amount+" "+claim.asset+" · TXID "+claim.txid;
  const results=await env.PASARGUARD_DB.batch([
    env.PASARGUARD_DB.prepare(`UPDATE bitpin_deposits SET status='approved',credited_at=?,reviewed_at=?,reviewed_by=?,updated_at=?,provider_payload=?,wallet_balance_snapshot=? WHERE id=? AND status='pending_review' AND credited_at IS NULL`).bind(ts,ts,adminUser.id,ts,JSON.stringify({wallets:snapshot.wallets}),wallet?String(wallet.balance):"",claim.id),
    env.PASARGUARD_DB.prepare(`UPDATE users SET wallet_balance=wallet_balance+?,updated_at=? WHERE id=? AND EXISTS(SELECT 1 FROM bitpin_deposits WHERE id=? AND status='approved' AND credited_at=?) AND NOT EXISTS(SELECT 1 FROM wallet_ledger WHERE id=?)`).bind(Number(claim.amount_toman),ts,claim.user_id,claim.id,ts,ledgerId),
    env.PASARGUARD_DB.prepare(`INSERT OR IGNORE INTO wallet_ledger(id,user_id,type,amount,balance_after,ref_type,ref_id,description,created_at) SELECT ?,id,'recharge',?,wallet_balance,'bitpin',?,?,? FROM users WHERE id=? AND EXISTS(SELECT 1 FROM bitpin_deposits WHERE id=? AND credited_at=?)`).bind(ledgerId,Number(claim.amount_toman),claim.id,description,ts,claim.user_id,claim.id,ts)
  ]);
  if(!Number(results?.[0]?.meta?.changes||0)) throw new Error("تأیید انجام نشد یا هم‌زمان بررسی شده است");
  const updated=await env.PASARGUARD_DB.prepare("SELECT wallet_balance FROM users WHERE id=?").bind(claim.user_id).first();
  await reconcileUserAgencies(env,claim.user_id);
  await audit(env,adminUser.id,"bitpin_deposit_approved_bot",{claimId:claim.id,txid:claim.txid,amountToman:claim.amount_toman});
  await notifyTelegramUser(env,claim.telegram_id,"✅ واریز رمزارزی شما تأیید شد.\nمقدار: "+claim.crypto_amount+" "+claim.asset+"\nشارژ: "+Number(claim.amount_toman).toLocaleString("fa-IR")+" تومان\nموجودی جدید: "+Number(updated?.wallet_balance||0).toLocaleString("fa-IR")+" تومان");
  return {status:"approved",wallet_balance:Number(updated?.wallet_balance||0)};
}

function normalizePaymentStatus(value) {
  const status = String(value || "PENDING").toUpperCase();
  return ["PENDING", "PAID", "EXPIRED", "CANCELED"].includes(status) ? status : "PENDING";
}

async function createPaymentInvoice(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const body = await parseBody(request);
  const settings = await getSettings(env);
  const amountToman = clampInt(body.amount, 0, 1000000000000);
  const minRecharge = Math.max(10000, clampInt(settings.min_recharge, 0));
  if (amountToman < minRecharge) {
    return fail("حداقل مبلغ شارژ " + minRecharge.toLocaleString("fa-IR") + " تومان است", 400, "AMOUNT_TOO_LOW");
  }
  const amountRial = amountToman * 10;
  const requestBody = { amount: amountRial };
  if (settings.blupal_card_number) requestBody.card_number = String(settings.blupal_card_number).replace(/\D/g, "");

  let provider;
  try {
    provider = await blupalRequest(env, "POST", "/v1/invoices/create", requestBody);
  } catch (error) {
    return fail("ساخت فاکتور بلوپال ناموفق بود: " + error.message, error.status || 502, error.code || "BLUPAL_CREATE_FAILED");
  }

  const providerInvoiceId = cleanText(provider.invoice_id, 100);
  const finalAmountRial = clampInt(provider.final_amount, 0, Number.MAX_SAFE_INTEGER);
  const paymentLink = cleanText(provider.payment_link, 1000);
  if (!providerInvoiceId || !finalAmountRial || !paymentLink) {
    return fail("پاسخ بلوپال ناقص است", 502, "INVALID_PROVIDER_RESPONSE");
  }
  if (clampInt(provider.amount, 0) !== amountRial) {
    return fail("مبلغ برگشتی بلوپال با درخواست تطبیق ندارد", 502, "AMOUNT_MISMATCH");
  }

  const localId = id("pay");
  const ts = nowIso();
  try {
    await env.PASARGUARD_DB.prepare(`
      INSERT INTO payment_invoices(
        id,user_id,provider,provider_invoice_id,amount_rial,amount_toman,final_amount_rial,
        status,payment_link,card_number,provider_payload,created_at,updated_at
      ) VALUES(?,?,'blupal',?,?,?,?,?,?,?,?,?,?)
    `).bind(
      localId, auth.user.id, providerInvoiceId, amountRial, amountToman, finalAmountRial,
      normalizePaymentStatus(provider.status), paymentLink, cleanText(provider.card_number, 100),
      JSON.stringify(provider), ts, ts
    ).run();
  } catch (error) {
    return fail("ثبت فاکتور در دیتابیس ناموفق بود", 500, "PAYMENT_STORAGE_FAILED");
  }

  await audit(env, auth.user.id, "blupal_invoice_created", {
    paymentId: localId, providerInvoiceId, amountToman, amountRial, finalAmountRial
  });
  return json({
    success: true,
    payment: {
      id: localId,
      invoice_id: providerInvoiceId,
      amount: amountToman,
      amount_rial: amountRial,
      final_amount_rial: finalAmountRial,
      status: normalizePaymentStatus(provider.status),
      payment_link: paymentLink,
      card_number: cleanText(provider.card_number, 100)
    }
  }, 201);
}

async function applyVerifiedPayment(env, payment, providerData) {
  const providerInvoiceId = String(providerData.invoice_id || "");
  const status = normalizePaymentStatus(providerData.status);
  const amountRial = clampInt(providerData.amount, 0, Number.MAX_SAFE_INTEGER);
  const finalAmountRial = clampInt(providerData.final_amount, 0, Number.MAX_SAFE_INTEGER);
  if (providerInvoiceId !== String(payment.provider_invoice_id)) throw new Error("شناسه فاکتور تطبیق ندارد");
  if (amountRial !== Number(payment.amount_rial) || finalAmountRial !== Number(payment.final_amount_rial)) {
    throw new Error("مبلغ فاکتور بلوپال با رکورد داخلی تطبیق ندارد");
  }

  const ts = nowIso();
  if (status !== "PAID") {
    await env.PASARGUARD_DB.prepare(`
      UPDATE payment_invoices SET status=?, provider_payload=?, updated_at=?
      WHERE id=? AND credited_at IS NULL
    `).bind(status, JSON.stringify(providerData), ts, payment.id).run();
    return { status, credited: false };
  }

  const settings = await getSettings(env);
  const bonusPercent = Math.max(0, Math.min(100, Number(settings.central_recharge_bonus_percent || 0)));
  const baseAmount = Number(payment.amount_toman || 0);
  const bonusAmount = Math.floor(baseAmount * bonusPercent / 100);
  const creditedAmount = baseAmount + bonusAmount;
  const creditToken = ts;
  const ledgerId = "led_blupal_" + String(payment.id).replace(/[^a-zA-Z0-9_]/g, "");
  const paidAt = cleanText(providerData.paid_at, 100) || ts;
  const description = bonusAmount > 0 ? ("شارژ بلوپال + بونس " + bonusPercent + "٪") : "شارژ خودکار از طریق بلوپال";
  const results = await env.PASARGUARD_DB.batch([
    env.PASARGUARD_DB.prepare(`
      UPDATE payment_invoices
      SET status='PAID',paid_at=?,credited_at=?,provider_payload=?,updated_at=?
      WHERE id=? AND credited_at IS NULL AND amount_rial=? AND final_amount_rial=?
    `).bind(paidAt, creditToken, JSON.stringify(providerData), ts, payment.id, payment.amount_rial, payment.final_amount_rial),
    env.PASARGUARD_DB.prepare(`
      UPDATE users SET wallet_balance=wallet_balance+?,updated_at=?
      WHERE id=? AND EXISTS(SELECT 1 FROM payment_invoices WHERE id=? AND credited_at=?)
    `).bind(creditedAmount, ts, payment.user_id, payment.id, creditToken),
    env.PASARGUARD_DB.prepare(`
      INSERT OR IGNORE INTO wallet_ledger(id,user_id,type,amount,balance_after,ref_type,ref_id,description,created_at)
      SELECT ?,id,'recharge',?,wallet_balance,'blupal',?,?,?
      FROM users WHERE id=? AND EXISTS(SELECT 1 FROM payment_invoices WHERE id=? AND credited_at=?)
    `).bind(ledgerId, creditedAmount, payment.id, description, ts, payment.user_id, payment.id, creditToken)
  ]);
  const credited = Number(results?.[0]?.meta?.changes || 0) > 0;
  if (credited) {
    await reconcileUserAgencies(env, payment.user_id);
    const target = await env.PASARGUARD_DB.prepare(
      "SELECT telegram_id,wallet_balance,first_name,username FROM users WHERE id=?"
    ).bind(payment.user_id).first();
    if (target) {
      await notifyTelegramUser(env, target.telegram_id,
        "✅ پرداخت بلوپال تأیید شد.\nمبلغ پرداخت: " + baseAmount.toLocaleString("fa-IR") + " تومان" +
        (bonusAmount > 0 ? "\n🎁 بونس شارژ: " + bonusAmount.toLocaleString("fa-IR") + " تومان (" + bonusPercent + "٪)" : "") +
        "\nمبلغ افزوده‌شده: " + creditedAmount.toLocaleString("fa-IR") + " تومان" +
        "\nموجودی: " + Number(target.wallet_balance).toLocaleString("fa-IR") + " تومان"
      );
      await notifyAdmins(env,
        "✅ <b>پرداخت موفق بلوپال</b>\nکاربر: " + (target.first_name || target.username || target.telegram_id) +
        "\nمبلغ پرداخت: " + baseAmount.toLocaleString("fa-IR") + " تومان" +
        (bonusAmount > 0 ? "\nبونس: " + bonusAmount.toLocaleString("fa-IR") + " تومان" : "") +
        "\nفاکتور: <code>" + String(payment.provider_invoice_id).replace(/[<>&]/g, "") + "</code>"
      );
    }
    await audit(env, payment.user_id, "blupal_payment_credited", {
      paymentId: payment.id, providerInvoiceId: payment.provider_invoice_id, amount: baseAmount, bonusAmount, creditedAmount
    });
  }
  return { status: "PAID", credited, bonusAmount, creditedAmount };
}

async function reconcilePaymentInvoice(env, payment) {
  const providerData = await blupalRequest(
    env, "GET", "/v1/invoices/" + encodeURIComponent(payment.provider_invoice_id)
  );
  await applyVerifiedPayment(env, payment, providerData);
  return await env.PASARGUARD_DB.prepare(`
    SELECT id,provider_invoice_id,amount_toman,amount_rial,final_amount_rial,status,payment_link,
           card_number,paid_at,credited_at,created_at,updated_at
    FROM payment_invoices WHERE id=?
  `).bind(payment.id).first();
}

async function getPaymentStatus(request, env, paymentId) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const payment = await env.PASARGUARD_DB.prepare(
    "SELECT * FROM payment_invoices WHERE id=? AND user_id=?"
  ).bind(paymentId, auth.user.id).first();
  if (!payment) return fail("فاکتور پیدا نشد", 404, "NOT_FOUND");
  if (payment.credited_at) {
    const user = await env.PASARGUARD_DB.prepare("SELECT wallet_balance FROM users WHERE id=?").bind(auth.user.id).first();
    return json({ success: true, payment, wallet_balance: Number(user?.wallet_balance || 0) });
  }
  try {
    const updated = await reconcilePaymentInvoice(env, payment);
    const user = await env.PASARGUARD_DB.prepare("SELECT wallet_balance FROM users WHERE id=?").bind(auth.user.id).first();
    return json({ success: true, payment: updated, wallet_balance: Number(user?.wallet_balance || 0) });
  } catch (error) {
    return fail("استعلام بلوپال ناموفق بود: " + error.message, error.status || 502, "BLUPAL_CHECK_FAILED");
  }
}

async function pollPendingPayments(env, limit = 30) {
  const rows = await env.PASARGUARD_DB.prepare(`
    SELECT * FROM payment_invoices
    WHERE status='PENDING' AND credited_at IS NULL
    ORDER BY updated_at ASC LIMIT ?
  `).bind(limit).all();
  let checked = 0, credited = 0;
  const errors = [];
  for (const payment of rows.results || []) {
    try {
      const before = payment.credited_at;
      const updated = await reconcilePaymentInvoice(env, payment);
      checked++;
      if (!before && updated?.credited_at) credited++;
    } catch (error) {
      errors.push({ paymentId: payment.id, error: error.message });
      await audit(env, null, "blupal_poll_failed", { paymentId: payment.id, message: error.message });
    }
  }
  return { checked, credited, errors };
}

async function cleanupStalePendingInvoices(env, options = {}) {
  const settings = options.settings || await getSettings(env);
  if (settings.auto_delete_pending_invoices !== "true") {
    return { enabled: false, checked: 0, deleted: 0, credited: 0, skipped: 0, errors: [] };
  }
  const ttlHours = Math.max(1, Math.min(720, Number(settings.pending_invoice_ttl_hours || 24)));
  const limit = Math.max(1, Math.min(500, Number(options.limit || 200)));
  const cutoff = new Date(Date.now() - ttlHours * 60 * 60 * 1000).toISOString();
  const rows = await env.PASARGUARD_DB.prepare(`
    SELECT * FROM payment_invoices
    WHERE status='PENDING' AND credited_at IS NULL AND created_at<=?
    ORDER BY created_at ASC LIMIT ?
  `).bind(cutoff, limit).all();

  let checked = 0, deleted = 0, credited = 0, skipped = 0;
  const errors = [];
  for (const payment of rows.results || []) {
    try {
      if (!settings.blupal_api_key) {
        skipped++;
        errors.push({ paymentId: payment.id, error: "BluePal API key is not configured" });
        continue;
      }
      const updated = await reconcilePaymentInvoice(env, payment);
      checked++;
      if (updated?.credited_at || normalizePaymentStatus(updated?.status) === "PAID") {
        credited++;
        continue;
      }
      const verifiedStatus = normalizePaymentStatus(updated?.status);
      if (!["PENDING", "EXPIRED", "CANCELED"].includes(verifiedStatus)) {
        skipped++;
        continue;
      }
      const result = await env.PASARGUARD_DB.prepare(`
        DELETE FROM payment_invoices
        WHERE id=? AND status IN ('PENDING','EXPIRED','CANCELED') AND credited_at IS NULL AND created_at<=?
      `).bind(payment.id, cutoff).run();
      const changes = Number(result.meta?.changes || 0);
      if (changes > 0) {
        deleted += changes;
        await audit(env, payment.user_id, "stale_pending_invoice_deleted", {
          paymentId: payment.id,
          providerInvoiceId: payment.provider_invoice_id,
          ageHours: ttlHours,
          amountToman: Number(payment.amount_toman || 0)
        });
      }
    } catch (error) {
      errors.push({ paymentId: payment.id, error: error.message });
      await audit(env, null, "pending_invoice_cleanup_failed", {
        paymentId: payment.id,
        message: error.message
      });
    }
  }
  return { enabled: true, ttl_hours: ttlHours, cutoff, checked, deleted, credited, skipped, errors };
}

async function processBlupalWebhook(env, payload) {
  const providerInvoiceId = cleanText(payload.invoice_id, 100);
  const payment = await env.PASARGUARD_DB.prepare(
    "SELECT * FROM payment_invoices WHERE provider='blupal' AND provider_invoice_id=?"
  ).bind(providerInvoiceId).first();
  if (!payment) {
    await audit(env, null, "blupal_webhook_unknown_invoice", { providerInvoiceId, payload });
    return;
  }
  try {
    await reconcilePaymentInvoice(env, payment);
    await audit(env, payment.user_id, "blupal_webhook_processed", { paymentId: payment.id, providerInvoiceId });
  } catch (error) {
    await audit(env, payment.user_id, "blupal_webhook_failed", { paymentId: payment.id, message: error.message });
  }
}

function constantTimeTextEqual(a, b) {
  const left = new TextEncoder().encode(String(a || ""));
  const right = new TextEncoder().encode(String(b || ""));
  const length = Math.max(left.length, right.length);
  let diff = left.length ^ right.length;
  for (let i = 0; i < length; i++) diff |= (left[i] || 0) ^ (right[i] || 0);
  return diff === 0;
}

async function blupalWebhook(request, env, ctx) {
  const settings = await getSettings(env);
  const url = new URL(request.url);
  const supplied = url.searchParams.get("token") || request.headers.get("x-webhook-token") || "";
  if (!settings.blupal_webhook_token || !constantTimeTextEqual(supplied, settings.blupal_webhook_token)) {
    return fail("Forbidden", 403, "FORBIDDEN");
  }
  const payload = await parseBody(request);
  if (!payload || payload.success !== true || payload.event !== "payment.completed" ||
      normalizePaymentStatus(payload.status) !== "PAID" || !payload.invoice_id) {
    return fail("Invalid webhook payload", 400, "INVALID_WEBHOOK");
  }
  ctx.waitUntil(processBlupalWebhook(env, payload));
  return json({ received: true });
}

async function adminPaymentSync(request, env) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;
  const result = await pollPendingPayments(env, 100);
  await audit(env, auth.user.id, "manual_blupal_sync", result);
  return json({ success: true, result });
}

async function adminPaymentCleanup(request, env) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;
  const settings = await getSettings(env);
  const result = await cleanupStalePendingInvoices(env, { settings, limit: 500 });
  await audit(env, auth.user.id, "manual_pending_invoice_cleanup", result);
  return json({ success: true, result });
}

async function getBlupalWebhookUrl(request, env) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;
  const settings = await getSettings(env);
  let token = String(settings.blupal_webhook_token || "");
  if (!token) {
    token = randomHex(32);
    await setSettings(env, { blupal_webhook_token: token });
  }
  const origin = new URL(request.url).origin;
  const urls = centralPaymentUrls(origin, { ...settings, blupal_webhook_token: token });
  return json({ success: true, ...urls });
}

async function createAgency(request, env) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const body = await parseBody(request);
  const settings = await getSettings(env);
  if (!agencySalesOpen(settings)) {
    return fail("فروش و ساخت پنل نمایندگی موقتاً توسط مدیریت مرکزی متوقف شده است", 403, "AGENCY_SALES_CLOSED");
  }
  // setup_fee is retained as the persisted setting key for backward compatibility,
  // but its business meaning is "minimum wallet balance required to create a panel".
  // It must never be deducted when the panel is created.
  const requiredBalance = clampInt(settings.setup_fee, 0, 1000000000000);
  const freshUser = await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE id=?").bind(auth.user.id).first();
  const currentBalance = Number(freshUser?.wallet_balance || 0);
  if (currentBalance < requiredBalance) {
    return fail(
      "برای ساخت پنل باید حداقل " + requiredBalance.toLocaleString("fa-IR") + " تومان موجودی داشته باشید؛ این مبلغ پس از ساخت کسر نمی‌شود",
      402,
      "INSUFFICIENT_BALANCE"
    );
  }

  const title = cleanText(body.title, 80) || "نمایندگی من";
  const username = normalizeUsername(body.username || (auth.user.username ? auth.user.username + "_panel" : ""));
  const password = cleanText(body.password, 80) || randomPassword();
  const passwordErrors = validatePasarguardPassword(password, username);
  if (passwordErrors.length) return fail(passwordErrors.join("؛ "));

  // A zero-balance panel may only exist when the configured minimum is zero;
  // it remains suspended until the wallet is charged. No creation amount is deducted.
  const initiallySuspended = currentBalance <= 0;

  let remote;
  try {
    remote = await pasargadCreateManager(env, {
      title,
      username,
      password,
      telegramId: auth.user.telegram_id,
      telegramUsername: auth.user.username,
      enabled: !initiallySuspended
    });
  } catch (error) {
    return fail("ساخت مدیر در پاسارگارد ناموفق بود: " + error.message, 502, "PASARGAD_CREATE_FAILED");
  }

  const latestAgencySalesSettings = await getSettings(env);
  if (!agencySalesOpen(latestAgencySalesSettings)) {
    try { await pasargadDeleteManager(env, remote.remoteId); } catch (_) {}
    return fail("فروش پنل در حین ساخت توسط مدیریت مرکزی متوقف شد؛ ساخت لغو شد", 403, "AGENCY_SALES_CLOSED");
  }

  const agencyId = id("agn");
  const encryptedPassword = await encryptSecret(password, env);
  const ts = nowIso();
  const insertResult = await env.PASARGUARD_DB.prepare(`
    INSERT INTO agencies(id, user_id, title, remote_manager_id, panel_username, panel_password_enc, status, provisioning_source, runtime_version, update_applied_at, created_at, updated_at)
    SELECT ?, ?, ?, ?, ?, ?, ?, 'central', ?, ?, ?, ?
    WHERE EXISTS(SELECT 1 FROM users WHERE id=? AND wallet_balance>=?)
  `).bind(
    agencyId,
    auth.user.id,
    title,
    remote.remoteId,
    username,
    encryptedPassword,
    initiallySuspended ? "suspended_balance" : "active",
    APP_VERSION,
    ts,
    ts,
    ts,
    auth.user.id,
    requiredBalance
  ).run();

  if (!Number(insertResult?.meta?.changes || 0)) {
    try { await pasargadDeleteManager(env, remote.remoteId); } catch (_) {}
    return fail("موجودی حساب هنگام ثبت پنل تغییر کرده است؛ دوباره تلاش کنید", 409, "BALANCE_CHANGED");
  }

  const balanceState = await reconcileUserAgencies(env, auth.user.id);
  const createdAgency = await env.PASARGUARD_DB.prepare(
    "SELECT status FROM agencies WHERE id=?"
  ).bind(agencyId).first();
  const finalStatus = createdAgency?.status || (balanceState.shouldSuspend ? "suspended_balance" : "active");

  if (finalStatus === "suspended_balance") {
    await notifyTelegramUser(
      env,
      auth.user.telegram_id,
      "⚠️ پنل نمایندگی ساخته شد، اما چون موجودی حساب صفر است تا زمان شارژ غیرفعال می‌ماند."
    );
  }

  await audit(env, auth.user.id, "agency_created", {
    agencyId,
    remoteId: remote.remoteId,
    username,
    minimumRequiredBalance: requiredBalance,
    balanceRetained: currentBalance,
    balanceAfter: balanceState.balance,
    creationCharge: 0,
    status: finalStatus
  });
  const updateChannel = await sendUpdateChannelAfterPanelDelivery(env, auth.user.telegram_id, settings);
  return json({
    success: true,
    agency: {
      id: agencyId,
      title,
      username,
      password,
      panel_url: pasarguardDashboardUrl(settings),
      status: finalStatus
    },
    minimum_required_balance: requiredBalance,
    retained_wallet_balance: Number(balanceState.balance),
    creation_charge: 0,
    update_channel_url: updateChannel.url || "",
    message: finalStatus === "suspended_balance"
      ? "پنل ساخته شد؛ مبلغ ساخت از کیف پول کسر نشد، اما به دلیل صفر بودن موجودی تا زمان شارژ غیرفعال است"
      : "پنل نمایندگی ساخته شد؛ موجودی کیف پول بدون کسر باقی ماند و فقط مصرف واقعی پنل از آن کم می‌شود"
  }, 201);
}

async function updateOwnedAgency(env, user, agencyId, input = {}) {
  const agency = await env.PASARGUARD_DB.prepare("SELECT * FROM agencies WHERE id=? AND user_id=?")
    .bind(agencyId, user.id).first();
  if (!agency) throw new Error("پنل پیدا نشد");

  const hasTitle = Object.prototype.hasOwnProperty.call(input, "title");
  const hasSupport = Object.prototype.hasOwnProperty.call(input, "support_url") || Object.prototype.hasOwnProperty.call(input, "support_username");
  const hasPassword = Object.prototype.hasOwnProperty.call(input, "password") && String(input.password || "").trim() !== "";
  const payload = {};
  let nextTitle = agency.title;
  let nextPasswordEnc = agency.panel_password_enc;

  if (hasTitle) {
    nextTitle = cleanText(input.title, 80);
    if (nextTitle.length < 2) throw new Error("عنوان نمایندگی باید حداقل ۲ کاراکتر باشد");
    payload.profile_title = nextTitle;
  }
  if (hasSupport) {
    const rawSupport = Object.prototype.hasOwnProperty.call(input, "support_url") ? input.support_url : input.support_username;
    payload.support_url = String(rawSupport ?? "").trim() ? normalizeAgencySupportUrl(rawSupport) : null;
  }
  if (hasPassword) {
    const password = cleanText(input.password, 80);
    const errors = validatePasarguardPassword(password, agency.panel_username);
    if (errors.length) throw new Error(errors.join("؛ "));
    payload.password = password;
    nextPasswordEnc = await encryptSecret(password, env);
  }
  const telegramId = Number(user.telegram_id);
  if (Number.isSafeInteger(telegramId) && telegramId > 0) payload.telegram_id = telegramId;
  if (!hasTitle && !hasSupport && !hasPassword) throw new Error("حداقل یک مورد برای ویرایش ارسال کنید");

  await pasargadRequest(env, "PUT", "/api/admin/by-id/" + encodeURIComponent(agency.remote_manager_id), payload);
  await env.PASARGUARD_DB.prepare("UPDATE agencies SET title=?,panel_password_enc=?,updated_at=? WHERE id=? AND user_id=?")
    .bind(nextTitle, nextPasswordEnc, nowIso(), agency.id, user.id).run();
  await audit(env, user.id, "agency_information_updated", {
    agencyId: agency.id,
    titleChanged: hasTitle,
    supportChanged: hasSupport,
    passwordChanged: hasPassword
  });
  return {
    id: agency.id,
    title: nextTitle,
    username: agency.panel_username,
    status: agency.status,
    password_changed: hasPassword,
    support_changed: hasSupport
  };
}

async function updateAgencyInfo(request, env, agencyId) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  try {
    const body = await parseBody(request);
    const agency = await updateOwnedAgency(env, auth.user, agencyId, body || {});
    return json({ success: true, message: "اطلاعات پنل با موفقیت بروزرسانی شد.", agency });
  } catch (error) {
    return fail(error.message || "ویرایش اطلاعات پنل ناموفق بود", 400, "AGENCY_UPDATE_FAILED");
  }
}

async function getAgencyCredentials(request, env, agencyId) {
  const auth = await requireAuth(request, env);
  if (auth.response) return auth.response;
  const agency = await env.PASARGUARD_DB.prepare("SELECT * FROM agencies WHERE id=? AND user_id=?").bind(agencyId, auth.user.id).first();
  if (!agency) return fail("پنل پیدا نشد", 404, "NOT_FOUND");
  let password = "";
  try { password = await decryptSecret(agency.panel_password_enc, env); } catch (_) {}
  const settings = await getSettings(env);
  const imported = isManualAgency(agency);
  return json({
    success: true,
    username: agency.panel_username,
    password,
    imported,
    password_available: Boolean(password),
    panel_url: pasarguardDashboardUrl(settings),
    message: imported
      ? "این پنل دستی شناسایی شده است. هنگام اتصال به ربات نماینده، رمز پنل از شما دریافت و پس از بررسی به‌صورت امن ذخیره می‌شود."
      : "اطلاعات ورود پنل آماده است."
  });
}

async function adminAdjustUserBalance(request, env, userId) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;

  const numericUserId = Number.parseInt(String(userId), 10);
  if (!Number.isInteger(numericUserId) || numericUserId <= 0) {
    return fail("شناسه کاربر معتبر نیست", 400, "INVALID_USER_ID");
  }

  const body = await parseBody(request);
  const operation = cleanText(body.operation, 20).toLowerCase();
  const amount = clampInt(body.amount, 0, 1000000000000);
  const note = cleanText(body.note, 180);
  if (!['increase', 'decrease'].includes(operation)) {
    return fail("نوع عملیات باید افزایش یا کاهش باشد", 400, "INVALID_OPERATION");
  }
  if (amount <= 0) return fail("مبلغ باید بیشتر از صفر باشد", 400, "INVALID_AMOUNT");

  const target = await env.PASARGUARD_DB.prepare(`
    SELECT id,telegram_id,username,first_name,last_name,wallet_balance,status
    FROM users WHERE id=?
  `).bind(numericUserId).first();
  if (!target) return fail("کاربر پیدا نشد", 404, "USER_NOT_FOUND");

  const ts = nowIso();
  const delta = operation === 'increase' ? amount : -amount;
  const ledgerId = id('ledger');
  const description = note || (operation === 'increase'
    ? 'افزایش موجودی توسط مدیر'
    : 'کاهش موجودی توسط مدیر');

  const update = operation === 'increase'
    ? env.PASARGUARD_DB.prepare(`
        UPDATE users SET wallet_balance=wallet_balance+?,updated_at=? WHERE id=?
      `).bind(amount, ts, numericUserId)
    : env.PASARGUARD_DB.prepare(`
        UPDATE users SET wallet_balance=wallet_balance-?,updated_at=?
        WHERE id=? AND wallet_balance>=?
      `).bind(amount, ts, numericUserId, amount);

  const ledger = env.PASARGUARD_DB.prepare(`
    INSERT INTO wallet_ledger(id,user_id,type,amount,balance_after,ref_type,ref_id,description,created_at)
    SELECT ?,id,?,?,wallet_balance,'admin_adjustment',?,?,?
    FROM users WHERE id=? AND changes()=1
  `).bind(
    ledgerId,
    operation === 'increase' ? 'admin_credit' : 'admin_debit',
    delta,
    String(auth.user.id),
    description,
    ts,
    numericUserId
  );

  const results = await env.PASARGUARD_DB.batch([update, ledger]);
  const changed = Number(results?.[0]?.meta?.changes || 0);
  if (!changed) {
    if (operation === 'decrease') {
      return fail("موجودی کاربر برای این میزان کاهش کافی نیست", 409, "INSUFFICIENT_BALANCE");
    }
    return fail("تغییر موجودی انجام نشد", 409, "BALANCE_NOT_CHANGED");
  }

  const updated = await env.PASARGUARD_DB.prepare(`
    SELECT id,telegram_id,username,first_name,last_name,role,status,wallet_balance,updated_at
    FROM users WHERE id=?
  `).bind(numericUserId).first();

  const balanceState = await reconcileUserAgencies(env, numericUserId);
  await audit(env, auth.user.id, operation === 'increase' ? 'admin_balance_increased' : 'admin_balance_decreased', {
    targetUserId: numericUserId,
    targetTelegramId: target.telegram_id,
    amount,
    balanceBefore: Number(target.wallet_balance || 0),
    balanceAfter: Number(updated?.wallet_balance || 0),
    note
  });

  const verb = operation === 'increase' ? 'افزایش یافت' : 'کاهش یافت';
  const sign = operation === 'increase' ? '+' : '-';
  await notifyTelegramUser(
    env,
    target.telegram_id,
    (operation === 'increase' ? '✅' : 'ℹ️') + ' موجودی کیف پول شما توسط مدیر ' + verb + '.\n' +
    'مبلغ: ' + sign + amount.toLocaleString('fa-IR') + ' تومان\n' +
    'موجودی جدید: ' + Number(updated?.wallet_balance || 0).toLocaleString('fa-IR') + ' تومان'
  );

  return json({
    success: true,
    operation,
    amount,
    user: updated,
    agencies_reconciled: Number(balanceState?.changed || 0)
  });
}

async function saveAdminSettings(request, env) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;
  const previousSettings = await getSettings(env);
  const body = await parseBody(request);
  const allowed = [
    "brand_name", "price_per_gb", "setup_fee", "reseller_bot_setup_fee", "reseller_bot_license_renewal_fee",
    "reseller_store_bot_setup_fee", "reseller_store_bot_license_renewal_fee", "reseller_master_bot_setup_fee", "reseller_master_bot_license_renewal_fee", "master_min_markup_toman",
    "agency_sales_enabled", "reseller_bot_sales_enabled", "central_recharge_bonus_percent", "central_trial_enabled", "central_trial_data_limit_bytes", "central_trial_duration_hours", "min_recharge", "support_username",
    "blupal_base_url", "blupal_api_key", "blupal_card_number", "blupal_webhook_token", "payment_poll_enabled",
    "bitpin_enabled", "bitpin_base_url", "bitpin_api_key", "bitpin_api_secret", "bitpin_asset", "bitpin_network", "bitpin_deposit_address", "bitpin_toman_per_unit", "bitpin_min_crypto_amount",
    "auto_delete_pending_invoices", "pending_invoice_ttl_hours", "usage_sync_enabled", "auto_update", "auto_update_interval_seconds", "bot_token", "admin_ids",
    "auth_max_age_seconds", "allow_dev_auth", "dev_telegram_id", "app_encryption_key", "app_url",
    "telegram_webhook_secret", "pasarguard_panel_url", "pasarguard_access_token",
    "pasarguard_admin_username", "pasarguard_admin_password", "pasarguard_reseller_role_id",
    "pasarguard_reseller_role_name", "pasarguard_sales_role_id", "pasarguard_sales_role_name", "pasarguard_master_role_id", "pasarguard_master_role_name", "pasarguard_set_telegram_id", "pasarguard_admin_data_limit_bytes",
    "pasarguard_sub_domain", "pasarguard_support_url", "github_repo", "github_branch",
    "github_worker_file", "github_edge_worker_file", "github_processor_worker_file", "github_version_file", "github_token", "cf_account_id", "cf_api_token", "cf_worker_name",
    "python_helper_worker_name", "python_helper_auto_provision"
  ];
  const values = {};
  for (const key of allowed) {
    if (body[key] === undefined) continue;
    const value = cleanText(body[key], key.includes("token") || key.includes("password") || key.includes("key") ? 2048 : 500);
    if (SECRET_SETTING_KEYS.has(key) && !value) continue;
    values[key] = value;
  }
  if (values.github_worker_file !== undefined) values.github_worker_file = "core/worker.js";
  values.github_edge_worker_file = "edge/worker.js";
  values.github_processor_worker_file = "processor/worker.js";
  for (const key of ["price_per_gb", "setup_fee", "reseller_bot_setup_fee", "reseller_bot_license_renewal_fee", "reseller_store_bot_setup_fee", "reseller_store_bot_license_renewal_fee", "reseller_master_bot_setup_fee", "reseller_master_bot_license_renewal_fee", "master_min_markup_toman", "central_recharge_bonus_percent", "min_recharge", "auth_max_age_seconds", "pasarguard_admin_data_limit_bytes", "auto_update_interval_seconds", "pending_invoice_ttl_hours"]) {
    if (values[key] !== undefined) values[key] = String(clampInt(values[key], 0, 1000000000000));
  }
  if (values.reseller_store_bot_setup_fee !== undefined) values.reseller_bot_setup_fee = values.reseller_store_bot_setup_fee;
  if (values.reseller_store_bot_license_renewal_fee !== undefined) values.reseller_bot_license_renewal_fee = values.reseller_store_bot_license_renewal_fee;
  if (values.master_min_markup_toman !== undefined) values.master_min_markup_toman = String(Math.max(1, Number(values.master_min_markup_toman || 100)));
  if (values.min_recharge !== undefined) values.min_recharge = String(Math.max(10000, Number(values.min_recharge || 0)));
  if (values.central_recharge_bonus_percent !== undefined) values.central_recharge_bonus_percent = String(Math.max(0, Math.min(100, Number(values.central_recharge_bonus_percent || 0))));
  if (values.central_trial_data_limit_bytes !== undefined) values.central_trial_data_limit_bytes = String(clampInt(values.central_trial_data_limit_bytes || GIB, 1024 * 1024, 1024 * GIB));
  if (values.central_trial_duration_hours !== undefined) values.central_trial_duration_hours = String(clampInt(values.central_trial_duration_hours || 24, 1, 720));
  if (values.blupal_card_number !== undefined) values.blupal_card_number = values.blupal_card_number.replace(/\D/g, "");
  if (values.blupal_base_url !== undefined) {
    try { values.blupal_base_url = normalizeBlupalBaseUrl(values.blupal_base_url); }
    catch (error) { return fail(error.message, 400, "INVALID_BLUPAL_URL"); }
  }
  if (values.bitpin_base_url !== undefined) {
    try { values.bitpin_base_url = normalizeBitpinBaseUrl(values.bitpin_base_url); }
    catch (error) { return fail(error.message, 400, "INVALID_BITPIN_URL"); }
  }
  if (values.bitpin_asset !== undefined) values.bitpin_asset = cleanText(values.bitpin_asset, 30).toUpperCase() || "USDT";
  if (values.bitpin_network !== undefined) values.bitpin_network = cleanText(values.bitpin_network, 40).toUpperCase() || "TRC20";
  if (values.bitpin_deposit_address !== undefined) values.bitpin_deposit_address = cleanText(values.bitpin_deposit_address, 300).replace(/\s+/g, "");
  if (values.bitpin_toman_per_unit !== undefined) values.bitpin_toman_per_unit = String(clampInt(values.bitpin_toman_per_unit, 1, 1000000000000));
  if (values.bitpin_min_crypto_amount !== undefined) {
    const minCrypto = Number(values.bitpin_min_crypto_amount);
    if (!Number.isFinite(minCrypto) || minCrypto <= 0) return fail("حداقل مقدار رمزارز معتبر نیست", 400, "INVALID_BITPIN_MIN_AMOUNT");
    values.bitpin_min_crypto_amount = String(minCrypto);
  }
  if (values.app_url !== undefined) {
    values.app_url = canonicalAppUrl(values.app_url, new URL(request.url).origin);
  }
  for (const key of ["central_trial_enabled", "agency_sales_enabled", "reseller_bot_sales_enabled", "usage_sync_enabled", "payment_poll_enabled", "auto_delete_pending_invoices", "auto_update", "allow_dev_auth", "pasarguard_set_telegram_id", "python_helper_auto_provision", "bitpin_enabled"]) {
    if (body[key] !== undefined) values[key] = String(body[key] === true || body[key] === "true");
  }
  if (values.admin_ids !== undefined) {
    try { values.admin_ids = normalizeTelegramAdminIds(values.admin_ids); }
    catch (error) { return fail(error.message, 400, "INVALID_ADMIN_IDS"); }
    values.central_bot_admin_ids_updated_at = nowIso();
  }
  let centralBotChange = null;
  if (values.bot_token !== undefined) {
    if (!/^\d+:[A-Za-z0-9_-]{20,}$/.test(values.bot_token)) return fail("فرمت توکن BotFather معتبر نیست", 400, "INVALID_BOT_TOKEN");
    try {
      const info = await telegramApiWithToken(values.bot_token, "getMe", {});
      const me = info?.result || {};
      if (!me.id || !me.is_bot || !me.username) throw new Error("اطلاعات ربات جدید از تلگرام دریافت نشد");
      const duplicate = await env.PASARGUARD_DB.prepare("SELECT id,bot_username FROM reseller_bots WHERE bot_telegram_id=? LIMIT 1").bind(String(me.id)).first();
      if (duplicate) throw new Error("این ربات قبلاً به‌عنوان ربات نماینده ثبت شده است");
      const prospective = { ...previousSettings, ...values, bot_token: values.bot_token };
      await configureTelegramBotWithToken(env, new URL(request.url).origin, values.bot_token, prospective);
      values.central_bot_telegram_id = String(me.id);
      values.central_bot_username = cleanText(me.username, 100);
      values.central_bot_name = cleanText([me.first_name, me.last_name].filter(Boolean).join(" "), 120);
      values.central_bot_token_updated_at = nowIso();
      centralBotChange = { botId: String(me.id), username: cleanText(me.username, 100), oldToken: previousSettings.bot_token || "" };
    } catch (error) {
      return fail(error.message, 400, "CENTRAL_BOT_CHANGE_FAILED");
    }
  }
  values.auto_update = "true";
  values.python_helper_auto_provision = "true";
  if (values.python_helper_worker_name !== undefined) values.python_helper_worker_name = normalizeWorkerScriptName(values.python_helper_worker_name, normalizeWorkerScriptName((values.cf_worker_name || body.cf_worker_name || "pasargard") + "-python-helper"));
  // Auto-linking is a core authentication invariant, not an optional feature.
  values.pasarguard_set_telegram_id = "true";
  if (values.auto_update_interval_seconds !== undefined) {
    values.auto_update_interval_seconds = String(Math.max(5, Math.min(86400, Number(values.auto_update_interval_seconds || 5))));
  }
  if (values.pending_invoice_ttl_hours !== undefined) {
    values.pending_invoice_ttl_hours = String(Math.max(1, Math.min(720, Number(values.pending_invoice_ttl_hours || 24))));
  }
  for (const key of ["bitpin_api_key", "bitpin_api_secret"]) {
    if (values[key] !== undefined) values[key] = "enc:" + await encryptSecret(String(values[key]), env);
  }
  await setSettings(env, values);
  const advancedCleanup = [];
  if (values.agency_sales_enabled === "false") advancedCleanup.push(env.PASARGUARD_DB.prepare("DELETE FROM bot_sessions WHERE state IN ('agency_title','agency_username','agency_password')"));
  if (values.reseller_bot_sales_enabled === "false") advancedCleanup.push(env.PASARGUARD_DB.prepare("DELETE FROM bot_sessions WHERE state IN ('sales_bot_token','sales_bot_agency','sales_bot_agency_password','sales_bot_brand','sales_card_holder','sales_card_number','sales_bank_name')"));
  if (advancedCleanup.length) await env.PASARGUARD_DB.batch(advancedCleanup);
  if (centralBotChange && centralBotChange.oldToken && centralBotChange.oldToken !== values.bot_token) {
    try { await telegramApiWithToken(centralBotChange.oldToken, "deleteWebhook", { drop_pending_updates: false }); } catch (_) {}
  }
  pasarguardTokenCache = { token: "", expiresAt: 0 };
  const safeAudit = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, SECRET_SETTING_KEYS.has(k) ? "***" : v]));
  await audit(env, auth.user.id, "settings_updated", safeAudit);
  let settings = await getSettings(env);
  let pythonHelper = null;
  const cloudflareChanged = Boolean(
    (values.cf_account_id !== undefined && values.cf_account_id !== previousSettings.cf_account_id) ||
    (values.cf_worker_name !== undefined && values.cf_worker_name !== previousSettings.cf_worker_name) ||
    (values.python_helper_worker_name !== undefined && values.python_helper_worker_name !== previousSettings.python_helper_worker_name) ||
    cleanText(body.cf_api_token, 2048)
  );
  if (pythonHelperConfigurationReady(settings) && (cloudflareChanged || !["ready", "deployed", "deployed_and_bound"].includes(settings.python_helper_last_status))) {
    try {
      pythonHelper = await provisionPythonHelper(env, { source: "settings", actorId: auth.user.id });
      settings = await getSettings(env);
    } catch (error) {
      pythonHelper = { success: false, error: error.message };
      settings = await getSettings(env);
    }
  }
  const configuration = adminSettings(settings);
  configuration.python_helper_binding_detected = Boolean(env.PY_HELPER && typeof env.PY_HELPER.fetch === "function");
  return json({ success: true, settings: publicSettings(settings), configuration, python_helper: pythonHelper });
}

async function adminSyncUsage(request, env) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;
  const downline = await syncDownlineUsage(env, null, 200);
  const central = await syncUsage(env, 100);
  await reconcileAllAgencyBalanceStates(env, 250);
  const result = { downline, central };
  await audit(env, auth.user.id, "manual_usage_sync", result);
  return json({ success: true, result });
}

function normalizeWorkerScriptName(value, fallback = "pasargard-python-helper") {
  const normalized = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 63);
  return normalized || fallback;
}

function derivePythonHelperWorkerName(settings) {
  const configured = cleanText(settings?.python_helper_worker_name, 100);
  if (configured) return normalizeWorkerScriptName(configured);
  const main = normalizeWorkerScriptName(settings?.cf_worker_name || "pasargard", "pasargard");
  return normalizeWorkerScriptName(main + "-python-helper");
}

function pythonHelperConfigurationReady(settings) {
  return Boolean(settings?.cf_account_id && settings?.cf_api_token && settings?.cf_worker_name);
}

function cloudflareScriptBase(settings, scriptName) {
  return "https://api.cloudflare.com/client/v4/accounts/" + encodeURIComponent(settings.cf_account_id) +
    "/workers/scripts/" + encodeURIComponent(scriptName);
}

async function cloudflareJson(response, fallbackMessage, stage = "cloudflare_api") {
  const raw = await response.text().catch(() => "");
  let data = {};
  try { data = raw ? JSON.parse(raw) : {}; } catch (_) { data = {}; }
  if (!response.ok || data?.success === false) {
    const apiErrors = Array.isArray(data?.errors) ? data.errors.filter(Boolean) : [];
    const details = apiErrors.map(x => {
      const code = x?.code !== undefined ? "[" + x.code + "] " : "";
      return code + (x?.message || JSON.stringify(x));
    }).filter(Boolean).join("؛ ");
    const error = new Error(details || fallbackMessage || ("Cloudflare HTTP " + response.status));
    error.name = "CloudflareApiError";
    error.pythonStage = stage;
    error.httpStatus = response.status;
    error.cloudflareErrors = apiErrors;
    error.cloudflareResponse = raw.slice(0, 1800);
    error.cloudflareRay = response.headers.get("cf-ray") || "";
    throw error;
  }
  return data;
}

function pythonStageLabel(stage) {
  const labels = {
    load_settings: "خواندن تنظیمات",
    validate_configuration: "اعتبارسنجی اطلاعات Cloudflare",
    save_deploying_status: "ثبت وضعیت شروع عملیات",
    upload_python_worker: "ساخت یا بروزرسانی Python Worker",
    read_main_worker_settings: "خواندن تنظیمات Worker اصلی",
    read_main_worker_content: "خواندن فایل Worker اصلی",
    bind_python_helper: "اتصال Service Binding با نام PY_HELPER",
    save_success_status: "ثبت نتیجه موفق",
    unknown: "مرحله نامشخص"
  };
  return labels[stage] || stage || labels.unknown;
}

function pythonSourceLabel(source) {
  const labels = {
    install: "نصب اولیه سامانه",
    admin: "دکمه ساخت و ترمیم در مینی‌اپ",
    "bot-admin": "دکمه ترمیم داخل ربات",
    settings: "ذخیره تنظیمات مدیریت",
    automatic: "بررسی خودکار",
    request: "بررسی خودکار هنگام درخواست",
    cron: "بررسی زمان‌بندی‌شده"
  };
  return labels[source] || source || "نامشخص";
}

function pythonErrorPlainSummary(error, context = {}, maxLength = 1200) {
  const stage = error?.pythonStage || context.stage || "unknown";
  const lines = [
    "مرحله: " + pythonStageLabel(stage),
    "مبدأ: " + pythonSourceLabel(context.source),
    context.helperName ? "Python Worker: " + context.helperName : "",
    context.mainWorker ? "Worker اصلی: " + context.mainWorker : "",
    error?.httpStatus ? "HTTP Status: " + error.httpStatus : "",
    error?.cloudflareRay ? "CF-Ray: " + error.cloudflareRay : "",
    "خطا: " + String(error?.message || error || "خطای نامشخص")
  ].filter(Boolean);
  if (error?.cloudflareResponse) lines.push("پاسخ Cloudflare: " + String(error.cloudflareResponse));
  return lines.join("\n").slice(0, maxLength);
}

async function notifyPythonProvisionFailure(env, error, context = {}) {
  const summary = pythonErrorPlainSummary(error, context, 2600);
  const text =
    "🐍❌ <b>خطا در نصب یا ترمیم Python Worker</b>\n\n" +
    "<pre>" + botEscape(summary) + "</pre>\n" +
    "زمان: <code>" + botEscape(nowIso()) + "</code>\n" +
    "نسخه سامانه: <code>" + botEscape(APP_VERSION) + "</code>";
  await notifyAdmins(env, text.slice(0, 3900));
}

async function uploadEmbeddedPythonHelper(settings, helperName) {
  const metadata = {
    main_module: "entry.py",
    compatibility_date: "2026-07-11",
    compatibility_flags: ["python_workers", "disable_python_external_sdk"],
    annotations: {
      "workers/message": "Automatic Pasargard Python helper " + PYTHON_HELPER_VERSION,
      "workers/tag": "pasargard-python-auto"
    }
  };
  const form = new FormData();
  form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  // This helper has no third-party dependencies. Cloudflare rejects a raw
  // requirements.txt in direct API uploads and requires pywrangler only when
  // packages must be bundled. Uploading entry.py alone is the correct path here.
  form.append("entry.py", new Blob([PYTHON_HELPER_SOURCE], { type: "text/x-python" }), "entry.py");
  const response = await fetch(cloudflareScriptBase(settings, helperName), {
    method: "PUT",
    headers: { authorization: "Bearer " + settings.cf_api_token },
    body: form
  });
  await cloudflareJson(response, "ساخت Python Worker در Cloudflare ناموفق بود", "upload_python_worker");
  return { worker_name: helperName, files: ["entry.py"], dependencies: "builtin-workers-sdk", compatibility_flags: metadata.compatibility_flags, version: PYTHON_HELPER_VERSION };
}

async function readCurrentWorkerBundle(settings) {
  const base = cloudflareScriptBase(settings, settings.cf_worker_name);
  const headers = { authorization: "Bearer " + settings.cf_api_token };
  const settingsResponse = await fetch(base + "/settings", { headers });
  const settingsData = await cloudflareJson(settingsResponse, "خواندن تنظیمات Worker اصلی ناموفق بود", "read_main_worker_settings");
  const current = settingsData?.result || {};

  // Cloudflare's token-compatible content endpoint is /content/v2.
  // The legacy /content route may return 405 (authentication scheme not allowed)
  // even when the token has Workers Scripts Write permission.
  const contentResponse = await fetch(base + "/content/v2", {
    headers: {
      ...headers,
      accept: "multipart/form-data, application/javascript, text/javascript, */*"
    }
  });
  if (!contentResponse.ok) {
    const raw = await contentResponse.text().catch(() => "");
    const error = new Error("خواندن فایل Worker اصلی از content/v2 ناموفق بود: HTTP " + contentResponse.status + (raw ? " — " + raw.slice(0, 500) : ""));
    error.pythonStage = "read_main_worker_content_v2";
    error.httpStatus = contentResponse.status;
    error.cloudflareResponse = raw.slice(0, 1800);
    error.cloudflareRay = contentResponse.headers.get("cf-ray") || "";
    throw error;
  }
  const contentType = String(contentResponse.headers.get("content-type") || "");
  const modules = [];

  if (contentType.includes("multipart/form-data")) {
    const currentForm = await contentResponse.formData();
    for (const [field, value] of currentForm.entries()) {
      if (field === "metadata" || typeof value === "string") continue;
      modules.push({ field, file: value, filename: value.name || field });
    }
  } else {
    const filename = current.main_module || current.entry_point || "worker.js";
    const source = await contentResponse.text();
    modules.push({
      field: filename,
      file: new Blob([source], { type: "application/javascript+module" }),
      filename
    });
  }
  if (!modules.length) throw new Error("فایل اجرایی Worker اصلی از Cloudflare دریافت نشد");
  return { base, current, modules };
}

async function bindPythonHelperToMainWorker(settings, helperName) {
  const bundle = await readCurrentWorkerBundle(settings);
  const bindings = Array.isArray(bundle.current.bindings) ? bundle.current.bindings : [];
  const existing = bindings.find(x => x?.type === "service" && x?.name === "PY_HELPER");
  if (existing?.service === helperName) return { bound: true, changed: false, binding: "PY_HELPER" };

  const serviceBindings = bindings
    .filter(x => x?.type === "service" && x?.name && x?.name !== "PY_HELPER")
    .map(x => ({
      type: "service",
      name: x.name,
      service: x.service,
      ...(x.environment ? { environment: x.environment } : {}),
      ...(x.entrypoint ? { entrypoint: x.entrypoint } : {})
    }));
  serviceBindings.push({ type: "service", name: "PY_HELPER", service: helperName });

  const keepBindings = Array.from(new Set(bindings.map(x => x?.type).filter(x => x && x !== "service")));
  const mainModule = bundle.current.main_module || bundle.current.entry_point || bundle.modules[0].filename;
  const metadata = {
    main_module: mainModule,
    compatibility_date: bundle.current.compatibility_date || "2026-06-01",
    compatibility_flags: Array.isArray(bundle.current.compatibility_flags) ? bundle.current.compatibility_flags : [],
    keep_bindings: keepBindings,
    bindings: serviceBindings,
    annotations: {
      "workers/message": "Attach automatic PY_HELPER service binding",
      "workers/tag": "pasargard-python-binding"
    }
  };
  const form = new FormData();
  form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  for (const module of bundle.modules) form.append(module.field, module.file, module.filename);
  const response = await fetch(bundle.base + "?bindings_inherit=strict", {
    method: "PUT",
    headers: { authorization: "Bearer " + settings.cf_api_token },
    body: form
  });
  await cloudflareJson(response, "اتصال PY_HELPER به Worker اصلی ناموفق بود", "bind_python_helper");
  return { bound: true, changed: true, binding: "PY_HELPER" };
}

async function verifyPythonHelperBinding(env) {
  if (!env.PY_HELPER || typeof env.PY_HELPER.fetch !== "function") return { ready: false, reason: "binding_not_loaded" };
  const response = await env.PY_HELPER.fetch(new Request("https://python-helper/health"));
  if (!response.ok) return { ready: false, reason: "health_http_" + response.status };
  const data = await response.json().catch(() => ({}));
  return { ready: data?.ok === true, data };
}

async function provisionPythonHelper(env, options = {}) {
  await ensureDb(env);
  const source = options.source || "automatic";
  let settings = null;
  let helperName = "";
  let stage = "load_settings";
  try {
    settings = await getSettings(env);
    stage = "validate_configuration";
    if (!pythonHelperConfigurationReady(settings)) {
      const error = new Error("Account ID، نام Worker و Cloudflare API Token کامل نیست");
      error.pythonStage = stage;
      throw error;
    }
    helperName = derivePythonHelperWorkerName(settings);
    if (helperName === normalizeWorkerScriptName(settings.cf_worker_name)) {
      const error = new Error("نام Python Worker نباید با Worker اصلی یکسان باشد");
      error.pythonStage = stage;
      throw error;
    }

    stage = "save_deploying_status";
    await setSettings(env, {
      python_helper_auto_provision: "true",
      python_helper_worker_name: helperName,
      python_helper_last_check_epoch: String(Math.floor(Date.now() / 1000)),
      python_helper_last_status: "deploying",
      python_helper_last_error: ""
    });

    stage = "upload_python_worker";
    const uploaded = await uploadEmbeddedPythonHelper(settings, helperName);
    stage = "bind_python_helper";
    const binding = await bindPythonHelperToMainWorker(settings, helperName);
    const result = {
      success: true,
      status: binding.changed ? "deployed_and_bound" : "deployed",
      worker_name: helperName,
      uploaded,
      binding,
      binding_active_next_request: true,
      source
    };
    stage = "save_success_status";
    await setSettings(env, {
      python_helper_auto_provision: "true",
      python_helper_worker_name: helperName,
      python_helper_last_status: result.status,
      python_helper_last_error: "",
      python_helper_last_deployed_at: nowIso(),
      python_helper_last_version: PYTHON_HELPER_VERSION
    });
    try { await audit(env, options.actorId || null, "python_helper_provisioned", result); } catch (_) {}
    return result;
  } catch (error) {
    if (!error.pythonStage) error.pythonStage = stage || "unknown";
    const context = {
      source,
      stage: error.pythonStage,
      helperName: helperName || (settings ? derivePythonHelperWorkerName(settings) : ""),
      mainWorker: settings?.cf_worker_name || ""
    };
    try {
      await setSettings(env, {
        python_helper_last_status: "failed",
        python_helper_last_error: pythonErrorPlainSummary(error, context, 1000)
      });
    } catch (_) {}
    try {
      await audit(env, options.actorId || null, "python_helper_provision_failed", {
        ...context,
        http_status: error?.httpStatus || null,
        cf_ray: error?.cloudflareRay || "",
        message: error?.message || String(error)
      });
    } catch (_) {}
    if (options.notifyBot !== false && ["install", "admin", "bot-admin", "settings"].includes(source)) {
      try { await notifyPythonProvisionFailure(env, error, context); } catch (_) {}
    }
    throw error;
  }
}

async function claimPythonHelperCheck(env, intervalSeconds, forceCheck = false) {
  const now = Math.floor(Date.now() / 1000);
  if (forceCheck) {
    await setSettings(env, { python_helper_last_check_epoch: String(now) });
    return true;
  }
  const cutoff = now - Math.max(300, Number(intervalSeconds || 21600));
  const result = await env.PASARGUARD_DB.prepare(`
    INSERT INTO app_settings(key, value, updated_at)
    VALUES('python_helper_last_check_epoch', ?, ?)
    ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at
    WHERE CAST(app_settings.value AS INTEGER) <= ?
  `).bind(String(now), nowIso(), String(cutoff)).run();
  return Number(result?.meta?.changes || 0) > 0;
}

async function automaticPythonHelperTick(env, options = {}) {
  await ensureDb(env);
  const settings = await getSettings(env);
  if (settings.install_completed !== "true") return { checked: false, reason: "not_installed" };

  if (env.PY_HELPER && typeof env.PY_HELPER.fetch === "function") {
    try {
      const health = await verifyPythonHelperBinding(env);
      if (health.ready) {
        if (settings.python_helper_last_status !== "ready") {
          await setSettings(env, {
            python_helper_auto_provision: "true",
            python_helper_last_status: "ready",
            python_helper_last_error: "",
            python_helper_last_version: health.data?.version || PYTHON_HELPER_VERSION
          });
        }
        return { checked: true, ready: true, health };
      }
    } catch (error) {
      console.error("python helper health error", error);
    }
  }

  const source = options.source || "request";
  const forceCheck = options.forceCheck === true;
  const interval = settings.python_helper_last_status === "ready" ? 21600 : 300;
  const claimed = await claimPythonHelperCheck(env, interval, forceCheck);
  if (!claimed) return { checked: false, reason: "throttled" };
  if (!pythonHelperConfigurationReady(settings)) {
    await setSettings(env, {
      python_helper_auto_provision: "true",
      python_helper_last_status: "configuration_required",
      python_helper_last_error: "اطلاعات Cloudflare کامل نیست"
    });
    return { checked: false, reason: "configuration_required" };
  }
  return provisionPythonHelper(env, { source });
}

async function adminProvisionPythonHelper(request, env) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;
  try {
    const result = await provisionPythonHelper(env, { source: "admin", actorId: auth.user.id });
    return json({ success: true, result });
  } catch (error) {
    return fail(error.message, 502, "PYTHON_HELPER_PROVISION_FAILED");
  }
}

function semverCompare(a, b) {
  const pa = String(a).replace(/^v/, "").split(".").map(x => Number(x) || 0);
  const pb = String(b).replace(/^v/, "").split(".").map(x => Number(x) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    if ((pa[i] || 0) > (pb[i] || 0)) return 1;
    if ((pa[i] || 0) < (pb[i] || 0)) return -1;
  }
  return 0;
}

function normalizeGithubRepo(repo) {
  return String(repo || "")
    .trim()
    .replace(/^https?:\/\/github\.com\//, "")
    .replace(/\.git$/, "")
    .replace(/\/$/, "");
}

function githubRawUrl(repo, branch, file, cacheBust = false) {
  const base = "https://raw.githubusercontent.com/" + normalizeGithubRepo(repo) + "/" + encodeURIComponent(branch) + "/" + String(file || "").split("/").map(encodeURIComponent).join("/");
  if (!cacheBust) return base;
  const value = cacheBust === true ? Date.now() : String(cacheBust);
  return base + "?pasarguard_cb=" + encodeURIComponent(value);
}

function githubContentsApiUrl(repo, branch, file) {
  return "https://api.github.com/repos/" + normalizeGithubRepo(repo) + "/contents/" + String(file || "").split("/").map(encodeURIComponent).join("/") + "?ref=" + encodeURIComponent(branch);
}

function githubRateLimitError(response, body = "") {
  const remaining = response.headers.get("x-ratelimit-remaining");
  const reset = Number(response.headers.get("x-ratelimit-reset") || 0);
  const looksLimited = response.status === 429 || (response.status === 403 && (remaining === "0" || /rate limit/i.test(body)));
  if (!looksLimited) return null;
  const error = new Error("سهمیه موقت GitHub API تمام شده است؛ بررسی نسخه از مسیر بدون محدودیت انجام می‌شود. چند ثانیه دیگر دوباره تلاش کنید.");
  error.code = "GITHUB_RATE_LIMIT";
  error.retry_at = reset ? new Date(reset * 1000).toISOString() : "";
  return error;
}

async function githubFetch(env, url, suppliedSettings = null, options = {}) {
  const settings = suppliedSettings || await getSettings(env);
  const headers = {
    accept: options.api ? "application/vnd.github+json" : "text/plain, application/json, */*",
    "cache-control": "no-cache",
    "user-agent": "Pasargard-MiniApp/" + APP_VERSION + " (Cloudflare Worker)"
  };
  if (options.api) headers["x-github-api-version"] = "2022-11-28";
  if (settings.github_token) headers.authorization = "Bearer " + settings.github_token;
  const response = await fetch(url, { headers, cache: "no-store" });
  if (!response.ok) {
    const body = await response.text().catch(() => "");
    const limited = githubRateLimitError(response, body);
    if (limited) throw limited;
    const error = new Error("GitHub HTTP " + response.status + (body ? ": " + body.slice(0, 180) : ""));
    error.code = "GITHUB_HTTP_" + response.status;
    throw error;
  }
  return response;
}


function githubRepoApiPath(repo) {
  const normalized = normalizeGithubRepo(repo);
  const parts = normalized.split("/").filter(Boolean);
  if (parts.length !== 2 || !/^[A-Za-z0-9_.-]+$/.test(parts[0]) || !/^[A-Za-z0-9_.-]+$/.test(parts[1])) {
    throw new Error("آدرس مخزن GitHub باید به‌صورت owner/repository باشد");
  }
  return "/repos/" + encodeURIComponent(parts[0]) + "/" + encodeURIComponent(parts[1]);
}

async function githubApiRequest(env, suppliedSettings, method, path, body = undefined) {
  const settings = suppliedSettings || await getSettings(env);
  const token = String(settings.github_token || "").trim();
  if (!token) throw new Error("توکن GitHub تنظیم نشده است؛ ابتدا از بخش اتصال GitHub توکن را ثبت کنید");
  const headers = {
    accept: "application/vnd.github+json",
    authorization: "Bearer " + token,
    "x-github-api-version": "2022-11-28",
    "user-agent": "Pasargard-MiniApp/" + APP_VERSION + " (Telegram ZIP uploader)"
  };
  if (body !== undefined) headers["content-type"] = "application/json";
  const response = await fetch("https://api.github.com" + path, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  const raw = await response.text().catch(() => "");
  let data = {};
  try { data = raw ? JSON.parse(raw) : {}; } catch (_) { data = { message: raw }; }
  if (!response.ok) {
    const detail = cleanText(data?.message || raw || "GitHub API error", 500);
    let message = "خطای GitHub HTTP " + response.status + ": " + detail;
    if (response.status === 401) message = "توکن GitHub نامعتبر یا منقضی است";
    else if (response.status === 403) message = "توکن GitHub اجازه نوشتن ندارد یا محدودیت API فعال شده است: " + detail;
    else if (response.status === 404) message = "مخزن یا Branch پیدا نشد؛ نام مخزن و دسترسی توکن را بررسی کنید";
    else if (response.status === 409) message = "Branch گیت‌هاب هم‌زمان تغییر کرده است؛ فایل ZIP را دوباره ارسال کنید";
    else if (response.status === 422) message = "GitHub تغییرات را نپذیرفت؛ احتمالاً Branch محافظت‌شده است یا داده‌ها معتبر نیستند: " + detail;
    const error = new Error(message);
    error.code = "GITHUB_WRITE_HTTP_" + response.status;
    error.status = response.status;
    error.payload = data;
    throw error;
  }
  return data;
}

async function githubConnectionInfo(env, suppliedSettings = null) {
  const settings = suppliedSettings || await getSettings(env);
  const repoPath = githubRepoApiPath(settings.github_repo);
  const repo = await githubApiRequest(env, settings, "GET", repoPath);
  const branch = String(settings.github_branch || repo.default_branch || "main").trim();
  await githubApiRequest(env, settings, "GET", repoPath + "/git/ref/heads/" + encodeURIComponent(branch));
  return {
    repository: normalizeGithubRepo(settings.github_repo),
    branch,
    private: Boolean(repo.private),
    push_allowed: repo?.permissions?.push !== false,
    html_url: cleanText(repo.html_url || ("https://github.com/" + normalizeGithubRepo(settings.github_repo)), 500)
  };
}

function bytesToBase64Chunked(input) {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, Math.min(bytes.length, offset + chunkSize)));
  }
  return btoa(binary);
}

async function sha256BytesHex(input) {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return bytesToHex(digest);
}

function zipReadU16(view, offset) {
  if (offset < 0 || offset + 2 > view.byteLength) throw new Error("ساختار ZIP ناقص است");
  return view.getUint16(offset, true);
}

function zipReadU32(view, offset) {
  if (offset < 0 || offset + 4 > view.byteLength) throw new Error("ساختار ZIP ناقص است");
  return view.getUint32(offset, true);
}

function zipCrc32(bytes) {
  if (!ZIP_CRC32_TABLE) {
    ZIP_CRC32_TABLE = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
      ZIP_CRC32_TABLE[n] = c >>> 0;
    }
  }
  let crc = 0xffffffff;
  for (const byte of bytes) crc = ZIP_CRC32_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function decodeZipFileName(bytes) {
  return new TextDecoder("utf-8", { fatal: false }).decode(bytes).replace(/\\/g, "/");
}

function normalizeZipEntryPath(value) {
  let path = String(value || "").replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/{2,}/g, "/");
  if (!path || path.includes("\0") || path.startsWith("/") || /^[A-Za-z]:\//.test(path)) throw new Error("مسیر ناامن داخل ZIP شناسایی شد");
  const parts = path.split("/");
  if (parts.some(part => !part || part === "." || part === "..")) throw new Error("مسیر ناامن داخل ZIP شناسایی شد: " + path);
  return parts.join("/");
}

function zipEntryShouldBeIgnored(path) {
  const lower = String(path || "").toLowerCase();
  if (/(^|\/)__macosx(\/|$)/.test(lower) || /(^|\/)\.git(\/|$)/.test(lower) || /(^|\/)node_modules(\/|$)/.test(lower)) return true;
  if (/(^|\/)(\.ds_store|thumbs\.db)$/.test(lower)) return true;
  if (/(^|\/)readme(?:\.[^/]+)?$/.test(lower)) return true;
  return false;
}

async function unzipProjectArchive(input) {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  if (bytes.byteLength < 22) throw new Error("فایل ZIP خالی یا ناقص است");
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const minEocd = Math.max(0, bytes.byteLength - 22 - 65535);
  let eocd = -1;
  for (let i = bytes.byteLength - 22; i >= minEocd; i--) {
    if (zipReadU32(view, i) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd < 0) throw new Error("پایان ساختار ZIP پیدا نشد");
  const diskNo = zipReadU16(view, eocd + 4);
  const centralDisk = zipReadU16(view, eocd + 6);
  const entriesOnDisk = zipReadU16(view, eocd + 8);
  const totalEntries = zipReadU16(view, eocd + 10);
  const centralSize = zipReadU32(view, eocd + 12);
  const centralOffset = zipReadU32(view, eocd + 16);
  if (diskNo !== 0 || centralDisk !== 0 || entriesOnDisk !== totalEntries) throw new Error("ZIP چندبخشی پشتیبانی نمی‌شود");
  if (totalEntries === 0xffff || centralSize === 0xffffffff || centralOffset === 0xffffffff) throw new Error("ZIP64 پشتیبانی نمی‌شود؛ فایل بروزرسانی را کوچک‌تر بسازید");
  if (totalEntries < 1 || totalEntries > GITHUB_ZIP_MAX_FILES + 50) throw new Error("تعداد فایل‌های ZIP مجاز نیست");
  if (centralOffset + centralSize > bytes.byteLength) throw new Error("جدول فایل‌های ZIP ناقص است");

  const entries = [];
  let cursor = centralOffset;
  let advertisedTotal = 0;
  for (let index = 0; index < totalEntries; index++) {
    if (zipReadU32(view, cursor) !== 0x02014b50) throw new Error("جدول مرکزی ZIP خراب است");
    const flags = zipReadU16(view, cursor + 8);
    const method = zipReadU16(view, cursor + 10);
    const crc32 = zipReadU32(view, cursor + 16);
    const compressedSize = zipReadU32(view, cursor + 20);
    const uncompressedSize = zipReadU32(view, cursor + 24);
    const nameLength = zipReadU16(view, cursor + 28);
    const extraLength = zipReadU16(view, cursor + 30);
    const commentLength = zipReadU16(view, cursor + 32);
    const externalAttrs = zipReadU32(view, cursor + 38);
    const localOffset = zipReadU32(view, cursor + 42);
    if ([compressedSize, uncompressedSize, localOffset].includes(0xffffffff)) throw new Error("ZIP64 پشتیبانی نمی‌شود");
    const nameStart = cursor + 46;
    const nameEnd = nameStart + nameLength;
    if (nameEnd + extraLength + commentLength > bytes.byteLength) throw new Error("نام فایل ZIP ناقص است");
    const rawName = decodeZipFileName(bytes.subarray(nameStart, nameEnd));
    const directory = rawName.endsWith("/");
    if (!directory) advertisedTotal += uncompressedSize;
    if (advertisedTotal > GITHUB_ZIP_MAX_UNCOMPRESSED_BYTES) throw new Error("حجم بازشده ZIP بیش از حد مجاز است");
    if (!directory && uncompressedSize > GITHUB_ZIP_MAX_FILE_BYTES) throw new Error("یکی از فایل‌های داخل ZIP بیش از حد بزرگ است: " + rawName);
    const unixMode = (externalAttrs >>> 16) & 0xffff;
    if ((unixMode & 0xf000) === 0xa000) throw new Error("لینک نمادین داخل ZIP مجاز نیست: " + rawName);
    entries.push({ rawName, directory, flags, method, crc32, compressedSize, uncompressedSize, localOffset, unixMode });
    cursor = nameEnd + extraLength + commentLength;
  }

  const fileEntries = entries.filter(entry => !entry.directory);
  if (!fileEntries.length) throw new Error("ZIP هیچ فایلی ندارد");
  const normalizedNames = fileEntries.map(entry => normalizeZipEntryPath(entry.rawName));
  const firstSegment = normalizedNames[0].split("/")[0];
  const hasCommonRoot = normalizedNames.every(path => path.startsWith(firstSegment + "/"));
  const files = [];
  const seen = new Set();
  let actualTotal = 0;

  for (let index = 0; index < fileEntries.length; index++) {
    const entry = fileEntries[index];
    let path = normalizedNames[index];
    if (hasCommonRoot) path = normalizeZipEntryPath(path.slice(firstSegment.length + 1));
    if (zipEntryShouldBeIgnored(path)) continue;
    if (seen.has(path)) throw new Error("مسیر تکراری داخل ZIP وجود دارد: " + path);
    seen.add(path);
    if (entry.flags & 0x1) throw new Error("ZIP رمزگذاری‌شده پشتیبانی نمی‌شود");
    if (entry.method !== 0 && entry.method !== 8) throw new Error("روش فشرده‌سازی این ZIP پشتیبانی نمی‌شود: " + path);
    if (zipReadU32(view, entry.localOffset) !== 0x04034b50) throw new Error("هدر فایل ZIP خراب است: " + path);
    const localNameLength = zipReadU16(view, entry.localOffset + 26);
    const localExtraLength = zipReadU16(view, entry.localOffset + 28);
    const dataStart = entry.localOffset + 30 + localNameLength + localExtraLength;
    const dataEnd = dataStart + entry.compressedSize;
    if (dataStart < 0 || dataEnd > bytes.byteLength) throw new Error("داده فایل ZIP ناقص است: " + path);
    const compressed = bytes.subarray(dataStart, dataEnd);
    let output;
    if (entry.method === 0) {
      output = new Uint8Array(compressed);
    } else {
      if (typeof DecompressionStream !== "function") throw new Error("Runtime فعلی امکان بازکردن ZIP را ندارد");
      const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
      output = new Uint8Array(await new Response(stream).arrayBuffer());
    }
    if (output.byteLength !== entry.uncompressedSize) throw new Error("اندازه فایل بازشده با ZIP تطبیق ندارد: " + path);
    if (zipCrc32(output) !== entry.crc32) throw new Error("صحت فایل داخل ZIP تأیید نشد: " + path);
    actualTotal += output.byteLength;
    if (actualTotal > GITHUB_ZIP_MAX_UNCOMPRESSED_BYTES) throw new Error("حجم بازشده ZIP بیش از حد مجاز است");
    files.push({ path, bytes: output, mode: (entry.unixMode & 0o111) ? "100755" : "100644" });
  }
  if (!files.length) throw new Error("پس از پاک‌سازی، فایل معتبری داخل ZIP باقی نماند");
  if (files.length > GITHUB_ZIP_MAX_FILES) throw new Error("تعداد فایل‌های پروژه بیش از حد مجاز است");
  files.sort((a, b) => a.path.localeCompare(b.path));
  return files;
}

async function validateGithubProjectFiles(files) {
  const byPath = new Map(files.map(file => [file.path, file]));
  for (const required of GITHUB_ZIP_REQUIRED_PATHS) {
    if (!byPath.has(required)) throw new Error("فایل ضروری داخل ZIP وجود ندارد: " + required);
  }
  const decoder = new TextDecoder("utf-8", { fatal: false });
  const version = decoder.decode(byPath.get("version").bytes).trim();
  if (!/^\d+(?:\.\d+){2,3}(?:[-+][0-9A-Za-z.-]+)?$/.test(version)) throw new Error("محتوای فایل version معتبر نیست");
  if (semverCompare(version, APP_VERSION) < 0) throw new Error("نسخه داخل ZIP قدیمی‌تر از نسخه فعال ربات است: " + version);
  let release;
  try { release = JSON.parse(decoder.decode(byPath.get("release.json").bytes)); }
  catch (_) { throw new Error("فایل release.json معتبر نیست"); }
  if (String(release?.version || "").trim() !== version) throw new Error("نسخه release.json با فایل version یکسان نیست");
  const workerDefs = [
    ["core/worker.js", "BLUEPANEL_CORE_WORKER"],
    ["edge/worker.js", "BLUEPANEL_EDGE_WORKER"],
    ["processor/worker.js", "BLUEPANEL_PROCESSOR_WORKER"]
  ];
  for (const [path, marker] of workerDefs) {
    const source = decoder.decode(byPath.get(path).bytes);
    if (!source.includes(marker) || !source.includes("export default")) throw new Error("فایل Worker معتبر نیست: " + path);
    const match = source.match(/const\s+APP_VERSION\s*=\s*[\"']([^\"']+)[\"']/);
    if (!match || match[1] !== version) throw new Error("نسخه " + path + " با بسته یکسان نیست");
  }
  const hashMap = release?.sha256 && typeof release.sha256 === "object" ? release.sha256 : {};
  const releaseFiles = release?.files && typeof release.files === "object" ? release.files : {};
  for (const role of ["core", "edge", "processor"]) {
    const path = String(releaseFiles[role] || (role + "/worker.js"));
    const expected = String(hashMap[role] || "").toLowerCase();
    if (expected && byPath.has(path)) {
      const actual = await sha256BytesHex(byPath.get(path).bytes);
      if (actual !== expected) throw new Error("هش فایل " + path + " با release.json تطبیق ندارد");
    }
  }
  return {
    files,
    version,
    release_id: cleanText(release?.release_id || release?.build_id || version, 160) || version
  };
}

async function githubCommitProjectFiles(env, settings, project, progress = null) {
  const repo = normalizeGithubRepo(settings.github_repo);
  const branch = String(settings.github_branch || "main").trim();
  const repoPath = githubRepoApiPath(repo);
  const refPath = repoPath + "/git/ref/heads/" + encodeURIComponent(branch);
  if (progress) await progress("🔗 اتصال به مخزن <code>" + botEscape(repo) + "</code> و Branch <code>" + botEscape(branch) + "</code>…");
  const ref = await githubApiRequest(env, settings, "GET", refPath);
  const headSha = String(ref?.object?.sha || "");
  if (!headSha) throw new Error("Commit فعلی Branch از GitHub دریافت نشد");
  const currentCommit = await githubApiRequest(env, settings, "GET", repoPath + "/git/commits/" + encodeURIComponent(headSha));
  const baseTree = String(currentCommit?.tree?.sha || "");
  if (!baseTree) throw new Error("Tree فعلی مخزن دریافت نشد");

  const treeEntries = [];
  for (let index = 0; index < project.files.length; index++) {
    const file = project.files[index];
    if (progress && (index === 0 || index === project.files.length - 1 || index % 5 === 0)) {
      await progress("☁️ آپلود فایل‌ها در GitHub: <b>" + botMoney(index + 1) + " از " + botMoney(project.files.length) + "</b>\n<code>" + botEscape(file.path) + "</code>");
    }
    const blob = await githubApiRequest(env, settings, "POST", repoPath + "/git/blobs", {
      content: bytesToBase64Chunked(file.bytes),
      encoding: "base64"
    });
    if (!blob?.sha) throw new Error("GitHub فایل را ثبت نکرد: " + file.path);
    treeEntries.push({ path: file.path, mode: file.mode || "100644", type: "blob", sha: blob.sha });
  }

  if (progress) await progress("🧩 ساخت Tree مرتب و آماده‌سازی Commit واحد…");
  const tree = await githubApiRequest(env, settings, "POST", repoPath + "/git/trees", {
    base_tree: baseTree,
    tree: treeEntries
  });
  const treeSha = String(tree?.sha || "");
  if (!treeSha) throw new Error("Tree جدید در GitHub ساخته نشد");
  if (treeSha === baseTree) {
    return {
      no_change: true,
      repository: repo,
      branch,
      version: project.version,
      commit_sha: headSha,
      commit_url: "https://github.com/" + repo + "/commit/" + headSha,
      file_count: project.files.length
    };
  }
  const commit = await githubApiRequest(env, settings, "POST", repoPath + "/git/commits", {
    message: "PasarGuard " + project.version + " — uploaded by central Telegram bot",
    tree: treeSha,
    parents: [headSha]
  });
  const commitSha = String(commit?.sha || "");
  if (!commitSha) throw new Error("Commit جدید در GitHub ساخته نشد");
  await githubApiRequest(env, settings, "PATCH", repoPath + "/git/refs/heads/" + encodeURIComponent(branch), {
    sha: commitSha,
    force: false
  });
  return {
    no_change: false,
    repository: repo,
    branch,
    version: project.version,
    commit_sha: commitSha,
    commit_url: cleanText(commit?.html_url || ("https://github.com/" + repo + "/commit/" + commitSha), 800),
    file_count: project.files.length
  };
}

async function downloadCentralTelegramDocument(env, document) {
  const fileSize = Number(document?.file_size || 0);
  if (fileSize > TELEGRAM_GITHUB_ZIP_MAX_BYTES) throw new Error("حداکثر حجم ZIP قابل دریافت از تلگرام ۲۰ مگابایت است");
  const settings = await getSettings(env);
  const info = await telegramApiWithToken(settings.bot_token, "getFile", { file_id: document.file_id });
  const filePath = String(info?.result?.file_path || "");
  if (!filePath) throw new Error("مسیر دانلود فایل از تلگرام دریافت نشد");
  const response = await fetch("https://api.telegram.org/file/bot" + settings.bot_token + "/" + filePath);
  if (!response.ok) throw new Error("دانلود ZIP از تلگرام ناموفق بود");
  const contentLength = Number(response.headers.get("content-length") || 0);
  if (contentLength > TELEGRAM_GITHUB_ZIP_MAX_BYTES) throw new Error("حجم ZIP بیشتر از ۲۰ مگابایت است");
  const bytes = new Uint8Array(await response.arrayBuffer());
  if (bytes.byteLength > TELEGRAM_GITHUB_ZIP_MAX_BYTES) throw new Error("حجم ZIP بیشتر از ۲۰ مگابایت است");
  return bytes;
}

async function editGithubUploadProgress(env, chatId, messageId, text, rows = undefined) {
  try {
    const payload = {
      chat_id: chatId,
      message_id: messageId,
      text: "📦 <b>آپلود بروزرسانی به GitHub</b>\n━━━━━━━━━━━━━━\n" + text,
      parse_mode: "HTML",
      disable_web_page_preview: true
    };
    if (rows) payload.reply_markup = { inline_keyboard: rows };
    await telegramApi(env, "editMessageText", payload);
  } catch (error) {
    if (!String(error?.message || "").toLowerCase().includes("message is not modified")) console.error("github upload progress edit failed", error);
  }
}

async function claimGithubZipUpload(env, telegramId, document) {
  const uniqueId = cleanText(document?.file_unique_id || document?.file_id, 300);
  if (!uniqueId) throw new Error("شناسه یکتای فایل از تلگرام دریافت نشد");
  const ts = nowIso();
  const uploadId = id("ghzip");
  const inserted = await env.PASARGUARD_DB.prepare(`
    INSERT OR IGNORE INTO github_zip_uploads(
      id,telegram_id,file_unique_id,file_name,status,created_at,updated_at
    ) VALUES(?,?,?,?, 'processing', ?, ?)
  `).bind(uploadId, String(telegramId), uniqueId, cleanText(document?.file_name || "update.zip", 300), ts, ts).run();
  if (Number(inserted?.meta?.changes || 0) > 0) return { id: uploadId, duplicate: false };
  const row = await env.PASARGUARD_DB.prepare("SELECT * FROM github_zip_uploads WHERE file_unique_id=? LIMIT 1").bind(uniqueId).first();
  if (row?.status === "completed") return { ...row, duplicate: true };
  const stale = !row?.updated_at || Date.now() - new Date(row.updated_at).getTime() > 10 * 60 * 1000;
  if (row?.status === "processing" && !stale) return { ...row, duplicate: true, processing: true };
  await env.PASARGUARD_DB.prepare("UPDATE github_zip_uploads SET status='processing',error=NULL,updated_at=? WHERE id=?").bind(ts, row.id).run();
  return { id: row.id, duplicate: false, retry: true };
}

async function markGithubZipUpload(env, uploadId, values = {}) {
  await env.PASARGUARD_DB.prepare(`
    UPDATE github_zip_uploads SET
      repository=COALESCE(?,repository),branch=COALESCE(?,branch),version=COALESCE(?,version),
      file_count=COALESCE(?,file_count),status=COALESCE(?,status),commit_sha=COALESCE(?,commit_sha),
      commit_url=COALESCE(?,commit_url),error=?,updated_at=?
    WHERE id=?
  `).bind(
    values.repository ?? null, values.branch ?? null, values.version ?? null,
    values.file_count ?? null, values.status ?? null, values.commit_sha ?? null,
    values.commit_url ?? null, values.error ?? null, nowIso(), uploadId
  ).run();
}

async function deployUploadedGithubVersion(env, chatId, version) {
  let lastResult = null;
  let lastError = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt > 0) await new Promise(resolve => setTimeout(resolve, 1800));
    try {
      lastResult = await automaticUpdateTick(env, { source: "telegram_zip_upload", forceCheck: true, intervalSeconds: 5 });
      if (String(lastResult?.latest || "") === String(version) && (lastResult?.deployed || lastResult?.reason === "none" || !lastResult?.update_required)) break;
    } catch (error) { lastError = error; }
  }
  try {
    if (lastResult?.deployed) {
      await telegramApi(env, "sendMessage", {
        chat_id: chatId,
        text: "🚀 <b>استقرار خودکار نسخه " + botEscape(version) + " انجام شد</b>\n\nCore: " + (lastResult.core_deployed ? "✅" : "ℹ️") +
          "\nEdge: " + (lastResult.edge_update?.deployed ? "✅" : (lastResult.edge_update?.error ? "❌" : "ℹ️")) +
          "\nProcessor: " + (lastResult.processor_update?.deployed ? "✅" : (lastResult.processor_update?.error ? "❌" : "ℹ️")),
        parse_mode: "HTML"
      });
    } else if (lastError) {
      await telegramApi(env, "sendMessage", {
        chat_id: chatId,
        text: "⚠️ فایل‌ها در GitHub ثبت شدند، اما استقرار خودکار کامل نشد:\n<code>" + botEscape(cleanText(lastError.message || lastError, 700)) + "</code>",
        parse_mode: "HTML"
      });
    }
  } catch (_) {}
}

async function githubFileMetadata(env, settings, file) {
  const response = await githubFetch(
    env,
    githubContentsApiUrl(settings.github_repo, settings.github_branch || "main", file),
    settings,
    { api: true }
  );
  const data = await response.json();
  return { sha: String(data?.sha || ""), size: Number(data?.size || 0), download_url: data?.download_url || "" };
}

async function githubWorkerMetadata(env, settings) {
  return githubFileMetadata(env, settings, "core/worker.js");
}

async function githubReleaseManifest(env, settings) {
  const repo = settings.github_repo;
  const branch = settings.github_branch || "main";
  const bucket = Math.floor(Date.now() / 5000);
  try {
    const response = await githubFetch(env, githubRawUrl(repo, branch, "release.json", bucket), settings);
    const data = await response.json();
    const latest = String(data?.version || "").trim();
    if (!/^v?\d+(?:\.\d+){1,3}(?:[-+][0-9A-Za-z.-]+)?$/.test(latest)) throw new Error("نسخه release.json معتبر نیست");
    return {
      latest,
      release_id: cleanText(data?.release_id || data?.build_id || latest, 160) || latest,
      files: data?.files && typeof data.files === "object" ? data.files : {},
      hashes: data?.sha256 && typeof data.sha256 === "object" ? data.sha256 : {},
      source: "release.json"
    };
  } catch (error) {
    if (error?.code === "GITHUB_RATE_LIMIT") throw error;
    const versionFile = settings.github_version_file || "version";
    const latest = (await (await githubFetch(env, githubRawUrl(repo, branch, versionFile, bucket), settings)).text()).trim();
    if (!/^v?\d+(?:\.\d+){1,3}(?:[-+][0-9A-Za-z.-]+)?$/.test(latest)) {
      throw new Error("محتوای فایل version معتبر نیست: " + latest.slice(0, 50));
    }
    return { latest, release_id: latest, files: {}, hashes: {}, source: "version" };
  }
}

function isServiceBinding(binding) {
  return Boolean(binding && typeof binding.fetch === "function");
}

function hasEdgeServiceBinding(env) {
  return isServiceBinding(env?.EDGE_WORKER);
}

function hasProcessorServiceBinding(env) {
  return isServiceBinding(env?.PROCESSOR_WORKER);
}

function bluePanelRelatedBindingNames(env) {
  try {
    return Object.keys(env || {}).filter(name => /(?:WORKER|_DB$|BLUEPANEL_ROLE)/i.test(String(name))).sort();
  } catch (_) { return []; }
}

function serviceBindingRuntimeInfo(env, name) {
  const exact = Object.prototype.hasOwnProperty.call(env || {}, name);
  const value = exact ? env[name] : undefined;
  const related = bluePanelRelatedBindingNames(env);
  const normalized = String(name || '').replace(/[^a-z0-9]/gi, '').toLowerCase();
  const similar = related.filter(item => String(item).replace(/[^a-z0-9]/gi, '').toLowerCase() === normalized && item !== name);
  return {
    name,
    exact_key_present: exact,
    value_present: value !== undefined && value !== null,
    value_type: value === null ? 'null' : typeof value,
    fetch_callable: Boolean(value && typeof value.fetch === 'function'),
    constructor_name: value?.constructor?.name || '',
    related_binding_names: related,
    similar_binding_names: similar
  };
}

async function probeServiceBinding(env, name, expectedRole, paths, hop = 'core-diagnostics') {
  const runtime = serviceBindingRuntimeInfo(env, name);
  const checkedAt = nowIso();
  const probeId = id('clusterprobe');
  const base = {
    name, expected_role: expectedRole, checked_at: checkedAt, probe_id: probeId,
    runtime, binding_detected: runtime.fetch_callable, reachable: false,
    healthy: false, latency_ms: null, http_status: null, content_type: '',
    response_role: '', response_version: '', response_preview: '', path_used: '',
    error_stage: runtime.fetch_callable ? '' : (runtime.exact_key_present ? 'binding_not_fetchable' : 'binding_missing'),
    error: runtime.fetch_callable ? '' : (runtime.exact_key_present ? `Binding ${name} وجود دارد اما fetch قابل فراخوانی نیست` : `Binding ${name} در Deployment فعال وجود ندارد`)
  };
  if (!runtime.fetch_callable) return base;
  const binding = env[name];
  let last = null;
  for (const path of paths) {
    const started = Date.now();
    try {
      const headers = new Headers({
        'x-bluepanel-service-hop': hop,
        'x-bluepanel-probe-id': probeId,
        'x-bluepanel-source-version': APP_VERSION,
        'accept': 'application/json'
      });
      const request = new Request(`https://${expectedRole.replace('bluepanel-','')}.internal${path}`, { method: 'GET', headers, redirect: 'manual' });
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('مهلت پاسخ Service Binding تمام شد')), 6000));
      const response = await Promise.race([binding.fetch(request), timeout]);
      const raw = await response.text();
      let data = null;
      try { data = raw ? JSON.parse(raw) : {}; } catch (_) {}
      const result = {
        ...base,
        reachable: true,
        latency_ms: Date.now() - started,
        http_status: response.status,
        content_type: response.headers.get('content-type') || '',
        response_role: String(data?.role || response.headers.get('x-bluepanel-role') || ''),
        response_version: String(data?.version || response.headers.get('x-bluepanel-version') || ''),
        response_preview: raw.slice(0, 320),
        path_used: path,
        data: data || undefined
      };
      if (!data) {
        result.error_stage = 'non_json_response';
        result.error = `پاسخ ${name} JSON نیست (HTTP ${response.status})`;
      } else if (result.response_role !== expectedRole) {
        result.error_stage = 'role_mismatch';
        result.error = `Binding ${name} به نقش ${result.response_role || 'نامشخص'} وصل است؛ نقش مورد انتظار ${expectedRole} است`;
      } else if (data.binding_detected === false || data.database_query_ok === false || data.ok === false) {
        result.error_stage = data.database_query_ok === false ? 'target_database_error' : 'target_unhealthy';
        result.error = String(data.error || `Worker مقصد سالم نیست (HTTP ${response.status})`).slice(0, 800);
      } else if (!response.ok) {
        result.error_stage = 'http_error';
        result.error = String(data.error || `HTTP ${response.status}`).slice(0, 800);
      } else {
        result.healthy = true;
        result.error_stage = '';
        result.error = '';
      }
      if (response.status !== 404 || result.response_role === expectedRole) return result;
      last = result;
    } catch (error) {
      last = {
        ...base,
        latency_ms: Date.now() - started,
        path_used: path,
        error_stage: String(error?.message || '').includes('مهلت') ? 'timeout' : 'fetch_failed',
        error: cleanText(error?.message || error, 800)
      };
    }
  }
  return last || base;
}

function clusterSuggestionForProbe(probe, sourceLabel, targetLabel) {
  if (!probe) return '';
  if (!probe.runtime?.exact_key_present) {
    const similar = probe.runtime?.similar_binding_names || [];
    return similar.length
      ? `${sourceLabel}: نام Binding دقیق نیست؛ ${similar.join(', ')} را به ${probe.name} تغییر دهید و Save and Deploy بزنید.`
      : `${sourceLabel}: Binding ${probe.name} در Deployment فعال نیست؛ آن را به ${targetLabel} وصل کنید و Save and Deploy بزنید.`;
  }
  if (!probe.runtime?.fetch_callable) return `${sourceLabel}: Binding ${probe.name} ساخته شده اما در Runtime قابل فراخوانی نیست؛ Binding را حذف و دوباره ایجاد و Deploy کنید.`;
  if (probe.error_stage === 'role_mismatch') return `${sourceLabel}: مقصد Binding ${probe.name} اشتباه است؛ آن را به ${targetLabel} وصل کنید.`;
  if (probe.error_stage === 'target_database_error') return `${targetLabel}: دیتابیس مخصوص نقش مقصد متصل نیست یا Query سلامت خطا دارد.`;
  if (probe.error_stage === 'timeout' || probe.error_stage === 'fetch_failed') return `${sourceLabel} → ${targetLabel}: درخواست داخلی نرسید؛ Deployment مقصد و Service Binding را بررسی کنید.`;
  if (probe.error_stage === 'non_json_response' || probe.error_stage === 'http_error') return `${targetLabel}: کد worker.js یا نسخه فعال مقصد با کلاستر هماهنگ نیست.`;
  return probe.error ? `${sourceLabel} → ${targetLabel}: ${probe.error}` : '';
}

async function inspectEdgeServiceBinding(env) {
  const probe = await probeServiceBinding(env, 'EDGE_WORKER', 'bluepanel-edge', [
    '/__bluepanel/service/edge-local-health',
    '/__bluepanel/service/edge-health'
  ]);
  if (!probe.runtime?.fetch_callable) {
    return { binding_detected: false, connected: false, mode: 'service_binding', status: 'disconnected', error: probe.error, probe, diagnostics: { core_to_edge: probe } };
  }
  const data = probe.data || {};
  const roleOk = String(data.role || probe.response_role || '') === 'bluepanel-edge';
  const dbOk = data.database_query_ok !== false && data.binding_detected !== false;
  const coreOk = data.core_binding_detected === true;
  const processorOk = data.processor_binding_detected === true;
  const connected = Boolean(probe.reachable && roleOk && dbOk && coreOk && processorOk);
  const error = connected ? '' : cleanText(
    probe.error || data.error || data.last_core_error ||
    (!roleOk ? 'Binding EDGE_WORKER به Worker دوم BluePanel متصل نیست' :
      !dbOk ? 'دیتابیس EDGE_DB روی Worker دوم سالم نیست' :
      !coreOk ? 'مسیر Worker دوم به Worker مرکزی سالم نیست' :
      !processorOk ? 'مسیر Worker دوم به Worker سوم سالم نیست' : 'اتصال Worker دوم ناقص است'), 800);
  return {
    ...data,
    binding_detected: true,
    connected,
    mode: 'service_binding',
    status: connected ? 'connected' : (probe.reachable ? 'partial' : 'failed'),
    error,
    probe,
    diagnostics: {
      core_to_edge: probe,
      edge_to_core: data.core_probe || null,
      edge_to_processor: data.processor_probe || null,
      runtime_bindings: data.runtime_bindings || null,
      checked_at: data.checked_at || probe.checked_at || nowIso()
    }
  };
}

async function inspectProcessorServiceBinding(env) {
  const probe = await probeServiceBinding(env, 'PROCESSOR_WORKER', 'bluepanel-processor', [
    '/__bluepanel/service/processor-local-health',
    '/__bluepanel/service/processor-health'
  ]);
  if (!probe.runtime?.fetch_callable) {
    return { binding_detected: false, connected: false, mode: 'service_binding', status: 'disconnected', error: probe.error, probe, diagnostics: { core_to_processor: probe } };
  }
  const data = probe.data || {};
  const roleOk = String(data.role || probe.response_role || '') === 'bluepanel-processor';
  const dbOk = data.database_query_ok !== false && data.binding_detected !== false;
  const coreOk = data.core_binding_detected === true;
  const edgeOk = data.edge_binding_detected === true;
  const connected = Boolean(probe.reachable && roleOk && dbOk && coreOk && edgeOk);
  const error = connected ? '' : cleanText(
    probe.error || data.error || data.last_error ||
    (!roleOk ? 'Binding PROCESSOR_WORKER به Worker سوم BluePanel متصل نیست' :
      !dbOk ? 'دیتابیس PROCESSOR_DB روی Worker سوم سالم نیست' :
      !coreOk ? 'مسیر Worker سوم به Worker مرکزی سالم نیست' :
      !edgeOk ? 'مسیر Worker سوم به Worker دوم سالم نیست' : 'اتصال Worker سوم ناقص است'), 800);
  return {
    ...data,
    binding_detected: true,
    connected,
    mode: 'service_binding',
    status: connected ? 'connected' : (probe.reachable ? 'partial' : 'failed'),
    error,
    probe,
    diagnostics: {
      core_to_processor: probe,
      processor_to_core: data.core_probe || null,
      processor_to_edge: data.edge_probe || null,
      runtime_bindings: data.runtime_bindings || null,
      checked_at: data.checked_at || probe.checked_at || nowIso()
    }
  };
}

async function inspectThreeWorkerCluster(env) {
  const started = Date.now();
  let coreDatabaseOk = false;
  let coreDatabaseError = '';
  try {
    if (!env.PASARGUARD_DB) throw new Error('PASARGUARD_DB متصل نیست');
    await env.PASARGUARD_DB.prepare('SELECT 1 AS ok').first();
    coreDatabaseOk = true;
  } catch (error) { coreDatabaseError = cleanText(error?.message || error, 800); }
  const [edge, processor] = await Promise.all([
    inspectEdgeServiceBinding(env),
    inspectProcessorServiceBinding(env)
  ]);
  const checks = [
    { id: 'core_db', label: 'دیتابیس مرکزی', ok: coreDatabaseOk, detail: coreDatabaseOk ? 'PASARGUARD_DB سالم است' : coreDatabaseError },
    { id: 'core_to_edge', label: 'مرکز → Worker دوم', ok: edge.probe?.healthy === true, detail: edge.probe?.error || `HTTP ${edge.probe?.http_status ?? '—'} · ${edge.probe?.latency_ms ?? '—'}ms` },
    { id: 'edge_db', label: 'دیتابیس Worker دوم', ok: edge.database_query_ok !== false && edge.binding_detected === true, detail: edge.database_query_ok === false ? 'EDGE_DB خطا دارد' : 'EDGE_DB سالم است' },
    { id: 'edge_to_core', label: 'Worker دوم → مرکز', ok: edge.core_ok === true, detail: edge.core_probe?.error || edge.diagnostics?.edge_to_core?.error || 'بررسی شد' },
    { id: 'edge_to_processor', label: 'Worker دوم → Worker سوم', ok: edge.processor_ok === true, detail: edge.processor_probe?.error || edge.diagnostics?.edge_to_processor?.error || 'بررسی شد' },
    { id: 'core_to_processor', label: 'مرکز → Worker سوم', ok: processor.probe?.healthy === true, detail: processor.probe?.error || `HTTP ${processor.probe?.http_status ?? '—'} · ${processor.probe?.latency_ms ?? '—'}ms` },
    { id: 'processor_db', label: 'دیتابیس Worker سوم', ok: processor.database_query_ok !== false && processor.binding_detected === true, detail: processor.database_query_ok === false ? 'PROCESSOR_DB خطا دارد' : 'PROCESSOR_DB سالم است' },
    { id: 'processor_to_core', label: 'Worker سوم → مرکز', ok: processor.core_ok === true, detail: processor.core_probe?.error || processor.diagnostics?.processor_to_core?.error || 'بررسی شد' },
    { id: 'processor_to_edge', label: 'Worker سوم → Worker دوم', ok: processor.edge_ok === true, detail: processor.edge_probe?.error || processor.diagnostics?.processor_to_edge?.error || 'بررسی شد' }
  ];
  const suggestions = [];
  const add = value => { if (value && !suggestions.includes(value)) suggestions.push(value); };
  add(clusterSuggestionForProbe(edge.probe, 'Worker مرکزی', 'Worker دوم'));
  add(clusterSuggestionForProbe(edge.diagnostics?.edge_to_core, 'Worker دوم', 'Worker مرکزی'));
  add(clusterSuggestionForProbe(edge.diagnostics?.edge_to_processor, 'Worker دوم', 'Worker سوم'));
  add(clusterSuggestionForProbe(processor.probe, 'Worker مرکزی', 'Worker سوم'));
  add(clusterSuggestionForProbe(processor.diagnostics?.processor_to_core, 'Worker سوم', 'Worker مرکزی'));
  add(clusterSuggestionForProbe(processor.diagnostics?.processor_to_edge, 'Worker سوم', 'Worker دوم'));
  const failed = checks.filter(item => !item.ok);
  return {
    success: true,
    connected: coreDatabaseOk && edge.connected === true && processor.connected === true,
    status: failed.length ? 'partial' : 'connected',
    version: APP_VERSION,
    checked_at: nowIso(),
    duration_ms: Date.now() - started,
    core: {
      role: 'bluepanel-core', version: APP_VERSION,
      database_query_ok: coreDatabaseOk,
      database_error: coreDatabaseError,
      runtime_bindings: {
        EDGE_WORKER: serviceBindingRuntimeInfo(env, 'EDGE_WORKER'),
        PROCESSOR_WORKER: serviceBindingRuntimeInfo(env, 'PROCESSOR_WORKER')
      }
    },
    edge,
    processor,
    checks,
    failures: failed,
    suggestions
  };
}

async function persistProcessorServiceState(env, live, options = {}) {
  const connected = live?.binding_detected === true && live?.connected === true;
  await setSettings(env, {
    processor_worker_mode: "service_binding",
    processor_worker_enabled: connected ? "true" : "false",
    processor_worker_manual_disabled: options.enable === false ? "true" : "false",
    processor_worker_status: options.enable === false ? "disconnected" : (live?.status || (connected ? "connected" : "failed")),
    processor_worker_script_name: cleanText(live?.script_name || "", 180),
    processor_worker_last_check_at: nowIso(),
    processor_worker_last_error: options.enable === false ? "" : cleanText(live?.error || "", 800),
    processor_worker_last_version: cleanText(live?.version || "", 80)
  });
  return connected;
}

async function persistEdgeServiceState(env, live, options = {}) {
  const connected = live?.binding_detected === true && live?.connected === true;
  await setSettings(env, {
    edge_worker_mode: "service_binding",
    edge_worker_enabled: connected ? "true" : "false",
    edge_worker_manual_disabled: options.enable === false ? "true" : "false",
    edge_worker_url: "",
    edge_worker_api_key: "",
    edge_worker_status: options.enable === false ? "disconnected" : (live?.status || (connected ? "connected" : "failed")),
    edge_worker_script_name: cleanText(live?.script_name || "", 180),
    edge_worker_last_check_at: nowIso(),
    edge_worker_last_error: options.enable === false ? "" : cleanText(live?.error || "", 800),
    edge_worker_last_version: cleanText(live?.version || "", 80),
    github_edge_worker_file: "edge/worker.js"
  });
  return connected;
}

async function resolveEdgeScriptNameFromCoreBinding(settings) {
  if (settings.edge_worker_script_name) return settings.edge_worker_script_name;
  if (!settings.cf_account_id || !settings.cf_api_token || !settings.cf_worker_name) return "";
  try {
    const url = "https://api.cloudflare.com/client/v4/accounts/" + settings.cf_account_id + "/workers/scripts/" + encodeURIComponent(settings.cf_worker_name) + "/settings";
    const response = await fetch(url, { headers: { authorization: "Bearer " + settings.cf_api_token } });
    const data = await response.json().catch(() => ({}));
    const bindings = data?.result?.bindings || [];
    const binding = bindings.find(item => String(item?.name || item?.binding || "") === "EDGE_WORKER");
    return cleanText(binding?.service || binding?.service_name || binding?.script_name || binding?.namespace || "", 180);
  } catch (_) {
    return "";
  }
}

async function resolveProcessorScriptNameFromCoreBinding(settings) {
  if (settings.processor_worker_script_name) return settings.processor_worker_script_name;
  if (!settings.cf_account_id || !settings.cf_api_token || !settings.cf_worker_name) return "";
  try {
    const url = "https://api.cloudflare.com/client/v4/accounts/" + settings.cf_account_id + "/workers/scripts/" + encodeURIComponent(settings.cf_worker_name) + "/settings";
    const response = await fetch(url, { headers: { authorization: "Bearer " + settings.cf_api_token } });
    const data = await response.json().catch(() => ({}));
    const bindings = data?.result?.bindings || [];
    const binding = bindings.find(item => String(item?.name || item?.binding || "") === "PROCESSOR_WORKER");
    return cleanText(binding?.service || binding?.service_name || binding?.script_name || binding?.namespace || "", 180);
  } catch (_) {
    return "";
  }
}

async function configureResellerRoutingOnly(env, bot, fallbackOrigin = "") {
  const settings = await getSettings(env);
  const publicOrigin = resellerBotOrigin(settings, fallbackOrigin);
  const token = await resellerBotToken(env, bot);
  const webhookUrl = publicOrigin + "/sales-bot/" + encodeURIComponent(bot.id) + "/webhook";
  const miniAppUrl = publicOrigin + "/sales-app/" + encodeURIComponent(bot.id);
  await Promise.all([
    telegramApiWithToken(token, "setWebhook", { url: webhookUrl, secret_token: bot.webhook_secret, allowed_updates: ["message", "callback_query"], drop_pending_updates: false }),
    telegramApiWithToken(token, "setChatMenuButton", { menu_button: { type: "web_app", text: "📱 مینی‌اپ", web_app: { url: miniAppUrl } } }).catch(() => null),
    telegramApiWithToken(token, "setMyCommands", {
      scope: { type: "all_group_chats" },
      commands: [
        { command: "setup_reports", description: "ساخت موضوع‌های گروه گزارش این ربات" },
        { command: "reports_status", description: "نمایش وضعیت گروه گزارش" },
        { command: "reset_reports", description: "بازسازی موضوع‌های گزارش" },
        { command: "disable_reports", description: "توقف ارسال گزارش به گروه" }
      ]
    }).catch(() => null)
  ]);
  return { webhook_url: webhookUrl, miniapp_url: miniAppUrl };
}

async function reconfigureAllResellerBots(env, fallbackOrigin = "", limit = 500) {
  const rows = await env.PASARGUARD_DB.prepare("SELECT id FROM reseller_bots ORDER BY updated_at DESC LIMIT ?").bind(Math.max(1, Math.min(1000, Number(limit || 500)))).all();
  const ids = (rows.results || []).map(x => x.id);
  let configured = 0, failed = 0;
  const errors = [];
  for (let i = 0; i < ids.length; i += 10) {
    const chunk = ids.slice(i, i + 10);
    const results = await Promise.all(chunk.map(async id => {
      try { const bot = await getResellerBotById(env, id); if (!bot) throw new Error("ربات پیدا نشد"); await configureResellerRoutingOnly(env, bot, fallbackOrigin); return { ok: true }; }
      catch (error) { return { ok: false, id, error: cleanText(error?.message || error, 300) }; }
    }));
    for (const item of results) { if (item.ok) configured++; else { failed++; if (errors.length < 12) errors.push(item); } }
  }
  return { total: ids.length, configured, failed, errors };
}

async function verifyEdgeCoreRequest(request, env) {
  await ensureDb(env);
  const settings = await getSettings(env);
  const auth = String(request.headers.get("authorization") || "");
  const key = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  if (!settings.edge_worker_api_key || !constantTimeTextEqual(key, settings.edge_worker_api_key)) return fail("API Key ورکر دوم معتبر نیست", 401, "EDGE_UNAUTHORIZED");
  const body = await parseBody(request);
  const edgeUrl = normalizeWorkerPublicUrl(body.edge_url || settings.edge_worker_url);
  if (settings.edge_worker_url && edgeUrl !== normalizeWorkerPublicUrl(settings.edge_worker_url)) return fail("آدرس ورکر دوم با تنظیمات مرکزی تطابق ندارد", 409, "EDGE_URL_MISMATCH");
  return json({ success: true, role: "bluepanel-core", version: APP_VERSION, core_url: new URL(request.url).origin, edge_url: edgeUrl });
}

async function deployEdgeWorkerFromGithub(env, force = false, targetVersion = "") {
  const settings = await getSettings(env);
  if (!hasEdgeServiceBinding(env)) return { skipped: true, reason: "edge_service_binding_missing" };
  if (!settings.cf_account_id || !settings.cf_api_token) return { skipped: true, reason: "cloudflare_credentials_required" };
  const scriptName = await resolveEdgeScriptNameFromCoreBinding(settings);
  if (!scriptName) return { skipped: true, reason: "edge_script_name_not_detected", hint: "Binding مرکزی باید دقیقاً EDGE_WORKER نام داشته باشد" };
  const file = "edge/worker.js";
  const code = await (await githubFetch(env, githubRawUrl(settings.github_repo, settings.github_branch || "main", file, true), settings)).text();
  if (!code.includes("export default") || !code.includes("BLUEPANEL_EDGE_WORKER")) throw new Error("فایل edge/worker.js معتبر نیست");
  const codeSha = await sha256Hex(code);
  const detectedVersion = (code.match(/const\s+(?:APP_VERSION|EDGE_VERSION|BLUEPANEL_EDGE_VERSION)\s*=\s*["']([^"']+)["']/) || [])[1] || "";
  const deployedVersion = cleanText(targetVersion || detectedVersion || APP_VERSION, 80);
  if (!force && codeSha && codeSha === String(settings.edge_worker_last_sha || "") && (!deployedVersion || deployedVersion === String(settings.edge_worker_last_version || ""))) {
    return { skipped: true, reason: "up_to_date", sha: codeSha, version: settings.edge_worker_last_version || deployedVersion };
  }
  const apiBase = "https://api.cloudflare.com/client/v4/accounts/" + settings.cf_account_id + "/workers/scripts/" + encodeURIComponent(scriptName);
  let keepBindings = [];
  try {
    const r = await fetch(apiBase + "/settings", { headers: { authorization: "Bearer " + settings.cf_api_token } });
    const current = await r.json();
    keepBindings = Array.from(new Set((current?.result?.bindings || []).map(x => x.type).filter(Boolean)));
  } catch (_) {}
  const metadata = { main_module: "worker.js", compatibility_date: "2026-06-01", keep_bindings: keepBindings, annotations: { "workers/message": "BluePanel split Edge auto-update " + deployedVersion, "workers/tag": "bluepanel-edge-update" } };
  const form = new FormData();
  form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  form.append("worker.js", new Blob([code], { type: "application/javascript+module" }), "worker.js");
  const response = await fetch(apiBase + "?bindings_inherit=strict", { method: "PUT", headers: { authorization: "Bearer " + settings.cf_api_token }, body: form });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.success === false) throw new Error(data?.errors?.[0]?.message || "Cloudflare Edge deploy failed");
  await setSettings(env, { edge_worker_script_name: scriptName, edge_worker_last_sha: codeSha, edge_worker_last_version: deployedVersion, edge_worker_last_deployed_at: nowIso(), edge_worker_last_error: "", github_edge_worker_file: file });
  return { deployed: true, sha: codeSha, script_name: scriptName, version: deployedVersion };
}

async function deployProcessorWorkerFromGithub(env, force = false, targetVersion = "") {
  const settings = await getSettings(env);
  if (!hasProcessorServiceBinding(env)) return { skipped: true, reason: "processor_service_binding_missing" };
  if (!settings.cf_account_id || !settings.cf_api_token) return { skipped: true, reason: "cloudflare_credentials_required" };
  const scriptName = await resolveProcessorScriptNameFromCoreBinding(settings);
  if (!scriptName) return { skipped: true, reason: "processor_script_name_not_detected", hint: "Binding مرکزی باید دقیقاً PROCESSOR_WORKER نام داشته باشد" };
  const file = "processor/worker.js";
  const workerCode = await (await githubFetch(env, githubRawUrl(settings.github_repo, settings.github_branch || "main", file, true), settings)).text();
  if (!workerCode.includes("export default") || !workerCode.includes("BLUEPANEL_PROCESSOR_WORKER")) throw new Error("فایل processor/worker.js معتبر نیست");
  const codeSha = await sha256Hex(workerCode);
  const detectedVersion = (workerCode.match(/const\s+(?:APP_VERSION|PROCESSOR_VERSION|BLUEPANEL_PROCESSOR_VERSION)\s*=\s*["']([^"']+)["']/) || [])[1] || "";
  const deployedVersion = cleanText(targetVersion || detectedVersion || APP_VERSION, 80);
  if (!force && codeSha && codeSha === String(settings.processor_worker_last_sha || "") && (!deployedVersion || deployedVersion === String(settings.processor_worker_last_version || ""))) {
    return { skipped: true, reason: "up_to_date", sha: codeSha, version: settings.processor_worker_last_version || deployedVersion };
  }
  const apiBase = "https://api.cloudflare.com/client/v4/accounts/" + settings.cf_account_id + "/workers/scripts/" + encodeURIComponent(scriptName);
  let keepBindings = [];
  try {
    const r = await fetch(apiBase + "/settings", { headers: { authorization: "Bearer " + settings.cf_api_token } });
    const current = await r.json();
    keepBindings = Array.from(new Set((current?.result?.bindings || []).map(x => x.type).filter(Boolean)));
  } catch (_) {}
  const metadata = { main_module: "worker.js", compatibility_date: "2026-06-01", keep_bindings: keepBindings, annotations: { "workers/message": "BluePanel split Processor auto-update " + deployedVersion, "workers/tag": "bluepanel-processor-update" } };
  const form = new FormData();
  form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  form.append("worker.js", new Blob([workerCode], { type: "application/javascript+module" }), "worker.js");
  const response = await fetch(apiBase + "?bindings_inherit=strict", { method: "PUT", headers: { authorization: "Bearer " + settings.cf_api_token }, body: form });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.success === false) throw new Error(data?.errors?.[0]?.message || "Cloudflare Processor deploy failed");
  await setSettings(env, { processor_worker_script_name: scriptName, processor_worker_last_sha: codeSha, processor_worker_last_version: deployedVersion, processor_worker_last_deployed_at: nowIso(), processor_worker_last_error: "", github_processor_worker_file: file });
  return { deployed: true, sha: codeSha, script_name: scriptName, version: deployedVersion };
}

async function checkUpdate(env) {
  const settings = await getSettings(env);
  const repo = settings.github_repo;
  if (!repo) throw new Error("github_repo تنظیم نشده است");
  const manifest = await githubReleaseManifest(env, settings);
  const latest = manifest.latest;
  const versionOrder = semverCompare(APP_VERSION, latest);
  const versionAvailable = versionOrder < 0;
  const knownReleaseId = String(settings.auto_update_last_release_id || "");
  const buildAvailable = Boolean(versionOrder === 0 && knownReleaseId && manifest.release_id && manifest.release_id !== knownReleaseId);
  const canSyncRemote = versionOrder <= 0;
  const edgeSyncRequired = Boolean(canSyncRemote && hasEdgeServiceBinding(env) && String(settings.edge_worker_last_version || "") !== latest);
  const processorSyncRequired = Boolean(canSyncRemote && hasProcessorServiceBinding(env) && String(settings.processor_worker_last_version || "") !== latest);
  const clusterSyncRequired = edgeSyncRequired || processorSyncRequired;
  const available = versionAvailable || buildAvailable;
  return {
    current: APP_VERSION,
    latest,
    available,
    update_required: available || clusterSyncRequired,
    reason: versionAvailable ? "version" : (buildAvailable ? "build" : (clusterSyncRequired ? "cluster_sync" : (versionOrder > 0 ? "remote_older" : "none"))),
    release_id: manifest.release_id,
    known_release_id: knownReleaseId,
    manifest_source: manifest.source,
    worker_sha: cleanText(manifest.hashes?.core || "", 128),
    known_worker_sha: String(settings.auto_update_last_worker_sha || ""),
    edge_sync_required: edgeSyncRequired,
    processor_sync_required: processorSyncRequired,
    cluster_sync_required: clusterSyncRequired
  };
}

async function deploySelfFromGithub(env, force = false, prechecked = null) {
  const settings = await getSettings(env);
  if (!settings.cf_account_id || !settings.cf_api_token || !settings.cf_worker_name) {
    throw new Error("اطلاعات Cloudflare برای آپدیت در پنل مدیریت کامل نشده است");
  }
  const check = prechecked || await checkUpdate(env);
  if (!check.available && !force) return { ...check, deployed: false };
  const repo = settings.github_repo;
  const branch = settings.github_branch || "main";
  const workerFile = "core/worker.js";
  const code = await (await githubFetch(env, githubRawUrl(repo, branch, workerFile, true), settings)).text();
  if (!code.includes("export default") || !code.includes("BLUEPANEL_CORE_WORKER")) throw new Error("فایل core/worker.js معتبر نیست");
  const codeSha = await sha256Hex(code);

  const apiBase = "https://api.cloudflare.com/client/v4/accounts/" + settings.cf_account_id + "/workers/scripts/" + encodeURIComponent(settings.cf_worker_name);
  let keepBindings = [];
  try {
    const settingsResponse = await fetch(apiBase + "/settings", {
      headers: { authorization: "Bearer " + settings.cf_api_token }
    });
    const current = await settingsResponse.json();
    keepBindings = Array.from(new Set((current?.result?.bindings || []).map(x => x.type).filter(Boolean)));
  } catch (_) {}

  const metadata = {
    main_module: "worker.js",
    compatibility_date: "2026-06-01",
    keep_bindings: keepBindings,
    annotations: {
      "workers/message": "GitHub auto-update to " + check.latest,
      "workers/tag": "github-auto-update"
    }
  };
  const form = new FormData();
  form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  form.append("worker.js", new Blob([code], { type: "application/javascript+module" }), "worker.js");
  const response = await fetch(apiBase + "?bindings_inherit=strict", {
    method: "PUT",
    headers: { authorization: "Bearer " + settings.cf_api_token },
    body: form
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.success === false) {
    throw new Error(data?.errors?.[0]?.message || "Cloudflare deploy failed");
  }
  await setSettings(env, {
    auto_update_last_worker_sha: codeSha,
    auto_update_last_version: check.latest || APP_VERSION,
    auto_update_last_release_id: check.release_id || check.latest || APP_VERSION,
    auto_update_last_status: "deployed",
    auto_update_last_error: ""
  });
  return { ...check, worker_sha: codeSha, deployed: true };
}

async function deployClusterFromGithub(env, force = false, prechecked = null) {
  const check = prechecked || await checkUpdate(env);
  let core = { ...check, deployed: false };
  if (check.available || force) core = await deploySelfFromGithub(env, force, check);
  const shouldSync = force || check.available || check.cluster_sync_required;
  let edge_update = { skipped: true, reason: "no_cluster_update_required" };
  let processor_update = { skipped: true, reason: "no_cluster_update_required" };
  if (shouldSync) {
    try {
      edge_update = await deployEdgeWorkerFromGithub(env, force, check.latest || APP_VERSION);
    } catch (error) {
      await setSettings(env, { edge_worker_last_error: cleanText(error?.message || error, 800) });
      edge_update = { deployed: false, error: error?.message || String(error) };
    }
    try {
      processor_update = await deployProcessorWorkerFromGithub(env, force, check.latest || APP_VERSION);
    } catch (error) {
      await setSettings(env, { processor_worker_last_error: cleanText(error?.message || error, 800) });
      processor_update = { deployed: false, error: error?.message || String(error) };
    }
  }
  const deployed = Boolean(core.deployed || edge_update?.deployed || processor_update?.deployed);
  return { ...check, ...core, deployed, core_deployed: Boolean(core.deployed), edge_update, processor_update };
}

function autoUpdateConfigurationReady(settings) {
  return Boolean(
    settings.install_completed === "true" &&
    settings.github_repo && settings.github_branch && settings.github_version_file &&
    settings.cf_account_id && settings.cf_api_token && settings.cf_worker_name
  );
}

async function claimAutomaticUpdateCheck(env, intervalSeconds, forceCheck = false) {
  const now = Math.floor(Date.now() / 1000);
  if (forceCheck) {
    await setSettings(env, { auto_update_last_check_epoch: String(now) });
    return true;
  }
  const cutoff = now - Math.max(5, Number(intervalSeconds || 5));
  const result = await env.PASARGUARD_DB.prepare(`
    INSERT INTO app_settings(key, value, updated_at)
    VALUES('auto_update_last_check_epoch', ?, ?)
    ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at
    WHERE CAST(app_settings.value AS INTEGER) <= ?
  `).bind(String(now), nowIso(), String(cutoff)).run();
  return Number(result?.meta?.changes || 0) > 0;
}

async function automaticUpdateTick(env, options = {}) {
  await ensureDb(env);
  const source = options.source || "request";
  const settings = await getSettings(env);
  const intervalSeconds = Math.max(5, Math.min(86400, Number(options.intervalSeconds ?? settings.auto_update_interval_seconds ?? 5)));
  const claimed = await claimAutomaticUpdateCheck(env, intervalSeconds, options.forceCheck === true);
  if (!claimed) return { checked: false, deployed: false, reason: "throttled" };

  if (!autoUpdateConfigurationReady(settings)) {
    await setSettings(env, {
      auto_update: "true",
      auto_update_last_status: "configuration_required",
      auto_update_last_source: source,
      auto_update_last_error: "اطلاعات GitHub یا Cloudflare کامل نیست"
    });
    return { checked: false, deployed: false, reason: "configuration_required" };
  }

  try {
    const check = await checkUpdate(env);
    const result = { ...(await deployClusterFromGithub(env, false, check)), checked: true };
    await setSettings(env, {
      auto_update: "true",
      auto_update_last_status: result.deployed ? "deployed" : "up_to_date",
      auto_update_last_version: result.latest || APP_VERSION,
      auto_update_last_release_id: result.release_id || result.latest || APP_VERSION,
      auto_update_last_worker_sha: result.worker_sha || settings.auto_update_last_worker_sha || "",
      auto_update_last_error: "",
      auto_update_last_source: source
    });
    try { await audit(env, null, "automatic_update_" + (result.deployed ? "deployed" : "checked"), { source, ...result }); } catch (_) {}
    return result;
  } catch (error) {
    const retryDelay = error?.code === "GITHUB_RATE_LIMIT" ? 300 : Math.max(15, Math.min(300, intervalSeconds));
    const retryEpoch = Math.floor(Date.now() / 1000) - intervalSeconds + retryDelay;
    await setSettings(env, {
      auto_update: "true",
      auto_update_last_check_epoch: String(retryEpoch),
      auto_update_last_status: "failed",
      auto_update_last_error: String(error?.message || error).slice(0, 1000),
      auto_update_last_source: source
    });
    try { await audit(env, null, "automatic_update_failed", { source, code: error?.code || "", message: error?.message || String(error) }); } catch (_) {}
    throw error;
  }
}

async function updateAction(request, env, deploy) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;
  try {
    const body = await parseBody(request);
    const result = deploy ? await deployClusterFromGithub(env, body.force === true) : await checkUpdate(env);
    await audit(env, auth.user.id, deploy ? "github_update_deploy" : "github_update_check", result);
    const message = deploy
      ? (result.deployed ? "نسخه جدید روی کلاستر نصب شد" : "تغییری برای نصب وجود نداشت")
      : (result.update_required ? "نسخه یا همگام‌سازی جدید پیدا شد" : "آخرین نسخه نصب است");
    return json({ success: true, message, result });
  } catch (error) {
    const status = error?.code === "GITHUB_RATE_LIMIT" ? 429 : 502;
    return fail(error.message, status, error?.code || "UPDATE_FAILED");
  }
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

function botParseInteger(value) {
  const normalized = String(value ?? "")
    .replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)))
    .replace(/[,،\s_]/g, "")
    .replace(/[^0-9-]/g, "");
  const parsed = Number.parseInt(normalized, 10);
  return Number.isFinite(parsed) ? parsed : NaN;
}

function normalizeTelegramAdminIds(value) {
  const raw = String(value || "")
    .replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)))
    .trim();
  const parts = raw.split(/[,،\s]+/).map(x => x.trim()).filter(Boolean);
  if (!parts.length) throw new Error("حداقل یک Telegram ID مدیر لازم است");
  if (parts.length > 20) throw new Error("حداکثر ۲۰ شناسه مدیر قابل ثبت است");
  for (const item of parts) {
    if (!/^\d{3,20}$/.test(item)) throw new Error("Telegram ID نامعتبر است: " + item);
  }
  return Array.from(new Set(parts)).join(",");
}

function botSupportUrl(settings) {
  const raw = String(settings.support_username || settings.pasarguard_support_url || "").trim();
  if (!raw) return "";
  if (/^https:\/\//i.test(raw)) return raw;
  return "https://t.me/" + raw.replace(/^@/, "");
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



function reportScopeKey(botId = "") {
  return botId ? "reseller:" + String(botId) : "central";
}

function reportTopicDefinition(scopeType, topicKey) {
  const aliases = Object.freeze({
    services: "service_purchases",
    service: "service_purchases",
    security: "errors",
    error: "errors",
    trials: "trial_accounts",
    trial: "trial_accounts",
    daily: "nightly",
    backup: "backups",
    announcement: "announcements",
    commission: "commissions",
    finance: "payments",
    purchases: "orders",
    other: "misc"
  });
  const normalizedKey = aliases[String(topicKey || "")] || String(topicKey || "overview");
  const list = scopeType === "central" ? CENTRAL_REPORT_TOPICS : RESELLER_REPORT_TOPICS;
  return list.find(item => item.key === normalizedKey) || list[0];
}

function reportCommandMatch(text, command) {
  return new RegExp("^/" + command + "(?:@\\w+)?(?:\\s+.*)?$", "i").test(String(text || "").trim());
}

function telegramMemberIsAdmin(member) {
  const status = String(member?.result?.status || member?.status || "");
  return status === "creator" || status === "administrator";
}

async function validateTelegramForum(apiCall, chatId, actorTelegramId) {
  const [chatData, meData, actorData] = await Promise.all([
    apiCall("getChat", { chat_id: chatId }),
    apiCall("getMe", {}),
    apiCall("getChatMember", { chat_id: chatId, user_id: String(actorTelegramId) })
  ]);
  const chat = chatData?.result || chatData || {};
  if (String(chat.type || "") !== "supergroup" || chat.is_forum !== true) {
    throw new Error("این گروه باید Supergroup باشد و Topics آن از تنظیمات تلگرام فعال شده باشد");
  }
  if (!telegramMemberIsAdmin(actorData)) throw new Error("فقط مدیر همین گروه می‌تواند بخش گزارش‌ها را راه‌اندازی کند");
  const botId = meData?.result?.id || meData?.id;
  const botMember = await apiCall("getChatMember", { chat_id: chatId, user_id: String(botId) });
  if (!telegramMemberIsAdmin(botMember)) throw new Error("ابتدا ربات را در گروه ادمین کنید");
  const member = botMember?.result || botMember || {};
  if (String(member.status || "") === "administrator" && member.can_manage_topics === false) {
    throw new Error("دسترسی Manage Topics را برای ربات فعال کنید");
  }
  return chat;
}

async function configureReportForum(env, options) {
  const scopeType = options.scopeType === "central" ? "central" : "reseller";
  const scopeKey = scopeType === "central" ? "central" : reportScopeKey(options.botId);
  const definitions = scopeType === "central" ? CENTRAL_REPORT_TOPICS : RESELLER_REPORT_TOPICS;
  const chat = await validateTelegramForum(options.apiCall, options.chatId, options.actorTelegramId);
  const ts = nowIso();
  await env.PASARGUARD_DB.prepare(`
    INSERT INTO report_forums(scope_key,scope_type,bot_id,chat_id,chat_title,status,setup_by_telegram_id,created_at,updated_at,last_error)
    VALUES(?,?,?,?,?,'active',?,?,?,NULL)
    ON CONFLICT(scope_key) DO UPDATE SET chat_id=excluded.chat_id,chat_title=excluded.chat_title,status='active',
      setup_by_telegram_id=excluded.setup_by_telegram_id,updated_at=excluded.updated_at,last_error=NULL
  `).bind(scopeKey, scopeType, options.botId || null, String(options.chatId), cleanText(chat.title, 180), String(options.actorTelegramId), ts, ts).run();
  const existing = await env.PASARGUARD_DB.prepare("SELECT topic_key,thread_id FROM report_forum_topics WHERE scope_key=?").bind(scopeKey).all();
  const known = new Map((existing.results || []).map(row => [String(row.topic_key), Number(row.thread_id)]));
  const created = [];
  for (const definition of definitions) {
    let threadId = known.get(definition.key) || 0;
    if (threadId) {
      const stored = await env.PASARGUARD_DB.prepare("SELECT title FROM report_forum_topics WHERE scope_key=? AND topic_key=?").bind(scopeKey, definition.key).first();
      if (String(stored?.title || "") !== definition.title) {
        try { await options.apiCall("editForumTopic", { chat_id: String(options.chatId), message_thread_id: threadId, name: definition.title }); }
        catch (error) { if (!/not modified/i.test(String(error?.message || error))) throw error; }
      }
    }
    if (threadId && options.reset === true) {
      let valid = true;
      try {
        await options.apiCall("editForumTopic", { chat_id: String(options.chatId), message_thread_id: threadId, name: definition.title });
      } catch (error) {
        if (!/not modified/i.test(String(error?.message || error))) valid = false;
      }
      if (valid) {
        try { await options.apiCall("reopenForumTopic", { chat_id: String(options.chatId), message_thread_id: threadId }); }
        catch (error) { if (!/not modified|not closed/i.test(String(error?.message || error))) valid = false; }
      }
      if (!valid) {
        await env.PASARGUARD_DB.prepare("DELETE FROM report_forum_topics WHERE scope_key=? AND topic_key=?").bind(scopeKey, definition.key).run();
        threadId = 0;
      }
    }
    if (!threadId) {
      const result = await options.apiCall("createForumTopic", {
        chat_id: String(options.chatId), name: definition.title, icon_color: definition.color
      });
      threadId = Number(result?.result?.message_thread_id || 0);
      if (!threadId) throw new Error("ساخت موضوع «" + definition.title + "» ناموفق بود");
      created.push(definition.key);
    }
    await env.PASARGUARD_DB.prepare(`
      INSERT INTO report_forum_topics(scope_key,topic_key,thread_id,title,created_at,updated_at)
      VALUES(?,?,?,?,?,?) ON CONFLICT(scope_key,topic_key) DO UPDATE SET thread_id=excluded.thread_id,title=excluded.title,updated_at=excluded.updated_at
    `).bind(scopeKey, definition.key, threadId, definition.title, ts, ts).run();
  }
  const overview = await env.PASARGUARD_DB.prepare("SELECT thread_id FROM report_forum_topics WHERE scope_key=? AND topic_key='overview'").bind(scopeKey).first();
  if (overview?.thread_id) {
    await options.apiCall("sendMessage", {
      chat_id: String(options.chatId), message_thread_id: Number(overview.thread_id), parse_mode: "HTML",
      text: scopeType === "central"
        ? "✅ <b>مرکز گزارش جامع فعال شد</b>\nاز این لحظه گزارش‌های ربات مرکزی و همه ربات‌های نماینده به‌صورت تفکیک‌شده در این گروه ثبت می‌شوند."
        : "✅ <b>مرکز گزارش ربات نماینده فعال شد</b>\nاز این لحظه گزارش‌های همین ربات در موضوع‌های جداگانه ثبت می‌شوند."
    });
  }
  return { scopeKey, chat, created, topics: definitions.length };
}

async function reportForumStatus(env, scopeKey) {
  const forum = await env.PASARGUARD_DB.prepare("SELECT * FROM report_forums WHERE scope_key=?").bind(scopeKey).first();
  if (!forum) return null;
  const topics = await env.PASARGUARD_DB.prepare("SELECT topic_key,thread_id,title FROM report_forum_topics WHERE scope_key=? ORDER BY topic_key").bind(scopeKey).all();
  return { forum, topics: topics.results || [] };
}

async function disableReportForum(env, scopeKey) {
  const result = await env.PASARGUARD_DB.prepare("UPDATE report_forums SET status='disabled',updated_at=? WHERE scope_key=?").bind(nowIso(), scopeKey).run();
  return Number(result?.meta?.changes || 0) > 0;
}

async function queueReportEvent(env, botId, topicKey, title, messageHtml, dedupeKey) {
  const ts = nowIso();
  try {
    await env.PASARGUARD_DB.prepare(`
      INSERT OR IGNORE INTO report_outbox(
        id,bot_id,topic_key,title,message_html,dedupe_key,central_status,reseller_status,attempts,next_attempt_at,created_at,updated_at
      ) VALUES(?,?,?,?,?,?,'pending','pending',0,?,?,?)
    `).bind(id("rpt"), botId || null, topicKey, cleanText(title,160), cleanText(messageHtml,3500), cleanText(dedupeKey,220), ts, ts, ts).run();
  } catch (_) {}
}

async function handleCentralReportGroupCommand(env, message, settings) {
  const text = String(message.text || "").trim();
  const isSetup = reportCommandMatch(text, "setup_reports") || reportCommandMatch(text, "reports_setup") || reportCommandMatch(text, "report_setup");
  const isReset = reportCommandMatch(text, "reset_reports");
  const isStatus = reportCommandMatch(text, "reports_status");
  const isDisable = reportCommandMatch(text, "disable_reports");
  if (!isSetup && !isReset && !isStatus && !isDisable) return false;
  if (!isAdminTelegramId(settings, message.from?.id)) throw new Error("این دستور فقط برای مدیران ربات مرکزی است");
  if (isDisable) {
    await disableReportForum(env, "central");
    await telegramApi(env, "sendMessage", { chat_id: message.chat.id, text: "⏸ ارسال گزارش‌های مرکزی به این گروه غیرفعال شد." });
    return true;
  }
  if (isStatus) {
    const status = await reportForumStatus(env, "central");
    const textStatus = status
      ? "📊 <b>وضعیت مرکز گزارش</b>\nگروه: <b>" + botEscape(status.forum.chat_title || status.forum.chat_id) + "</b>\nوضعیت: <b>" + (status.forum.status === "active" ? "فعال" : "غیرفعال") + "</b>\nموضوع‌ها: <b>" + botMoney(status.topics.length) + "</b>"
      : "مرکز گزارش هنوز تنظیم نشده است. در یک گروه Topics دستور /setup_reports را ارسال کنید.";
    await telegramApi(env, "sendMessage", { chat_id: message.chat.id, text: textStatus, parse_mode: "HTML" });
    return true;
  }
  const result = await configureReportForum(env, {
    scopeType: "central", chatId: message.chat.id, actorTelegramId: message.from.id,
    apiCall: (method, body) => telegramApi(env, method, body), reset: isReset
  });
  await telegramApi(env, "sendMessage", {
    chat_id: message.chat.id, parse_mode: "HTML",
    text: "🧵 <b>گروه گزارش مرکزی آماده شد</b>\nموضوع‌های فعال: <b>" + botMoney(result.topics) + "</b>\nگزارش این گروه شامل اطلاعات تجمیعی همه ربات‌های نماینده است."
  });
  return true;
}

const agencyPasarguardTokenCache = new Map();

function normalizeCardNumber(value) {
  return String(value || "").replace(/\D/g, "").slice(0, 19);
}

function maskCardNumber(value) {
  const digits = normalizeCardNumber(value);
  if (digits.length < 8) return digits || "—";
  return digits.slice(0, 4) + " **** **** " + digits.slice(-4);
}

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

function resellerLicenseLabel(bot) {
  const state = resellerLicenseState(bot);
  if (!state.active) return "🔴 منقضی‌شده";
  if (state.remaining_days <= 3) return "🟠 " + botMoney(state.remaining_days) + " روز مانده";
  return "🟢 " + botMoney(state.remaining_days) + " روز مانده";
}

function resellerLicenseExpiryLabel(bot) {
  const state = resellerLicenseState(bot);
  return state.expires_at ? botDate(state.expires_at) : "نامشخص";
}

function resellerRequireActiveLicense(bot) {
  const state = resellerLicenseState(bot);
  if (state.active) return state;
  const error = new Error("اعتبار یک‌ماهه ربات نماینده پایان یافته است؛ مالک ربات باید لایسنس را از ربات مرکزی تمدید کند");
  error.code = "RESELLER_LICENSE_EXPIRED";
  error.license = state;
  throw error;
}

async function renewResellerBotLicense(env, account, bot) {
  if (!bot || Number(bot.user_id) !== Number(account.user.id)) throw new Error("ربات نماینده پیدا نشد");
  const settings = account.settings || await getSettings(env);
  const fee = resellerBotRenewalFee(settings, bot.license_type);
  const current = resellerLicenseState(bot);
  const baseMs = Math.max(Date.now(), current.expires_ms || 0);
  const renewedAt = nowIso();
  const expiresAt = new Date(baseMs + RESELLER_LICENSE_MS).toISOString();
  let charged = false;
  if (fee > 0) {
    const debit = await env.PASARGUARD_DB.prepare("UPDATE users SET wallet_balance=wallet_balance-?,updated_at=? WHERE id=? AND wallet_balance>=?")
      .bind(fee, renewedAt, account.user.id, fee).run();
    if (!Number(debit?.meta?.changes || 0)) throw new Error("موجودی کیف پول برای تمدید لایسنس کافی نیست؛ مبلغ تمدید " + botMoney(fee) + " تومان است");
    charged = true;
  }
  try {
    const result = await env.PASARGUARD_DB.prepare(`
      UPDATE reseller_bots
      SET license_started_at=COALESCE(license_started_at,?),license_expires_at=?,license_last_renewed_at=?,
          license_notice_key=NULL,license_renewal_count=COALESCE(license_renewal_count,0)+1,updated_at=?
      WHERE id=? AND user_id=?
    `).bind(renewedAt, expiresAt, renewedAt, renewedAt, bot.id, account.user.id).run();
    if (!Number(result?.meta?.changes || 0)) throw new Error("تمدید لایسنس انجام نشد");
  } catch (error) {
    if (charged) {
      try { await env.PASARGUARD_DB.prepare("UPDATE users SET wallet_balance=wallet_balance+?,updated_at=? WHERE id=?").bind(fee, nowIso(), account.user.id).run(); } catch (_) {}
    }
    throw error;
  }
  if (fee > 0) {
    const fresh = await env.PASARGUARD_DB.prepare("SELECT wallet_balance FROM users WHERE id=?").bind(account.user.id).first();
    await env.PASARGUARD_DB.prepare(`
      INSERT INTO wallet_ledger(id,user_id,type,amount,balance_after,ref_type,ref_id,description,created_at)
      VALUES(?,?,?,?,?,'reseller_bot_license',?,'تمدید یک‌ماهه لایسنس ربات نماینده',?)
    `).bind(id("led"), account.user.id, "reseller_bot_license_renewal", -fee, Number(fresh?.wallet_balance || 0), bot.id, renewedAt).run();
  }
  await audit(env, account.user.id, "reseller_bot_license_renewed", { botId: bot.id, fee, expiresAt, days: RESELLER_LICENSE_DAYS });
  await queueReportEvent(env, bot.id, "bots", "لایسنس ربات نماینده تمدید شد",
    "ربات: <b>@" + botEscape(bot.bot_username || "-") + "</b>\n" +
    "مالک: <code>" + botEscape(account.user.telegram_id) + "</code>\n" +
    "هزینه: <b>" + botMoney(fee) + " تومان</b>\n" +
    "پایان اعتبار: <b>" + botEscape(botDate(expiresAt)) + "</b>",
    "bot-license-renewed:" + bot.id + ":" + expiresAt);
  return { fee, expiresAt, days: RESELLER_LICENSE_DAYS };
}


async function changeResellerBotLicenseType(env, account, bot, requestedType) {
  if (!bot || Number(bot.user_id) !== Number(account.user.id)) throw new Error("ربات نماینده پیدا نشد");
  if (!resellerHasIndependentPanel(bot)) throw new Error("نوع ربات زیرمجموعه فقط توسط مستر بالادست تعیین می‌شود");
  const requestedRaw = String(requestedType || "").trim().toLowerCase();
  if (!["store", "master"].includes(requestedRaw)) throw new Error("نوع ربات انتخاب‌شده معتبر نیست");
  const currentType = normalizeResellerLicenseType(bot.license_type);
  const targetType = requestedRaw;
  if (currentType === targetType) return { changed: false, fee: 0, licenseType: currentType };

  const settings = account.settings || await getSettings(env);
  if (currentType === "master" && targetType === "store") {
    const child = await env.PASARGUARD_DB.prepare("SELECT COUNT(*) AS count FROM reseller_bots WHERE parent_bot_id=?")
      .bind(bot.id).first();
    if (Number(child?.count || 0) > 0) {
      throw new Error("تا وقتی ربات زیرمجموعه دارید، تغییر نوع مستر به فروشگاهی ممکن نیست؛ ابتدا زیرمجموعه‌ها را تعیین تکلیف کنید");
    }
  }

  const agency = await env.PASARGUARD_DB.prepare("SELECT id,remote_manager_id FROM agencies WHERE id=? AND user_id=?")
    .bind(bot.agency_id, account.user.id).first();
  if (!agency?.remote_manager_id) throw new Error("شناسه مدیر پنل PasarGuard برای تغییر نوع ربات در دسترس نیست");

  const fee = resellerBotTypeChangeFee(settings, currentType, targetType);
  const changedAt = nowIso();
  let roleChanged = false;
  let charged = false;

  try {
    await applyBotLicenseRoleToAgency(env, agency, targetType, account.user.id);
    roleChanged = true;

    if (fee > 0) {
      const debit = await env.PASARGUARD_DB.prepare("UPDATE users SET wallet_balance=wallet_balance-?,updated_at=? WHERE id=? AND wallet_balance>=?")
        .bind(fee, changedAt, account.user.id, fee).run();
      if (!Number(debit?.meta?.changes || 0)) {
        throw new Error("موجودی برای ارتقا کافی نیست؛ هزینه ارتقا " + botMoney(fee) + " تومان است");
      }
      charged = true;
    }

    const updated = await env.PASARGUARD_DB.prepare(`
      UPDATE reseller_bots
      SET license_type=?,downline_sales_enabled=?,bot_version=?,updated_at=?
      WHERE id=? AND user_id=? AND license_type=? AND parent_bot_id IS NULL AND COALESCE(purchase_source,'central')='central'
    `).bind(targetType, targetType === "master" ? 1 : 0, APP_VERSION, changedAt, bot.id, account.user.id, currentType).run();
    if (!Number(updated?.meta?.changes || 0)) throw new Error("نوع ربات تغییر نکرد؛ وضعیت ربات هم‌زمان تغییر کرده است");
  } catch (error) {
    if (charged) {
      try {
        await env.PASARGUARD_DB.prepare("UPDATE users SET wallet_balance=wallet_balance+?,updated_at=? WHERE id=?")
          .bind(fee, nowIso(), account.user.id).run();
      } catch (_) {}
    }
    if (roleChanged) {
      try { await applyBotLicenseRoleToAgency(env, agency, currentType, account.user.id); } catch (_) {}
    }
    throw error;
  }

  if (fee > 0) {
    const fresh = await env.PASARGUARD_DB.prepare("SELECT wallet_balance FROM users WHERE id=?").bind(account.user.id).first();
    await env.PASARGUARD_DB.prepare(`
      INSERT INTO wallet_ledger(id,user_id,type,amount,balance_after,ref_type,ref_id,description,created_at)
      VALUES(?,?,?,?,?,'reseller_bot',?,?,?)
    `).bind(
      id("led"), account.user.id, "reseller_bot_type_upgrade", -fee, Number(fresh?.wallet_balance || 0), bot.id,
      "ارتقای نوع ربات از " + resellerLicenseTypeLabel(currentType) + " به " + resellerLicenseTypeLabel(targetType), changedAt
    ).run();
  }

  await audit(env, account.user.id, "reseller_bot_license_type_changed", {
    botId: bot.id,
    from: currentType,
    to: targetType,
    fee,
    dataPreserved: true
  });
  await queueReportEvent(env, bot.id, "bots", "نوع ربات نماینده تغییر کرد",
    "ربات: <b>@" + botEscape(bot.bot_username || "-") + "</b>\n" +
    "از: <b>" + botEscape(resellerLicenseTypeLabel(currentType)) + "</b>\n" +
    "به: <b>" + botEscape(resellerLicenseTypeLabel(targetType)) + "</b>\n" +
    "هزینه: <b>" + botMoney(fee) + " تومان</b>",
    "bot-type-changed:" + bot.id + ":" + targetType + ":" + changedAt);
  return { changed: true, fee, licenseType: targetType };
}

function normalizeWorkerPublicUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const url = new URL(raw.includes("://") ? raw : "https://" + raw);
  if (url.protocol !== "https:") throw new Error("آدرس Worker باید با HTTPS باشد");
  url.pathname = ""; url.search = ""; url.hash = "";
  return url.origin;
}

function corePublicOrigin(settings, fallbackOrigin = "") {
  const candidates = [fallbackOrigin, settings?.app_url || ""];
  for (const candidate of candidates) {
    try {
      const url = new URL(String(candidate || ""));
      if (url.protocol === "https:" && !url.hostname.endsWith(".internal")) return url.origin;
    } catch (_) {}
  }
  throw new Error("آدرس عمومی Worker مرکزی در تنظیمات ثبت نشده است");
}

function edgeWorkerRoutingEnabled(settings) {
  if (settings?.edge_worker_mode === "service_binding") return settings?.edge_worker_enabled !== "false" && settings?.edge_worker_manual_disabled !== "true";
  return settings?.edge_worker_enabled === "true" && Boolean(settings?.edge_worker_url && settings?.edge_worker_api_key);
}

function resellerBotOrigin(settings, fallbackOrigin = "") {
  // در حالت Service Binding آدرس عمومی همان Worker مرکزی می‌ماند و تقسیم بار
  // کاملاً داخلی انجام می‌شود؛ بنابراین Telegram و پرداخت‌ها به URL جدا نیاز ندارند.
  if (settings?.edge_worker_mode !== "service_binding" && edgeWorkerRoutingEnabled(settings)) {
    try { return normalizeWorkerPublicUrl(settings.edge_worker_url); } catch (_) {}
  }
  return corePublicOrigin(settings, fallbackOrigin);
}

function centralManagementUrl(settings, fallbackOrigin = "") {
  return corePublicOrigin(settings, fallbackOrigin) + "/control";
}

function resellerManagementUrl(bot, settings, fallbackOrigin = "") {
  if (!bot?.id) throw new Error("شناسه ربات نماینده در دسترس نیست");
  return resellerBotOrigin(settings, fallbackOrigin) + "/reseller-control/" + encodeURIComponent(bot.id);
}

function parseJoinChannels(value) {
  if (Array.isArray(value)) return value.slice(0, 10).map(normalizeJoinChannel).filter(Boolean);
  const raw = String(value || "").trim();
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.slice(0, 10).map(normalizeJoinChannel).filter(Boolean);
  } catch (_) {}
  return raw.split(/\r?\n/).map(line => {
    const parts = line.split("|").map(x => x.trim());
    return normalizeJoinChannel({ chat_id: parts[0], title: parts[1], url: parts[2] });
  }).filter(Boolean).slice(0, 10);
}

function normalizeJoinChannel(item) {
  if (typeof item === "string") item = { chat_id: item };
  const chatId = cleanText(item?.chat_id || item?.chatId || item?.username, 200).trim();
  if (!chatId || !(/^@?[A-Za-z0-9_]{4,}$/.test(chatId) || /^-?\d{5,}$/.test(chatId))) return null;
  const normalizedChatId = /^-?\d+$/.test(chatId) ? chatId : (chatId.startsWith("@") ? chatId : "@" + chatId);
  const title = cleanText(item?.title, 100) || normalizedChatId.replace(/^@/, "");
  let url = cleanText(item?.url, 500);
  if (!url && normalizedChatId.startsWith("@")) url = "https://t.me/" + normalizedChatId.slice(1);
  if (url && !/^https:\/\//i.test(url)) url = "";
  return { chat_id: normalizedChatId, title, url };
}

function serializeJoinChannelsFromText(text) {
  const channels = parseJoinChannels(text);
  if (!channels.length && String(text || "").trim() !== "-") throw new Error("حداقل یک کانال معتبر وارد کنید");
  return JSON.stringify(String(text || "").trim() === "-" ? [] : channels);
}

function joinedMemberStatus(result) {
  const member = result?.result || result;
  const status = String(member?.status || "");
  if (["creator", "administrator", "member"].includes(status)) return true;
  if (status === "restricted") return member?.is_member !== false;
  return false;
}

async function checkRequiredJoin(apiCall, userId, channels) {
  const results = await Promise.all(channels.map(async channel => {
    try {
      const result = await Promise.race([
        apiCall("getChatMember", { chat_id: channel.chat_id, user_id: String(userId) }),
        new Promise((_, reject) => setTimeout(() => reject(new Error("JOIN_CHECK_TIMEOUT")), 1800))
      ]);
      return joinedMemberStatus(result) ? null : channel;
    } catch (_) {
      return channel;
    }
  }));
  const missing = results.filter(Boolean);
  return { ok: missing.length === 0, missing };
}

async function centralRequiredJoinStatus(env, settings, userId, bypass = false, forceRefresh = false) {
  const channels = parseJoinChannels(settings.central_join_channels);
  if (bypass || settings.central_join_enabled !== "true" || !channels.length) return { ok: true, missing: [] };
  const signature = channels.map(channel => channel.chat_id).join(",");
  const cacheKey = "central:" + String(userId) + ":" + signature;
  const cached = joinStatusCache.get(cacheKey);
  if (!forceRefresh && cached && Date.now() - cached.at < JOIN_STATUS_CACHE_TTL_MS) return cached.value;
  const value = await checkRequiredJoin((method, body) => telegramApi(env, method, body), userId, channels);
  joinStatusCache.set(cacheKey, { at: Date.now(), value });
  if (joinStatusCache.size > 500) joinStatusCache.delete(joinStatusCache.keys().next().value);
  return value;
}

function joinPromptMarkup(channels, retryCallback) {
  const rows = channels.filter(x => x.url).map(channel => [{ text: "📢 عضویت در " + channel.title, url: channel.url }]);
  rows.push([{ text: "✅ عضو شدم؛ بررسی مجدد", callback_data: retryCallback }]);
  return { inline_keyboard: rows };
}

async function sendCentralJoinPrompt(env, chatId, channels, messageId = null) {
  const payload = {
    chat_id: chatId,
    text: "🔐 <b>عضویت اجباری</b>\n━━━━━━━━━━━━━━\nبرای استفاده از ربات ابتدا در کانال‌های زیر عضو شوید، سپس دکمه بررسی مجدد را بزنید.",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: joinPromptMarkup(channels, "join:check")
  };
  if (messageId) {
    try { await telegramApi(env, "editMessageText", { ...payload, message_id: messageId }); return; } catch (_) {}
  }
  await telegramApi(env, "sendMessage", payload);
}

function joinRequiredError(channels) {
  const error = new Error("برای ادامه ابتدا در کانال‌های تعیین‌شده عضو شوید");
  error.code = "JOIN_REQUIRED";
  error.channels = channels;
  return error;
}

function salesOrderStatusLabel(status) {
  const labels = {
    awaiting_receipt: "در انتظار ارسال رسید",
    payment_pending: "در انتظار پرداخت آنلاین",
    payment_paid: "پرداخت تأیید شد",
    pending_review: "در انتظار تأیید رسید",
    provisioning: "در حال ساخت سرویس",
    delivered: "تحویل داده‌شده",
    rejected: "ردشده",
    provision_failed: "خطا در ساخت سرویس",
    cancelled: "لغوشده"
  };
  return labels[String(status || "")] || String(status || "نامشخص");
}

function salesOrderStatusIcon(status) {
  const icons = {
    awaiting_receipt: "🟡",
    payment_pending: "💠",
    payment_paid: "✅",
    pending_review: "🟠",
    provisioning: "🔵",
    delivered: "✅",
    rejected: "❌",
    provision_failed: "⚠️",
    cancelled: "⚪️"
  };
  return icons[String(status || "")] || "•";
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


const RESELLER_BITPIN_DEFAULTS = Object.freeze({
  bitpin_enabled: 0,
  bitpin_base_url: "https://api.bitpin.ir",
  bitpin_api_key_enc: null,
  bitpin_api_secret_enc: null,
  bitpin_asset: "USDT",
  bitpin_network: "TRC20",
  bitpin_deposit_address: null,
  bitpin_toman_per_unit: 100000,
  bitpin_min_crypto_amount: 1,
  bitpin_configured_at: null,
  bitpin_last_verified_at: null,
  bitpin_last_error: null
});

async function getResellerBitpinConfig(env, botId) {
  if (!botId) return { ...RESELLER_BITPIN_DEFAULTS };
  try {
    const row = await env.PASARGUARD_DB.prepare(`
      SELECT bitpin_enabled,bitpin_base_url,bitpin_api_key_enc,bitpin_api_secret_enc,
             bitpin_asset,bitpin_network,bitpin_deposit_address,bitpin_toman_per_unit,
             bitpin_min_crypto_amount,bitpin_configured_at,bitpin_last_verified_at,bitpin_last_error
      FROM reseller_bitpin_configs WHERE bot_id=?
    `).bind(botId).first();
    return { ...RESELLER_BITPIN_DEFAULTS, ...(row || {}) };
  } catch (error) {
    if (/no such table/i.test(String(error?.message || error))) return { ...RESELLER_BITPIN_DEFAULTS };
    throw error;
  }
}

async function hydrateResellerBotRelations(env, bot) {
  if (!bot) return null;
  const [relation, bitpin] = await Promise.all([
    env.PASARGUARD_DB.prepare(`
      SELECT a.title AS agency_title,a.panel_username,a.panel_password_enc,a.status AS agency_status,a.remote_manager_id,
             u.telegram_id AS owner_telegram_id,u.username AS owner_username,u.first_name AS owner_first_name,
             u.last_name AS owner_last_name,u.wallet_balance AS owner_wallet_balance,
             CASE WHEN a.panel_password_enc IS NULL THEN 0 ELSE 1 END AS agency_has_password
      FROM users u LEFT JOIN agencies a ON a.id=?
      WHERE u.id=?
    `).bind(bot.agency_id, bot.user_id).first(),
    getResellerBitpinConfig(env, bot.id)
  ]);
  return { ...bot, ...RESELLER_BITPIN_DEFAULTS, ...(bitpin || {}), ...(relation || {}) };
}

async function getResellerBotForUser(env, userId) {
  let bot = await env.PASARGUARD_DB.prepare("SELECT * FROM reseller_bots WHERE user_id=? LIMIT 1").bind(userId).first();
  bot = await hydrateResellerBotRelations(env, bot);
  const resolved = await resolveResellerServiceAgency(env, bot);
  if (resolved) resolved.independent_panel_access = resellerHasIndependentPanel(resolved);
  return resolved;
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

async function configureResellerBot(env, bot, origin = "") {
  const routingSettings = await getSettings(env);
  const webhookOrigin = resellerBotOrigin(routingSettings, origin);
  const webhookUrl = webhookOrigin + "/sales-bot/" + encodeURIComponent(bot.id) + "/webhook";
  const miniAppUrl = webhookOrigin + "/sales-app/" + encodeURIComponent(bot.id);
  const token = await resellerBotToken(env, bot);
  await telegramApiWithToken(token, "setWebhook", {
    url: webhookUrl,
    secret_token: bot.webhook_secret,
    allowed_updates: ["message", "callback_query"],
    drop_pending_updates: false
  });

  const menuButton = {
    type: "web_app",
    text: "📱 مینی‌اپ",
    web_app: { url: miniAppUrl }
  };
  await telegramApiWithToken(token, "setChatMenuButton", { menu_button: menuButton });
  if (bot.owner_telegram_id) {
    try {
      await telegramApiWithToken(token, "setChatMenuButton", {
        chat_id: Number(bot.owner_telegram_id),
        menu_button: menuButton
      });
    } catch (_) {}
  }

  const commandScopes = [
    { type: "default" },
    { type: "all_private_chats" },
    { type: "all_group_chats" },
    { type: "all_chat_administrators" }
  ];
  if (bot.owner_telegram_id) {
    commandScopes.push({ type: "chat", chat_id: Number(bot.owner_telegram_id) });
  }
  for (const scope of commandScopes) {
    try { await telegramApiWithToken(token, "deleteMyCommands", { scope }); } catch (_) {}
  }

  try {
    await telegramApiWithToken(token, "setMyDescription", {
      description: "خرید، تمدید، شارژ کیف پول و مدیریت سرویس در " + cleanText(bot.brand_name, 120) + " · نسخه " + RESELLER_BOT_VERSION
    });
    await telegramApiWithToken(token, "setMyShortDescription", {
      short_description: "فروشگاه و پنل کاربری " + cleanText(bot.brand_name, 40)
    });
  } catch (_) {}
  return webhookUrl;
}

async function syncAllResellerBotMenus(env, notifyManagementLinks = false) {
  await ensureDb(env);
  const settings = await getSettings(env);
  const rows = await env.PASARGUARD_DB.prepare("SELECT id FROM reseller_bots").all();
  let success = 0;
  let failed = 0;
  let linksSent = 0;
  let linksFailed = 0;
  for (const row of rows.results || []) {
    try {
      const bot = await getResellerBotById(env, row.id);
      if (!bot) continue;
      await configureResellerBot(env, bot, resellerBotOrigin(settings));
      await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET status=CASE WHEN status='error' THEN 'active' ELSE status END,bot_version=?,miniapp_enabled=1,updated_at=? WHERE id=?")
        .bind(RESELLER_BOT_VERSION, nowIso(), bot.id).run();
      success++;
      if (notifyManagementLinks && bot.owner_telegram_id) {
        try {
          const managementUrl = resellerManagementUrl(bot, settings);
          await resellerTelegramApi(env, bot, "sendMessage", {
            chat_id: String(bot.owner_telegram_id),
            text: "🖥 <b>پنل مدیریت وب ربات نماینده آماده است</b>\n━━━━━━━━━━━━━━\nبرای مدیریت سفارش‌ها، مشتریان، کیف پول، پلن‌ها و تنظیمات از لینک زیر وارد شوید.\n\nآدرس ورود:\n<code>" + botEscape(managementUrl) + "</code>\n\nنام کاربری ورود: <code>" + botEscape(bot.panel_username || "") + "</code>\nرمز ورود همان رمز پنل نمایندگی PasarGuard است.\n\n🔒 مینی‌اپ این ربات فقط برای مشتریان باقی می‌ماند.",
            parse_mode: "HTML",
            disable_web_page_preview: true,
            reply_markup: { inline_keyboard: [
              [{ text: "🖥 ورود به پنل مدیریت", url: managementUrl }],
              [{ text: "📋 کپی آدرس ورود", copy_text: { text: managementUrl } }]
            ] }
          });
          linksSent++;
        } catch (_) { linksFailed++; }
      }
    } catch (_) {
      failed++;
      try {
        await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET status='error',updated_at=? WHERE id=?")
          .bind(nowIso(), row.id).run();
      } catch (_) {}
    }
  }
  return { success, failed, links_sent: linksSent, links_failed: linksFailed };
}

async function ensureResellerBotRuntimeCurrent(env, bot) {
  if (!bot || String(bot.bot_version || "") === RESELLER_BOT_VERSION) return bot;
  const settings = await getSettings(env);
  try {
    await configureResellerBot(env, bot, resellerBotOrigin(settings));
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET bot_version=?,miniapp_enabled=1,status=CASE WHEN status='error' THEN 'active' ELSE status END,updated_at=? WHERE id=?")
      .bind(RESELLER_BOT_VERSION, nowIso(), bot.id).run();
    bot.bot_version = RESELLER_BOT_VERSION;
    bot.miniapp_enabled = 1;
    return bot;
  } catch (error) {
    try { await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET status='error',updated_at=? WHERE id=?").bind(nowIso(), bot.id).run(); } catch (_) {}
    throw new Error("همگام‌سازی بروزرسانی ربات نماینده ناموفق بود: " + String(error?.message || error));
  }
}

async function listSalesBotAgencies(env, userId) {
  const rows = await env.PASARGUARD_DB.prepare(`
    SELECT id,title,panel_username,status,
           CASE WHEN panel_password_enc IS NULL THEN 0 ELSE 1 END AS has_password
    FROM agencies
    WHERE user_id=? AND COALESCE(is_trial,0)=0
    ORDER BY CASE WHEN status='active' THEN 0 ELSE 1 END,
             CASE WHEN panel_password_enc IS NULL THEN 1 ELSE 0 END,
             created_at DESC
    LIMIT 20
  `).bind(userId).all();
  return rows.results || [];
}

function salesBotAgencyButton(agency, index, prefix) {
  const status = agency.status === "active" ? "🟢 " : "🟠 ";
  const passwordHint = Number(agency.has_password || 0) === 1 ? "" : " · ارسال رمز";
  return {
    text: status + (index + 1) + ". " + agency.title + passwordHint,
    callback_data: prefix + agency.id
  };
}

async function verifyAndStoreAgencyPassword(env, userId, agencyId, rawPassword) {
  const agency = await env.PASARGUARD_DB.prepare(`
    SELECT * FROM agencies
    WHERE id=? AND user_id=? AND COALESCE(is_trial,0)=0
  `).bind(agencyId, userId).first();
  if (!agency) throw new Error("پنل انتخاب‌شده پیدا نشد");

  const password = cleanText(rawPassword, 200);
  if (!password) throw new Error("رمز پنل را ارسال کنید");
  const settings = await getSettings(env);
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
    throw new Error("رمز پنل صحیح نیست؛ رمز همان ادمین ساخته‌شده در پاسارگارد را دوباره ارسال کنید");
  }

  const encryptedPassword = await encryptSecret(password, env);
  const result = await env.PASARGUARD_DB.prepare(`
    UPDATE agencies SET panel_password_enc=?,updated_at=?
    WHERE id=? AND user_id=?
  `).bind(encryptedPassword, nowIso(), agency.id, userId).run();
  if (!Number(result?.meta?.changes || 0)) {
    const fresh = await env.PASARGUARD_DB.prepare("SELECT * FROM agencies WHERE id=? AND user_id=?")
      .bind(agency.id, userId).first();
    if (!fresh?.panel_password_enc) throw new Error("ذخیره رمز پنل انجام نشد؛ دوباره تلاش کنید");
    return fresh;
  }
  agencyPasarguardTokenCache.set(String(agency.id), { token: String(data.access_token), expiresAt: Date.now() + 10 * 60 * 1000 });
  await audit(env, userId, "agency_password_verified_and_replaced", { agencyId: agency.id, remoteId: agency.remote_manager_id });
  return { ...agency, panel_password_enc: encryptedPassword };
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
    const detailText = typeof detail === "string" ? detail : JSON.stringify(detail);
    const invalidCredentials = [400, 401, 403].includes(Number(response.status)) &&
      /incorrect\s*(username|user name).*password|invalid\s*(username|credentials)|username\s*or\s*password|نام کاربری.*رمز|رمز.*نام کاربری/i.test(detailText);
    if (invalidCredentials) {
      agencyPasarguardTokenCache.delete(cacheKey);
      try {
        await env.PASARGUARD_DB.prepare("UPDATE agencies SET panel_password_enc=NULL,updated_at=? WHERE id=?")
          .bind(nowIso(), agency.id).run();
      } catch (_) {}
      const error = new Error("رمز پنل نماینده تغییر کرده یا معتبر نیست؛ رمز جدید پنل را ارسال کنید");
      error.code = "AGENCY_CREDENTIALS_INVALID";
      error.agencyId = agency.id;
      error.panelUsername = agency.panel_username;
      throw error;
    }
    throw new Error("ارتباط با پنل نماینده ناموفق بود؛ چند لحظه بعد دوباره تلاش کنید");
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

async function sendMainBotMedia(env, method, chatId, bytes, filename, mimeType, caption, replyMarkup) {
  const settings = await getSettings(env);
  if (!settings.bot_token) throw new Error("توکن ربات اصلی تنظیم نشده است");
  const form = new FormData();
  form.set("chat_id", String(chatId));
  form.set(method === "sendPhoto" ? "photo" : "document", new Blob([bytes], { type: mimeType || "application/octet-stream" }), filename || "receipt");
  form.set("caption", caption);
  form.set("parse_mode", "HTML");
  form.set("reply_markup", JSON.stringify(replyMarkup));
  const response = await fetch("https://api.telegram.org/bot" + settings.bot_token + "/" + method, { method: "POST", body: form });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.ok === false) throw new Error(data.description || "ارسال رسید برای نماینده ناموفق بود");
  return data;
}

async function notifySalesOrderOwner(env, bot, order, customer, plan) {
  const caption = "🧾 <b>رسید جدید ربات فروش</b>\n━━━━━━━━━━━━━━\n" +
    "برند: <b>" + botEscape(bot.brand_name) + "</b>\n" +
    "مشتری: <b>" + botEscape(customer.first_name || customer.username || customer.telegram_id) + "</b>\n" +
    "شناسه: <code>" + botEscape(customer.telegram_id) + "</code>\n" +
    "نوع: <b>" + (order.order_type === "renewal" ? "تمدید سرویس" : order.order_type === "volume" ? "افزایش حجم" : "خرید سرویس") + "</b>\n" +
    "پلن: <b>" + botEscape(plan.title || plan.plan_title || "پلن فروش") + "</b>\n" +
    "مبلغ: <b>" + botMoney(order.amount_toman) + " تومان</b>\n" +
    "سفارش: <code>" + botEscape(order.id) + "</code>";
  const replyMarkup = { inline_keyboard: [[
    { text: "✅ تأیید و تحویل", callback_data: "bot:sales:approve:" + order.id },
    { text: "❌ رد رسید", callback_data: "bot:sales:reject:" + order.id }
  ]] };
  let mediaSent = false;
  try {
    const token = await resellerBotToken(env, bot);
    const fileInfo = await telegramApiWithToken(token, "getFile", { file_id: order.receipt_file_id });
    const filePath = fileInfo?.result?.file_path;
    if (filePath) {
      const response = await fetch("https://api.telegram.org/file/bot" + token + "/" + filePath);
      if (response.ok) {
        const bytes = await response.arrayBuffer();
        const ext = String(filePath).split(".").pop() || (order.receipt_file_type === "photo" ? "jpg" : "bin");
        const method = order.receipt_file_type === "photo" ? "sendPhoto" : "sendDocument";
        const mime = response.headers.get("content-type") || (method === "sendPhoto" ? "image/jpeg" : "application/octet-stream");
        await sendMainBotMedia(env, method, bot.owner_telegram_id, bytes, "receipt." + ext, mime, caption, replyMarkup);
        mediaSent = true;
      }
    }
  } catch (error) {
    await audit(env, bot.user_id, "sales_receipt_media_forward_failed", { orderId: order.id, message: error.message });
  }
  if (!mediaSent) {
    try {
      if (order.receipt_message_id && Number(bot.forward_enabled ?? 1) === 1) {
        await resellerTelegramApi(env, bot, "forwardMessage", {
          chat_id: bot.owner_telegram_id,
          from_chat_id: customer.telegram_id,
          message_id: Number(order.receipt_message_id)
        });
      }
    } catch (_) {}
    await telegramApi(env, "sendMessage", { chat_id: bot.owner_telegram_id, text: caption, parse_mode: "HTML", reply_markup: replyMarkup });
  }
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
    try { await audit(env, ownerUser.id, "sales_order_delivered", { orderId: order.id, remoteUserId: remoteId, username, orderType: order.order_type, cashbackToman }); } catch (_) {}
    return { ...order, status: "delivered", remote_username: username, subscription_url: subscriptionUrl, cashback_toman: cashbackToman };
  } catch (error) {
    await env.PASARGUARD_DB.prepare("UPDATE sales_orders SET status='provision_failed',error_message=?,updated_at=? WHERE id=?")
      .bind(cleanText(error.message, 1000), nowIso(), order.id).run();
    await audit(env, ownerUser.id, "sales_order_provision_failed", { orderId: order.id, message: error.message });
    throw error;
  }
}

async function rejectSalesOrder(env, ownerUser, orderId) {
  const order = await env.PASARGUARD_DB.prepare(`
    SELECT o.*,rb.user_id AS owner_user_id,rb.id AS reseller_bot_id,c.telegram_id AS customer_telegram_id,p.title AS plan_title
    FROM sales_orders o JOIN reseller_bots rb ON rb.id=o.bot_id JOIN sales_customers c ON c.id=o.customer_id
    JOIN sales_plans p ON p.id=o.plan_id WHERE o.id=?
  `).bind(orderId).first();
  if (!order || Number(order.owner_user_id) !== Number(ownerUser.id)) throw new Error("سفارش پیدا نشد");
  const result = await env.PASARGUARD_DB.prepare(`
    UPDATE sales_orders SET status='rejected',updated_at=?,reviewed_at=?,reviewed_by=?
    WHERE id=? AND status IN ('pending_review','provision_failed')
  `).bind(nowIso(), nowIso(), ownerUser.id, order.id).run();
  if (!Number(result?.meta?.changes || 0)) throw new Error("این سفارش قابل ردکردن نیست");
  if (order.payment_method === "wallet") {
    try { await adjustSalesCustomerBalance(env, order.bot_id, order.customer_id, Number(order.amount_toman), "refund", "sales_order", order.id, "بازگشت وجه سفارش ردشده"); } catch (_) {}
  }
  try { await salesReleasePromoForOrder(env, order.id); } catch (_) {}
  const bot = await getResellerBotById(env, order.reseller_bot_id);
  if (order.origin !== "miniapp") {
    await resellerTelegramApi(env, bot, "sendMessage", {
      chat_id: order.customer_telegram_id,
      text: "❌ <b>رسید سفارش تأیید نشد</b>\nپلن: <b>" + botEscape(order.plan_title) + "</b>\nبرای پیگیری با پشتیبانی فروشنده تماس بگیرید.",
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [[{ text: "📦 سفارش‌های من", callback_data: "sale:orders" }]] }
    });
  }
  await audit(env, ownerUser.id, "sales_order_rejected", { orderId: order.id });
  return order;
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

async function runResellerHealthCheck(env, bot) {
  bot = { ...bot, ...(await getResellerBitpinConfig(env, bot?.id)) };
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

async function runAllResellerHealthChecks(env, limit=20) {
  const rows=await env.PASARGUARD_DB.prepare("SELECT * FROM reseller_bots WHERE status='active' ORDER BY updated_at LIMIT ?").bind(Math.max(1,Math.min(100,Number(limit||20)))).all();
  let checked=0,failed=0;
  for(const bot of rows.results||[]){try{await runResellerHealthCheck(env,bot);checked+=1;}catch(_){failed+=1;}}
  return {checked,failed};
}

async function createAllResellerBackups(env, limit=50) {
  const rows=await env.PASARGUARD_DB.prepare("SELECT * FROM reseller_bots WHERE status='active' ORDER BY updated_at LIMIT ?").bind(Math.max(1,Math.min(200,Number(limit||50)))).all();
  let success=0,failed=0;
  for(const bot of rows.results||[]){try{await createResellerSnapshot(env,bot,"central-admin","manual");success+=1;}catch(_){failed+=1;}}
  return {success,failed};
}

async function botAdminResellerOpsView(env, account) {
  if(!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const stats=await env.PASARGUARD_DB.prepare(`SELECT
    (SELECT COUNT(*) FROM reseller_bots) AS bots_count,
    (SELECT COUNT(*) FROM reseller_bots WHERE status='active') AS active_bots,
    (SELECT COUNT(*) FROM reseller_bots WHERE status='active' AND COALESCE(sales_automation_enabled,1)=1) AS automation_bots,
    (SELECT COUNT(*) FROM reseller_bots WHERE status='active' AND COALESCE(loyalty_enabled,1)=1) AS loyalty_bots,
    (SELECT COUNT(*) FROM reseller_bots WHERE status='active' AND COALESCE(fraud_protection_enabled,1)=1) AS protected_bots,
    (SELECT COUNT(*) FROM sales_security_events WHERE created_at>=?) AS security_events_24h,
    (SELECT COUNT(*) FROM sales_security_events WHERE severity IN ('high','critical') AND created_at>=?) AS risky_events_24h,
    (SELECT COUNT(*) FROM sales_customers WHERE status='blocked') AS blocked_customers,
    (SELECT COUNT(*) FROM reseller_bots WHERE COALESCE(auto_backup_enabled,1)=1 AND (last_backup_at IS NULL OR last_backup_at<?)) AS stale_backups,
    (SELECT COUNT(*) FROM reseller_snapshots WHERE created_at>=?) AS backups_today,
    (SELECT COUNT(*) FROM sales_payment_invoices WHERE status IN ('PENDING','PAID') AND processed_at IS NULL) AS pending_payments,
    (SELECT COUNT(*) FROM sales_orders WHERE status='pending_review') AS pending_orders`).bind(
      new Date(Date.now()-24*3600000).toISOString(),
      new Date(Date.now()-24*3600000).toISOString(),
      new Date(Date.now()-48*3600000).toISOString(),
      new Date(Date.now()-24*3600000).toISOString()
    ).first();
  const healthRows=await env.PASARGUARD_DB.prepare("SELECT bot_id,overall_status,score,created_at FROM reseller_health_checks ORDER BY created_at DESC LIMIT 200").all();
  const latest=new Map(); for(const x of healthRows.results||[]){if(!latest.has(x.bot_id))latest.set(x.bot_id,x);}
  let healthy=0,warning=0,critical=0; for(const x of latest.values()){if(x.overall_status==="healthy")healthy++;else if(x.overall_status==="warning")warning++;else critical++;}
  const cron=await env.PASARGUARD_DB.prepare("SELECT value FROM app_settings WHERE key='last_cron_at'").first();
  return {text:"🧭 <b>مرکز پایداری نمایندگان</b>\n━━━━━━━━━━━━━━\n"+
    "🤖 ربات‌ها: <b>"+botMoney(stats?.bots_count)+"</b> · فعال: <b>"+botMoney(stats?.active_bots)+"</b>\n"+
    "⚡ اتوماسیون فعال: <b>"+botMoney(stats?.automation_bots)+"</b> · باشگاه مشتریان: <b>"+botMoney(stats?.loyalty_bots)+"</b>\n"+
    "🛡️ حفاظت فعال: <b>"+botMoney(stats?.protected_bots)+"</b> · رخداد امنیتی: <b>"+botMoney(stats?.security_events_24h)+"</b> · پرخطر: <b>"+botMoney(stats?.risky_events_24h)+"</b>\n"+
    "🚫 کاربران مسدود: <b>"+botMoney(stats?.blocked_customers)+"</b>\n"+
    "🗄 پشتیبان ۲۴ ساعت: <b>"+botMoney(stats?.backups_today)+"</b> · عقب‌افتاده: <b>"+botMoney(stats?.stale_backups)+"</b>\n"+
    "🩺 سلامت ثبت‌شده: 🟢 "+botMoney(healthy)+" · 🟠 "+botMoney(warning)+" · 🔴 "+botMoney(critical)+"\n"+
    "💠 پرداخت معلق: <b>"+botMoney(stats?.pending_payments)+"</b> · رسید فروش: <b>"+botMoney(stats?.pending_orders)+"</b>\n"+
    "⏱ آخرین Cron: <b>"+botEscape(cron?.value?botDate(cron.value):"ثبت نشده")+"</b>",
    reply_markup:{inline_keyboard:[[{text:"🩺 پایش سلامت همه",callback_data:"bot:admin:reseller_health_all"}],[{text:"🗄 پشتیبان‌گیری همه",callback_data:"bot:admin:reseller_backup_all"}],[{text:"🔄 بروزرسانی",callback_data:"bot:admin:reseller_ops"}],[{text:"⚙️ زیرساخت و نگهداری",callback_data:"bot:admin:group:system"}]]}};
}

function parseAdminTelegramIds(raw) {
  return String(raw || "").split(",").map(x => x.trim()).filter(x => /^\d+$/.test(x));
}

async function createInstallationLogger(botToken, adminIds, brandName) {
  const logger = { botToken, targets: [], lines: [], brandName: brandName || "سامانه نمایندگی" };
  for (const chatId of parseAdminTelegramIds(adminIds)) {
    try {
      const sent = await telegramApiWithToken(botToken, "sendMessage", {
        chat_id: chatId,
        text: "🛠 گزارش نصب " + logger.brandName + "\n\n⏳ شروع فرایند نصب…",
        disable_notification: false
      });
      if (sent?.result?.message_id) logger.targets.push({ chatId, messageId: sent.result.message_id });
    } catch (_) {}
  }
  logger.lines.push("⏳ شروع فرایند نصب");
  return logger;
}

async function appendInstallationLog(logger, icon, text) {
  if (!logger) return;
  logger.lines.push(icon + " " + String(text || ""));
  if (logger.lines.length > 18) logger.lines = [logger.lines[0], "…", ...logger.lines.slice(-16)];
  const payloadText = "🛠 گزارش نصب " + logger.brandName + "\n\n" + logger.lines.join("\n");
  await Promise.all(logger.targets.map(async target => {
    try {
      await telegramApiWithToken(logger.botToken, "editMessageText", {
        chat_id: target.chatId,
        message_id: target.messageId,
        text: payloadText
      });
    } catch (_) {
      try {
        const sent = await telegramApiWithToken(logger.botToken, "sendMessage", {
          chat_id: target.chatId,
          text: payloadText
        });
        if (sent?.result?.message_id) target.messageId = sent.result.message_id;
      } catch (_) {}
    }
  }));
}

async function ensureTelegramBotUser(env, from, preloadedSettings = null) {
  await ensureDb(env);
  const settings = preloadedSettings || await getSettings(env);
  if (settings.install_completed !== "true") throw new Error("سامانه هنوز نصب نشده است");
  const telegramId = String(from?.id || "");
  if (!telegramId) throw new Error("شناسه تلگرام دریافت نشد");
  const admin = isAdminTelegramId(settings, telegramId);
  const ts = nowIso();
  const userBatch = await env.PASARGUARD_DB.batch([
    env.PASARGUARD_DB.prepare(`
      INSERT INTO users(telegram_id, username, first_name, last_name, role, status, wallet_balance, created_at, updated_at)
      VALUES(?, ?, ?, ?, ?, 'active', 0, ?, ?)
      ON CONFLICT(telegram_id) DO UPDATE SET
        username=excluded.username,
        first_name=excluded.first_name,
        last_name=excluded.last_name,
        role=CASE WHEN excluded.role='admin' THEN 'admin' ELSE users.role END,
        updated_at=excluded.updated_at
    `).bind(
      telegramId,
      cleanText(from?.username, 64),
      cleanText(from?.first_name, 100),
      cleanText(from?.last_name, 100),
      admin ? "admin" : "user",
      ts,
      ts
    ),
    env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE telegram_id=?").bind(telegramId)
  ]);
  const user = (userBatch[1]?.results || [])[0] || null;
  if (!user || user.status !== "active") throw new Error("حساب شما غیرفعال است");
  return { user, settings, isAdmin: user.role === "admin" || admin };
}

async function botGetSession(env, telegramId) {
  const row = await env.PASARGUARD_DB.prepare(
    "SELECT state,data,updated_at FROM bot_sessions WHERE telegram_id=?"
  ).bind(String(telegramId)).first();
  if (!row) return null;
  if (Date.now() - new Date(row.updated_at).getTime() > 30 * 60 * 1000) {
    await botClearSession(env, telegramId);
    return null;
  }
  let data = {};
  try { data = JSON.parse(row.data || "{}"); } catch (_) {}
  return { state: row.state, data };
}

async function botSetSession(env, telegramId, state, data = {}) {
  await env.PASARGUARD_DB.prepare(`
    INSERT INTO bot_sessions(telegram_id,state,data,updated_at) VALUES(?,?,?,?)
    ON CONFLICT(telegram_id) DO UPDATE SET state=excluded.state,data=excluded.data,updated_at=excluded.updated_at
  `).bind(String(telegramId), state, JSON.stringify(data || {}), nowIso()).run();
}

async function botClearSession(env, telegramId) {
  await env.PASARGUARD_DB.prepare("DELETE FROM bot_sessions WHERE telegram_id=?").bind(String(telegramId)).run();
}

async function botAccountSummary(env, userId) {
  const stats = await env.PASARGUARD_DB.prepare(`
    SELECT
      (SELECT COUNT(*) FROM agencies WHERE user_id=?) AS agencies_count,
      (SELECT COUNT(*) FROM agencies WHERE user_id=? AND status='active') AS active_agencies,
      (SELECT COUNT(*) FROM agencies WHERE user_id=? AND status!='active') AS suspended_agencies,
      (SELECT COUNT(*) FROM payment_invoices WHERE user_id=? AND UPPER(status)='PENDING') AS pending_payments,
      (SELECT COALESCE(SUM(last_usage_bytes),0) FROM agencies WHERE user_id=?) AS total_usage_bytes
  `).bind(userId, userId, userId, userId, userId).first();
  return stats || {};
}

function botQuickKeyboard(account) {
  const rows = [[{ text: "💳 کیف پول" }, { text: "🏢 پنل‌های من" }]];
  const purchaseRow = [];
  if (agencySalesOpen(account?.settings)) purchaseRow.push({ text: "🛒 خرید پنل" });
  if (resellerBotSalesOpen(account?.settings)) purchaseRow.push({ text: "🤖 خرید ربات" });
  if (purchaseRow.length) rows.push(purchaseRow);
  rows.push(
    [{ text: "🎁 تست رایگان" }, { text: "🧩 ربات‌های من" }],
    [{ text: "🧾 پرداخت‌ها" }, { text: "📊 گردش حساب" }],
    [{ text: "🆘 پشتیبانی" }, { text: "📚 راهنما" }]
  );
  if (account?.isAdmin) rows.push([{ text: "⚙️ مدیریت سامانه" }]);
  return { keyboard: rows, resize_keyboard: true, is_persistent: true, input_field_placeholder: "یک بخش را انتخاب کنید" };
}

function botTextView(text) {
  const normalized = String(text || "")
    .replace(/[\u200c\u200f\ufe0f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (/کیف پول/.test(normalized)) return "wallet";
  if (/خرید پنل|ساخت پنل جدید/.test(normalized)) return "buy_agency";
  if (/خرید ربات|ساخت ربات جدید/.test(normalized)) return "buy_bot";
  if (/پنلهای من|پنل های من|پنل من|پنلها|پنل ها/.test(normalized)) return "agencies";
  if (/تست رایگان|تست مرکزی/.test(normalized)) return "trial";
  if (/رباتهای من|ربات های من|ربات من|ربات فروش|ربات نماینده/.test(normalized)) return "sales_bot";
  if (/فاکتور|پرداخت/.test(normalized)) return "invoices";
  if (/تراکنش|گردش حساب/.test(normalized)) return "ledger";
  if (/پشتیبانی/.test(normalized)) return "support";
  if (/راهنما/.test(normalized)) return "help";
  if (/مدیریت سامانه|مدیریت سیستم|مدیریت اداری/.test(normalized)) return "admin";
  if (/منوی اصلی|خانه/.test(normalized)) return "home";
  return "";
}

async function sendCentralManagementAccess(env, account, chatId, fallbackOrigin = "", options = {}) {
  if (!account?.isAdmin) return false;
  const force = options?.force === true;
  if (!force && await managementNoticeWasDelivered(env, "central", chatId)) return false;
  const managementUrl = centralManagementUrl(account.settings, fallbackOrigin);
  const ownerUsername = cleanText(account.settings?.pasarguard_admin_username || "", 100);
  await telegramApi(env, "sendMessage", {
    chat_id: chatId,
    text: "🖥 <b>ورود به پنل مدیریت مرکزی</b>\n━━━━━━━━━━━━━━\nمدیریت کاربران، نمایندگان، پرداخت‌ها، تنظیمات و ربات‌ها از داشبورد مستقل وب انجام می‌شود.\n\nآدرس ثابت مدیریت:\n<code>" + botEscape(managementUrl) + "</code>\n\n" +
      (ownerUsername ? "نام کاربری مدیر: <code>" + botEscape(ownerUsername) + "</code>\n" : "") +
      "رمز ورود همان رمز مدیر پنل PasarGuard است.\n🔒 این آدرس دائمی است و دیگر لینک یک‌بارمصرف ساخته نمی‌شود.",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: [
      [{ text: "🖥 ورود به پنل مدیریت مرکزی", url: managementUrl }],
      [{ text: "📋 کپی آدرس ثابت", copy_text: { text: managementUrl } }]
    ] }
  });
  await markManagementNoticeDelivered(env, "central", chatId);
  return true;
}

async function botSendWelcome(env, account, chatId, fallbackOrigin = "") {
  const rendered = await botHomeView(env, account);
  await telegramApi(env, "sendMessage", {
    chat_id: chatId,
    text: rendered.text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: botQuickKeyboard(account)
  });
  if (account.isAdmin) await sendCentralManagementAccess(env, account, chatId, fallbackOrigin);
}

async function botHomeView(env, account) {
  const summary = await botAccountSummary(env, account.user.id);
  // The Telegram /start path must never wait for an optional helper Worker.
  // The local calculation is deterministic and keeps first response latency minimal.
  const insight = localDashboardInsight({
    wallet_balance: Number(account.user.wallet_balance || 0),
    min_recharge: Number(account.settings.min_recharge || 100000),
    active_agencies: Number(summary.active_agencies || 0),
    suspended_agencies: Number(summary.suspended_agencies || 0),
    pending_payments: Number(summary.pending_payments || 0),
    total_usage_bytes: Number(summary.total_usage_bytes || 0),
    price_per_gb: Number(account.settings.price_per_gb || 0)
  });
  const name = account.user.first_name || account.user.username || "کاربر عزیز";
  const insightIcon = insight.tone === "critical" ? "🔴" : insight.tone === "warning" ? "🟠" : "🟢";
  const rows = [[{ text: "💳 کیف پول و شارژ", callback_data: "bot:wallet" }, { text: "🏢 پنل‌های من", callback_data: "bot:agencies" }]];
  const purchaseRow = [];
  if (agencySalesOpen(account.settings)) purchaseRow.push({ text: "🛒 خرید پنل", callback_data: "bot:buy:agency" });
  if (resellerBotSalesOpen(account.settings)) purchaseRow.push({ text: "🤖 خرید ربات", callback_data: "bot:buy:bot" });
  if (purchaseRow.length) rows.push(purchaseRow);
  rows.push(
    [{ text: "🎁 تست رایگان", callback_data: "bot:trial" }, { text: "🧩 ربات‌های من", callback_data: "bot:sales" }],
    [{ text: "🧾 فاکتورها و پرداخت‌ها", callback_data: "bot:invoices" }, { text: "📊 گردش حساب", callback_data: "bot:ledger" }],
    [{ text: "🆘 پشتیبانی", callback_data: "bot:support" }, { text: "📚 راهنما", callback_data: "bot:help" }]
  );
  if (account.isAdmin) rows.push([{ text: "⚙️ مدیریت سامانه", callback_data: "bot:admin" }]);
  return {
    text:
      "🏠 <b>منوی اصلی</b>\n" +
      "سلام <b>" + botEscape(name) + "</b>؛ به " + botEscape(account.settings.brand_name) + " خوش آمدید.\n" +
      "━━━━━━━━━━━━━━\n" +
      "💳 موجودی قابل استفاده: <b>" + botMoney(account.user.wallet_balance) + " تومان</b>\n" +
      "🏢 پنل‌های فعال: <b>" + botMoney(summary.active_agencies) + "</b> از " + botMoney(summary.agencies_count) + "\n" +
      "🧾 پرداخت‌های در انتظار: <b>" + botMoney(summary.pending_payments) + "</b>\n" +
      "💠 تعرفه هر گیگ: <b>" + botMoney(account.settings.price_per_gb) + " تومان</b>\n" +
      "🎁 تست مرکزی: <b>" + (account.settings.central_trial_enabled === "true" ? "فعال" : "غیرفعال") + "</b>\n" +
      (!agencySalesOpen(account.settings) ? "⛔ فروش پنل نمایندگی: <b>بسته</b>\n" : "") +
      (!resellerBotSalesOpen(account.settings) ? "⛔ فروش ربات نمایندگی: <b>بسته</b>\n" : "") + "\n" +
      insightIcon + " <b>وضعیت حساب</b>\n" +
      "<b>" + botEscape(insight.title) + "</b> — " + botEscape(insight.message) + "\n\n" +
      "یکی از گزینه‌های زیر را انتخاب کنید.",
    reply_markup: { inline_keyboard: rows }
  };
}

function botOperationsMenuView(account) {
  const rows = [[{ text: "💳 کیف پول و شارژ", callback_data: "bot:wallet" }, { text: "🏢 پنل‌های من", callback_data: "bot:agencies" }]];
  const purchaseRow = [];
  if (agencySalesOpen(account.settings)) purchaseRow.push({ text: "🛒 خرید پنل", callback_data: "bot:buy:agency" });
  if (resellerBotSalesOpen(account.settings)) purchaseRow.push({ text: "🤖 خرید ربات", callback_data: "bot:buy:bot" });
  if (purchaseRow.length) rows.push(purchaseRow);
  rows.push([{ text: "🧩 ربات‌های من", callback_data: "bot:sales" }], [{ text: "🏠 داشبورد مرکزی", callback_data: "bot:home" }]);
  return {
    text: "🧭 <b>مرکز خدمات و عملیات</b>\n━━━━━━━━━━━━━━\n" +
      "عملیات اصلی حساب در این بخش قرار دارد.\n\n" +
      "├─ 💳 کیف پول و شارژ\n" +
      "├─ 🏢 پنل‌های نمایندگی\n" +
      "└─ 🤖 ایجاد و مشاهده ربات نماینده" +
      ((!agencySalesOpen(account.settings) || !resellerBotSalesOpen(account.settings)) ? "\n\n⛔ بخشی از فروش توسط مدیریت مرکزی بسته شده است." : ""),
    reply_markup: { inline_keyboard: rows }
  };
}

function botReportsMenuView(account) {
  return {
    text: "💳 <b>مرکز مالی و گزارش‌ها</b>\n━━━━━━━━━━━━━━\n" +
      "فاکتورها و گردش‌های مالی حساب از این بخش قابل پیگیری است.\n\n" +
      "├─ 🧾 فاکتورها و وضعیت پرداخت\n" +
      "└─ 📊 گردش کامل کیف پول",
    reply_markup: { inline_keyboard: [
      [{ text: "🧾 فاکتورها و پرداخت‌ها", callback_data: "bot:invoices" }, { text: "📊 گردش حساب", callback_data: "bot:ledger" }],
      [{ text: "💳 شارژ کیف پول", callback_data: "bot:wallet" }],
      [{ text: "🏠 داشبورد مرکزی", callback_data: "bot:home" }]
    ] }
  };
}

function botAssistanceMenuView(account) {
  return {
    text: "🆘 <b>مرکز پشتیبانی و راهنما</b>\n━━━━━━━━━━━━━━\n" +
      "راهنما و مسیر ارتباط با پشتیبانی در این بخش قرار دارد.",
    reply_markup: { inline_keyboard: [
      [{ text: "🆘 ارتباط با پشتیبانی", callback_data: "bot:support" }, { text: "📚 راهنمای سامانه", callback_data: "bot:help" }],
      [{ text: "🏠 داشبورد مرکزی", callback_data: "bot:home" }]
    ] }
  };
}

async function botCentralTrialView(env, account) {
  const settings = await getSettings(env);
  const config = centralTrialConfig(settings);
  const trial = await getCentralTrialAgency(env, account.user.id);
  const rows = [];
  let details;
  if (trial) {
    const expired = trial.status === "trial_expired" || centralTrialExpired(trial);
    details =
      "وضعیت: <b>" + (expired ? "⏳ پایان‌یافته" : "🟢 فعال") + "</b>\n" +
      "حجم: <b>" + botGb(trial.trial_data_limit_bytes) + "</b>\n" +
      "مصرف: <b>" + botGb(trial.last_usage_bytes) + "</b>\n" +
      "اعتبار تا: <b>" + botEscape(botDate(trial.trial_expires_at)) + "</b>\n" +
      "نام کاربری: <code>" + botEscape(trial.panel_username) + "</code>";
    rows.push([{ text: "🔐 اطلاعات ورود تست", callback_data: "bot:agency:cred:" + trial.id }]);
  } else if (!config.enabled) {
    details = "تست رایگان مرکزی در حال حاضر توسط مدیر غیرفعال شده است.";
  } else {
    details =
      "هر حساب فقط یک‌بار می‌تواند تست دریافت کند.\n\n" +
      "📦 حجم تست: <b>" + botGb(config.dataLimitBytes) + "</b>\n" +
      "⏱ مدت اعتبار: <b>" + botMoney(config.durationHours) + " ساعت</b>\n" +
      "💳 هزینه: <b>رایگان</b>";
    rows.push([{ text: "🎁 ساخت تست رایگان", callback_data: "bot:trial:create" }]);
  }
  rows.push([{ text: "🏢 پنل‌های من", callback_data: "bot:agencies" }, { text: "🏠 منوی اصلی", callback_data: "bot:home" }]);
  return {
    text: "🎁 <b>تست رایگان مرکزی</b>\n━━━━━━━━━━━━━━\n" + details +
      "\n\nتست از صورتحساب مصرف کیف پول جداست و پس از پایان زمان یا حجم، خودکار غیرفعال می‌شود.",
    reply_markup: { inline_keyboard: rows }
  };
}

async function botWalletView(env, account) {
  const ledger = await env.PASARGUARD_DB.prepare(`
    SELECT amount,balance_after,description,created_at
    FROM wallet_ledger WHERE user_id=? ORDER BY created_at DESC LIMIT 4
  `).bind(account.user.id).all();
  const entries = ledger.results || [];
  const lines = entries.length ? entries.map(item => {
    const sign = Number(item.amount) >= 0 ? "+" : "";
    return "• " + botEscape(item.description || "تراکنش کیف پول") + "\n  <b>" + sign + botMoney(item.amount) + "</b> تومان · " + botDate(item.created_at);
  }).join("\n") : "هنوز تراکنشی ثبت نشده است.";
  const min = Math.max(10000, Number(account.settings.min_recharge || 100000));
  const rows = [
    [{ text: botMoney(min) + " تومان", callback_data: "bot:charge:" + min }, { text: botMoney(min * 2) + " تومان", callback_data: "bot:charge:" + (min * 2) }],
    [{ text: botMoney(min * 5) + " تومان", callback_data: "bot:charge:" + (min * 5) }, { text: "✍️ مبلغ دلخواه", callback_data: "bot:charge:custom" }]
  ];
  if (account.settings.bitpin_enabled === "true" && cleanText(account.settings.bitpin_deposit_address,300)) rows.push([{ text: "🪙 واریز رمزارزی با بیت‌پین", callback_data: "bot:bitpin" }]);
  rows.push([{ text: "📊 همه تراکنش‌ها", callback_data: "bot:ledger" }, { text: "🏠 منوی اصلی", callback_data: "bot:home" }]);
  return {
    text: "💳 <b>کیف پول من</b>\n━━━━━━━━━━━━━━\nموجودی قابل استفاده:\n<b>" + botMoney(account.user.wallet_balance) + " تومان</b>\n\nآخرین گردش‌ها:\n" + lines,
    reply_markup: { inline_keyboard: rows }
  };
}


async function botBitpinView(env, account) {
  const s=await getSettings(env);
  if(s.bitpin_enabled!=="true") throw new Error("واریز رمزارزی بیت‌پین غیرفعال است");
  const address=cleanText(s.bitpin_deposit_address,300);
  if(!address) throw new Error("آدرس واریز بیت‌پین ثبت نشده است");
  const rows=await env.PASARGUARD_DB.prepare("SELECT id,asset,network,txid,crypto_amount,amount_toman,status,created_at FROM bitpin_deposits WHERE user_id=? ORDER BY created_at DESC LIMIT 5").bind(account.user.id).all();
  const history=(rows.results||[]).length?(rows.results||[]).map((x,i)=>(i+1)+". <b>"+botEscape(x.crypto_amount+" "+x.asset)+"</b> · "+botMoney(x.amount_toman)+" تومان · "+botEscape(x.status)+"\n<code>"+botEscape(x.txid)+"</code>").join("\n\n"):"هنوز واریزی ثبت نشده است.";
  return {text:"🪙 <b>واریز رمزارزی با بیت‌پین</b>\n━━━━━━━━━━━━━━\nرمزارز: <b>"+botEscape(s.bitpin_asset||"USDT")+"</b>\nشبکه: <b>"+botEscape(s.bitpin_network||"TRC20")+"</b>\nنرخ هر واحد: <b>"+botMoney(s.bitpin_toman_per_unit)+" تومان</b>\nحداقل مقدار: <b>"+botEscape(s.bitpin_min_crypto_amount||"1")+"</b>\n\nآدرس واریز:\n<code>"+botEscape(address)+"</code>\n\nپس از انتقال، مقدار و TXID را ثبت کنید. شارژ پس از بررسی مدیر انجام می‌شود.\n\n<b>آخرین درخواست‌ها</b>\n"+history,reply_markup:{inline_keyboard:[[{text:"📋 کپی آدرس",copy_text:{text:address}}],[{text:"➕ ثبت واریز جدید",callback_data:"bot:bitpin:new"}],[{text:"↩️ کیف پول",callback_data:"bot:wallet"}]]}};
}

async function botAdminBitpinView(env, account) {
  if(!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const s=await getSettings(env);
  const pending=await env.PASARGUARD_DB.prepare("SELECT COUNT(*) AS c FROM bitpin_deposits WHERE status='pending_review'").first();
  const configured=Boolean(s.bitpin_api_key&&s.bitpin_api_secret&&s.bitpin_deposit_address);
  return {text:"🪙 <b>مدیریت بیت‌پین مرکزی</b>\n━━━━━━━━━━━━━━\nوضعیت: <b>"+(s.bitpin_enabled==="true"?"🟢 فعال":"🔴 غیرفعال")+"</b>\nاتصال API: <b>"+(configured?"ثبت شده":"ناقص")+"</b>\nرمزارز/شبکه: <b>"+botEscape((s.bitpin_asset||"USDT")+" / "+(s.bitpin_network||"TRC20"))+"</b>\nنرخ: <b>"+botMoney(s.bitpin_toman_per_unit)+" تومان</b>\nحداقل: <b>"+botEscape(s.bitpin_min_crypto_amount||"1")+"</b>\nآدرس: <code>"+botEscape(s.bitpin_deposit_address||"ثبت نشده")+"</code>\nدر انتظار بررسی: <b>"+botMoney(pending?.c||0)+"</b>\n"+(s.bitpin_last_verified_at?"آخرین اتصال موفق: <b>"+botDate(s.bitpin_last_verified_at)+"</b>\n":"")+(s.bitpin_last_error?"⚠️ خطا: <code>"+botEscape(s.bitpin_last_error)+"</code>\n":""),reply_markup:{inline_keyboard:[[{text:"🔑 API Key",callback_data:"bot:admin:bitpin:api"},{text:"🔐 API Secret",callback_data:"bot:admin:bitpin:secret"}],[{text:"🪙 رمزارز و شبکه",callback_data:"bot:admin:bitpin:asset"},{text:"📍 آدرس واریز",callback_data:"bot:admin:bitpin:address"}],[{text:"💱 نرخ و حداقل",callback_data:"bot:admin:bitpin:rate"}],[{text:"🧪 تست اتصال",callback_data:"bot:admin:bitpin:test"},{text:s.bitpin_enabled==="true"?"⏸ غیرفعال‌کردن":"▶️ فعال‌کردن",callback_data:"bot:admin:bitpin:toggle"}],[{text:"📥 واریزهای در انتظار",callback_data:"bot:admin:bitpin:claims"}],[{text:"↩️ تنظیمات مالی",callback_data:"bot:admin:settings:finance"}]]}};
}

async function botAdminBitpinClaimsView(env, account) {
  if(!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const rows=await env.PASARGUARD_DB.prepare(`SELECT d.*,u.telegram_id,u.first_name,u.username FROM bitpin_deposits d JOIN users u ON u.id=d.user_id ORDER BY CASE WHEN d.status='pending_review' THEN 0 ELSE 1 END,d.created_at DESC LIMIT 12`).all();
  const items=rows.results||[];
  const lines=items.length?items.map((x,i)=>(i+1)+". "+(x.status==='pending_review'?"🟠":"▫️")+" <b>"+botEscape(x.first_name||x.username||x.telegram_id)+"</b>\n"+botEscape(x.crypto_amount+" "+x.asset+" · "+botMoney(x.amount_toman)+" تومان")+"\n<code>"+botEscape(x.txid)+"</code> · "+botEscape(x.status)).join("\n\n"):"درخواستی ثبت نشده است.";
  const buttons=[];items.filter(x=>x.status==='pending_review').slice(0,8).forEach((x,i)=>buttons.push([{text:"✅ تأیید "+(i+1),callback_data:"bot:admin:bitpin:approve:"+x.id},{text:"❌ رد "+(i+1),callback_data:"bot:admin:bitpin:reject:"+x.id}]));
  buttons.push([{text:"🔄 بروزرسانی",callback_data:"bot:admin:bitpin:claims"},{text:"↩️ بیت‌پین",callback_data:"bot:admin:bitpin"}]);
  return {text:"📥 <b>واریزهای بیت‌پین مرکزی</b>\n━━━━━━━━━━━━━━\n"+lines,reply_markup:{inline_keyboard:buttons}};
}

async function botBuyAgencyView(env, account) {
  const open = agencySalesOpen(account.settings);
  const required = Number(account.settings.setup_fee || 0);
  const balance = Number(account.user.wallet_balance || 0);
  const rows = [];
  if (open) rows.push([{ text: "➕ شروع ساخت پنل", callback_data: "bot:agency:new" }]);
  rows.push([{ text: "💳 شارژ کیف پول", callback_data: "bot:wallet" }, { text: "🏢 پنل‌های من", callback_data: "bot:agencies" }]);
  rows.push([{ text: "🏠 منوی اصلی", callback_data: "bot:home" }]);
  return {
    text: "🛒 <b>خرید پنل نمایندگی</b>\n━━━━━━━━━━━━━━\n" +
      "وضعیت فروش: <b>" + (open ? "🟢 باز" : "🔴 بسته") + "</b>\n" +
      "حداقل موجودی لازم: <b>" + botMoney(required) + " تومان</b>\n" +
      "موجودی فعلی شما: <b>" + botMoney(balance) + " تومان</b>\n\n" +
      "این مبلغ هنگام ساخت کسر نمی‌شود و برای پرداخت مصرف واقعی پنل در کیف پول باقی می‌ماند." +
      (open ? (balance < required ? "\n\n⚠️ برای شروع ساخت، ابتدا کیف پول را تا حداقل لازم شارژ کنید." : "\n\n✅ حساب شما آماده ساخت پنل جدید است.") : "\n\n⛔ فروش پنل توسط مدیریت مرکزی متوقف شده و هیچ مسیر ربات یا وب امکان ساخت جدید ندارد."),
    reply_markup: { inline_keyboard: rows }
  };
}

async function botBuyResellerBotView(env, account) {
  const open = resellerBotSalesOpen(account.settings);
  const existing = await getResellerBotForUser(env, account.user.id);
  const storeFee = resellerBotSetupFee(account.settings, "store");
  const masterFee = resellerBotSetupFee(account.settings, "master");
  const storeRenew = resellerBotRenewalFee(account.settings, "store");
  const masterRenew = resellerBotRenewalFee(account.settings, "master");
  const rows = [];
  if (open && !existing) {
    rows.push([{ text: "🤖 خرید ربات فروشگاهی", callback_data: "bot:sales:create:store" }]);
    rows.push([{ text: "👑 خرید ربات مستر نمایندگی", callback_data: "bot:sales:create:master" }]);
  }
  if (existing) rows.push([{ text: "🧩 مشاهده ربات من", callback_data: "bot:sales" }]);
  rows.push([{ text: "💳 شارژ کیف پول", callback_data: "bot:wallet" }, { text: "🏠 منوی اصلی", callback_data: "bot:home" }]);
  return {
    text: "🤖 <b>خرید ربات</b>\n━━━━━━━━━━━━━━\n" +
      "وضعیت فروش: <b>" + (open ? "🟢 باز" : "🔴 بسته") + "</b>\n\n" +
      "🤖 <b>ربات فروشگاهی</b>\n" +
      "فروش مستقیم سرویس، بدون امکان ارائه ربات نمایندگی.\n" +
      "شناسه مدیریتی پنل: <b>نماینده فروش</b>\n" +
      "ساخت: <b>" + botMoney(storeFee) + " تومان</b> · تمدید: <b>" + botMoney(storeRenew) + " تومان</b>\n\n" +
      "👑 <b>ربات مستر نمایندگی</b>\n" +
      "فروش سرویس و ساخت ربات برای نمایندگان زیرمجموعه.\n" +
      "شناسه مدیریتی پنل: <b>مستر نمایندگی</b>\n" +
      "ساخت: <b>" + botMoney(masterFee) + " تومان</b> · تمدید: <b>" + botMoney(masterRenew) + " تومان</b>\n\n" +
      "🔐 فقط خریدار مستقیم از ربات مرکزی به پنل PasarGuard دسترسی دارد. زیرمجموعه مستر فقط ربات و داشبورد مستقل دریافت می‌کند." +
      (existing ? "\n\nبرای این حساب قبلاً ربات ساخته شده است." : open ? "\n\nنوع ربات را انتخاب کنید." : "\n\n⛔ ساخت ربات توسط مدیریت مرکزی متوقف شده است."),
    reply_markup: { inline_keyboard: rows }
  };
}

async function botAgenciesView(env, account) {
  const agencies = await env.PASARGUARD_DB.prepare(`
    SELECT id,title,panel_username,status,last_usage_bytes,total_charged,created_at,
           is_trial,trial_expires_at,trial_data_limit_bytes
    FROM agencies WHERE user_id=? ORDER BY created_at DESC LIMIT 8
  `).bind(account.user.id).all();
  const items = agencies.results || [];
  const lines = items.length ? items.map((item, index) => {
    const trial = Number(item.is_trial || 0) === 1;
    const status = item.status === "active" ? "🟢 فعال" : item.status === "trial_expired" ? "⌛ پایان تست" : "🟠 " + botEscape(item.status || "متوقف");
    const details = trial
      ? "\n   🎁 تست رایگان · مصرف: <b>" + botGb(item.last_usage_bytes) + " از " + botGb(item.trial_data_limit_bytes) + "</b>" +
        "\n   انقضا: <b>" + botEscape(item.trial_expires_at ? botDate(item.trial_expires_at) : "نامشخص") + "</b>"
      : "\n   مصرف: <b>" + botGb(item.last_usage_bytes) + "</b> · صورتحساب: <b>" + botMoney(item.total_charged) + " تومان</b>";
    return (index + 1) + ". <b>" + botEscape(item.title) + "</b> — " + status +
      "\n   <code>" + botEscape(item.panel_username) + "</code>" + details;
  }).join("\n\n") : "هنوز پنلی برای شما ثبت نشده است.";
  const buttons = items.slice(0, 5).map((item, index) => [
    { text: "🔐 ورود " + (index + 1), callback_data: "bot:agency:cred:" + item.id },
    { text: "✏️ ویرایش " + (index + 1), callback_data: "bot:agency:edit:" + item.id }
  ]);
  if (agencySalesOpen(account.settings)) buttons.push([{ text: "🛒 خرید پنل جدید", callback_data: "bot:buy:agency" }]);
  buttons.push([{ text: "🔄 بروزرسانی مصرف", callback_data: "bot:agencies:refresh" }, { text: "🏠 منوی اصلی", callback_data: "bot:home" }]);
  const saleNote = !agencySalesOpen(account.settings)
    ? "\n\n⛔ <b>فروش پنل نمایندگی موقتاً متوقف است.</b>"
    : "";
  return { text: "🏢 <b>پنل‌های نمایندگی</b>\n━━━━━━━━━━━━━━\n💰 حداقل موجودی لازم برای ساخت: <b>" + botMoney(account.settings.setup_fee || 0) + " تومان</b>\n<blockquote>این مبلغ کسر نمی‌شود و پس از ساخت برای پرداخت مصرف پنل در کیف پول باقی می‌ماند.</blockquote>" + saleNote + "\n\n" + lines, reply_markup: { inline_keyboard: buttons } };
}

async function botSalesBotView(env, account) {
  try { await syncPasarguardManagersForUser(env, account.user); } catch (_) {}
  const bot = await getResellerBotForUser(env, account.user.id);
  if (!bot) {
    const agencies = await listSalesBotAgencies(env, account.user.id);
    return {
      text: "🧩 <b>ربات‌های من</b>\n━━━━━━━━━━━━━━\nهنوز ربات نمایندگی برای این حساب ثبت نشده است.\n\nخرید ربات از بخش مستقل «خرید ربات» انجام می‌شود.\n🏢 پنل‌های قابل اتصال: <b>" + botMoney(agencies.length) + "</b>",
      reply_markup: { inline_keyboard: [[{ text: "🤖 رفتن به خرید ربات", callback_data: "bot:buy:bot" }], [{ text: "🏠 منوی اصلی", callback_data: "bot:home" }]] }
    };
  }
  const settings = await getSettings(env);
  try { await ensureResellerBotRuntimeCurrent(env, bot); } catch (_) {}
  const license = resellerLicenseState(bot);
  const renewalFee = resellerBotRenewalFee(settings, bot.license_type);
  const rows = [];
  if (bot.bot_username) rows.push([{ text: "🚀 ورود به ربات نماینده و مدیریت", url: "https://t.me/" + bot.bot_username.replace(/^@/, "") }]);
  if (!bot.parent_bot_id && String(bot.purchase_source || "central") === "central") {
    rows.push([{ text: "🔄 تغییر یا ارتقای نوع ربات", callback_data: "bot:sales:type" }]);
    rows.push([{ text: "🪪 تمدید یک‌ماهه" + (renewalFee ? " · " + botMoney(renewalFee) + " تومان" : ""), callback_data: "bot:sales:renew" }]);
  }
  rows.push([{ text: "🏠 منوی اصلی", callback_data: "bot:home" }]);
  return {
    text: "🤖 <b>ربات نمایندگی شما فعال است</b>\n━━━━━━━━━━━━━━\n" +
      "ربات: <b>@" + botEscape(bot.bot_username) + "</b>\n" +
      "برند: <b>" + botEscape(bot.brand_name) + "</b>\n" +
      "نوع حساب: <b>" + botEscape(resellerHasIndependentPanel(bot) ? resellerLicenseTypeLabel(bot.license_type) : "نماینده فروش زیرمجموعه") + "</b>\n" +
      "منبع ایجاد: <b>" + (String(bot.purchase_source || "central") === "central" ? "ربات مرکزی" : "مستر نمایندگی") + "</b>\n" +
      "لایسنس: <b>" + botEscape(resellerLicenseLabel(bot)) + "</b>\n" +
      "اعتبار تا: <b>" + botEscape(resellerLicenseExpiryLabel(bot)) + "</b>\n\n" +
      (license.active ? "" : "⛔️ فروش تا زمان تمدید لایسنس متوقف است.\n\n") +
      (bot.parent_bot_id
        ? "🔐 این ربات زیرمجموعه مستر است؛ پنل PasarGuard ندارد و تمدید، نرخ مصرف و اعتبار آن توسط مستر انجام می‌شود.\n"
        : "🔐 پنل PasarGuard و لایسنس این ربات مستقیماً از ربات مرکزی مدیریت می‌شود.\n") +
      "تمام تنظیمات فروش، کاربران، سفارش‌ها، پلن‌ها و آمار را در داشبورد مستقل ربات مدیریت کنید.",
    reply_markup: { inline_keyboard: rows }
  };
}


async function botSalesTypeView(env, account) {
  const bot = await getResellerBotForUser(env, account.user.id);
  if (!bot) throw new Error("ربات نماینده پیدا نشد");
  if (!resellerHasIndependentPanel(bot)) throw new Error("نوع ربات زیرمجموعه فقط توسط مستر بالادست تعیین می‌شود");
  const settings = account.settings || await getSettings(env);
  const currentType = normalizeResellerLicenseType(bot.license_type);
  const targetType = currentType === "master" ? "store" : "master";
  const fee = resellerBotTypeChangeFee(settings, currentType, targetType);
  const child = await env.PASARGUARD_DB.prepare("SELECT COUNT(*) AS count FROM reseller_bots WHERE parent_bot_id=?")
    .bind(bot.id).first();
  const childCount = Number(child?.count || 0);
  const rows = [];

  if (currentType === "store") {
    rows.push([{ text: "👑 ارتقا به مستر" + (fee ? " · " + botMoney(fee) + " تومان" : " · رایگان"), callback_data: "bot:sales:type:confirm:master" }]);
  } else if (childCount === 0) {
    rows.push([{ text: "🤖 تغییر به فروشگاهی", callback_data: "bot:sales:type:confirm:store" }]);
  }
  rows.push([{ text: "↩️ بازگشت به ربات", callback_data: "bot:sales" }]);

  return {
    text: "🔄 <b>تغییر نوع ربات نمایندگی</b>\n━━━━━━━━━━━━━━\n" +
      "نوع فعلی: <b>" + botEscape(resellerLicenseTypeLabel(currentType)) + "</b>\n" +
      "نوع قابل انتخاب: <b>" + botEscape(resellerLicenseTypeLabel(targetType)) + "</b>\n" +
      (currentType === "store"
        ? "هزینه ارتقا: <b>" + botMoney(fee) + " تومان</b>\nتمدیدهای بعدی با تعرفه ربات مستر محاسبه می‌شوند.\n"
        : "تعداد ربات‌های زیرمجموعه: <b>" + botMoney(childCount) + "</b>\n" + (childCount ? "⛔ تا زمان تعیین تکلیف زیرمجموعه‌ها امکان تغییر به فروشگاهی وجود ندارد.\n" : "تغییر به فروشگاهی بازگشت وجه ندارد.\n")) +
      "\n✅ کاربران، سفارش‌ها، پلن‌ها، موجودی‌ها، متن‌ها و تنظیمات ربات بدون تغییر باقی می‌مانند.\n" +
      "✅ Role پنل PasarGuard نیز خودکار با نوع جدید هماهنگ می‌شود.",
    reply_markup: { inline_keyboard: rows }
  };
}

async function botSalesPlansView(env, account) {
  const bot = await getResellerBotForUser(env, account.user.id);
  if (!bot) throw new Error("ابتدا ربات نمایندگی را بسازید");
  const result = await env.PASARGUARD_DB.prepare(`
    SELECT p.*,c.title AS category_title,l.title AS location_title FROM sales_plans p
    LEFT JOIN sales_categories c ON c.id=p.category_id LEFT JOIN sales_locations l ON l.id=p.location_id
    WHERE p.bot_id=? ORDER BY p.sort_order ASC,p.created_at ASC LIMIT 30
  `).bind(bot.id).all();
  const plans = result.results || [];
  const lines = plans.length ? plans.map((plan,index) =>
    (plan.status === "active" ? "🟢" : "⚪️") + " <b>" + (index+1) + ". " + botEscape(plan.title) + "</b>" +
    (plan.plan_type === "renew" ? " · ♻️ تمدید" : plan.plan_type === "volume" ? " · ➕ افزایش حجم" : "") + "\n   " + botGb(plan.data_limit_bytes) +
    (plan.plan_type === "volume" ? " · بدون تغییر زمان" : " · " + botMoney(plan.duration_days) + " روز") +
    " · <b>" + botMoney(plan.price_toman) + " تومان</b>\n   " +
    botEscape((plan.category_title || "بدون دسته") + " · " + (plan.location_title || "بدون لوکیشن"))
  ).join("\n\n") : "هنوز پلنی ثبت نشده است.";
  const buttons = plans.slice(0,10).map((plan,index) => [{
    text: (plan.status === "active" ? "⏸ غیرفعال " : "▶️ فعال ") + (index+1),
    callback_data: "bot:sales:plan:toggle:" + plan.id
  }]);
  buttons.push([{ text: "➕ افزودن پلن", callback_data: "bot:sales:plan:new" }]);
  buttons.push([{ text: "🗂 دسته‌بندی و لوکیشن", callback_data: "bot:sales:catalog" }, { text: "↩️ ربات", callback_data: "bot:sales" }]);
  return { text: "📦 <b>پلن‌های ربات نمایندگی</b>\n━━━━━━━━━━━━━━\n" + lines, reply_markup: { inline_keyboard: buttons } };
}

async function botSalesOrdersView(env, account) {
  const bot = await getResellerBotForUser(env, account.user.id);
  if (!bot) throw new Error("ابتدا ربات نمایندگی را بسازید");
  const result = await env.PASARGUARD_DB.prepare(`
    SELECT o.*,p.title AS plan_title,c.telegram_id AS customer_telegram_id,c.first_name AS customer_first_name,c.username AS customer_username
    FROM sales_orders o JOIN sales_plans p ON p.id=o.plan_id JOIN sales_customers c ON c.id=o.customer_id
    WHERE o.bot_id=? ORDER BY o.created_at DESC LIMIT 15
  `).bind(bot.id).all();
  const orders = result.results || [];
  const lines = orders.length ? orders.map((order,index) =>
    salesOrderStatusIcon(order.status) + " <b>" + (index+1) + ". " + botEscape(order.plan_title) + "</b>" +
    (order.order_type === "renewal" ? " · ♻️" : order.order_type === "volume" ? " · ➕" : "") + "\n   مشتری: " + botEscape(order.customer_first_name || order.customer_username || order.customer_telegram_id) +
    "\n   مبلغ: <b>" + botMoney(order.amount_toman) + " تومان</b> · " + (order.payment_method === "wallet" ? "کیف پول" : "کارت") +
    " · " + botEscape(salesOrderStatusLabel(order.status)) + (order.error_message ? "\n   خطا: <code>" + botEscape(String(order.error_message).slice(0,120)) + "</code>" : "")
  ).join("\n\n") : "هنوز سفارشی ثبت نشده است.";
  const buttons=[];
  for (const [index,order] of orders.slice(0,8).entries()) {
    if (order.status === "pending_review" || order.status === "provision_failed") {
      buttons.push([{ text: "✅ تأیید " + (index+1), callback_data: "bot:sales:approve:" + order.id }, { text: "❌ رد " + (index+1), callback_data: "bot:sales:reject:" + order.id }]);
      if (order.receipt_file_id) buttons.push([{ text: "👁 رسید " + (index+1), callback_data: "bot:sales:receipt:" + order.id }]);
    }
  }
  buttons.push([{ text: "🔄 بروزرسانی", callback_data: "bot:sales:orders" }, { text: "↩️ ربات", callback_data: "bot:sales" }]);
  return { text: "🧾 <b>سفارش‌های ربات نمایندگی</b>\n━━━━━━━━━━━━━━\n" + lines, reply_markup: { inline_keyboard: buttons } };
}

async function botSalesCatalogView(env, account) {
  const bot=await getResellerBotForUser(env,account.user.id); if(!bot) throw new Error("ربات پیدا نشد");
  const [cats,locs]=await Promise.all([
    env.PASARGUARD_DB.prepare("SELECT * FROM sales_categories WHERE bot_id=? ORDER BY sort_order,created_at LIMIT 15").bind(bot.id).all(),
    env.PASARGUARD_DB.prepare("SELECT * FROM sales_locations WHERE bot_id=? ORDER BY sort_order,created_at LIMIT 15").bind(bot.id).all()
  ]);
  const c=(cats.results||[]),l=(locs.results||[]);
  const text="📂 <b>دسته‌بندی‌ها</b>\n"+(c.map((x,i)=>(x.status==='active'?'🟢':'⚪️')+" "+(i+1)+". "+botEscape((x.emoji||'📁')+' '+x.title)).join('\n')||'ثبت نشده')+
    "\n\n🌍 <b>لوکیشن‌ها</b>\n"+(l.map((x,i)=>(x.status==='active'?'🟢':'⚪️')+" "+(i+1)+". "+botEscape((x.emoji||'🌍')+' '+x.title)).join('\n')||'ثبت نشده');
  const buttons=[[{text:"➕ دسته‌بندی",callback_data:"bot:sales:category:new"},{text:"➕ لوکیشن",callback_data:"bot:sales:location:new"}]];
  c.slice(0,6).forEach((x,i)=>buttons.push([{text:"تغییر وضعیت دسته "+(i+1),callback_data:"bot:sales:category:toggle:"+x.id}]));
  l.slice(0,6).forEach((x,i)=>buttons.push([{text:"تغییر وضعیت لوکیشن "+(i+1),callback_data:"bot:sales:location:toggle:"+x.id}]));
  buttons.push([{text:"📦 پلن‌ها",callback_data:"bot:sales:plans"},{text:"↩️ ربات",callback_data:"bot:sales"}]);
  return {text:"🗂 <b>مدیریت دسته‌بندی و لوکیشن</b>\n━━━━━━━━━━━━━━\n"+text,reply_markup:{inline_keyboard:buttons}};
}

async function botSalesWalletRequestsView(env,account){
  const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
  const r=await env.PASARGUARD_DB.prepare(`SELECT w.*,c.telegram_id,c.first_name,c.username FROM sales_wallet_requests w JOIN sales_customers c ON c.id=w.customer_id WHERE w.bot_id=? ORDER BY w.created_at DESC LIMIT 12`).bind(bot.id).all();
  const items=r.results||[];
  const text=items.length?items.map((x,i)=>(x.status==='pending_review'?'🟠':x.status==='approved'?'✅':'⚪️')+" <b>"+(i+1)+". "+botMoney(x.amount_toman)+" تومان</b>\n   "+botEscape(x.first_name||x.username||x.telegram_id)+" · "+botEscape(x.status)).join('\n\n'):'درخواستی ثبت نشده است.';
  const buttons=[];items.filter(x=>x.status==='pending_review').slice(0,8).forEach((x,i)=>buttons.push([{text:"✅ تأیید "+(i+1),callback_data:"bot:sales:wallet:approve:"+x.id},{text:"❌ رد "+(i+1),callback_data:"bot:sales:wallet:reject:"+x.id}]));
  buttons.push([{text:"🔄 بروزرسانی",callback_data:"bot:sales:wallets"},{text:"↩️ ربات",callback_data:"bot:sales"}]);
  return {text:"💳 <b>درخواست‌های شارژ مشتریان</b>\n━━━━━━━━━━━━━━\n"+text,reply_markup:{inline_keyboard:buttons}};
}

async function botSalesStatsView(env,account){
  const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
  const sinceDay=new Date(Date.now()-86400000).toISOString();
  const sinceMonth=new Date(Date.now()-30*86400000).toISOString();
  const st=await env.PASARGUARD_DB.prepare(`SELECT
    (SELECT COUNT(*) FROM sales_customers WHERE bot_id=?) customers,
    (SELECT COUNT(*) FROM sales_customers WHERE bot_id=? AND last_seen_at>=?) active_day,
    (SELECT COUNT(*) FROM sales_orders WHERE bot_id=?) orders,
    (SELECT COUNT(*) FROM sales_orders WHERE bot_id=? AND status='delivered') delivered,
    (SELECT COALESCE(SUM(amount_toman),0) FROM sales_orders WHERE bot_id=? AND status='delivered') sales,
    (SELECT COALESCE(SUM(amount_toman),0) FROM sales_orders WHERE bot_id=? AND status='delivered' AND created_at>=?) sales_month,
    (SELECT COUNT(*) FROM sales_trials WHERE bot_id=? AND status='delivered') trials,
    (SELECT COUNT(*) FROM sales_customers WHERE bot_id=? AND referrer_customer_id IS NOT NULL) referrals,
    (SELECT COALESCE(SUM(wallet_balance),0) FROM sales_customers WHERE bot_id=?) wallet_total,
    (SELECT COALESCE(SUM(cashback_toman),0) FROM sales_orders WHERE bot_id=? AND cashback_rewarded=1) cashback_total,
    (SELECT COUNT(*) FROM sales_notifications WHERE bot_id=? AND status='unread') unread_notifications,
    (SELECT COUNT(*) FROM sales_tickets WHERE bot_id=? AND status='waiting_owner') waiting_tickets,
    (SELECT COUNT(*) FROM sales_tickets WHERE bot_id=? AND status<>'closed') open_tickets,
    (SELECT COUNT(*) FROM sales_customers WHERE bot_id=? AND phone_verified_at IS NOT NULL) verified_phones
  `).bind(bot.id,bot.id,sinceDay,bot.id,bot.id,bot.id,bot.id,sinceMonth,bot.id,bot.id,bot.id,bot.id,bot.id,bot.id,bot.id,bot.id).first();
  return {text:"📊 <b>آمار ربات نمایندگی</b>\n━━━━━━━━━━━━━━\n👥 کاربران: <b>"+botMoney(st.customers)+"</b>\n🟢 فعال ۲۴ ساعت: <b>"+botMoney(st.active_day)+"</b>\n📱 شماره تأییدشده: <b>"+botMoney(st.verified_phones)+"</b>\n🧾 سفارش‌ها: <b>"+botMoney(st.orders)+"</b>\n✅ تحویل‌شده: <b>"+botMoney(st.delivered)+"</b>\n💰 کل فروش: <b>"+botMoney(st.sales)+" تومان</b>\n📅 فروش ۳۰ روز: <b>"+botMoney(st.sales_month)+" تومان</b>\n🎁 تست‌های تحویل‌شده: <b>"+botMoney(st.trials)+"</b>\n👥 عضوهای معرفی‌شده: <b>"+botMoney(st.referrals)+"</b>\n💸 کش‌بک پرداخت‌شده: <b>"+botMoney(st.cashback_total)+" تومان</b>\n🎫 تیکت باز: <b>"+botMoney(st.open_tickets)+"</b> · منتظر پاسخ: <b>"+botMoney(st.waiting_tickets)+"</b>\n🔔 اعلان خوانده‌نشده: <b>"+botMoney(st.unread_notifications)+"</b>\n💳 مجموع موجودی مشتریان: <b>"+botMoney(st.wallet_total)+" تومان</b>",reply_markup:{inline_keyboard:[[{text:"🔄 بروزرسانی",callback_data:"bot:sales:stats"},{text:"↩️ ربات",callback_data:"bot:sales"}]]}};
}

async function botSalesUsersView(env,account){
  const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
  const r=await env.PASARGUARD_DB.prepare(`SELECT c.*,(SELECT COUNT(*) FROM sales_orders o WHERE o.customer_id=c.id) orders_count FROM sales_customers c WHERE c.bot_id=? ORDER BY c.updated_at DESC LIMIT 12`).bind(bot.id).all();
  const users=r.results||[];
  const text=users.length?users.map((u,i)=>(u.status==='active'?'🟢':'🔴')+" <b>"+(i+1)+". "+botEscape(u.first_name||u.username||u.telegram_id)+"</b>"+(Number(u.risk_score||0)>=25?" · 🛡️ "+botMoney(u.risk_score):"")+"\n   <code>"+botEscape(u.telegram_id)+"</code> · "+botMoney(u.wallet_balance)+" تومان · "+botMoney(u.orders_count)+" سفارش").join('\n\n'):'کاربری ثبت نشده است.';
  const buttons=users.slice(0,10).map((u,i)=>[{text:"👤 کاربر "+(i+1),callback_data:"bot:sales:user:"+u.id}]);buttons.push([{text:"↩️ ربات",callback_data:"bot:sales"}]);
  return {text:"👥 <b>مدیریت کاربران ربات</b>\n━━━━━━━━━━━━━━\n"+text,reply_markup:{inline_keyboard:buttons}};
}

async function botSalesUserView(env,account,customerId){
  const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
  const u=await env.PASARGUARD_DB.prepare(`SELECT c.*,(SELECT COUNT(*) FROM sales_orders WHERE customer_id=c.id) orders_count,(SELECT COUNT(*) FROM sales_orders WHERE customer_id=c.id AND status='delivered') delivered_count FROM sales_customers c WHERE c.id=? AND c.bot_id=?`).bind(customerId,bot.id).first();if(!u)throw new Error("کاربر پیدا نشد");
  return {text:"👤 <b>مشخصات کاربر</b>\n━━━━━━━━━━━━━━\nنام: <b>"+botEscape(u.first_name||u.username||'کاربر')+"</b>\nشناسه: <code>"+botEscape(u.telegram_id)+"</code>\n📱 شماره: <b>"+(u.phone_verified_at?botEscape(u.phone_number||"تأیید شده"):"تأیید نشده")+"</b>\nوضعیت: <b>"+botEscape(u.status)+"</b>\n🛡️ امتیاز ریسک: <b>"+botMoney(u.risk_score||0)+"</b> · سطح: <b>"+botEscape(u.risk_level||"normal")+"</b>\nنوع: <b>"+(u.customer_type==='wholesale'?'عمده':'عادی')+"</b> · تخفیف <b>"+Number(u.discount_percent||0)+"٪</b>\nموجودی: <b>"+botMoney(u.wallet_balance)+" تومان</b>\nسفارش‌ها: <b>"+botMoney(u.orders_count)+"</b>\nتحویل‌شده: <b>"+botMoney(u.delivered_count)+"</b>",reply_markup:{inline_keyboard:[[{text:u.status==='active'?"⛔️ مسدودکردن":"✅ فعال‌کردن",callback_data:"bot:sales:user:toggle:"+u.id}],[{text:"🧹 پاک‌کردن امتیاز ریسک",callback_data:"bot:sales:user:riskreset:"+u.id}],[{text:u.customer_type==='wholesale'?"تبدیل به عادی":"تعیین کاربر عمده",callback_data:"bot:sales:user:wholesale:"+u.id},{text:"تنظیم تخفیف عمده",callback_data:"bot:sales:user:discount:"+u.id}],[{text:"➕ ۱۰۰هزار",callback_data:"bot:sales:user:credit:"+u.id},{text:"➖ ۱۰۰هزار",callback_data:"bot:sales:user:debit:"+u.id}],[{text:"↩️ کاربران",callback_data:"bot:sales:users"}]]}};
}

async function botSalesTextsView(env,account){
  const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
  const rows=Object.entries(SALES_TEXT_LABELS).map(([k,v])=>[{text:"✏️ "+v,callback_data:"bot:sales:text:"+k}]);rows.push([{text:"↩️ ربات",callback_data:"bot:sales"}]);
  return {text:"📝 <b>مدیریت متن‌های ربات</b>\n━━━━━━━━━━━━━━\nمتن موردنظر را انتخاب کنید. برای بازگشت به متن پیش‌فرض، یک خط تیره <code>-</code> ارسال کنید.",reply_markup:{inline_keyboard:rows}};
}

async function botSalesSettingsView(env,account){
  const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
  const trialMb=Math.round(Number(bot.trial_data_limit_bytes||0)/(1024*1024));
  const trialHours=Number(bot.trial_duration_hours||Number(bot.trial_duration_days||1)*24);
  return {text:"⚙️ <b>تنظیمات ربات نماینده</b>\n━━━━━━━━━━━━━━\n"+
    "🏷 برند: <b>"+botEscape(bot.brand_name||'-')+"</b> · پشتیبانی: <b>"+botEscape(bot.support_username||'ثبت نشده')+"</b>\n"+
    "🎁 تست: <b>"+(Number(bot.trial_enabled||0)===1?'فعال':'غیرفعال')+"</b> · "+botMoney(trialMb)+" MB / "+botMoney(trialHours)+" ساعت\n"+
    "🔔 اعلان‌ها: <b>"+(Number(bot.notifications_enabled??1)===1?'فعال':'غیرفعال')+"</b> · تیکت: <b>"+(Number(bot.ticketing_enabled??1)===1?'فعال':'غیرفعال')+"</b>\n"+
    "📢 جوین اجباری: <b>"+(Number(bot.join_enabled||0)===1?'فعال':'غیرفعال')+"</b> · گزارش روزانه: <b>"+(Number(bot.daily_report_enabled||0)===1?'فعال':'غیرفعال')+"</b>\n"+
    "🏷 نسخه: <code>"+botEscape(RESELLER_BOT_VERSION)+"</code> · مینی‌اپ: <b>فعال دائمی</b>",
    reply_markup:{inline_keyboard:[
      [{text:"🏷 نام برند",callback_data:"bot:sales:setting:brand"},{text:"🆘 آیدی پشتیبانی",callback_data:"bot:sales:setting:support"}],
      [{text:"🖼 بنر زیرمجموعه",callback_data:"bot:sales:setting:referral_banner"}],
      [{text:Number(bot.trial_enabled||0)===1?'خاموش‌کردن تست':'فعال‌کردن تست',callback_data:"bot:sales:setting:trial_toggle"},{text:"تنظیم تست MB/ساعت",callback_data:"bot:sales:setting:trial"}],
      [{text:"پورسانت ثابت",callback_data:"bot:sales:setting:referral_fixed"},{text:"پورسانت درصدی",callback_data:"bot:sales:setting:referral_percent"}],
      [{text:"🎉 بونس شارژ",callback_data:"bot:sales:setting:bonus"},{text:"💸 تنظیم کش‌بک",callback_data:"bot:sales:setting:cashback"}],
      [{text:Number(bot.cashback_enabled||0)===1?'خاموش‌کردن کش‌بک':'فعال‌کردن کش‌بک',callback_data:"bot:sales:setting:cashback_toggle"}],
      [{text:Number(bot.notifications_enabled??1)===1?'خاموش‌کردن هشدارها':'فعال‌کردن هشدارها',callback_data:"bot:sales:setting:notifications_toggle"}],
      [{text:"⏳ هشدار انقضا",callback_data:"bot:sales:setting:expiry_hours"},{text:"📉 هشدار مصرف",callback_data:"bot:sales:setting:usage_percent"}],
      [{text:Number(bot.ticketing_enabled??1)===1?'خاموش‌کردن تیکت':'فعال‌کردن تیکت',callback_data:"bot:sales:setting:ticketing_toggle"},{text:Number(bot.phone_verification_required||0)===1?'اختیاری‌کردن شماره':'اجباری‌کردن شماره',callback_data:"bot:sales:setting:phone_toggle"}],
      [{text:"⏱ بستن خودکار تیکت",callback_data:"bot:sales:setting:ticket_auto_close"}],
      [{text:Number(bot.daily_report_enabled||0)===1?'خاموش‌کردن گزارش':'فعال‌کردن گزارش',callback_data:"bot:sales:setting:daily_report_toggle"},{text:"🕒 ساعت گزارش",callback_data:"bot:sales:setting:daily_report_hour"}],
      [{text:Number(bot.join_enabled||0)===1?'خاموش‌کردن جوین':'فعال‌کردن جوین',callback_data:"bot:sales:setting:join_toggle"},{text:"📢 تعیین کانال‌ها",callback_data:"bot:sales:setting:join_channels"}],
      [{text:"📤 کپی و فوروارد",callback_data:"bot:sales:setting:forward"}],
      [{text:"↩️ مدیریت ربات",callback_data:"bot:sales"}]
    ]}};
}

async function botLedgerView(env, account) {
  const ledger = await env.PASARGUARD_DB.prepare(`
    SELECT amount,balance_after,description,created_at
    FROM wallet_ledger WHERE user_id=? ORDER BY created_at DESC LIMIT 10
  `).bind(account.user.id).all();
  const entries = ledger.results || [];
  const lines = entries.length ? entries.map(item => {
    const amount = Number(item.amount || 0);
    return (amount >= 0 ? "🟢" : "🔴") + " <b>" + (amount >= 0 ? "+" : "") + botMoney(amount) + " تومان</b>\n   " +
      botEscape(item.description || "تراکنش") + "\n   مانده: " + botMoney(item.balance_after) + " · " + botDate(item.created_at);
  }).join("\n\n") : "هنوز تراکنشی ثبت نشده است.";
  return { text: "📊 <b>آخرین تراکنش‌ها</b>\n━━━━━━━━━━━━━━\n" + lines, reply_markup: { inline_keyboard: [[
    { text: "🔄 بروزرسانی", callback_data: "bot:ledger" }, { text: "🏠 منوی اصلی", callback_data: "bot:home" }
  ]] } };
}

async function botInvoicesView(env, account) {
  const invoices = await env.PASARGUARD_DB.prepare(`
    SELECT id,provider_invoice_id,amount_toman,final_amount_rial,status,payment_link,created_at
    FROM payment_invoices WHERE user_id=? ORDER BY created_at DESC LIMIT 8
  `).bind(account.user.id).all();
  const items = invoices.results || [];
  const lines = items.length ? items.map(item => {
    const isPending = String(item.status || "").toUpperCase() === "PENDING";
    return (isPending ? "🟠" : "✅") + " <b>" + botMoney(item.amount_toman) + " تومان</b>\n" +
      "   شماره: <code>" + botEscape(item.provider_invoice_id) + "</code>\n" +
      "   وضعیت: " + (isPending ? "در انتظار پرداخت" : botEscape(item.status)) + " · " + botDate(item.created_at);
  }).join("\n\n") : "فاکتوری برای شما ثبت نشده است.";
  const buttons = [];
  for (const item of items.filter(x => String(x.status).toUpperCase() === "PENDING").slice(0, 3)) {
    if (/^https?:\/\//i.test(String(item.payment_link || ""))) buttons.push([{ text: "💳 پرداخت " + String(item.provider_invoice_id).slice(-8), url: item.payment_link }]);
    buttons.push([{ text: "🔎 استعلام " + String(item.provider_invoice_id).slice(-8), callback_data: "bot:invoice:check:" + item.id }]);
  }
  buttons.push([{ text: "➕ ساخت فاکتور جدید", callback_data: "bot:charge:custom" }]);
  buttons.push([{ text: "🔄 بروزرسانی", callback_data: "bot:invoices" }, { text: "🏠 منوی اصلی", callback_data: "bot:home" }]);
  return { text: "🧾 <b>فاکتورهای من</b>\n━━━━━━━━━━━━━━\n" + lines, reply_markup: { inline_keyboard: buttons } };
}

async function botAdminView(env, account) {
  if (!account.isAdmin) throw new Error("این بخش فقط برای مدیر سامانه است");
  const managementUrl = centralManagementUrl(account.settings, account.public_origin || "");
  const stats = await env.PASARGUARD_DB.prepare(`
    SELECT
      (SELECT COUNT(*) FROM users) AS users_count,
      (SELECT COUNT(*) FROM agencies) AS agencies_count,
      (SELECT COUNT(*) FROM agencies WHERE status='active') AS active_agencies,
      (SELECT COUNT(*) FROM payment_invoices WHERE UPPER(status)='PENDING') AS pending_payments,
      (SELECT COUNT(*) FROM reseller_bots) AS sales_bots_count,
      (SELECT COUNT(*) FROM sales_orders WHERE status='pending_review') AS pending_sales_orders,
      (SELECT COALESCE(SUM(wallet_balance),0) FROM users) AS total_wallet_balance,
      (SELECT COALESCE(SUM(last_usage_bytes),0) FROM agencies) AS total_usage_bytes
  `).first();
  return {
    text: "⚙️ <b>مدیریت سامانه</b>\n━━━━━━━━━━━━━━\n" +
      "👥 کاربران: <b>" + botMoney(stats?.users_count) + "</b> · موجودی کل: <b>" + botMoney(stats?.total_wallet_balance) + " تومان</b>\n" +
      "🏢 پنل‌ها: <b>" + botMoney(stats?.agencies_count) + "</b> · فعال: <b>" + botMoney(stats?.active_agencies) + "</b>\n" +
      "📊 مصرف کل پنل‌ها: <b>" + botGb(stats?.total_usage_bytes) + "</b>\n" +
      "🤖 ربات‌های نماینده: <b>" + botMoney(stats?.sales_bots_count) + "</b>\n" +
      "🧾 فاکتور معلق: <b>" + botMoney(stats?.pending_payments) + "</b> · رسید فروش: <b>" + botMoney(stats?.pending_sales_orders) + "</b>\n\n" +
      "ابزارهای مدیریتی به‌صورت مستقیم و مرتب در دسترس‌اند.",
    reply_markup: { inline_keyboard: [
      [{ text: "👥 کاربران و موجودی", callback_data: "bot:admin:users" }, { text: "🔎 انتخاب کاربر", callback_data: "bot:admin:target" }],
      [{ text: "💳 تعرفه و هزینه‌ها", callback_data: "bot:admin:settings:finance" }, { text: "🔐 جوین اجباری", callback_data: "bot:admin:settings:access" }],
      [{ text: "📊 مصرف پنل نمایندگان", callback_data: "bot:admin:agency_usage" }, { text: "📡 همگام‌سازی مصرف", callback_data: "bot:admin:sync_usage" }],
      [{ text: "🔄 استعلام پرداخت‌ها", callback_data: "bot:admin:sync_payments" }],
      [{ text: "🧹 حذف فاکتورهای معلق", callback_data: "bot:admin:cleanup" }, { text: "📣 کانال آپدیت‌ها", callback_data: "bot:admin:release_channel" }],
      [{ text: "🧭 سلامت نمایندگان", callback_data: "bot:admin:reseller_ops" }, { text: "⚙️ تنظیمات سامانه", callback_data: "bot:admin:settings" }],
      [{ text: "📦 آپلود ZIP به GitHub", callback_data: "bot:admin:github_zip" }],
      [{ text: "🖥 داشبورد مدیریت وب", url: managementUrl }],
      [{ text: "🤖 ربات مرکزی", callback_data: "bot:admin:central_bot" }, { text: "🐍 Python Helper", callback_data: "bot:admin:python" }],
      [{ text: "🔄 بروزرسانی", callback_data: "bot:admin" }, { text: "🏠 منوی اصلی", callback_data: "bot:home" }]
    ] }
  };
}


async function botGithubZipView(env, account) {
  if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const settings = await getSettings(env);
  const last = await env.PASARGUARD_DB.prepare(`
    SELECT version,file_name,file_count,status,commit_sha,commit_url,error,updated_at
    FROM github_zip_uploads ORDER BY updated_at DESC LIMIT 1
  `).first();
  const repo = normalizeGithubRepo(settings.github_repo || "");
  const branch = String(settings.github_branch || "main");
  const tokenReady = Boolean(String(settings.github_token || "").trim());
  let lastText = "هنوز فایل ZIP از ربات آپلود نشده است.";
  if (last) {
    const status = last.status === "completed" ? "✅ موفق" : last.status === "processing" ? "⏳ در حال پردازش" : "❌ ناموفق";
    lastText = status + (last.version ? " · نسخه <code>" + botEscape(last.version) + "</code>" : "") +
      "\nفایل: <code>" + botEscape(last.file_name || "-") + "</code>" +
      (last.commit_sha ? "\nCommit: <code>" + botEscape(String(last.commit_sha).slice(0, 12)) + "</code>" : "") +
      (last.error ? "\nخطا: <code>" + botEscape(cleanText(last.error, 350)) + "</code>" : "");
  }
  const rows = [
    [{ text: "📦 ارسال ZIP و انتشار", callback_data: "bot:admin:github_zip:start" }],
    [{ text: tokenReady ? "🔐 تغییر توکن GitHub" : "🔐 ثبت توکن GitHub", callback_data: "bot:admin:github_zip:token" }, { text: "🗂 تنظیم مخزن و Branch", callback_data: "bot:admin:github_zip:repo" }],
    [{ text: "🧪 تست اتصال GitHub", callback_data: "bot:admin:github_zip:test" }]
  ];
  if (last?.commit_url) rows.push([{ text: "🔎 مشاهده آخرین Commit", url: last.commit_url }]);
  rows.push([{ text: "↩️ مدیریت سامانه", callback_data: "bot:admin" }]);
  return {
    text: "📦 <b>آپلود خودکار ZIP به GitHub</b>\n━━━━━━━━━━━━━━\n" +
      "مخزن: <code>" + botEscape(repo || "تنظیم نشده") + "</code>\n" +
      "Branch: <code>" + botEscape(branch) + "</code>\n" +
      "توکن نوشتن: " + (tokenReady ? "✅ ثبت شده" : "❌ ثبت نشده") + "\n\n" +
      "ZIP پروژه را برای ربات می‌فرستی؛ ربات آن را امن باز می‌کند، ساختار پوشه‌ها را حفظ می‌کند و همه فایل‌ها را در یک Commit واقعی قرار می‌دهد. فایل README به‌صورت خودکار نادیده گرفته می‌شود.\n\n" +
      "<b>آخرین عملیات</b>\n" + lastText,
    reply_markup: { inline_keyboard: rows }
  };
}

async function botAdminGroupView(env, account, group) {
  if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const defs = {
    users: {
      title: "👥 کاربران و حساب‌ها",
      body: "مدیریت کاربران و اصلاح موجودی از این واحد انجام می‌شود.",
      chart: ["👥 فهرست کاربران", "🔎 انتخاب مستقیم کاربر"],
      rows: [
        [{ text: "👥 کاربران و موجودی", callback_data: "bot:admin:users" }],
        [{ text: "🔎 انتخاب مستقیم کاربر", callback_data: "bot:admin:target" }]
      ]
    },
    finance: {
      title: "💳 مالی و تعرفه‌ها",
      body: "تعرفه‌ها، پرداخت‌ها و فاکتورهای معلق در این واحد کنترل می‌شوند.",
      chart: ["💳 تعرفه و هزینه‌ها", "🔄 استعلام پرداخت", "🧹 پاکسازی فاکتور معلق"],
      rows: [
        [{ text: "💳 تعرفه و هزینه‌ها", callback_data: "bot:admin:settings:finance" }],
        [{ text: "🔄 استعلام پرداخت‌ها", callback_data: "bot:admin:sync_payments" }],
        [{ text: "🧹 حذف فاکتورهای معلق", callback_data: "bot:admin:cleanup" }]
      ]
    },
    operations: {
      title: "🏢 پنل و مصرف",
      body: "همگام‌سازی مصرف پنل‌ها و کنترل عملکرد اجرایی سامانه.",
      chart: ["📊 گزارش مصرف پنل‌ها", "📡 همگام‌سازی مصرف", "⚙️ تنظیمات مصرف و حذف"],
      rows: [
        [{ text: "📊 مصرف پنل نمایندگان", callback_data: "bot:admin:agency_usage" }],
        [{ text: "📡 همگام‌سازی مصرف", callback_data: "bot:admin:sync_usage" }],
        [{ text: "⚙️ تنظیمات اتوماسیون", callback_data: "bot:admin:settings:automation" }]
      ]
    },
    communications: {
      title: "📣 پیام‌رسانی و انتشار",
      body: "کانال رسمی نسخه‌ها و عضویت اجباری مرکزی از این واحد مدیریت می‌شوند.",
      chart: ["📣 کانال آپدیت‌ها", "🔐 عضویت اجباری"],
      rows: [
        [{ text: "📣 کانال رسمی آپدیت‌ها", callback_data: "bot:admin:release_channel" }],
        [{ text: "🔐 عضویت اجباری مرکزی", callback_data: "bot:admin:settings:access" }]
      ]
    },
    system: {
      title: "⚙️ زیرساخت و نگهداری",
      body: "ترمیم سرویس‌ها و تنظیمات نگهداری فنی سامانه.",
      chart: ["🧭 پایداری نمایندگان", "🐍 Python Helper", "🛠 ربات مرکزی", "⚙️ تنظیمات مرکزی"],
      rows: [
        [{ text: "🧭 پایداری و پشتیبان نمایندگان", callback_data: "bot:admin:reseller_ops" }],
        [{ text: "🐍 ترمیم Python Helper", callback_data: "bot:admin:python" }],
        [{ text: "🤖 مدیریت ربات مرکزی", callback_data: "bot:admin:central_bot" }],
        [{ text: "⚙️ مرکز تنظیمات", callback_data: "bot:admin:settings" }]
      ]
    }
  };
  const d = defs[group] || defs.users;
  d.rows.push([{ text: "⚙️ مدیریت سامانه", callback_data: "bot:admin" }]);
  return { text: d.title + "\n━━━━━━━━━━━━━━\n" + d.body + "\n\n" + d.chart.map((x,i)=>(i===d.chart.length-1?"└─ ":"├─ ")+x).join("\n"), reply_markup: { inline_keyboard: d.rows } };
}

async function botAdminAgencyUsageView(env, account, requestedPage = 0) {
  if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const pageSize = 8;
  const summary = await env.PASARGUARD_DB.prepare(`
    SELECT COUNT(*) AS total,
           COALESCE(SUM(last_usage_bytes),0) AS total_usage_bytes,
           COALESCE(SUM(total_charged),0) AS total_charged,
           SUM(CASE WHEN status='active' THEN 1 ELSE 0 END) AS active_count
    FROM agencies
  `).first();
  const total = Math.max(0, Number(summary?.total || 0));
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const parsedPage = Number.parseInt(String(requestedPage ?? 0), 10);
  const page = Math.max(0, Math.min(pages - 1, Number.isFinite(parsedPage) ? parsedPage : 0));
  const rows = await env.PASARGUARD_DB.prepare(`
    SELECT a.id,a.title,a.panel_username,a.status,a.last_usage_bytes,a.total_charged,a.updated_at,
           u.telegram_id,u.username AS owner_username,u.first_name,u.last_name
    FROM agencies a
    JOIN users u ON u.id=a.user_id
    ORDER BY a.last_usage_bytes DESC,a.updated_at DESC
    LIMIT ? OFFSET ?
  `).bind(pageSize, page * pageSize).all();
  const items = rows.results || [];
  const statusLabels = {
    active: "فعال",
    suspended_balance: "تعلیق موجودی",
    disabled: "غیرفعال",
    trial_expired: "تست منقضی"
  };
  const lines = items.length ? items.map((item, index) => {
    const owner = [item.first_name, item.last_name].filter(Boolean).join(" ") || item.owner_username || item.telegram_id;
    const panel = item.title || item.panel_username || "پنل نمایندگی";
    const status = statusLabels[String(item.status || "").toLowerCase()] || item.status || "نامشخص";
    return (page * pageSize + index + 1) + ". 🏢 <b>" + botEscape(panel) + "</b>\n" +
      "   👤 " + botEscape(owner) + " · <code>" + botEscape(item.telegram_id) + "</code>\n" +
      "   🔑 <code>" + botEscape(item.panel_username) + "</code>\n" +
      "   📊 مصرف: <b>" + botGb(item.last_usage_bytes) + "</b> · هزینه: <b>" + botMoney(item.total_charged) + " تومان</b>\n" +
      "   وضعیت: <b>" + botEscape(status) + "</b> · بروزرسانی: " + botEscape(botDate(item.updated_at));
  }).join("\n\n") : "هنوز پنل نمایندگی ثبت نشده است.";
  const buttons = [];
  const pager = [];
  if (page > 0) pager.push({ text: "◀️ قبلی", callback_data: "bot:admin:agency_usage:page:" + (page - 1) });
  if (page + 1 < pages) pager.push({ text: "بعدی ▶️", callback_data: "bot:admin:agency_usage:page:" + (page + 1) });
  if (pager.length) buttons.push(pager);
  buttons.push([{ text: "🔄 همگام‌سازی و بروزرسانی", callback_data: "bot:admin:agency_usage:refresh:" + page }]);
  buttons.push([{ text: "↩️ مدیریت سامانه", callback_data: "bot:admin" }]);
  return {
    text: "📊 <b>ترافیک مصرفی پنل نمایندگان</b>\n━━━━━━━━━━━━━━\n" +
      "🏢 کل پنل‌ها: <b>" + botMoney(total) + "</b> · فعال: <b>" + botMoney(summary?.active_count) + "</b>\n" +
      "📦 مصرف کل: <b>" + botGb(summary?.total_usage_bytes) + "</b>\n" +
      "💰 هزینه ثبت‌شده: <b>" + botMoney(summary?.total_charged) + " تومان</b>\n" +
      "📄 صفحه <b>" + botMoney(page + 1) + "</b> از <b>" + botMoney(pages) + "</b>\n\n" + lines,
    reply_markup: { inline_keyboard: buttons }
  };
}

async function botAdminUsersView(env, account) {
  if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const rows = await env.PASARGUARD_DB.prepare(`
    SELECT id,telegram_id,username,first_name,wallet_balance,status
    FROM users ORDER BY updated_at DESC LIMIT 10
  `).all();
  const users = rows.results || [];
  const lines = users.length ? users.map((u, index) =>
    (index + 1) + ". <b>" + botEscape(u.first_name || u.username || u.telegram_id) + "</b>\n" +
    "   <code>" + botEscape(u.telegram_id) + "</code> · " + botMoney(u.wallet_balance) + " تومان"
  ).join("\n\n") : "کاربری ثبت نشده است.";
  const buttons = users.slice(0, 8).map((u, index) => [{ text: "💰 کاربر " + (index + 1), callback_data: "bot:admin:balance:" + u.id }]);
  buttons.push([{ text: "🔎 جستجوی شناسه دیگر", callback_data: "bot:admin:target" }]);
  buttons.push([{ text: "↩️ مدیریت", callback_data: "bot:admin" }]);
  return { text: "👥 <b>کاربران اخیر</b>\n━━━━━━━━━━━━━━\n" + lines, reply_markup: { inline_keyboard: buttons } };
}

async function botCentralIdentityView(env, account) {
  if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const settings = await getSettings(env);
  let botId = cleanText(settings.central_bot_telegram_id, 40) || (String(settings.bot_token || "").split(":")[0] || "");
  let username = cleanText(settings.central_bot_username, 100);
  let displayName = cleanText(settings.central_bot_name, 120);
  let apiStatus = "🟢 متصل";
  try {
    const info = await telegramApi(env, "getMe", {});
    const me = info?.result || {};
    botId = cleanText(me.id, 40) || botId;
    username = cleanText(me.username, 100) || username;
    displayName = cleanText([me.first_name, me.last_name].filter(Boolean).join(" "), 120) || displayName;
    await setSettings(env, { central_bot_telegram_id: botId, central_bot_username: username, central_bot_name: displayName });
  } catch (error) {
    apiStatus = "🔴 خطای اتصال: " + botEscape(cleanText(error.message, 140));
  }
  const adminIds = normalizeTelegramAdminIds(settings.admin_ids || account.user.telegram_id).split(",");
  const tokenUpdated = settings.central_bot_token_updated_at ? botDate(settings.central_bot_token_updated_at) : "—";
  const adminsUpdated = settings.central_bot_admin_ids_updated_at ? botDate(settings.central_bot_admin_ids_updated_at) : "—";
  const rows = [
    [{ text: "🔑 تغییر توکن", callback_data: "bot:admin:central_bot:token" }, { text: "👤 تغییر آیدی مدیران", callback_data: "bot:admin:central_bot:admins" }],
    [{ text: "🛠 ترمیم Webhook و Menu", callback_data: "bot:admin:repair_bot" }, { text: "🔄 بروزرسانی اطلاعات", callback_data: "bot:admin:central_bot" }]
  ];
  if (username) rows.push([{ text: "🚀 بازکردن ربات مرکزی", url: "https://t.me/" + username.replace(/^@/, "") }]);
  if (botId) rows.push([{ text: "📋 کپی Bot ID", copy_text: { text: botId } }]);
  rows.push([{ text: "↩️ مدیریت سامانه", callback_data: "bot:admin" }]);
  return {
    text: "🤖 <b>مدیریت ربات مرکزی</b>\n━━━━━━━━━━━━━━\n" +
      "وضعیت API: <b>" + apiStatus + "</b>\n" +
      "نام: <b>" + botEscape(displayName || "ثبت نشده") + "</b>\n" +
      "یوزرنیم: <code>" + botEscape(username ? "@" + username.replace(/^@/, "") : "ثبت نشده") + "</code>\n" +
      "Bot ID: <code>" + botEscape(botId || "ثبت نشده") + "</code>\n" +
      "توکن: <b>" + (settings.bot_token ? "ثبت شده و مخفی" : "ثبت نشده") + "</b>\n" +
      "مدیران: <b>" + botMoney(adminIds.length) + " نفر</b>\n" +
      adminIds.map(x => "• <code>" + botEscape(x) + "</code>").join("\n") + "\n\n" +
      "آخرین تغییر توکن: <b>" + botEscape(tokenUpdated) + "</b>\n" +
      "آخرین تغییر مدیران: <b>" + botEscape(adminsUpdated) + "</b>\n\n" +
      "⚠️ با تغییر توکن، Webhook و دکمه مینی‌اپ روی ربات جدید به‌صورت خودکار تنظیم می‌شوند.",
    reply_markup: { inline_keyboard: rows }
  };
}

async function botAdminSettingsView(env, account) {
  if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const s = account.settings;
  return {
    text: "⚙️ <b>تنظیمات سامانه</b>\n━━━━━━━━━━━━━━\n" +
      "💠 قیمت هر گیگ: <b>" + botMoney(s.price_per_gb) + " تومان</b>\n" +
      "💰 حداقل موجودی ساخت پنل: <b>" + botMoney(s.setup_fee) + " تومان</b>\n" +
      "🤖 هزینه ساخت ربات: <b>" + botMoney(s.reseller_bot_setup_fee || 0) + " تومان</b>\n" +
      "🪪 تمدید ماهانه ربات: <b>" + botMoney(s.reseller_bot_license_renewal_fee || 0) + " تومان</b>\n" +
      "🎉 بونس شارژ مرکزی: <b>" + botMoney(s.central_recharge_bonus_percent || 0) + "٪</b>\n" +
      "🎁 تست رایگان مرکزی: <b>" + (s.central_trial_enabled === "true" ? "فعال" : "غیرفعال") + "</b>\n" +
      "💳 حداقل شارژ: <b>" + botMoney(s.min_recharge) + " تومان</b>\n" +
      "🔐 جوین اجباری: <b>" + (s.central_join_enabled === "true" ? "فعال" : "غیرفعال") + "</b>\n" +
      "⚙️ همگام‌سازی مصرف: <b>" + (s.usage_sync_enabled === "true" ? "فعال" : "غیرفعال") + "</b>",
    reply_markup: { inline_keyboard: [
      [{ text: "💠 قیمت هر گیگ", callback_data: "bot:setting:price_per_gb" }, { text: "💰 حداقل موجودی پنل", callback_data: "bot:setting:setup_fee" }],
      [{ text: "🤖 هزینه ساخت ربات", callback_data: "bot:setting:reseller_bot_setup_fee" }, { text: "🪪 تمدید ماهانه", callback_data: "bot:setting:reseller_bot_license_renewal_fee" }],
      [{ text: "🎉 بونس شارژ", callback_data: "bot:setting:central_recharge_bonus_percent" }],
      [{ text: "🎁 تنظیم تست مرکزی", callback_data: "bot:admin:trial" }],
      [{ text: "💳 حداقل شارژ", callback_data: "bot:setting:min_recharge" }, { text: "⏱ انقضای فاکتور", callback_data: "bot:setting:pending_invoice_ttl_hours" }],
      [{ text: "🔐 تنظیمات عضویت", callback_data: "bot:admin:settings:access" }, { text: "⚙️ تنظیمات خودکار", callback_data: "bot:admin:settings:automation" }],
      [{ text: "↩️ مدیریت سامانه", callback_data: "bot:admin" }]
    ] }
  };
}

async function botAdminTrialView(env, account) {
  if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const settings = await getSettings(env);
  const config = centralTrialConfig(settings);
  const stats = await env.PASARGUARD_DB.prepare(`
    SELECT COUNT(*) AS total,
      SUM(CASE WHEN status='active' THEN 1 ELSE 0 END) AS active,
      SUM(CASE WHEN status='trial_expired' THEN 1 ELSE 0 END) AS expired
    FROM agencies WHERE is_trial=1
  `).first();
  return {
    text: "🎁 <b>مدیریت تست رایگان مرکزی</b>\n━━━━━━━━━━━━━━\n" +
      "وضعیت: <b>" + (config.enabled ? "🟢 فعال" : "🔴 غیرفعال") + "</b>\n" +
      "حجم هر تست: <b>" + botGb(config.dataLimitBytes) + "</b>\n" +
      "مدت اعتبار: <b>" + botMoney(config.durationHours) + " ساعت</b>\n\n" +
      "کل تست‌های دریافت‌شده: <b>" + botMoney(stats?.total || 0) + "</b>\n" +
      "تست فعال: <b>" + botMoney(stats?.active || 0) + "</b>\n" +
      "پایان‌یافته: <b>" + botMoney(stats?.expired || 0) + "</b>\n\n" +
      "هر حساب فقط یک‌بار تست دریافت می‌کند و مصرف آن از کیف پول کسر نمی‌شود.",
    reply_markup: { inline_keyboard: [
      [{ text: config.enabled ? "⏸ غیرفعال‌کردن تست" : "▶️ فعال‌کردن تست", callback_data: "bot:admin:trial:toggle" }],
      [{ text: "📦 تغییر حجم تست", callback_data: "bot:admin:trial:data" }, { text: "⏱ تغییر مدت تست", callback_data: "bot:admin:trial:duration" }],
      [{ text: "↩️ تنظیمات سامانه", callback_data: "bot:admin:settings" }]
    ] }
  };
}

async function botAdminSettingsGroupView(env, account, group) {
  if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const s = account.settings;
  const defs = {
    finance: {
      title: "💳 تعرفه و هزینه‌ها",
      lines: [
        "💠 قیمت هر گیگ: <b>" + botMoney(s.price_per_gb) + " تومان</b>",
        "💰 حداقل موجودی ساخت پنل: <b>" + botMoney(s.setup_fee) + " تومان</b>",
        "🤖 هزینه ساخت ربات نماینده: <b>" + botMoney(s.reseller_bot_setup_fee || 0) + " تومان</b>",
        "🪪 تمدید ماهانه ربات: <b>" + botMoney(s.reseller_bot_license_renewal_fee || 0) + " تومان</b>",
        "🎉 بونس شارژ مرکزی: <b>" + botMoney(s.central_recharge_bonus_percent || 0) + "٪</b>",
        "💳 حداقل شارژ: <b>" + botMoney(s.min_recharge) + " تومان</b>"
      ],
      rows: [
        [{ text: "قیمت هر گیگ", callback_data: "bot:setting:price_per_gb" }, { text: "حداقل موجودی پنل", callback_data: "bot:setting:setup_fee" }],
        [{ text: "هزینه ساخت ربات", callback_data: "bot:setting:reseller_bot_setup_fee" }, { text: "تمدید ماهانه", callback_data: "bot:setting:reseller_bot_license_renewal_fee" }],
        [{ text: "بونس شارژ مرکزی", callback_data: "bot:setting:central_recharge_bonus_percent" }],
        [{ text: "🪙 مدیریت بیت‌پین", callback_data: "bot:admin:bitpin" }],
        [{ text: "حداقل شارژ", callback_data: "bot:setting:min_recharge" }]
      ]
    },
    access: {
      title: "🔐 دسترسی و عضویت",
      lines: [
        "📢 جوین اجباری مرکزی: <b>" + (s.central_join_enabled === "true" ? "فعال" : "غیرفعال") + "</b>",
        "📣 تعداد کانال‌ها: <b>" + botMoney(parseJoinChannels(s.central_join_channels).length) + "</b>"
      ],
      rows: [
        [{ text: s.central_join_enabled === "true" ? "خاموش‌کردن جوین مرکزی" : "فعال‌کردن جوین مرکزی", callback_data: "bot:toggle:central_join_enabled" }],
        [{ text: "📢 نمایش و مدیریت کانال‌ها", callback_data: "bot:admin:join_channels" }]
      ]
    },
    automation: {
      title: "⚙️ اتوماسیون و نگهداری",
      lines: [
        "🕒 حذف فاکتور معلق: <b>" + botMoney(s.pending_invoice_ttl_hours) + " ساعت</b>",
        "🧹 حذف خودکار: <b>" + (s.auto_delete_pending_invoices === "true" ? "روشن" : "خاموش") + "</b>",
        "📡 همگام‌سازی مصرف: <b>" + (s.usage_sync_enabled === "true" ? "روشن" : "خاموش") + "</b>"
      ],
      rows: [
        [{ text: "زمان حذف فاکتور", callback_data: "bot:setting:pending_invoice_ttl_hours" }],
        [{ text: "🧹 تغییر حذف خودکار", callback_data: "bot:toggle:auto_delete_pending_invoices" }, { text: "📡 تغییر همگام‌سازی", callback_data: "bot:toggle:usage_sync_enabled" }]
      ]
    }
  };
  const d = defs[group] || defs.finance;
  d.rows.push([{ text: "↩️ مرکز تنظیمات", callback_data: "bot:admin:settings" }]);
  return { text: d.title + "\n━━━━━━━━━━━━━━\n" + d.lines.join("\n"), reply_markup: { inline_keyboard: d.rows } };
}

async function botAdminJoinChannelsView(env, account) {
  if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const settings = await getSettings(env);
  const channels = parseJoinChannels(settings.central_join_channels);
  const enabled = settings.central_join_enabled === "true";
  const details = channels.length ? channels.map((channel, index) => {
    return (index + 1) + ". <b>" + botEscape(channel.title || channel.chat_id) + "</b>\n" +
      "   شناسه: <code>" + botEscape(channel.chat_id) + "</code>" +
      (channel.url ? "\n   لینک عضویت: ثبت شده" : "\n   لینک عضویت: ثبت نشده");
  }).join("\n\n") : "هیچ کانالی برای قفل اجباری ثبت نشده است.";
  const rows = [];
  channels.forEach((channel, index) => {
    rows.push([
      { text: "🔎 بررسی " + (index + 1), callback_data: "bot:admin:join:check:" + index },
      { text: "🗑 حذف " + (index + 1), callback_data: "bot:admin:join:remove:" + index }
    ]);
  });
  rows.push([{ text: "➕ افزودن کانال", callback_data: "bot:admin:join:add" }, { text: "📝 جایگزینی همه", callback_data: "bot:admin:join:replace" }]);
  rows.push([{ text: enabled ? "⏸ خاموش‌کردن قفل" : "▶️ فعال‌کردن قفل", callback_data: "bot:admin:join:toggle" }]);
  rows.push([{ text: "↩️ دسترسی و عضویت", callback_data: "bot:admin:settings:access" }]);
  return {
    text: "🔐 <b>مدیریت کانال‌های قفل اجباری</b>\n━━━━━━━━━━━━━━\n" +
      "وضعیت: <b>" + (enabled ? "🟢 فعال" : "🔴 غیرفعال") + "</b>\n" +
      "تعداد کانال‌ها: <b>" + botMoney(channels.length) + "</b>\n\n" + details +
      "\n\nربات مرکزی باید در هر کانال مدیر باشد تا عضویت کاربران را بررسی کند.",
    reply_markup: { inline_keyboard: rows }
  };
}

async function botReleaseChannelView(env, account) {
  if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
  const s = await getSettings(env);
  const enabled = s.release_channel_enabled === "true";
  const target = String(s.release_channel_chat_id || "").trim();
  const title = cleanText(s.release_channel_title, 100) || target || "ثبت نشده";
  const channelUrl = releaseChannelPublicUrl(s);
  const lastVersion = cleanText(s.release_last_announced_version, 40) || "هنوز ارسال نشده";
  const lastAt = s.release_last_announcement_at ? botDate(s.release_last_announcement_at) : "—";
  const lastError = cleanText(s.release_last_announcement_error, 500);
  const rows = [
    [{ text: "✏️ تعیین کانال", callback_data: "bot:admin:release:set" }, { text: enabled ? "⏸ غیرفعال‌کردن" : "▶️ فعال‌کردن", callback_data: "bot:admin:release:toggle" }],
    [{ text: "🧪 ارسال آزمایشی", callback_data: "bot:admin:release:test" }, { text: "🚀 انتشار نسخه فعلی", callback_data: "bot:admin:release:publish" }]
  ];
  if (channelUrl) rows.push([{ text: "📢 بازکردن کانال آپدیت‌ها", url: channelUrl }]);
  rows.push([{ text: "↩️ مدیریت", callback_data: "bot:admin" }]);
  return {
    text: "📣 <b>کانال رسمی آپدیت‌ها</b>\n━━━━━━━━━━━━━━\n" +
      "وضعیت ارسال خودکار: <b>" + (enabled ? "🟢 فعال" : "🔴 غیرفعال") + "</b>\n" +
      "کانال: <b>" + botEscape(title) + "</b>\n" +
      (target ? "شناسه: <code>" + botEscape(target) + "</code>\n" : "") +
      "لینک قابل ارسال به نمایندگان: <b>" + (channelUrl ? "ثبت شده" : "ثبت نشده") + "</b>\n" +
      "نسخه فعلی: <code>" + botEscape(APP_VERSION) + "</code>\n" +
      "آخرین نسخه منتشرشده: <code>" + botEscape(lastVersion) + "</code>\n" +
      "آخرین ارسال: <b>" + botEscape(lastAt) + "</b>" +
      (lastError ? "\n\n⚠️ آخرین خطا:\n<code>" + botEscape(lastError) + "</code>" : "") +
      "\n\nبعد از تحویل هر پنل نمایندگی، لینک همین کانال نیز به‌صورت خودکار برای نماینده ارسال می‌شود.",
    reply_markup: { inline_keyboard: rows }
  };
}

function botSupportView(account) {
  const url = botSupportUrl(account.settings);
  const rows = [];
  if (url) rows.push([{ text: "💬 ارتباط با پشتیبانی", url }]);
  rows.push([{ text: "🏠 منوی اصلی", callback_data: "bot:home" }]);
  return {
    text: "🆘 <b>پشتیبانی</b>\n━━━━━━━━━━━━━━\n" +
      (url ? "برای ارتباط مستقیم با پشتیبانی از دکمه زیر استفاده کنید." : "راه ارتباطی پشتیبانی هنوز در تنظیمات ثبت نشده است.") +
      "\n\nشناسه شما:\n<code>" + botEscape(account.user.telegram_id) + "</code>",
    reply_markup: { inline_keyboard: rows }
  };
}

function botHelpView(account) {
  return {
    text: "ℹ️ <b>راهنمای ربات مستقل</b>\n━━━━━━━━━━━━━━\n" +
      "برای استفاده از امکانات ربات نیازی به ورود به مینی‌اپ نیست. هر دو رابط از همان حساب و دیتابیس استفاده می‌کنند.\n\n" +
      "• ساخت فاکتور و شارژ کیف پول\n" +
      "• دریافت یک‌باره تست رایگان مرکزی\n" +
      "• ساخت پنل و دریافت اطلاعات ورود\n" +
      "• مشاهده پنل‌ها، تراکنش‌ها و فاکتورها\n" +
      "• ساخت ربات فروش اختصاصی؛ مدیریت کامل از داشبورد مستقل مرورگر\n" +
      "• مدیریت موجودی کاربران و ابزارهای سامانه برای مدیر\n\n" +
      "فرمان‌ها:\n/start /menu /wallet /trial /panels /buy_panel /buy_bot /salesbot /invoices /transactions /id /cancel" +
      (account?.isAdmin ? "\n/upload_update — ارسال ZIP بروزرسانی به GitHub" : ""),
    reply_markup: { inline_keyboard: [[{ text: "🏠 منوی اصلی", callback_data: "bot:home" }]] }
  };
}

async function botRenderView(env, account, view) {
  if (view === "operations") return botOperationsMenuView(account);
  if (view === "reports") return botReportsMenuView(account);
  if (view === "assistance") return botAssistanceMenuView(account);
  if (view === "wallet") return botWalletView(env, account);
  if (view === "bitpin") return botBitpinView(env, account);
  if (view === "trial") return botCentralTrialView(env, account);
  if (view === "agencies") return botAgenciesView(env, account);
  if (view === "buy_agency") return botBuyAgencyView(env, account);
  if (view === "buy_bot") return botBuyResellerBotView(env, account);
  if (view === "sales_bot") return botSalesBotView(env, account);
  if (view === "sales_type") return botSalesTypeView(env, account);
  if (view === "sales_plans") return botSalesPlansView(env, account);
  if (view === "sales_orders") return botSalesOrdersView(env, account);
  if (view === "sales_catalog") return botSalesCatalogView(env, account);
  if (view === "sales_wallets") return botSalesWalletRequestsView(env, account);
  if (view === "sales_stats") return botSalesStatsView(env, account);
  if (view === "sales_users") return botSalesUsersView(env, account);
  if (view === "sales_texts") return botSalesTextsView(env, account);
  if (view === "sales_settings") return botSalesSettingsView(env, account);
  if (view === "ledger") return botLedgerView(env, account);
  if (view === "invoices") return botInvoicesView(env, account);
  if (view === "support") return botSupportView(account);
  if (view === "help") return botHelpView(account);
  if (view === "admin") return botAdminView(env, account);
  if (view === "admin_central_bot") return botCentralIdentityView(env, account);
  if (view === "admin_group_users") return botAdminGroupView(env, account, "users");
  if (view === "admin_group_finance") return botAdminGroupView(env, account, "finance");
  if (view === "admin_group_operations") return botAdminGroupView(env, account, "operations");
  if (view === "admin_group_communications") return botAdminGroupView(env, account, "communications");
  if (view === "admin_group_system") return botAdminGroupView(env, account, "system");
  if (String(view || "").startsWith("admin_agency_usage:")) {
    const page = String(view).split(":")[1] || 0;
    return botAdminAgencyUsageView(env, account, page);
  }
  if (view === "admin_users") return botAdminUsersView(env, account);
  if (view === "admin_settings") return botAdminSettingsView(env, account);
  if (view === "admin_trial") return botAdminTrialView(env, account);
  if (view === "admin_bitpin") return botAdminBitpinView(env, account);
  if (view === "admin_bitpin_claims") return botAdminBitpinClaimsView(env, account);
  if (view === "admin_settings_finance") return botAdminSettingsGroupView(env, account, "finance");
  if (view === "admin_settings_access") return botAdminSettingsGroupView(env, account, "access");
  if (view === "admin_settings_automation") return botAdminSettingsGroupView(env, account, "automation");
  if (view === "admin_join_channels") return botAdminJoinChannelsView(env, account);
  if (view === "admin_release_channel") return botReleaseChannelView(env, account);
  if (view === "admin_github_zip") return botGithubZipView(env, account);
  if (view === "admin_reseller_ops") return botAdminResellerOpsView(env, account);
  return botHomeView(env, account);
}

async function botSendOrEdit(env, target, view) {
  const account = target.account || await ensureTelegramBotUser(env, target.from);
  const rendered = await botRenderView(env, account, view);
  const payload = {
    chat_id: target.chatId,
    text: rendered.text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: rendered.reply_markup
  };
  if (target.messageId) {
    try {
      await telegramApi(env, "editMessageText", { ...payload, message_id: target.messageId });
      return account;
    } catch (error) {
      const message = String(error.message || "").toLowerCase();
      if (message.includes("message is not modified")) return account;
    }
  }
  await telegramApi(env, "sendMessage", payload);
  return account;
}

async function botCreatePaymentInvoice(env, user, amountToman) {
  const settings = await getSettings(env);
  const amount = clampInt(amountToman, 0, 1000000000000);
  const minRecharge = Math.max(10000, clampInt(settings.min_recharge, 0));
  if (amount < minRecharge) throw new Error("حداقل مبلغ شارژ " + botMoney(minRecharge) + " تومان است");
  const amountRial = amount * 10;
  const requestBody = { amount: amountRial };
  if (settings.blupal_card_number) requestBody.card_number = String(settings.blupal_card_number).replace(/\D/g, "");
  const provider = await blupalRequest(env, "POST", "/v1/invoices/create", requestBody);
  const providerInvoiceId = cleanText(provider.invoice_id, 100);
  const finalAmountRial = clampInt(provider.final_amount, 0, Number.MAX_SAFE_INTEGER);
  const paymentLink = cleanText(provider.payment_link, 1000);
  if (!providerInvoiceId || !finalAmountRial || !paymentLink) throw new Error("پاسخ بلوپال ناقص است");
  if (clampInt(provider.amount, 0) !== amountRial) throw new Error("مبلغ برگشتی بلوپال با درخواست تطبیق ندارد");
  const localId = id("pay");
  const ts = nowIso();
  await env.PASARGUARD_DB.prepare(`
    INSERT INTO payment_invoices(
      id,user_id,provider,provider_invoice_id,amount_rial,amount_toman,final_amount_rial,
      status,payment_link,card_number,provider_payload,created_at,updated_at
    ) VALUES(?,?,'blupal',?,?,?,?,?,?,?,?,?,?)
  `).bind(
    localId, user.id, providerInvoiceId, amountRial, amount, finalAmountRial,
    normalizePaymentStatus(provider.status), paymentLink, cleanText(provider.card_number, 100),
    JSON.stringify(provider), ts, ts
  ).run();
  await audit(env, user.id, "bot_blupal_invoice_created", { paymentId: localId, providerInvoiceId, amountToman: amount });
  return { id: localId, providerInvoiceId, amount, paymentLink, status: normalizePaymentStatus(provider.status) };
}

async function botCreateAgency(env, user, input = {}) {
  const settings = await getSettings(env);
  if (!agencySalesOpen(settings)) {
    throw new Error("فروش و ساخت پنل نمایندگی موقتاً توسط مدیریت مرکزی متوقف شده است");
  }
  // setup_fee remains the storage key, but it represents the minimum balance gate.
  const requiredBalance = clampInt(settings.setup_fee, 0, 1000000000000);
  const freshUser = await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE id=?").bind(user.id).first();
  const currentBalance = Number(freshUser?.wallet_balance || 0);
  if (currentBalance < requiredBalance) {
    throw new Error(
      "برای ساخت پنل باید حداقل " + botMoney(requiredBalance) +
      " تومان موجودی داشته باشید؛ این مبلغ پس از ساخت کسر نمی‌شود"
    );
  }
  const title = cleanText(input.title, 80) || "نمایندگی من";
  const username = normalizeUsername(input.username || (user.username ? user.username + "_" + Math.random().toString(36).slice(2, 6) : "reseller_" + String(user.telegram_id).slice(-6)));
  const password = cleanText(input.password, 80) || randomPassword();
  const passwordErrors = validatePasarguardPassword(password, username);
  if (passwordErrors.length) throw new Error(passwordErrors.join("؛ "));

  const initiallySuspended = currentBalance <= 0;
  const remote = await pasargadCreateManager(env, {
    title,
    username,
    password,
    telegramId: user.telegram_id,
    telegramUsername: user.username,
    enabled: !initiallySuspended
  });
  const latestAgencySalesSettings = await getSettings(env);
  if (!agencySalesOpen(latestAgencySalesSettings)) {
    try { await pasargadDeleteManager(env, remote.remoteId); } catch (_) {}
    throw new Error("فروش پنل در حین ساخت توسط مدیریت مرکزی متوقف شد؛ ساخت لغو شد");
  }
  const agencyId = id("agn");
  const encryptedPassword = await encryptSecret(password, env);
  const ts = nowIso();
  const insertResult = await env.PASARGUARD_DB.prepare(`
    INSERT INTO agencies(id,user_id,title,remote_manager_id,panel_username,panel_password_enc,status,provisioning_source,runtime_version,update_applied_at,created_at,updated_at)
    SELECT ?,?,?,?,?,?,?,'central',?,?,?,? WHERE EXISTS(SELECT 1 FROM users WHERE id=? AND wallet_balance>=?)
  `).bind(
    agencyId,
    user.id,
    title,
    remote.remoteId,
    username,
    encryptedPassword,
    initiallySuspended ? "suspended_balance" : "active",
    APP_VERSION,
    ts,
    ts,
    ts,
    user.id,
    requiredBalance
  ).run();
  if (!Number(insertResult?.meta?.changes || 0)) {
    try { await pasargadDeleteManager(env, remote.remoteId); } catch (_) {}
    throw new Error("موجودی حساب هنگام ثبت پنل تغییر کرده است؛ دوباره تلاش کنید");
  }

  const balanceState = await reconcileUserAgencies(env, user.id);
  const created = await env.PASARGUARD_DB.prepare("SELECT status FROM agencies WHERE id=?").bind(agencyId).first();
  const status = created?.status || (balanceState.shouldSuspend ? "suspended_balance" : "active");
  await audit(env, user.id, "bot_agency_created", {
    agencyId,
    remoteId: remote.remoteId,
    username,
    minimumRequiredBalance: requiredBalance,
    balanceRetained: currentBalance,
    creationCharge: 0,
    status
  });
  await sendUpdateChannelAfterPanelDelivery(env, user.telegram_id, settings);
  return {
    id: agencyId,
    title,
    username,
    password,
    panelUrl: pasarguardDashboardUrl(settings),
    status,
    minimumRequiredBalance: requiredBalance,
    retainedWalletBalance: Number(balanceState.balance),
    creationCharge: 0
  };
}

async function botGetAgencyCredentials(env, user, agencyId) {
  const agency = await env.PASARGUARD_DB.prepare("SELECT * FROM agencies WHERE id=? AND user_id=?").bind(agencyId, user.id).first();
  if (!agency) throw new Error("پنل پیدا نشد");
  let password = "";
  try { password = await decryptSecret(agency.panel_password_enc, env); } catch (_) {}
  const settings = await getSettings(env);
  return { username: agency.panel_username, password, imported: isManualAgency(agency), panelUrl: pasarguardDashboardUrl(settings) };
}

async function botAdminAdjustBalance(env, adminUser, targetUserId, operation, amount, note = "") {
  const targetId = Number(targetUserId);
  if (!Number.isInteger(targetId) || targetId <= 0) throw new Error("شناسه کاربر معتبر نیست");
  const value = clampInt(amount, 0, 1000000000000);
  if (value <= 0) throw new Error("مبلغ باید بیشتر از صفر باشد");
  const target = await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE id=?").bind(targetId).first();
  if (!target) throw new Error("کاربر پیدا نشد");
  const ts = nowIso();
  const delta = operation === "increase" ? value : -value;
  const description = note || (operation === "increase" ? "افزایش موجودی توسط مدیر ربات" : "کاهش موجودی توسط مدیر ربات");
  const update = operation === "increase"
    ? env.PASARGUARD_DB.prepare("UPDATE users SET wallet_balance=wallet_balance+?,updated_at=? WHERE id=?").bind(value, ts, targetId)
    : env.PASARGUARD_DB.prepare("UPDATE users SET wallet_balance=wallet_balance-?,updated_at=? WHERE id=? AND wallet_balance>=?").bind(value, ts, targetId, value);
  const ledger = env.PASARGUARD_DB.prepare(`
    INSERT INTO wallet_ledger(id,user_id,type,amount,balance_after,ref_type,ref_id,description,created_at)
    SELECT ?,id,?,?,wallet_balance,'admin_adjustment',?,?,? FROM users WHERE id=? AND changes()=1
  `).bind(id("ledger"), operation === "increase" ? "admin_credit" : "admin_debit", delta, String(adminUser.id), description, ts, targetId);
  const results = await env.PASARGUARD_DB.batch([update, ledger]);
  if (!Number(results?.[0]?.meta?.changes || 0)) throw new Error(operation === "decrease" ? "موجودی کاربر کافی نیست" : "تغییر موجودی انجام نشد");
  const updated = await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE id=?").bind(targetId).first();
  await reconcileUserAgencies(env, targetId);
  await audit(env, adminUser.id, "bot_admin_balance_" + operation, { targetUserId: targetId, amount: value, balanceAfter: updated.wallet_balance });
  await notifyTelegramUser(env, target.telegram_id,
    (operation === "increase" ? "✅" : "ℹ️") + " موجودی شما توسط مدیر " + (operation === "increase" ? "افزایش" : "کاهش") + " یافت.\n" +
    "مبلغ: " + (operation === "increase" ? "+" : "-") + botMoney(value) + " تومان\nموجودی جدید: " + botMoney(updated.wallet_balance) + " تومان"
  );
  return updated;
}

async function botSendInvoice(env, chatId, payment) {
  await telegramApi(env, "sendMessage", {
    chat_id: chatId,
    text: "🧾 <b>فاکتور ساخته شد</b>\n━━━━━━━━━━━━━━\nمبلغ شارژ: <b>" + botMoney(payment.amount) + " تومان</b>\nشماره: <code>" + botEscape(payment.providerInvoiceId) + "</code>\nپس از پرداخت، دکمه استعلام را بزنید.",
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [
      [{ text: "💳 پرداخت فاکتور", url: payment.paymentLink }],
      [{ text: "🔎 استعلام پرداخت", callback_data: "bot:invoice:check:" + payment.id }],
      [{ text: "🧾 فاکتورها", callback_data: "bot:invoices" }]
    ] }
  });
}

async function botPrompt(env, chatId, text, rows = [[{ text: "لغو", callback_data: "bot:cancel" }]]) {
  await telegramApi(env, "sendMessage", { chat_id: chatId, text, parse_mode: "HTML", reply_markup: { inline_keyboard: rows } });
}

async function botHandleCallback(env, callback, origin, preloadedSettings = null) {
  if (!callback.message?.chat?.id) return;
  const chatId = callback.message.chat.id;
  const messageId = callback.message.message_id;
  const data = String(callback.data || "");
  const account = await ensureTelegramBotUser(env, callback.from, preloadedSettings);
  account.public_origin = origin;
  if (callback.message.chat.type && callback.message.chat.type !== "private") throw new Error("برای حفظ امنیت، ربات را در گفت‌وگوی خصوصی استفاده کنید");
  const joinStatus = await centralRequiredJoinStatus(env, account.settings, callback.from.id, account.isAdmin, data === "join:check");
  if (data === "join:check") {
    if (!joinStatus.ok) return sendCentralJoinPrompt(env, chatId, joinStatus.missing, messageId);
    await botClearSession(env, account.user.telegram_id);
    await botSendOrEdit(env, { account, chatId, messageId }, "home");
    return;
  }
  if (!joinStatus.ok) return sendCentralJoinPrompt(env, chatId, joinStatus.missing, messageId);

  const agencyCreationCallback = data === "bot:agency:new" || data === "bot:agency:auto_username" || data === "bot:agency:auto_password";
  if (agencyCreationCallback && !agencySalesOpen(account.settings)) {
    await botClearSession(env, account.user.telegram_id);
    throw new Error("فروش و ساخت پنل نمایندگی موقتاً توسط مدیریت مرکزی متوقف شده است");
  }
  const resellerCreationCallback = data.startsWith("bot:sales:create") || data.startsWith("bot:sales:agency:");
  if (resellerCreationCallback && !resellerBotSalesOpen(account.settings)) {
    await botClearSession(env, account.user.telegram_id);
    throw new Error("ساخت ربات نمایندگی موقتاً توسط مدیریت مرکزی متوقف شده است");
  }

  if (data === "bot:cancel") {
    await botClearSession(env, account.user.telegram_id);
    await botSendOrEdit(env, { account, chatId, messageId }, "home");
    return;
  }
  if (data.startsWith("bot:admin:agency_usage:page:")) {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const page = Math.max(0, botParseInteger(data.split(":").pop()) || 0);
    await botSendOrEdit(env, { account, chatId, messageId }, "admin_agency_usage:" + page);
    return;
  }
  if (data.startsWith("bot:admin:agency_usage:refresh:")) {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const page = Math.max(0, botParseInteger(data.split(":").pop()) || 0);
    const result = await syncUsage(env, 200);
    await audit(env, account.user.id, "bot_admin_agency_usage_refresh", result);
    await botSendOrEdit(env, { account, chatId, messageId }, "admin_agency_usage:" + page);
    return;
  }
  if (data === "bot:agencies:refresh") {
    try {
      await syncPasarguardManagersForUser(env, account.user);
      await syncUsageForUser(env, account.user.id, 30, 0);
    } catch (error) {
      await audit(env, account.user.id, "bot_agencies_usage_refresh_failed", { message: error.message });
    }
    await botSendOrEdit(env, { account, chatId, messageId }, "agencies");
    return;
  }
  const simpleViews = {
    "bot:home": "home", "bot:operations": "operations", "bot:reports": "reports", "bot:assistance": "assistance",
    "bot:wallet": "wallet", "bot:bitpin": "bitpin", "bot:trial": "trial", "bot:agencies": "agencies", "bot:buy:agency": "buy_agency", "bot:buy:bot": "buy_bot", "bot:sales": "sales_bot",
    "bot:ledger": "ledger", "bot:invoices": "invoices", "bot:support": "support", "bot:help": "help", "bot:admin": "admin",
    "bot:admin:central_bot": "admin_central_bot", "bot:admin:trial": "admin_trial", "bot:admin:bitpin": "admin_bitpin", "bot:admin:bitpin:claims": "admin_bitpin_claims", "bot:admin:agency_usage": "admin_agency_usage:0",
    "bot:admin:group:users": "admin_group_users", "bot:admin:group:finance": "admin_group_finance",
    "bot:admin:group:operations": "admin_group_operations", "bot:admin:group:communications": "admin_group_communications",
    "bot:admin:group:system": "admin_group_system", "bot:admin:reseller_ops": "admin_reseller_ops",
    "bot:admin:join_channels": "admin_join_channels", "bot:admin:github_zip": "admin_github_zip"
  };
  if (simpleViews[data]) {
    await botClearSession(env, account.user.telegram_id);
    await botSendOrEdit(env, { account, chatId, messageId }, simpleViews[data]);
    return;
  }


  if (data === "bot:bitpin:new") {
    const st=await getSettings(env);if(st.bitpin_enabled!=="true")throw new Error("واریز بیت‌پین غیرفعال است");
    await botSetSession(env,account.user.telegram_id,"bitpin_claim",{});
    await botPrompt(env,chatId,"🪙 مقدار رمزارز و TXID را با علامت <code>|</code> ارسال کنید.\nمثال:\n<code>10 | TXID_TRANSACTION</code>\n\nرمزارز: <b>"+botEscape(st.bitpin_asset||"USDT")+"</b> · شبکه: <b>"+botEscape(st.bitpin_network||"TRC20")+"</b>");return;
  }
  if (data === "bot:admin:bitpin:api" || data === "bot:admin:bitpin:secret" || data === "bot:admin:bitpin:asset" || data === "bot:admin:bitpin:address" || data === "bot:admin:bitpin:rate") {
    if(!account.isAdmin)throw new Error("دسترسی مدیر لازم است");
    const map={"bot:admin:bitpin:api":["setting_bitpin_api","🔑 API Key بیت‌پین را ارسال کنید."],"bot:admin:bitpin:secret":["setting_bitpin_secret","🔐 API Secret بیت‌پین را ارسال کنید."],"bot:admin:bitpin:asset":["setting_bitpin_asset","🪙 رمزارز و شبکه را ارسال کنید.\nمثال: <code>USDT | TRC20</code>"],"bot:admin:bitpin:address":["setting_bitpin_address","📍 آدرس واریز را ارسال کنید."],"bot:admin:bitpin:rate":["setting_bitpin_rate","💱 نرخ هر واحد به تومان و حداقل مقدار را ارسال کنید.\nمثال: <code>100000 | 1</code>"]};
    const item=map[data];await botSetSession(env,account.user.telegram_id,item[0],{});await botPrompt(env,chatId,item[1]);return;
  }
  if (data === "bot:admin:bitpin:toggle") {
    if(!account.isAdmin)throw new Error("دسترسی مدیر لازم است");const st=await getSettings(env);const next=st.bitpin_enabled==="true"?"false":"true";
    if(next==="true"&&(!st.bitpin_api_key||!st.bitpin_api_secret||!st.bitpin_deposit_address))throw new Error("ابتدا API Key، Secret و آدرس واریز را ثبت کنید");
    await setSettings(env,{bitpin_enabled:next});await audit(env,account.user.id,"central_bitpin_toggled",{enabled:next==="true"});const fresh=await ensureTelegramBotUser(env,callback.from);await botSendOrEdit(env,{account:fresh,chatId,messageId},"admin_bitpin");return;
  }
  if (data === "bot:admin:bitpin:test") {
    if(!account.isAdmin)throw new Error("دسترسی مدیر لازم است");const st=await getSettings(env);try{const snap=await fetchBitpinWallets(st,env);await recordBitpinConnectionState(env,true);const asset=String(st.bitpin_asset||"USDT").toUpperCase(),w=snap.wallets.find(x=>x.asset===asset);await botPrompt(env,chatId,"✅ اتصال بیت‌پین برقرار است."+(w?"\nموجودی "+botEscape(asset)+": <b>"+botEscape(w.balance)+"</b>":""),[[{text:"↩️ بیت‌پین",callback_data:"bot:admin:bitpin"}]]);}catch(e){await recordBitpinConnectionState(env,false,e.message);throw e}return;
  }
  if (data.startsWith("bot:admin:bitpin:approve:") || data.startsWith("bot:admin:bitpin:reject:")) {
    if(!account.isAdmin)throw new Error("دسترسی مدیر لازم است");const approve=data.includes(":approve:"),claimId=data.split(approve?":approve:":":reject:")[1];await reviewBitpinDepositFromTelegram(env,account.user,claimId,approve?"approve":"reject");await botSendOrEdit(env,{account,chatId,messageId},"admin_bitpin_claims");return;
  }

  if (data === "bot:admin:github_zip:start") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const settings = await getSettings(env);
    if (!settings.github_repo) throw new Error("ابتدا مخزن GitHub را تنظیم کنید");
    if (!settings.github_token) throw new Error("ابتدا توکن GitHub با دسترسی Contents: Read and write را ثبت کنید");
    await botSetSession(env, account.user.telegram_id, "github_zip_upload", {});
    await botPrompt(env, chatId,
      "📦 <b>فایل ZIP بروزرسانی را ارسال کنید</b>\n\n" +
      "مخزن: <code>" + botEscape(normalizeGithubRepo(settings.github_repo)) + "</code>\n" +
      "Branch: <code>" + botEscape(settings.github_branch || "main") + "</code>\n\n" +
      "فایل باید شامل <code>core/worker.js</code>، <code>edge/worker.js</code>، <code>processor/worker.js</code>، <code>version</code> و <code>release.json</code> باشد.\n" +
      "حداکثر حجم دانلود تلگرام: <b>۲۰ مگابایت</b>."
    );
    return;
  }
  if (data === "bot:admin:github_zip:token") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    await botSetSession(env, account.user.telegram_id, "setting_github_upload_token", {});
    await botPrompt(env, chatId,
      "🔐 <b>توکن GitHub را ارسال کنید</b>\n\n" +
      "توکن Fine-grained باید برای مخزن موردنظر مجوز <b>Contents: Read and write</b> داشته باشد. پیام حاوی توکن پس از بررسی حذف می‌شود."
    );
    return;
  }
  if (data === "bot:admin:github_zip:repo") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    await botSetSession(env, account.user.telegram_id, "setting_github_upload_repo", {});
    await botPrompt(env, chatId,
      "🗂 <b>مخزن و Branch را ارسال کنید</b>\n\n" +
      "قالب:\n<code>owner/repository | main</code>\n\n" +
      "آدرس کامل GitHub نیز پذیرفته می‌شود."
    );
    return;
  }
  if (data === "bot:admin:github_zip:test") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const info = await githubConnectionInfo(env);
    await botPrompt(env, chatId,
      "✅ <b>اتصال GitHub برقرار است</b>\n\nمخزن: <code>" + botEscape(info.repository) + "</code>\nBranch: <code>" + botEscape(info.branch) + "</code>\nنوع مخزن: " + (info.private ? "خصوصی" : "عمومی") + "\nدسترسی نوشتن: " + (info.push_allowed ? "✅" : "⚠️ نامشخص"),
      [[{ text: "↩️ آپلود ZIP", callback_data: "bot:admin:github_zip" }]]
    );
    return;
  }
  if (data === "bot:admin:reseller_backup_all") {
    if(!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const result=await createAllResellerBackups(env,100);
    await audit(env,account.user.id,"central_reseller_backup_all",result);
    await botPrompt(env,chatId,"🗄 پشتیبان‌گیری گروهی پایان یافت.\nموفق: <b>"+botMoney(result.success)+"</b> · ناموفق: <b>"+botMoney(result.failed)+"</b>",[[{text:"↩️ مرکز پایداری",callback_data:"bot:admin:reseller_ops"}]]);
    return;
  }
  if (data === "bot:admin:reseller_health_all") {
    if(!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const result=await runAllResellerHealthChecks(env,50);
    await audit(env,account.user.id,"central_reseller_health_all",result);
    await botPrompt(env,chatId,"🩺 پایش گروهی پایان یافت.\nبررسی‌شده: <b>"+botMoney(result.checked)+"</b> · ناموفق: <b>"+botMoney(result.failed)+"</b>",[[{text:"↩️ مرکز پایداری",callback_data:"bot:admin:reseller_ops"}]]);
    return;
  }
  if (data === "bot:admin:users") {
    await botSendOrEdit(env, { account, chatId, messageId }, "admin_users");
    return;
  }
  if (data === "bot:admin:settings") {
    await botSendOrEdit(env, { account, chatId, messageId }, "admin_settings");
    return;
  }
  if (data === "bot:admin:settings:finance") {
    await botSendOrEdit(env, { account, chatId, messageId }, "admin_settings_finance");
    return;
  }
  if (data === "bot:admin:settings:access") {
    await botSendOrEdit(env, { account, chatId, messageId }, "admin_settings_access");
    return;
  }
  if (data === "bot:admin:settings:automation") {
    await botSendOrEdit(env, { account, chatId, messageId }, "admin_settings_automation");
    return;
  }
  if (data === "bot:admin:join:add") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    await botSetSession(env, account.user.telegram_id, "setting_join_channel_add", {});
    await botPrompt(env, chatId,
      "➕ <b>افزودن کانال قفل اجباری</b>\n\n" +
      "کانال عمومی:\n<code>@channel | عنوان اختیاری</code>\n\n" +
      "کانال خصوصی:\n<code>-100123456789 | عنوان | https://t.me/+InviteLink</code>\n\n" +
      "ربات مرکزی باید مدیر کانال باشد."
    );
    return;
  }
  if (data === "bot:admin:join:replace") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    await botSetSession(env, account.user.telegram_id, "setting_join_channels", {});
    await botPrompt(env, chatId, "📢 همه کانال‌ها را هرکدام در یک خط ارسال کنید.\n\n<code>@channel | عنوان</code>\nیا برای خصوصی:\n<code>-100123456789 | عنوان | https://t.me/+InviteLink</code>\n\nبرای حذف همه <code>-</code> بفرستید.");
    return;
  }
  if (data === "bot:admin:join:toggle") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const settings = await getSettings(env);
    const channels = parseJoinChannels(settings.central_join_channels);
    if (settings.central_join_enabled !== "true" && !channels.length) throw new Error("ابتدا حداقل یک کانال ثبت کنید");
    const next = settings.central_join_enabled === "true" ? "false" : "true";
    await setSettings(env, { central_join_enabled: next });
    await audit(env, account.user.id, "central_join_toggled", { enabled: next === "true" });
    const refreshed = await ensureTelegramBotUser(env, callback.from);
    await botSendOrEdit(env, { account: refreshed, chatId, messageId }, "admin_join_channels");
    return;
  }
  if (data.startsWith("bot:admin:join:remove:")) {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const index = Number.parseInt(data.split(":").pop(), 10);
    const settings = await getSettings(env);
    const channels = parseJoinChannels(settings.central_join_channels);
    if (!Number.isInteger(index) || index < 0 || index >= channels.length) throw new Error("کانال پیدا نشد");
    const removed = channels.splice(index, 1)[0];
    await setSettings(env, {
      central_join_channels: JSON.stringify(channels),
      central_join_enabled: channels.length ? settings.central_join_enabled : "false"
    });
    await audit(env, account.user.id, "central_join_channel_removed", { chatId: removed.chat_id, title: removed.title });
    const refreshed = await ensureTelegramBotUser(env, callback.from);
    await botSendOrEdit(env, { account: refreshed, chatId, messageId }, "admin_join_channels");
    return;
  }
  if (data.startsWith("bot:admin:join:check:")) {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const index = Number.parseInt(data.split(":").pop(), 10);
    const settings = await getSettings(env);
    const channels = parseJoinChannels(settings.central_join_channels);
    const channel = channels[index];
    if (!channel) throw new Error("کانال پیدا نشد");
    const chat = await telegramApi(env, "getChat", { chat_id: channel.chat_id });
    const title = cleanText(chat?.result?.title, 100) || channel.title || channel.chat_id;
    await botPrompt(env, chatId, "✅ دسترسی ربات به کانال برقرار است.\nکانال: <b>" + botEscape(title) + "</b>\nشناسه: <code>" + botEscape(channel.chat_id) + "</code>", [[{ text: "↩️ مدیریت کانال‌ها", callback_data: "bot:admin:join_channels" }]]);
    return;
  }
  if (data === "bot:admin:release_channel") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    await botSendOrEdit(env, { account, chatId, messageId }, "admin_release_channel");
    return;
  }
  if (data === "bot:admin:release:set") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    await botSetSession(env, account.user.telegram_id, "setting_release_channel", {});
    await botPrompt(env, chatId,
      "📣 آیدی کانال رسمی آپدیت‌ها را ارسال کنید.\n\n" +
      "کانال عمومی:\n<code>@channel | عنوان اختیاری</code>\n\n" +
      "کانال خصوصی:\n<code>-1001234567890 | عنوان اختیاری | https://t.me/+InviteLink</code>\n\n" +
      "لینک ثبت‌شده هنگام تحویل پنل برای نماینده ارسال می‌شود. برای حذف کانال <code>-</code> بفرستید. ربات مرکزی باید مدیر کانال و دارای مجوز ارسال پیام باشد."
    );
    return;
  }
  if (data === "bot:admin:release:toggle") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const settings = await getSettings(env);
    if (!String(settings.release_channel_chat_id || "").trim()) throw new Error("ابتدا کانال آپدیت‌ها را تعیین کنید");
    const next = settings.release_channel_enabled === "true" ? "false" : "true";
    await setSettings(env, { release_channel_enabled: next });
    await audit(env, account.user.id, "release_channel_toggled", { enabled: next === "true" });
    const refreshed = await ensureTelegramBotUser(env, callback.from);
    await botSendOrEdit(env, { account: refreshed, chatId, messageId }, "admin_release_channel");
    return;
  }
  if (data === "bot:admin:release:test") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const result = await sendReleaseAnnouncement(env, { test: true, force: true });
    if (!result.sent) throw new Error(result.reason === "channel_not_configured" ? "ابتدا کانال آپدیت‌ها را تعیین کنید" : "ارسال آزمایشی انجام نشد");
    await botPrompt(env, chatId, "✅ پیام آزمایشی با موفقیت در کانال ارسال شد.", [[{ text: "↩️ کانال آپدیت‌ها", callback_data: "bot:admin:release_channel" }]]);
    return;
  }
  if (data === "bot:admin:release:publish") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const result = await sendReleaseAnnouncement(env, { force: true });
    if (!result.sent && ["already_sent", "already_claimed"].includes(result.reason)) {
      await botPrompt(env, chatId, "ℹ️ اطلاعیه نسخه <code>" + botEscape(APP_VERSION) + "</code> قبلاً منتشر شده است و برای جلوگیری از ارسال تکراری دوباره فرستاده نشد.", [[{ text: "↩️ کانال آپدیت‌ها", callback_data: "bot:admin:release_channel" }]]);
      return;
    }
    if (!result.sent) throw new Error(result.reason === "channel_not_configured" ? "ابتدا کانال آپدیت‌ها را تعیین کنید" : "انتشار انجام نشد");
    await botPrompt(env, chatId, "🚀 اطلاعیه رسمی نسخه <code>" + botEscape(APP_VERSION) + "</code> در کانال منتشر شد.", [[{ text: "↩️ کانال آپدیت‌ها", callback_data: "bot:admin:release_channel" }]]);
    return;
  }
  if (data === "bot:sales:type") {
    await botClearSession(env, account.user.telegram_id);
    await botSendOrEdit(env, { account, chatId, messageId }, "sales_type");
    return;
  }
  if (data.startsWith("bot:sales:type:confirm:")) {
    const bot = await getResellerBotForUser(env, account.user.id);
    if (!bot) throw new Error("ربات نماینده پیدا نشد");
    if (!resellerHasIndependentPanel(bot)) throw new Error("نوع ربات زیرمجموعه فقط توسط مستر بالادست تعیین می‌شود");
    const targetRaw = String(data.split(":").pop() || "").trim().toLowerCase();
    if (!["store", "master"].includes(targetRaw)) throw new Error("نوع ربات انتخاب‌شده معتبر نیست");
    const targetType = targetRaw;
    const currentType = normalizeResellerLicenseType(bot.license_type);
    if (targetType === currentType) {
      await botSendOrEdit(env, { account, chatId, messageId }, "sales_type");
      return;
    }
    const settings = account.settings || await getSettings(env);
    const fee = resellerBotTypeChangeFee(settings, currentType, targetType);
    if (currentType === "master" && targetType === "store") {
      const child = await env.PASARGUARD_DB.prepare("SELECT COUNT(*) AS count FROM reseller_bots WHERE parent_bot_id=?").bind(bot.id).first();
      if (Number(child?.count || 0) > 0) throw new Error("این ربات هنوز زیرمجموعه دارد و قابل تغییر به فروشگاهی نیست");
    }
    await botPrompt(env, chatId,
      "⚠️ <b>تأیید تغییر نوع ربات</b>\n━━━━━━━━━━━━━━\n" +
      "از <b>" + botEscape(resellerLicenseTypeLabel(currentType)) + "</b> به <b>" + botEscape(resellerLicenseTypeLabel(targetType)) + "</b>\n" +
      (fee > 0 ? "مبلغ قابل کسر: <b>" + botMoney(fee) + " تومان</b>\n" : "مبلغ قابل کسر: <b>۰ تومان</b>\n") +
      (targetType === "store" ? "بازگشت وجهی انجام نمی‌شود.\n" : "قابلیت ساخت ربات زیرمجموعه فعال می‌شود.\n") +
      "\nتمام داده‌های فعلی ربات حفظ می‌شوند.",
      [[{ text: "✅ تأیید نهایی", callback_data: "bot:sales:type:apply:" + targetType }], [{ text: "↩️ انصراف", callback_data: "bot:sales:type" }]]
    );
    return;
  }
  if (data.startsWith("bot:sales:type:apply:")) {
    const bot = await getResellerBotForUser(env, account.user.id);
    if (!bot) throw new Error("ربات نماینده پیدا نشد");
    const targetRaw = String(data.split(":").pop() || "").trim().toLowerCase();
    if (!["store", "master"].includes(targetRaw)) throw new Error("نوع ربات انتخاب‌شده معتبر نیست");
    const result = await changeResellerBotLicenseType(env, account, bot, targetRaw);
    const refreshed = await ensureTelegramBotUser(env, callback.from);
    await botPrompt(env, chatId,
      (result.changed ? "✅ <b>نوع ربات با موفقیت تغییر کرد</b>" : "ℹ️ <b>نوع ربات از قبل همین بود</b>") +
      "\n━━━━━━━━━━━━━━\nنوع جدید: <b>" + botEscape(resellerLicenseTypeLabel(result.licenseType)) + "</b>\n" +
      "مبلغ کسرشده: <b>" + botMoney(result.fee || 0) + " تومان</b>\n" +
      "موجودی کیف پول: <b>" + botMoney(refreshed.user.wallet_balance) + " تومان</b>\n\n" +
      "کاربران، سفارش‌ها، پلن‌ها و تنظیمات قبلی حفظ شدند.",
      [[{ text: "🤖 مشاهده ربات", callback_data: "bot:sales" }]]
    );
    return;
  }
  if (data === "bot:sales:renew") {
    const bot = await getResellerBotForUser(env, account.user.id);
    if (!bot) throw new Error("ربات نماینده پیدا نشد");
    if (bot.parent_bot_id || String(bot.purchase_source || "central") !== "central") throw new Error("تمدید این ربات فقط توسط مستر نمایندگی بالادست انجام می‌شود");
    const result = await renewResellerBotLicense(env, account, bot);
    const refreshed = await ensureTelegramBotUser(env, callback.from);
    await botPrompt(env, chatId, "✅ <b>لایسنس ربات نماینده یک ماه تمدید شد</b>\n━━━━━━━━━━━━━━\nاعتبار جدید تا: <b>" + botEscape(botDate(result.expiresAt)) + "</b>\nمبلغ تمدید: <b>" + botMoney(result.fee) + " تومان</b>\nموجودی کیف پول: <b>" + botMoney(refreshed.user.wallet_balance) + " تومان</b>", [[{ text: "🤖 مشاهده ربات نماینده", callback_data: "bot:sales" }]]);
    return;
  }
  if (data.startsWith("bot:sales:") && !data.startsWith("bot:sales:create") && !data.startsWith("bot:sales:agency:")) {
    const bot = await getResellerBotForUser(env, account.user.id);
    const rows = bot?.bot_username ? [[{ text: "🚀 ورود به ربات نماینده", url: "https://t.me/" + bot.bot_username.replace(/^@/, "") }], [{ text: "↩️ بازگشت", callback_data: "bot:sales" }]] : [[{ text: "↩️ بازگشت", callback_data: "bot:sales" }]];
    await botPrompt(env, chatId, "🔐 تنظیمات ربات نماینده از ربات مرکزی حذف شده است. مدیریت کامل را فقط داخل ربات نماینده با <code>/manage</code> انجام دهید.", rows);
    return;
  }
  if (data.startsWith("bot:sales:create")) {
    if (!resellerBotSalesOpen(account.settings)) throw new Error("ساخت ربات نمایندگی موقتاً توسط مدیریت مرکزی متوقف شده است");
    const requested = data.split(":").pop();
    const licenseType = normalizeResellerLicenseType(requested === "master" ? "master" : "store");
    try { await syncPasarguardManagersForUser(env, account.user); } catch (_) {}
    const existing = await getResellerBotForUser(env, account.user.id);
    if (existing) throw new Error("برای حساب شما قبلاً ربات ساخته شده است");
    const creationFee = resellerBotSetupFee(account.settings, licenseType);
    const freshUser = await env.PASARGUARD_DB.prepare("SELECT wallet_balance FROM users WHERE id=?").bind(account.user.id).first();
    if (Number(freshUser?.wallet_balance || 0) < creationFee) throw new Error("موجودی برای ساخت " + resellerLicenseTypeLabel(licenseType) + " کافی نیست؛ هزینه ساخت " + botMoney(creationFee) + " تومان است");
    const agencies = await listSalesBotAgencies(env, account.user.id);
    if (!agencies.length) throw new Error("ابتدا یک پنل را مستقیماً از ربات مرکزی بخرید یا پنل دستی متصل خود را انتخاب کنید");
    await botSetSession(env, account.user.telegram_id, "sales_bot_token", { licenseType });
    await botPrompt(env, chatId,
      (licenseType === "master" ? "👑 <b>ساخت ربات مستر نمایندگی</b>" : "🤖 <b>ساخت ربات فروشگاهی</b>") +
      "\n\nتوکن ربات ساخته‌شده در <b>@BotFather</b> را ارسال کنید.\nتوکن رمزگذاری می‌شود و پیام حاوی آن بعد از بررسی حذف خواهد شد."
    );
    return;
  }

  if (data.startsWith("bot:sales:agency:")) {
    const agencyId = data.slice("bot:sales:agency:".length);
    const session = await botGetSession(env, account.user.telegram_id);
    if (!session || session.state !== "sales_bot_agency") throw new Error("فرایند انتخاب پنل منقضی شده است؛ ساخت ربات را دوباره شروع کنید");
    const agency = await env.PASARGUARD_DB.prepare(`
      SELECT *,CASE WHEN panel_password_enc IS NULL THEN 0 ELSE 1 END AS has_password
      FROM agencies WHERE id=? AND user_id=? AND COALESCE(is_trial,0)=0
    `).bind(agencyId, account.user.id).first();
    if (!agency) throw new Error("پنل قابل اتصال پیدا نشد");
    if (!agency.panel_password_enc) {
      await botSetSession(env, account.user.telegram_id, "sales_bot_agency_password", { ...session.data, agencyId: agency.id });
      await botPrompt(env, chatId,
        "🔐 <b>تأیید رمز پنل دستی</b>\nاین پنل مستقیماً داخل پاسارگارد ساخته شده و رمز آن در سامانه ذخیره نیست.\n\nرمز پنل <code>" + botEscape(agency.panel_username) + "</code> را ارسال کنید. رمز بررسی و به‌صورت امن ذخیره می‌شود و پیام شما نیز حذف خواهد شد.");
      return;
    }
    await botSetSession(env, account.user.telegram_id, "sales_bot_brand", { ...session.data, agencyId: agency.id });
    await botPrompt(env, chatId, "🏷 نام برند فروش خود را ارسال کنید.\nاین نام در ربات مشتری نمایش داده می‌شود.");
    return;
  }
  if (data === "bot:sales:card") {
    const bot = await getResellerBotForUser(env, account.user.id);
    if (!bot) throw new Error("ربات فروش پیدا نشد");
    await botSetSession(env, account.user.telegram_id, "sales_edit_card_holder", { botId: bot.id });
    await botPrompt(env, chatId, "👤 نام صاحب کارت را ارسال کنید.");
    return;
  }
  if (data === "bot:sales:panel") {
    const bot = await getResellerBotForUser(env, account.user.id);
    if (!bot) throw new Error("ربات فروش پیدا نشد");
    if (bot.parent_bot_id || String(bot.purchase_source || "central") !== "central") throw new Error("این نماینده پنل PasarGuard مستقل ندارد؛ پنل ساخت سرویس فقط توسط مستر تعیین می‌شود");
    const agencies = await listSalesBotAgencies(env, account.user.id);
    if (!agencies.length) throw new Error("پنل قابل اتصال پیدا نشد");
    await botSetSession(env, account.user.telegram_id, "sales_bot_change_agency", { botId: bot.id });
    const rows = agencies.map((agency, index) => [salesBotAgencyButton(agency, index, "bot:sales:agency:")]);
    rows.push([{ text: "لغو", callback_data: "bot:cancel" }]);
    await botPrompt(env, chatId, "🔗 پنلی را که فروش مشتریان روی آن انجام شود انتخاب کنید:", rows);
    return;
  }
  if (data === "bot:sales:toggle") {
    const bot = await getResellerBotForUser(env, account.user.id);
    if (!bot) throw new Error("ربات فروش پیدا نشد");
    const next = bot.status === "active" ? "paused" : "active";
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET status=?,updated_at=? WHERE id=? AND user_id=?")
      .bind(next, nowIso(), bot.id, account.user.id).run();
    await audit(env, account.user.id, "sales_bot_status_changed", { botId: bot.id, status: next });
    await botSendOrEdit(env, { account, chatId, messageId }, "sales_bot");
    return;
  }
  if (data === "bot:sales:category:new") {
    const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    await botSetSession(env,account.user.telegram_id,"sales_category_title",{botId:bot.id});
    await botPrompt(env,chatId,"📂 نام دسته‌بندی را ارسال کنید.\nمی‌توانید اول متن یک ایموجی بگذارید؛ مثال: <b>🎮 گیمینگ</b>");
    return;
  }
  if (data === "bot:sales:location:new") {
    const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    await botSetSession(env,account.user.telegram_id,"sales_location_title",{botId:bot.id});
    await botPrompt(env,chatId,"🌍 نام لوکیشن را ارسال کنید.\nمثال: <b>🇩🇪 آلمان</b>");
    return;
  }
  if (data.startsWith("bot:sales:category:toggle:")) {
    const itemId=data.slice("bot:sales:category:toggle:".length);
    const item=await env.PASARGUARD_DB.prepare(`SELECT c.* FROM sales_categories c JOIN reseller_bots rb ON rb.id=c.bot_id WHERE c.id=? AND rb.user_id=?`).bind(itemId,account.user.id).first();
    if(!item)throw new Error("دسته پیدا نشد");
    await env.PASARGUARD_DB.prepare("UPDATE sales_categories SET status=?,updated_at=? WHERE id=?").bind(item.status==='active'?'inactive':'active',nowIso(),item.id).run();
    await botSendOrEdit(env,{account,chatId,messageId},"sales_catalog");return;
  }
  if (data.startsWith("bot:sales:location:toggle:")) {
    const itemId=data.slice("bot:sales:location:toggle:".length);
    const item=await env.PASARGUARD_DB.prepare(`SELECT l.* FROM sales_locations l JOIN reseller_bots rb ON rb.id=l.bot_id WHERE l.id=? AND rb.user_id=?`).bind(itemId,account.user.id).first();
    if(!item)throw new Error("لوکیشن پیدا نشد");
    await env.PASARGUARD_DB.prepare("UPDATE sales_locations SET status=?,updated_at=? WHERE id=?").bind(item.status==='active'?'inactive':'active',nowIso(),item.id).run();
    await botSendOrEdit(env,{account,chatId,messageId},"sales_catalog");return;
  }
  if (data.startsWith("bot:sales:text:")) {
    const key=data.slice("bot:sales:text:".length);
    if(!SALES_TEXT_LABELS[key])throw new Error("نوع متن معتبر نیست");
    const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    const current=await salesBotText(env,bot.id,key,"");
    await botSetSession(env,account.user.telegram_id,"sales_text_edit",{botId:bot.id,key});
    await botPrompt(env,chatId,"✏️ متن جدید «<b>"+botEscape(SALES_TEXT_LABELS[key])+"</b>» را ارسال کنید.\n\nمتن فعلی:\n"+(current?botEscape(current):"<i>پیش‌فرض</i>")+"\n\nبرای بازگشت به متن پیش‌فرض، <code>-</code> ارسال کنید.");
    return;
  }
  if (data === "bot:sales:setting:brand" || data === "bot:sales:setting:support") {
    const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    const state=data.endsWith("brand")?"sales_brand_edit":"sales_support_edit";
    await botSetSession(env,account.user.telegram_id,state,{botId:bot.id});
    await botPrompt(env,chatId,state==="sales_brand_edit"?"🏷 نام برند جدید را ارسال کنید.":"🆘 آیدی یا لینک پشتیبانی را ارسال کنید. برای حذف <code>-</code> بفرستید.");return;
  }
  if (data === "bot:sales:setting:trial_toggle") {
    const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET trial_enabled=?,updated_at=? WHERE id=? AND user_id=?").bind(Number(bot.trial_enabled||0)===1?0:1,nowIso(),bot.id,account.user.id).run();
    await botSendOrEdit(env,{account,chatId,messageId},"sales_settings");return;
  }
  if (data === "bot:sales:setting:trial") {
    const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    await botSetSession(env,account.user.telegram_id,"sales_trial_mb",{botId:bot.id});
    await botPrompt(env,chatId,"🎁 حجم تست رایگان را به <b>مگابایت</b> ارسال کنید.\nمثال: <b>500</b>");return;
  }
  if (data === "bot:sales:setting:referral_fixed" || data === "bot:sales:setting:referral_percent") {
    const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    const percent=data.endsWith("percent");
    await botSetSession(env,account.user.telegram_id,percent?"sales_referral_percent":"sales_referral_reward",{botId:bot.id});
    await botPrompt(env,chatId,percent?"👥 درصد پورسانت هر خرید موفق زیرمجموعه را ارسال کنید.\nمثال: <b>10</b>":"👥 مبلغ ثابت پورسانت هر خرید موفق را به تومان ارسال کنید.\nبرای غیرفعال‌کردن عدد <b>0</b> بفرستید.");return;
  }
  if (data === "bot:sales:setting:referral_banner") {
    const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    await botSetSession(env,account.user.telegram_id,"sales_referral_banner",{botId:bot.id});
    await botPrompt(env,chatId,"🖼 تصویر یا فایل بنر زیرمجموعه‌گیری را ارسال کنید.\nبرای حذف بنر، <code>-</code> ارسال کنید.");return;
  }
  if (data === "bot:sales:setting:bonus") {
    const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    await botSetSession(env,account.user.telegram_id,"sales_recharge_bonus",{botId:bot.id});
    await botPrompt(env,chatId,"🎉 درصد بونس شارژ مشتری را ارسال کنید.\nمثال: <b>10</b> · برای غیرفعال‌کردن <b>0</b>");return;
  }
  if (data === "bot:sales:setting:forward") {
    const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    const next=Number(bot.forward_enabled??1)===1?0:1;
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET forward_enabled=?,updated_at=? WHERE id=? AND user_id=?").bind(next,nowIso(),bot.id,account.user.id).run();
    await botSendOrEdit(env,{account,chatId,messageId},"sales_settings");return;
  }
  if (data.startsWith("bot:sales:user:") && !data.startsWith("bot:sales:user:toggle:") && !data.startsWith("bot:sales:user:credit:") && !data.startsWith("bot:sales:user:debit:")) {
    const customerId=data.slice("bot:sales:user:".length);
    const rendered=await botSalesUserView(env,account,customerId);
    await telegramApi(env,"editMessageText",{chat_id:chatId,message_id:messageId,text:rendered.text,parse_mode:"HTML",reply_markup:rendered.reply_markup});return;
  }
  if (data.startsWith("bot:sales:user:toggle:")) {
    const customerId=data.slice("bot:sales:user:toggle:".length);const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    const u=await env.PASARGUARD_DB.prepare("SELECT * FROM sales_customers WHERE id=? AND bot_id=?").bind(customerId,bot.id).first();if(!u)throw new Error("کاربر پیدا نشد");
    await env.PASARGUARD_DB.prepare("UPDATE sales_customers SET status=?,updated_at=? WHERE id=?").bind(u.status==='active'?'blocked':'active',nowIso(),u.id).run();
    const rendered=await botSalesUserView(env,account,u.id);await telegramApi(env,"editMessageText",{chat_id:chatId,message_id:messageId,text:rendered.text,parse_mode:"HTML",reply_markup:rendered.reply_markup});return;
  }
  if (data.startsWith("bot:sales:user:credit:") || data.startsWith("bot:sales:user:debit:")) {
    const credit=data.startsWith("bot:sales:user:credit:");const customerId=data.slice(credit?"bot:sales:user:credit:".length:"bot:sales:user:debit:".length);
    const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    await adjustSalesCustomerBalance(env,bot.id,customerId,credit?100000:-100000,credit?'owner_credit':'owner_debit','owner',String(account.user.id),credit?'افزایش موجودی توسط نماینده':'کاهش موجودی توسط نماینده');
    const u=await env.PASARGUARD_DB.prepare("SELECT telegram_id FROM sales_customers WHERE id=?").bind(customerId).first();
    if(u?.telegram_id)try{await resellerTelegramApi(env,bot,"sendMessage",{chat_id:u.telegram_id,text:(credit?'✅ موجودی شما ۱۰۰٬۰۰۰ تومان افزایش یافت.':'ℹ️ موجودی شما ۱۰۰٬۰۰۰ تومان کاهش یافت.')})}catch(_){}
    const rendered=await botSalesUserView(env,account,customerId);await telegramApi(env,"editMessageText",{chat_id:chatId,message_id:messageId,text:rendered.text,parse_mode:"HTML",reply_markup:rendered.reply_markup});return;
  }
  if (data.startsWith("bot:sales:user:wholesale:")) {
    const customerId=data.slice("bot:sales:user:wholesale:".length);const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    const u=await env.PASARGUARD_DB.prepare("SELECT * FROM sales_customers WHERE id=? AND bot_id=?").bind(customerId,bot.id).first();if(!u)throw new Error("کاربر پیدا نشد");
    await env.PASARGUARD_DB.prepare("UPDATE sales_customers SET customer_type=?,updated_at=? WHERE id=?").bind(u.customer_type==='wholesale'?'retail':'wholesale',nowIso(),u.id).run();
    const rendered=await botSalesUserView(env,account,u.id);await telegramApi(env,"editMessageText",{chat_id:chatId,message_id:messageId,text:rendered.text,parse_mode:"HTML",reply_markup:rendered.reply_markup});return;
  }
  if (data.startsWith("bot:sales:user:discount:")) {
    const customerId=data.slice("bot:sales:user:discount:".length);const bot=await getResellerBotForUser(env,account.user.id);if(!bot)throw new Error("ربات پیدا نشد");
    const u=await env.PASARGUARD_DB.prepare("SELECT id FROM sales_customers WHERE id=? AND bot_id=?").bind(customerId,bot.id).first();if(!u)throw new Error("کاربر پیدا نشد");
    await botSetSession(env,account.user.telegram_id,"sales_user_discount",{botId:bot.id,customerId});await botPrompt(env,chatId,"درصد تخفیف کاربر عمده را از ۰ تا ۹۵ ارسال کنید.");return;
  }
  if (data.startsWith("bot:sales:wallet:approve:") || data.startsWith("bot:sales:wallet:reject:")) {
    const approve=data.startsWith("bot:sales:wallet:approve:");const reqId=data.slice(approve?"bot:sales:wallet:approve:".length:"bot:sales:wallet:reject:".length);
    const row=await env.PASARGUARD_DB.prepare(`SELECT w.*,rb.user_id AS owner_user_id,rb.id AS reseller_bot_id,c.telegram_id FROM sales_wallet_requests w JOIN reseller_bots rb ON rb.id=w.bot_id JOIN sales_customers c ON c.id=w.customer_id WHERE w.id=?`).bind(reqId).first();
    if(!row||Number(row.owner_user_id)!==Number(account.user.id))throw new Error("درخواست پیدا نشد");
    const bot=await getResellerBotById(env,row.reseller_bot_id);
    if(approve){
      const claim=await env.PASARGUARD_DB.prepare("UPDATE sales_wallet_requests SET status='processing',updated_at=?,reviewed_at=?,reviewed_by=? WHERE id=? AND status='pending_review'").bind(nowIso(),nowIso(),account.user.id,row.id).run();if(!Number(claim?.meta?.changes||0))throw new Error("درخواست قبلاً بررسی شده است");
      try{const bonusPercent=Math.max(0,Math.min(100,Number(bot.recharge_bonus_percent||0)));const bonus=Math.floor(Number(row.amount_toman||0)*bonusPercent/100);const credited=Number(row.amount_toman||0)+bonus;const balance=await adjustSalesCustomerBalance(env,row.bot_id,row.customer_id,credited,'recharge','wallet_request',row.id,bonus>0?'شارژ کیف پول + بونس '+bonusPercent+'٪':'شارژ کیف پول با تأیید نماینده');await env.PASARGUARD_DB.prepare("UPDATE sales_wallet_requests SET status='approved',bonus_toman=?,updated_at=? WHERE id=?").bind(bonus,nowIso(),row.id).run();if(row.origin!=="miniapp")await resellerTelegramApi(env,bot,"sendMessage",{chat_id:row.telegram_id,text:"✅ <b>شارژ کیف پول تأیید شد</b>\nمبلغ پرداخت: <b>"+botMoney(row.amount_toman)+" تومان</b>"+(bonus>0?"\n🎉 بونس: <b>"+botMoney(bonus)+" تومان</b>":"")+"\nمبلغ افزوده‌شده: <b>"+botMoney(credited)+" تومان</b>\nموجودی جدید: <b>"+botMoney(balance)+" تومان</b>",parse_mode:"HTML"});}catch(e){await env.PASARGUARD_DB.prepare("UPDATE sales_wallet_requests SET status='pending_review',updated_at=? WHERE id=?").bind(nowIso(),row.id).run();throw e}
    }else{
      const r=await env.PASARGUARD_DB.prepare("UPDATE sales_wallet_requests SET status='rejected',updated_at=?,reviewed_at=?,reviewed_by=? WHERE id=? AND status='pending_review'").bind(nowIso(),nowIso(),account.user.id,row.id).run();if(!Number(r?.meta?.changes||0))throw new Error("درخواست قبلاً بررسی شده است");if(row.origin!=="miniapp")await resellerTelegramApi(env,bot,"sendMessage",{chat_id:row.telegram_id,text:"❌ رسید شارژ کیف پول تأیید نشد. برای پیگیری با پشتیبانی تماس بگیرید."});
    }
    await botSendOrEdit(env,{account,chatId},"sales_wallets");return;
  }
  if (data === "bot:sales:plan:new") {
    const bot = await getResellerBotForUser(env, account.user.id);
    if (!bot) throw new Error("ابتدا ربات نمایندگی را بسازید");
    await botSetSession(env, account.user.telegram_id, "sales_plan_setup", { botId: bot.id });
    await botPrompt(env, chatId, "📦 نوع پلن را انتخاب کنید:", [[{text:"🛒 فروش جدید",callback_data:"bot:sales:plan:type:sale"},{text:"♻️ مخصوص تمدید",callback_data:"bot:sales:plan:type:renew"}],[{text:"➕ افزایش حجم",callback_data:"bot:sales:plan:type:volume"}],[{text:"لغو",callback_data:"bot:cancel"}]]);
    return;
  }
  if (data.startsWith("bot:sales:plan:type:")) {
    const rawType=data.slice("bot:sales:plan:type:".length);const type=["sale","renew","volume"].includes(rawType)?rawType:"sale";const session=await botGetSession(env,account.user.telegram_id);if(session?.state!=="sales_plan_setup")throw new Error("فرایند ساخت پلن منقضی شده است");
    const cats=await env.PASARGUARD_DB.prepare("SELECT * FROM sales_categories WHERE bot_id=? AND status='active' ORDER BY sort_order,created_at LIMIT 15").bind(session.data.botId).all();
    await botSetSession(env,account.user.telegram_id,"sales_plan_category",{...session.data,planType:type});
    const rows=(cats.results||[]).map(c=>[{text:(c.emoji||'📁')+' '+c.title,callback_data:"bot:sales:plan:cat:"+c.id}]);rows.push([{text:"بدون دسته‌بندی",callback_data:"bot:sales:plan:cat:none"}]);rows.push([{text:"لغو",callback_data:"bot:cancel"}]);
    await botPrompt(env,chatId,"📂 دسته‌بندی پلن را انتخاب کنید:",rows);return;
  }
  if (data.startsWith("bot:sales:plan:cat:")) {
    const categoryId=data.slice("bot:sales:plan:cat:".length);const session=await botGetSession(env,account.user.telegram_id);if(session?.state!=="sales_plan_category")throw new Error("فرایند ساخت پلن منقضی شده است");
    const locs=await env.PASARGUARD_DB.prepare("SELECT * FROM sales_locations WHERE bot_id=? AND status='active' ORDER BY sort_order,created_at LIMIT 15").bind(session.data.botId).all();
    await botSetSession(env,account.user.telegram_id,"sales_plan_location",{...session.data,categoryId:categoryId==='none'?null:categoryId});
    const rows=(locs.results||[]).map(l=>[{text:(l.emoji||'🌍')+' '+l.title,callback_data:"bot:sales:plan:loc:"+l.id}]);rows.push([{text:"بدون لوکیشن",callback_data:"bot:sales:plan:loc:none"}]);rows.push([{text:"لغو",callback_data:"bot:cancel"}]);
    await botPrompt(env,chatId,"🌍 لوکیشن پلن را انتخاب کنید:",rows);return;
  }
  if (data.startsWith("bot:sales:plan:loc:")) {
    const locationId=data.slice("bot:sales:plan:loc:".length);const session=await botGetSession(env,account.user.telegram_id);if(session?.state!=="sales_plan_location")throw new Error("فرایند ساخت پلن منقضی شده است");
    await botSetSession(env,account.user.telegram_id,"sales_plan_title",{...session.data,locationId:locationId==='none'?null:locationId});
    await botPrompt(env,chatId,"📦 نام پلن را ارسال کنید.\nمثال: <b>۳۰ گیگ یک‌ماهه</b>");return;
  }
  if (data.startsWith("bot:sales:plan:toggle:")) {
    const planId = data.slice("bot:sales:plan:toggle:".length);
    const plan = await env.PASARGUARD_DB.prepare(`
      SELECT p.* FROM sales_plans p JOIN reseller_bots rb ON rb.id=p.bot_id
      WHERE p.id=? AND rb.user_id=?
    `).bind(planId, account.user.id).first();
    if (!plan) throw new Error("پلن پیدا نشد");
    const next = plan.status === "active" ? "inactive" : "active";
    await env.PASARGUARD_DB.prepare("UPDATE sales_plans SET status=?,updated_at=? WHERE id=?")
      .bind(next, nowIso(), plan.id).run();
    await audit(env, account.user.id, "sales_plan_status_changed", { planId: plan.id, status: next });
    await botSendOrEdit(env, { account, chatId, messageId }, "sales_plans");
    return;
  }
  if (data.startsWith("bot:sales:receipt:")) {
    const orderId = data.slice("bot:sales:receipt:".length);
    const order = await env.PASARGUARD_DB.prepare(`
      SELECT o.*,rb.user_id AS owner_user_id,rb.id AS reseller_bot_id,
             c.telegram_id,c.username,c.first_name,c.last_name,
             p.title,p.data_limit_bytes,p.duration_days,p.price_toman
      FROM sales_orders o
      JOIN reseller_bots rb ON rb.id=o.bot_id
      JOIN sales_customers c ON c.id=o.customer_id
      JOIN sales_plans p ON p.id=o.plan_id
      WHERE o.id=?
    `).bind(orderId).first();
    if (!order || Number(order.owner_user_id) !== Number(account.user.id)) throw new Error("سفارش پیدا نشد");
    if (!order.receipt_file_id) throw new Error("برای این سفارش رسیدی ثبت نشده است");
    const bot = await getResellerBotById(env, order.reseller_bot_id);
    const customer = { telegram_id: order.telegram_id, username: order.username, first_name: order.first_name, last_name: order.last_name };
    const plan = { title: order.title, data_limit_bytes: order.data_limit_bytes, duration_days: order.duration_days, price_toman: order.price_toman };
    await notifySalesOrderOwner(env, bot, order, customer, plan);
    return;
  }
  if (data.startsWith("bot:sales:approve:")) {
    const orderId = data.slice("bot:sales:approve:".length);
    const delivered = await provisionSalesOrder(env, account.user, orderId);
    await botPrompt(env, chatId,
      (delivered.origin === "miniapp" ? "✅ سرویس ساخته شد و نتیجه داخل مینی‌اپ کاربر قابل مشاهده است." : "✅ سرویس ساخته و برای مشتری ارسال شد.") + "\nنام کاربری: <code>" + botEscape(delivered.remote_username) + "</code>",
      [[{ text: "🧾 سفارش‌ها", callback_data: "bot:sales:orders" }]]
    );
    return;
  }
  if (data.startsWith("bot:sales:reject:")) {
    const orderId = data.slice("bot:sales:reject:".length);
    const rejected = await rejectSalesOrder(env, account.user, orderId);
    await botPrompt(env, chatId, rejected.origin === "miniapp" ? "❌ رسید رد شد؛ وضعیت داخل مینی‌اپ کاربر به‌روزرسانی شد." : "❌ رسید رد شد و نتیجه برای مشتری ارسال گردید.", [[{ text: "🧾 سفارش‌ها", callback_data: "bot:sales:orders" }]]);
    return;
  }

  if (data.startsWith("bot:charge:")) {
    const raw = data.slice("bot:charge:".length);
    if (raw === "custom") {
      await botSetSession(env, account.user.telegram_id, "charge_amount", {});
      await botPrompt(env, chatId, "✍️ مبلغ شارژ را به تومان ارسال کنید.\nحداقل: <b>" + botMoney(account.settings.min_recharge) + " تومان</b>");
      return;
    }
    const amount = botParseInteger(raw);
    const payment = await botCreatePaymentInvoice(env, account.user, amount);
    await botSendInvoice(env, chatId, payment);
    return;
  }
  if (data.startsWith("bot:invoice:check:")) {
    const paymentId = data.slice("bot:invoice:check:".length);
    const payment = await env.PASARGUARD_DB.prepare("SELECT * FROM payment_invoices WHERE id=? AND user_id=?").bind(paymentId, account.user.id).first();
    if (!payment) throw new Error("فاکتور پیدا نشد");
    const updated = payment.credited_at ? payment : await reconcilePaymentInvoice(env, payment);
    const fresh = await env.PASARGUARD_DB.prepare("SELECT wallet_balance FROM users WHERE id=?").bind(account.user.id).first();
    await telegramApi(env, "sendMessage", {
      chat_id: chatId,
      text: "🔎 <b>نتیجه استعلام</b>\nوضعیت: <b>" + botEscape(updated.status) + "</b>\nموجودی: <b>" + botMoney(fresh?.wallet_balance) + " تومان</b>",
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [[{ text: "🧾 فاکتورها", callback_data: "bot:invoices" }]] }
    });
    return;
  }
  if (data === "bot:trial:create") {
    const trial = await createCentralTrialForUser(env, account.user);
    await telegramApi(env, "sendMessage", {
      chat_id: chatId,
      text: "✅ <b>تست رایگان آماده شد</b>\n━━━━━━━━━━━━━━\n" +
        "نام کاربری: <code>" + botEscape(trial.username) + "</code>\n" +
        "رمز: <code>" + botEscape(trial.password) + "</code>\n" +
        "حجم: <b>" + botGb(trial.trial_data_limit_bytes) + "</b>\n" +
        "اعتبار تا: <b>" + botEscape(botDate(trial.trial_expires_at)) + "</b>\n" +
        "آدرس پنل: " + botEscape(trial.panelUrl),
      parse_mode: "HTML",
      protect_content: true,
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: [[{ text: "🎁 وضعیت تست", callback_data: "bot:trial" }], [{ text: "🏢 پنل‌های من", callback_data: "bot:agencies" }]] }
    });
    return;
  }
  if (data === "bot:admin:trial:toggle") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const settings = await getSettings(env);
    const next = settings.central_trial_enabled === "true" ? "false" : "true";
    await setSettings(env, { central_trial_enabled: next });
    await audit(env, account.user.id, "central_trial_toggled", { enabled: next === "true" });
    const refreshed = await ensureTelegramBotUser(env, callback.from);
    await botSendOrEdit(env, { account: refreshed, chatId, messageId }, "admin_trial");
    return;
  }
  if (data === "bot:admin:trial:data") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    await botSetSession(env, account.user.telegram_id, "setting_central_trial_mb", {});
    await botPrompt(env, chatId, "📦 حجم تست مرکزی را به <b>مگابایت</b> ارسال کنید.\nمثال: <code>1024</code>");
    return;
  }
  if (data === "bot:admin:trial:duration") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    await botSetSession(env, account.user.telegram_id, "setting_central_trial_hours", {});
    await botPrompt(env, chatId, "⏱ مدت تست مرکزی را به <b>ساعت</b> ارسال کنید.\nمثال: <code>24</code>");
    return;
  }
  if (data === "bot:agency:new") {
    if (!agencySalesOpen(account.settings)) throw new Error("فروش و ساخت پنل نمایندگی موقتاً توسط مدیریت مرکزی متوقف شده است");
    await botSetSession(env, account.user.telegram_id, "agency_title", {});
    await botPrompt(env, chatId, "🏗 <b>ساخت پنل نمایندگی</b>\n━━━━━━━━━━━━━━\nحداقل موجودی لازم: <b>" + botMoney(account.settings.setup_fee || 0) + " تومان</b>\nاین مبلغ از کیف پول کسر نمی‌شود و بعد از ساخت برای هزینه مصرف پنل باقی می‌ماند.\n\n🏷 نام نمایشی پنل را ارسال کنید.\nمثال: <b>نمایندگی فروشگاه من</b>");
    return;
  }
  if (data === "bot:agency:auto_username") {
    const session = await botGetSession(env, account.user.telegram_id);
    if (!session || session.state !== "agency_username") throw new Error("فرایند ساخت پنل منقضی شده؛ دوباره شروع کنید");
    const username = normalizeUsername((account.user.username || "reseller") + "_" + Math.random().toString(36).slice(2, 6));
    await botSetSession(env, account.user.telegram_id, "agency_password", { ...session.data, username });
    await botPrompt(env, chatId, "🔐 رمز دلخواه را ارسال کنید یا ساخت خودکار را بزنید.\nرمز باید حداقل ۱۲ کاراکتر، ۲ حرف بزرگ، ۲ حرف کوچک، ۲ عدد و یک نماد داشته باشد.", [[{ text: "🎲 ساخت رمز امن", callback_data: "bot:agency:auto_password" }], [{ text: "لغو", callback_data: "bot:cancel" }]]);
    return;
  }
  if (data === "bot:agency:auto_password") {
    const session = await botGetSession(env, account.user.telegram_id);
    if (!session || session.state !== "agency_password") throw new Error("فرایند ساخت پنل منقضی شده؛ دوباره شروع کنید");
    const agency = await botCreateAgency(env, account.user, { ...session.data, password: randomPassword() });
    await botClearSession(env, account.user.telegram_id);
    await telegramApi(env, "sendMessage", {
      chat_id: chatId,
      text: "✅ <b>پنل با موفقیت ساخته شد</b>\n━━━━━━━━━━━━━━\nنام: " + botEscape(agency.title) + "\nنام کاربری: <code>" + botEscape(agency.username) + "</code>\nرمز: <code>" + botEscape(agency.password) + "</code>\nآدرس: " + botEscape(agency.panelUrl) + "\nوضعیت: " + botEscape(agency.status) + "\n\n💰 موجودی باقی‌مانده: <b>" + botMoney(agency.retainedWalletBalance) + " تومان</b>\n✅ مبلغ حداقل ساخت کسر نشد؛ از این پس فقط مصرف واقعی پنل از موجودی کم می‌شود.",
      parse_mode: "HTML",
      protect_content: true,
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: [[{ text: "🏢 پنل‌های من", callback_data: "bot:agencies" }]] }
    });
    return;
  }
  if (data.startsWith("bot:agency:edit:")) {
    const agencyId = data.slice("bot:agency:edit:".length);
    const agency = await env.PASARGUARD_DB.prepare("SELECT id,title,panel_username FROM agencies WHERE id=? AND user_id=?")
      .bind(agencyId, account.user.id).first();
    if (!agency) throw new Error("پنل پیدا نشد");
    await botSetSession(env, account.user.telegram_id, "agency_edit_title", { agencyId: agency.id, currentTitle: agency.title });
    await botPrompt(env, chatId, "✏️ <b>ویرایش پنل</b>\nپنل: <code>" + botEscape(agency.panel_username) + "</code>\n\nعنوان جدید نمایندگی را ارسال کنید. برای حفظ عنوان فعلی <code>-</code> بفرستید.");
    return;
  }
  if (data.startsWith("bot:agency:cred:")) {
    const agencyId = data.slice("bot:agency:cred:".length);
    const cred = await botGetAgencyCredentials(env, account.user, agencyId);
    await telegramApi(env, "sendMessage", {
      chat_id: chatId,
      text: "🔐 <b>اطلاعات ورود پنل</b>\n━━━━━━━━━━━━━━\nنام کاربری: <code>" + botEscape(cred.username) + "</code>\n" +
        (cred.password ? "رمز: <code>" + botEscape(cred.password) + "</code>\n" : "این پنل دستی است؛ هنگام اتصال به ربات نماینده، رمز پنل از شما خواسته می‌شود.\n") +
        "آدرس: " + botEscape(cred.panelUrl),
      parse_mode: "HTML",
      protect_content: true,
      disable_web_page_preview: true
    });
    return;
  }
  if (data === "bot:admin:target") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    await botSetSession(env, account.user.telegram_id, "admin_target", {});
    await botPrompt(env, chatId, "🔎 شناسه عددی تلگرام یا نام کاربری کاربر را ارسال کنید.");
    return;
  }
  if (data.startsWith("bot:admin:balance:")) {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const targetUserId = Number(data.slice("bot:admin:balance:".length));
    const target = await env.PASARGUARD_DB.prepare("SELECT id,telegram_id,first_name,username,wallet_balance FROM users WHERE id=?").bind(targetUserId).first();
    if (!target) throw new Error("کاربر پیدا نشد");
    await botSetSession(env, account.user.telegram_id, "admin_operation", { targetUserId });
    await botPrompt(env, chatId,
      "💰 کاربر: <b>" + botEscape(target.first_name || target.username || target.telegram_id) + "</b>\nشناسه: <code>" + botEscape(target.telegram_id) + "</code>\nموجودی: <b>" + botMoney(target.wallet_balance) + " تومان</b>\n\nنوع عملیات را انتخاب کنید:",
      [[{ text: "➕ افزایش", callback_data: "bot:admin:op:increase" }, { text: "➖ کاهش", callback_data: "bot:admin:op:decrease" }], [{ text: "لغو", callback_data: "bot:cancel" }]]
    );
    return;
  }
  if (data.startsWith("bot:admin:op:")) {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const operation = data.slice("bot:admin:op:".length);
    if (!["increase", "decrease"].includes(operation)) throw new Error("عملیات معتبر نیست");
    const session = await botGetSession(env, account.user.telegram_id);
    if (!session?.data?.targetUserId) throw new Error("ابتدا کاربر را انتخاب کنید");
    await botSetSession(env, account.user.telegram_id, "admin_amount", { ...session.data, operation });
    await botPrompt(env, chatId, "مبلغ " + (operation === "increase" ? "افزایش" : "کاهش") + " را به تومان ارسال کنید.");
    return;
  }
  if (data === "bot:admin:sync_usage") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const result = await syncUsage(env, 200);
    await audit(env, account.user.id, "bot_manual_usage_sync", result);
    await botPrompt(env, chatId, "✅ همگام‌سازی مصرف انجام شد.\nبررسی‌شده: <b>" + botMoney(result.processed ?? result.checked ?? 0) + "</b>\nخطا: <b>" + botMoney(result.errors?.length || 0) + "</b>", [[{ text: "↩️ مدیریت", callback_data: "bot:admin" }]]);
    return;
  }
  if (data === "bot:admin:sync_payments") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const result = await pollPendingPayments(env, 100);
    await audit(env, account.user.id, "bot_manual_payment_sync", result);
    await botPrompt(env, chatId, "✅ استعلام پرداخت‌ها انجام شد.\nبررسی: <b>" + botMoney(result.checked) + "</b>\nشارژشده: <b>" + botMoney(result.credited) + "</b>", [[{ text: "↩️ مدیریت", callback_data: "bot:admin" }]]);
    return;
  }
  if (data === "bot:admin:cleanup") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const result = await cleanupStalePendingInvoices(env, { settings: account.settings, limit: 500 });
    await audit(env, account.user.id, "bot_pending_invoice_cleanup", result);
    await botPrompt(env, chatId, "🧹 پاک‌سازی انجام شد.\nحذف‌شده: <b>" + botMoney(result.deleted) + "</b>\nپرداخت تأییدشده: <b>" + botMoney(result.credited) + "</b>\nخطا: <b>" + botMoney(result.errors?.length || 0) + "</b>", [[{ text: "↩️ مدیریت", callback_data: "bot:admin" }]]);
    return;
  }
  if (data === "bot:admin:python") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    try {
      const result = await provisionPythonHelper(env, { source: "bot-admin", actorId: account.user.id });
      await botPrompt(env, chatId, "🐍 وضعیت Python Worker:\n<b>" + botEscape(result.status || (result.success ? "موفق" : "ناموفق")) + "</b>\nWorker: <code>" + botEscape(result.worker_name || "-") + "</code>", [[{ text: "↩️ مدیریت", callback_data: "bot:admin" }]]);
    } catch (error) {
      const shortError = pythonErrorPlainSummary(error, { source: "bot-admin" }, 700);
      await botPrompt(env, chatId, "🐍❌ <b>ترمیم Python ناموفق بود</b>\n\n<pre>" + botEscape(shortError) + "</pre>\nگزارش کامل برای مدیران ربات نیز ارسال شد.", [[{ text: "🔄 تلاش دوباره", callback_data: "bot:admin:python" }], [{ text: "↩️ مدیریت", callback_data: "bot:admin" }]]);
    }
    return;
  }
  if (data === "bot:admin:central_bot:token") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    await botSetSession(env, account.user.telegram_id, "setting_central_bot_token", {});
    await botPrompt(env, chatId,
      "🔑 <b>تغییر توکن ربات مرکزی</b>\n\nتوکن جدیدی را که از <b>@BotFather</b> دریافت کرده‌اید ارسال کنید.\n\n" +
      "• توکن قبل از ذخیره با Telegram API بررسی می‌شود.\n" +
      "• Webhook و دکمه مینی‌اپ خودکار منتقل می‌شوند.\n" +
      "• پیام حاوی توکن پس از بررسی حذف می‌شود.\n\n" +
      "⚠️ بعد از تغییر، ادامه مدیریت از ربات جدید انجام می‌شود."
    );
    return;
  }
  if (data === "bot:admin:central_bot:admins") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    await botSetSession(env, account.user.telegram_id, "setting_central_admin_ids", {});
    await botPrompt(env, chatId,
      "👤 <b>تغییر مدیران ربات مرکزی</b>\n\nTelegram ID مدیران را با کاما یا هرکدام در یک خط ارسال کنید.\nمثال:\n<code>123456789,987654321</code>\n\n⚠️ شناسه‌ای که از فهرست حذف شود، بلافاصله دسترسی مدیریتی خود را از دست می‌دهد."
    );
    return;
  }
  if (data === "bot:admin:repair_bot") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const result = await configureTelegramBot(env, origin);
    await botPrompt(env, chatId, "✅ وبهوک و دکمه منوی مینی‌اپ ربات مرکزی ترمیم شد.\n<code>" + botEscape(result.webhookUrl) + "</code>", [[{ text: "↩️ مدیریت", callback_data: "bot:admin" }]]);
    return;
  }
  if (data.startsWith("bot:setting:")) {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const key = data.slice("bot:setting:".length);
    if (key === "central_join_channels") {
      await botSetSession(env, account.user.telegram_id, "setting_join_channels", { key });
      await botPrompt(env, chatId, "📢 کانال‌های جوین اجباری ربات مرکزی را هرکدام در یک خط بفرستید.\n\n<code>@channel | عنوان اختیاری</code>\nیا برای کانال خصوصی:\n<code>-100123456789 | عنوان | https://t.me/+InviteLink</code>\n\nبرای حذف همه <code>-</code> بفرستید. ربات مرکزی باید در کانال‌ها مدیر باشد.");
      return;
    }
    const allowed = ["price_per_gb", "setup_fee", "reseller_bot_setup_fee", "reseller_bot_license_renewal_fee", "central_recharge_bonus_percent", "min_recharge", "pending_invoice_ttl_hours"];
    if (!allowed.includes(key)) throw new Error("تنظیم پشتیبانی نمی‌شود");
    await botSetSession(env, account.user.telegram_id, "setting_value", { key });
    const promptText = key === "setup_fee"
      ? "💰 حداقل موجودی لازم برای ساخت پنل را به تومان ارسال کنید.\n\nاین مبلغ فقط شرط ساخت پنل است، از کیف پول کسر نمی‌شود و برای پرداخت مصرف واقعی پنل باقی می‌ماند."
      : key === "reseller_bot_setup_fee"
        ? "🤖 هزینه ساخت ربات نمایندگی را به تومان ارسال کنید."
      : key === "reseller_bot_license_renewal_fee"
        ? "🪪 مبلغ تمدید یک‌ماهه لایسنس ربات نماینده را به تومان ارسال کنید. عدد ۰ یعنی تمدید رایگان."
      : "مقدار جدید را فقط به‌صورت عدد ارسال کنید.";
    await botPrompt(env, chatId, promptText);
    return;
  }
  if (data.startsWith("bot:toggle:")) {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const key = data.slice("bot:toggle:".length);
    if (!["auto_delete_pending_invoices", "usage_sync_enabled", "central_join_enabled"].includes(key)) throw new Error("تنظیم پشتیبانی نمی‌شود");
    const next = account.settings[key] === "true" ? "false" : "true";
    await setSettings(env, { [key]: next });
    await audit(env, account.user.id, "bot_setting_toggled", { key, value: next });
    const refreshed = await ensureTelegramBotUser(env, callback.from);
    await botSendOrEdit(env, { account: refreshed, chatId, messageId }, "admin_settings");
    return;
  }
  throw new Error("این کلید پشتیبانی نمی‌شود؛ /start را ارسال کنید");
}

async function botHandleSessionMessage(env, account, message, session, origin, ctx = null) {
  const chatId = message.chat.id;
  const text = String(message.text || "").trim();
  const centralCreationStates = new Set(["sales_bot_token", "sales_bot_agency", "sales_bot_agency_password", "sales_bot_brand", "sales_card_holder", "sales_card_number", "sales_bank_name"]);
  const agencyCreationStates = new Set(["agency_title", "agency_username", "agency_password"]);
  if (agencyCreationStates.has(String(session.state || "")) && !agencySalesOpen(account.settings)) {
    await botClearSession(env, account.user.telegram_id);
    await botPrompt(env, chatId, "⛔ فروش و ساخت پنل نمایندگی در حین فرایند توسط مدیریت مرکزی متوقف شد. اطلاعات نیمه‌تمام حذف شد.", [[{ text: "🏠 منوی اصلی", callback_data: "bot:home" }]]);
    return true;
  }
  if (centralCreationStates.has(String(session.state || "")) && !resellerBotSalesOpen(account.settings)) {
    await botClearSession(env, account.user.telegram_id);
    await botPrompt(env, chatId, "⛔ ساخت ربات نمایندگی در حین فرایند توسط مدیریت مرکزی متوقف شد. اطلاعات نیمه‌تمام حذف شد.", [[{ text: "🏠 منوی اصلی", callback_data: "bot:home" }]]);
    return true;
  }


  if (session.state === "bitpin_claim") {
    const parts=String(text||"").split("|").map(x=>x.trim());if(parts.length<2)throw new Error("قالب صحیح: مقدار | TXID");
    const claim=await createBitpinDepositClaimForTelegram(env,account.user,await getSettings(env),parts[0],parts.slice(1).join(""));await botClearSession(env,account.user.telegram_id);
    await notifyAdmins(env,"🪙 <b>درخواست واریز بیت‌پین</b>\nکاربر: <code>"+botEscape(account.user.telegram_id)+"</code>\nمقدار: <b>"+botEscape(claim.crypto_amount+" "+claim.asset)+"</b>\nارزش: <b>"+botMoney(claim.amount_toman)+" تومان</b>\nTXID: <code>"+botEscape(claim.txid)+"</code>");
    await botPrompt(env,chatId,"✅ درخواست ثبت شد و پس از بررسی مدیر، کیف پول شارژ می‌شود.\nشناسه: <code>"+botEscape(claim.id)+"</code>",[[{text:"🪙 وضعیت واریزها",callback_data:"bot:bitpin"}],[{text:"💳 کیف پول",callback_data:"bot:wallet"}]]);return true;
  }
  if (["setting_bitpin_api","setting_bitpin_secret","setting_bitpin_asset","setting_bitpin_address","setting_bitpin_rate"].includes(session.state)) {
    if(!account.isAdmin)throw new Error("دسترسی مدیر لازم است");const values={};
    if(session.state==="setting_bitpin_api"){if(text.length<8)throw new Error("API Key معتبر نیست");values.bitpin_api_key="enc:"+await encryptSecret(text,env);try{await telegramApi(env,"deleteMessage",{chat_id:chatId,message_id:message.message_id})}catch(_){}}
    if(session.state==="setting_bitpin_secret"){if(text.length<8)throw new Error("API Secret معتبر نیست");values.bitpin_api_secret="enc:"+await encryptSecret(text,env);try{await telegramApi(env,"deleteMessage",{chat_id:chatId,message_id:message.message_id})}catch(_){}}
    if(session.state==="setting_bitpin_asset"){const p=text.split("|").map(x=>cleanText(x,40).toUpperCase());if(p.length<2||!p[0]||!p[1])throw new Error("قالب صحیح: USDT | TRC20");values.bitpin_asset=p[0];values.bitpin_network=p[1];}
    if(session.state==="setting_bitpin_address"){const a=cleanText(text,300).replace(/\s+/g,"");if(a.length<10)throw new Error("آدرس واریز معتبر نیست");values.bitpin_deposit_address=a;}
    if(session.state==="setting_bitpin_rate"){const p=text.split("|").map(x=>x.trim()),rate=botParseInteger(p[0]),min=Number(p[1]);if(!Number.isFinite(rate)||rate<1||!Number.isFinite(min)||min<=0)throw new Error("قالب صحیح: نرخ تومان | حداقل مقدار");values.bitpin_toman_per_unit=String(rate);values.bitpin_min_crypto_amount=String(min);}
    await setSettings(env,values);await audit(env,account.user.id,"central_bitpin_setting_saved",{state:session.state});await botClearSession(env,account.user.telegram_id);const fresh=await ensureTelegramBotUser(env,message.from);await botSendOrEdit(env,{account:fresh,chatId},"admin_bitpin");return true;
  }

  if (session.state === "setting_github_upload_token") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const token = String(text || "").trim();
    if (token.length < 20 || /\s/.test(token)) throw new Error("توکن GitHub معتبر نیست");
    const current = await getSettings(env);
    const prospective = { ...current, github_token: token };
    await githubConnectionInfo(env, prospective);
    await setSettings(env, { github_token: token, github_zip_last_error: "" });
    await botClearSession(env, account.user.telegram_id);
    try { await telegramApi(env, "deleteMessage", { chat_id: chatId, message_id: message.message_id }); } catch (_) {}
    const refreshed = await ensureTelegramBotUser(env, message.from);
    refreshed.public_origin = origin;
    await botSendOrEdit(env, { account: refreshed, chatId }, "admin_github_zip");
    return true;
  }
  if (session.state === "setting_github_upload_repo") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const pieces = String(text || "").split(/\s*\|\s*|\s+/).map(item => item.trim()).filter(Boolean);
    const repo = normalizeGithubRepo(pieces[0] || "");
    const branch = cleanText(pieces[1] || "main", 200);
    githubRepoApiPath(repo);
    if (!branch || !/^[A-Za-z0-9._\/-]+$/.test(branch) || branch.includes("..")) throw new Error("نام Branch معتبر نیست");
    const current = await getSettings(env);
    const prospective = { ...current, github_repo: repo, github_branch: branch };
    if (prospective.github_token) await githubConnectionInfo(env, prospective);
    await setSettings(env, { github_repo: repo, github_branch: branch, github_zip_last_error: "" });
    await botClearSession(env, account.user.telegram_id);
    const refreshed = await ensureTelegramBotUser(env, message.from);
    refreshed.public_origin = origin;
    await botSendOrEdit(env, { account: refreshed, chatId }, "admin_github_zip");
    return true;
  }
  if (session.state === "github_zip_upload") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const document = message.document;
    if (!document?.file_id) {
      await botPrompt(env, chatId, "فقط فایل ZIP بروزرسانی را به‌صورت Document ارسال کنید.", [[{ text: "لغو", callback_data: "bot:cancel" }]]);
      return true;
    }
    const fileName = String(document.file_name || "update.zip");
    if (!/\.zip$/i.test(fileName) && String(document.mime_type || "").toLowerCase() !== "application/zip") {
      await botPrompt(env, chatId, "فرمت فایل باید ZIP باشد.", [[{ text: "لغو", callback_data: "bot:cancel" }]]);
      return true;
    }
    if (Number(document.file_size || 0) > TELEGRAM_GITHUB_ZIP_MAX_BYTES) throw new Error("حجم ZIP بیشتر از ۲۰ مگابایت است");
    const claim = await claimGithubZipUpload(env, account.user.telegram_id, document);
    if (claim.duplicate && claim.status === "completed") {
      await botClearSession(env, account.user.telegram_id);
      await botPrompt(env, chatId,
        "ℹ️ این فایل قبلاً با موفقیت در GitHub ثبت شده است." + (claim.commit_sha ? "\nCommit: <code>" + botEscape(String(claim.commit_sha).slice(0, 12)) + "</code>" : ""),
        claim.commit_url ? [[{ text: "🔎 مشاهده Commit", url: claim.commit_url }], [{ text: "↩️ آپلود ZIP", callback_data: "bot:admin:github_zip" }]] : [[{ text: "↩️ آپلود ZIP", callback_data: "bot:admin:github_zip" }]]
      );
      return true;
    }
    if (claim.duplicate && claim.processing) {
      await botPrompt(env, chatId, "⏳ همین فایل در حال پردازش است؛ چند لحظه صبر کنید.", [[{ text: "↩️ وضعیت آپلود", callback_data: "bot:admin:github_zip" }]]);
      return true;
    }
    const started = await telegramApi(env, "sendMessage", {
      chat_id: chatId,
      text: "📦 <b>آپلود بروزرسانی به GitHub</b>\n━━━━━━━━━━━━━━\n⬇️ دریافت فایل از تلگرام…",
      parse_mode: "HTML"
    });
    const progressMessageId = started?.result?.message_id;
    const progress = async content => {
      if (progressMessageId) await editGithubUploadProgress(env, chatId, progressMessageId, content);
    };
    try {
      const settings = await getSettings(env);
      if (!settings.github_repo || !settings.github_token) throw new Error("اتصال GitHub کامل نیست");
      const zipBytes = await downloadCentralTelegramDocument(env, document);
      await progress("🗜 فایل دریافت شد؛ در حال استخراج امن و بررسی ساختار…");
      const files = await unzipProjectArchive(zipBytes);
      const project = await validateGithubProjectFiles(files);
      await markGithubZipUpload(env, claim.id, {
        repository: normalizeGithubRepo(settings.github_repo), branch: settings.github_branch || "main",
        version: project.version, file_count: project.files.length, status: "processing", error: null
      });
      await progress("✅ ساختار بسته تأیید شد\nنسخه: <code>" + botEscape(project.version) + "</code>\nفایل‌های قابل آپلود: <b>" + botMoney(project.files.length) + "</b>");
      const result = await githubCommitProjectFiles(env, settings, project, progress);
      await markGithubZipUpload(env, claim.id, {
        repository: result.repository, branch: result.branch, version: result.version,
        file_count: result.file_count, status: "completed", commit_sha: result.commit_sha,
        commit_url: result.commit_url, error: null
      });
      await setSettings(env, {
        github_zip_last_commit_sha: result.commit_sha,
        github_zip_last_version: project.version,
        github_zip_last_uploaded_at: nowIso(),
        github_zip_last_error: "",
        auto_update_last_check_epoch: "0"
      });
      await audit(env, account.user.id, "github_zip_uploaded", {
        fileName, version: project.version, repository: result.repository, branch: result.branch,
        fileCount: result.file_count, commitSha: result.commit_sha, noChange: result.no_change
      });
      await botClearSession(env, account.user.telegram_id);
      try { await telegramApi(env, "deleteMessage", { chat_id: chatId, message_id: message.message_id }); } catch (_) {}
      if (progressMessageId) {
        await editGithubUploadProgress(env, chatId, progressMessageId,
          (result.no_change ? "ℹ️ همه فایل‌ها از قبل دقیقاً در GitHub موجود بودند." : "✅ <b>فایل‌ها با موفقیت در GitHub ثبت شدند</b>") +
          "\n\nنسخه: <code>" + botEscape(project.version) + "</code>" +
          "\nفایل‌ها: <b>" + botMoney(result.file_count) + "</b>" +
          "\nCommit: <code>" + botEscape(String(result.commit_sha).slice(0, 12)) + "</code>" +
          "\n\n🚀 استقرار خودکار سه Worker در پس‌زمینه شروع شد.",
          [[{ text: "🔎 مشاهده Commit", url: result.commit_url }], [{ text: "📦 آپلود بعدی", callback_data: "bot:admin:github_zip" }]]
        );
      }
      if (ctx && typeof ctx.waitUntil === "function") {
        ctx.waitUntil(deployUploadedGithubVersion(env, chatId, project.version).catch(error => console.error("zip deployment failed", error)));
      }
      return true;
    } catch (error) {
      await markGithubZipUpload(env, claim.id, { status: "failed", error: cleanText(error.message || error, 1000) });
      await setSettings(env, { github_zip_last_error: cleanText(error.message || error, 1000) });
      try { await audit(env, account.user.id, "github_zip_upload_failed", { fileName, message: error.message || String(error) }); } catch (_) {}
      if (progressMessageId) {
        await editGithubUploadProgress(env, chatId, progressMessageId,
          "❌ <b>آپلود ناموفق بود</b>\n\n<code>" + botEscape(cleanText(error.message || error, 900)) + "</code>\n\nمی‌توانید ZIP اصلاح‌شده را دوباره ارسال کنید.",
          [[{ text: "↩️ تنظیمات GitHub", callback_data: "bot:admin:github_zip" }], [{ text: "لغو", callback_data: "bot:cancel" }]]
        );
      }
      return true;
    }
  }
  if (String(session.state || "").startsWith("sales_") && !centralCreationStates.has(String(session.state || ""))) {
    await botClearSession(env, account.user.telegram_id);
    const bot = await getResellerBotForUser(env, account.user.id);
    const rows = bot?.bot_username ? [[{ text: "🚀 ورود به ربات نماینده", url: "https://t.me/" + bot.bot_username.replace(/^@/, "") }], [{ text: "↩️ بازگشت", callback_data: "bot:sales" }]] : [[{ text: "↩️ بازگشت", callback_data: "bot:sales" }]];
    await botPrompt(env, chatId, "🔐 تنظیمات ربات نماینده فقط داخل ربات خودش قابل مدیریت است. فرمان <code>/manage</code> را در ربات نماینده ارسال کنید.", rows);
    return true;
  }
  if (session.state === "sales_category_title") {
    const raw=cleanText(text,100);if(raw.length<2)throw new Error("نام دسته‌بندی کوتاه است");
    const match=raw.match(/^(\p{Extended_Pictographic}|\p{Regional_Indicator}{2})\s*(.*)$/u);const emoji=match?.[1]||"📁";const title=cleanText(match?.[2]||raw,90);
    await env.PASARGUARD_DB.prepare(`INSERT INTO sales_categories(id,bot_id,title,emoji,status,sort_order,created_at,updated_at) VALUES(?,?,?,?,'active',0,?,?)`).bind(id("cat"),session.data.botId,title,emoji,nowIso(),nowIso()).run();
    await botClearSession(env,account.user.telegram_id);await botSendOrEdit(env,{account,chatId},"sales_catalog");return true;
  }
  if (session.state === "sales_location_title") {
    const raw=cleanText(text,100);if(raw.length<2)throw new Error("نام لوکیشن کوتاه است");
    const match=raw.match(/^(\p{Extended_Pictographic}|\p{Regional_Indicator}{2})\s*(.*)$/u);const emoji=match?.[1]||"🌍";const title=cleanText(match?.[2]||raw,90);
    await botSetSession(env,account.user.telegram_id,"sales_location_groups",{...session.data,title,emoji});
    await botPrompt(env,chatId,"🔗 شناسه Groupهای پنل برای این لوکیشن را با ویرگول ارسال کنید.\nمثال: <code>1,2,3</code>\nاگر نمی‌خواهید گروه خاصی ثبت شود، عدد <b>0</b> بفرستید.");return true;
  }
  if (session.state === "sales_location_groups") {
    const groups=text==='0'?[]:text.split(/[,،\s]+/).map(Number).filter(Number.isInteger);if(text!=='0'&&!groups.length)throw new Error("شناسه گروه معتبر وارد کنید");
    await env.PASARGUARD_DB.prepare(`INSERT INTO sales_locations(id,bot_id,title,emoji,description,group_ids_json,status,sort_order,created_at,updated_at) VALUES(?,?,?,?,NULL,?,'active',0,?,?)`).bind(id("loc"),session.data.botId,session.data.title,session.data.emoji,JSON.stringify(groups),nowIso(),nowIso()).run();
    await botClearSession(env,account.user.telegram_id);await botSendOrEdit(env,{account,chatId},"sales_catalog");return true;
  }
  if (session.state === "sales_text_edit") {
    if(!SALES_TEXT_LABELS[session.data.key])throw new Error("نوع متن معتبر نیست");
    if(text==='-') await env.PASARGUARD_DB.prepare("DELETE FROM reseller_bot_texts WHERE bot_id=? AND text_key=?").bind(session.data.botId,session.data.key).run();
    else {const value=cleanText(text,3500);if(value.length<2)throw new Error("متن خیلی کوتاه است");await env.PASARGUARD_DB.prepare(`INSERT INTO reseller_bot_texts(bot_id,text_key,text_value,updated_at) VALUES(?,?,?,?) ON CONFLICT(bot_id,text_key) DO UPDATE SET text_value=excluded.text_value,updated_at=excluded.updated_at`).bind(session.data.botId,session.data.key,value,nowIso()).run();}
    await botClearSession(env,account.user.telegram_id);await botSendOrEdit(env,{account,chatId},"sales_texts");return true;
  }
  if (session.state === "sales_brand_edit") {
    const brand=cleanText(text,120);if(brand.length<2)throw new Error("نام برند خیلی کوتاه است");
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET brand_name=?,updated_at=? WHERE id=? AND user_id=?").bind(brand,nowIso(),session.data.botId,account.user.id).run();
    const fresh=await getResellerBotForUser(env,account.user.id);try{await configureResellerBot(env,fresh,resellerBotOrigin(account.settings))}catch(_){}
    await botClearSession(env,account.user.telegram_id);await botSendOrEdit(env,{account,chatId},"sales_settings");return true;
  }
  if (session.state === "sales_support_edit") {
    const support=text==='-'?'':cleanText(text,200);if(text!=='-'&&!support)throw new Error("آیدی یا لینک پشتیبانی معتبر نیست");
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET support_username=?,updated_at=? WHERE id=? AND user_id=?").bind(support,nowIso(),session.data.botId,account.user.id).run();
    await botClearSession(env,account.user.telegram_id);await botSendOrEdit(env,{account,chatId},"sales_settings");return true;
  }
  if (session.state === "sales_trial_mb" || session.state === "sales_trial_gb") {
    const mb=session.state==="sales_trial_gb"?botParseInteger(text)*1024:botParseInteger(text);
    if(!Number.isFinite(mb)||mb<=0||mb>1048576)throw new Error("حجم تست باید بین ۱ تا ۱٬۰۴۸٬۵۷۶ مگابایت باشد");
    await botSetSession(env,account.user.telegram_id,"sales_trial_hours",{...session.data,mb});await botPrompt(env,chatId,"⏱ مدت تست را به <b>ساعت</b> ارسال کنید.\nمثال: <b>24</b>");return true;
  }
  if (session.state === "sales_trial_hours" || session.state === "sales_trial_days") {
    const hours=session.state==="sales_trial_days"?botParseInteger(text)*24:botParseInteger(text);
    if(!Number.isFinite(hours)||hours<=0||hours>720)throw new Error("مدت تست باید بین ۱ تا ۷۲۰ ساعت باشد");
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET trial_data_limit_bytes=?,trial_duration_hours=?,trial_duration_days=?,trial_enabled=1,updated_at=? WHERE id=? AND user_id=?").bind(Number(session.data.mb||session.data.gb*1024)*1024*1024,hours,Math.max(1,Math.ceil(hours/24)),nowIso(),session.data.botId,account.user.id).run();
    await botClearSession(env,account.user.telegram_id);await botSendOrEdit(env,{account,chatId},"sales_settings");return true;
  }
  if (session.state === "sales_referral_reward") {
    const amount=botParseInteger(text);if(!Number.isFinite(amount)||amount<0||amount>1000000000)throw new Error("مبلغ پورسانت معتبر نیست");
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET referral_reward_type='fixed',referral_reward_toman=?,updated_at=? WHERE id=? AND user_id=?").bind(amount,nowIso(),session.data.botId,account.user.id).run();
    await botClearSession(env,account.user.telegram_id);await botSendOrEdit(env,{account,chatId},"sales_settings");return true;
  }
  if (session.state === "sales_referral_percent") {
    const percent=Number(String(text).replace('٪','').trim());if(!Number.isFinite(percent)||percent<0||percent>100)throw new Error("درصد پورسانت باید بین ۰ تا ۱۰۰ باشد");
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET referral_reward_type='percent',referral_reward_percent=?,updated_at=? WHERE id=? AND user_id=?").bind(percent,nowIso(),session.data.botId,account.user.id).run();
    await botClearSession(env,account.user.telegram_id);await botSendOrEdit(env,{account,chatId},"sales_settings");return true;
  }
  if (session.state === "sales_referral_banner") {
    if(text==='-') await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET referral_banner_file_id=NULL,referral_banner_file_type=NULL,updated_at=? WHERE id=? AND user_id=?").bind(nowIso(),session.data.botId,account.user.id).run();
    else {let fileId='',fileType='photo';if(Array.isArray(message.photo)&&message.photo.length)fileId=String(message.photo[message.photo.length-1].file_id||'');else if(message.document?.file_id){fileId=String(message.document.file_id);fileType='document'}if(!fileId)throw new Error("تصویر یا فایل بنر را ارسال کنید");await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET referral_banner_file_id=?,referral_banner_file_type=?,updated_at=? WHERE id=? AND user_id=?").bind(fileId,fileType,nowIso(),session.data.botId,account.user.id).run();}
    await botClearSession(env,account.user.telegram_id);await botSendOrEdit(env,{account,chatId},"sales_settings");return true;
  }
  if (session.state === "sales_recharge_bonus") {
    const percent=Number(String(text).replace('٪','').trim());if(!Number.isFinite(percent)||percent<0||percent>100)throw new Error("درصد بونس باید بین ۰ تا ۱۰۰ باشد");
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET recharge_bonus_percent=?,updated_at=? WHERE id=? AND user_id=?").bind(percent,nowIso(),session.data.botId,account.user.id).run();
    await botClearSession(env,account.user.telegram_id);await botSendOrEdit(env,{account,chatId},"sales_settings");return true;
  }
  if (session.state === "sales_user_discount") {
    const percent=Number(String(text).replace('٪','').trim());if(!Number.isFinite(percent)||percent<0||percent>95)throw new Error("تخفیف باید بین ۰ تا ۹۵ درصد باشد");
    const r=await env.PASARGUARD_DB.prepare("UPDATE sales_customers SET discount_percent=?,customer_type=CASE WHEN ?>0 THEN 'wholesale' ELSE customer_type END,updated_at=? WHERE id=? AND bot_id=?").bind(percent,percent,nowIso(),session.data.customerId,session.data.botId).run();if(!Number(r?.meta?.changes||0))throw new Error("کاربر پیدا نشد");
    await botClearSession(env,account.user.telegram_id);const rendered=await botSalesUserView(env,account,session.data.customerId);await telegramApi(env,"sendMessage",{chat_id:chatId,text:rendered.text,parse_mode:"HTML",reply_markup:rendered.reply_markup});return true;
  }
  if (session.state === "sales_bot_agency_password") {
    try { await telegramApi(env, "deleteMessage", { chat_id: chatId, message_id: message.message_id }); } catch (_) {}
    const agency = await verifyAndStoreAgencyPassword(env, account.user.id, session.data.agencyId, text);
    await botSetSession(env, account.user.telegram_id, "sales_bot_brand", { ...session.data, agencyId: agency.id });
    await botPrompt(env, chatId, "✅ رمز پنل تأیید و به‌صورت رمزگذاری‌شده ذخیره شد.\n\n🏷 حالا نام برند فروش خود را ارسال کنید.");
    return true;
  }
  if (session.state === "sales_bot_token") {
    const token = cleanText(text, 2048);
    if (!/^\d+:[A-Za-z0-9_-]{20,}$/.test(token)) throw new Error("فرمت توکن BotFather معتبر نیست");
    if (token === String(account.settings.bot_token || "")) throw new Error("ربات اصلی سامانه را نمی‌توان به‌عنوان ربات فروش ثبت کرد");
    const info = await telegramApiWithToken(token, "getMe", {});
    const botUser = info?.result;
    if (!botUser?.id || !botUser?.is_bot || !botUser?.username) throw new Error("اطلاعات ربات از تلگرام دریافت نشد");
    const duplicate = await env.PASARGUARD_DB.prepare("SELECT user_id FROM reseller_bots WHERE bot_telegram_id=?")
      .bind(String(botUser.id)).first();
    if (duplicate && Number(duplicate.user_id) !== Number(account.user.id)) throw new Error("این ربات قبلاً توسط نماینده دیگری ثبت شده است");
    const agencies = await listSalesBotAgencies(env, account.user.id);
    if (!agencies.length) throw new Error("پنلی برای اتصال پیدا نشد؛ ابتدا پنل بسازید یا شناسه تلگرام خود را روی پنل دستی پاسارگارد ثبت کنید");
    const tokenEnc = await encryptSecret(token, env);
    await botSetSession(env, account.user.telegram_id, "sales_bot_agency", {
      ...(session.data || {}),
      tokenEnc,
      botTelegramId: String(botUser.id),
      botUsername: cleanText(botUser.username, 100),
      botName: cleanText(botUser.first_name, 120)
    });
    try { await telegramApi(env, "deleteMessage", { chat_id: chatId, message_id: message.message_id }); } catch (_) {}
    const rows = agencies.map((agency, index) => [salesBotAgencyButton(agency, index, "bot:sales:agency:")]);
    rows.push([{ text: "لغو", callback_data: "bot:cancel" }]);
    await botPrompt(env, chatId,
      "✅ ربات <b>@" + botEscape(botUser.username) + "</b> تأیید شد.\n\nپنلی را که سرویس مشتریان روی آن ساخته شود انتخاب کنید:",
      rows
    );
    return true;
  }
  if (session.state === "sales_bot_brand") {
    const brandName = cleanText(text, 120);
    if (brandName.length < 2) throw new Error("نام برند خیلی کوتاه است");
    await botSetSession(env, account.user.telegram_id, "sales_card_holder", { ...session.data, brandName });
    await botPrompt(env, chatId, "👤 نام صاحب کارت بانکی را ارسال کنید.");
    return true;
  }
  if (session.state === "sales_card_holder") {
    const cardHolder = cleanText(text, 120);
    if (cardHolder.length < 3) throw new Error("نام صاحب کارت معتبر نیست");
    await botSetSession(env, account.user.telegram_id, "sales_card_number", { ...session.data, cardHolder });
    await botPrompt(env, chatId, "💳 شماره کارت ۱۶ رقمی خود را ارسال کنید.");
    return true;
  }
  if (session.state === "sales_card_number") {
    const cardNumber = normalizeCardNumber(text);
    if (!/^\d{16}$/.test(cardNumber)) throw new Error("شماره کارت باید دقیقاً ۱۶ رقم باشد");
    await botSetSession(env, account.user.telegram_id, "sales_bank_name", { ...session.data, cardNumber });
    await botPrompt(env, chatId, "🏦 نام بانک را ارسال کنید.");
    return true;
  }
  if (session.state === "sales_bank_name") {
    const bankName = cleanText(text, 80);
    if (bankName.length < 2) throw new Error("نام بانک معتبر نیست");
    const data = session.data || {};
    if (!data.tokenEnc || !data.botTelegramId || !data.botUsername || !data.agencyId || !data.brandName || !data.cardHolder || !data.cardNumber) {
      throw new Error("اطلاعات ساخت ربات ناقص است؛ دوباره شروع کنید");
    }
    const agency = await env.PASARGUARD_DB.prepare("SELECT * FROM agencies WHERE id=? AND user_id=? AND panel_password_enc IS NOT NULL AND COALESCE(is_trial,0)=0")
      .bind(data.agencyId, account.user.id).first();
    if (!agency) throw new Error("رمز پنل انتخاب‌شده هنوز تأیید نشده است؛ ساخت ربات را دوباره شروع کنید");
    const currentSalesSettings = await getSettings(env);
    if (!resellerBotSalesOpen(currentSalesSettings)) {
      await botClearSession(env, account.user.telegram_id);
      throw new Error("ساخت ربات نمایندگی موقتاً توسط مدیریت مرکزی متوقف شده است");
    }
    const botId = id("sbot");
    const webhookSecret = randomHex(24);
    const ts = nowIso();
    const licenseType = normalizeResellerLicenseType(data.licenseType);
    const creationFee = resellerBotSetupFee(currentSalesSettings, licenseType);
    const assignedRoleId = await applyBotLicenseRoleToAgency(env, agency, licenseType, account.user.id);
    const defaultDownlinePrice = Math.max(centralMinimumDownlinePrice(currentSalesSettings), Number(currentSalesSettings.price_per_gb || 0) + 1);
    const createResults = await env.PASARGUARD_DB.batch([
      env.PASARGUARD_DB.prepare(`
        INSERT INTO reseller_bots(
          id,user_id,agency_id,parent_bot_id,purchase_source,license_type,upstream_price_per_gb,
          downline_sales_enabled,downline_default_price_per_gb,downline_setup_fee,downline_renewal_fee,
          bot_telegram_id,bot_username,bot_name,bot_token_enc,webhook_secret,status,
          license_started_at,license_expires_at,license_last_renewed_at,license_notice_key,license_renewal_count,
          brand_name,welcome_text,support_username,card_holder,card_number,bank_name,iban,created_at,updated_at
        )
        SELECT ?,?,?,NULL,'central',?,?, ?,?,?,?, ?,?,?,?,?, 'active',?,?,?,NULL,0, ?,?,?,?,?,?,NULL,?,?
        WHERE EXISTS(SELECT 1 FROM users WHERE id=? AND wallet_balance>=?)
      `).bind(
        botId, account.user.id, agency.id, licenseType, Number(currentSalesSettings.price_per_gb || 0),
        licenseType === "master" ? 1 : 0, defaultDownlinePrice, 0, 0,
        data.botTelegramId, data.botUsername, data.botName || "", data.tokenEnc, webhookSecret,
        ts, new Date(Date.now()+RESELLER_LICENSE_MS).toISOString(), ts,
        data.brandName, "", cleanText(account.user.username, 100), data.cardHolder, data.cardNumber, bankName,
        ts, ts, account.user.id, creationFee
      ),
      env.PASARGUARD_DB.prepare("UPDATE users SET wallet_balance=wallet_balance-?,updated_at=? WHERE id=? AND changes()=1")
        .bind(creationFee, ts, account.user.id),
      env.PASARGUARD_DB.prepare(`
        INSERT INTO wallet_ledger(id,user_id,type,amount,balance_after,ref_type,ref_id,description,created_at)
        SELECT ?,id,'reseller_bot_setup_fee',?,wallet_balance,'reseller_bot',?,?,?
        FROM users WHERE id=? AND changes()=1
      `).bind(id("led"), -creationFee, botId, "هزینه ساخت " + resellerLicenseTypeLabel(licenseType), ts, account.user.id)
    ]);
    if (!Number(createResults?.[0]?.meta?.changes || 0)) throw new Error("موجودی حساب هنگام ساخت ربات کافی نیست یا تغییر کرده است");
    const bot = await getResellerBotForUser(env, account.user.id);
    await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET bot_version=?,miniapp_enabled=1,updated_at=? WHERE id=?")
      .bind(RESELLER_BOT_VERSION, nowIso(), bot.id).run();
    bot.bot_version = RESELLER_BOT_VERSION;
    bot.miniapp_enabled = 1;
    let setupError = "";
    try {
      await configureResellerBot(env, bot, resellerBotOrigin(account.settings));
    } catch (error) {
      setupError = cleanText(error.message, 500);
      await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET status='error',updated_at=? WHERE id=?")
        .bind(nowIso(), bot.id).run();
    }
    await botClearSession(env, account.user.telegram_id);
    await audit(env, account.user.id, "sales_bot_created", { botId: bot.id, botUsername: bot.bot_username, agencyId: agency.id, licenseType, assignedRoleId, setupError });
    await queueReportEvent(env, bot.id, setupError ? "errors" : "bots", setupError ? "ثبت ربات با خطای اتصال اولیه" : "ربات نماینده جدید ساخته شد",
      "ربات: <b>@" + botEscape(bot.bot_username || "-") + "</b>\n" +
      "برند: <b>" + botEscape(bot.brand_name || data.brandName) + "</b>\n" +
      "نوع: <b>" + botEscape(resellerLicenseTypeLabel(licenseType)) + "</b>\n" +
      "مالک: <code>" + botEscape(account.user.telegram_id) + "</code>" +
      (setupError ? "\nخطا: <code>" + botEscape(setupError) + "</code>" : ""),
      "bot-created:" + bot.id);
    const managementUrl = resellerManagementUrl(bot, account.settings);
    await telegramApi(env, "sendMessage", {
      chat_id: chatId,
      text: setupError
        ? "⚠️ <b>ربات فروش ثبت شد اما اتصال اولیه کامل نشد</b>\n" + botEscape(setupError) + "\nبا بازکردن بخش ربات نمایندگی در ربات مرکزی، تنظیمات فنی به‌صورت خودکار دوباره همگام می‌شود.\n\nلینک مدیریت:\n<code>" + botEscape(managementUrl) + "</code>"
        : "✅ <b>" + botEscape(resellerLicenseTypeLabel(licenseType)) + " با موفقیت فعال شد</b>\n━━━━━━━━━━━━━━\nربات: <b>@" + botEscape(bot.bot_username) + "</b>\nپنل متصل: <b>" + botEscape(agency.title) + "</b>\nنقش پنل: <b>" + botEscape(licenseType === "master" ? "مستر نمایندگی" : "نماینده فروش") + "</b>\nکارت: <code>" + botEscape(maskCardNumber(data.cardNumber)) + "</code>\nهزینه ساخت: <b>" + botMoney(creationFee) + " تومان</b>" + "\n\n🖥 لینک مدیریت:\n<code>" + botEscape(managementUrl) + "</code>\n\nربات را یک‌بار باز کنید و Start بزنید.",
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: [
        [{ text: "🖥 ورود به پنل مدیریت", url: managementUrl }],
        [{ text: "➕ ساخت اولین پلن", callback_data: "bot:sales:plan:new" }],
        [{ text: "🤖 مشاهده وضعیت ربات", callback_data: "bot:sales" }]
      ] }
    });
    return true;
  }
  if (session.state === "sales_edit_card_holder") {
    const cardHolder = cleanText(text, 120);
    if (cardHolder.length < 3) throw new Error("نام صاحب کارت معتبر نیست");
    await botSetSession(env, account.user.telegram_id, "sales_edit_card_number", { ...session.data, cardHolder });
    await botPrompt(env, chatId, "💳 شماره کارت ۱۶ رقمی جدید را ارسال کنید.");
    return true;
  }
  if (session.state === "sales_edit_card_number") {
    const cardNumber = normalizeCardNumber(text);
    if (!/^\d{16}$/.test(cardNumber)) throw new Error("شماره کارت باید دقیقاً ۱۶ رقم باشد");
    await botSetSession(env, account.user.telegram_id, "sales_edit_bank_name", { ...session.data, cardNumber });
    await botPrompt(env, chatId, "🏦 نام بانک را ارسال کنید.");
    return true;
  }
  if (session.state === "sales_edit_bank_name") {
    const bankName = cleanText(text, 80);
    if (bankName.length < 2) throw new Error("نام بانک معتبر نیست");
    const result = await env.PASARGUARD_DB.prepare(`
      UPDATE reseller_bots SET card_holder=?,card_number=?,bank_name=?,updated_at=? WHERE id=? AND user_id=?
    `).bind(session.data.cardHolder, session.data.cardNumber, bankName, nowIso(), session.data.botId, account.user.id).run();
    if (!Number(result?.meta?.changes || 0)) throw new Error("ربات فروش پیدا نشد");
    await botClearSession(env, account.user.telegram_id);
    await audit(env, account.user.id, "sales_bot_card_updated", { botId: session.data.botId, cardLast4: session.data.cardNumber.slice(-4) });
    await botSendOrEdit(env, { account, chatId }, "sales_bot");
    return true;
  }
  if (session.state === "sales_plan_title") {
    const title = cleanText(text, 100);
    if (title.length < 2) throw new Error("نام پلن خیلی کوتاه است");
    await botSetSession(env, account.user.telegram_id, "sales_plan_gb", { ...session.data, title });
    await botPrompt(env, chatId, "📊 حجم پلن را به گیگ ارسال کنید.\nمثال: <b>30</b>");
    return true;
  }
  if (session.state === "sales_plan_gb") {
    const gb = botParseInteger(text);
    if (!Number.isFinite(gb) || gb <= 0 || gb > 100000) throw new Error("حجم معتبر بین ۱ تا ۱۰۰٬۰۰۰ گیگ وارد کنید");
    await botSetSession(env, account.user.telegram_id, "sales_plan_days", { ...session.data, gb });
    await botPrompt(env, chatId, "🗓 مدت اعتبار پلن را به روز ارسال کنید.\nمثال: <b>30</b>");
    return true;
  }
  if (session.state === "sales_plan_days") {
    const days = botParseInteger(text);
    if (!Number.isFinite(days) || days <= 0 || days > 3650) throw new Error("مدت معتبر بین ۱ تا ۳۶۵۰ روز وارد کنید");
    await botSetSession(env, account.user.telegram_id, "sales_plan_price", { ...session.data, days });
    await botPrompt(env, chatId, "💰 قیمت فروش پلن را به تومان ارسال کنید.");
    return true;
  }
  if (session.state === "sales_plan_price") {
    const price = botParseInteger(text);
    if (!Number.isFinite(price) || price <= 0 || price > 1000000000000) throw new Error("قیمت معتبر وارد کنید");
    const bot = await getResellerBotForUser(env, account.user.id);
    if (!bot || bot.id !== session.data.botId) throw new Error("ربات فروش پیدا نشد");
    const planId = id("plan");
    const ts = nowIso();
    await env.PASARGUARD_DB.prepare(`
      INSERT INTO sales_plans(id,bot_id,title,data_limit_bytes,duration_days,price_toman,status,sort_order,category_id,location_id,plan_type,created_at,updated_at)
      VALUES(?,?,?,?,?,?,'active',0,?,?,?,?,?)
    `).bind(planId, bot.id, session.data.title, Number(session.data.gb) * GIB, session.data.days, price,
      session.data.categoryId || null, session.data.locationId || null, session.data.planType || 'sale', ts, ts).run();
    await botClearSession(env, account.user.telegram_id);
    await audit(env, account.user.id, "sales_plan_created", { planId, botId: bot.id, title: session.data.title, gb: session.data.gb, days: session.data.days, price });
    await telegramApi(env, "sendMessage", {
      chat_id: chatId,
      text: "✅ <b>پلن فروش ساخته شد</b>\n" + botEscape(session.data.title) + "\n" + botGb(Number(session.data.gb) * GIB) + " · " + botMoney(session.data.days) + " روز · <b>" + botMoney(price) + " تومان</b>",
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [[{ text: "📦 مدیریت پلن‌ها", callback_data: "bot:sales:plans" }], [{ text: "🚀 بازکردن ربات فروش", url: "https://t.me/" + bot.bot_username }]] }
    });
    return true;
  }

  if (session.state === "agency_edit_title") {
    const title = text === "-" ? session.data.currentTitle : cleanText(text, 80);
    if (!title || title.length < 2) throw new Error("عنوان نمایندگی معتبر نیست");
    await botSetSession(env, account.user.telegram_id, "agency_edit_support", { ...session.data, title });
    await botPrompt(env, chatId, "💬 آدرس پشتیبانی را به‌صورت <code>@username</code> یا <code>https://t.me/username</code> ارسال کنید.\nبرای حذف آدرس <code>0</code> و برای استفاده از آیدی تلگرام فعلی خودتان <code>-</code> بفرستید.");
    return true;
  }
  if (session.state === "agency_edit_support") {
    let supportUrl = "";
    if (text === "-") supportUrl = account.user.username ? telegramRepresentativeSupportUrl(account.user.username) : "";
    else if (text !== "0") supportUrl = normalizeAgencySupportUrl(text);
    await botSetSession(env, account.user.telegram_id, "agency_edit_password", { ...session.data, supportUrl });
    await botPrompt(env, chatId, "🔐 رمز جدید پنل را ارسال کنید. برای حفظ رمز فعلی <code>-</code> بفرستید.\nرمز جدید باید حداقل ۱۲ کاراکتر و شامل حروف بزرگ، کوچک، عدد و نماد باشد.");
    return true;
  }
  if (session.state === "agency_edit_password") {
    const input = { title: session.data.title, support_url: session.data.supportUrl };
    if (text !== "-") input.password = text;
    const updated = await updateOwnedAgency(env, account.user, session.data.agencyId, input);
    await botClearSession(env, account.user.telegram_id);
    try { if (text !== "-") await telegramApi(env, "deleteMessage", { chat_id: chatId, message_id: message.message_id }); } catch (_) {}
    await botPrompt(env, chatId, "✅ اطلاعات پنل بروزرسانی شد.\nعنوان: <b>" + botEscape(updated.title) + "</b>\nنام کاربری: <code>" + botEscape(updated.username) + "</code>" + (updated.password_changed ? "\n🔐 رمز جدید با موفقیت ثبت شد." : ""), [[{ text: "🏢 پنل‌های من", callback_data: "bot:agencies" }]]);
    return true;
  }
  if (session.state === "charge_amount") {
    const amount = botParseInteger(text);
    if (!Number.isFinite(amount)) throw new Error("مبلغ معتبر ارسال کنید");
    const payment = await botCreatePaymentInvoice(env, account.user, amount);
    await botClearSession(env, account.user.telegram_id);
    await botSendInvoice(env, chatId, payment);
    return true;
  }
  if (session.state === "agency_title") {
    const title = cleanText(text, 80);
    if (title.length < 2) throw new Error("نام پنل خیلی کوتاه است");
    await botSetSession(env, account.user.telegram_id, "agency_username", { title });
    await botPrompt(env, chatId, "👤 نام کاربری انگلیسی پنل را ارسال کنید یا ساخت خودکار را بزنید.", [[{ text: "🎲 نام کاربری خودکار", callback_data: "bot:agency:auto_username" }], [{ text: "لغو", callback_data: "bot:cancel" }]]);
    return true;
  }
  if (session.state === "agency_username") {
    const username = normalizeUsername(text);
    await botSetSession(env, account.user.telegram_id, "agency_password", { ...session.data, username });
    await botPrompt(env, chatId, "🔐 رمز دلخواه را ارسال کنید یا ساخت خودکار را بزنید.", [[{ text: "🎲 ساخت رمز امن", callback_data: "bot:agency:auto_password" }], [{ text: "لغو", callback_data: "bot:cancel" }]]);
    return true;
  }
  if (session.state === "agency_password") {
    const errors = validatePasarguardPassword(text, session.data.username || "");
    if (errors.length) throw new Error(errors.join("؛ "));
    const agency = await botCreateAgency(env, account.user, { ...session.data, password: text });
    await botClearSession(env, account.user.telegram_id);
    try { await telegramApi(env, "deleteMessage", { chat_id: chatId, message_id: message.message_id }); } catch (_) {}
    await telegramApi(env, "sendMessage", {
      chat_id: chatId,
      text: "✅ <b>پنل با موفقیت ساخته شد</b>\n━━━━━━━━━━━━━━\nنام: " + botEscape(agency.title) + "\nنام کاربری: <code>" + botEscape(agency.username) + "</code>\nرمز: <code>" + botEscape(agency.password) + "</code>\nآدرس: " + botEscape(agency.panelUrl) + "\nوضعیت: " + botEscape(agency.status) + "\n\n💰 موجودی باقی‌مانده: <b>" + botMoney(agency.retainedWalletBalance) + " تومان</b>\n✅ مبلغ حداقل ساخت کسر نشد؛ از این پس فقط مصرف واقعی پنل از موجودی کم می‌شود.",
      parse_mode: "HTML",
      protect_content: true,
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: [[{ text: "🏢 پنل‌های من", callback_data: "bot:agencies" }]] }
    });
    return true;
  }
  if (session.state === "admin_target") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const raw = text.replace(/^@/, "");
    const target = /^\d+$/.test(raw)
      ? await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE telegram_id=? OR id=?").bind(raw, Number(raw)).first()
      : await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE LOWER(username)=LOWER(?)").bind(raw).first();
    if (!target) throw new Error("کاربر پیدا نشد");
    await botSetSession(env, account.user.telegram_id, "admin_operation", { targetUserId: target.id });
    await botPrompt(env, chatId,
      "💰 کاربر: <b>" + botEscape(target.first_name || target.username || target.telegram_id) + "</b>\nشناسه: <code>" + botEscape(target.telegram_id) + "</code>\nموجودی: <b>" + botMoney(target.wallet_balance) + " تومان</b>",
      [[{ text: "➕ افزایش", callback_data: "bot:admin:op:increase" }, { text: "➖ کاهش", callback_data: "bot:admin:op:decrease" }], [{ text: "لغو", callback_data: "bot:cancel" }]]
    );
    return true;
  }
  if (session.state === "admin_amount") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const amount = botParseInteger(text);
    if (!Number.isFinite(amount) || amount <= 0) throw new Error("مبلغ معتبر ارسال کنید");
    const updated = await botAdminAdjustBalance(env, account.user, session.data.targetUserId, session.data.operation, amount);
    await botClearSession(env, account.user.telegram_id);
    await botPrompt(env, chatId, "✅ موجودی تغییر کرد.\nموجودی جدید کاربر: <b>" + botMoney(updated.wallet_balance) + " تومان</b>", [[{ text: "👥 کاربران", callback_data: "bot:admin:users" }, { text: "↩️ مدیریت", callback_data: "bot:admin" }]]);
    return true;
  }
  if (session.state === "setting_central_bot_token") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const newToken = cleanText(text, 2048);
    if (!/^\d+:[A-Za-z0-9_-]{20,}$/.test(newToken)) throw new Error("فرمت توکن BotFather معتبر نیست");
    const oldSettings = await getSettings(env);
    const oldToken = String(oldSettings.bot_token || "");
    if (newToken === oldToken) throw new Error("این توکن همین حالا روی ربات مرکزی فعال است");
    const info = await telegramApiWithToken(newToken, "getMe", {});
    const me = info?.result || {};
    if (!me.id || !me.is_bot || !me.username) throw new Error("اطلاعات ربات جدید از تلگرام دریافت نشد");
    const duplicate = await env.PASARGUARD_DB.prepare("SELECT id,bot_username FROM reseller_bots WHERE bot_telegram_id=? LIMIT 1").bind(String(me.id)).first();
    if (duplicate) throw new Error("این ربات قبلاً به‌عنوان ربات نماینده ثبت شده است: @" + String(duplicate.bot_username || ""));
    const workerOrigin = origin || new URL(String(oldSettings.app_url || "https://invalid.local")).origin;
    const prospective = { ...oldSettings, bot_token: newToken };
    await configureTelegramBotWithToken(env, workerOrigin, newToken, prospective);
    try { if (oldToken) await telegramApiWithToken(oldToken, "deleteMessage", { chat_id: chatId, message_id: message.message_id }); } catch (_) {}
    const updatedAt = nowIso();
    await setSettings(env, {
      bot_token: newToken,
      central_bot_telegram_id: String(me.id),
      central_bot_username: cleanText(me.username, 100),
      central_bot_name: cleanText([me.first_name, me.last_name].filter(Boolean).join(" "), 120),
      central_bot_token_updated_at: updatedAt
    });
    await audit(env, account.user.id, "central_bot_token_changed", { botId: String(me.id), username: cleanText(me.username, 100) });
    await botClearSession(env, account.user.telegram_id);
    if (oldToken) {
      try {
        await telegramApiWithToken(oldToken, "sendMessage", {
          chat_id: chatId,
          text: "✅ <b>ربات مرکزی با موفقیت تغییر کرد</b>\n\nربات جدید: <b>@" + botEscape(me.username) + "</b>\nBot ID: <code>" + botEscape(String(me.id)) + "</code>\n\nبرای ادامه، ربات جدید را باز و <code>/start</code> را ارسال کنید.",
          parse_mode: "HTML",
          reply_markup: { inline_keyboard: [[{ text: "🚀 بازکردن ربات جدید", url: "https://t.me/" + me.username }]] }
        });
      } catch (_) {}
      try { await telegramApiWithToken(oldToken, "deleteWebhook", { drop_pending_updates: false }); } catch (_) {}
    }
    return true;
  }
  if (session.state === "setting_central_admin_ids") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const adminIds = normalizeTelegramAdminIds(text);
    await setSettings(env, { admin_ids: adminIds, central_bot_admin_ids_updated_at: nowIso() });
    await audit(env, account.user.id, "central_bot_admin_ids_changed", { count: adminIds.split(",").length, adminIds });
    await botClearSession(env, account.user.telegram_id);
    await botPrompt(env, chatId,
      "✅ فهرست مدیران ربات مرکزی ذخیره شد.\nتعداد مدیران: <b>" + botMoney(adminIds.split(",").length) + "</b>\n\n" +
      adminIds.split(",").map(x => "• <code>" + botEscape(x) + "</code>").join("\n"),
      [[{ text: "🤖 مدیریت ربات مرکزی", callback_data: "bot:admin:central_bot" }], [{ text: "🏠 منوی اصلی", callback_data: "bot:home" }]]
    );
    return true;
  }
  if (session.state === "setting_release_channel") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const channel = parseReleaseChannelText(text);
    if (!channel) {
      await setSettings(env, {
        release_channel_enabled: "false",
        release_channel_chat_id: "",
        release_channel_title: "",
        release_channel_url: ""
      });
      await audit(env, account.user.id, "release_channel_removed", {});
    } else {
      try {
        const chat = await telegramApi(env, "getChat", { chat_id: channel.chat_id });
        const resolvedTitle = cleanText(channel.title, 100) || cleanText(chat?.result?.title, 100) || channel.chat_id;
        const resolvedUrl = cleanText(channel.url, 500) || cleanText(chat?.result?.invite_link, 500) || (channel.chat_id.startsWith("@") ? "https://t.me/" + channel.chat_id.slice(1) : "");
        await setSettings(env, {
          release_channel_enabled: "true",
          release_channel_chat_id: channel.chat_id,
          release_channel_title: resolvedTitle,
          release_channel_url: resolvedUrl,
          release_last_announcement_error: ""
        });
        await audit(env, account.user.id, "release_channel_changed", { chatId: channel.chat_id, title: resolvedTitle });
      } catch (error) {
        throw new Error("اتصال به کانال ناموفق بود؛ ربات را مدیر کانال کنید و آیدی/شناسه را بررسی کنید: " + error.message);
      }
    }
    await botClearSession(env, account.user.telegram_id);
    const refreshed = await ensureTelegramBotUser(env, message.from);
    await botSendOrEdit(env, { account: refreshed, chatId }, "admin_release_channel");
    return true;
  }
  if (session.state === "setting_join_channel_add") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const parsed = parseJoinChannels(text);
    if (parsed.length !== 1) throw new Error("فقط اطلاعات یک کانال را ارسال کنید");
    const channel = parsed[0];
    const settings = await getSettings(env);
    const channels = parseJoinChannels(settings.central_join_channels);
    if (channels.length >= 10) throw new Error("حداکثر ۱۰ کانال قابل ثبت است");
    if (channels.some(item => item.chat_id === channel.chat_id)) throw new Error("این کانال قبلاً ثبت شده است");
    let chat;
    try { chat = await telegramApi(env, "getChat", { chat_id: channel.chat_id }); }
    catch (error) { throw new Error("دسترسی به کانال برقرار نشد؛ ربات را مدیر کانال کنید: " + error.message); }
    const resolved = normalizeJoinChannel({
      chat_id: channel.chat_id,
      title: cleanText(channel.title, 100) || cleanText(chat?.result?.title, 100),
      url: channel.url || cleanText(chat?.result?.invite_link, 500)
    });
    channels.push(resolved || channel);
    await setSettings(env, { central_join_channels: JSON.stringify(channels), central_join_enabled: "true" });
    await audit(env, account.user.id, "central_join_channel_added", { chatId: channel.chat_id, title: resolved?.title || channel.title });
    await botClearSession(env, account.user.telegram_id);
    const refreshed = await ensureTelegramBotUser(env, message.from);
    await botSendOrEdit(env, { account: refreshed, chatId }, "admin_join_channels");
    return true;
  }
  if (session.state === "setting_join_channels") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const channelsJson = serializeJoinChannelsFromText(text);
    await setSettings(env, { central_join_channels: channelsJson, central_join_enabled: channelsJson === "[]" ? "false" : "true" });
    await audit(env, account.user.id, "central_join_channels_changed", { count: parseJoinChannels(channelsJson).length });
    await botClearSession(env, account.user.telegram_id);
    const refreshed = await ensureTelegramBotUser(env, message.from);
    await botSendOrEdit(env, { account: refreshed, chatId }, "admin_join_channels");
    return true;
  }
  if (session.state === "setting_central_trial_mb") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const mb = botParseInteger(text);
    if (!Number.isFinite(mb) || mb < 1 || mb > 1048576) throw new Error("حجم تست باید بین ۱ تا ۱٬۰۴۸٬۵۷۶ مگابایت باشد");
    await setSettings(env, { central_trial_data_limit_bytes: String(mb * 1024 * 1024) });
    await audit(env, account.user.id, "central_trial_data_changed", { mb });
    await botClearSession(env, account.user.telegram_id);
    const refreshed = await ensureTelegramBotUser(env, message.from);
    await botSendOrEdit(env, { account: refreshed, chatId }, "admin_trial");
    return true;
  }
  if (session.state === "setting_central_trial_hours") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const hours = botParseInteger(text);
    if (!Number.isFinite(hours) || hours < 1 || hours > 720) throw new Error("مدت تست باید بین ۱ تا ۷۲۰ ساعت باشد");
    await setSettings(env, { central_trial_duration_hours: String(hours) });
    await audit(env, account.user.id, "central_trial_duration_changed", { hours });
    await botClearSession(env, account.user.telegram_id);
    const refreshed = await ensureTelegramBotUser(env, message.from);
    await botSendOrEdit(env, { account: refreshed, chatId }, "admin_trial");
    return true;
  }
  if (session.state === "setting_value") {
    if (!account.isAdmin) throw new Error("دسترسی مدیر لازم است");
    const key = session.data.key;
    let value = botParseInteger(text);
    if (!Number.isFinite(value) || value < 0) throw new Error("عدد معتبر ارسال کنید");
    if (key === "min_recharge") value = Math.max(10000, value);
    if (key === "pending_invoice_ttl_hours") value = Math.max(1, Math.min(720, value));
    if (key === "central_recharge_bonus_percent") value = Math.max(0, Math.min(100, value));
    await setSettings(env, { [key]: String(value) });
    await audit(env, account.user.id, "bot_setting_changed", { key, value });
    await botClearSession(env, account.user.telegram_id);
    const refreshed = await ensureTelegramBotUser(env, message.from);
    await botSendOrEdit(env, { account: refreshed, chatId }, "admin_settings");
    return true;
  }
  return false;
}

async function repairTelegramWebhookWithToken(token, origin, settings) {
  const webhookUrl = origin + "/telegram/webhook";
  const webhookBody = { url: webhookUrl, allowed_updates: ["message", "callback_query"], drop_pending_updates: false };
  if (settings.telegram_webhook_secret) webhookBody.secret_token = settings.telegram_webhook_secret;
  await telegramApiWithToken(token, "setWebhook", webhookBody);
  return webhookUrl;
}

async function configureTelegramBotWithToken(env, origin, token, suppliedSettings = null) {
  const settings = suppliedSettings || await getSettings(env);
  const webhookUrl = await repairTelegramWebhookWithToken(token, origin, settings);
  const appUrl = canonicalAppUrl(settings.app_url || (origin + "/app"), origin);
  await telegramApiWithToken(token, "setChatMenuButton", { menu_button: { type: "web_app", text: "📱 مینی‌اپ", web_app: { url: appUrl } } });
  try { await telegramApiWithToken(token, "deleteMyCommands", { scope: { type: "default" } }); } catch (_) {}
  try {
    await telegramApiWithToken(token, "setMyCommands", {
      scope: { type: "all_private_chats" },
      commands: [
        { command: "start", description: "نمایش منوی اصلی" },
        { command: "admin", description: "ورود به مدیریت مرکزی" },
        { command: "upload_update", description: "آپلود ZIP بروزرسانی به GitHub" }
      ]
    });
  } catch (_) {}
  try {
    await telegramApiWithToken(token, "setMyCommands", {
      scope: { type: "all_group_chats" },
      commands: [
        { command: "setup_reports", description: "ساخت موضوع‌های گروه گزارش مرکزی" },
        { command: "reports_status", description: "نمایش وضعیت گروه گزارش" },
        { command: "reset_reports", description: "بازسازی موضوع‌های گزارش" },
        { command: "disable_reports", description: "توقف ارسال گزارش به گروه" }
      ]
    });
  } catch (_) {}
  try {
    await telegramApiWithToken(token, "setMyDescription", { description: "مدیریت کیف پول، پنل‌ها و ربات نمایندگی از داخل مینی‌اپ" });
    await telegramApiWithToken(token, "setMyShortDescription", { short_description: "مدیریت نمایندگی و مینی‌اپ" });
  } catch (_) {}
  return { success: true, webhookUrl, bot_menu: "web_app", miniapp_url: appUrl, independent: true };
}

async function configureTelegramBot(env, origin) {
  const settings = await getSettings(env);
  if (!settings.bot_token) throw new Error("توکن ربات مرکزی تنظیم نشده است");
  return configureTelegramBotWithToken(env, origin, settings.bot_token, settings);
}

async function setupTelegramBot(request, env) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;
  const result = await configureTelegramBot(env, new URL(request.url).origin);
  return json(result);
}

async function telegramWebhook(request, env, ctx = null) {
  const settings = await getSettings(env);
  if (settings.telegram_webhook_secret) {
    const supplied = request.headers.get("x-telegram-bot-api-secret-token");
    if (supplied !== settings.telegram_webhook_secret) return fail("Forbidden", 403);
  }
  const update = await parseBody(request);
  const origin = new URL(request.url).origin;

  if (update.callback_query) {
    const callback = update.callback_query;
    try {
      await telegramApi(env, "answerCallbackQuery", { callback_query_id: callback.id, text: "در حال انجام…", cache_time: 0 });
    } catch (_) {}
    try {
      await botHandleCallback(env, callback, origin, settings);
    } catch (error) {
      const errorText = String(error.message || "خطا در اجرای عملیات").slice(0, 220);
      try { await telegramApi(env, "answerCallbackQuery", { callback_query_id: callback.id, text: errorText, show_alert: true, cache_time: 0 }); } catch (_) {}
      if (callback.message?.chat?.id) {
        try { await telegramApi(env, "sendMessage", { chat_id: callback.message.chat.id, text: "⚠️ " + botEscape(errorText), parse_mode: "HTML" }); } catch (_) {}
      }
    }
    return json({ ok: true });
  }

  const message = update.message;
  if (!message?.chat?.id || !message.from) return json({ ok: true });
  if (message.chat.type && message.chat.type !== "private") {
    try { if (await handleCentralReportGroupCommand(env, message, settings)) return json({ ok: true }); }
    catch (error) { await telegramApi(env, "sendMessage", { chat_id: message.chat.id, text: "⚠️ " + botEscape(error.message || "خطا در تنظیم گروه گزارش"), parse_mode: "HTML" }); }
    return json({ ok: true });
  }
  const text = String(message.text || "").trim();
  const isStartOrMenu = /^\/(?:start|menu)(?:@\w+)?(?:\s+.*)?$/i.test(text);
  try {
    const account = await ensureTelegramBotUser(env, message.from, settings);
    account.public_origin = origin;
    const joinStatus = await centralRequiredJoinStatus(env, account.settings, message.from.id, account.isAdmin);
    if (!joinStatus.ok) {
      await sendCentralJoinPrompt(env, message.chat.id, joinStatus.missing);
      return json({ ok: true });
    }
    if (/^\/cancel(?:@\w+)?$/i.test(text)) {
      await botClearSession(env, account.user.telegram_id);
      await botSendOrEdit(env, { account, chatId: message.chat.id }, "home");
      return json({ ok: true });
    }
    if (/^\/id(?:@\w+)?$/i.test(text)) {
      await telegramApi(env, "sendMessage", { chat_id: message.chat.id, text: "🪪 شناسه تلگرام شما:\n<code>" + botEscape(message.from.id) + "</code>", parse_mode: "HTML" });
      return json({ ok: true });
    }
    const command = text.startsWith("/");
    const session = !command ? await botGetSession(env, account.user.telegram_id) : null;
    if (session && await botHandleSessionMessage(env, account, message, session, origin, ctx)) return json({ ok: true });
    if (account.isAdmin && /^\/(?:admin|panel|dashboard|control)(?:@\w+)?$/i.test(text)) {
      await botClearSession(env, account.user.telegram_id);
      await sendCentralManagementAccess(env, account, message.chat.id, origin, { force: true });
      return json({ ok: true });
    }
    if (account.isAdmin && /^\/(?:upload_update|github_upload)(?:@\w+)?$/i.test(text)) {
      await botClearSession(env, account.user.telegram_id);
      await botSendOrEdit(env, { account, chatId: message.chat.id }, "admin_github_zip");
      return json({ ok: true });
    }

    let view = botTextView(text) || "home";
    if (/^\/wallet(?:@\w+)?$/i.test(text)) view = "wallet";
    else if (/^\/trial(?:@\w+)?$/i.test(text)) view = "trial";
    else if (/^\/(?:panels|panel)(?:@\w+)?$/i.test(text)) view = "agencies";
    else if (/^\/(?:buy_panel|buypanel)(?:@\w+)?$/i.test(text)) view = "buy_agency";
    else if (/^\/(?:buy_bot|buybot)(?:@\w+)?$/i.test(text)) view = "buy_bot";
    else if (/^\/salesbot(?:@\w+)?$/i.test(text)) view = "sales_bot";
    else if (/^\/invoices(?:@\w+)?$/i.test(text)) view = "invoices";
    else if (/^\/(?:transactions|history)(?:@\w+)?$/i.test(text)) view = "ledger";
    else if (/^\/help(?:@\w+)?$/i.test(text)) view = "help";
    if (isStartOrMenu) {
      const cleanupTask = botClearSession(env, account.user.telegram_id)
        .catch(error => console.error("central start session cleanup failed", error));
      if (ctx && typeof ctx.waitUntil === "function") ctx.waitUntil(cleanupTask);
      else await cleanupTask;
      await botSendWelcome(env, account, message.chat.id, origin);
      return json({ ok: true });
    }
    await botSendOrEdit(env, { account, chatId: message.chat.id }, view);
  } catch (error) {
    await telegramApi(env, "sendMessage", { chat_id: message.chat.id, text: "⚠️ " + botEscape(error.message || "خطا در بارگذاری ربات"), parse_mode: "HTML" });
  }
  return json({ ok: true });
}

async function setupStatus(env) {
  const bindingDetected = !!env.PASARGUARD_DB;
  if (!bindingDetected) {
    return json({
      success: false,
      error: "Binding با نام PASARGUARD_DB در محیط این Deployment پیدا نشد. پس از افزودن Binding یک بار Save and Deploy را بزنید.",
      code: "D1_BINDING_NOT_FOUND",
      binding: "PASARGUARD_DB",
      database: "pasarguard-reseller-db",
      version: APP_VERSION
    }, 500);
  }
  try {
    await env.PASARGUARD_DB.prepare("SELECT 1 AS ok").first();
    const settings = await getSettings(env);
    return json({
      success: true,
      installed: settings.install_completed === "true",
      database: "pasarguard-reseller-db",
      binding: "PASARGUARD_DB",
      binding_detected: true,
      database_query_ok: true,
      version: APP_VERSION
    });
  } catch (error) {
    return json({
      success: false,
      error: "Binding پیدا شد اما اجرای D1 ناموفق بود: " + (error?.message || String(error)),
      code: "D1_QUERY_FAILED",
      binding: "PASARGUARD_DB",
      database: "pasarguard-reseller-db",
      binding_detected: true,
      database_query_ok: false,
      version: APP_VERSION
    }, 500);
  }
}

async function installApp(request, env) {
  await ensureDb(env);
  const current = await getSettings(env);
  if (current.install_completed === "true") return fail("نصب قبلاً تکمیل شده است", 409, "ALREADY_INSTALLED");
  const body = await parseBody(request);
  const setupPassword = cleanText(body.setup_password, 256);
  const adminIds = cleanText(body.admin_ids, 500);
  const botToken = cleanText(body.bot_token, 2048);
  const brandName = cleanText(body.brand_name, 200) || DEFAULT_SETTINGS.brand_name;
  if (setupPassword.length < 8) return fail("رمز نصب باید حداقل ۸ کاراکتر باشد", 400, "WEAK_PASSWORD");
  if (!parseAdminTelegramIds(adminIds).length) return fail("حداقل یک شناسه عددی مدیر وارد کنید", 400, "ADMIN_REQUIRED");
  if (!/^\d+:[A-Za-z0-9_-]{20,}$/.test(botToken)) return fail("فرمت توکن ربات معتبر نیست", 400, "INVALID_BOT_TOKEN");
  if (!cleanText(body.blupal_api_key, 2048)) return fail("API Key بلوپال الزامی است", 400, "BLUPAL_API_KEY_REQUIRED");
  try { normalizeBlupalBaseUrl(body.blupal_base_url || "https://blupal.net/api"); }
  catch (error) { return fail(error.message, 400, "INVALID_BLUPAL_URL"); }

  let installLogger = null;
  let botInfo = null;
  try {
    botInfo = await telegramApiWithToken(botToken, "getMe", {});
    installLogger = await createInstallationLogger(botToken, adminIds, brandName);
    await appendInstallationLog(installLogger, "✅", "اتصال به دیتابیس D1 برقرار است");
    await appendInstallationLog(installLogger, "✅", "توکن ربات تأیید شد: @" + (botInfo?.result?.username || "bot"));
  } catch (error) {
    return fail("اتصال به ربات ناموفق بود: " + error.message, 400, "BOT_TEST_FAILED");
  }

  const salt = randomHex(16);
  const values = {
    install_completed: "true",
    last_runtime_version: APP_VERSION,
    setup_password_salt: salt,
    setup_password_hash: await passwordHash(setupPassword, salt),
    bot_token: botToken,
    admin_ids: adminIds,
    app_encryption_key: cleanText(body.app_encryption_key, 2048) || randomHex(32),
    telegram_webhook_secret: cleanText(body.telegram_webhook_secret, 2048) || randomHex(24),
    brand_name: brandName,
    price_per_gb: String(clampInt(body.price_per_gb || 2000, 0, 1000000000000)),
    setup_fee: String(clampInt(body.setup_fee || 0, 0, 1000000000000)),
    min_recharge: String(Math.max(10000, clampInt(body.min_recharge || 100000, 0, 1000000000000))),
    support_username: cleanText(body.support_username, 100),
    blupal_base_url: "https://blupal.net/api",
    blupal_api_key: cleanText(body.blupal_api_key, 2048),
    blupal_card_number: cleanText(body.blupal_card_number, 100).replace(/\D/g, ""),
    blupal_webhook_token: cleanText(body.blupal_webhook_token, 2048) || randomHex(32),
    payment_poll_enabled: "true",
    auto_delete_pending_invoices: "true",
    pending_invoice_ttl_hours: "24",
    usage_sync_enabled: "true",
    auto_update: "true",
    auto_update_interval_seconds: "5",
    app_url: canonicalAppUrl(body.app_url, new URL(request.url).origin),
    pasarguard_panel_url: cleanText(body.pasarguard_panel_url, 500),
    pasarguard_admin_username: cleanText(body.pasarguard_admin_username, 200),
    pasarguard_admin_password: cleanText(body.pasarguard_admin_password, 2048),
    pasarguard_reseller_role_id: cleanText(body.pasarguard_reseller_role_id, 50),
    pasarguard_reseller_role_name: cleanText(body.pasarguard_reseller_role_name, 200),
    github_repo: cleanText(body.github_repo, 300) || DEFAULT_SETTINGS.github_repo,
    cf_account_id: cleanText(body.cf_account_id, 200),
    cf_worker_name: cleanText(body.cf_worker_name, 200),
    cf_api_token: cleanText(body.cf_api_token, 2048),
    python_helper_auto_provision: "true",
    python_helper_worker_name: normalizeWorkerScriptName(cleanText(body.python_helper_worker_name, 100) || (cleanText(body.cf_worker_name, 200) + "-python-helper"))
  };

  let botSetup;
  try {
    await appendInstallationLog(installLogger, "⏳", "در حال ذخیره تنظیمات امن سامانه");
    await setSettings(env, values);
    await appendInstallationLog(installLogger, "✅", "تنظیمات اصلی و مالی ذخیره شدند");

    await appendInstallationLog(installLogger, "⏳", "در حال ثبت Webhook و فرمان‌های مستقل ربات");
    botSetup = await configureTelegramBot(env, new URL(request.url).origin);
    await appendInstallationLog(installLogger, "✅", "Webhook و منوی دستوری ربات فعال شدند");
    await appendInstallationLog(installLogger, "✅", "ربات و مینی‌اپ روی دیتابیس مشترک PASARGUARD_DB متصل شدند");
  } catch (error) {
    try { await setSettings(env, { install_completed: "false" }); } catch (_) {}
    await appendInstallationLog(installLogger, "❌", "نصب متوقف شد: " + String(error.message || error).slice(0, 300));
    return fail("نصب ناموفق بود: " + error.message, 400, "INSTALL_FAILED");
  }

  let pythonHelper = { success: false, status: "configuration_required" };
  if (pythonHelperConfigurationReady(values)) {
    await appendInstallationLog(installLogger, "⏳", "در حال ساخت و اتصال Python Worker کمکی");
    try {
      pythonHelper = await provisionPythonHelper(env, { source: "install" });
      await appendInstallationLog(installLogger, pythonHelper.success ? "✅" : "⚠️", "Python Worker: " + (pythonHelper.status || "پایان یافت"));
    } catch (error) {
      const installError = pythonErrorPlainSummary(error, { source: "install" }, 900);
      pythonHelper = { success: false, status: "failed", error: installError };
      await appendInstallationLog(installLogger, "⚠️", "Python Worker ساخته نشد؛ نسخه JavaScript فعال می‌ماند\n" + installError);
    }
  } else {
    await appendInstallationLog(installLogger, "ℹ️", "ساخت Python Worker تا تکمیل اطلاعات Cloudflare به تعویق افتاد");
  }

  try {
    await audit(env, null, "installation_completed", {
      admin_ids: adminIds,
      bot: botInfo?.result?.username || "",
      webhook: botSetup?.webhookUrl || "",
      bot_menu: botSetup?.bot_menu || "commands",
      independent_bot: true,
      shared_database: "PASARGUARD_DB"
    });
  } catch (_) {}
  await appendInstallationLog(installLogger, "🎉", "نصب کامل شد؛ ربات و مینی‌اپ مستقل و آماده استفاده‌اند");

  return json({
    success: true,
    installed: true,
    app_url: values.app_url,
    bot_independent: true,
    shared_database: "PASARGUARD_DB",
    installation_logs_sent: installLogger.targets.length,
    python_helper: pythonHelper,
    blupal_webhook_url: new URL(request.url).origin + "/payments/blupal/webhook?token=" + encodeURIComponent(values.blupal_webhook_token),
    blupal_return_url: new URL(request.url).origin + "/payments/blupal/return"
  });
}

async function centralAdminBootstrap(request, env) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;
  const [liveEdge, liveProcessor] = await Promise.all([
    inspectEdgeServiceBinding(env),
    inspectProcessorServiceBinding(env)
  ]);
  if (liveEdge.binding_detected) {
    try { await persistEdgeServiceState(env, liveEdge, liveEdge.connected ? { enable: true } : {}); } catch (_) {}
  }
  if (liveProcessor.binding_detected) {
    try { await persistProcessorServiceState(env, liveProcessor, liveProcessor.connected ? { enable: true } : {}); } catch (_) {}
  }
  const settings = await getSettings(env);
  const today = new Date(); today.setHours(0,0,0,0);
  const [stats, agencies, bots, users, payments, bitpinDeposits, logs, resellerHealth] = await Promise.all([
    env.PASARGUARD_DB.prepare(`SELECT
      (SELECT COUNT(*) FROM users) AS users_count,
      (SELECT COUNT(*) FROM users WHERE status='active') AS active_users,
      (SELECT COUNT(*) FROM agencies) AS agencies_count,
      (SELECT COUNT(*) FROM agencies WHERE status='active') AS active_agencies,
      (SELECT COUNT(*) FROM reseller_bots) AS bots_count,
      (SELECT COUNT(*) FROM reseller_bots WHERE status='active') AS active_bots,
      ((SELECT COUNT(*) FROM payment_invoices WHERE status='PENDING') + (SELECT COUNT(*) FROM bitpin_deposits WHERE status='pending_review')) AS pending_payments,
      (SELECT COALESCE(SUM(wallet_balance),0) FROM users) AS total_wallet_balance,
      (SELECT COALESCE(SUM(total_charged),0) FROM agencies) AS total_usage_revenue,
      ((SELECT COALESCE(SUM(amount_toman),0) FROM payment_invoices WHERE credited_at IS NOT NULL) + (SELECT COALESCE(SUM(amount_toman),0) FROM bitpin_deposits WHERE credited_at IS NOT NULL)) AS total_recharge,
      ((SELECT COALESCE(SUM(amount_toman),0) FROM payment_invoices WHERE credited_at IS NOT NULL AND created_at>=?) + (SELECT COALESCE(SUM(amount_toman),0) FROM bitpin_deposits WHERE credited_at IS NOT NULL AND created_at>=?)) AS today_recharge,
      (SELECT COALESCE(SUM(amount_toman),0) FROM sales_orders WHERE status='delivered') AS reseller_total_sales
    `).bind(today.toISOString(), today.toISOString()).first(),
    env.PASARGUARD_DB.prepare(`SELECT a.id,a.title,a.panel_username,a.status,a.last_usage_bytes,a.total_charged,a.provisioning_source,a.runtime_version,a.created_at,a.updated_at,
      u.id AS owner_id,u.telegram_id,u.username,u.first_name,u.last_name,u.wallet_balance,u.status AS owner_status,
      rb.id AS bot_id,rb.bot_username,rb.status AS bot_status
      FROM agencies a JOIN users u ON u.id=a.user_id LEFT JOIN reseller_bots rb ON rb.agency_id=a.id AND rb.parent_bot_id IS NULL
      ORDER BY a.updated_at DESC LIMIT 700`).all(),
    env.PASARGUARD_DB.prepare(`SELECT rb.id,rb.bot_username,rb.bot_name,rb.brand_name,rb.status,rb.bot_version,rb.license_expires_at,rb.created_at,rb.updated_at,
      rb.license_type,rb.purchase_source,rb.parent_bot_id,rb.upstream_price_per_gb,rb.upstream_last_usage_bytes,
      rb.upstream_unpaid_toman,rb.upstream_total_charged,rb.upstream_total_profit,
      a.id AS agency_id,a.title AS agency_title,a.panel_username,a.status AS agency_status,
      u.id AS owner_id,u.telegram_id,u.username,u.first_name,u.last_name,u.wallet_balance,u.status AS owner_status,
      parent.bot_username AS parent_bot_username,parent.brand_name AS parent_brand_name,
      (SELECT COUNT(*) FROM sales_customers c WHERE c.bot_id=rb.id) AS customers_count,
      (SELECT COUNT(*) FROM sales_orders o WHERE o.bot_id=rb.id) AS orders_count,
      (SELECT COALESCE(SUM(o.amount_toman),0) FROM sales_orders o WHERE o.bot_id=rb.id AND o.status='delivered') AS total_sales
      FROM reseller_bots rb JOIN users u ON u.id=rb.user_id JOIN agencies a ON a.id=rb.agency_id
      LEFT JOIN reseller_bots parent ON parent.id=rb.parent_bot_id
      ORDER BY rb.updated_at DESC LIMIT 500`).all(),
    env.PASARGUARD_DB.prepare(`SELECT u.id,u.telegram_id,u.username,u.first_name,u.last_name,u.role,u.status,u.wallet_balance,u.created_at,u.updated_at,
      (SELECT COUNT(*) FROM agencies a WHERE a.user_id=u.id) AS agencies_count,
      (SELECT COUNT(*) FROM reseller_bots rb WHERE rb.user_id=u.id) AS bots_count
      FROM users u ORDER BY u.updated_at DESC LIMIT 700`).all(),
    env.PASARGUARD_DB.prepare(`SELECT p.id,p.provider_invoice_id,p.amount_toman,p.status,p.paid_at,p.credited_at,p.created_at,p.updated_at,
      u.id AS user_id,u.telegram_id,u.username,u.first_name,u.last_name
      FROM payment_invoices p JOIN users u ON u.id=p.user_id ORDER BY p.created_at DESC LIMIT 300`).all(),
    env.PASARGUARD_DB.prepare(`SELECT d.id,d.asset,d.network,d.txid,d.crypto_amount,d.rate_toman,d.amount_toman,d.status,d.note,d.created_at,d.updated_at,d.reviewed_at,d.credited_at,
      u.id AS user_id,u.telegram_id,u.username,u.first_name,u.last_name
      FROM bitpin_deposits d JOIN users u ON u.id=d.user_id ORDER BY d.created_at DESC LIMIT 300`).all(),
    env.PASARGUARD_DB.prepare(`SELECT l.id,l.actor_user_id,l.action,l.details,l.created_at,u.telegram_id,u.username,u.first_name,u.last_name
      FROM audit_logs l LEFT JOIN users u ON u.id=l.actor_user_id ORDER BY l.created_at DESC LIMIT 200`).all(),
    env.PASARGUARD_DB.prepare(`SELECT
      (SELECT COUNT(*) FROM reseller_health_checks WHERE overall_status='healthy') AS healthy_count,
      (SELECT COUNT(*) FROM reseller_health_checks WHERE overall_status='critical') AS critical_checks,
      (SELECT COUNT(*) FROM reseller_snapshots) AS backups_count,
      (SELECT MAX(created_at) FROM reseller_health_checks) AS last_health_at,
      (SELECT MAX(created_at) FROM reseller_snapshots) AS last_backup_at`).first()
  ]);
  const origin = new URL(request.url).origin;
  const configuration = adminSettings(settings);
  configuration.python_helper_binding_detected = Boolean(env.PY_HELPER && typeof env.PY_HELPER.fetch === "function");
  const botRows = (bots.results || []).map(row => ({ ...row, license: resellerLicenseState(row), management_url: resellerManagementUrl(row, settings, origin), customer_url: row.bot_username ? "https://t.me/" + String(row.bot_username).replace(/^@/, "") : "" }));
  return json({
    success: true, version: APP_VERSION,
    admin: { id: auth.user.id, telegram_id: auth.user.telegram_id, username: auth.user.username, first_name: auth.user.first_name, last_name: auth.user.last_name },
    stats: stats || {}, configuration,
    sales: { agency_enabled: agencySalesOpen(settings), reseller_bot_enabled: resellerBotSalesOpen(settings) },
    agencies: agencies.results || [], bots: botRows, users: users.results || [], payments: payments.results || [], bitpin_deposits: bitpinDeposits.results || [], audit_logs: logs.results || [],
    links: { customer_app: origin + "/app", advanced_control: origin + "/control-advanced", central_bot: settings.central_bot_username ? "https://t.me/" + String(settings.central_bot_username).replace(/^@/, "") : "" },
    edge: { enabled: liveEdge.connected === true && settings.edge_worker_manual_disabled !== "true", binding_detected: liveEdge.binding_detected === true, core_binding_detected: liveEdge.core_binding_detected === true, processor_binding_detected: liveEdge.processor_binding_detected === true, core_ok: liveEdge.core_ok === true, processor_ok: liveEdge.processor_ok === true, database_query_ok: liveEdge.database_query_ok !== false, mode: "service_binding", status: settings.edge_worker_manual_disabled === "true" ? "disabled" : (liveEdge.status || "disconnected"), script_name: liveEdge.script_name || settings.edge_worker_script_name || "", last_check_at: liveEdge.diagnostics?.checked_at || settings.edge_worker_last_check_at || "", last_error: settings.edge_worker_manual_disabled === "true" ? "تقسیم بار از پنل غیرفعال شده است" : (liveEdge.error || settings.edge_worker_last_error || ""), version: liveEdge.version || settings.edge_worker_last_version || "", pending_jobs: Number(liveEdge.pending_jobs || 0), last_deployed_at: settings.edge_worker_last_deployed_at || "", probe: liveEdge.probe || null, core_probe: liveEdge.core_probe || liveEdge.diagnostics?.edge_to_core || null, processor_probe: liveEdge.processor_probe || liveEdge.diagnostics?.edge_to_processor || null, runtime_bindings: liveEdge.runtime_bindings || liveEdge.diagnostics?.runtime_bindings || null, diagnostics: liveEdge.diagnostics || null },
    processor: { enabled: liveProcessor.connected === true && settings.processor_worker_manual_disabled !== "true", binding_detected: liveProcessor.binding_detected === true, core_binding_detected: liveProcessor.core_binding_detected === true, edge_binding_detected: liveProcessor.edge_binding_detected === true, core_ok: liveProcessor.core_ok === true, edge_ok: liveProcessor.edge_ok === true, database_query_ok: liveProcessor.database_query_ok !== false, mode: "service_binding", status: settings.processor_worker_manual_disabled === "true" ? "disabled" : (liveProcessor.status || "disconnected"), script_name: liveProcessor.script_name || settings.processor_worker_script_name || "", last_check_at: liveProcessor.diagnostics?.checked_at || settings.processor_worker_last_check_at || "", last_error: settings.processor_worker_manual_disabled === "true" ? "پردازش Worker سوم از پنل غیرفعال شده است" : (liveProcessor.error || settings.processor_worker_last_error || ""), version: liveProcessor.version || settings.processor_worker_last_version || "", pending_jobs: Number(liveProcessor.pending_jobs || 0), processed_jobs: Number(liveProcessor.processed_jobs || 0), last_deployed_at: settings.processor_worker_last_deployed_at || "", probe: liveProcessor.probe || null, core_probe: liveProcessor.core_probe || liveProcessor.diagnostics?.processor_to_core || null, edge_probe: liveProcessor.edge_probe || liveProcessor.diagnostics?.processor_to_edge || null, runtime_bindings: liveProcessor.runtime_bindings || liveProcessor.diagnostics?.runtime_bindings || null, diagnostics: liveProcessor.diagnostics || null },
    health: {
      database: true,
      central_bot: Boolean(settings.bot_token),
      blupal: Boolean(settings.blupal_api_key),
      bitpin: settings.bitpin_enabled === "true" && Boolean(settings.bitpin_api_key && settings.bitpin_api_secret && settings.bitpin_deposit_address),
      pasarguard: Boolean(settings.pasarguard_panel_url && (settings.pasarguard_access_token || (settings.pasarguard_admin_username && settings.pasarguard_admin_password))),
      auto_update: Boolean(settings.github_repo && settings.cf_account_id && settings.cf_api_token && settings.cf_worker_name),
      python_helper: Boolean(env.PY_HELPER && typeof env.PY_HELPER.fetch === "function"),
      edge_worker: liveEdge.connected === true && settings.edge_worker_manual_disabled !== "true",
      processor_worker: liveProcessor.connected === true && settings.processor_worker_manual_disabled !== "true",
      last_cron_at: settings.last_cron_at || "",
      update_status: settings.auto_update_last_status || "never",
      reseller_healthy_count: Number(resellerHealth?.healthy_count || 0),
      reseller_critical_checks: Number(resellerHealth?.critical_checks || 0),
      reseller_backups_count: Number(resellerHealth?.backups_count || 0),
      reseller_last_health_at: resellerHealth?.last_health_at || "",
      reseller_last_backup_at: resellerHealth?.last_backup_at || ""
    }
  });
}

async function centralAdminAction(request, env) {
  const auth = await requireAuth(request, env, true);
  if (auth.response) return auth.response;
  const body = await parseBody(request);
  const action = cleanText(body.action, 80);
  try {
    if (action === "save_sales_settings") {
      const currentSalesSettings = await getSettings(env);
      const agencyEnabled = body.agency_sales_enabled === undefined
        ? agencySalesOpen(currentSalesSettings)
        : settingFlag(body.agency_sales_enabled, false);
      const resellerBotEnabled = body.reseller_bot_sales_enabled === undefined
        ? resellerBotSalesOpen(currentSalesSettings)
        : settingFlag(body.reseller_bot_sales_enabled, false);
      const storeSetupFee = clampInt(body.reseller_store_bot_setup_fee ?? body.reseller_bot_setup_fee ?? 0, 0, 1000000000000);
      const storeRenewalFee = clampInt(body.reseller_store_bot_license_renewal_fee ?? body.reseller_bot_license_renewal_fee ?? 0, 0, 1000000000000);
      const masterSetupFee = clampInt(body.reseller_master_bot_setup_fee ?? storeSetupFee, 0, 1000000000000);
      const masterRenewalFee = clampInt(body.reseller_master_bot_license_renewal_fee ?? storeRenewalFee, 0, 1000000000000);
      const salesRoleId = cleanText(body.pasarguard_sales_role_id, 32).replace(/[^0-9]/g, "");
      const masterRoleId = cleanText(body.pasarguard_master_role_id, 32).replace(/[^0-9]/g, "");
      const values = {
        agency_sales_enabled: agencyEnabled ? "true" : "false",
        reseller_bot_sales_enabled: resellerBotEnabled ? "true" : "false",
        setup_fee: String(clampInt(body.setup_fee || 0, 0, 1000000000000)),
        reseller_bot_setup_fee: String(storeSetupFee),
        reseller_bot_license_renewal_fee: String(storeRenewalFee),
        reseller_store_bot_setup_fee: String(storeSetupFee),
        reseller_store_bot_license_renewal_fee: String(storeRenewalFee),
        reseller_master_bot_setup_fee: String(masterSetupFee),
        reseller_master_bot_license_renewal_fee: String(masterRenewalFee),
        master_min_markup_toman: String(Math.max(1, clampInt(body.master_min_markup_toman ?? 100, 1, 1000000000))),
        pasarguard_sales_role_id: salesRoleId,
        pasarguard_sales_role_name: cleanText(body.pasarguard_sales_role_name, 120) || "نماینده فروش",
        pasarguard_master_role_id: masterRoleId,
        pasarguard_master_role_name: cleanText(body.pasarguard_master_role_name, 120) || "مستر نمایندگی",
        price_per_gb: String(clampInt(body.price_per_gb || 0, 0, 1000000000000)),
        min_recharge: String(Math.max(10000, clampInt(body.min_recharge || 10000, 10000, 1000000000000)))
      };
      await setSettings(env, values);
      const cleanupStatements = [];
      if (!agencyEnabled) cleanupStatements.push(env.PASARGUARD_DB.prepare("DELETE FROM bot_sessions WHERE state IN ('agency_title','agency_username','agency_password')"));
      if (!resellerBotEnabled) cleanupStatements.push(env.PASARGUARD_DB.prepare("DELETE FROM bot_sessions WHERE state IN ('sales_bot_token','sales_bot_agency','sales_bot_agency_password','sales_bot_brand','sales_card_holder','sales_card_number','sales_bank_name')"));
      if (cleanupStatements.length) await env.PASARGUARD_DB.batch(cleanupStatements);
      await audit(env, auth.user.id, "central_sales_policy_updated", { ...values, invalidated_purchase_sessions: cleanupStatements.length });
      return json({
        success: true,
        message: "سیاست فروش مرکزی فوراً اعمال شد",
        sales: { agency_enabled: agencyEnabled, reseller_bot_enabled: resellerBotEnabled }
      });
    }
    if (action === "save_service_settings") {
      const values={
        brand_name:cleanText(body.brand_name,120)||"BluePanel",
        support_username:cleanText(body.support_username,160),
        central_trial_enabled:body.central_trial_enabled?"true":"false",
        central_trial_data_limit_bytes:String(clampInt(body.central_trial_data_limit_mb||1024,1,1048576)*1048576),
        central_trial_duration_hours:String(clampInt(body.central_trial_duration_hours||24,1,720)),
        central_recharge_bonus_percent:String(Math.max(0,Math.min(100,Number(body.central_recharge_bonus_percent||0))))
      };
      await setSettings(env,values);await audit(env,auth.user.id,"central_service_settings_updated",values);return json({success:true,message:"تنظیمات خدمات مرکزی ذخیره شد"});
    }
    if (action === "save_channels") {
      const channels=parseJoinChannels(Array.isArray(body.channels)?body.channels:[]);const enabled=Boolean(body.enabled&&channels.length);
      await setSettings(env,{central_join_channels:JSON.stringify(channels),central_join_enabled:enabled?"true":"false"});
      await audit(env,auth.user.id,"central_join_channels_web_saved",{count:channels.length,enabled});return json({success:true,message:"کانال‌های جوین اجباری ذخیره شدند"});
    }
    if (action === "save_release_channel") {
      const channel=normalizeJoinChannel({chat_id:body.chat_id,title:body.title,url:body.url});
      if(!channel&&String(body.chat_id||"").trim())throw new Error("اطلاعات کانال آپدیت معتبر نیست");
      const enabled=Boolean(body.enabled&&channel);
      await setSettings(env,{release_channel_chat_id:channel?.chat_id||"",release_channel_title:channel?.title||"",release_channel_url:channel?.url||"",release_channel_enabled:enabled?"true":"false"});
      await audit(env,auth.user.id,"release_channel_web_saved",{enabled,chat_id:channel?.chat_id||""});return json({success:true,message:"کانال رسمی آپدیت‌ها ذخیره شد"});
    }
    if (action === "release_test" || action === "release_publish") {
      const result=await sendReleaseAnnouncement(env,{test:action==="release_test",force:true});
      if(!result.sent&&["already_sent","already_claimed"].includes(result.reason)){await audit(env,auth.user.id,action+"_deduplicated",result);return json({success:true,message:"اطلاعیه این نسخه قبلاً منتشر شده و ارسال تکراری مسدود شد",result});}
      if(!result.sent)throw new Error(result.reason==="channel_not_configured"?"ابتدا کانال آپدیت‌ها را ثبت کنید":"ارسال اطلاعیه انجام نشد");
      await audit(env,auth.user.id,action,result);return json({success:true,message:action==="release_test"?"پیام آزمایشی ارسال شد":"اطلاعیه نسخه منتشر شد",result});
    }
    if (action === "reseller_health_all") {
      const result=await runAllResellerHealthChecks(env,100);await audit(env,auth.user.id,"central_web_reseller_health_all",result);return json({success:true,message:"پایش همه ربات‌های نماینده انجام شد",result});
    }
    if (action === "reseller_backup_all") {
      const result=await createAllResellerBackups(env,200);await audit(env,auth.user.id,"central_web_reseller_backup_all",result);return json({success:true,message:"پشتیبان‌گیری همه ربات‌های نماینده انجام شد",result});
    }
    if (action === "cluster_diagnose") {
      const result = await inspectThreeWorkerCluster(env);
      await audit(env, auth.user.id, "three_worker_cluster_diagnosed", { connected: result.connected, failures: result.failures.map(item => item.id), duration_ms: result.duration_ms });
      return json({ success: true, message: result.connected ? "تشخیص عمیق: هر ۹ مسیر و هر سه دیتابیس سالم هستند" : `تشخیص عمیق: ${result.failures.length} مورد نیازمند اصلاح است`, result });
    }
    if (action === "edge_connect" || action === "edge_test" || action === "cluster_test") {
      const live = await inspectEdgeServiceBinding(env);
      const processor = await inspectProcessorServiceBinding(env);
      if (!live.binding_detected) throw new Error("در Worker مرکزی Binding با نام EDGE_WORKER را به Worker دوم وصل کنید");
      if (!live.core_binding_detected) throw new Error("در Worker دوم Binding با نام CORE_WORKER را به Worker مرکزی وصل کنید");
      if (!live.processor_binding_detected) throw new Error("در Worker دوم Binding با نام PROCESSOR_WORKER را به Worker سوم وصل کنید");
      if (live.database_query_ok === false) throw new Error("دیتابیس EDGE_DB روی Worker دوم سالم نیست");
      if (!processor.binding_detected) throw new Error("در Worker مرکزی Binding با نام PROCESSOR_WORKER را به Worker سوم وصل کنید");
      if (!processor.core_binding_detected) throw new Error("در Worker سوم Binding با نام CORE_WORKER را به Worker مرکزی وصل کنید");
      if (!processor.edge_binding_detected) throw new Error("در Worker سوم Binding با نام EDGE_WORKER را به Worker دوم وصل کنید");
      if (processor.database_query_ok === false) throw new Error("دیتابیس PROCESSOR_DB روی Worker سوم سالم نیست");
      await persistEdgeServiceState(env, live, { enable: true });
      await persistProcessorServiceState(env, processor, { enable: true });
      let routing = null;
      if (action === "edge_connect") routing = await reconfigureAllResellerBots(env, new URL(request.url).origin, 1000);
      await audit(env, auth.user.id, action === "edge_connect" ? "three_worker_cluster_enabled" : "three_worker_cluster_test_success", { edge_version: live.version || "", processor_version: processor.version || "", edge_pending_jobs: Number(live.pending_jobs || 0), processor_pending_jobs: Number(processor.pending_jobs || 0), routing });
      return json({ success: true, message: action === "edge_connect" ? "اتصال کامل سه Worker برقرار شد و تقسیم بار فعال است" : "Core، Edge، Processor و هر سه دیتابیس سالم و متصل هستند", result: { edge: live, processor, routing } });
    }
    if (action === "edge_reconfigure") {
      const live = await inspectEdgeServiceBinding(env);
      const processor = await inspectProcessorServiceBinding(env);
      if (!live.connected) throw new Error(live.error || "اتصال Worker دوم کامل نیست");
      if (!processor.connected) throw new Error(processor.error || "اتصال Worker سوم کامل نیست");
      await persistEdgeServiceState(env, live, { enable: true });
      await persistProcessorServiceState(env, processor, { enable: true });
      const result = await reconfigureAllResellerBots(env, new URL(request.url).origin, 1000);
      await audit(env, auth.user.id, "three_worker_routes_reconfigured", result);
      return json({ success: true, message: "Webhookها تثبیت و تقسیم بار سه‌مرحله‌ای فعال شد", result });
    }
    if (action === "edge_update" || action === "processor_update") {
      const edgeResult = await deployEdgeWorkerFromGithub(env, true, APP_VERSION);
      const processorResult = await deployProcessorWorkerFromGithub(env, true, APP_VERSION);
      const result = { edge: edgeResult, processor: processorResult };
      await audit(env, auth.user.id, "secondary_workers_manual_update", result);
      return json({ success: true, message: "Worker دوم و سوم با همان worker.js بروزرسانی شدند", result });
    }
    if (action === "edge_disconnect") {
      await setSettings(env, { edge_worker_mode: "service_binding", edge_worker_enabled: "false", edge_worker_manual_disabled: "true", edge_worker_status: "disconnected", edge_worker_last_check_at: nowIso(), edge_worker_last_error: "", processor_worker_mode: "service_binding", processor_worker_enabled: "false", processor_worker_manual_disabled: "true", processor_worker_status: "disconnected", processor_worker_last_check_at: nowIso(), processor_worker_last_error: "" });
      const routing = await reconfigureAllResellerBots(env, new URL(request.url).origin, 1000);
      await audit(env, auth.user.id, "three_worker_cluster_disabled", { routing });
      return json({ success: true, message: "تقسیم بار سه‌Worker غیرفعال شد؛ برای قطع کامل Bindingها را از Cloudflare حذف کنید", result: { routing } });
    }
    if (action === "python_provision") {
      const result=await provisionPythonHelper(env,{source:"admin",actorId:auth.user.id});return json({success:true,message:"Python Helper نصب یا ترمیم شد",result});
    }
    if (action === "sync_reseller_roles") {
      const rows = await env.PASARGUARD_DB.prepare(`SELECT rb.id,rb.license_type,a.id AS agency_id,a.remote_manager_id
        FROM reseller_bots rb JOIN agencies a ON a.id=rb.agency_id
        WHERE rb.parent_bot_id IS NULL AND COALESCE(rb.purchase_source,'central')='central' AND a.remote_manager_id IS NOT NULL
        ORDER BY rb.updated_at DESC LIMIT 1000`).all();
      let synced = 0, failed = 0;
      const errors = [];
      for (const row of rows.results || []) {
        try {
          await applyBotLicenseRoleToAgency(env, { id: row.agency_id, remote_manager_id: row.remote_manager_id }, row.license_type, auth.user.id);
          synced++;
        } catch (error) {
          failed++;
          if (errors.length < 10) errors.push({ bot_id: row.id, message: cleanText(error?.message || error, 300) });
        }
      }
      await audit(env, auth.user.id, "central_reseller_roles_synced", { synced, failed, errors });
      return json({ success: true, message: "نقش پنل‌های خریداران مستقیم همگام شد", result: { synced, failed, errors } });
    }
    if (action === "agency_toggle") {
      const agencyId = cleanText(body.id, 120);
      const agency = await env.PASARGUARD_DB.prepare(`SELECT a.*,u.telegram_id,u.wallet_balance FROM agencies a JOIN users u ON u.id=a.user_id WHERE a.id=?`).bind(agencyId).first();
      if (!agency) throw new Error("پنل نمایندگی پیدا نشد");
      const enabling = agency.status !== "active";
      const next = enabling ? (Number(agency.wallet_balance || 0) > 0 ? "active" : "suspended_balance") : "paused_admin";
      try { await pasargadSetManagerStatus(env, agency.remote_manager_id, next === "active"); } catch (error) { throw new Error("تغییر وضعیت پنل در PasarGuard ناموفق بود: " + error.message); }
      await env.PASARGUARD_DB.prepare("UPDATE agencies SET status=?,updated_at=? WHERE id=?").bind(next, nowIso(), agency.id).run();
      await notifyTelegramUser(env, agency.telegram_id, next === "active" ? "✅ پنل نمایندگی شما توسط مدیریت مرکزی فعال شد." : next === "paused_admin" ? "⛔ پنل نمایندگی شما توسط مدیریت مرکزی متوقف شد." : "⚠️ پنل شما به علت کافی نبودن موجودی در حالت تعلیق باقی ماند.");
      await audit(env, auth.user.id, "central_agency_status_changed", { agencyId, status: next });
      return json({ success: true, message: next === "active" ? "پنل فعال شد" : next === "paused_admin" ? "پنل متوقف شد" : "پنل به علت موجودی صفر تعلیق شد" });
    }
    if (action === "bot_toggle") {
      const botId = cleanText(body.id, 120);
      const bot = await getResellerBotById(env, botId);
      if (!bot) throw new Error("ربات نماینده پیدا نشد");
      const next = bot.status === "active" ? "paused_admin" : "active";
      if (next === "active") {
        resellerRequireActiveLicense(bot);
        if (Number(bot.upstream_unpaid_toman || 0) > 0) throw new Error("این ربات بدهی مصرف دارد؛ ابتدا موجودی نماینده را شارژ و بدهی را تسویه کنید");
      }
      await env.PASARGUARD_DB.prepare("UPDATE reseller_bots SET status=?,updated_at=? WHERE id=?").bind(next, nowIso(), bot.id).run();
      await notifyTelegramUser(env, bot.owner_telegram_id, next === "active" ? "✅ قفل توقف مرکزی برداشته شد و فروش ربات نمایندگی شما فعال شد." : "⛔ فروش ربات نمایندگی شما توسط مدیریت مرکزی قفل و متوقف شد. تا زمان رفع قفل، از پنل نماینده قابل فعال‌سازی نیست.");
      await audit(env, auth.user.id, "central_reseller_bot_status_changed", { botId, status: next });
      return json({ success: true, message: next === "active" ? "فروش ربات فعال شد" : "فروش ربات متوقف شد" });
    }
    if (action === "user_toggle") {
      const userId = clampInt(body.id, 1, 2147483647);
      const user = await env.PASARGUARD_DB.prepare("SELECT * FROM users WHERE id=?").bind(userId).first();
      if (!user) throw new Error("کاربر پیدا نشد");
      if (user.id === auth.user.id && user.status === "active") throw new Error("امکان غیرفعال‌کردن حساب مدیر جاری وجود ندارد");
      const next = user.status === "active" ? "disabled" : "active";
      await env.PASARGUARD_DB.prepare("UPDATE users SET status=?,updated_at=? WHERE id=?").bind(next, nowIso(), user.id).run();
      await audit(env, auth.user.id, "central_user_status_changed", { userId, status: next });
      return json({ success: true, message: next === "active" ? "حساب کاربر فعال شد" : "حساب کاربر غیرفعال شد" });
    }
    if (action === "user_balance") {
      const user = await botAdminAdjustBalance(env, auth.user, body.id, body.operation === "decrease" ? "decrease" : "increase", body.amount, cleanText(body.note, 180));
      return json({ success: true, message: "موجودی کاربر بروزرسانی شد", user });
    }
    if (action === "sync_usage") {
      const downline = await syncDownlineUsage(env, null, 400);
      const central = await syncUsage(env, 250);
      await reconcileAllAgencyBalanceStates(env, 500);
      const result = { downline, central };
      await audit(env, auth.user.id, "central_dashboard_usage_sync", result);
      return json({ success: true, message: "مصرف نمایندگان زیرمجموعه و پنل‌های مرکزی همگام شد", result });
    }
    if (action === "sync_payments") {
      const result = await pollPendingPayments(env, 200); await audit(env, auth.user.id, "central_dashboard_payment_sync", result); return json({ success: true, message: "پرداخت‌ها استعلام شدند", result });
    }
    if (action === "bitpin_test") {
      const settings = await getSettings(env);
      const snapshot = await fetchBitpinWallets(settings, env);
      await recordBitpinConnectionState(env, true);
      const asset = String(settings.bitpin_asset || "USDT").toUpperCase();
      const selected = snapshot.wallets.find(row => row.asset === asset) || null;
      await audit(env, auth.user.id, "bitpin_connection_tested", { asset, walletFound: Boolean(selected) });
      return json({ success: true, message: selected ? "اتصال بیت‌پین برقرار است؛ موجودی " + asset + ": " + selected.balance : "اتصال بیت‌پین برقرار است", selected_wallet: selected, wallets: snapshot.wallets });
    }
    if (action === "bitpin_approve") return reviewBitpinDeposit(request, env, cleanText(body.id, 100), "approve", body);
    if (action === "bitpin_reject") return reviewBitpinDeposit(request, env, cleanText(body.id, 100), "reject", body);
    if (action === "cleanup_payments") {
      const result = await cleanupStalePendingInvoices(env, { settings: await getSettings(env), limit: 500 }); await audit(env, auth.user.id, "central_dashboard_payment_cleanup", result); return json({ success: true, message: "فاکتورهای قدیمی پاک‌سازی شدند", result });
    }
    if (action === "configure_central_bot") {
      await setupTelegramBot(request, env); return json({ success: true, message: "Webhook و منوی ربات مرکزی ترمیم شد" });
    }
    if (action === "update_check") {
      const result = await checkUpdate(env); await audit(env, auth.user.id, "central_dashboard_update_check", result); return json({ success: true, message: result.update_required ? "نسخه یا همگام‌سازی جدید پیدا شد" : "آخرین نسخه نصب است", result });
    }
    if (action === "update_deploy") {
      const result = await deployClusterFromGithub(env, body.force === true); await audit(env, auth.user.id, "central_dashboard_update_deploy", result); return json({ success: true, message: result.deployed ? "نسخه جدید روی هر سه Worker نصب شد" : "تغییری برای نصب وجود نداشت", result });
    }
    return fail("عملیات مدیریت مرکزی شناخته نشد", 404, "CENTRAL_ACTION_NOT_FOUND");
  } catch (error) {
    return fail(error.message || "عملیات مدیریت مرکزی ناموفق بود", 400, error?.code || "CENTRAL_ADMIN_ACTION_FAILED");
  }
}

async function routeApi(request, env, path) {
  try {
    return await routeApiUnsafe(request, env, path);
  } catch (error) {
    console.error("routeApi error", path, error);
    const status = Number(error?.status || 0);
    const code = cleanText(error?.code || "API_INTERNAL_ERROR", 80) || "API_INTERNAL_ERROR";
    const httpStatus = status >= 400 && status <= 599 ? status : (code === "INVALID_CREDENTIALS" ? 401 : 500);
    return fail(cleanText(error?.message || "خطای داخلی سرور", 900), httpStatus, code);
  }
}

async function routeApiUnsafe(request, env, path) {
  if (path === "/api/auth/control/status" && request.method === "GET") return centralControlAuthStatus(env);
  if (path === "/api/auth/web/login" && request.method === "POST") return centralWebLogin(request, env, false);
  if (path === "/api/auth/control/login" && request.method === "POST") return centralWebLogin(request, env, true);
  if (path === "/api/auth/web/logout" && request.method === "POST") return centralWebLogout(request, env);
  if (path === "/api/setup/status" && request.method === "GET") return setupStatus(env);
  if (path === "/api/setup/install" && request.method === "POST") return installApp(request, env);
  if (["/api/edge/verify", "/api/internal/edge/verify", "/api/edge/core/verify"].includes(path) && request.method === "POST") return verifyEdgeCoreRequest(request, env);
  if (path === "/api/bootstrap" && request.method === "GET") return bootstrap(request, env);
  if (path === "/api/admin/control/bootstrap" && request.method === "GET") return centralAdminBootstrap(request, env);
  if (path === "/api/admin/control/action" && request.method === "POST") return centralAdminAction(request, env);
  if (path === "/api/usage/live" && request.method === "GET") return liveUsageSnapshot(request, env);
  if (path === "/api/payments/blupal/create" && request.method === "POST") return createPaymentInvoice(request, env);
  if (path === "/api/payments/bitpin/claim" && request.method === "POST") return createBitpinDepositClaim(request, env);
  if (path === "/api/agencies" && request.method === "POST") return createAgency(request, env);
  if (path === "/api/trial" && request.method === "POST") return createCentralTrial(request, env);
  if (path === "/api/admin/settings" && request.method === "POST") return saveAdminSettings(request, env);
  if (path === "/api/admin/usage/sync" && request.method === "POST") return adminSyncUsage(request, env);
  if (path === "/api/admin/payments/sync" && request.method === "POST") return adminPaymentSync(request, env);
  if (path === "/api/admin/payments/cleanup" && request.method === "POST") return adminPaymentCleanup(request, env);
  if (path === "/api/admin/payments/blupal/webhook-url" && request.method === "GET") return getBlupalWebhookUrl(request, env);
  if (path === "/api/admin/payments/bitpin/test" && request.method === "POST") return testBitpinConnection(request, env);
  if (path === "/api/admin/update/check" && request.method === "POST") return updateAction(request, env, false);
  if (path === "/api/admin/update/deploy" && request.method === "POST") return updateAction(request, env, true);
  if (path === "/api/admin/python/provision" && request.method === "POST") return adminProvisionPythonHelper(request, env);
  if (path === "/api/admin/bot/setup" && request.method === "POST") return setupTelegramBot(request, env);

  let match = path.match(/^\/api\/admin\/users\/(\d+)\/balance$/);
  if (match && request.method === "POST") return adminAdjustUserBalance(request, env, match[1]);
  match = path.match(/^\/api\/agencies\/([^/]+)$/);
  if (match && request.method === "PUT") return updateAgencyInfo(request, env, decodeURIComponent(match[1]));
  match = path.match(/^\/api\/agencies\/([^/]+)\/credentials$/);
  if (match && request.method === "GET") return getAgencyCredentials(request, env, decodeURIComponent(match[1]));
  match = path.match(/^\/api\/admin\/payments\/bitpin\/([^/]+)\/(approve|reject)$/);
  if (match && request.method === "POST") return reviewBitpinDeposit(request, env, decodeURIComponent(match[1]), match[2]);
  match = path.match(/^\/api\/payments\/([^/]+)\/status$/);
  if (match && request.method === "GET") return getPaymentStatus(request, env, decodeURIComponent(match[1]));
  return fail("مسیر API پیدا نشد", 404, "NOT_FOUND");
}


const BLUEPANEL_CORE_VERSION = '3.0.8';
function bluePanelInternalHost(request) { try { return new URL(request.url).hostname.endsWith('.internal'); } catch (_) { return false; } }
function bluePanelCoreJson(data, status = 200, headers = {}) { return new Response(JSON.stringify(data), { status, headers: { 'content-type':'application/json; charset=utf-8','cache-control':'no-store',...headers } }); }
async function bluePanelCoreD1Rpc(request, env) {
  if (!bluePanelInternalHost(request)) return bluePanelCoreJson({ success:false,error:'internal only',code:'INTERNAL_ONLY' },404);
  const hop=String(request.headers.get('x-bluepanel-service-hop')||'');
  if (!hop) return bluePanelCoreJson({ success:false,error:'service hop missing',code:'HOP_REQUIRED' },403);
  await ensureDb(env);
  let body={}; try { body=await request.json(); } catch (_) { return bluePanelCoreJson({success:false,error:'JSON نامعتبر است',code:'BAD_JSON'},400); }
  try {
    if (body.op === 'query') {
      const sql=String(body.sql||''); if (!sql || sql.length>120000) throw new Error('SQL نامعتبر است');
      const stmt=env.PASARGUARD_DB.prepare(sql).bind(...(Array.isArray(body.params)?body.params:[]));
      const mode=String(body.mode||'all');
      const result=mode==='first'?await stmt.first():mode==='run'?await stmt.run():await stmt.all();
      return bluePanelCoreJson({success:true,result});
    }
    if (body.op === 'batch') {
      const queries=Array.isArray(body.queries)?body.queries:[]; if (!queries.length || queries.length>100) throw new Error('Batch نامعتبر است');
      const statements=queries.map(q=>env.PASARGUARD_DB.prepare(String(q.sql||'')).bind(...(Array.isArray(q.params)?q.params:[])));
      const result=await env.PASARGUARD_DB.batch(statements);
      return bluePanelCoreJson({success:true,result});
    }
    throw new Error('عملیات D1 پشتیبانی نمی‌شود');
  } catch (error) { return bluePanelCoreJson({success:false,error:String(error?.message||error),code:'D1_RPC_ERROR'},500); }
}
function bluePanelEdgePath(path, method) {
  if (['/setup','/manifest.webmanifest','/sw.js','/','/app','/miniapp','/control','/admin','/panel','/dashboard','/control-advanced'].includes(path)) return true;
  return path.startsWith('/assets/') || path.startsWith('/sales-manifest/') || path.startsWith('/sales-bot/') || path.startsWith('/sales-payments/') || path.startsWith('/reseller-control') || path.startsWith('/sales-auth/') || path.startsWith('/sales-app/') || path.startsWith('/sales-api/');
}
async function bluePanelForwardToEdge(request, env) {
  if (!env?.EDGE_WORKER || typeof env.EDGE_WORKER.fetch !== 'function') return bluePanelCoreJson({success:false,error:'Binding با نام EDGE_WORKER متصل نیست',code:'EDGE_BINDING_MISSING'},503);
  const source=new URL(request.url); const target='https://bluepanel-edge.internal'+source.pathname+source.search;
  const base=new Request(target,request); const headers=new Headers(base.headers);
  headers.set('x-bluepanel-service-hop','core-to-edge'); headers.set('x-bluepanel-public-origin',source.origin); headers.set('x-bluepanel-original-host',source.host);
  const response=await env.EDGE_WORKER.fetch(new Request(base,{headers,redirect:'manual'}));
  const out=new Headers(response.headers); out.set('x-bluepanel-route','core-to-edge');
  return new Response(response.body,{status:response.status,statusText:response.statusText,headers:out});
}
async function bluePanelCoreLocalHealth(env) {
  let databaseQueryOk = false, error = '';
  try { await ensureDb(env); databaseQueryOk = true; }
  catch (healthError) { error = String(healthError?.message || healthError); }
  const edgeBinding = serviceBindingRuntimeInfo(env, 'EDGE_WORKER');
  const processorBinding = serviceBindingRuntimeInfo(env, 'PROCESSOR_WORKER');
  return {
    ok: databaseQueryOk,
    cluster_ready: databaseQueryOk && edgeBinding.fetch_callable && processorBinding.fetch_callable,
    role: 'bluepanel-core', version: APP_VERSION, database_query_ok: databaseQueryOk,
    split_runtime: true, bundle: 'core', verification_mode: 'cycle_safe_local',
    edge_binding_detected: edgeBinding.fetch_callable,
    processor_binding_detected: processorBinding.fetch_callable,
    runtime_bindings: { EDGE_WORKER: edgeBinding, PROCESSOR_WORKER: processorBinding },
    error
  };
}
async function bluePanelCoreHealth(env) {
  const local = await bluePanelCoreLocalHealth(env);
  const [edge, processor] = await Promise.all([
    inspectEdgeServiceBinding(env).catch(e=>({connected:false,error:String(e?.message||e)})),
    inspectProcessorServiceBinding(env).catch(e=>({connected:false,error:String(e?.message||e)}))
  ]);
  let installed = false;
  if (local.database_query_ok) {
    try { installed = (await getSettings(env))?.install_completed === 'true'; } catch (_) {}
  }
  return {
    ...local,
    ok: local.database_query_ok,
    cluster_ready: local.database_query_ok && edge.connected === true && processor.connected === true,
    edge_worker: edge,
    processor_worker: processor,
    installed
  };
}
let bluePanelNextRequestUpdateCheckAt = 0;
const BLUEPANEL_REQUEST_UPDATE_INTERVAL_MS = 60000;

function scheduleRequestTriggeredUpdate(env, ctx, path) {
  if (!ctx || typeof ctx.waitUntil !== "function") return;
  if (path === "/health" || path.startsWith("/__bluepanel/") || path === "/telegram/webhook" || path.startsWith("/sales-bot/")) return;
  const now = Date.now();
  if (now < bluePanelNextRequestUpdateCheckAt) return;
  bluePanelNextRequestUpdateCheckAt = now + BLUEPANEL_REQUEST_UPDATE_INTERVAL_MS;
  ctx.waitUntil(automaticUpdateTick(env, {
    source: "request",
    intervalSeconds: Math.ceil(BLUEPANEL_REQUEST_UPDATE_INTERVAL_MS / 1000)
  }).catch(error => console.error("request auto-update error", error)));
}

export default {
  async fetch(request,env,ctx){
    const url=new URL(request.url),path=url.pathname.replace(/\/+$/,'')||'/';
    try {
      scheduleRequestTriggeredUpdate(env,ctx,path);
      if(request.method==='OPTIONS') return new Response(null,{status:204,headers:{'access-control-allow-origin':'*','access-control-allow-methods':'GET,POST,OPTIONS','access-control-allow-headers':'content-type,x-telegram-init-data,x-web-session,authorization,x-bluepanel-public-origin'}});
      if(path==='/__bluepanel/internal/d1'&&request.method==='POST') return bluePanelCoreD1Rpc(request,env);
      if((path==='/__bluepanel/service/core-local-health'||path==='/__bluepanel/service/core-health')&&bluePanelInternalHost(request)){const h=await bluePanelCoreLocalHealth(env);return bluePanelCoreJson(h,h.ok?200:503,{'x-bluepanel-role':'bluepanel-core','x-bluepanel-version':APP_VERSION});}
      if(path==='/health'){const h=await bluePanelCoreHealth(env);return bluePanelCoreJson(h,h.ok?200:503);}
      if(bluePanelEdgePath(path,request.method)) return bluePanelForwardToEdge(request,env);
      if(['/payments/blupal/return','/return'].includes(path)&&request.method==='GET'){await ensureDb(env);const s=await getSettings(env);return new Response(centralBlupalReturnPage(s,url.origin,url),{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}});}
      if(path==='/auth/control/magic'&&request.method==='GET') return Response.redirect(url.origin+'/control',302);
      if(path==='/telegram/webhook'&&request.method==='POST') return telegramWebhook(request,env,ctx);
      if(path==='/payments/blupal/webhook'&&request.method==='POST') return blupalWebhook(request,env,ctx);
      if(path.startsWith('/api/')) return routeApi(request,env,path);
      if(request.method==='GET') return bluePanelForwardToEdge(request,env);
      return new Response('Not found',{status:404});
    } catch(error){console.error('core fetch error',error);return bluePanelCoreJson({success:false,ok:false,role:'bluepanel-core',version:APP_VERSION,error:String(error?.message||error),code:'CORE_RUNTIME_ERROR'},500);}
  },
  async scheduled(controller,env,ctx){ctx.waitUntil((async()=>{try{await ensureDb(env);await env.PASARGUARD_DB.prepare('DELETE FROM web_sessions WHERE expires_at<=?').bind(nowIso()).run();await env.PASARGUARD_DB.prepare('DELETE FROM web_login_codes WHERE expires_at<=? OR (consumed_at IS NOT NULL AND consumed_at<=?)').bind(nowIso(),new Date(Date.now()-3600000).toISOString()).run();await notifyVersionActivation(env);try{await syncPasarguardManagersForAllUsers(env,250)}catch(_){}await syncUsage(env,100);await reconcileAllAgencyBalanceStates(env,250);await processCentralTrialExpirations(env,100);const s=await getSettings(env);if(s.payment_poll_enabled==='true'&&s.blupal_api_key)await pollPendingPayments(env,30);if(s.auto_delete_pending_invoices==='true')await cleanupStalePendingInvoices(env,{settings:s,limit:200});await automaticUpdateTick(env,{source:'cron'});await automaticPythonHelperTick(env,{source:'cron'});await env.PASARGUARD_DB.prepare("INSERT INTO app_settings(key,value,updated_at) VALUES('last_core_cron_at',?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at").bind(nowIso(),nowIso()).run();}catch(error){console.error('core scheduled error',error)}})());}
};
