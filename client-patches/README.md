# client-patches — 客户端补丁静态资源包（按模组分目录）

本目录是 `wotlk-patches` 镜像的**唯一真相源**，全部为已生成的静态文件，
镜像构建时只做 COPY（`COPY client-patches /patches`），不在 CI 内重新生成
（重生成需要玩家客户端原始 DBC，无法在构建环境取得）。

> 命名说明：目录叫 `client-patches/` 而非 `patches/`，是为与**未来可能出现的
> 服务器补丁**明确区分；若以后有服务端热补，可另建 `server-patches/`，
> 二者互不干扰。

## 目录结构（按模组分子目录，便于溯源）

```
client-patches/
├── README.md                    # 本说明
├── patches-client.zip          # 按客户端路径层级打包的整包（下载页主推）
│                                #   内含 Data/ + Interface/AddOns/，解压即用
├── item-affixes/               # mod-item-affixes（MPQ + AddOn 都有）
│   ├── mpq/                     # 由模组脚本生成的客户端补丁 MPQ
│   │   ├── patch-Y.mpq          # Spell.dbc + SkillLineAbility.dbc
│   │   │                       #   Spell 49839→49860 (+21 自定义印记法术)
│   │   │                       #   SLA   10219→10240 (+21 对应条目)
│   │   ├── patch-Z.mpq          # SpellItemEnchantment.dbc (3141 条, 印记显示名)
│   │   └── enUS/                # 英文客户端 locales 变体（同内容）
│   │       ├── patch-enUS-Y.mpq
│   │       └── patch-enUS-Z.mpq
│   └── addon/ItemAffixes/       # 该模组的客户端 AddOn
├── guild-levels/               # mod-guild-levels（仅 AddOn，无 MPQ）
│   └── addon/GuildLevels/
└── bot-inventory-master/       # mod-bot-inventory-master（仅 AddOn，无 MPQ）
    └── addon/BotInventoryMasterUI/
```

每个模组目录内 `mpq/`（若有）与 `addon/`（若有）分开，修改溯源时直接看
对应模组目录即可，不必在扁平列表里翻找。

## 客户端放置方式

- **zhCN 客户端**（本项目目标环境，如 `D:\Users\335`）：
  - `item-affixes/mpq/patch-Y.mpq`、`patch-Z.mpq` → `Wow/Data/`
  - 这两个 MPQ 的 DBC 已基于 zhCN 基准构建，内含中文文本，无需 locale 包。
- **enUS 客户端**：额外把 `item-affixes/mpq/enUS/patch-enUS-Y.mpq`、
  `patch-enUS-Z.mpq` 放到 `Wow/Data/enUS/`。

> 模组的 `patch_custom_spells.ps1` 默认只产出 `enus/` 英文变体。
> 本项目目标为 zhCN，主 MPQ 已用 zhCN 基准 DBC 生成，locale 变体仅作兼容保留。

## 生成流程（如需重生成，不在 CI 内执行）

1. 从玩家客户端 MPQ 抽取原始 DBC（本项目用 `mpyq` 从
   `Data/zhCN/patch-zhCN-2.MPQ` 抽取 `Spell.dbc` / `SkillLineAbility.dbc` /
   `SpellItemEnchantment.dbc` 到 `SERVER_DBC_DIR`）。
2. 设置环境变量后运行模组脚本：
   - `SERVER_DBC_DIR` = 原始 DBC 目录
   - `CLIENT_DATA_DIR` = MPQ 输出目录
   - `scripts/patch_dbc.ps1`         → 产出 `patch-Z.mpq`（印记显示名）
   - `tools/patch_custom_spells.ps1` → 产出 `patch-Y.mpq`（Spell + SLA）
3. 补丁槽位后缀（Y/Z）由脚本在干净输出目录下自动探测空闲槽位。
4. 把产出按上面「目录结构」归档到对应模组子目录（本仓库已归档好）。

## 重要修正记录（2026-08-08）

原 `mpqcreate` 逻辑写入的块表标志为 `0x80000000`（`MPQ_FILE_EXISTS`），
**缺少 `MPQ_FILE_SINGLE_UNIT`**。单文件 blob 未设该标志时，合规客户端
（含 WoW 3.3.5a / StormLib）会把数据区首 4 字节 `WDBC` 误判为扇区偏移表，
导致加载失败。已将两处构建脚本改为 `0x81000000`
（`MPQ_FILE_EXISTS | MPQ_FILE_SINGLE_UNIT`），与单文件 `mpqcreate.ps1`
既有正确写法一致。本目录内 MPQ 均已按此修正重新生成并验证
（`conformant: OK (single-unit)`）。

## 客户端整包（下载页主推）

`patches-client.zip` 由 `build/tools/make-client-archive.py` 从本目录生成，
**按 WoW 客户端安装路径层级打包**（扫描规则与源码布局解耦：任意 `*.mpq`
→ `Data/`、含 `.toc` 的目录 → `Interface/AddOns/<名>/`），玩家将其解压到
客户端根目录即落到：

```
Data/patch-Y.mpq, Data/patch-Z.mpq              -> 客户端 Data/（zhCN 基准）
Data/enUS/patch-enUS-Y.mpq, -Z.mpq              -> 客户端 Data/enUS/（英文客户端）
Interface/AddOns/ItemAffixes/...                -> 插件目录
Interface/AddOns/GuildLevels/...
Interface/AddOns/BotInventoryMasterUI/...
```

重新生成：`python3 build/tools/make-client-archive.py`（在仓库根执行）。
该 zip 已纳入镜像（`build/Dockerfile.patches` 中 COPY 整棵 client-patches
树），注册成功页通过 `/download` 直接推流，无需运行时压缩。

## 体积说明

`patch-Y.mpq` / `patch-enUS-Y.mpq` 各约 49.5 MB（含完整 Spell.dbc）。
整包约 100 MB，已作为静态产物纳入仓库。若希望瘦身，可改为 `.gitignore`
MPQ 并在构建机本地重生成后 COPY（需保留客户端 DBC 来源）。
