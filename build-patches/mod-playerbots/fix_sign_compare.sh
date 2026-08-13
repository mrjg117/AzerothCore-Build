#!/usr/bin/env bash
# 修复 mod-playerbots 的 -Wsign-compare（真矫，非屏蔽）。
# 根因：Ai/Raid/Mag/MagActions.cpp:295
#        if (warlockIndex >= 0 && warlockIndex < abyssals.size())
#        —— int (warlockIndex) 与 size_type (abyssals.size()) 比较。
# 修正：把右操作数显式 static_cast<int>，保留 warlockIndex 的 int 语义（-1 表示未找到），
#       不改变任何运行时行为，仅消除有符号/无符号比较告警。
# 约定：workflow 已 cd 进 official/modules/mod-playerbots 后执行本脚本，直接扫 src/。
set -e
if [ -f src/Ai/Raid/Mag/MagActions.cpp ]; then
  sed -i 's|warlockIndex < abyssals.size()|warlockIndex < static_cast<int>(abyssals.size())|' src/Ai/Raid/Mag/MagActions.cpp
  echo "mod-playerbots: sign-compare fixed (Ai/Raid/Mag/MagActions.cpp:295)"
else
  echo "mod-playerbots: src/Ai/Raid/Mag/MagActions.cpp not found, skip" >&2
fi
