#!/usr/bin/env bash
# 修复 mod-junk-to-gold-plus 的 -Wsign-compare（真矫，非屏蔽）。
# 根因：mod_junk_to_gold_plus.cpp:90
#        if (itemTemplate->AllowableClass == -1)
#        —— AllowableClass 是 uint32（const unsigned int），-1 是 int，有符号/无符号比较。
# 语义说明：数据库中「全职业可用」以 0xFFFFFFFF（即 int -1 转 uint32 后的值）表示，
#           原写法靠隐式转换恰好能跑，但形式不规范、触发告警。
# 修正：显式写成 itemTemplate->AllowableClass == uint32(-1)，运行行为完全不变，彻底消除告警。
# 约定：workflow 已 cd 进 official/modules/mod-junk-to-gold-plus 后执行本脚本，直接扫 src/。
set -e
if [ -f src/mod_junk_to_gold_plus.cpp ]; then
  sed -i 's|itemTemplate->AllowableClass == -1|itemTemplate->AllowableClass == uint32(-1)|' src/mod_junk_to_gold_plus.cpp
  echo "mod-junk-to-gold-plus: sign-compare fixed (mod_junk_to_gold_plus.cpp:90)"
else
  echo "mod-junk-to-gold-plus: src/mod_junk_to_gold_plus.cpp not found, skip" >&2
fi
