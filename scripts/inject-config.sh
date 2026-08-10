#!/usr/bin/env bash
# 部署机使用：把自定义配置灌进 ac-extra-config 导出卷（官方 entrypoint cp -n 不覆盖）。
# 在部署包目录内、source .env 后执行。
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
set -a; [ -f "$HERE/.env" ] && source "$HERE/.env"; set +a

IMG="tcr.ccs.tencentyun.com/${TCR_NS}/ac-extra-config:${IMAGE_TAG:-latest}"
docker pull "$IMG"
mkdir -p "$HERE/env/dist/etc"
docker run --rm \
  -e "SOAP_PASSWORD=${SOAP_PASSWORD:-changeMeNow123!}" \
  -v "$HERE/env/dist/etc:/out" \
  "$IMG"
echo "配置已注入 $HERE/env/dist/etc —— 之后 docker compose up -d 时 worldserver 会读到"
