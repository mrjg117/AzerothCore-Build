#!/usr/bin/env bash
# ============================================================
# AzerothCore-OK —— 一键部署游戏服务端（含 42 个模组）
# ------------------------------------------------------------
# 一行运行（在你的服务器终端，需有公网 IP、装好 Docker）：
#   curl -fsSL https://<你的Worker域名>/acok.sh | bash
#   （WORKER_BASE 已烤进脚本，来自构建时的 wrangler.toml；自定义域名可传 WORKER_BASE= 覆盖）
#
# 它做了什么（全程无需手动敲命令）：
#   1) 没装 Docker 就尝试装（Ubuntu/Debian/CentOS）
#   2) 拉取部署文件到 $WORK_DIR（官方基础 compose + 我们的 override + .env）
#   3) 首次运行交互输入注册 SOAP 账号/密码，存本地记住；重跑不再问
#   4) docker compose pull && up -d（务必先 pull，否则会在本机编译）
#   5) 自动建 SOAP 注册账号（默认 ACOK，gmlevel 3）并写入 realm 对外地址到 auth 库
#
# 可用环境变量（通常无需传；SOAP 两值由首次交互输入，记住在本地）：
#   WORKER_BASE    本仓 Cloudflare Worker 域名（默认已烤进脚本；自定义域名可传 WORKER_BASE= 覆盖）
#   REALM_ADDRESS   对外地址（写入 auth 库 realmlist + 补丁包启动器.bat），如 play.example.com 或 1.2.3.4
#   IMAGE_NS        镜像命名空间（默认 ghcr.io/mrjg117）
#   SOAP_LOGIN      注册 SOAP 账号（默认 ACOK；也可环境变量传入，免交互）
#   SOAP_PASSWORD    注册 SOAP 密码（无默认值，必须输入；须与 CF 后台 Variables & Secrets 手设的 SOAP_PASSWORD 完全一致）
#   DB_ROOT_PASSWORD 数据库 root 密码（默认 .env 内置，部署时可交互修改）
#   WORK_DIR        部署目录（默认 /opt/azerothcore-ok）
#
# ⚠️ SOAP 密码安全：只在「本游戏服本地」输入/保存，不进仓库、不进公开托管的 .env。
#    Cloudflare Worker 侧的 SOAP_PASSWORD 由你在后台 Variables & Secrets 手动设置；游戏服运行 acok.sh 时
#    手动输入同一密码（无默认值），两边须一致，注册接口才认证通过。
# ============================================================
set -euo pipefail

WORK_DIR="${WORK_DIR:-/opt/azerothcore-ok}"
# Worker 静态资源根（acok.sh 本身也托管在这里；compose/env 同源拉取，不再依赖 GitHub raw）
# 默认已烤进脚本（构建时从 wrangler.toml 的 WORKER_BASE 注入）；自定义域名可传 WORKER_BASE= 覆盖
WORKER_BASE="${WORKER_BASE:-REPLACE_WORKER_BASE}"
if [ -z "$WORKER_BASE" ] || echo "$WORKER_BASE" | grep -q "YOUR_SUBDOMAIN"; then
  echo "!! WORKER_BASE 仍是占位符：请在 deploy/wrangler.toml 的 [vars] 把 WORKER_BASE 改成你的 Worker 真实地址"
  echo "   （workers.dev 默认形如 https://azerothcore-ok.<你的subdomain>.workers.dev，或你的自定义域名）"
  echo "   改完重新构建部署即可，玩家再运行：curl -fsSL <你的Worker地址>/acok.sh | bash"
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
# 已随部署页在构建时拉下、由 WORKER_BASE 同源托管，运行时不再依赖 GitHub raw（可能墙）
curl -fsSL "$WORKER_BASE/docker-compose.yml" -o docker-compose.yml

# 2) 解析注册 SOAP 账号/密码：交互输入 + 本地记住
#    优先级：环境变量 SOAP_LOGIN/SOAP_PASSWORD > 本地记住文件 $WORK_DIR/.soap_creds > 交互输入
#    记住文件 chmod 600，仅本机可读，不进仓库、不进公开 .env。
#    ⚠️ 交互读取必须从 /dev/tty 读：因为 `curl ... | bash` 时 stdin 是脚本本身，普通 read 会吃掉脚本内容。
SOAP_CREDS="$WORK_DIR/.soap_creds"
_ask_tty() {
  # $1=prompt  $2=是否静默(-s)  -> 把结果写回 stdout；无 tty 时返回非0让调用方 fallback
  if [ -c /dev/tty ]; then
    local _p="$1" _s="${2:-}" _v
    if [ -n "$_s" ]; then read -rs -p "$_p" _v < /dev/tty; else read -r -p "$_p" _v < /dev/tty; fi
    printf '%s' "$_v"
    return 0
  fi
  return 1
}

if [ -n "${SOAP_LOGIN:-}" ] && [ -n "${SOAP_PASSWORD:-}" ]; then
  : # 环境变量已提供，跳过
