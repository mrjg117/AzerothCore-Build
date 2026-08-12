#!/usr/bin/env bash
# 修复 Karmiven/mod-challenge-modes (rework 分支) 与 Playerbot fork 核心的 API 漂移：
# OnPlayerResurrect 第3参数在核心基类为 bool& (引用)，该模组仍写 bool (值)，
# 触发 -Werror override-hides-virtual 致命错误。文件中该签名共 4 处、文本完全一致，
# 用 sed 一次性全改。
set -e
sed -i 's#bool /\*applySickness\*/) override#bool\& /\*applySickness\*/) override#g' src/ChallengeModes.cpp
echo "fixed OnPlayerResurrect signatures: $(grep -c 'bool& /\*applySickness\*/) override' src/ChallengeModes.cpp)"
