# AzerothCore 自定义模组部署

云端编译，本地部署。

## 使用流程

### 1. Fork 本仓库

### 2. 配置腾讯云容器镜像服务

1. 登录腾讯云控制台，开通容器镜像服务
2. 创建命名空间（如 `mygame`）
3. 创建镜像仓库（如 `azerothcore-custom`）
4. 获取访问凭证：
   - 用户名：腾讯云账号
   - 密码：在"访问凭证"中创建

### 3. 配置 GitHub Secrets

在 GitHub 仓库的 Settings → Secrets and variables → Actions 中添加：

- `TCR_USERNAME`: 腾讯云账号
- `TCR_TOKEN`: 腾讯云访问凭证密码
- `TCR_NAMESPACE`: 命名空间名称

### 4. 编辑模组列表

修改 `modules.txt`，添加你需要的模组仓库地址：

```
https://github.com/mod-playerbots/mod-playerbots.git
https://github.com/azerothcore/mod-transmog.git
```

### 5. 添加补丁（可选）

将 SQL 补丁文件放入 `patches/` 目录：

- `auth_*.sql` → 导入到认证数据库
- `characters_*.sql` → 导入到角色数据库
- `world_*.sql` → 导入到世界数据库

### 6. 触发编译

推送代码到 main 分支，GitHub Actions 会自动编译并推送镜像到腾讯云容器镜像服务。

### 7. 本地部署

```bash
# 克隆仓库
git clone https://github.com/你的用户名/azerothcore-custom.git
cd azerothcore-custom

# 配置环境变量
cp .env.example .env
# 编辑 .env，填入腾讯云命名空间和数据库密码

# 拉取镜像并启动
docker compose pull
docker compose up -d
```

## 文件说明

- `modules.txt` - 模组列表，每行一个 Git 仓库地址
- `patches/` - SQL 补丁目录
- `Dockerfile` - 云端编译配置
- `docker-compose.yml` - 本地部署配置
- `.github/workflows/build.yml` - GitHub Actions 工作流

## 注意事项

1. 首次编译需要 30-60 分钟
2. 需要自己准备地图数据（maps, vmaps, mmaps）放到 `./data` 目录
3. 配置文件会自动生成在 `./config` 目录
4. 补丁只在首次初始化时应用
