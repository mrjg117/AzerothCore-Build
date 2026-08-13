#!/bin/bash
# 抑制上游模组的良性编译警告（未用形参/字段、有/无符号比较），零功能改动。
# 走 build-patches 统一机制：workflow 会 cd 进 official/modules/<name> 后执行本脚本。
set -e
F="CMakeLists.txt"
[ -f "$F" ] || { echo "suppress_warnings: 未找到 $F，跳过"; exit 0; }
FLAGS="-Wno-unused-parameter -Wno-unused-private-field -Wno-sign-compare"
if grep -q "Wno-unused-parameter" "$F"; then
  echo "suppress_warnings: 已包含 -Wno-unused-parameter，跳过（避免重复追加）"
else
  sed -i "1i set(CMAKE_CXX_FLAGS \"\${CMAKE_CXX_FLAGS} $FLAGS\")" "$F"
  echo "suppress_warnings: 已插入 $FLAGS 到 $F 顶部"
fi
