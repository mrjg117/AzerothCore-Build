#!/usr/bin/env bash
# ============================================================
# build.sh  ——  Cloudflare Worker 构建命令（也可本地跑）
# ------------------------------------------------------------
# 仓库只提交「部署源文件」；补丁压缩包在构建时现打，不进 git 仓库。
#
# Cloudflare Worker（Static Assets）部署：
#   构建命令：  bash deploy/build.sh
#   部署命令：  cd deploy && npx wrangler deploy
#   （SOAP_PASSWORD 等机密用 wrangler secret put 设置）
#
# 本地预览：跑完本脚本后，deploy/ 即为可直接由 Worker 托管的目录。
# ============================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$SCRIPT_DIR"

echo "==> [1/2] 构建玩家补丁包 patches-client.zip（AddOns 按 client-patches/addons.txt 列表从上游直拉，MPQ 为仓库内自定义中文补丁）"
mkdir -p patches
ADDONS_FILE="$REPO_ROOT/client-patches/addons.txt"
[ -f "$ADDONS_FILE" ] || { echo "缺少 $ADDONS_FILE"; exit 1; }
while read -r name url _; do
  # 跳过空行与 # 注释行
  [ -z "$name" ] && continue
  case "$name" in \#*) continue ;; esac
  [ -z "$url" ] && { echo "    警告: $name 缺 url，跳过"; continue; }
  rm -rf "/tmp/addon_$name" && git clone --depth 1 "$url" "/tmp/addon_$name"
  if [ -d "/tmp/addon_$name/client_addon" ]; then
    mkdir -p "$REPO_ROOT/client-patches/$name/addon"
    cp -rf "/tmp/addon_$name/client_addon/." "$REPO_ROOT/client-patches/$name/addon/"
    echo "    拉取 $name 的 AddOn"
  else
    echo "    警告: $name 上游无 client_addon/，跳过"
  fi
done < "$ADDONS_FILE"
PATCHES_DIR="$REPO_ROOT/client-patches" \
ARCHIVE_OUT="$SCRIPT_DIR/patches/patches-client.zip" \
REALM_ADDRESS="${REALM_ADDRESS:-play.example.com}" \
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

echo "==> 完成：deploy/ 已就绪，部署：cd deploy && npx wrangler deploy"
echo "    生成产物：patches/（patches-client.zip 或分卷 + patches-manifest.txt）"
