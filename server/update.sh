#!/usr/bin/env bash
set -Eeuo pipefail
APP_DIR="/opt/bluepanel-server"
SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
[[ $EUID -eq 0 ]] || { echo "با root اجرا کنید"; exit 1; }
[[ -f "$APP_DIR/.env" ]] || { echo "BluePanel Server نصب نیست"; exit 1; }
if [[ "$SOURCE_DIR" != "$APP_DIR" ]]; then
  cp -f "$SOURCE_DIR/Dockerfile" "$APP_DIR/Dockerfile"
  cp -f "$SOURCE_DIR/docker-compose.yml" "$APP_DIR/docker-compose.yml"
  cp -f "$SOURCE_DIR/package.json" "$APP_DIR/package.json"
  mkdir -p "$APP_DIR/src"
  cp -f "$SOURCE_DIR/src/server.js" "$APP_DIR/src/server.js"
fi
cd "$APP_DIR"
docker compose up -d --build
for i in $(seq 1 30); do curl -fsS --max-time 3 http://127.0.0.1:8787/health >/dev/null 2>&1 && break; sleep 2; done
docker compose ps
