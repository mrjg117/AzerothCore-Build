#!/usr/bin/env bash
# 修复 challenge-modes（当前采用 ZhengPeiRu21/mod-challenge-modes）与 Playerbot fork 核心的 API 漂移：
# OnPlayerResurrect 第3参数在核心基类为 bool& (引用)，该模组仍写 bool (值)，
# 触发 -Werror override-hides-virtual 致命错误。该签名在源码共 4 处、文本完全一致，用 sed 一次性全改。
# 约定：workflow 已 cd 进 official/modules/mod-challenge-modes 后执行本脚本，故直接改 src/ChallengeModes.cpp。
set -e
sed -i 's#bool /\*applySickness\*/) override#bool\& /\*applySickness\*/) override#g' src/ChallengeModes.cpp
echo "fixed OnPlayerResurrect signatures: $(grep -c 'bool& /\*applySickness\*/) override' src/ChallengeModes.cpp)"
