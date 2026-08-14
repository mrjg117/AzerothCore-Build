#!/usr/bin/env bash
# ============================================================
# build.sh  ——  Cloudflare Worker 构建 + 部署命令（也可本地跑）
# ------------------------------------------------------------
# 仓库只提交「部署源文件」；补丁压缩包、.env、docker-compose.yml 在构建时现生成，不进 git 仓库。
#
# 部署（Git 集成，无需 CLI）：
#   在 Cloudflare 后台关联本仓库，构建命令设为 `bash deploy/build.sh`，推送即自动构建并部署。
#
# 单点配置：全部非机密配置写在 deploy/wrangler.toml 的 [vars] 里，提交即生效。
#   - REALM_ADDRESS / IMAGE_NS / WORKER_BASE 由本脚本读取并注入 .env 与 acok.sh。
#   - SOAP_LOGIN / SOAP_PASSWORD 不在此处理：请在 Cloudflare 后台 Variables & Secrets 手动设置，
#     build.sh 部署只跑 `wrangler deploy`（不加 --var），Worker 直接用你后台设的值。
# ============================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$SCRIPT_DIR"

# ---- 单点配置：从 wrangler.toml [vars] 读取 ----
_toml_get() {
  # 取 wrangler.toml [vars] 下 KEY = "value"（兼容行尾注释与对齐空格）
  grep -E "^$1[[:space:]]*=[[:space:]]*\"" wrangler.toml | head -1 | sed -E "s/^$1[[:space:]]*=[[:space:]]*\"(.*)\".*/\1/"
}
_cfg_world_host="$(_toml_get WORLD_HOST)";   _cfg_world_host="${_cfg_world_host:-play.example.com}"
_cfg_image_ns="$(_toml_get IMAGE_NS)";        _cfg_image_ns="${_cfg_image_ns:-ghcr.io/mrjg117}"
_cfg_worker_base="$(_toml_get WORKER_BASE)";   _cfg_worker_base="${_cfg_worker_base:-https://azerothcore-ok.YOUR_SUBDOMAIN.workers.dev}"
# SOAP_LOGIN / SOAP_PASSWORD 不在此读取：由用户在 CF 后台手动设置，部署时不注入。

# ---- SOAP 强密码：由用户在 CF 后台手动设置，部署不注入，此处不生成 ----

echo "==> [1/3] 构建玩家补丁包 patches-client.zip（AddOns 按 client-patches/addons.txt 列表从上游直拉，MPQ 为仓库内自定义中文补丁）"
mkdir -p patches
ADDONS_FILE="$REPO_ROOT/client-patches/addons.txt"
[ -f "$ADDONS_FILE" ] || { echo "缺少 $ADDONS_FILE"; exit 1; }
while read -r name url _; do
  # 跳过空行与 # 注释行
  [ -z "$name" ] && continue
  [ "${name:0:1}" = "#" ] && continue
  [ -z "$url" ] && { echo "    警告: $name 缺 url，跳过"; continue; }
  # 用 mktemp -d 隔离，避免多实例并行构建时临时目录互相踩
  tmpd="$(mktemp -d)" || { echo "    无法创建临时目录，跳过 $name"; continue; }
  git clone --depth 1 "$url" "$tmpd"
  if [ -d "$tmpd/client_addon" ]; then
    mkdir -p "$REPO_ROOT/client-patches/$name/addon"
    cp -rf "$tmpd/client_addon/." "$REPO_ROOT/client-patches/$name/addon/"
    echo "    拉取 $name 的 AddOn"
  else
    echo "    警告: $name 上游无 client_addon/，跳过"
  fi
  rm -rf "$tmpd"
done < "$ADDONS_FILE"
# 客户端补丁 .bat 的 REALM_ADDRESS 直接取单点配置值（默认与 WORLD_HOST 一致）
PATCHES_DIR="$REPO_ROOT/client-patches" \
ARCHIVE_OUT="$SCRIPT_DIR/patches/patches-client.zip" \
REALM_ADDRESS="$_cfg_world_host" \
  python3 "$REPO_ROOT/client-patches/make-archive.py"

