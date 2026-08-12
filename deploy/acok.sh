#!/usr/bin/env bash
# ============================================================
# AzerothCore-OK —— 一键部署游戏服务端（含 42 个模组）
# ------------------------------------------------------------
# 一行运行（在你的服务器终端，需有公网 IP、装好 Docker）：
#   WORKER_BASE=https://<你的Worker域名> curl -fsSL https://<你的Worker域名>/acok.sh | WORKER_BASE=https://<你的Worker域名> bash
#
# 它做了什么（全程无需手动敲命令）：
#   1) 没装 Docker 就尝试装（Ubuntu/Debian/CentOS）
#   2) 拉取部署文件到 $WORK_DIR（官方基础 compose + 我们的 override + .env）
#   3) 用环境变量覆盖 .env（没给就保持 .env.example 默认值，你可事后改 .env）
#   4) docker compose pull && up -d（务必先 pull，否则会在本机编译）
#   5) 自动建 SOAP 注册账号 webreg（gmlevel 3）并写入 realm 对外地址到 auth 库
#
# 可用环境变量（不传则保持 .env.example 默认值）：
#   WORKER_BASE    本仓 Cloudflare Worker 域名（acok.sh 与 compose/env 均从此同源拉取；必填）
#   REALM_ADDRESS   对外地址（写入 auth 库 realmlist + 补丁包启动器.bat），如 play.example.com 或 1.2.3.4
#   IMAGE_NS        镜像命名空间（默认 ghcr.io/mrjg117）
#   SOAP_PASSWORD   注册 SOAP 密码（需与 Cloudflare Worker 的 SOAP_PASSWORD 一致）
#   WORK_DIR        部署目录（默认 /opt/azerothcore-ok）
# ============================================================
set -euo pipefail

WORK_DIR="${WORK_DIR:-/opt/azerothcore-ok}"
# Worker 静态资源根（acok.sh 本身也托管在这里；compose/env 同源拉取，不再依赖 GitHub raw）
WORKER_BASE="${WORKER_BASE:-}"
if [ -z "$WORKER_BASE" ]; then
  echo "!! 缺少 WORKER_BASE：请传入你的 Cloudflare Worker 域名，例如"
  echo "   WORKER_BASE=https://azerothcore-ok.xxx.workers.dev curl -fsSL https://azerothcore-ok.xxx.workers.dev/acok.sh | WORKER_BASE=https://azerothcore-ok.xxx.workers.dev bash"
  exit 1
fi

# 0) 装 Docker
if ! command -v docker >/dev/null 2>&1; then
  echo "==> 未检测到 Docker，尝试安装（Ubuntu/Debian/CentOS）..."
  curl -fsSL https://get.docker.com | sh
fi
docker compose version >/dev/null 2>&1 || { echo "需要 docker compose 插件，请先安装后重试"; exit 1; }

# 1) 拉部署文件
mkdir -p "$WORK_DIR" && cd "$WORK_DIR"
echo "==> 下载部署文件到 $WORK_DIR"
curl -fsSL "$WORKER_BASE/docker-compose.override.yml" -o docker-compose.override.yml
curl -fsSL "$WORKER_BASE/.env.example"                -o .env
# 官方基础 compose（azerothcore-wotlk 原生编排，我们只覆盖镜像地址）
curl -fsSL "https://raw.githubusercontent.com/azerothcore/azerothcore-wotlk/master/docker-compose.yml" -o docker-compose.yml

# 2) 用环境变量覆盖 .env（没传则保持 .env.example 默认值）
# 转义 sed 替换串里的 &（sed 中代表匹配内容）、|（本脚本用作分隔符），
# 避免 REALM_ADDRESS 等含这些字符时破坏替换（如带查询串的地址）。
esc_sed() { printf '%s' "$1" | sed 's/[&|]/\\&/g'; }
[ -n "${REALM_ADDRESS:-}" ] && sed -i "s|^REALM_ADDRESS=.*|REALM_ADDRESS=$(esc_sed "$REALM_ADDRESS")|" .env
[ -n "${IMAGE_NS:-}" ]      && sed -i "s|^IMAGE_NS=.*|IMAGE_NS=$(esc_sed "$IMAGE_NS")|" .env
[ -n "${SOAP_PASSWORD:-}" ] && sed -i "s|^SOAP_PASSWORD=.*|SOAP_PASSWORD=$(esc_sed "$SOAP_PASSWORD")|" .env

# 3) 起服（务必先 pull，否则会触发本机编译）
echo "==> docker compose pull ..."
docker compose pull
echo "==> docker compose up -d ..."
docker compose up -d

# 4) 自动建 SOAP 注册账号（幂等；worldserver 起来后即可建）
SOAP_LOGIN="$(grep '^SOAP_LOGIN=' .env | cut -d= -f2-)"; SOAP_LOGIN="${SOAP_LOGIN:-webreg}"
SOAP_PW="$(grep '^SOAP_PASSWORD=' .env | cut -d= -f2-)"
echo "==> 等待 worldserver 并创建 SOAP 账号 $SOAP_LOGIN ..."
for i in $(seq 1 36); do
  if docker compose exec -T ac-worldserver acore account list >/dev/null 2>&1; then break; fi
  sleep 5
done
docker compose exec -T ac-worldserver acore account create "$SOAP_LOGIN" "$SOAP_PW" >/dev/null 2>&1 || true
docker compose exec -T ac-worldserver acore account set gmlevel "$SOAP_LOGIN" 3 >/dev/null 2>&1 \
  && echo "    SOAP 账号 $SOAP_LOGIN 已就绪（gmlevel 3）" \
  || echo "    建号失败，请稍后手动执行：docker compose exec ac-worldserver acore account create $SOAP_LOGIN <密码> 3"

# 5) 把对外 realm 地址写入 auth 库（玩家认证后连 world 用这个地址）
REALM="$(grep '^REALM_ADDRESS=' .env | cut -d= -f2-)"
REALM_SQL="${REALM//\'/\'\'}"   # MySQL 单引号转义（' -> ''），防 REALM 含单引号时注入/破坏语句
DBPW="$(grep '^DOCKER_DB_ROOT_PASSWORD=' .env | cut -d= -f2-)"
echo "==> 写入 realm 对外地址 ($REALM) 到 acore_auth.realmlist ..."
for i in $(seq 1 36); do
  if docker compose exec -T ac-database mysql -uroot -p"$DBPW" -e "SELECT 1" acore_auth >/dev/null 2>&1; then break; fi
  sleep 3
done
docker compose exec -T ac-database mysql -uroot -p"$DBPW" acore_auth \
  -e "UPDATE realmlist SET address='$REALM_SQL' WHERE id=1;" >/dev/null 2>&1 \
  && echo "    realm 地址已更新为 $REALM" \
  || echo "    realmlist 未就绪，请稍后手动执行：UPDATE acore_auth.realmlist SET address='$REALM' WHERE id=1;"

echo "==> 完成。世界服 8085 / 3724；注册 SOAP 7878；玩家连 $REALM。"
echo "    日志：docker compose logs -f ac-worldserver"
