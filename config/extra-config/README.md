# ac-extra-config（自定义配置注入镜像）

把 `confs/` 下的配置文件导出到挂载卷 `/out`（部署机挂到 `./env/dist/etc`）。
官方 `entrypoint.sh` 用 `cp -rnv`（no-clobber）把 `env/dist/etc/*` 合并进 worldserver 的 `etc/`，
因此本镜像落地的配置**永不覆盖**官方/模块自带的值——只有官方没有、我们自定义的项才生效。

## 占位符替换
`worldserver.conf` 中的 `__SOAP_PASSWORD__` 会在注入时由环境变量 `SOAP_PASSWORD` 替换
（见 `deploy/docker-compose.override.yml` 的 `ac-web` 环境变量与 `deploy/inject-config.sh`）。
这样 SOAP 密码不写死进镜像，部署时由 .env 提供。

## 文件清单（按模组分）
- `worldserver.conf`：启用 SOAP（注册页建号通道）。
- `playerbots.conf`：playerbots 模块覆盖（机器人规模等）。
- `mod_item_affixes.conf`：mod-item-affixes 模块覆盖（锁 WotLK 平衡预算）。

> 注：模块配置的文件名需与模块在 `etc/` 下加载的文件名一致（`playerbots.conf` /
> `mod_item_affixes.conf`）。若 worldserver 启动日志未出现对应配置加载，请按模块实际
> 加载名调整本目录文件名；不影响服务启动（缺覆盖时模块用自带默认值）。
