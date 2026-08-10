# Client add-on — Guild Levels

Ship the **`GuildLevels`** folder to players:

`World of Warcraft\Interface\AddOns\GuildLevels\`

Contents:

- `GuildLevels.toc`
- `Core.lua` — registers `GuildLevels` prefix, listens for server whisper sync, `/glui` toggle, `/glpull` refresh
- `UI.lua` — draggable panel, XP bar within current level bracket, perk list (Cataclysm-style labels)

## How sync works

1. With **`GuildLevels.AddonSync = 1`** (default in `guild_levels.conf.dist`), worldserver whispers your
   character a **LANG_ADDON** line starting with `GuildLevels\tSTATE\t…` on login, guild join, guild
   level-up (broadcast), and GM `setxp` / `setlevel`.
2. The add-on calls `SendAddonMessage("GuildLevels", "PULL", "GUILD")` on login and on `/glpull`.
   The module intercepts that guild addon message, answers with a whisper snapshot, and **does not**
   broadcast `PULL` to the whole guild.

## AIO

`GuildLevels.toc` lists **OptionalDeps: AIO**. The server-side `lua/extensions/guild_levels/guild_levels.ext`
file is optional (when **mod-ale** is built). You can extend either path; the stock add-on does not require AIO.

## License

GPL v2+, same as AzerothCore.
