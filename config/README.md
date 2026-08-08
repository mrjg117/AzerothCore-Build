# config/ —— 服务端配置源（按模组分层）

本目录是**配置的唯一真相源**，纳入版本库；`build/Dockerfile.config` 由此构建
`wotlk-config` 镜像，`deploy.sh` 再把镜像内容导出到 `./runtime/config/` 挂载给
authserver / worldserver。

> 运行时改配置请改 `./runtime/config/*.conf`（重启生效，不必重建镜像）；
> 但那只是**导出副本**，长期生效的改动必须回写到本目录并重建配置镜像。

## 目录结构

```
config/
├── core/                      # 核心配置（非模组，AzerothCore 自带）
│   ├── authserver.conf
│   └── worldserver.conf
└── modules/                   # 模组配置，一模组一目录
    └── playerbots/
        ├── playerbots.conf
        └── README.md          # 该模组配置的来源、键名依据、调参说明
```

## 命名约定

- **模组目录名 = 仓库名去掉 `mod-` 前缀**，与 `client-patches/` 保持同一套键：

  | 模组仓库 | `config/modules/` | `client-patches/` |
  |---|---|---|
  | `mod-playerbots` | `playerbots/` | （无客户端补丁） |
  | `mod-item-affixes` | （暂无配置） | `item-affixes/` |
  | `mod-guild-levels` | （暂无配置） | `guild-levels/` |
  | `mod-bot-inventory-master` | （暂无配置） | `bot-inventory-master/` |

  同一模组在两棵树里目录名一致，改哪个模组、动过哪些文件一眼可查。

- `core/` 只放 AzerothCore 本体配置；任何模组引入的 conf 一律进 `modules/`，
  即便它当前只有一个文件。

## 构建期的合并规则

`build/Dockerfile.config` 用 busybox 组装阶段执行扁平合并：

1. `config/core/*` 直接落到 `/azerothcore/etc/`；
2. `config/modules/**/*.conf` **递归收集后平铺**到同一个 `/azerothcore/etc/`；
3. 若两个模组出现**同名 conf**，构建立即失败并打印冲突文件名（防静默覆盖）。

即：**源码分层，运行时仍是扁平的 `/azerothcore/etc/`**，与重构前逐字节等价，
不改变 AzerothCore 读取配置的行为。

> 为什么不落到 `/azerothcore/etc/modules/`：现网运行中的部署就是扁平布局，
> 本次重构只动源码组织，不动运行时契约。若日后确认 AC 版本要求 `etc/modules/`
> 子目录，改 Dockerfile.config 的目标路径即可，源码树无须再动。

## 新增一个模组的配置

1. 建目录 `config/modules/<模组名去 mod- 前缀>/`；
2. 放入该模组的 conf（**键名以模组仓库里的 `*.conf.dist` 为准**，不要照抄别处）；
3. 在该目录写一份 `README.md`，注明：配置来源 `.dist` 的路径、改了哪些键、为什么改；
4. push 后 `build-config.yml` 会因 `config/**` 变动自动重建配置镜像；
5. 部署侧 `./deploy.sh up` 重新导出 `./runtime/config/`。

## 变更记录

| 日期 | 变更 | 说明 |
|---|---|---|
| 2026-08-08 | 由扁平 `config/config-src/` 改为 `config/core/` + `config/modules/<模组>/` | 配置按模组分层，与 `client-patches/` 对齐；`Dockerfile.config` 增加组装阶段做扁平合并，运行时产物不变 |
| 2026-08-08 | 删除 `config/playerbots.conf.example` | 与 `config-src/playerbots.conf` 内容重复，属早期遗留；现由 `modules/playerbots/playerbots.conf` 单一来源承担 |

## 文档与实际不一致时的判定基准

排查顺序（**越靠前越权威**）：

1. `build/Dockerfile.config` —— 合并逻辑的事实来源，决定文件最终落到哪；
2. 本目录实际文件树 —— 决定有哪些配置进入镜像；
3. 本 README —— 若与 1、2 冲突，**以 1、2 为准并回头修正本文档**；
4. `./runtime/config/`（部署机上的导出副本）—— 只是快照，**不可作为判据**，
   它可能被运行时手改过；与本目录不一致时，以本目录为准并把有效改动回写。
