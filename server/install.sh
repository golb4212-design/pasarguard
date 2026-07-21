#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR="/opt/bluepanel-server"
PORT="8787"
CORE_URL=""
REGISTRATION_CODE=""
PUBLIC_URL=""
DOMAIN=""
SERVER_LABEL="BluePanel Server"
ALERT_BOT_TOKEN=""
ALERT_CHAT_ID=""
ALERT_TOPIC_ID=""
SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

log(){ printf '\033[1;36m[BluePanel]\033[0m %s\n' "$*"; }
warn(){ printf '\033[1;33m[BluePanel]\033[0m %s\n' "$*"; }
die(){ printf '\033[1;31m[BluePanel]\033[0m %s\n' "$*" >&2; exit 1; }
cleanup_code(){
  if [[ -f "$APP_DIR/.env" ]]; then
    sed -i '/^BLUEPANEL_REGISTRATION_CODE=/d' "$APP_DIR/.env" 2>/dev/null || true
    chmod 600 "$APP_DIR/.env" 2>/dev/null || true
  fi
}
trap 'rc=$?; if [[ $rc -ne 0 ]]; then warn "نصب با کد $rc متوقف شد"; fi' EXIT

while [[ $# -gt 0 ]]; do
  case "$1" in
    --core-url) CORE_URL="${2:-}"; shift 2 ;;
    --code) REGISTRATION_CODE="${2:-}"; shift 2 ;;
    --public-url) PUBLIC_URL="${2:-}"; shift 2 ;;
    --domain) DOMAIN="${2:-}"; shift 2 ;;
    --label) SERVER_LABEL="${2:-BluePanel Server}"; shift 2 ;;
    --port) PORT="${2:-8787}"; shift 2 ;;
    --bot-token) ALERT_BOT_TOKEN="${2:-}"; shift 2 ;;
    --chat-id) ALERT_CHAT_ID="${2:-}"; shift 2 ;;
    --topic-id) ALERT_TOPIC_ID="${2:-}"; shift 2 ;;
    -y|--yes) shift ;;
    -h|--help)
      cat <<'USAGE'
Usage: bash install.sh --core-url URL --code CODE [options]
  --label TEXT       Server display label
  --domain DOMAIN    Optional aaPanel website domain
  --public-url URL   Optional public URL; outbound-only operation does not require it
  --port PORT        Loopback health port, default 8787
USAGE
      exit 0 ;;
    *) die "گزینه ناشناخته: $1" ;;
  esac
done

