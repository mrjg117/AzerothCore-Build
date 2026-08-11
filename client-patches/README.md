# client-patches — 客户端补丁（按模组分子目录）

本目录是客户端补丁的**源**（最终由 Cloudflare Pages 构建时打包为 `patches-client.zip` 分卷分发）。结构按模组分子目录，
便于溯源与单独下载。

> 目录名 `client-patches/` 是为与未来可能的「服务器补丁」区分；若有服务端热补可另建 `server-patches/`，互不干扰。

## 目录结构

```
client-patches/
├── README.md
├── item-affixes/                 # mod-item-affixes（MPQ + AddOn 都有）
│   ├── mpq/
│   │   └── zhCN/                 # 中文客户端 locale 目录（仅一份）
│   │       ├── patch-zhCN-Y.mpq  # Spell.dbc + SkillLineAbility.dbc
│   │       └── patch-zhCN-Z.mpq  # SpellItemEnchantment.dbc
│   └── addon/ItemAffixes/        # 该模组的客户端 AddOn
├── guild-levels/                 # mod-guild-levels（仅 AddOn，无 MPQ）
│   └── addon/GuildLevels/
└── bot-inventory-master/         # mod-bot-inventory-master（仅 AddOn，无 MPQ）
    └── addon/BotInventoryMasterUI/
```

- **MPQ 单份**：中文客户端 locale 目录为 `Data/zhCN/`，故只放 `zhCN/` 一份
  （不再有根目录与 `enUS/` 重复拷贝）。打包后落到玩家客户端 `Data/zhCN/`。
- **AddOn 是「离线兜底副本」**：仓库里这份用于构建机联网失败时的兜底；
  平时 `sync-addons.yml` 会从原模组仓库的 `client_addon/` 拉**最新**覆盖进来，
  `sync-addons.yml` 再把最新版刷回本目录提交，保持兜底不陈旧。

## 打包（整包不在仓库，Cloudflare Pages 构建时现打）

`patches-client.zip` **不提交进仓库**。Cloudflare Pages 构建（`build-pages.sh`）时，
`client-patches/make-archive.py` 把本目录按 WoW 目录层级现场打成 zip（按需分卷），
由 Pages 分卷分发，玩家用 `download-patches.sh` 批量下载合并。

扫描规则（与布局解耦）：任意 `*.mpq` → 路径含 locale(`zhCN`) 则落 `Data/zhCN/`；
含 `.toc` 的目录 → `Interface/AddOns/<名>/`。结果层级：

```
Data/zhCN/patch-zhCN-Y.mpq
Data/zhCN/patch-zhCN-Z.mpq
Interface/AddOns/ItemAffixes/...
Interface/AddOns/GuildLevels/...
Interface/AddOns/BotInventoryMasterUI/...
```

## MPQ 生成（如需重生成，不在 CI 内）

2026-08-08 修正：构建脚本写入块表标志 `0x81000000`
（`MPQ_FILE_EXISTS | MPQ_FILE_SINGLE_UNIT`），与单文件 `mpqcreate.ps1` 一致，
合规客户端加载正常（`conformant: OK (single-unit)`）。本目录内 MPQ 已按此生成验证。
重生成流程见历史记录，需玩家客户端 DBC 来源，不在构建环境执行。
