#!/usr/bin/env bash
set -e
export http_proxy=http://192.168.10.89:1071
export https_proxy=http://192.168.10.89:1071

DST="/mnt/e/WorkBuddy/2026-08-07-12-50-15/acore-build-repo"
cd "$DST"

# 移除误提交的辅助脚本
git rm --cached zz_push_prepare.sh >/dev/null 2>&1 || true
rm -f zz_push_prepare.sh
git add -A
git commit --amend --no-edit >/dev/null 2>&1

echo "=== 最终要推送的文件 ==="
git ls-files
echo "=== remote ==="
git remote -v
echo "=== push ==="
git push origin main 2>&1 | tail -15
echo "EXIT_PUSH=$?"
