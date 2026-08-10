#!/usr/bin/env bash
# ============================================================
# download-patches.sh —— 批量下载分卷补丁并合并（"点一下下一堆"）
# ------------------------------------------------------------
# 用法：
#   bash download-patches.sh <Pages_BASE_URL> [输出目录]
# 例：
#   bash download-patches.sh https://ac-deploy.pages.dev
#   bash <(curl -fsSL https://ac-deploy.pages.dev/download-patches.sh) https://ac-deploy.pages.dev
#
# 行为：读 <BASE>/patches/patches-manifest.txt，按序批量下载所有分卷
#       → cat 合并为完整 zip → 校验 sha256 → unzip 到输出目录（默认 ./patches-client）。
# 说明：分卷是因为整包 ~48 MB（含 zhCN MPQ）超过 Cloudflare Pages / 阿里云
#       ESA Pages 单文件 25 MiB 硬上限，故由 build-pages.sh 用 split -b 24m 切分。
# ============================================================
set -euo pipefail

[ -z "${1:-}" ] && { echo "用法: bash download-patches.sh <Pages_BASE_URL> [输出目录]"; exit 1; }
BASE_URL="${1%/}"
OUT_DIR="${2:-patches-client}"

echo "==> 来源: $BASE_URL"
echo "==> 输出: $OUT_DIR/"

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "==> 读取分卷清单"
curl -fsSL -o "$WORK/patches-manifest.txt" "$BASE_URL/patches/patches-manifest.txt" \
  || { echo "清单下载失败: $BASE_URL/patches/patches-manifest.txt"; exit 1; }

# 解析 file= 行（按合并顺序）；行格式 "file=<名> size=<字节>"，只取文件名
mapfile -t PARTS < <(grep '^file=' "$WORK/patches-manifest.txt" | sed 's/^file=//; s/ .*//')
if [ "${#PARTS[@]}" -eq 0 ]; then
  echo "清单中无分卷条目（file=）"; exit 1
fi

EXPECTED="$(grep '^count=' "$WORK/patches-manifest.txt" | cut -d= -f2- || true)"
echo "==> 分卷数: ${#PARTS[@]}${EXPECTED:+ (清单 count=$EXPECTED)}，开始批量下载"
for p in "${PARTS[@]}"; do
  echo "    [下载] $p"
  curl -fsSL -o "$WORK/$p" "$BASE_URL/patches/$p" \
    || { echo "下载失败: $p"; exit 1; }
done

echo "==> 合并分卷 -> $WORK/patches-client.zip"
cat "${PARTS[@]/#/$WORK/}" > "$WORK/patches-client.zip"

# 可选：校验合并 sha256
MANIFEST_SHA="$(grep '^combined_sha256=' "$WORK/patches-manifest.txt" | cut -d= -f2- || true)"
if [ -n "$MANIFEST_SHA" ]; then
  ACTUAL="$(sha256sum "$WORK/patches-client.zip" | cut -d' ' -f1)"
  if [ "$ACTUAL" = "$MANIFEST_SHA" ]; then
    echo "==> sha256 校验通过"
  else
    echo "!! sha256 不匹配（期望 $MANIFEST_SHA / 实际 $ACTUAL），文件可能损坏" >&2
    exit 1
  fi
fi

echo "==> 解压到 $OUT_DIR/"
mkdir -p "$OUT_DIR"
unzip -o -q "$WORK/patches-client.zip" -d "$OUT_DIR"

echo "==> 完成：补丁已解压到 $OUT_DIR/（Data/ 与 Interface/AddOns/）"
echo "    把该目录内容解压/复制到 WoW 3.3.5a 客户端【根目录】即可。"