[[ $EUID -eq 0 ]] || die "اسکریپت باید با root یا sudo بدون رمز اجرا شود"
[[ "$CORE_URL" =~ ^https:// ]] || die "آدرس Worker مرکزی باید HTTPS باشد"
[[ ${#REGISTRATION_CODE} -ge 24 ]] || die "کد اتصال یک‌بارمصرف معتبر نیست"
[[ "$PORT" =~ ^[0-9]+$ ]] && (( PORT >= 1 && PORT <= 65535 )) || die "پورت معتبر نیست"
CORE_URL="${CORE_URL%/}"
DOMAIN="${DOMAIN#http://}"; DOMAIN="${DOMAIN#https://}"; DOMAIN="${DOMAIN%/}"
SERVER_LABEL="${SERVER_LABEL//$'\n'/ }"

install_base_tools(){
  local missing=0
  for bin in curl openssl tar gzip python3; do command -v "$bin" >/dev/null 2>&1 || missing=1; done
  [[ $missing -eq 0 ]] && return 0
  log "نصب ابزارهای پایه"
  if command -v apt-get >/dev/null 2>&1; then
    apt-get update -y
    DEBIAN_FRONTEND=noninteractive apt-get install -y ca-certificates curl openssl tar gzip python3
  elif command -v dnf >/dev/null 2>&1; then
    dnf install -y ca-certificates curl openssl tar gzip python3
  elif command -v yum >/dev/null 2>&1; then
    yum install -y ca-certificates curl openssl tar gzip python3
  else
    die "مدیر بسته پشتیبانی‌شده پیدا نشد"
  fi
}

compose(){
  if docker compose version >/dev/null 2>&1; then docker compose "$@"; else docker-compose "$@"; fi
}

install_docker(){
  if command -v docker >/dev/null 2>&1 && (docker compose version >/dev/null 2>&1 || command -v docker-compose >/dev/null 2>&1); then
    systemctl enable --now docker >/dev/null 2>&1 || service docker start >/dev/null 2>&1 || true
    return 0
  fi
  log "نصب Docker و Compose"
  if command -v apt-get >/dev/null 2>&1; then
    apt-get update -y
    DEBIAN_FRONTEND=noninteractive apt-get install -y docker.io docker-compose-plugin || \
      DEBIAN_FRONTEND=noninteractive apt-get install -y docker.io docker-compose
  elif command -v dnf >/dev/null 2>&1; then
    dnf install -y docker docker-compose-plugin || dnf install -y docker docker-compose
  elif command -v yum >/dev/null 2>&1; then
    yum install -y docker docker-compose-plugin || yum install -y docker docker-compose
  else
    die "Docker نصب نیست و مدیر بسته پشتیبانی‌شده پیدا نشد"
  fi
  systemctl enable --now docker >/dev/null 2>&1 || service docker start >/dev/null 2>&1 || die "Docker اجرا نشد"
  command -v docker >/dev/null 2>&1 || die "Docker نصب نشد"
  docker compose version >/dev/null 2>&1 || command -v docker-compose >/dev/null 2>&1 || die "Docker Compose نصب نشد"
}

aapanel_proxy(){
  [[ -n "$DOMAIN" ]] || return 1
  [[ -d /www/server/panel ]] || return 1
  local vhost="/www/server/panel/vhost/nginx/${DOMAIN}.conf"
  local proxy_dir="/www/server/panel/vhost/nginx/proxy/${DOMAIN}"
  [[ -f "$vhost" ]] || return 1
  mkdir -p "$proxy_dir"
  cat > "${proxy_dir}/bluepanel-server.conf" <<PROXY
# BluePanel Server 3.4.3 - generated automatically
location ^~ /bluepanel-server/ {
    proxy_pass http://127.0.0.1:${PORT}/;
    proxy_http_version 1.1;
    proxy_set_header Host \$host;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto \$scheme;
    proxy_connect_timeout 10s;
    proxy_read_timeout 60s;
    proxy_send_timeout 60s;
}
PROXY
  if ! grep -Fq "include /www/server/panel/vhost/nginx/proxy/${DOMAIN}/*.conf;" "$vhost"; then
    cp -a "$vhost" "${vhost}.bluepanel-backup-$(date +%s)"
    python3 - "$vhost" "$DOMAIN" <<'PY'
import sys
from pathlib import Path
path=Path(sys.argv[1]); domain=sys.argv[2]
s=path.read_text()
include=f"    include /www/server/panel/vhost/nginx/proxy/{domain}/*.conf;\n"
pos=s.rfind('}')
if pos < 0:
    raise SystemExit("invalid nginx vhost")
path.write_text(s[:pos]+include+s[pos:])
PY
  fi
  local nginx_bin=""
  for candidate in /www/server/nginx/sbin/nginx /usr/sbin/nginx "$(command -v nginx 2>/dev/null || true)"; do
    [[ -n "$candidate" && -x "$candidate" ]] && nginx_bin="$candidate" && break
  done
  [[ -n "$nginx_bin" ]] && "$nginx_bin" -t
  if [[ -x /etc/init.d/nginx ]]; then /etc/init.d/nginx reload
  elif command -v systemctl >/dev/null 2>&1; then systemctl reload nginx 2>/dev/null || true
  fi
  PUBLIC_URL="https://${DOMAIN}/bluepanel-server"
  return 0
}

install_base_tools
install_docker

log "استقرار فایل‌های BluePanel Server در ${APP_DIR}"
install -d -m 700 "$APP_DIR/src"
install -m 600 "$SOURCE_DIR/Dockerfile" "$APP_DIR/Dockerfile"
install -m 600 "$SOURCE_DIR/docker-compose.yml" "$APP_DIR/docker-compose.yml"
install -m 600 "$SOURCE_DIR/package.json" "$APP_DIR/package.json"
install -m 600 "$SOURCE_DIR/src/server.js" "$APP_DIR/src/server.js"
install -m 700 "$SOURCE_DIR/update.sh" "$APP_DIR/update.sh"
install -m 700 "$SOURCE_DIR/uninstall.sh" "$APP_DIR/uninstall.sh"

SERVER_TOKEN="$(openssl rand -hex 32)"
if [[ -z "$PUBLIC_URL" && -n "$DOMAIN" ]]; then PUBLIC_URL="https://${DOMAIN}/bluepanel-server"; fi
PUBLIC_URL="${PUBLIC_URL%/}"

cat > "$APP_DIR/.env" <<ENV
BLUEPANEL_CORE_URL=${CORE_URL}
BLUEPANEL_REGISTRATION_CODE=${REGISTRATION_CODE}
BLUEPANEL_SERVER_PUBLIC_URL=${PUBLIC_URL}
BLUEPANEL_SERVER_LABEL=${SERVER_LABEL}
BLUEPANEL_SERVER_TOKEN=${SERVER_TOKEN}
BLUEPANEL_SERVER_PORT=${PORT}
BLUEPANEL_INTERNAL_PORT=8787
BLUEPANEL_PHASE_INTERVAL_SECONDS=30
BLUEPANEL_HEARTBEAT_INTERVAL_SECONDS=20
BLUEPANEL_REQUEST_TIMEOUT_SECONDS=25
BLUEPANEL_ALERT_BOT_TOKEN=${ALERT_BOT_TOKEN}
BLUEPANEL_ALERT_CHAT_ID=${ALERT_CHAT_ID}
BLUEPANEL_ALERT_TOPIC_ID=${ALERT_TOPIC_ID}
ENV
chmod 600 "$APP_DIR/.env"

cd "$APP_DIR"
log "ساخت و اجرای Agent"
compose up -d --build --remove-orphans

if [[ -d /www/server/panel ]]; then
  log "aaPanel روی سرور شناسایی شد"
  if [[ -n "$DOMAIN" ]]; then
    if aapanel_proxy; then log "مسیر https://${DOMAIN}/bluepanel-server/ در aaPanel فعال شد"
    else warn "سایت ${DOMAIN} در aaPanel پیدا نشد؛ Agent بدون ورودی عمومی و به‌صورت outbound فعال می‌ماند"
    fi
  fi
fi

log "انتظار برای اتصال Agent به Core"
STATUS=""
for _ in $(seq 1 60); do
  STATUS="$(curl -fsS --max-time 4 "http://127.0.0.1:${PORT}/health" 2>/dev/null || true)"
  if printf '%s' "$STATUS" | grep -q '"registered":true'; then
    cleanup_code
    log "سرور با موفقیت ثبت شد و وارد مدار BluePanel شد"
    trap - EXIT
    cat <<DONE

✅ نصب سریع سرور کامل شد
مسیر نصب: ${APP_DIR}
سلامت محلی: http://127.0.0.1:${PORT}/health
حالت ارتباط: outbound-only${PUBLIC_URL:+\nآدرس اختیاری: ${PUBLIC_URL}}

DONE
    exit 0
  fi
  sleep 2
done

warn "Agent اجرا شد ولی ثبت در Core تأیید نشد"
compose ps || true
compose logs --tail=120 || true
die "سرور وارد مدار نشد؛ گزارش بالا را بررسی کنید"
