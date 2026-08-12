#!/usr/bin/env bash
# 修复 mod-mythic-plus（araxiaonline/mod-mythic-plus）与 Playerbot fork 核心的 API 漂移：
# 核心已将 Unit::SetModifierValue / GetModifierValue 拆分为 Flat / Pct 两套方法：
#   SetModifierValue   -> SetStatFlatModifier
#   GetModifierValue   -> GetFlatModifierValue
# 该模组全部调用均使用 BASE_VALUE（属 UnitModifierFlatType = flat 类），
# 故机械改名即语义等价，无 pct 类（BASE_PCT / TOTAL_PCT）用法，安全。
# 约定：workflow 已 cd 进 official/modules/mod-mythic-plus 后执行本脚本，故对整模块递归处理。
set -e
files=$(grep -rl -E 'SetModifierValue|GetModifierValue' . --include='*.cpp' --include='*.h' --include='*.hpp' --include='*.cc' 2>/dev/null)
if [ -z "$files" ]; then echo "no SetModifierValue/GetModifierValue usages found"; exit 0; fi
sed -i -E 's/\bSetModifierValue\(/SetStatFlatModifier(/g; s/\bGetModifierValue\(/GetFlatModifierValue(/g' $files
n=$(grep -rh -E 'SetStatFlatModifier|GetFlatModifierValue' $files | wc -l)
echo "fixed modifier API: $(echo "$files" | wc -l) file(s), $n call site(s) rewritten"
