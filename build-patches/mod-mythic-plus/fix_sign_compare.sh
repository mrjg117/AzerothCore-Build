#!/usr/bin/env bash
# 修复 mod-mythic-plus 的 -Wsign-compare（真矫，非屏蔽）。
# 根因：mythic_plus_npc_support.cpp:175
#        for (int i = 0; i < level->affixes.size(); i++)
#        —— int 与 std::vector::size() 返回的 size_type 比较。
# 修正：循环变量改 size_t，与 size() 返回类型一致，零行为变化。
# 约定：workflow 已 cd 进 official/modules/mod-mythic-plus 后执行本脚本，直接扫 src/。
set -e
if [ -f src/mythic_plus_npc_support.cpp ]; then
  sed -i 's|for (int i = 0; i < level->affixes.size(); i++)|for (size_t i = 0; i < level->affixes.size(); i++)|' src/mythic_plus_npc_support.cpp
  echo "mod-mythic-plus: sign-compare fixed (mythic_plus_npc_support.cpp:175)"
else
  echo "mod-mythic-plus: src/mythic_plus_npc_support.cpp not found, skip" >&2
fi
