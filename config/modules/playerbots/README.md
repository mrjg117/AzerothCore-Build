# mod-playerbots 配置

- **模组仓库**：https://github.com/mod-playerbots/mod-playerbots.git
- **配置来源**：模组仓库内的 `playerbots.conf.dist`
- **运行时落点**：`/azerothcore/etc/playerbots.conf`（由 `Dockerfile.config` 扁平合并生成）

## 本仓库改动的键

`playerbots.conf` 为**部分覆盖**，只写必须改的键，其余走模组默认值。

| 键 | 值 | 原因 |
|---|---|---|
| `PlayerbotMgr.MaxRandomBots` | 40 | E5-2676v3 单核弱，>40 峰值易崩服 |
| `PlayerbotMgr.MinRandomBots` | 5 | 保底在线量 |
| `PlayerbotAI.RandomBotAutoJoinBG` | 0 | 关自动进战场，减少跨地图 CPU 抖动 |
| `PlayerbotAI.RandomBotAutologin` | 1 | 启动即登录随机机器人 |

## 关联的核心侧配置

以下键**不在本文件**，在 `config/core/worldserver.conf`，改机器人规模时需一并核对：

- `PlayerbotAI.Enabled = 1` —— 总开关
- `MapUpdate.Threads = 6` —— 弱 U 护栏，勿拉满

## 注意

键名以你实际编译进核心的那个 mod-playerbots 版本的 `.dist` 为准。模组不锁
commit（rebuild = 拉最新），若上游改过键名，本文件里失配的键会被静默忽略，
表现为「改了没效果」。排查时先 `diff` 一遍上游 `.dist`。
