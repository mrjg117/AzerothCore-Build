--[[ Guild Levels — main panel ]]

GuildLevelsUI = GuildLevelsUI or {}

local perkRows = {}

local frame
local title
local levelText
local xpText
local bar
local perkScroll
local perkContent

local PERKS = {
    { lv = 2,  name = "Fast Track (rank 1)",  desc = "+5% experience from monsters and quests." },
    { lv = 4,  name = "Fast Track (rank 2)",  desc = "Additional +5% experience." },
    { lv = 5,  name = "Mount Up",             desc = "Increases mounted movement speed by 10%." },
    { lv = 6,  name = "Mr. Popularity (r1)",  desc = "+5% reputation from monsters and quests." },
    { lv = 8,  name = "Cash Flow (rank 1)",   desc = "Guild bank receives 5% of looted enemy money." },
    { lv = 10, name = "Working Overtime",     desc = "10% chance for an extra profession skill gain." },
    { lv = 14, name = "Cash Flow (rank 2)",   desc = "Guild bank receives 10% of looted enemy money." },
    { lv = 15, name = "Mr. Popularity (r2)",  desc = "Additional +5% reputation." },
    { lv = 16, name = "Reinforce",            desc = "Reduces death durability loss for equipped gear." },
    { lv = 18, name = "Honorable Mention",    desc = "Bonus honor from PvP kills." },
    { lv = 20, name = "Mobile Banking",       desc = "Grants a spell that summons a temporary guild bank." },
    { lv = 25, name = "Mass Resurrection",    desc = "Grants a spell that resurrects nearby dead guild group members." },
}

local function FormatNum(n)
    if n >= 1000000 then
        return string.format("%.2fM", n / 1000000)
    end
    if n >= 1000 then
        return string.format("%.1fk", n / 1000)
    end
    return tostring(math.floor(n))
end

local function BuildFrame()
    if frame then
        return
    end

    frame = CreateFrame("Frame", "GuildLevelsMainFrame", UIParent)
    frame:SetWidth(360)
    frame:SetHeight(420)
    frame:SetPoint("CENTER", UIParent, "CENTER", 0, 0)
    frame:SetBackdrop({
        bgFile = "Interface\\DialogFrame\\UI-DialogBox-Background",
        edgeFile = "Interface\\DialogFrame\\UI-DialogBox-Border",
        tile = true,
        tileSize = 32,
        edgeSize = 32,
        insets = { left = 8, right = 8, top = 8, bottom = 8 },
    })
    frame:SetBackdropColor(0, 0, 0, 0.92)
    frame:EnableMouse(true)
    frame:SetMovable(true)
    frame:RegisterForDrag("LeftButton")
    frame:SetScript("OnDragStart", function(self) self:StartMoving() end)
    frame:SetScript("OnDragStop", function(self) self:StopMovingOrSizing() end)
    frame:Hide()

    local close = CreateFrame("Button", nil, frame, "UIPanelCloseButton")
    close:SetPoint("TOPRIGHT", frame, "TOPRIGHT", -4, -4)

    title = frame:CreateFontString(nil, "OVERLAY", "GameFontNormalLarge")
    title:SetPoint("TOP", frame, "TOP", 0, -16)
    title:SetText("Guild Levels")

    levelText = frame:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
    levelText:SetPoint("TOPLEFT", frame, "TOPLEFT", 20, -48)
    levelText:SetWidth(320)
    levelText:SetJustifyH("LEFT")

    xpText = frame:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
    xpText:SetPoint("TOPLEFT", levelText, "BOTTOMLEFT", 0, -6)
    xpText:SetWidth(320)
    xpText:SetJustifyH("LEFT")

    bar = CreateFrame("StatusBar", nil, frame)
    bar:SetPoint("TOPLEFT", xpText, "BOTTOMLEFT", 0, -10)
    bar:SetWidth(320)
    bar:SetHeight(18)
    bar:SetStatusBarTexture("Interface\\TargetingFrame\\UI-StatusBar")
    bar:GetStatusBarTexture():SetHorizTile(false)
    bar:SetStatusBarColor(0.2, 0.8, 0.2)
    bar:SetMinMaxValues(0, 1)
    bar:SetValue(0)
    bar.bg = bar:CreateTexture(nil, "BACKGROUND")
    bar.bg:SetAllPoints(true)
    bar.bg:SetTexture(0.15, 0.15, 0.15, 0.8)

    local perkLabel = frame:CreateFontString(nil, "OVERLAY", "GameFontNormal")
    perkLabel:SetPoint("TOPLEFT", bar, "BOTTOMLEFT", 0, -18)
    perkLabel:SetText("Perks (Cataclysm-style)")

    perkScroll = CreateFrame("ScrollFrame", "GuildLevelsPerkScroll", frame, "UIPanelScrollFrameTemplate")
    perkScroll:SetPoint("TOPLEFT", perkLabel, "BOTTOMLEFT", 0, -8)
    perkScroll:SetWidth(310)
    perkScroll:SetHeight(240)

    perkContent = CreateFrame("Frame", nil, perkScroll)
    perkContent:SetWidth(290)
    perkContent:SetHeight(1)
    perkScroll:SetScrollChild(perkContent)
