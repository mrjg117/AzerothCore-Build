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

echo "==> [2/3] 构建玩家补丁包 patches-client.zip"
mkdir -p patches
PATCHES_DIR="$REPO_ROOT/client-patches" \
ARCHIVE_OUT="$SCRIPT_DIR/patches/patches-client.zip" \
  python3 "$REPO_ROOT/scripts/make-client-archive.py"

echo "==> [3/3] 构建部署配置整包 ac-deploy.zip"
rm -f ac-deploy.zip
python3 - <<'PY'
import zipfile, os
files = ["docker-compose.yml", "docker-compose.override.yml",
         ".env.example", "inject-config.sh", "deploy-console.sh", "README.md"]
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
echo "    生成产物：docker-compose.yml  conf/dist/env.ac  patches/patches-client.zip  ac-deploy.zip  VERSION  deploy-console.sh"
