--[[
  Guild Levels — server sync (no AIO required).
  Server sends whisper LANG_ADDON: "GuildLevels\tSTATE\t..." or "GuildLevels\tCLEAR".
  Request refresh: SendAddonMessage("GuildLevels", "PULL", "GUILD") (blocked from guild chat by server).
]]

local ADDON_NAME = "GuildLevels"
local MSG_PREFIX = "GuildLevels"

GuildLevelsSaved = GuildLevelsSaved or {}

local eventFrame = CreateFrame("Frame")
eventFrame:RegisterEvent("ADDON_LOADED")
eventFrame:RegisterEvent("PLAYER_LOGIN")
eventFrame:RegisterEvent("PLAYER_GUILD_UPDATE")
eventFrame:RegisterEvent("CHAT_MSG_WHISPER")
eventFrame:RegisterEvent("CHAT_MSG_ADDON")

local function RegisterPrefixes()
    RegisterAddonMessagePrefix(MSG_PREFIX)
end

local function RequestServerSync()
    if GetGuildInfo("player") then
        SendAddonMessage(MSG_PREFIX, "PULL", "GUILD")
    end
end

local function ParseStateLine(msg)
    -- GuildLevels\tSTATE\tlevel\txp\tprev\tnext\ttoday\tweek\tgid\tname
    local a, b, c, d, e, f, g, h, i, j = strsplit("\t", msg, 10) -- delim, string [, max]
    if a ~= MSG_PREFIX or b ~= "STATE" then
        return nil
    end
    local level = tonumber(c) or 1
    local xp = tonumber(d) or 0
    local prev = tonumber(e) or 0
    local nxt = tonumber(f) or 0
    local today = tonumber(g) or 0
    local week = tonumber(h) or 0
    local gid = tonumber(i) or 0
    local gname = j or ""
    return {
        level = level,
        xp = xp,
        prev = prev,
        nextXp = nxt,
        today = today,
        week = week,
        guildId = gid,
        guildName = gname,
    }
end

local function OnAddonPayload(msg)
    if not msg or msg == "" then
        return
    end
    if strsub(msg, 1, #MSG_PREFIX) ~= MSG_PREFIX then
        return
    end
    if msg == MSG_PREFIX .. "\tCLEAR" then
        GuildLevelsSaved.last = nil
        if GuildLevelsUI and GuildLevelsUI.ApplyPayload then
            GuildLevelsUI.ApplyPayload(nil)
        end
        return
    end
    local data = ParseStateLine(msg)
    if data then
        GuildLevelsSaved.last = data
        if GuildLevelsUI and GuildLevelsUI.ApplyPayload then
            GuildLevelsUI.ApplyPayload(data)
        end
    end
end

eventFrame:SetScript("OnEvent", function(self, event, ...)
    if event == "ADDON_LOADED" then
        local name = ...
        if name == ADDON_NAME then
            RegisterPrefixes()
        end
    elseif event == "PLAYER_LOGIN" then
        RequestServerSync()
    elseif event == "PLAYER_GUILD_UPDATE" then
        RequestServerSync()
    elseif event == "CHAT_MSG_WHISPER" then
        local msg = arg1
        OnAddonPayload(msg)
    elseif event == "CHAT_MSG_ADDON" then
        local prefix, body = arg1, arg2
        if prefix == MSG_PREFIX then
            OnAddonPayload(MSG_PREFIX .. "\t" .. tostring(body or ""))
        end
    end
end)

SLASH_GUILDLEVELS1 = "/guildlevelsui"
SLASH_GUILDLEVELS2 = "/glui"
SlashCmdList["GUILDLEVELS"] = function()
    if GuildLevelsUI and GuildLevelsUI.Toggle then
        GuildLevelsUI.Toggle()
    end
end

SLASH_GUILDLEVELSPULL1 = "/glpull"
SlashCmdList["GUILDLEVELSPULL"] = function()
    RequestServerSync()
end
