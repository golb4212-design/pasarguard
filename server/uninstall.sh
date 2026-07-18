#!/usr/bin/env bash
set -Eeuo pipefail
APP_DIR="/opt/bluepanel-server"
[[ $EUID -eq 0 ]] || { echo "با root اجرا کنید"; exit 1; }
if [[ -f "$APP_DIR/docker-compose.yml" ]]; then cd "$APP_DIR" && docker compose down -v; fi
rm -rf "$APP_DIR"
echo "BluePanel Server حذف شد. برای غیرفعال‌کردن حالت سرور، /server_status را در ربات مرکزی بررسی کنید."
