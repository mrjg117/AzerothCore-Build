#!/usr/bin/env python3
# ============================================================
# make-archive.py
# ------------------------------------------------------------
# 由 client-patches/（按模组分子目录存放）生成本地客户端安装用压缩包，
# 按 WoW 客户端【路径层级】打包。玩家把压缩包解压到 WoW 客户端
# 【根目录】即可，目录结构会自动落到正确位置：
#   Data/zhCN/patch-zhCN-*.mpq                -> 客户端 Data/zhCN/
#   Interface/AddOns/<模组名>/...             -> 客户端 Interface/AddOns/
#
# 扫描规则（与源码布局解耦，目录改名也不影响）：
#   - 任意 *.mpq                 -> Data/<locale>/（若路径含 locale 片段如 zhCN，则落到该 locale 子目录；否则 Data/ 根）
#   - 任意含 *.toc 的目录        -> 视为一个 AddOn 根，整目录归入
#                                   Interface/AddOns/<该目录名>/
#
# 输入（可用环境变量覆盖）：
#   PATCHES_DIR   扫描根目录，默认 <repo>/client-patches
#   ARCHIVE_OUT   输出 zip 路径，默认 <PATCHES_DIR>/patches-client.zip
# 用法（仓库内直接打）：python3 client-patches/make-archive.py
# 用法（Cloudflare Worker 构建 build.sh 调用）：
#   PATCHES_DIR=/app/static/patches python3 /app/client-patches/make-archive.py
# ============================================================
import os
import sys
import zipfile

# 本文件位于 <repo>/client-patches/，向上一级即仓库根
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(SCRIPT_DIR)
DEFAULT_DIST = os.path.join(REPO, 'client-patches')

DIST = os.environ.get('PATCHES_DIR', DEFAULT_DIST)
OUT = os.environ.get('ARCHIVE_OUT', os.path.join(DIST, 'patches-client.zip'))

# WoW 客户端 locale 目录名（MPQ 按 locale 落入 Data/<locale>/）
LOCALES = {
    'enUS', 'enGB', 'deDE', 'esES', 'esMX', 'frFR',
    'koKR', 'ruRU', 'zhCN', 'zhTW', 'ptBR', 'itIT',
}


def norm(p: str) -> str:
    """统一为 zip 内使用的正斜杠路径。"""
    return p.replace('\\', '/')


def find_mpq_items():
    items = []
    for root, _dirs, files in os.walk(DIST):
        for fn in sorted(files):
            if not fn.lower().endswith('.mpq'):
                continue
            full = os.path.join(root, fn)
            rel = os.path.relpath(full, DIST)
            parts = rel.split(os.sep)
            locale = next((p for p in parts if p in LOCALES), None)
            if locale:
                dst = norm(os.path.join('Data', locale, fn))
            else:
                dst = norm(os.path.join('Data', fn))
            items.append((full, dst))
    return items


def find_addon_items():
    """扫描含 .toc 的目录作为 AddOn 根，整目录打入 Interface/AddOns/<名>/。"""
    items = []
    addon_roots = set()
    for root, _dirs, files in os.walk(DIST):
        for f in files:
            if f.lower().endswith('.toc'):
                addon_roots.add(root)
                break
    for ar in sorted(addon_roots):
        name = os.path.basename(ar)
        for r, _d, fs in os.walk(ar):
            for f in sorted(fs):
                full = os.path.join(r, f)
                rel = os.path.relpath(full, ar)
                dst = norm(os.path.join('Interface', 'AddOns', name, rel))
                items.append((full, dst))
    return items


def plan():
    return find_mpq_items() + find_addon_items()


def build_readme():
    return (
        "AzerothCore 客户端补丁安装说明\n"
        "================================\n"
        "1. 关闭游戏客户端。\n"
        "2. 将本压缩包解压到魔兽世界 3.3.5a (WotLK) 客户端【根目录】。\n"
        "   目录结构已按客户端路径打包，解压后会自动落到：\n"
        "     Data/zhCN/patch-zhCN-*.mpq                （中文客户端 Data/zhCN/）\n"
        "     Interface/AddOns/<模组名>/                 （插件目录）\n"
        "     Data/<locale>/... 等\n"
        "3. 双击压缩包里的【启动器.bat】：自动清客户端缓存、写好服务器地址、启动游戏。\n"
        "   （服务器地址由运营方在打包时写入，玩家无需手动改 realmlist.wtf）\n"
        "4. 用注册页申请的账号登录即可。\n"
        "\n"
        "包含的模组（源码按模组分目录存放于 client-patches/）：\n"
        "  - mod-item-affixes           （装备词缀；需 MPQ 补丁）\n"
        "  - mod-guild-levels           （公会等级；仅 AddOn）\n"
        "  - mod-bot-inventory-master   （机器人背包；仅 AddOn）\n"
        "\n"
        "AddOn 由构建期从上游模组仓库拉取，未单独提供下载。\n"
    )


def build_launcher(realm: str) -> str:
    """生成 Windows 启动器 .bat：清缓存 + 写 realmlist.wtf + 启动 Wow.exe。

    realm 来自构建期环境变量 REALM_ADDRESS（运营方在打包时填入服务器 IP/域名）。
    内容保持 ASCII，避免 GBK/UTF-8 编码问题。
    """
    r = realm.replace('"', '').strip() or 'play.example.com'
    return (
        "@echo off\r\n"
        "title AzerothCore-OK Launcher\r\n"
        "echo Clearing WoW cache...\r\n"
        "if exist Cache rmdir /s /q Cache\r\n"
        "if exist WTF\\Cache rmdir /s /q WTF\\Cache\r\n"
        "echo Setting realm address to " + r + " ...\r\n"
        "echo SET REALMLIST " + r + " > realmlist.wtf\r\n"
        "echo Launching WoW...\r\n"
        "start \"\" Wow.exe\r\n"
    )


def main():
    items = plan()
    if not items:
        print('ERROR: 未找到任何可打包文件，请检查 client-patches/ 布局',
              file=sys.stderr)
        sys.exit(1)

    total_src = 0
    with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('README-安装说明.txt', build_readme())
        # 启动器：清缓存 + 写 realmlist.wtf（服务器地址由 REALM_ADDRESS 注入）
        realm = os.environ.get('REALM_ADDRESS', 'play.example.com')
        z.writestr('启动器.bat', build_launcher(realm).encode('utf-8'))
        for src, dst in items:
            z.write(src, dst)
            total_src += os.path.getsize(src)

    size = os.path.getsize(OUT)
    print(f'OK: 生成 {OUT}')
    print(f'  条目数: {len(items)}  |  源大小: {total_src // 1024} KB  '
          f'|  压缩包: {size // 1024} KB')
    print('  ---- 路径映射 ----')
    for src, dst in items:
        print(f'  {os.path.relpath(src, DIST)}  ->  {dst}')


if __name__ == '__main__':
    main()