# 分卷：仅当整包超过 24 MiB 才切分（避免单文件过大、也便于批量下载）；
# 否则保持单个 patches-client.zip，玩家直接下载解压（页面「下载全部」也会按清单合并）。
cd "$SCRIPT_DIR/patches"
rm -f patches-client.zip.* patches-manifest.txt
_pz=$(stat -c%s patches-client.zip 2>/dev/null || echo 0)
if [ "$_pz" -gt $((24*1048576)) ]; then
  _vol=$(( _pz / 4 / 1048576 )); [ "$_vol" -lt 1 ] && _vol=1; [ "$_vol" -gt 24 ] && _vol=24
  echo "    补丁包 ${_pz} 字节 > 24 MiB，执行 split -b ${_vol}m 分卷（每卷 ≤ 24 MiB）"
  split -b ${_vol}m -d -a 3 patches-client.zip patches-client.zip.
  rm -f patches-client.zip
else
  echo "    补丁包 ${_pz} 字节 ≤ 24 MiB，不分卷，保留单个 patches-client.zip"
fi
# 生成清单（合并顺序 + 数量 + 合并 sha256），供页面/脚本按序合并校验
{
  if compgen -G 'patches-client.zip.*' >/dev/null; then
    for p in patches-client.zip.*; do
      [ -e "$p" ] && echo "file=$p size=$(stat -c%s "$p")"
    done
    echo "count=$(ls patches-client.zip.* | wc -l)"
    echo "combined_sha256=$(cat patches-client.zip.* | sha256sum | cut -d' ' -f1)"
  else
    echo "file=patches-client.zip size=$(stat -c%s patches-client.zip)"
    echo "count=1"
    echo "combined_sha256=$(sha256sum patches-client.zip | cut -d' ' -f1)"
  fi
} > patches-manifest.txt
cd "$SCRIPT_DIR"
echo "    清单 $(wc -l < patches/patches-manifest.txt) 行 -> patches/patches-manifest.txt"

echo "==> [2/3] 拉取官方基础编排 docker-compose.yml（azerothcore-wotlk）"
# 运行部署脚本（acok.sh）的玩家服务器可能在墙内，访问 raw.githubusercontent.com 会被墙；
# 故把官方 compose 在「构建部署页时」由构建机（能访问 GitHub）一次性拉下，
# 随 deploy/ 一起交给 Cloudflare 静态托管，acok.sh 改为从 WORKER_BASE 同源拉取。
# 想锁定版本可把下面的 master 换成具体 tag / commit，提升复现性。
_OFFICIAL_COMPOSE="https://raw.githubusercontent.com/azerothcore/azerothcore-wotlk/master/docker-compose.yml"
if curl -fsSL "$_OFFICIAL_COMPOSE" -o docker-compose.yml; then
  echo "    官方 docker-compose.yml 已拉取 -> deploy/docker-compose.yml（随 Worker 静态资源发布）"
else
  echo "    !! 拉取官方 docker-compose.yml 失败：构建机需能访问 GitHub。" >&2
  echo "    !! 请手动放置一份 azerothcore-wotlk 的 docker-compose.yml 到 deploy/ 后再部署。" >&2
  exit 1
fi

echo "==> [3/3] 生成部署用 .env（仅注入 REALM_ADDRESS / IMAGE_NS；SOAP 两行保持模板占位，由 acok.sh 在游戏服本地交互填，不泄露；后台 SOAP 值由你手动设）"
cp .env.example .env
esc() { printf '%s' "$1" | sed 's/[&|]/\\&/g'; }
# 客户端补丁地址 = WORLD_HOST（realmlist.wtf）
sed -i "s|^REALM_ADDRESS=.*|REALM_ADDRESS=$(esc "$_cfg_world_host")|" .env
sed -i "s|^IMAGE_NS=.*|IMAGE_NS=$(esc "$_cfg_image_ns")|" .env
# WORKER_BASE 烤进 acok.sh，玩家运行无需再传（自定义域名可传 WORKER_BASE= 覆盖）
sed -i "s@WORKER_BASE=\"\${WORKER_BASE:-[^\"}]*}\"@WORKER_BASE=\"\${WORKER_BASE:-$(esc "$_cfg_worker_base")}\"@" acok.sh

echo "==> 部署 Worker（wrangler deploy，不注入 SOAP_LOGIN/PASSWORD；两者请在 CF 后台 Variables & Secrets 手动设置，keep_vars 保证不被冲掉）"
if command -v wrangler >/dev/null 2>&1; then
  wrangler deploy
else
  echo "    （本地预览：未检测到 wrangler，跳过部署；推送到仓库后由 CF Git 集成自动部署）"
fi

echo "==> 完成。deploy/ 已就绪。游戏服一行部署：curl -fsSL $_cfg_worker_base/acok.sh | bash"