end

function GuildLevelsUI.Toggle()
    BuildFrame()
    if frame:IsShown() then
        frame:Hide()
    else
        frame:Show()
        GuildLevelsUI.ApplyPayload(GuildLevelsSaved and GuildLevelsSaved.last or nil)
    end
end

function GuildLevelsUI.ApplyPayload(data)
    BuildFrame()
    if not data then
        levelText:SetText("No guild progression (not in a guild or server disabled).")
        xpText:SetText("")
        bar:SetMinMaxValues(0, 1)
        bar:SetValue(0)
        return
    end

    title:SetText("Guild Levels — " .. (data.guildName ~= "" and data.guildName or "Guild"))

    levelText:SetText(string.format("Level |cffffffff%d|r / 25   (guild id %u)", data.level, data.guildId))

    local span = math.max(1, data.nextXp - data.prev)
    local seg = math.max(0, data.xp - data.prev)
    local pct = seg / span
    xpText:SetText(string.format(
        "XP %s / %s in this level   (today %s / week %s)",
        FormatNum(seg),
        FormatNum(span),
        FormatNum(data.today),
        FormatNum(data.week)
    ))

    bar:SetMinMaxValues(0, 1)
    bar:SetValue(math.min(1, math.max(0, pct)))

    local y = 0
    for i = 1, #PERKS do
        local row = perkRows[i]
        if not row then
            row = CreateFrame("Frame", nil, perkContent)
            perkRows[i] = row
            row:SetWidth(280)
            row:SetHeight(44)
            row.title = row:CreateFontString(nil, "OVERLAY", "GameFontNormal")
            row.title:SetPoint("TOPLEFT", row, "TOPLEFT", 4, -2)
            row.title:SetWidth(260)
            row.title:SetJustifyH("LEFT")
            row.desc = row:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
            row.desc:SetPoint("TOPLEFT", row.title, "BOTTOMLEFT", 0, -2)
            row.desc:SetWidth(270)
            row.desc:SetJustifyH("LEFT")
        end
        local p = PERKS[i]
        local unlocked = data.level >= p.lv
        local color = unlocked and "|cff88ff88" or "|cff888888"
        row.title:SetText(string.format("%sLv %d|r %s%s|r", color, p.lv, unlocked and "" or "(locked) ", p.name))
        row.desc:SetText(p.desc)
        row:ClearAllPoints()
        row:SetPoint("TOPLEFT", perkContent, "TOPLEFT", 0, -y)
        row:Show()
        y = y + 46
    end
    for j = #PERKS + 1, #perkRows do
        if perkRows[j] then
            perkRows[j]:Hide()
        end
    end
    perkContent:SetHeight(math.max(1, y + 4))
end