elif [ -s "$SOAP_CREDS" ]; then
  SOAP_LOGIN="$(grep '^SOAP_LOGIN=' "$SOAP_CREDS" | cut -d= -f2-)"
  SOAP_PASSWORD="$(grep '^SOAP_PASSWORD=' "$SOAP_CREDS" | cut -d= -f2-)"
  echo "==> 沿用本地已记住的 SOAP 账号（位于 $SOAP_CREDS）"
else
  echo "==> 首次部署：请设置注册 SOAP 账号/密码（SOAP_LOGIN 默认 ACOK；SOAP_PASSWORD 须与 CF 后台手设的 SOAP_PASSWORD 一致）"
  if [ -z "${SOAP_LOGIN:-}" ]; then
    if _v="$(_ask_tty 'SOAP_LOGIN [ACOK]: ')"; then SOAP_LOGIN="${_v:-ACOK}"; else read -r -p 'SOAP_LOGIN [ACOK]: ' SOAP_LOGIN || SOAP_LOGIN=ACOK; fi
  fi
  SOAP_LOGIN="${SOAP_LOGIN:-ACOK}"
  if [ -z "${SOAP_PASSWORD:-}" ]; then
    if _v="$(_ask_tty 'SOAP_PASSWORD（无默认值，必填，须与 CF 后台手设的 SOAP_PASSWORD 一致）: ' -s)"; then echo; SOAP_PASSWORD="$_v"; else read -rs -p 'SOAP_PASSWORD: ' SOAP_PASSWORD; echo; fi
  fi
  if [ -z "$SOAP_PASSWORD" ]; then
    echo "!! SOAP_PASSWORD 不能为空"; exit 1
  fi
  # 记住（仅本机）
  printf 'SOAP_LOGIN=%s\nSOAP_PASSWORD=%s\n' "$SOAP_LOGIN" "$SOAP_PASSWORD" > "$SOAP_CREDS" 2>/dev/null && chmod 600 "$SOAP_CREDS" || true
fi

# 2.5) 解析数据库 root 密码：交互输入（默认用 .env 内置默认，可直接回车；也可输入自定义强密码）；记住在本地
DB_CREDS="$WORK_DIR/.db_creds"
if [ -n "${DB_ROOT_PASSWORD:-}" ]; then
  DB_PW="$DB_ROOT_PASSWORD"
elif [ -s "$DB_CREDS" ]; then
  DB_PW="$(cat "$DB_CREDS" 2>/dev/null || echo '')"
  echo "==> 沿用本地已记住的 DB root 密码（位于 $DB_CREDS）"
else
  _db_def="$(grep '^DOCKER_DB_ROOT_PASSWORD=' .env 2>/dev/null | cut -d= -f2- || echo '')"
  _db_def="${_db_def:-AcokDbRoot2026!}"
  echo "==> 请设置数据库 root 密码（默认 $_db_def，直接回车即用；也可输入你的强密码）"
  if _v="$(_ask_tty "DB root 密码 [$_db_def]: ")"; then DB_PW="${_v:-$_db_def}"; else read -r -p "DB root 密码 [$_db_def]: " DB_PW || DB_PW="$_db_def"; fi
  printf '%s' "$DB_PW" > "$DB_CREDS" 2>/dev/null && chmod 600 "$DB_CREDS" || true
fi

# 把 SOAP 两值写进本地 .env（不回流到公开托管的 .env.example）
esc_sed() { printf '%s' "$1" | sed 's/[&|]/\\&/g'; }
[ -n "${REALM_ADDRESS:-}" ] && sed -i "s|^REALM_ADDRESS=.*|REALM_ADDRESS=$(esc_sed "$REALM_ADDRESS")|" .env
[ -n "${IMAGE_NS:-}" ]      && sed -i "s|^IMAGE_NS=.*|IMAGE_NS=$(esc_sed "$IMAGE_NS")|" .env
sed -i "s|^SOAP_LOGIN=.*|SOAP_LOGIN=$(esc_sed "$SOAP_LOGIN")|" .env
sed -i "s|^SOAP_PASSWORD=.*|SOAP_PASSWORD=$(esc_sed "$SOAP_PASSWORD")|" .env
[ -n "${DB_PW:-}" ] && sed -i "s|^DOCKER_DB_ROOT_PASSWORD=.*|DOCKER_DB_ROOT_PASSWORD=$(esc_sed "$DB_PW")|" .env

# 3) 起服（务必先 pull，否则会触发本机编译）
echo "==> docker compose pull ..."
docker compose pull
echo "==> docker compose up -d ..."
docker compose up -d

# 4) 自动建 SOAP 注册账号（幂等；worldserver 起来后即可建）
echo "==> 等待 worldserver 并创建 SOAP 账号 $SOAP_LOGIN ..."
for i in $(seq 1 36); do
  if docker compose exec -T ac-worldserver acore account list >/dev/null 2>&1; then break; fi
  sleep 5
done
docker compose exec -T ac-worldserver acore account create "$SOAP_LOGIN" "$SOAP_PASSWORD" >/dev/null 2>&1 || true
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
echo "    ⚠️ Worker 侧的 SOAP_PASSWORD 由你在 CF 后台 Variables & Secrets 手动设置；此处输入的密码须与之完全一致（注册接口才认证通过）。"
