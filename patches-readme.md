# 客户端补丁（wotlk-patches）

本镜像为玩家提供客户端补丁下载，由注册页（wotlk-web）挂载并展示。

## 三个模组的客户端交付物（已逐个核实仓库源码）

| 模组 | AddOn | 是否需加工 MPQ | 说明 |
|---|---|---|---|
| mod-item-affixes | `addons/ItemAffixes/` | **是** | 仓库提供 `scripts/patch_dbc.ps1`，从客户端 DBC 现场生成 MPQ |
| mod-guild-levels | `addons/GuildLevels/` | 否 | 纯 AddOn（Lua） |
| mod-bot-inventory-master | `addons/BotInventoryMasterUI/` | 否 | 纯 AddOn（Lua） |

AddOn 下载后解压到 WoW 客户端的 `Interface/AddOns/` 目录即可。

## mod-item-affixes 的 MPQ 怎么生成（仓库无现成 MPQ，需本地加工）

MPQ 内含打过补丁的 `SpellItemEnchantment.dbc`（让客户端显示词缀绿色 tooltip 名称）。
生成依赖：**WoW 3.3.5a 客户端原始的 `Data/DBFilesClient/SpellItemEnchantment.dbc`**（服务端加载的同一份基础 DBC）。

步骤（在模组仓库根目录，需 PowerShell 5 / pwsh）：
1. 准备服务端 DBC 目录（含 `SpellItemEnchantment.dbc`），设为环境变量 `SERVER_DBC_DIR`。
2. 准备玩家客户端 `Data/` 目录，设为 `CLIENT_DATA_DIR`（生成的 MPQ 会写到这里）。
3. 运行：
   ```
   powershell -ExecutionPolicy Bypass -File scripts/patch_dbc.ps1
   ```
   - 读取 `affixes/*.json` + `class_affixes/*.json` 中的 `enchant_id → display_name`；
   - 把这些名称补进 `SpellItemEnchantment.dbc`；
   - **用内置纯 PowerShell MPQ v1 生成器**（无需任何外部工具，`tools/mpqbuild.exe` 备用）写出
     `patch-<字母>.mpq` 与 `enus/patch-enUS-<字母>.mpq`，`<字母>` 自动避开已有 `patch-*.mpq`。
4. 玩家把生成的 `patch-X.mpq`（连同 `patch-enUS-X.mpq`）放进自己客户端的 `Data/` 目录。
   - 若使用 Imprints 功能，还需 `tools/patch_custom_spells.ps1` 补 `Spell.dbc`（写松散文件
     `Data/DBFilesClient/Spell.dbc`；老客户端不支持松散 DBC 时用 Ladik's MPQ Editor 打进 `patch-4.mpq`）。

## 自动化构建说明
- MPQ 生成依赖客户端原始 DBC 作为输入（与地图构建依赖 `CLIENT_DATA_URL` 同类），无法在干净 CI 中无输入预生成。
- `wotlk-patches` 镜像当前打包 3 个 AddOn；MPQ 仍需服务器管理员本地生成后，单独放入镜像或另行托管供下载。

## 预留目录
- `dbc/` 当前为空。
- `mpq/` 当前为空（item-affixes 的 MPQ 由上方流程本地生成后填入）。
