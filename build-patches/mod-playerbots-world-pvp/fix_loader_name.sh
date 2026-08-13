#!/usr/bin/env bash
# 修复 TopHatMan/mod-playerbots-world-pvp 的脚本注册函数命名错配（模组级补丁，与现有 build-patches 补丁同机制）。
# 根因：模块目录名 mod-playerbots-world-pvp（复数）使 AC 链接器按目录名生成 Addmod_playerbots_world_pvpScripts()，
#       但源码 src/ 中定义/声明的是单数 Addmod_playerbot_world_pvpScripts() -> 链接期 undefined reference。
# 处置：把源码里的注册函数名单数改为复数，匹配目录名。不改目录、不碰核心、走统一 build-patches 机制。
# 约定：workflow 已 cd 进 official/modules/mod-playerbots-world-pvp 后执行本脚本，故直接扫 src/ 改之。
set -e
grep -rl 'Addmod_playerbot_world_pvpScripts' src/ 2>/dev/null | while IFS= read -r f; do
  sed -i 's/Addmod_playerbot_world_pvpScripts/Addmod_playerbots_world_pvpScripts/g' "$f"
  echo "  patched: $f"
done
echo "world-pvp: loader fn renamed to plural (matches module dir mod-playerbots-world-pvp)"
