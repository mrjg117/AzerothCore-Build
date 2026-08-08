# 客户端补丁（wotlk-patches）

本镜像为玩家提供客户端补丁下载，由注册页（wotlk-web）挂载并展示。

## 当前包含（均来自服务端模组仓库的客户端 AddOn）
- `addons/ItemAffixes/`          ← mod-item-affixes
- `addons/GuildLevels/`          ← mod-guild-levels
- `addons/BotInventoryMasterUI/` ← mod-bot-inventory-master

下载后解压到 WoW 客户端的 `Interface/AddOns/` 目录即可。

## 预留目录
- `dbc/`  当前为空。若某模组需要客户端 DBC 补丁，将文件放入后重建本镜像。
- `mpq/`  当前为空。若需要 MPQ 补丁，同理。

> 核实结论（2026-08-08）：上述 3 个模组仓库经 GitHub API 核实，**均只提供
> 客户端 AddOn，未提供 DBC / MPQ 现成文件**。因此 dbc/ 与 mpq/ 暂为空。
> 之前飞书表「客户端补丁」栏勾选的 DBC/MPQ 与实际仓库不符，以仓库为准。
