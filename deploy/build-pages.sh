#!/usr/bin/env bash
# ============================================================
# build-pages.sh  ——  Cloudflare Pages 构建命令（也可本地跑）
# ------------------------------------------------------------
# 仓库里只提交「部署源文件」；官方编排文件与两个压缩包都在
# 构建时现拉 / 现打，不进 git 仓库（避免官方更新后副本过期、
# 也避免把大文件/二进制提交进库）。
#
# Cloudflare Pages 设置：
#   构建命令：  bash deploy/build-pages.sh
#   输出目录：  deploy
#
# 本地预览可同样执行本脚本，完成后 deploy/ 即为可直接托管的静态目录。
# ============================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$SCRIPT_DIR"

AC_REPO="azerothcore/azerothcore-wotlk"
AC_REF="${AC_REF:-master}"

echo "==> [1/3] 拉取官方文件（docker-compose.yml / conf/dist/env.ac）"
curl -fsSL -o docker-compose.yml \
  "https://raw.githubusercontent.com/${AC_REPO}/${AC_REF}/docker-compose.yml"
mkdir -p conf/dist
curl -fsSL -o conf/dist/env.ac \
  "https://raw.githubusercontent.com/${AC_REPO}/${AC_REF}/conf/dist/env.ac"

echo "==> [2/3] 构建玩家补丁包 patches-client.zip（AddOns 构建期直拉上游，MPQ 为仓库内自定义中文补丁）"
mkdir -p patches
# AddOns 不落库备份：构建时直接 clone 上游 client_addon/ 拉取
# （上游没了模组本身也编译不了，保留本地备份无意义）
declare -A ADDONS=(
  ["guild-levels"]="https://github.com/Old-Man-Warcraft/mod-guild-levels.git"
  ["bot-inventory-master"]="https://github.com/TopHatMan/mod-bot-inventory-master.git"
  ["item-affixes"]="https://github.com/Nevaden/mod-item-affixes.git"
)
for m in "${!ADDONS[@]}"; do
  u="${ADDONS[$m]}"
  rm -rf "/tmp/addon_$m" && git clone --depth 1 "$u" "/tmp/addon_$m"
  if [ -d "/tmp/addon_$m/client_addon" ]; then
    mkdir -p "$REPO_ROOT/client-patches/$m/addon"
    cp -rf "/tmp/addon_$m/client_addon/." "$REPO_ROOT/client-patches/$m/addon/"
    echo "    拉取 $m 的 AddOn"
  else
    echo "    警告: $m 上游无 client_addon/，跳过"
  fi
done
PATCHES_DIR="$REPO_ROOT/client-patches" \
ARCHIVE_OUT="$SCRIPT_DIR/patches/patches-client.zip" \
  python3 "$REPO_ROOT/client-patches/make-archive.py"

# 分卷：始终切分为多卷（用户要求"分卷zip + 点一下下一堆"）。
# 卷大小按总大小约 4 等分动态取值，保证至少有若干卷、且单卷 ≤ 24 MiB（CF Pages / 阿里云 ESA Pages 单文件硬上限 25 MiB）。
cd "$SCRIPT_DIR/patches"
rm -f patches-client.zip.* patches-manifest.txt
_pz=$(stat -c%s patches-client.zip 2>/dev/null || echo 0)
_vol=$(( _pz / 4 / 1048576 )); [ "$_vol" -lt 1 ] && _vol=1; [ "$_vol" -gt 24 ] && _vol=24
echo "    补丁包 ${_pz} 字节，执行 split -b ${_vol}m 分卷（每卷 ≤ 24 MiB）"
split -b ${_vol}m -d -a 3 patches-client.zip patches-client.zip.
rm -f patches-client.zip          # 单卷不再单独提供，统一走分卷
# 生成分卷清单（合并顺序 + 数量 + 合并 sha256），供页面/脚本按序合并校验
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
fi > patches-manifest.txt
cd "$SCRIPT_DIR"
echo "    分卷清单 $(wc -l < patches/patches-manifest.txt) 行 -> patches/patches-manifest.txt"

echo "==> [3/3] 构建部署配置整包 ac-deploy.zip"
rm -f ac-deploy.zip
python3 - <<'PY'
import zipfile, os
files = ["docker-compose.yml", "docker-compose.override.yml",
         ".env.example", "deploy-console.sh", "README.md"]
with zipfile.ZipFile("ac-deploy.zip", "w", zipfile.ZIP_DEFLATED) as z:
    for f in files:
        if os.path.exists(f):
            z.write(f, f)
    for root, _, fs in os.walk("conf"):
        for fn in fs:
            p = os.path.join(root, fn)
            z.write(p, p)
print("OK ac-deploy.zip")
PY

# 导出当前镜像 tag，便于控制台/人工核对
grep -E "^IMAGE_TAG=" .env.example | head -1 > VERSION 2>/dev/null || true

echo "==> 完成：deploy/ 已就绪，可被 Cloudflare Pages 直接托管"
echo "    生成产物：docker-compose.yml  conf/dist/env.ac  patches/patches-client.zip.*（分卷）+ patches-manifest.txt  ac-deploy.zip  VERSION  deploy-console.sh"
