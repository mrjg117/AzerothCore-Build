const CLASSES = [
 {
  "id": "deathknight",
  "name": "Death Knight",
  "cn": "死亡骑士",
  "trees": [
   {
    "name": "Blood",
    "cn": "鲜血",
    "bg": "assets/tree-bg/deathknight_blood.jpg",
    "talents": [
     {
      "name": "Butchery",
      "row": 0,
      "col": 0,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Whenever you kill an enemy that grants experience or honor, you generate up to 10 runic power.  In addition, you generate 1 runic power per 5 sec while in combat.",
       "Whenever you kill an enemy that grants experience or honor, you generate up to 20 runic power.  In addition, you generate 2 runic power per 5 sec while in combat."
      ],
      "cn": "杀戮",
      "cnDesc": [
       "你每次杀死一个可以为你提供经验值或荣誉值的目标之后，都可以获得10点符文能量值。另外，你在战斗中每5秒获得1点符文能量值。",
       "你每次杀死一个可以为你提供经验值或荣誉值的目标之后，都可以获得20点符文能量值。另外，你在战斗中每5秒获得2点符文能量值。"
      ]
     },
     {
      "name": "Subversion",
      "row": 0,
      "col": 1,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of Blood Strike, Scourge Strike, Heart Strike and Obliterate by 3%, and reduces threat generated while in Blood or Unholy Presence by 8%.",
       "Increases the critical strike chance of Blood Strike, Scourge Strike, Heart Strike and Obliterate by 6%, and reduces threat generated while in Blood or Unholy Presence by 16%.",
       "Increases the critical strike chance of Blood Strike, Scourge Strike, Heart Strike and Obliterate by 9%, and reduces threat generated while in Blood or Unholy Presence by 25%."
      ],
      "cn": "瓦解",
      "cnDesc": [
       "使鲜血打击、天灾打击、心脏打击和湮没的爆击几率提高3%，并使你在激活鲜血灵气或邪恶灵气的状态下造成的威胁值降低8%。",
       "使鲜血打击、天灾打击、心脏打击和湮没的爆击几率提高6%，并使你在激活鲜血灵气或邪恶灵气的状态下造成的威胁值降低16%。",
       "使鲜血打击、天灾打击、心脏打击和湮没的爆击几率提高9%，并使你在激活鲜血灵气或邪恶灵气的状态下造成的威胁值降低25%。"
      ]
     },
     {
      "name": "Blade Barrier",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 1% for the next 10 sec.",
       "Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 2% for the next 10 sec.",
       "Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 3% for the next 10 sec.",
       "Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 4% for the next 10 sec.",
       "Whenever your Blood Runes are on cooldown, you gain the Blade Barrier effect, which decreases damage taken by 5% for the next 10 sec."
      ],
      "cn": "利刃屏障",
      "cnDesc": [
       "当你的鲜血符文正在冷却时，你就可以获得利刃屏障效果，受到的伤害降低1%，持续10 秒。",
       "当你的鲜血符文正在冷却时，你就可以获得利刃屏障效果，受到的伤害降低2%，持续10 秒。",
       "当你的鲜血符文正在冷却时，你就可以获得利刃屏障效果，受到的伤害降低3%，持续10 秒。",
       "当你的鲜血符文正在冷却时，你就可以获得利刃屏障效果，受到的伤害降低4%，持续10 秒。",
       "当你的鲜血符文正在冷却时，你就可以获得利刃屏障效果，受到的伤害降低5%，持续10 秒。"
      ]
     },
     {
      "name": "Bladed Armor",
      "row": 1,
      "col": 0,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your attack power by 1 for every 180 armor value you have.",
       "Increases your attack power by 2 for every 180 armor value you have.",
       "Increases your attack power by 3 for every 180 armor value you have.",
       "Increases your attack power by 4 for every 180 armor value you have.",
       "Increases your attack power by 5 for every 180 armor value you have."
      ],
      "cn": "刀锋护甲",
      "cnDesc": [
       "你的每180点护甲值可以为你提供1点攻击强度加成。",
       "你的每180点护甲值可以为你提供2点攻击强度加成。",
       "你的每180点护甲值可以为你提供3点攻击强度加成。",
       "你的每180点护甲值可以为你提供4点攻击强度加成。",
       "你的每180点护甲值可以为你提供5点攻击强度加成。"
      ]
     },
     {
      "name": "Scent of Blood",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You have a 15% chance after dodging, parrying or taking  direct damage to gain the Scent of Blood effect, causing your next melee hit to generate 10 runic power.",
       "You have a 15% chance after dodging, parrying or taking  direct damage to gain the Scent of Blood effect, causing your next 2 melee hits to generate 10 runic power.",
       "You have a 15% chance after dodging, parrying or taking  direct damage to gain the Scent of Blood effect, causing your next 3 melee hits to generate 10 runic power."
      ],
      "cn": "血之气息",
      "cnDesc": [
       "在躲闪、招架攻击或受到直接伤害之后，你有15%的几率获得血之气息效果，使你的下一次近战攻击命中目标之后可以产生10点符文能量值。",
       "在躲闪、招架攻击或受到直接伤害之后，你有15%的几率获得血之气息效果，使你的下2次近战攻击命中目标之后可以产生10点符文能量值。",
       "在躲闪、招架攻击或受到直接伤害之后，你有15%的几率获得血之气息效果，使你的下3次近战攻击命中目标之后可以产生10点符文能量值。"
      ]
     },
     {
      "name": "Two-Handed Weapon Specialization",
      "row": 1,
      "col": 2,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires Polearms, Two-Handed Axes, Two-Handed Maces, Two-Handed Swords Increases the damage you deal with two-handed melee weapons by 2%.",
       "Requires Polearms, Two-Handed Axes, Two-Handed Maces, Two-Handed Swords Increases the damage you deal with two-handed melee weapons by 4%."
      ],
      "cn": "双手武器专精",
      "cnDesc": [
       "使你的双手近战武器伤害提高2%。",
       "使你的双手近战武器伤害提高4%。"
      ]
     },
     {
      "name": "Rune Trap",
      "row": 2,
      "col": 0,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Converts 1 Blood Rune into 10% of your maximum health."
      ],
      "cn": "符文分流",
      "cnDesc": [
       "1 鲜血<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>1 分钟冷却时间</th></tr></table>将1枚鲜血符文转化为你的生命值上限的10%。"
      ]
     },
     {
      "name": "Dark Conviction",
      "row": 2,
      "col": 1,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to critically hit with weapons, spells and abilities by 1%.",
       "Increases your chance to critically hit with weapons, spells and abilities by 2%.",
       "Increases your chance to critically hit with weapons, spells and abilities by 3%.",
       "Increases your chance to critically hit with weapons, spells and abilities by 4%.",
       "Increases your chance to critically hit with weapons, spells and abilities by 5%."
      ],
      "cn": "黑暗定罪",
      "cnDesc": [
       "使你的近战武器、法术和技能的爆击几率提高1%。",
       "使你的近战武器、法术和技能的爆击几率提高2%。",
       "使你的近战武器、法术和技能的爆击几率提高3%。",
       "使你的近战武器、法术和技能的爆击几率提高4%。",
       "使你的近战武器、法术和技能的爆击几率提高5%。"
      ]
     },
     {
      "name": "Death Rune Mastery",
      "row": 2,
      "col": 2,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Whenever you hit with Death Strike or Obliterate there is a 33% chance that the Frost and Unholy Runes will become Death Runes when they activate. Death Runes count as a Blood, Frost or Unholy Rune.",
       "Whenever you hit with Death Strike or Obliterate there is a 66% chance that the Frost and Unholy Runes will become Death Runes when they activate.  Death Runes count as a Blood, Frost or Unholy Rune.",
       "Whenever you hit with Death Strike or Obliterate there is a 100% chance that the Frost and Unholy Runes will become Death Runes when they activate.  Death Runes count as a Blood, Frost or Unholy Rune."
      ],
      "cn": "死亡符文掌握",
      "cnDesc": [
       "每当你的灵界打击或湮没技能命中目标，就有33%的几率使冰霜符文或邪恶符文在激活时转化为死亡符文。死亡符文可以作为鲜血符文、冰霜符文或邪恶符文使用。",
       "每当你的灵界打击或湮没技能命中目标，就有66%的几率使冰霜符文或邪恶符文在激活时转化为死亡符文。死亡符文可以作为鲜血符文、冰霜符文或邪恶符文使用。",
       "每当你的灵界打击或湮没技能命中目标，就有100%的几率使冰霜符文或邪恶符文在激活时转化为死亡符文。死亡符文可以作为鲜血符文、冰霜符文或邪恶符文使用。"
      ]
     },
     {
      "name": "Improved Rune Tap",
      "row": 3,
      "col": 0,
      "maxRank": 3,
      "req": 15,
      "prereq": "Rune Trap",
      "prereqRank": 1,
      "desc": [
       "Increases the health provided by Rune Tap by 33% and lowers its cooldown by 10 sec.",
       "Increases the health provided by Rune Tap by 66% and lowers its cooldown by 20 sec.",
       "Increases the health provided by Rune Tap by 100% and lowers its cooldown by 30 sec."
      ],
      "cn": "强化符文分流",
      "cnDesc": [
       "符文分流技能恢复的生命值提高33%，冷却时间缩短10秒。",
       "符文分流技能恢复的生命值提高66%，冷却时间缩短20秒。",
       "符文分流技能恢复的生命值提高100%，冷却时间缩短30秒。"
      ]
     },
     {
      "name": "Spell Deflection",
      "row": 3,
      "col": 2,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You have a chance equal to your Parry chance of taking 15% less damage from a direct damage spell.",
       "You have a chance equal to your Parry chance of taking 30% less damage from a direct damage spell.",
       "You have a chance equal to your Parry chance of taking 45% less damage from a direct damage spell."
      ],
      "cn": "法术偏斜",
      "cnDesc": [
       "你有一定几率（等同于你的招架几率）在被直接伤害法术攻击时承受的伤害降低15%。",
       "你有一定几率（等同于你的招架几率）在被直接伤害法术攻击时承受的伤害降低30%。",
       "你有一定几率（等同于你的招架几率）在被直接伤害法术攻击时承受的伤害降低45%。"
      ]
     },
     {
      "name": "Vendetta",
      "row": 3,
      "col": 3,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Heals you for up to 2% of your maximum health whenever you kill a target that yields experience or honor.",
       "Heals you for up to 4% of your maximum health whenever you kill a target that yields experience or honor.",
       "Heals you for up to 6% of your maximum health whenever you kill a target that yields experience or honor."
      ],
      "cn": "仇杀",
      "cnDesc": [
       "当你杀死一个可以为你提供经验值或荣誉值的目标之后，为你恢复最多相当于你的生命值上限2%的生命值。",
       "当你杀死一个可以为你提供经验值或荣誉值的目标之后，为你恢复最多相当于你的生命值上限4%的生命值。",
       "当你杀死一个可以为你提供经验值或荣誉值的目标之后，为你恢复最多相当于你的生命值上限6%的生命值。"
      ]
     },
     {
      "name": "Bloody Strikes",
      "row": 4,
      "col": 0,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of Blood Strike by 5% and Heart Strike by 15%, and increases the damage of Blood Boil by 10%.",
       "Increases the damage of Blood Strike by 10% and Heart Strike by 30%, and increases the damage of Blood Boil by 20%.",
       "Increases the damage of Blood Strike by 15% and Heart Strike by 45%, and increases the damage of Blood Boil by 30%."
      ],
      "cn": "血腥打击",
      "cnDesc": [
       "使你的鲜血打击造成的伤害提高5%，心脏打击造成的伤害提高15%，血液沸腾造成的伤害提高10%。",
       "使你的鲜血打击造成的伤害提高10%，心脏打击造成的伤害提高30%，血液沸腾造成的伤害提高20%。",
       "使你的鲜血打击造成的伤害提高15%，心脏打击造成的伤害提高45%，血液沸腾造成的伤害提高30%。"
      ]
     },
     {
      "name": "Veteran of the Third War",
      "row": 4,
      "col": 2,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Strength by 2%, your Stamina by 1%, and your expertise by 2.",
       "Increases your total Strength by 4%, your Stamina by 2%, and your expertise by 4.",
       "Increases your total Strength by 6%, your Stamina by 3%, and your expertise by 6."
      ],
      "cn": "战争精英",
      "cnDesc": [
       "使你的力量总值提高2%、耐力总值提高1%、精准提高2。",
       "使你的力量总值提高4%、耐力总值提高2%、精准提高4。",
       "使你的力量总值提高6%、耐力总值提高3%、精准提高6。"
      ]
     },
     {
      "name": "Mark of Blood",
      "row": 4,
      "col": 3,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Place a Mark of Blood on an enemy. Whenever the marked enemy deals damage to a target, that target is healed for 4% of its maximum health. Lasts for 20 sec or up to 20 hits."
      ],
      "cn": "鲜血印记",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>1 鲜血</td><th>30码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>为一个敌人施加鲜血印记。带有鲜血印记的敌人每次对一个目标造成伤害，该目标就恢复相当于自身生命值上限4%的生命值。持续20 秒或被击中20次。"
      ]
     },
     {
      "name": "Bloody Vengeance",
      "row": 5,
      "col": 1,
      "maxRank": 3,
      "req": 25,
      "prereq": "Dark Conviction",
      "prereqRank": 5,
      "desc": [
       "Gives you a 1% bonus to physical damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.",
       "Gives you a 2% bonus to physical damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.",
       "Gives you a 3% bonus to physical damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times."
      ],
      "cn": "鲜血复仇",
      "cnDesc": [
       "你的武器攻击、法术或技能打出爆击之后，你在30 秒内造成的物理伤害提高1%。这个效果可以叠加最多3次。",
       "你的武器攻击、法术或技能打出爆击之后，你在30 秒内造成的物理伤害提高2%。这个效果可以叠加最多3次。",
       "你的武器攻击、法术或技能打出爆击之后，你在30 秒内造成的物理伤害提高3%。这个效果可以叠加最多3次。"
      ]
     },
     {
      "name": "Abomination's Might",
      "row": 5,
      "col": 2,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the attack power by 5% of party and raid members within 100 yards.  Also increases your total Strength by 1%.",
       "Increases the attack power by 10% of party and raid members within 100 yards.  Also increases your total Strength by 2%."
      ],
      "cn": "憎恶之力",
      "cnDesc": [
       "使周围半径100码范围内的团队成员的攻击强度提高5%。另外，你的力量总值提高1%。",
       "使周围半径100码范围内的团队成员的攻击强度提高10%。另外，你的力量总值提高2%。"
      ]
     },
     {
      "name": "Bloodworms",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your weapon hits have a 3% chance to cause the target to spawn 2-4 Bloodworms.  Bloodworms attack your enemies, healing you as they do damage for 20 sec or until killed.",
       "Your weapon hits have a 6% chance to cause the target to spawn 2-4 Bloodworms.  Bloodworms attack your enemies, healing you as they do damage for 20 sec or until killed.",
       "Your weapon hits have a 9% chance to cause the target to spawn 2-4 Bloodworms.  Bloodworms attack your enemies, healing you as they do damage for 20 sec or until killed."
      ],
      "cn": "血虫",
      "cnDesc": [
       "你的武器攻击命中目标之后有3%的几率使目标身上钻出2到4条血虫。血虫会攻击你的敌人，并将它们造成的伤害转化为你的生命值，最多持续20秒，或者直到被杀掉。",
       "你的武器攻击命中目标之后有6%的几率使目标身上钻出2到4条血虫。血虫会攻击你的敌人，并将它们造成的伤害转化为你的生命值，最多持续20秒，或者直到被杀掉。",
       "你的武器攻击命中目标之后有9%的几率使目标身上钻出2到4条血虫。血虫会攻击你的敌人，并将它们造成的伤害转化为你的生命值，最多持续20秒，或者直到被杀掉。"
      ]
     },
     {
      "name": "Hysteria",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Induces a friendly unit into a killing frenzy for 30 sec. The target is Enraged, which increases their physical damage by 20%, but causes them to lose health equal to 1% of their maximum health every second."
      ],
      "cn": "狂乱",
      "cnDesc": [
       "30码范围<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>使一个友方单位陷入疯狂，持续30 秒。目标获得激怒效果，物理伤害能力提高20%，但是每秒受到相当于该单位生命值上限1%的伤害。"
      ]
     },
     {
      "name": "Improved Blood Presence",
      "row": 6,
      "col": 2,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While in Frost Presence or Unholy Presence, you retain 2% healing from Blood Presence, and healing done to you is increased by 5% in Blood Presence.",
       "While in Frost Presence or Unholy Presence, you retain 4% healing from Blood Presence, and healing done to you is increased by 10% in Blood Presence."
      ],
      "cn": "强化鲜血灵气",
      "cnDesc": [
       "在激活冰霜灵气或邪恶灵气的状态下，你可以保留鲜血灵气所提供的治疗效果的2%。在激活鲜血灵气的状态下，你受到的治疗量提高5%。",
       "在激活冰霜灵气或邪恶灵气的状态下，你可以保留鲜血灵气所提供的治疗效果的4%。在激活鲜血灵气的状态下，你受到的治疗量提高10%。"
      ]
     },
     {
      "name": "Improved Death Strike",
      "row": 7,
      "col": 0,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of your Death Strike by 15%, increases its critical strike chance by 3%, and increases the healing granted by 25%.",
       "Increases the damage of your Death Strike by 30%, increases its critical strike chance by 6%, and increases the healing granted by 50%."
      ],
      "cn": "强化灵界打击",
      "cnDesc": [
       "使你的灵界打击造成的伤害提高15%，爆击几率提高3%，获得的治疗效果提高25%。",
       "使你的灵界打击造成的伤害提高30%，爆击几率提高6%，获得的治疗效果提高50%。"
      ]
     },
     {
      "name": "Sudden Doom",
      "row": 7,
      "col": 1,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Blood Strikes and Heart Strikes have a 5% chance to launch a free Death Coil at your target.",
       "Your Blood Strikes and Heart Strikes have a 10% chance to launch a free Death Coil at your target.",
       "Your Blood Strikes and Heart Strikes have a 15% chance to launch a free Death Coil at your target."
      ],
      "cn": "末日突降",
      "cnDesc": [
       "你的鲜血打击和心脏打击有5%的几率对目标施放一个不消耗符文能量的凋零缠绕法术。",
       "你的鲜血打击和心脏打击有10%的几率对目标施放一个不消耗符文能量的凋零缠绕法术。",
       "你的鲜血打击和心脏打击有15%的几率对目标施放一个不消耗符文能量的凋零缠绕法术。"
      ]
     },
     {
      "name": "Vampiric Blood",
      "row": 7,
      "col": 2,
      "maxRank": 1,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Temporarily grants the Death Knight 15% of maximum health and increases the amount of health generated through spells and effects by 35% for 10 sec. After the effect expires, the health is lost."
      ],
      "cn": "吸血鬼之血",
      "cnDesc": [
       "1 鲜血<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>1 分钟冷却时间</th></tr></table>使死亡骑士暂时获得15%的生命总值并使你通过法术和魔法效果恢复的生命值提高35%，持续10 秒。在效果解除之后，这些生命值会被扣除。"
      ]
     },
     {
      "name": "Will of the Necropolis",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Damage that would take you below 35% health or taken while you are at 35% health is reduced by 5%.",
       "Damage that would take you below 35% health or taken while you are at 35% health is reduced by 10%.",
       "Damage that would take you below 35% health or taken while you are at 35% health is reduced by 15%."
      ],
      "cn": "大墓地的意志",
      "cnDesc": [
       "如果你受到的一次伤害会导致你的生命值低于35%，或者在你的生命值低于35%时发生，则该次攻击伤害降低5%。",
       "如果你受到的一次伤害会导致你的生命值低于35%，或者在你的生命值低于35%时发生，则该次攻击伤害降低10%。",
       "如果你受到的一次伤害会导致你的生命值低于35%，或者在你的生命值低于35%时发生，则该次攻击伤害降低15%。"
      ]
     },
     {
      "name": "Heart Strike",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Instantly strike the target and his nearest ally, causing 50% weapon damage plus 125 on the primary target, and 25% weapon damage plus 63 on the secondary target.  Each target takes 10% additional damage for each of your diseases active on that target."
      ],
      "cn": "心脏打击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>1 鲜血</td><th>近战范围</th></tr></table>瞬发立即攻击目标及最靠近目标的敌方单位，对主要目标造成50%的武器伤害外加125点额外伤害，对次要目标造成25%的武器伤害外加63点额外伤害。你施加于目标身上的每个疾病效果还可以使你对其造成的伤害总量提高10%<!--sp58616:0-->。<!--sp58616-->"
      ]
     },
     {
      "name": "Might of Mograine",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike damage bonus of your Blood Boil, Blood Strike, Death Strike, and Heart Strike abilities by 15%.",
       "Increases the critical strike damage bonus of your Blood Boil, Blood Strike, Death Strike, and Heart Strike abilities by 30%.",
       "Increases the critical strike damage bonus of your Blood Boil, Blood Strike, Death Strike, and Heart Strike abilities by 45%."
      ],
      "cn": "莫格莱尼之力",
      "cnDesc": [
       "使你的血液沸腾、鲜血打击、灵界打击和心脏打击技能的爆击伤害加成提高15%。",
       "使你的血液沸腾、鲜血打击、灵界打击和心脏打击技能的爆击伤害加成提高30%。",
       "使你的血液沸腾、鲜血打击、灵界打击和心脏打击技能的爆击伤害加成提高45%。"
      ]
     },
     {
      "name": "Blood Gorged",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you are above 75% health, you deal 2% more damage.  In addition, your attacks ignore up to 2% of your opponent's armor at all times.",
       "When you are above 75% health, you deal 4% more damage.  In addition, your attacks ignore up to 4% of your opponent's armor at all times.",
       "When you are above 75% health, you deal 6% more damage.  In addition, your attacks ignore up to 6% of your opponent's armor at all times.",
       "When you are above 75% health, you deal 8% more damage.  In addition, your attacks ignore up to 8% of your opponent's armor at all times.",
       "When you are above 75% health, you deal 10% more damage.  In addition, your attacks ignore up to 10% of your opponent's armor at all times."
      ],
      "cn": "啜血",
      "cnDesc": [
       "当你的生命值高于75%时，你所造成的伤害提高2%。另外，你的攻击可以忽略目标的最多2%的护甲值。",
       "当你的生命值高于75%时，你所造成的伤害提高4%。另外，你的攻击可以忽略目标的最多4%的护甲值。",
       "当你的生命值高于75%时，你所造成的伤害提高6%。另外，你的攻击可以忽略目标的最多6%的护甲值。",
       "当你的生命值高于75%时，你所造成的伤害提高8%。另外，你的攻击可以忽略目标的最多8%的护甲值。",
       "当你的生命值高于75%时，你所造成的伤害提高10%。另外，你的攻击可以忽略目标的最多10%的护甲值。"
      ]
     },
     {
      "name": "Dancing Rune Weapon",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Summons a second rune weapon that fights on its own for 12 sec, doing the same attacks as the Death Knight but for 50% reduced damage."
      ],
      "cn": "符文刃舞",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>60 符文能量</td><th>30码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>1 分钟冷却时间</th></tr></table>召唤一把符文武器独立作战，进行与死亡骑士相同的攻击动作，但是只有50%的伤害。符文武器至少持续12 秒。"
      ]
     }
    ],
    "sprite": "assets/sprites/deathknight_blood.webp"
   },
   {
    "name": "Frost",
    "cn": "冰霜",
    "bg": "assets/tree-bg/deathknight_frost.jpg",
    "talents": [
     {
      "name": "Improved Icy Touch",
      "row": 0,
      "col": 0,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "20 yd range Your Icy Touch does an additional 5% damage and your Frost Fever reduces melee and ranged attack speed by an additional 2%.",
       "20 yd range Your Icy Touch does an additional 10% damage and your Frost Fever reduces melee and ranged attack speed by an additional 4%.",
       "20 yd range Your Icy Touch does an additional 15% damage and your Frost Fever reduces melee and ranged attack speed by an additional 6%."
      ],
      "cn": "强化冰冷触摸",
      "cnDesc": [
       "你的冰冷触摸额外造成5%伤害，且你的冰霜疫病使近战和远程攻击速度额外降低2%。",
       "你的冰冷触摸额外造成10%伤害，且你的冰霜疫病使近战和远程攻击速度额外降低4%。",
       "你的冰冷触摸额外造成15%伤害，且你的冰霜疫病使近战和远程攻击速度额外降低6%。"
      ]
     },
     {
      "name": "Runic Power Mastery",
      "row": 0,
      "col": 1,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your maximum Runic Power by 15.",
       "Increases your maximum Runic Power by 30."
      ],
      "cn": "符文能量掌握",
      "cnDesc": [
       "使你的最大符文能量提高15。",
       "使你的最大符文能量提高30。"
      ]
     },
     {
      "name": "Toughness",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your armor value from items by 2% and reduces the duration of all movement slowing effects by 6%.",
       "Increases your armor value from items by 4% and reduces the duration of all movement slowing effects by 12%.",
       "Increases your armor value from items by 6% and reduces the duration of all movement slowing effects by 18%.",
       "Increases your armor value from items by 8% and reduces the duration of all movement slowing effects by 24%.",
       "Increases your armor value from items by 10% and reduces the duration of all movement slowing effects by 30%."
      ],
      "cn": "坚韧",
      "cnDesc": [
       "使你因装备而获得的护甲值提高2%，所有移动限制效果的持续时间缩短6%。",
       "使你因装备而获得的护甲值提高4%，所有移动限制效果的持续时间缩短12%。",
       "使你因装备而获得的护甲值提高6%，所有移动限制效果的持续时间缩短18%。",
       "使你因装备而获得的护甲值提高8%，所有移动限制效果的持续时间缩短24%。",
       "使你因装备而获得的护甲值提高10%，所有移动限制效果的持续时间缩短30%。"
      ]
     },
     {
      "name": "Icy Reach",
      "row": 1,
      "col": 1,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of your Icy Touch,  Chains of Ice and Howling Blast by 5 yards.",
       "Increases the range of your Icy Touch, Chains of Ice and Howling Blast by 10 yards."
      ],
      "cn": "寒冰延伸",
      "cnDesc": [
       "使你冰冷触摸、寒冰锁链和凛风冲击的射程提高5码。",
       "使你冰冷触摸、寒冰锁链和凛风冲击的射程提高10码。"
      ]
     },
     {
      "name": "Black Ice",
      "row": 1,
      "col": 2,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Frost and Shadow damage by 2%.",
       "Increases your Frost and Shadow damage by 4%.",
       "Increases your Frost and Shadow damage by 6%.",
       "Increases your Frost and Shadow damage by 8%.",
       "Increases your Frost and Shadow damage by 10%."
      ],
      "cn": "黑冰",
      "cnDesc": [
       "使你的冰霜和暗影伤害提高2%。",
       "使你的冰霜和暗影伤害提高4%。",
       "使你的冰霜和暗影伤害提高6%。",
       "使你的冰霜和暗影伤害提高8%。",
       "使你的冰霜和暗影伤害提高10%。"
      ]
     },
     {
      "name": "Nerves of Cold Steel",
      "row": 1,
      "col": 3,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to hit with one-handed melee weapons by 1% and increases the damage done by your offhand weapon by 8%.",
       "Increases your chance to hit with one-handed melee weapons by 2% and increases the damage done by your offhand weapon by 16%.",
       "Increases your chance to hit with one-handed melee weapons by 3% and increases the damage done by your offhand weapon by 25%."
      ],
      "cn": "坚若精钢",
      "cnDesc": [
       "使你单手近战武器的命中几率提高1%，并使副手武器造成的伤害提高8%。",
       "使你单手近战武器的命中几率提高2%，并使副手武器造成的伤害提高16%。",
       "使你单手近战武器的命中几率提高3%，并使副手武器造成的伤害提高25%。"
      ]
     },
     {
      "name": "Icy Talons",
      "row": 2,
      "col": 0,
      "maxRank": 5,
      "req": 10,
      "prereq": "Improved Icy Touch",
      "prereqRank": 3,
      "desc": [
       "20 yd range You leech heat from victims of your Frost Fever, so that when their melee attack speed is reduced, yours increases by 4% for the next 20 sec.",
       "20 yd range You leech heat from victims of your Frost Fever, so that when their melee attack speed is reduced, yours increases by 8% for the next 20 sec.",
       "20 yd range You leech heat from victims of your Frost Fever, so that when their melee attack speed is reduced, yours increases by 12% for the next 20 sec.",
       "20 yd range You leech heat from victims of your Frost Fever, so that when their melee attack speed is reduced, yours increases by 16% for the next 20 sec.",
       "20 yd range You leech heat from victims of your Frost Fever, so that when their melee attack speed is reduced, yours increases by 20% for the next 20 sec."
      ],
      "cn": "冰冷之爪",
      "cnDesc": [
       "你从冰霜疫病的受害者身上汲取热量，当其近战攻击速度降低时，你的攻击速度在接下来20秒内提高4%。",
       "你从冰霜疫病的受害者身上汲取热量，当其近战攻击速度降低时，你的攻击速度在接下来20秒内提高8%。",
       "你从冰霜疫病的受害者身上汲取热量，当其近战攻击速度降低时，你的攻击速度在接下来20秒内提高12%。",
       "你从冰霜疫病的受害者身上汲取热量，当其近战攻击速度降低时，你的攻击速度在接下来20秒内提高16%。",
       "你从冰霜疫病的受害者身上汲取热量，当其近战攻击速度降低时，你的攻击速度在接下来20秒内提高20%。"
      ]
     },
     {
      "name": "Lichborne",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Draw upon unholy energy to become undead for 10 sec. While undead, you are immune to Charm, Fear and Sleep effects."
      ],
      "cn": "巫妖之躯",
      "cnDesc": [
       "汲取邪恶能量，变为亡灵，持续10秒。处于亡灵形态时，你免疫魅惑、恐惧和沉睡效果。"
      ]
     },
     {
      "name": "Annihilation",
      "row": 2,
      "col": 2,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your melee special abilities by 1%.  In addition, there is a 33% chance that your Obliterate will do its damage without consuming diseases.",
       "Increases the critical strike chance of your melee special abilities by 2%.  In addition, there is a 66% chance that your Obliterate will do its damage without consuming diseases.",
       "Increases the critical strike chance of your melee special abilities by 3%.  In addition, there is a 100% chance that your Obliterate will do its damage without consuming diseases."
      ],
      "cn": "灭绝",
      "cnDesc": [
       "使你的近战特殊攻击的爆击几率提高1%。另外，你的湮没技能有33%的几率在造成伤害时不消耗疾病效果。",
       "使你的近战特殊攻击的爆击几率提高2%。另外，你的湮没技能有66%的几率在造成伤害时不消耗疾病效果。",
       "使你的近战特殊攻击的爆击几率提高3%。另外，你的湮没技能有100%的几率在造成伤害时不消耗疾病效果。"
      ]
     },
     {
      "name": "Killing Machine",
      "row": 3,
      "col": 1,
      "maxRank": 5,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike.",
       "Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike.  Effect occurs more often than Killing Machine (Rank 1).",
       "Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike.  Effect occurs more often than Killing Machine (Rank 2).",
       "Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike.  Effect occurs more often than Killing Machine (Rank 3).",
       "Your melee attacks have a chance to make your next Icy Touch, Howling Blast or Frost Strike a critical strike.  Effect occurs more often than Killing Machine (Rank 4)."
      ],
      "cn": "杀戮机器",
      "cnDesc": [
       "你的近战攻击有几率使你的下一个冰冷触摸、凛风冲击或冰霜打击造成暴击。",
       "你的近战攻击有几率使你的下一个冰冷触摸、凛风冲击或冰霜打击造成暴击。触发几率高于第1层。",
       "你的近战攻击有几率使你的下一个冰冷触摸、凛风冲击或冰霜打击造成暴击。触发几率高于第2层。",
       "你的近战攻击有几率使你的下一个冰冷触摸、凛风冲击或冰霜打击造成暴击。触发几率高于第3层。",
       "你的近战攻击有几率使你的下一个冰冷触摸、凛风冲击或冰霜打击造成暴击。触发几率高于第4层。"
      ]
     },
     {
      "name": "Chill of the Grave",
      "row": 3,
      "col": 2,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Chains of Ice, Howling Blast, Icy Touch and Obliterate generate 2.5 additional runic power.",
       "Your Chains of Ice, Howling Blast, Icy Touch and Obliterate generate 5 additional runic power."
      ],
      "cn": "墓穴之寒",
      "cnDesc": [
       "你的寒冰锁链、凛风冲击、冰冷触摸和湮没额外产生2.5点符文能量。",
       "你的寒冰锁链、凛风冲击、冰冷触摸和湮没额外产生5点符文能量。"
      ]
     },
     {
      "name": "Endless Winter",
      "row": 3,
      "col": 3,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your strength is increased by 2% and the cost of your Mind Freeze is reduced to 10 runic power.",
       "Your strength is increased by 4% and your Mind Freeze no longer costs runic power."
      ],
      "cn": "无尽寒冬",
      "cnDesc": [
       "你的力量提高2%，且思维冻结的消耗降为10点符文能量。",
       "你的力量提高4%，且思维冻结不再消耗符文能量。"
      ]
     },
     {
      "name": "Frigid Dreaplate",
      "row": 4,
      "col": 1,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the chance melee attacks will hit you by 1%.",
       "Reduces the chance melee attacks will hit you by 2%.",
       "Reduces the chance melee attacks will hit you by 3%."
      ],
      "cn": "严寒邪铠",
      "cnDesc": [
       "你被近战攻击命中的几率降低1%。",
       "你被近战攻击命中的几率降低2%。",
       "你被近战攻击命中的几率降低3%。"
      ]
     },
     {
      "name": "Glacier Rot",
      "row": 4,
      "col": 2,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Diseased enemies take 7% more damage from your Icy Touch, Howling Blast and Frost Strike.",
       "Diseased enemies take 13% more damage from your Icy Touch, Howling Blast and Frost Strike.",
       "Diseased enemies take 20% more damage from your Icy Touch, Howling Blast and Frost Strike."
      ],
      "cn": "冰川腐烂",
      "cnDesc": [
       "你的冰冷触摸、凛风冲击和冰霜打击对带有疾病效果的敌人造成的伤害提高7%。",
       "你的冰冷触摸、凛风冲击和冰霜打击对带有疾病效果的敌人造成的伤害提高13%。",
       "你的冰冷触摸、凛风冲击和冰霜打击对带有疾病效果的敌人造成的伤害提高20%。"
      ]
     },
     {
      "name": "Deathchill",
      "row": 4,
      "col": 3,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When activated, makes your next Icy Touch, Howling Blast, Frost Strike or Obliterate a critical hit if used within 30 sec."
      ],
      "cn": "黑锋冰寒",
      "cnDesc": [
       "激活之后，你在30秒内使用的下一次冰冷触摸、凛风冲击、冰霜打击或湮没技能必定爆击。"
      ]
     },
     {
      "name": "Improved Icy Talons",
      "row": 5,
      "col": 0,
      "maxRank": 1,
      "req": 25,
      "prereq": "Icy Talons",
      "prereqRank": 5,
      "desc": [
       "Increases the melee haste of all party and raid members within 100 yds by 20% and your haste by an additional 5%."
      ],
      "cn": "强化冰冷之爪",
      "cnDesc": [
       "使100码内所有小队和团队成员的近战急速提高20%，你的急速额外提高5%。"
      ]
     },
     {
      "name": "Merciless Combat",
      "row": 5,
      "col": 1,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Icy Touch, Howling Blast, Obliterate and Frost Strike do an additional 6% damage when striking targets with less than 35% health.",
       "Your Icy Touch, Howling Blast, Obliterate and Frost Strike do an additional 12% damage when striking targets with less than 35% health."
      ],
      "cn": "无情战斗",
      "cnDesc": [
       "你的冰冷触摸、凛风冲击、湮没和冰霜打击对生命值少于35%的目标所造成的伤害提高6%。",
       "你的冰冷触摸、凛风冲击、湮没和冰霜打击对生命值少于35%的目标所造成的伤害提高12%。"
      ]
     },
     {
      "name": "Rime",
      "row": 5,
      "col": 2,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your Icy Touch and Obliterate by 5% and casting Obliterate has a 5% chance to reset the cooldown on Howling Blast and cause your next Howling Blast to consume no runes.",
       "Increases the critical strike chance of your Icy Touch and Obliterate by 10% and casting Obliterate has a 10% chance to reset the cooldown on Howling Blast and cause your next Howling Blast to consume no runes.",
       "Increases the critical strike chance of your Icy Touch and Obliterate by 15% and casting Obliterate has a 15% chance to reset the cooldown on Howling Blast and cause your next Howling Blast to consume no runes."
      ],
      "cn": "白霜",
      "cnDesc": [
       "使你的冰冷触摸和湮没的爆击几率提高5%，施放湮没之后有5%的几率重置凛风冲击的冷却时间，并且使你的下一个凛风冲击不消耗符文。",
       "使你的冰冷触摸和湮没的爆击几率提高10%，施放湮没之后有10%的几率重置凛风冲击的冷却时间，并且使你的下一个凛风冲击不消耗符文。",
       "使你的冰冷触摸和湮没的爆击几率提高15%，施放湮没之后有15%的几率重置凛风冲击的冷却时间，并且使你的下一个凛风冲击不消耗符文。"
      ]
     },
     {
      "name": "Chilblains",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Victims of your Frost Fever disease are Chilled, reducing movement speed by 15% for 10 sec.",
       "Victims of your Frost Fever disease are Chilled, reducing movement speed by 30% for 10 sec.",
       "Victims of your Frost Fever disease are Chilled, reducing movement speed by 50% for 10 sec."
      ],
      "cn": "冻疮",
      "cnDesc": [
       "冰霜疫病的受害者被减速，移动速度降低15%，持续10秒。",
       "冰霜疫病的受害者被减速，移动速度降低30%，持续10秒。",
       "冰霜疫病的受害者被减速，移动速度降低50%，持续10秒。"
      ]
     },
     {
      "name": "Hungering Cold",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Purges the earth around the Death Knight of all heat.  Enemies within 10 yards are trapped in ice, preventing them from performing any action for 10 sec and infecting them with Frost Fever.  Enemies are considered Frozen, but any damage other than diseases will break the ice."
      ],
      "cn": "饥饿之寒",
      "cnDesc": [
       "驱散死亡骑士周围大地的一切热量。10码内的敌人被冰封，无法行动10秒，并感染冰霜疫病。敌人被视为被冻结，但除疾病外的任何伤害都会打破冰封。"
      ]
     },
     {
      "name": "Improved Frost Presence",
      "row": 6,
      "col": 2,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While in Blood Presence or Unholy Presence, you retain 4% stamina from Frost Presence, and damage done to you is decreased by an additional 1% in Frost Presence.",
       "While in Blood Presence or Unholy Presence, you retain 8% stamina from Frost Presence, and damage done to you is decreased by an additional 2% in Frost Presence."
      ],
      "cn": "强化冰霜灵气",
      "cnDesc": [
       "处于鲜血灵气或邪恶灵气时，你保留冰霜灵气4%的耐力，且在冰霜灵气下受到的伤害额外降低1%。",
       "处于鲜血灵气或邪恶灵气时，你保留冰霜灵气8%的耐力，且在冰霜灵气下受到的伤害额外降低2%。"
      ]
     },
     {
      "name": "Threat of Tassarian",
      "row": 7,
      "col": 0,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When dual-wielding, your Death Strikes, Obliterates, Plague Strikes, Rune Strikes, Blood Strikes and Frost Strikes have a 30% chance to also deal damage with your offhand weapon.",
       "When dual-wielding, your Death Strikes, Obliterates, Plague Strikes, Rune Strikes, Blood Strikes and Frost Strikes have a 60% chance to also deal damage with your offhand weapon.",
       "When dual-wielding, your Death Strikes, Obliterates, Plague Strikes, Rune Strikes, Blood Strikes and Frost Strikes have a 100% chance to also deal damage with your offhand weapon."
      ],
      "cn": "萨萨里安的威胁",
      "cnDesc": [
       "双持时，你的灵界打击、湮没、暗影打击、符文打击、鲜血打击和冰霜打击有30%几率同时用副手武器造成伤害。",
       "双持时，你的灵界打击、湮没、暗影打击、符文打击、鲜血打击和冰霜打击有60%几率同时用副手武器造成伤害。",
       "双持时，你的灵界打击、湮没、暗影打击、符文打击、鲜血打击和冰霜打击有100%几率同时用副手武器造成伤害。"
      ]
     },
     {
      "name": "Blood of the North",
      "row": 7,
      "col": 1,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases Blood Strike and Frost Strike damage by 3%.  In addition, whenever you hit with Blood Strike or Pestilence there is a 30% chance that the Blood Rune will become a Death Rune when it activates.  Death Runes count as a Blood, Frost or Unholy Rune.",
       "Increases Blood Strike and Frost Strike damage by 6%.  In addition, whenever you hit with Blood Strike or Pestilence there is a 60% chance that the Blood Rune will become a Death Rune when it activates.  Death Runes count as a Blood, Frost or Unholy Rune.",
       "Increases Blood Strike and Frost Strike damage by 10%.  In addition, whenever you hit with Blood Strike or Pestilence there is a 100% chance that the Blood Rune will become a Death Rune when it activates.  Death Runes count as a Blood, Frost or Unholy Rune."
      ],
      "cn": "北地之血",
      "cnDesc": [
       "鲜血打击和冰霜打击的伤害提高3%。每当你的鲜血打击或传染技能命中目标，就有30%的几率使你的鲜血符文在激活时变成死亡符文。死亡符文可以作为鲜血符文、冰霜符文或邪恶符文使用。",
       "鲜血打击和冰霜打击的伤害提高6%。每当你的鲜血打击或传染技能命中目标，就有60%的几率使你的鲜血符文在激活时变成死亡符文。死亡符文可以作为鲜血符文、冰霜符文或邪恶符文使用。",
       "鲜血打击和冰霜打击的伤害提高10%。每当你的鲜血打击或传染技能命中目标，就有100%的几率使你的鲜血符文在激活时变成死亡符文。死亡符文可以作为鲜血符文、冰霜符文或邪恶符文使用。"
      ]
     },
     {
      "name": "Unbreakable Armor",
      "row": 7,
      "col": 2,
      "maxRank": 1,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reinforces your armor with a thick coat of ice, increasing your armor by 25% and increasing your Strength by 20% for 20 sec."
      ],
      "cn": "铜墙铁壁",
      "cnDesc": [
       "以厚重的寒冰覆盖盔甲，使你的护甲值提高25%，力量提高20%，持续20秒。"
      ]
     },
     {
      "name": "Acclimation",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you are hit by a spell, you have a 10% chance to boost your resistance to that type of magic for 18 sec.  Stacks up to 3 times.",
       "When you are hit by a spell, you have a 20% chance to boost your resistance to that type of magic for 18 sec.  Stacks up to 3 times.",
       "When you are hit by a spell, you have a 30% chance to boost your resistance to that type of magic for 18 sec.  Stacks up to 3 times."
      ],
      "cn": "魔法适应",
      "cnDesc": [
       "当你被法术击中之后，有10%的几率获得对该系法术的抗性提高的效果，持续18秒。该效果可以叠加最多3次。",
       "当你被法术击中之后，有20%的几率获得对该系法术的抗性提高的效果，持续18秒。该效果可以叠加最多3次。",
       "当你被法术击中之后，有30%的几率获得对该系法术的抗性提高的效果，持续18秒。该效果可以叠加最多3次。"
      ]
     },
     {
      "name": "Frost Strike",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Instantly strike the enemy, causing 55% weapon damage plus 48 as Frost damage."
      ],
      "cn": "冰霜打击",
      "cnDesc": [
       "立即攻击敌人，造成55%武器伤害外加48点冰霜伤害。"
      ]
     },
     {
      "name": "Guile of Gorefiend",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike damage bonus of your Blood Strike, Frost Strike, Howling Blast and Obliterate abilities by 15%, and increases the duration of your Icebound Fortitude by 2 secs.",
       "Increases the critical strike damage bonus of your Blood Strike, Frost Strike, Howling Blast and Obliterate abilities by 30%, and increases the duration of your Icebound Fortitude by 4 secs.",
       "Increases the critical strike damage bonus of your Blood Strike, Frost Strike, Howling Blast and Obliterate abilities by 45%, and increases the duration of your Icebound Fortitude by 6 secs."
      ],
      "cn": "血魔的狡诈",
      "cnDesc": [
       "你的鲜血打击、冰霜打击、凛风冲击和湮没的暴击伤害加成提高15%，并使冰封之韧的持续时间延长2秒。",
       "你的鲜血打击、冰霜打击、凛风冲击和湮没的暴击伤害加成提高30%，并使冰封之韧的持续时间延长4秒。",
       "你的鲜血打击、冰霜打击、凛风冲击和湮没的暴击伤害加成提高45%，并使冰封之韧的持续时间延长6秒。"
      ]
     },
     {
      "name": "Tundra Stalker",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your spells and abilities deal 3% more damage to targets infected with Frost Fever.  Also increases your expertise by 1.",
       "Your spells and abilities deal 6% more damage to targets infected with Frost Fever.  Also increases your expertise by 2.",
       "Your spells and abilities deal 9% more damage to targets infected with Frost Fever.  Also increases your expertise by 3.",
       "Your spells and abilities deal 12% more damage to targets infected with Frost Fever.  Also increases your expertise by 4.",
       "Your spells and abilities deal 15% more damage to targets infected with Frost Fever.  Also increases your expertise by 5."
      ],
      "cn": "苔原猎手",
      "cnDesc": [
       "你的法术和技能对感染冰霜疫病的目标造成的伤害提高3%，并使你的精准提高1。",
       "你的法术和技能对感染冰霜疫病的目标造成的伤害提高6%，并使你的精准提高2。",
       "你的法术和技能对感染冰霜疫病的目标造成的伤害提高9%，并使你的精准提高3。",
       "你的法术和技能对感染冰霜疫病的目标造成的伤害提高12%，并使你的精准提高4。",
       "你的法术和技能对感染冰霜疫病的目标造成的伤害提高15%，并使你的精准提高5。"
      ]
     },
     {
      "name": "Howling Blast",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Blast the target with a frigid wind dealing 198 to 214 Frost damage to all enemies within 10 yards."
      ],
      "cn": "凛风冲击",
      "cnDesc": [
       "用刺骨寒风冲击目标，对10码内所有敌人造成198-214点冰霜伤害。"
      ]
     }
    ],
    "sprite": "assets/sprites/deathknight_frost.webp"
   },
   {
    "name": "Unholy",
    "cn": "邪恶",
    "bg": "assets/tree-bg/deathknight_unholy.jpg",
    "talents": [
     {
      "name": "Vicious Strikes",
      "row": 0,
      "col": 0,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance by 3% and critical strike damage bonus by 15% of your Plague Strike and Scourge Strike.",
       "Increases the critical strike chance by 6% and critical strike damage bonus by 30% of your Plague Strike and Scourge Strike."
      ],
      "cn": "险恶攻击",
      "cnDesc": [
       "使你的暗影打击和天灾打击的暴击几率提高3%，暴击伤害加成提高15%。",
       "使你的暗影打击和天灾打击的暴击几率提高6%，暴击伤害加成提高30%。"
      ]
     },
     {
      "name": "Virulence",
      "row": 0,
      "col": 1,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to hit with your spells by 1% and reduces the chance that your damage over time diseases can be cured by 10%.",
       "Increases your chance to hit with your spells by 2% and reduces the chance that your damage over time diseases can be cured by 20%.",
       "Increases your chance to hit with your spells by 3% and reduces the chance that your damage over time diseases can be cured by 30%."
      ],
      "cn": "恶毒",
      "cnDesc": [
       "使你法术的命中几率提高1%，并使你的持续伤害疾病被驱散的几率降低10%。",
       "使你法术的命中几率提高2%，并使你的持续伤害疾病被驱散的几率降低20%。",
       "使你法术的命中几率提高3%，并使你的持续伤害疾病被驱散的几率降低30%。"
      ]
     },
     {
      "name": "Anticipation",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Dodge chance by 1%.",
       "Increases your Dodge chance by 2%.",
       "Increases your Dodge chance by 3%.",
       "Increases your Dodge chance by 4%.",
       "Increases your Dodge chance by 5%."
      ],
      "cn": "预知",
      "cnDesc": [
       "使你的躲闪几率提高1%。",
       "使你的躲闪几率提高2%。",
       "使你的躲闪几率提高3%。",
       "使你的躲闪几率提高4%。",
       "使你的躲闪几率提高5%。"
      ]
     },
     {
      "name": "Epidemic",
      "row": 1,
      "col": 0,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the duration of Blood Plague and Frost Fever by 3 sec.",
       "Increases the duration of Blood Plague and Frost Fever by 6 sec."
      ],
      "cn": "蔓延",
      "cnDesc": [
       "使血之疫病和冰霜疫病的持续时间延长3秒。",
       "使血之疫病和冰霜疫病的持续时间延长6秒。"
      ]
     },
     {
      "name": "Morbidity",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage and healing of Death Coil by 5% and reduces the cooldown on Death and Decay by 5 sec.",
       "Increases the damage and healing of Death Coil by 10% and reduces the cooldown on Death and Decay by 10 sec.",
       "Increases the damage and healing of Death Coil by 15% and reduces the cooldown on Death and Decay by 15 sec."
      ],
      "cn": "病变",
      "cnDesc": [
       "使凋零缠绕的伤害和治疗提高5%，并使枯萎凋零的冷却时间缩短5秒。",
       "使凋零缠绕的伤害和治疗提高10%，并使枯萎凋零的冷却时间缩短10秒。",
       "使凋零缠绕的伤害和治疗提高15%，并使枯萎凋零的冷却时间缩短15秒。"
      ]
     },
     {
      "name": "Unholy Command",
      "row": 1,
      "col": 2,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Death Grip ability by 5 sec.",
       "Reduces the cooldown of your Death Grip ability by 10 sec."
      ],
      "cn": "邪恶命令",
      "cnDesc": [
       "使死亡之握的冷却时间缩短5秒。",
       "使死亡之握的冷却时间缩短10秒。"
      ]
     },
     {
      "name": "Ravenous Dead",
      "row": 1,
      "col": 3,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Strength by 1% and the contribution your Ghouls get from your Strength and Stamina by 20%.",
       "Increases your total Strength by 2% and the contribution your Ghouls get from your Strength and Stamina by 40%.",
       "Increases your total Strength by 3% and the contribution your Ghouls get from your Strength and Stamina by 60%"
      ],
      "cn": "贪婪亡者",
      "cnDesc": [
       "使你的力量总值提高1%，你的食尸鬼因你的力量和耐力获得的加成提高20%。",
       "使你的力量总值提高2%，你的食尸鬼因你的力量和耐力获得的加成提高40%。",
       "使你的力量总值提高3%，你的食尸鬼因你的力量和耐力获得的加成提高60%。"
      ]
     },
     {
      "name": "Outbreak",
      "row": 2,
      "col": 0,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of Plague Strike by 10% and Scourge Strike by 7%.",
       "Increases the damage of Plague Strike by 20% and Scourge Strike by 13%.",
       "Increases the damage of Plague Strike by 30% and Scourge Strike by 20%."
      ],
      "cn": "爆发",
      "cnDesc": [
       "使暗影打击的伤害提高10%，天灾打击的伤害提高7%。",
       "使暗影打击的伤害提高20%，天灾打击的伤害提高13%。",
       "使暗影打击的伤害提高30%，天灾打击的伤害提高20%。"
      ]
     },
     {
      "name": "Necrosis",
      "row": 2,
      "col": 1,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your auto attacks deal an additional 4% Shadow damage.",
       "Your auto attacks deal an additional 8% Shadow damage.",
       "Your auto attacks deal an additional 12% Shadow damage.",
       "Your auto attacks deal an additional 16% Shadow damage.",
       "Your auto attacks deal an additional 20% Shadow damage."
      ],
      "cn": "骨疽",
      "cnDesc": [
       "你的自动攻击额外造成4%暗影伤害。",
       "你的自动攻击额外造成8%暗影伤害。",
       "你的自动攻击额外造成12%暗影伤害。",
       "你的自动攻击额外造成16%暗影伤害。",
       "你的自动攻击额外造成20%暗影伤害。"
      ]
     },
     {
      "name": "Corpse Explosion",
      "row": 2,
      "col": 2,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Cause a corpse to explode for 166 Shadow damage to all enemies within 10 yards.  Will use a nearby corpse if the target is not a corpse.  Does not affect mechanical or elemental corpses."
      ],
      "cn": "邪爆",
      "cnDesc": [
       "使一具尸体爆炸，对10码内所有敌人造成166点暗影伤害。若目标不是尸体，则使用附近的一具尸体。对机械或元素尸体无效。"
      ]
     },
     {
      "name": "On a Pale Horse",
      "row": 3,
      "col": 1,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You become as hard to stop as death itself.  The duration of all Stun and Fear effects used against you is reduced by 10%, and your mounted speed is increased by 10%.  This does not stack with other movement speed increasing effects.",
       "You become as hard to stop as death itself.  The duration of all Stun and Fear effects used against you is reduced by 20%, and your mounted speed is increased by 20%.  This does not stack with other movement speed increasing effects."
      ],
      "cn": "死神降临",
      "cnDesc": [
       "你如死亡般难以阻挡。使你受到的眩晕和恐惧效果的持续时间缩短10%，你的坐骑移动速度提高10%。不与其它提高移动速度的效果叠加。",
       "你如死亡般难以阻挡。使你受到的眩晕和恐惧效果的持续时间缩短20%，你的坐骑移动速度提高20%。不与其它提高移动速度的效果叠加。"
      ]
     },
     {
      "name": "Blood-Caked Blade",
      "row": 3,
      "col": 2,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your auto attacks have a 10% chance to cause a Blood-Caked Strike, which hits for 25% weapon damage plus 12.5% for each of your diseases on the target.",
       "Your auto attacks have a 20% chance to cause a Blood-Caked Strike, which hits for 25% weapon damage plus 12.5% for each of your diseases on the target.",
       "Your auto attacks have a 30% chance to cause a Blood-Caked Strike, which hits for 25% weapon damage plus 12.5% for each of your diseases on the target."
      ],
      "cn": "血染之刃",
      "cnDesc": [
       "你的普通攻击有10%的几率产生浸血打击效果，对目标造成25%的武器伤害，再加上你施加于目标身上的每层疾病效果所提供的12.5%加成。",
       "你的普通攻击有20%的几率产生浸血打击效果，对目标造成25%的武器伤害，再加上你施加于目标身上的每层疾病效果所提供的12.5%加成。",
       "你的普通攻击有30%的几率产生浸血打击效果，对目标造成25%的武器伤害，再加上你施加于目标身上的每层疾病效果所提供的12.5%加成。"
      ]
     },
     {
      "name": "Night of the Dead",
      "row": 3,
      "col": 3,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown on Raise Dead by 45 sec and the cooldown on Army of the Dead by 2 min.  Also reduces the damage your pet takes from creature area of effect attacks by 45%.",
       "Reduces the cooldown on Raise Dead by 90 sec and the cooldown on Army of the Dead by 4 min.  Also reduces the damage your pet takes from creature area of effect attacks by 90%."
      ],
      "cn": "亡者之夜",
      "cnDesc": [
       "使亡者复生的冷却时间缩短45秒，亡灵大军的冷却时间缩短2分钟。并使你的宠物受到生物范围攻击的伤害降低45%。",
       "使亡者复生的冷却时间缩短90秒，亡灵大军的冷却时间缩短4分钟。并使你的宠物受到生物范围攻击的伤害降低90%。"
      ]
     },
     {
      "name": "Unholy Blight",
      "row": 4,
      "col": 0,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Causes the victims of your Death Coil to be surrounded by a vile swarm of unholy insects, taking 10% of the damage done by the Death Coil over 10 sec, and preventing any diseases on the victim from being dispelled."
      ],
      "cn": "邪恶虫群",
      "cnDesc": [
       "使被你的凋零缠绕击中的目标被邪恶的虫群包裹，在10秒内受到本次凋零缠绕所造成伤害的10%，并使目标身上的任何疾病效果都无法被驱散。"
      ]
     },
     {
      "name": "Impurity",
      "row": 4,
      "col": 1,
      "maxRank": 5,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "The attack power bonus of your spells is increased by 4%.",
       "The attack power bonus of your spells is increased by 8%.",
       "The attack power bonus of your spells is increased by 12%.",
       "The attack power bonus of your spells is increased by 16%.",
       "Your spells receive an additional 20% benefit from your attack power."
      ],
      "cn": "不纯",
      "cnDesc": [
       "你的法术从攻击强度获得的加成提高4%。",
       "你的法术从攻击强度获得的加成提高8%。",
       "你的法术从攻击强度获得的加成提高12%。",
       "你的法术从攻击强度获得的加成提高16%。",
       "你的法术从攻击强度获得的加成额外提高20%。"
      ]
     },
     {
      "name": "Dirge",
      "row": 4,
      "col": 2,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Death Strike, Plague Strike and Scourge Strike generate 2.5 additional runic power.",
       "Your Death Strike, Plague Strike and Scourge Strike generate 5 additional runic power."
      ],
      "cn": "挽歌",
      "cnDesc": [
       "你的灵界打击、暗影打击和天灾打击额外产生2.5点符文能量。",
       "你的灵界打击、暗影打击和天灾打击额外产生5点符文能量。"
      ]
     },
     {
      "name": "Desecration",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Plague Strikes and Scourge Strikes cause the Desecrated Ground effect.  Targets in the area are slowed by 25% by the grasping arms of the dead while standing on the unholy ground.  Lasts 20 sec.",
       "Your Plague Strikes and Scourge Strikes cause the Desecrated Ground effect.  Targets in the area are slowed by 50% by the grasping arms of the dead while standing on the unholy ground.  Lasts 20 sec."
      ],
      "cn": "亵渎",
      "cnDesc": [
       "你的暗影打击和天灾打击会产生亵渎之地效果。站在邪恶之地上的目标被亡者的手臂抓住，移动速度降低25%。持续20秒。",
       "你的暗影打击和天灾打击会产生亵渎之地效果。站在邪恶之地上的目标被亡者的手臂抓住，移动速度降低50%。持续20秒。"
      ]
     },
     {
      "name": "Magic Suppression",
      "row": 5,
      "col": 1,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You take 2% less damage from all magic.  In addition, your Anti-Magic Shell absorbs an additional 8% of spell damage.",
       "You take 4% less damage from all magic.  In addition, your Anti-Magic Shell absorbs an additional 16% of spell damage.",
       "You take 6% less damage from all magic.  In addition, your Anti-Magic Shell absorbs an additional 25% of spell damage."
      ],
      "cn": "魔法压制",
      "cnDesc": [
       "你受到的所有魔法伤害降低2%，且你的反魔法护罩额外吸收8%的法术伤害。",
       "你受到的所有魔法伤害降低4%，且你的反魔法护罩额外吸收16%的法术伤害。",
       "你受到的所有魔法伤害降低6%，且你的反魔法护罩额外吸收25%的法术伤害。"
      ]
     },
     {
      "name": "Reaping",
      "row": 5,
      "col": 2,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Whenever you hit with Blood Strike or Pestilence there is a 33% chance that the Blood Rune becomes a Death Rune when it activates.  Death Runes count as a Blood, Frost or Unholy Rune.",
       "Whenever you hit with Blood Strike or Pestilence there is a 66% chance that the Blood Rune becomes a Death Rune when it activates.  Death Runes count as a Blood, Frost or Unholy Rune.",
       "Whenever you hit with Blood Strike or Pestilence there is a 100% chance that the Blood Rune becomes a Death Rune when it activates.  Death Runes count as a Blood, Frost or Unholy Rune."
      ],
      "cn": "收割",
      "cnDesc": [
       "当你用鲜血打击或传染命中时，有33%几率使鲜血符文在激活时变为死亡符文。死亡符文可作为鲜血、冰霜或邪恶符文使用。",
       "当你用鲜血打击或传染命中时，有66%几率使鲜血符文在激活时变为死亡符文。死亡符文可作为鲜血、冰霜或邪恶符文使用。",
       "当你用鲜血打击或传染命中时，有100%几率使鲜血符文在激活时变为死亡符文。死亡符文可作为鲜血、冰霜或邪恶符文使用。"
      ]
     },
     {
      "name": "Master of Ghouls",
      "row": 5,
      "col": 3,
      "maxRank": 1,
      "req": 25,
      "prereq": "Night of the Dead",
      "prereqRank": 2,
      "desc": [
       "Reduces the cooldown on Raise Dead by 60 sec, and the Ghoul summoned by your Raise Dead spell is considered a pet under your control. Unlike normal Death Knight Ghouls, your pet does not have a limited duration."
      ],
      "cn": "食尸鬼主宰",
      "cnDesc": [
       "使亡者复生的冷却时间缩短60秒，且你的亡者复生召唤的食尸鬼视为你控制的宠物。与普通死亡骑士食尸鬼不同，你的宠物没有持续时间限制。"
      ]
     },
     {
      "name": "Desolation",
      "row": 6,
      "col": 0,
      "maxRank": 5,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Blood Strikes cause you to deal 1% additional damage with all attacks for the next 20 sec.",
       "Your Blood Strikes cause you to deal 2% additional damage with all attacks for the next 20 sec.",
       "Your Blood Strikes cause you to deal 3% additional damage with all attacks for the next 20 sec.",
       "Your Blood Strikes cause you to deal 4% additional damage with all attacks for the next 20 sec.",
       "Your Blood Strikes cause you to deal 5% additional damage with all attacks for the next 20 sec."
      ],
      "cn": "孤寂",
      "cnDesc": [
       "你的鲜血打击使你造成的所有攻击伤害在接下来20秒内提高1%。",
       "你的鲜血打击使你造成的所有攻击伤害在接下来20秒内提高2%。",
       "你的鲜血打击使你造成的所有攻击伤害在接下来20秒内提高3%。",
       "你的鲜血打击使你造成的所有攻击伤害在接下来20秒内提高4%。",
       "你的鲜血打击使你造成的所有攻击伤害在接下来20秒内提高5%。"
      ]
     },
     {
      "name": "Anti-Magic Zone",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Magic Suppression",
      "prereqRank": 3,
      "desc": [
       "Places a large, stationary Anti-Magic Zone that reduces spell damage done to party or raid members inside it by 75%.  The Anti-Magic Zone lasts for 10 sec or until it absorbs 10000+2* AP spell damage."
      ],
      "cn": "反魔法领域",
      "cnDesc": [
       "制造一个大型的静态反魔法领域，使所有身处该领域中的小队或团队成员受到的法术伤害降低75%。反魔法领域持续10秒，或在吸收10000+2*攻击强度点法术伤害之后消失。"
      ]
     },
     {
      "name": "Improved Unholy Presence",
      "row": 6,
      "col": 2,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While in Blood Presence or Frost Presence, you retain 8% increased movement speed from Unholy Presence, and your runes finish their cooldowns 5% faster in Unholy Presence.",
       "While in Blood Presence or Frost Presence, you retain 15% increased movement speed from Unholy Presence, and your runes finish their cooldowns 10% faster in Unholy Presence."
      ],
      "cn": "强化邪恶灵气",
      "cnDesc": [
       "处于鲜血灵气或冰霜灵气时，你保留邪恶灵气8%的移动速度加成，且在邪恶灵气下符文的冷却完成速度加快5%。",
       "处于鲜血灵气或冰霜灵气时，你保留邪恶灵气15%的移动速度加成，且在邪恶灵气下符文的冷却完成速度加快10%。"
      ]
     },
     {
      "name": "Ghoul Frenzy",
      "row": 6,
      "col": 3,
      "maxRank": 1,
      "req": 30,
      "prereq": "Master of Ghouls",
      "prereqRank": 1,
      "desc": [
       "Grants your pet 25% haste for 30 sec and heals it for 60% of its health over the duration."
      ],
      "cn": "食尸鬼狂乱",
      "cnDesc": [
       "使你的宠物获得25%的急速，持续30秒。在此期间为宠物恢复60%的生命值。"
      ]
     },
     {
      "name": "Crypt Fever",
      "row": 7,
      "col": 1,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your diseases also cause Crypt Fever, which increases disease damage taken by the target by 10%.",
       "Your diseases also cause Crypt Fever, which increases disease damage taken by the target by 20%.",
       "Your diseases also cause Crypt Fever, which increases disease damage taken by the target by 30%."
      ],
      "cn": "墓穴热病",
      "cnDesc": [
       "你的疾病会导致墓穴热病效果，使其它疾病效果对目标造成的伤害提高10%。",
       "你的疾病会导致墓穴热病效果，使其它疾病效果对目标造成的伤害提高20%。",
       "你的疾病会导致墓穴热病效果，使其它疾病效果对目标造成的伤害提高30%。"
      ]
     },
     {
      "name": "Bone Shield",
      "row": 7,
      "col": 2,
      "maxRank": 1,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "The Death Knight is surrounded by 3 whirling bones. While at least 1 bone remains, <he/she> takes 20% less damage from all sources and deals 2% more damage with all attacks, spells and abilities. Each damaging attack that lands consumes 1 bone. Lasts 5 min."
      ],
      "cn": "白骨之盾",
      "cnDesc": [
       "死亡骑士被3根旋绕的白骨环绕。只要至少剩1根白骨，其受到的所有伤害降低20%，且所有攻击、法术和技能造成的伤害提高2%。每次受到的伤害性攻击消耗1根白骨。持续5分钟。"
      ]
     },
     {
      "name": "Wandering Plague",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When your diseases damage an enemy, there is a chance equal to your melee critical strike chance that they will cause 33% additional damage to the target and all enemies within 8 yards.  Ignores any target under the effect of a spell that is cancelled by taking damage.",
       "When your diseases damage an enemy, there is a chance equal to your melee critical strike chance that they will cause 66% additional damage to the target and all enemies within 8 yards.  Ignores any target under the effect of a spell that is cancelled by taking damage.",
       "When your diseases damage an enemy, there is a chance equal to your melee critical strike chance that they will cause 100% additional damage to the target and all enemies within 8 yards.  Ignores any target under the effect of a spell that is cancelled by taking damage."
      ],
      "cn": "游荡疫病",
      "cnDesc": [
       "当你的疾病对敌人造成伤害时，有几率（等于你的近战暴击几率）对其及8码内所有敌人造成33%的额外伤害。忽略任何处于被伤害即取消的法术效果影响下的目标。",
       "当你的疾病对敌人造成伤害时，有几率（等于你的近战暴击几率）对其及8码内所有敌人造成66%的额外伤害。忽略任何处于被伤害即取消的法术效果影响下的目标。",
       "当你的疾病对敌人造成伤害时，有几率（等于你的近战暴击几率）对其及8码内所有敌人造成100%的额外伤害。忽略任何处于被伤害即取消的法术效果影响下的目标。"
      ]
     },
     {
      "name": "Ebon Plaguebringer",
      "row": 8,
      "col": 1,
      "maxRank": 3,
      "req": 40,
      "prereq": "Crypt Fever",
      "prereqRank": 3,
      "desc": [
       "Your Crypt Fever morphs into Ebon Plague, which increases magic damage taken by 4% in addition to increasing disease damage taken.  Improves your critical strike chance with weapons and spells by 1% at all times.",
       "Your Crypt Fever morphs into Ebon Plague, which increases magic damage taken by 9% in addition to increasing disease damage taken.  Improves your critical strike chance with weapons and spells by 2% at all times.",
       "Your Crypt Fever morphs into Ebon Plague, which increases magic damage taken by 13% in addition to increasing disease damage taken.  Improves your critical strike chance with weapons and spells by 3% at all times."
      ],
      "cn": "黑色热疫使者",
      "cnDesc": [
       "你的墓穴热病转化为黑色热疫，除了令疾病效果对目标造成的伤害提高之外，还使其受到的魔法伤害提高4%。你的武器和法术攻击的爆击几率提高1%。",
       "你的墓穴热病转化为黑色热疫，除了令疾病效果对目标造成的伤害提高之外，还使其受到的魔法伤害提高9%。你的武器和法术攻击的爆击几率提高2%。",
       "你的墓穴热病转化为黑色热疫，除了令疾病效果对目标造成的伤害提高之外，还使其受到的魔法伤害提高13%。你的武器和法术攻击的爆击几率提高3%。"
      ]
     },
     {
      "name": "Scourge Strike",
      "row": 8,
      "col": 2,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "An unholy strike that deals 70% of weapon damage as Physical damage plus 238.  In addition, for each of your diseases on your target, you deal an additional 12% of the Physical damage done as Shadow damage."
      ],
      "cn": "天灾打击",
      "cnDesc": [
       "一次邪恶打击，造成70%武器伤害的物理伤害外加238点伤害。此外，目标身上的每个疾病会使你造成相当于该物理伤害12%的额外暗影伤害。"
      ]
     },
     {
      "name": "Rage of Rivendare",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your spells and abilities deal 2% more damage to targets infected with Blood Plague.  Also increases your expertise by 1.",
       "Your spells and abilities deal 4% more damage to targets infected with Blood Plague.  Also increases your expertise by 2.",
       "Your spells and abilities deal 6% more damage to targets infected with Blood Plague.  Also increases your expertise by 3.",
       "Your spells and abilities deal 8% more damage to targets infected with Blood Plague.  Also increases your expertise by 4.",
       "Your spells and abilities deal 10% more damage to targets infected with Blood Plague.  Also increases your expertise by 5."
      ],
      "cn": "瑞文戴尔之怒",
      "cnDesc": [
       "你的法术和技能对受到血之疫病效果影响的目标造成的伤害提高2%。你的精准提高1。",
       "你的法术和技能对受到血之疫病效果影响的目标造成的伤害提高4%。你的精准提高2。",
       "你的法术和技能对受到血之疫病效果影响的目标造成的伤害提高6%。你的精准提高3。",
       "你的法术和技能对受到血之疫病效果影响的目标造成的伤害提高8%。你的精准提高4。",
       "你的法术和技能对受到血之疫病效果影响的目标造成的伤害提高10%。你的精准提高5。"
      ]
     },
     {
      "name": "Summon Gargoyle",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "A Gargoyle flies into the area and bombards the target with Nature damage modified by the Death Knight's attack power. Persists for 30 sec."
      ],
      "cn": "召唤石像鬼",
      "cnDesc": [
       "一只石像鬼飞入该区域，对目标倾泻自然伤害，伤害受死亡骑士攻击强度影响。持续30秒。"
      ]
     }
    ],
    "sprite": "assets/sprites/deathknight_unholy.webp"
   }
  ],
  "icon": "assets/class-icons/deathknight.jpg"
 },
 {
  "id": "druid",
  "name": "Druid",
  "cn": "德鲁伊",
  "trees": [
   {
    "name": "Balance",
    "cn": "平衡",
    "bg": "assets/tree-bg/druid_balance.jpg",
    "talents": [
     {
      "name": "Starlight Wrath",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cast time of your Wrath and Starfire spells by 0.1 sec.",
       "Reduces the cast time of your Wrath and Starfire spells by 0.2 sec.",
       "Reduces the cast time of your Wrath and Starfire spells by 0.3 sec.",
       "Reduces the cast time of your Wrath and Starfire spells by 0.4 sec.",
       "Reduces the cast time of your Wrath and Starfire spells by 0.5 sec."
      ],
      "cn": "星光之怒",
      "cnDesc": [
       "使你的愤怒和星火术的施法时间缩短0.1秒。",
       "使你的愤怒和星火术的施法时间缩短0.2秒。",
       "使你的愤怒和星火术的施法时间缩短0.3秒。",
       "使你的愤怒和星火术的施法时间缩短0.4秒。",
       "使你的愤怒和星火术的施法时间缩短0.5秒。"
      ]
     },
     {
      "name": "Genesis",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage and healing done by your periodic spell damage and healing effects by 1%.",
       "Increases the damage and healing done by your periodic spell damage and healing effects by 2%.",
       "Increases the damage and healing done by your periodic spell damage and healing effects by 3%.",
       "Increases the damage and healing done by your periodic spell damage and healing effects by 4%.",
       "Increases the damage and healing done by your periodic spell damage and healing effects by 5%."
      ],
      "cn": "起源",
      "cnDesc": [
       "使你的持续伤害效果和持续治疗效果提高1%。",
       "使你的持续伤害效果和持续治疗效果提高2%。",
       "使你的持续伤害效果和持续治疗效果提高3%。",
       "使你的持续伤害效果和持续治疗效果提高4%。",
       "使你的持续伤害效果和持续治疗效果提高5%。"
      ]
     },
     {
      "name": "Moonglow",
      "row": 1,
      "col": 0,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the Mana cost of your Moonfire, Starfire, Starfall, Wrath, Healing Touch, Nourish, Regrowth and Rejuvenation spells by 3%.",
       "Reduces the Mana cost of your Moonfire, Starfire, Starfall, Wrath, Healing Touch, Nourish, Regrowth and Rejuvenation spells by 6%.",
       "Reduces the Mana cost of your Moonfire, Starfire, Starfall, Wrath, Healing Touch, Nourish, Regrowth and Rejuvenation spells by 9%."
      ],
      "cn": "月光",
      "cnDesc": [
       "使你的月火术、星火术、星辰坠落、愤怒、治疗之触、滋养、愈合和回春术所消耗的法力值减少3%。",
       "使你的月火术、星火术、星辰坠落、愤怒、治疗之触、滋养、愈合和回春术所消耗的法力值减少6%。",
       "使你的月火术、星火术、星辰坠落、愤怒、治疗之触、滋养、愈合和回春术所消耗的法力值减少9%。"
      ]
     },
     {
      "name": "Nature's Majesty",
      "row": 1,
      "col": 1,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your Wrath, Starfire, Starfall, Nourish and Healing Touch spells by 2%.",
       "Increases the critical strike chance of your Wrath, Starfire, Starfall, Nourish and Healing Touch spells by 4%."
      ],
      "cn": "自然的威严",
      "cnDesc": [
       "使你的愤怒、星火术、星辰坠落、滋养和治疗之触的爆击几率提高2%。",
       "使你的愤怒、星火术、星辰坠落、滋养和治疗之触的爆击几率提高4%。"
      ]
     },
     {
      "name": "Improved Moonfire",
      "row": 1,
      "col": 3,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage and critical strike chance of your Moonfire spell by 5%.",
       "Increases the damage and critical strike chance of your Moonfire spell by 10%."
      ],
      "cn": "强化月火术",
      "cnDesc": [
       "使你的月火术的伤害和爆击几率提高5%。",
       "使你的月火术的伤害和爆击几率提高10%。"
      ]
     },
     {
      "name": "Brambles",
      "row": 2,
      "col": 0,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Damage from your Thorns and Entangling Roots increased by 25% and damage done by your Treants increased by 5%. In addition, damage from your Treants and attacks done to you while you have Barkskin active have a 5% chance to daze the target for 3 sec.",
       "Damage from your Thorns and Entangling Roots increased by 50% and damage done by your Treants increased by 10%. In addition, damage from your Treants and attacks done to you while you have Barkskin active have a 10% chance to daze the target for 3 sec.",
       "Damage from your Thorns and Entangling Roots increased by 75% and damage done by your Treants increased by 15%. In addition, damage from your Treants and attacks done to you while you have Barkskin active have a 15% chance to daze the target for 3 sec."
      ],
      "cn": "荆刺",
      "cnDesc": [
       "使你的荆棘术和纠缠根须造成的伤害提高25%，你召唤的树人造成的伤害提高5%。另外，你的树人造成的伤害以及在你开启树皮术的状态下攻击你的行为有5%的几率令目标眩晕3秒。",
       "使你的荆棘术和纠缠根须造成的伤害提高50%，你召唤的树人造成的伤害提高10%。另外，你的树人造成的伤害以及在你开启树皮术的状态下攻击你的行为有5%的几率令目标眩晕3秒。",
       "使你的荆棘术和纠缠根须造成的伤害提高75%，你召唤的树人造成的伤害提高15%。另外，你的树人造成的伤害以及在你开启树皮术的状态下攻击你的行为有5%的几率令目标眩晕3秒。"
      ]
     },
     {
      "name": "Nature's Grace",
      "row": 2,
      "col": 1,
      "maxRank": 3,
      "req": 10,
      "prereq": "Nature's Majesty",
      "prereqRank": 2,
      "desc": [
       "All non-periodic spell criticals have a 33% chance to grace you with a blessing of nature, increasing your spell casting speed by 20% for 3 sec.",
       "All non-periodic spell criticals have a 66% chance to grace you with a blessing of nature, increasing your spell casting speed by 20% for 3 sec.",
       "All non-periodic spell criticals have a 100% chance to grace you with a blessing of nature, increasing your spell casting speed by 20% for 3 sec."
      ],
      "cn": "自然之赐",
      "cnDesc": [
       "你的任何非持续性法术爆击之后都有33%的几率获得自然的赐福，使你的施法速度提高20%，持续3 秒。",
       "你的任何非持续性法术爆击之后都有66%的几率获得自然的赐福，使你的施法速度提高20%，持续3 秒。",
       "你的任何非持续性法术爆击之后都有100%的几率获得自然的赐福，使你的施法速度提高20%，持续3 秒。"
      ]
     },
     {
      "name": "Nature's Splendor",
      "row": 2,
      "col": 2,
      "maxRank": 1,
      "req": 10,
      "prereq": "Nature's Majesty",
      "prereqRank": 2,
      "desc": [
       "Increases the duration of your Moonfire and Rejuvenation spells by 3 sec, your Regrowth spell by 6 sec, and your Insect Swarm and Lifebloom spells by 2 sec."
      ],
      "cn": "壮丽自然",
      "cnDesc": [
       "使你的月火术和回春术的持续时间延长3秒，愈合的持续时间延长6秒，虫群和生命绽放的持续时间延长2秒。"
      ]
     },
     {
      "name": "Nature's Reach",
      "row": 2,
      "col": 3,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of your Balance spells and Faerie Fire (Feral) ability by 10%, and reduces the threat generated by your Balance spells by 15%.",
       "Increases the range of your Balance spells and Faerie Fire (Feral) ability by 20%, and reduces the threat generated by your Balance spells by 30%."
      ],
      "cn": "自然延伸",
      "cnDesc": [
       "使你的平衡系法术和精灵之火（野性）的射程延长10%，平衡系法术所造成的威胁值降低15%。",
       "使你的平衡系法术和精灵之火（野性）的射程延长20%，平衡系法术所造成的威胁值降低30%。"
      ]
     },
     {
      "name": "Vengeance",
      "row": 3,
      "col": 1,
      "maxRank": 5,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike damage bonus of your Starfire, Starfall, Moonfire, and Wrath spells by 20%.",
       "Increases the critical strike damage bonus of your Starfire, Starfall, Moonfire, and Wrath spells by 40%.",
       "Increases the critical strike damage bonus of your Starfire, Starfall, Moonfire, and Wrath spells by 60%.",
       "Increases the critical strike damage bonus of your Starfire, Starfall, Moonfire, and Wrath spells by 80%.",
       "Increases the critical strike damage bonus of your Starfire, Starfall, Moonfire, and Wrath spells by 100%."
      ],
      "cn": "复仇",
      "cnDesc": [
       "使你的星火术、星辰坠落、月火术和愤怒的爆击伤害加成提高20%。",
       "使你的星火术、星辰坠落、月火术和愤怒的爆击伤害加成提高40%。",
       "使你的星火术、星辰坠落、月火术和愤怒的爆击伤害加成提高60%。",
       "使你的星火术、星辰坠落、月火术和愤怒的爆击伤害加成提高80%。",
       "使你的星火术、星辰坠落、月火术和愤怒的爆击伤害加成提高100%。"
      ]
     },
     {
      "name": "Celestial Focus",
      "row": 3,
      "col": 2,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the pushback suffered from damaging attacks while casting Starfire, Hibernate and Hurricane by 23% and increases your total spell haste by 1%.",
       "Reduces the pushback suffered from damaging attacks while casting Starfire, Hibernate and Hurricane by 46% and increases your total spell haste by 2%.",
       "Reduces the pushback suffered from damaging attacks while casting Starfire, Hibernate and Hurricane by 70% and increases your total spell haste by 3%."
      ],
      "cn": "星空专注",
      "cnDesc": [
       "使你在施放星火术、休眠和飓风时因受到伤害而承受的施法推迟时间缩短23%，并使你的法术急速总值提高1%。",
       "使你在施放星火术、休眠和飓风时因受到伤害而承受的施法推迟时间缩短46%，并使你的法术急速总值提高2%。",
       "使你在施放星火术、休眠和飓风时因受到伤害而承受的施法推迟时间缩短70%，并使你的法术急速总值提高3%。"
      ]
     },
     {
      "name": "Lunar Guidance",
      "row": 4,
      "col": 0,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your spell power by 4% of your total Intellect.",
       "Increases your spell power by 8% of your total Intellect.",
       "Increases your spell power by 12% of your total Intellect."
      ],
      "cn": "月神指引",
      "cnDesc": [
       "使你的法术强度提高，数值相当于你的智力总值的4%。",
       "使你的法术强度提高，数值相当于你的智力总值的8%。",
       "使你的法术强度提高，数值相当于你的智力总值的12%。"
      ]
     },
     {
      "name": "Insect Swarm",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "The enemy target is swarmed by insects, decreasing their chance to hit by 3% and causing 144 Nature damage over 12 sec."
      ],
      "cn": "虫群",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>8% 的基础法力值</td><th>30码范围</th></tr></table>瞬发敌人被飞虫围绕，攻击命中率降低3%，在12 秒内受到总计144点自然伤害。"
      ]
     },
     {
      "name": "Improved Insect Swarm",
      "row": 4,
      "col": 2,
      "maxRank": 3,
      "req": 20,
      "prereq": "Insect Swarm",
      "prereqRank": 1,
      "desc": [
       "Increases your damage done by your Wrath spell to targets afflicted by your Insect Swarm by 1%, and increases the critical strike chance of your Starfire spell by 1% on targets afflicted by your Moonfire spell.",
       "Increases your damage done by your Wrath spell to targets afflicted by your Insect Swarm by 2%, and increases the critical strike chance of your Starfire spell by 2% on targets afflicted by your Moonfire spell.",
       "Increases your damage done by your Wrath spell to targets afflicted by your Insect Swarm by 3%, and increases the critical strike chance of your Starfire spell by 3% on targets afflicted by your Moonfire spell."
      ],
      "cn": "强化虫群",
      "cnDesc": [
       "使你的愤怒法术对于受到你所施加的虫群效果影响的目标造成的伤害提高1%，你的星火术对于受到你所施加的月火术效果影响的目标造成爆击的几率提高1%。",
       "使你的愤怒法术对于受到你所施加的虫群效果影响的目标造成的伤害提高2%，你的星火术对于受到你所施加的月火术效果影响的目标造成爆击的几率提高2%。",
       "使你的愤怒法术对于受到你所施加的虫群效果影响的目标造成的伤害提高3%，你的星火术对于受到你所施加的月火术效果影响的目标造成爆击的几率提高3%。"
      ]
     },
     {
      "name": "Dreamstate",
      "row": 5,
      "col": 0,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Regenerate mana equal to 4% of your Intellect every 5 sec, even while casting.",
       "Regenerate mana equal to 7% of your Intellect every 5 sec, even while casting.",
       "Regenerate mana equal to 10% of your Intellect every 5 sec, even while casting."
      ],
      "cn": "梦境",
      "cnDesc": [
       "每5秒回复一次法力值，数值相当于你的智力值的4%，施法时也可继续生效。",
       "每5秒回复一次法力值，数值相当于你的智力值的7%，施法时也可继续生效。",
       "每5秒回复一次法力值，数值相当于你的智力值的10%，施法时也可继续生效。"
      ]
     },
     {
      "name": "Moonfury",
      "row": 5,
      "col": 1,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Starfire, Moonfire and Wrath spells by 3%.",
       "Increases the damage done by your Starfire, Moonfire and Wrath spells by 6%.",
       "Increases the damage done by your Starfire, Moonfire and Wrath spells by 10%."
      ],
      "cn": "月怒",
      "cnDesc": [
       "使你的星火术、月火术和愤怒的伤害提高3%。",
       "使你的星火术、月火术和愤怒的伤害提高6%。",
       "使你的星火术、月火术和愤怒的伤害提高10%。"
      ]
     },
     {
      "name": "Balance of Power",
      "row": 5,
      "col": 2,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to hit with all spells by 2% and reduces your damage taken from all spells by 3%.",
       "Increases your chance to hit with all spells by 4% and reduces your damage taken from all spells by 6%."
      ],
      "cn": "能量平衡",
      "cnDesc": [
       "使你的所有法术的命中几率提高2%，所有法术对你造成的伤害降低3%。",
       "使你的所有法术的命中几率提高4%，所有法术对你造成的伤害降低6%。"
      ]
     },
     {
      "name": "Moonkin Form",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Shapeshift into Moonkin Form. While in this form the armor contribution from items is increased by 370%, damage taken while stunned is reduced by 15%, and all party and raid members within 100 yards have their spell critical chance increased by 5%. Single target spell critical strikes in this form have a chance to instantly regenerate 2% of your total mana. The Moonkin can not cast healing or resurrection spells while shapeshifted.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
      ],
      "cn": "枭兽形态",
      "cnDesc": [
       "13% 的基础法力值<br />瞬发<br/>德鲁伊进入枭兽形态，在这种形态下，护甲值提高370%，眩晕状态下受到的伤害降低15%，周围半径100码范围内所有队友的法术爆击几率提高5%。在这种形态下对单一目标施放的法术在爆击后有一定几率为你回复总法力值的2%。枭兽形态下不能施放治疗或复活类法术。<br /><br />变身可以解除施法者身上的所有变形和移动限制效果。"
      ]
     },
     {
      "name": "Improved Moonkin Form",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": "Moonkin Form",
      "prereqRank": 1,
      "desc": [
       "Your Moonkin Aura also causes affected targets to gain 1% haste and you to gain 10% of your spirit as additional spell damage.",
       "Your Moonkin Aura also causes affected targets to gain 2% haste and you to gain 20% of your spirit as additional spell damage.",
       "Your Moonkin Aura also causes affected targets to gain 3% haste and you to gain 30% of your spirit as additional spell damage."
      ],
      "cn": "强化枭兽形态",
      "cnDesc": [
       "在你的枭兽光环影响下的队友获得1%的急速。同时，你的法术伤害提高，数值相当于你的精神值的10%。",
       "在你的枭兽光环影响下的队友获得2%的急速。同时，你的法术伤害提高，数值相当于你的精神值的20%。",
       "在你的枭兽光环影响下的队友获得3%的急速。同时，你的法术伤害提高，数值相当于你的精神值的30%。"
      ]
     },
     {
      "name": "Improved Faerie Fire",
      "row": 6,
      "col": 3,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Faerie Fire spell also increases the chance the target will be hit by spell attacks by 1%, and increases the critical strike chance of your damage spells by 1% on targets afflicted by Faerie Fire.",
       "Your Faerie Fire spell also increases the chance the target will be hit by spell attacks by 2%, and increases the critical strike chance of your damage spells by 2% on targets afflicted by Faerie Fire.",
       "Your Faerie Fire spell also increases the chance the target will be hit by spell attacks by 3%, and increases the critical strike chance of your damage spells by 3% on targets afflicted by Faerie Fire."
      ],
      "cn": "强化精灵之火",
      "cnDesc": [
       "你的精灵之火使目标被法术攻击命中的几率提高1%，并使你的伤害性法术对带有精灵之火效果的目标打出爆击的几率提高1%。",
       "你的精灵之火使目标被法术攻击命中的几率提高2%，并使你的伤害性法术对带有精灵之火效果的目标打出爆击的几率提高2%。",
       "你的精灵之火使目标被法术攻击命中的几率提高3%，并使你的伤害性法术对带有精灵之火效果的目标打出爆击的几率提高3%。"
      ]
     },
     {
      "name": "Owlkin Frenzy",
      "row": 7,
      "col": 0,
      "maxRank": 3,
      "req": 35,
      "prereq": "Moonkin Form",
      "prereqRank": 1,
      "desc": [
       "Attacks done to you while in Moonkin form have a 5% chance to cause you to go into a Frenzy, increasing your damage by 10%, cause you to be immune to pushback while casting Balance spells and restore 2% base mana every 2 sec. Lasts 10 sec.",
       "Attacks done to you while in Moonkin form have a 10% chance to cause you to go into a Frenzy, increasing your damage by 10%, cause you to be immune to pushback while casting Balance spells and restore 2% base mana every 2 sec. Lasts 10 sec.",
       "Attacks done to you while in Moonkin form have a 15% chance to cause you to go into a Frenzy, increasing your damage by 10%, cause you to be immune to pushback while casting Balance spells and restore 2% base mana every 2 sec. Lasts 10 sec."
      ],
      "cn": "枭兽狂乱",
      "cnDesc": [
       "当你在枭兽形态下时，敌人对你进行的攻击有5%的几率使你进入狂乱状态，使你造成的伤害提高10%，在施放平衡系法术时免疫施法进度打退效果，并且每2秒恢复基础法力值的2%。持续10 秒。",
       "当你在枭兽形态下时，敌人对你进行的攻击有10%的几率使你进入狂乱状态，使你造成的伤害提高10%，在施放平衡系法术时免疫施法进度打退效果，并且每2秒恢复基础法力值的2%。持续10 秒。",
       "当你在枭兽形态下时，敌人对你进行的攻击有15%的几率使你进入狂乱状态，使你造成的伤害提高10%，在施放平衡系法术时免疫施法进度打退效果，并且每2秒恢复基础法力值的2%。持续10 秒。"
      ]
     },
     {
      "name": "Wrath of Cenarius",
      "row": 7,
      "col": 2,
      "maxRank": 5,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Starfire spell gains an additional 4% and your Wrath gains an additional 2% of your bonus damage effects.",
       "Your Starfire spell gains an additional 8% and your Wrath gains an additional 4% of your bonus damage effects.",
       "Your Starfire spell gains an additional 12% and your Wrath gains an additional 6% of your bonus damage effects.",
       "Your Starfire spell gains an additional 16% and your Wrath gains an additional 8% of your bonus damage effects.",
       "Your Starfire spell gains an additional 20% and your Wrath gains an additional 10% of your bonus damage effects."
      ],
      "cn": "塞纳留斯之怒",
      "cnDesc": [
       "你的星火术所获得的法术伤害加成效果提高4%，愤怒所获得的法术伤害加成效果提高2%。",
       "你的星火术所获得的法术伤害加成效果提高8%，愤怒所获得的法术伤害加成效果提高4%。",
       "你的星火术所获得的法术伤害加成效果提高12%，愤怒所获得的法术伤害加成效果提高6%。",
       "你的星火术所获得的法术伤害加成效果提高16%，愤怒所获得的法术伤害加成效果提高8%。",
       "你的星火术所获得的法术伤害加成效果提高20%，愤怒所获得的法术伤害加成效果提高10%。"
      ]
     },
     {
      "name": "Eclipse",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you critically hit with Starfire, you have a 33% chance of increasing damage done by Wrath by 40%. When you critically hit with Wrath, you have a 20% chance of increasing your critical strike chance with Starfire by 40%. Each effect lasts 15 sec and each has a separate 30 sec cooldown.  Both effects cannot occur simultaneously.",
       "When you critically hit with Starfire, you have a 66% chance of increasing damage done by Wrath by 40%. When you critically hit with Wrath, you have a 40% chance of increasing your critical strike chance with Starfire by 40%. Each effect lasts 15 sec and each has a separate 30 sec cooldown.  Both effects cannot occur simultaneously.",
       "When you critically hit with Starfire, you have a 100% chance of increasing damage done by Wrath by 40%. When you critically hit with Wrath, you have a 60% chance of increasing your critical strike chance with Starfire by 40%. Each effect lasts 15 sec and each has a separate 30 sec cooldown.  Both effects cannot occur simultaneously."
      ],
      "cn": "月蚀",
      "cnDesc": [
       "当你的星火术打出爆击之后，有33%的几率令愤怒的伤害提高40%。当你的愤怒打出爆击之后，有20%的几率令星火术的爆击几率提高40%。每个效果持续15 秒，并且有30秒的分隔冷却时间，两种效果不能同时触发。",
       "当你的星火术打出爆击之后，有66%的几率令愤怒的伤害提高40%。当你的愤怒打出爆击之后，有40%的几率令星火术的爆击几率提高40%。每个效果持续15 秒，并且有30秒的分隔冷却时间，两种效果不能同时触发。",
       "当你的星火术打出爆击之后，有100%的几率令愤怒的伤害提高40%。当你的愤怒打出爆击之后，有60%的几率令星火术的爆击几率提高40%。每个效果持续15 秒，并且有30秒的分隔冷却时间，两种效果不能同时触发。"
      ]
     },
     {
      "name": "Typhoon",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": "Moonkin Form",
      "prereqRank": 1,
      "desc": [
       "You summon a violent Typhoon that does 400 Nature damage when in contact with hostile targets, knocking them back and dazing them for 6 sec."
      ],
      "cn": "台风",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>25% 的基础法力值</td><th>30码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>20 秒冷却时间</th></tr></table>你召唤一道猛烈的台风，对它接触到的敌对目标造成400点自然伤害，并将它们击退，使它们眩晕6 秒。"
      ]
     },
     {
      "name": "Force of Nature",
      "row": 8,
      "col": 2,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Summons 3 treants to attack enemy targets for 30 sec."
      ],
      "cn": "自然之力",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>12% 的基础法力值</td><th>30码范围</th></tr></table><table  width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>召唤3个树人攻击敌人，持续30 秒。"
      ]
     },
     {
      "name": "Gale Winds",
      "row": 8,
      "col": 3,
      "maxRank": 2,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases damage done by your Hurricane and Typhoon spells by 15%, and increases the range of your Cyclone spell by 2 yards.",
       "Increases damage done by your Hurricane and Typhoon spells by 30%, and increases the range of your Cyclone spell by 4 yards."
      ],
      "cn": "强风",
      "cnDesc": [
       "使你的飓风和台风法术造成的伤害提高15%，旋风法术的射程延长2码。",
       "使你的飓风和台风法术造成的伤害提高30%，旋风法术的射程延长4码。"
      ]
     },
     {
      "name": "Earth and Moon",
      "row": 9,
      "col": 1,
      "maxRank": 3,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Wrath and Starfire spells have a 100% chance to apply the Earth and Moon effect, which increases spell damage taken by 4% for 12 sec.  Also increases your spell damage by 2%.",
       "Your Wrath and Starfire spells have a 100% chance to apply the Earth and Moon effect, which increases spell damage taken by 9% for 12 sec.  Also increases your spell damage by 4%.",
       "Your Wrath and Starfire spells have a 100% chance to apply the Earth and Moon effect, which increases spell damage taken by 13% for 12 sec.  Also increases your spell damage by 6%."
      ],
      "cn": "大地与月亮",
      "cnDesc": [
       "你的愤怒和星火术有100%的几率为目标附加大地与月亮效果，使其受到的法术伤害提高4%，持续12 秒。你的法术伤害提高2%。",
       "你的愤怒和星火术有100%的几率为目标附加大地与月亮效果，使其受到的法术伤害提高9%，持续12 秒。你的法术伤害提高4%。",
       "你的愤怒和星火术有100%的几率为目标附加大地与月亮效果，使其受到的法术伤害提高13%，持续12 秒。你的法术伤害提高6%。"
      ]
     },
     {
      "name": "Starfall",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You summon a flurry of stars from the sky on all targets within 30 yards of the caster, each dealing 145 to 167 Arcane damage. Also causes 26 Arcane damage to all other enemies within 5 yards of the enemy target. Maximum 20 stars. Lasts 10 sec.  Shapeshifting into an animal form or mounting cancels the effect. Any effect which causes you to lose control of your character will suppress the starfall effect."
      ],
      "cn": "星辰坠落",
      "cnDesc": [
       "35% 的基础法力值<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>1 分钟冷却时间</th></tr></table>你召唤流星从天而降，攻击你身边半径30码范围内的所有敌人，每颗流星都会造成145到167点奥术伤害，并对目标周围半径5码范围内的所有敌方目标造成额外的26点奥术伤害。最多可以召唤20颗流星。持续10 秒。变形进入动物形态或使用坐骑会打断这个效果。任何导致你的角色失去控制的效果都会中断星辰坠落。"
      ]
     }
    ],
    "sprite": "assets/sprites/druid_balance.webp"
   },
   {
    "name": "Feral Combat",
    "cn": "野性战斗",
    "bg": "assets/tree-bg/druid_feralcombat.jpg",
    "talents": [
     {
      "name": "Ferocity",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 1 Rage or Energy.",
       "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 2 Rage or Energy.",
       "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 3 Rage or Energy.",
       "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 4 Rage or Energy.",
       "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 5 Rage or Energy."
      ],
      "cn": "凶暴",
      "cnDesc": [
       "使你的重殴、横扫、爪击、斜掠和裂伤技能的怒气或能量消耗减少1点。",
       "使你的重殴、横扫、爪击、斜掠和裂伤技能的怒气或能量消耗减少2点。",
       "使你的重殴、横扫、爪击、斜掠和裂伤技能的怒气或能量消耗减少3点。",
       "使你的重殴、横扫、爪击、斜掠和裂伤技能的怒气或能量消耗减少4点。",
       "使你的重殴、横扫、爪击、斜掠和裂伤技能的怒气或能量消耗减少5点。"
      ]
     },
     {
      "name": "Feral Aggression",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the attack power reduction of your Demoralizing Roar by 8% and the damage caused by your Ferocious Bite by 3%.",
       "Increases the attack power reduction of your Demoralizing Roar by 16% and the damage caused by your Ferocious Bite by 6%.",
       "Increases the attack power reduction of your Demoralizing Roar by 24% and the damage caused by your Ferocious Bite by 9%.",
       "Increases the attack power reduction of your Demoralizing Roar by 32% and the damage caused by your Ferocious Bite by 12%.",
       "Increases the attack power reduction of your Demoralizing Roar by 40% and the damage caused by your Ferocious Bite by 15%."
      ],
      "cn": "野性侵略",
      "cnDesc": [
       "使你的挫志咆哮的攻击强度减弱效果提高8%，凶猛撕咬技能所造成的伤害提高3%。",
       "使你的挫志咆哮的攻击强度减弱效果提高16%，凶猛撕咬技能所造成的伤害提高6%。",
       "使你的挫志咆哮的攻击强度减弱效果提高24%，凶猛撕咬技能所造成的伤害提高9%。",
       "使你的挫志咆哮的攻击强度减弱效果提高32%，凶猛撕咬技能所造成的伤害提高12%。",
       "使你的挫志咆哮的攻击强度减弱效果提高40%，凶猛撕咬技能所造成的伤害提高15%。"
      ]
     },
     {
      "name": "Feral Instinct",
      "row": 1,
      "col": 0,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Swipe ability by 10% and reduces the chance enemies have to detect you while Prowling.",
       "Increases the damage done by your Swipe ability by 20% and reduces the chance enemies have to detect you while Prowling.",
       "Increases the damage done by your Swipe ability by 30% and reduces the chance enemies have to detect you while Prowling."
      ],
      "cn": "野性本能",
      "cnDesc": [
       "使你的横扫技能造成的伤害提高10%，并在你潜行时降低敌人侦测到你的几率。",
       "使你的横扫技能造成的伤害提高20%，并在你潜行时降低敌人侦测到你的几率。",
       "使你的横扫技能造成的伤害提高30%，并在你潜行时降低敌人侦测到你的几率。"
      ]
     },
     {
      "name": "Savage Fury",
      "row": 1,
      "col": 1,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage caused by your Claw, Rake, Mangle (Cat), Mangle (Bear), and Maul abilities by 10%.",
       "Increases the damage caused by your Claw, Rake, Mangle (Cat), Mangle (Bear), and Maul abilities by 20%."
      ],
      "cn": "野蛮暴怒",
      "cnDesc": [
       "使你的爪击、斜掠、裂伤（豹）、裂伤（熊）和重殴技能的伤害提高10%。",
       "使你的爪击、斜掠、裂伤（豹）、裂伤（熊）和重殴技能的伤害提高20%。"
      ]
     },
     {
      "name": "Thick Hide",
      "row": 1,
      "col": 2,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Armor contribution from cloth and leather items by 4%.",
       "Increases your Armor contribution from cloth and leather items by 7%.",
       "Increases your Armor contribution from cloth and leather items by 10%."
      ],
      "cn": "厚皮",
      "cnDesc": [
       "使你由布甲和皮甲得到的护甲值加成提高4%。",
       "使你由布甲和皮甲得到的护甲值加成提高7%。",
       "使你由布甲和皮甲得到的护甲值加成提高10%。"
      ]
     },
     {
      "name": "Feral Swiftness",
      "row": 2,
      "col": 0,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your movement speed by 15% in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 2%.",
       "Increases your movement speed by 30% in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 4%."
      ],
      "cn": "豹之迅捷",
      "cnDesc": [
       "使你在猎豹形态下的移动速度提高15%，在猎豹形态、熊形态和巨熊形态下的躲闪几率提高2%。",
       "使你在猎豹形态下的移动速度提高30%，在猎豹形态、熊形态和巨熊形态下的躲闪几率提高4%。"
      ]
     },
     {
      "name": "Survival Instincs",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When activated, this ability temporarily grants you 30% of your maximum health for 20 sec while in Bear Form, Cat Form, or Dire Bear Form. After the effect expires, the health is lost."
      ],
      "cn": "生存本能",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>激活之后，这个技能使你在熊、猎豹和巨熊形态下暂时获得相当于生命值上限30%的生命值，持续20 秒。效果消失后，额外的生命值会被扣除。"
      ]
     },
     {
      "name": "Sharpened Claws",
      "row": 2,
      "col": 2,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 2%.",
       "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 4%.",
       "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 6%."
      ],
      "cn": "锋利兽爪",
      "cnDesc": [
       "使你在猎豹、熊或巨熊形态下的爆击几率提高2%。",
       "使你在猎豹、熊或巨熊形态下的爆击几率提高4%。",
       "使你在猎豹、熊或巨熊形态下的爆击几率提高6%。"
      ]
     },
     {
      "name": "Shredding Attacks",
      "row": 3,
      "col": 0,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the energy cost of your Shred ability by 9 and the rage cost of your Lacerate ability by 1.",
       "Reduces the energy cost of your Shred ability by 18 and the rage cost of your Lacerate ability by 2."
      ],
      "cn": "撕碎攻击",
      "cnDesc": [
       "使你的撕碎技能所消耗的能量值减少9点，割伤技能所消耗的怒气值减少1点。",
       "使你的撕碎技能所消耗的能量值减少18点，割伤技能所消耗的怒气值减少2点。"
      ]
     },
     {
      "name": "Predatory Strikes",
      "row": 3,
      "col": 1,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your melee attack power in Cat, Bear and Dire Bear Forms by 50% of your level and 7% of any attack power on your equipped weapon.  In addition, your finishing moves have a 7% chance per combo point to make your next Nature spell with a base casting time less than 10 sec. become an instant cast spell.",
       "Increases your melee attack power in Cat, Bear and Dire Bear Forms by 100% of your level and 14% of any attack power on your equipped weapon.  In addition, your finishing moves have a 13% chance per combo point to make your next Nature spell with a base casting time less than 10 sec. become an instant cast spell.",
       "Increases your melee attack power in Cat, Bear and Dire Bear Forms by 150% of your level and 20% of any attack power on your equipped weapon.  In addition, your finishing moves have a 20% chance per combo point to make your next Nature spell with a base casting time less than 10 sec. become an instant cast spell."
      ],
      "cn": "猛兽攻击",
      "cnDesc": [
       "使你在猎豹、熊和巨熊形态下的近战攻击强度加成提高，数值相当于你的当前等级的50%再加上你所装备的武器所提供攻击强度的7%。此外，每个连击点数都使你的终结技有7%的几率让你的下一个基础施法时间少于10秒的自然系法术变为瞬发。",
       "使你在猎豹、熊和巨熊形态下的近战攻击强度加成提高，数值相当于你的当前等级的100%再加上你所装备的武器所提供攻击强度的14%。此外，每个连击点数都使你的终结技有13%的几率让你的下一个基础施法时间少于10秒的自然系法术变为瞬发。",
       "使你在猎豹、熊和巨熊形态下的近战攻击强度加成提高，数值相当于你的当前等级的150%再加上你所装备的武器所提供攻击强度的20%。此外，每个连击点数都使你的终结技有20%的几率让你的下一个基础施法时间少于10秒的自然系法术变为瞬发。"
      ]
     },
     {
      "name": "Primal Fury",
      "row": 3,
      "col": 2,
      "maxRank": 2,
      "req": 15,
      "prereq": "Sharpened Claws",
      "prereqRank": 3,
      "desc": [
       "Gives you a 50% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points  have a 50% chance to add an additional combo point.",
       "Gives you a 100% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points  have a 100% chance to add an additional combo point."
      ],
      "cn": "原始狂怒",
      "cnDesc": [
       "使你有50%的几率在熊形态或巨熊形态下打出爆击之后获得5点额外的怒气值，你在猎豹形态下使用的任何可以增加连击点数的技能在爆击之后有50%的几率增加一个额外的连击点数。",
       "使你有100%的几率在熊形态或巨熊形态下打出爆击之后获得5点额外的怒气值，你在猎豹形态下使用的任何可以增加连击点数的技能在爆击之后有100%的几率增加一个额外的连击点数。"
      ]
     },
     {
      "name": "Primal Precision",
      "row": 3,
      "col": 3,
      "maxRank": 2,
      "req": 15,
      "prereq": "Sharpened Claws",
      "prereqRank": 3,
      "desc": [
       "Increases your expertise by 5, and you are refunded 40% of the energy cost of a finishing move if it fails to land.",
       "Increases your expertise by 10, and you are refunded 80% of the energy cost of a finishing move if it fails to land."
      ],
      "cn": "原始精准",
      "cnDesc": [
       "使你的精准提高5。如果你的终结技未命中目标，则返还该技能所消耗能量值的40%。",
       "使你的精准提高10。如果你的终结技未命中目标，则返还该技能所消耗能量值的80%。"
      ]
     },
     {
      "name": "Brutal Impact",
      "row": 4,
      "col": 0,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the stun duration of your Bash and Pounce abilities by 0.5 sec and decreases the cooldown of Bash by 15 sec.",
       "Increases the stun duration of your Bash and Pounce abilities by 1 sec and decreases the cooldown of Bash by 30 sec."
      ],
      "cn": "野蛮冲撞",
      "cnDesc": [
       "使你的猛击和突袭技能的击昏效果持续时间延长0.5秒，猛击技能的冷却时间缩短15秒。",
       "使你的猛击和突袭技能的击昏效果持续时间延长1秒，猛击技能的冷却时间缩短30秒。"
      ]
     },
     {
      "name": "Feral Charge",
      "row": 4,
      "col": 2,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Teaches Feral Charge (Bear) and Feral Charge (Cat).\n\nFeral Charge (Bear) - Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec. This ability can be used in Bear Form and Dire Bear Form. 15 second cooldown.\n\nFeral Charge (Cat) - Causes you to leap behind an enemy, dazing them for 3 sec. 30 second cooldown."
      ],
      "cn": "野性冲锋",
      "cnDesc": [
       "教你学会野性冲锋（熊）和野性冲锋（豹）。<br /><br />野性冲锋（熊） - 向目标冲锋，使其停止动作，并使其在4 秒内不能施放任何法术。这个技能可以在熊形态和巨熊形态下使用。15秒冷却时间。<br /><br />野性冲锋（豹） - 跳跃到敌人背后，使其眩晕3 秒。30秒冷却时间。"
      ]
     },
     {
      "name": "Nurturing Instinct",
      "row": 4,
      "col": 3,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your healing spells by up to 35% of your Agility, and increases healing done to you by 10% while in Cat form.",
       "Increases your healing spells by up to 70% of your Agility, and increases healing done to you by 20% while in Cat form."
      ],
      "cn": "治愈本能",
      "cnDesc": [
       "使你的治疗法术效果提高，数值相当于你的敏捷值的35%，并使你在猎豹形态下受到的治疗量提高10%。",
       "使你的治疗法术效果提高，数值相当于你的敏捷值的70%，并使你在猎豹形态下受到的治疗量提高20%。"
      ]
     },
     {
      "name": "Natural Reaction",
      "row": 5,
      "col": 0,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your dodge while in Bear Form or Dire Bear Form by 2%, and you regenerate 1 rage every time you dodge while in Bear Form or Dire Bear Form.",
       "Increases your dodge while in Bear Form or Dire Bear Form by 4%, and you regenerate 2 rage every time you dodge while in Bear Form or Dire Bear Form.",
       "Increases your dodge while in Bear Form or Dire Bear Form by 6%, and you regenerate 3 rage every time you dodge while in Bear Form or Dire Bear Form."
      ],
      "cn": "自然反射",
      "cnDesc": [
       "使你在熊形态和巨熊形态下的躲闪几率提高2%，在熊形态和巨熊形态下每次躲闪攻击都可以获得1点怒气值。",
       "使你在熊形态和巨熊形态下的躲闪几率提高4%，在熊形态和巨熊形态下每次躲闪攻击都可以获得2点怒气值。",
       "使你在熊形态和巨熊形态下的躲闪几率提高6%，在熊形态和巨熊形态下每次躲闪攻击都可以获得3点怒气值。"
      ]
     },
     {
      "name": "Heart of the Wild",
      "row": 5,
      "col": 1,
      "maxRank": 5,
      "req": 25,
      "prereq": "Predatory Strikes",
      "prereqRank": 3,
      "desc": [
       "Increases your Intellect by 4%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 2% and while in Cat Form your attack power is increased by 2%.",
       "Increases your Intellect by 8%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your attack power is increased by 4%.",
       "Increases your Intellect by 12%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 6% and while in Cat Form your attack power is increased by 6%.",
       "Increases your Intellect by 16%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 8% and while in Cat Form your attack power is increased by 8%.",
       "Increases your Intellect by 20%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 10% and while in Cat Form your attack power is increased by 10%."
      ],
      "cn": "野性之心",
      "cnDesc": [
       "使你的智力提高4%。另外，在熊或巨熊形态下，你的耐力提高2%，在猎豹形态下，你的攻击强度提高2%。",
       "使你的智力提高8%。另外，在熊或巨熊形态下，你的耐力提高4%，在猎豹形态下，你的攻击强度提高4%。",
       "使你的智力提高12%。另外，在熊或巨熊形态下，你的耐力提高6%，在猎豹形态下，你的攻击强度提高6%。",
       "使你的智力提高16%。另外，在熊或巨熊形态下，你的耐力提高8%，在猎豹形态下，你的攻击强度提高8%。",
       "使你的智力提高20%。另外，在熊或巨熊形态下，你的耐力提高10%，在猎豹形态下，你的攻击强度提高10%。"
      ]
     },
     {
      "name": "Survival of the Fittest",
      "row": 5,
      "col": 2,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases all attributes by 2%, reduces the chance you'll be critically hit by melee attacks by 2%, and increases your armor contribution from cloth and leather items in Bear Form and Dire Bear Form by 11%.",
       "Increases all attributes by 4%, reduces the chance you'll be critically hit by melee attacks by 4%, and increases your armor contribution from cloth and leather items in Bear Form and Dire Bear Form by 22%.",
       "Increases all attributes by 6%, reduces the chance you'll be critically hit by melee attacks by 6%, and increases your armor contribution from cloth and leather items in Bear Form and Dire Bear Form by 33%."
      ],
      "cn": "适者生存",
      "cnDesc": [
       "使你的所有属性提高2%，被近战爆击的几率降低2%，在熊形态和巨熊形态下由布甲和皮甲得到的护甲值加成提高11%。",
       "使你的所有属性提高4%，被近战爆击的几率降低4%，在熊形态和巨熊形态下由布甲和皮甲得到的护甲值加成提高22%。",
       "使你的所有属性提高6%，被近战爆击的几率降低6%，在熊形态和巨熊形态下由布甲和皮甲得到的护甲值加成提高33%。"
      ]
     },
     {
      "name": "Leader of the Pack",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases ranged and melee critical chance of all party and raid members within 100 yards by 5%."
      ],
      "cn": "兽群领袖",
      "cnDesc": [
       "在猎豹、熊或巨熊形态下，使半径100码范围内的所有小队成员的远程和近战攻击的爆击几率提高5%。"
      ]
     },
     {
      "name": "Improved Leader of the Pack",
      "row": 6,
      "col": 2,
      "maxRank": 2,
      "req": 30,
      "prereq": "Leader of the Pack",
      "prereqRank": 1,
      "desc": [
       "Your Leader of the Pack ability also causes affected targets to heal themselves for 2% of their total health when they critically hit with a melee or ranged attack.  The healing effect cannot occur more than once every 6 sec.  In addition, you gain 4% of your maximum mana when you benefit from this heal.",
       "Your Leader of the Pack ability also causes affected targets to heal themselves for 4% of their total health when they critically hit with a melee or ranged attack.  The healing effect cannot occur more than once every 6 sec.  In addition, you gain 8% of your maximum mana when you benefit from this heal."
      ],
      "cn": "强化兽群领袖",
      "cnDesc": [
       "你的兽群领袖技能影响到的目标在打出近战或远程爆击之后可以恢复2%的生命值。这个治疗效果每6秒只能出现一次。另外，你每次因爆击得到治疗，就恢复4%的法力值。",
       "你的兽群领袖技能影响到的目标在打出近战或远程爆击之后可以恢复4%的生命值。这个治疗效果每6秒只能出现一次。另外，你每次因爆击得到治疗，就恢复8%的法力值。"
      ]
     },
     {
      "name": "Primal Tenacity",
      "row": 6,
      "col": 3,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the duration of fear effects by 10%, reduces all damage taken while stunned by 10% while in Cat Form.",
       "Reduces the duration of fear effects by 20%, reduces all damage taken while stunned by 20% while in Cat Form.",
       "Reduces the duration of fear effects by 30%, reduces all damage taken while stunned by 30% while in Cat Form."
      ],
      "cn": "原始坚韧",
      "cnDesc": [
       "使恐惧效果的持续时间缩短10%，在豹形态的昏迷状态下受到的所有伤害降低10%。",
       "使恐惧效果的持续时间缩短20%，在豹形态的昏迷状态下受到的所有伤害降低20%。",
       "使恐惧效果的持续时间缩短30%，在豹形态的昏迷状态下受到的所有伤害降低30%。"
      ]
     },
     {
      "name": "Protector of the Pack",
      "row": 7,
      "col": 0,
      "maxRank": 3,
      "req": 35,
      "prereq": "Leader of the Pack",
      "prereqRank": 1,
      "desc": [
       "Increases your attack power by 2% and reduces the damage you take by 4%, while in Bear or Dire Bear Form.",
       "Increases your attack power by 4% and reduces the damage you take by 8%, while in Bear or Dire Bear Form.",
       "Increases your attack power by 6% and reduces the damage you take by 12%, while in Bear or Dire Bear Form."
      ],
      "cn": "兽群卫士",
      "cnDesc": [
       "使你在熊形态和巨熊形态下的攻击强度提高2%，承受的伤害降低4%。",
       "使你在熊形态和巨熊形态下的攻击强度提高4%，承受的伤害降低8%。",
       "使你在熊形态和巨熊形态下的攻击强度提高6%，承受的伤害降低12%。"
      ]
     },
     {
      "name": "Predatory Instincts",
      "row": 7,
      "col": 2,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While in Cat Form increases your damage from melee critical strikes by 3% and reduces the damage taken from area of effect attacks by 10%.",
       "While in Cat Form increases your damage from melee critical strikes by 7% and reduces the damage taken from area of effect attacks by 20%.",
       "While in Cat Form increases your damage from melee critical strikes by 10% and reduces the damage taken from area of effect attacks by 30%."
      ],
      "cn": "狩猎天性",
      "cnDesc": [
       "在猎豹形态下，使你的近战爆击伤害提高3%，受到范围攻击时承受的伤害降低10%。",
       "在猎豹形态下，使你的近战爆击伤害提高7%，受到范围攻击时承受的伤害降低20%。",
       "在猎豹形态下，使你的近战爆击伤害提高10%，受到范围攻击时承受的伤害降低30%。"
      ]
     },
     {
      "name": "Infected Wounds",
      "row": 7,
      "col": 3,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Shred, Maul, and Mangle attacks cause an Infected Wound in the target. The Infected Wound reduces the movement speed of the target by 16% and the attack speed by 6%. Lasts 12 sec.",
       "Your Shred, Maul, and Mangle attacks cause an Infected Wound in the target. The Infected Wound reduces the movement speed of the target by 34% and the attack speed by 14%. Lasts 12 sec.",
       "Your Shred, Maul, and Mangle attacks cause an Infected Wound in the target. The Infected Wound reduces the movement speed of the target by 50% and the attack speed by 20%. Lasts 12 sec."
      ],
      "cn": "感染伤口",
      "cnDesc": [
       "你的撕碎、重殴和裂伤技能使目标受到感染伤口效果的影响，移动速度降低16%，攻击速度降低6%。效果持续12 秒。",
       "你的撕碎、重殴和裂伤技能使目标受到感染伤口效果的影响，移动速度降低34%，攻击速度降低14%。效果持续12 秒。",
       "你的撕碎、重殴和裂伤技能使目标受到感染伤口效果的影响，移动速度降低50%，攻击速度降低20%。效果持续12 秒。"
      ]
     },
     {
      "name": "King of the Jungle",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While using your Enrage ability in Bear Form or Dire Bear Form, your damage is increased by 5%, and your Tiger's Fury ability also instantly restores 20 energy.  In addition, the mana cost of Bear Form, Cat Form, and Dire Bear Form is reduced by 20%.",
       "While using your Enrage ability in Bear Form or Dire Bear Form, your damage is increased by 10%, and your Tiger's Fury ability also instantly restores 40 energy.  In addition, the mana cost of Bear Form, Cat Form, and Dire Bear Form is reduced by 40%.",
       "While using your Enrage ability in Bear Form or Dire Bear Form, your damage is increased by 15%, and your Tiger's Fury ability also instantly restores 60 energy.  In addition, the mana cost of Bear Form, Cat Form, and Dire Bear Form is reduced by 60%."
      ],
      "cn": "丛林之王",
      "cnDesc": [
       "在熊形态或巨熊形态下使用激怒技能时，你所造成的伤害提高5%；另外你的猛虎之怒技能在使用时可以立即恢复20点能量值。另外，变形为熊形态、猎豹形态和巨熊形态的法力值消耗减少20%。",
       "在熊形态或巨熊形态下使用激怒技能时，你所造成的伤害提高10%；另外你的猛虎之怒技能在使用时可以立即恢复40点能量值。另外，变形为熊形态、猎豹形态和巨熊形态的法力值消耗减少40%。",
       "在熊形态或巨熊形态下使用激怒技能时，你所造成的伤害提高15%；另外你的猛虎之怒技能在使用时可以立即恢复60点能量值。另外，变形为熊形态、猎豹形态和巨熊形态的法力值消耗减少60%。"
      ]
     },
     {
      "name": "Mangle",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": "Leader of the Pack",
      "prereqRank": 1,
      "desc": [
       "Mangle the target, inflicting damage and causing the target to take additional damage from bleed effects for 1 min.  This ability can be used in Cat Form or Dire Bear Form."
      ],
      "cn": "裂伤",
      "cnDesc": [
       "对目标造成伤害，并使流血效果对其造成的伤害提高，持续1 分钟。这个技能可以在猎豹形态或巨熊形态下使用。"
      ]
     },
     {
      "name": "Improved Mangle",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": "Mangle",
      "prereqRank": 1,
      "desc": [
       "Reduces the cooldown of your Mangle (Bear) ability by 0.5 sec., and reduces the energy cost of your Mangle (Cat) ability by 2.",
       "Reduces the cooldown of your Mangle (Bear) ability by 1 sec., and reduces the energy cost of your Mangle (Cat) ability by 4.",
       "Reduces the cooldown of your Mangle (Bear) ability by 1.5 sec., and reduces the energy cost of your Mangle (Cat) ability by 6."
      ],
      "cn": "强化裂伤",
      "cnDesc": [
       "使你的裂伤（熊）的冷却时间缩短0.5秒，裂伤（豹）所消耗的能量值减少2点。",
       "使你的裂伤（熊）的冷却时间缩短1秒，裂伤（豹）所消耗的能量值减少4点。",
       "使你的裂伤（熊）的冷却时间缩短1.5秒，裂伤（豹）所消耗的能量值减少6点。"
      ]
     },
     {
      "name": "Rend and Tear",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases damage done by your Maul and Shred attacks on bleeding targets by 4%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 5%.",
       "Increases damage done by your Maul and Shred attacks on bleeding targets by 8%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 10%.",
       "Increases damage done by your Maul and Shred attacks on bleeding targets by 12%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 15%.",
       "Increases damage done by your Maul and Shred attacks on bleeding targets by 16%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 20%.",
       "Increases damage done by your Maul and Shred attacks on bleeding targets by 20%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 25%."
      ],
      "cn": "狂乱撕扯",
      "cnDesc": [
       "使你的重殴和撕碎技能对流血目标造成的伤害提高4%，凶猛撕咬对流血目标的爆击几率提高5%。",
       "使你的重殴和撕碎技能对流血目标造成的伤害提高8%，凶猛撕咬对流血目标的爆击几率提高10%。",
       "使你的重殴和撕碎技能对流血目标造成的伤害提高12%，凶猛撕咬对流血目标的爆击几率提高15%。",
       "使你的重殴和撕碎技能对流血目标造成的伤害提高16%，凶猛撕咬对流血目标的爆击几率提高20%。",
       "使你的重殴和撕碎技能对流血目标造成的伤害提高20%，凶猛撕咬对流血目标的爆击几率提高25%。"
      ]
     },
     {
      "name": "Primal Gore",
      "row": 9,
      "col": 2,
      "maxRank": 1,
      "req": 45,
      "prereq": "Rend and Tear",
      "prereqRank": 5,
      "desc": [
       "Grants the periodic damage from your Lacerate and Rip abilities the ability to critically hit."
      ],
      "cn": "原始血瘀",
      "cnDesc": [
       "使你的割伤和割裂的持续伤害可以爆击。"
      ]
     },
     {
      "name": "Berserk",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When activated, this ability causes your Mangle (Bear) ability to hit up to 3 targets and have no cooldown, and reduces the energy cost of all your Cat Form abilities by 50%. Lasts 15 sec. You cannot use Tiger's Fury while Berserk is active.\n\nClears the effect of Fear and makes you immune to Fear for the duration."
      ],
      "cn": "狂暴",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>激活之后，使你的裂伤（熊）技能攻击最多3个目标，并且没有冷却时间；使你的所有猎豹形态下的技能消耗的能量值降低50%。持续15 秒。你在狂暴期间无法使用猛虎之怒。<br /><br />狂暴立即移除你身上的恐惧效果，并使你在狂暴期间免疫恐惧效果。"
      ]
     }
    ],
    "sprite": "assets/sprites/druid_feralcombat.webp"
   },
   {
    "name": "Restoration",
    "cn": "恢复",
    "bg": "assets/tree-bg/druid_restoration.jpg",
    "talents": [
     {
      "name": "Improved Mark of the Wild",
      "row": 0,
      "col": 0,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 20%, and increases all of your total attributes by 1%.",
       "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 40%, and increases all of your total attributes by 2%."
      ],
      "cn": "强化野性印记",
      "cnDesc": [
       "使你的野性印记和野性赐福的效果提高20%，并使你的所有属性提高1%。",
       "使你的野性印记和野性赐福的效果提高40%，并使你的所有属性提高2%。"
      ]
     },
     {
      "name": "Nature's Focus",
      "row": 0,
      "col": 1,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the pushback suffered from damaging attacks  while casting Healing Touch, Wrath, Entangling Roots, Cyclone, Nourish, Regrowth and Tranquility by 23%.",
       "Reduces the pushback suffered from damaging attacks  while casting Healing Touch, Wrath, Entangling Roots, Cyclone, Nourish, Regrowth and Tranquility by 46%.",
       "Reduces the pushback suffered from damaging attacks  while casting Healing Touch, Wrath, Entangling Roots, Cyclone, Nourish, Regrowth and Tranquility by 70%."
      ],
      "cn": "自然集中",
      "cnDesc": [
       "使你在施放治疗之触、愤怒、纠缠根须、旋风、滋养、愈合或宁静时因受到伤害而承受的施法推迟时间缩短23%。",
       "使你在施放治疗之触、愤怒、纠缠根须、旋风、滋养、愈合或宁静时因受到伤害而承受的施法推迟时间缩短46%。",
       "使你在施放治疗之触、愤怒、纠缠根须、旋风、滋养、愈合或宁静时因受到伤害而承受的施法推迟时间缩短70%。"
      ]
     },
     {
      "name": "Furor",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives you 20% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form, and you keep up to 20 of your Energy when you shapeshift into Cat Form, and increases your total Intellect while in Moonkin form by 2%.",
       "Gives you 40% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form, and you keep up to 40 of your Energy when you shapeshift into Cat Form, and increases your total Intellect while in Moonkin form by 4%.",
       "Gives you 60% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form, and you keep up to 60 of your Energy when you shapeshift into Cat Form, and increases your total Intellect while in Moonkin form by 6%.",
       "Gives you 80% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form, and you keep up to 80 of your Energy when you shapeshift into Cat Form, and increases your total Intellect while in Moonkin form by 8%.",
       "Gives you 100% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form, and you keep up to 100 of your Energy when you shapeshift into Cat Form, and increases your total Intellect while in Moonkin form by 10%."
      ],
      "cn": "激怒",
      "cnDesc": [
       "使你有20%的几率在进入熊形态和巨熊形态时获得10点怒气值，或者在进入猎豹形态时获得最多20点能量值。你在枭兽形态下的智力总值提高2%。",
       "使你有40%的几率在进入熊形态和巨熊形态时获得10点怒气值，或者在进入猎豹形态时获得最多40点能量值。你在枭兽形态下的智力总值提高4%。",
       "使你有60%的几率在进入熊形态和巨熊形态时获得10点怒气值，或者在进入猎豹形态时获得最多60点能量值。你在枭兽形态下的智力总值提高6%。",
       "使你有80%的几率在进入熊形态和巨熊形态时获得10点怒气值，或者在进入猎豹形态时获得最多80点能量值。你在枭兽形态下的智力总值提高8%。",
       "使你有100%的几率在进入熊形态和巨熊形态时获得10点怒气值，或者在进入猎豹形态时获得最多100点能量值。你在枭兽形态下的智力总值提高10%。"
      ]
     },
     {
      "name": "Naturalist",
      "row": 1,
      "col": 0,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cast time of your Healing Touch spell by 0.1 sec and increases the damage you deal with physical attacks in all forms by 2%.",
       "Reduces the cast time of your Healing Touch spell by 0.2 sec and increases the damage you deal with physical attacks in all forms by 4%.",
       "Reduces the cast time of your Healing Touch spell by 0.3 sec and increases the damage you deal with physical attacks in all forms by 6%.",
       "Reduces the cast time of your Healing Touch spell by 0.4 sec and increases the damage you deal with physical attacks in all forms by 8%.",
       "Reduces the cast time of your Healing Touch spell by 0.5 sec and increases the damage you deal with physical attacks in all forms by 10%."
      ],
      "cn": "自然主义",
      "cnDesc": [
       "使你的治疗之触的施法时间减少0.1秒，你在所有形态下的物理攻击所造成的伤害提高2%。",
       "使你的治疗之触的施法时间减少0.2秒，你在所有形态下的物理攻击所造成的伤害提高4%。",
       "使你的治疗之触的施法时间减少0.3秒，你在所有形态下的物理攻击所造成的伤害提高6%。",
       "使你的治疗之触的施法时间减少0.4秒，你在所有形态下的物理攻击所造成的伤害提高8%。",
       "使你的治疗之触的施法时间减少0.5秒，你在所有形态下的物理攻击所造成的伤害提高10%。"
      ]
     },
     {
      "name": "Subtlety",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the threat generated by your restoration spells by 10% and reduces the chance your helpful spells, Moonfire, and Insect Swarm will be dispelled by 10%.",
       "Reduces the threat generated by your restoration spells by 20% and reduces the chance your helpful spells, Moonfire, and Insect Swarm will be dispelled by 20%.",
       "Reduces the threat generated by your restoration spells by 30% and reduces the chance your helpful spells, Moonfire, and Insect Swarm will be dispelled by 30%."
      ],
      "cn": "微妙",
      "cnDesc": [
       "使你的恢复系法术造成的威胁值降低10%，并使你的增益法术、月火术和虫群被驱散的几率降低10%。",
       "使你的恢复系法术造成的威胁值降低20%，并使你的增益法术、月火术和虫群被驱散的几率降低20%。",
       "使你的恢复系法术造成的威胁值降低30%，并使你的增益法术、月火术和虫群被驱散的几率降低30%。"
      ]
     },
     {
      "name": "Natural Shapeshifter",
      "row": 1,
      "col": 2,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of all shapeshifting by 10%.",
       "Reduces the mana cost of all shapeshifting by 20%.",
       "Reduces the mana cost of all shapeshifting by 30%."
      ],
      "cn": "自然变形",
      "cnDesc": [
       "使你的所有变形法术所消耗的法力值降低10%。",
       "使你的所有变形法术所消耗的法力值降低20%。",
       "使你的所有变形法术所消耗的法力值降低30%。"
      ]
     },
     {
      "name": "Intensity",
      "row": 2,
      "col": 0,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Allows 17% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 4 rage.",
       "Allows 33% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 7 rage.",
       "Allows 50% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 10 rage."
      ],
      "cn": "强烈",
      "cnDesc": [
       "使你在施法时仍保持17%的法力值恢复速度，并使你在使用激怒技能时立即获得4点怒气值。",
       "使你在施法时仍保持33%的法力值恢复速度，并使你在使用激怒技能时立即获得7点怒气值。",
       "使你在施法时仍保持50%的法力值恢复速度，并使你在使用激怒技能时立即获得10点怒气值。"
      ]
     },
     {
      "name": "Omen of Clarity",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Each of the Druid's damage, healing spells and auto attacks has a chance of causing the caster to enter a Clearcasting state. The Clearcasting state reduces the Mana, Rage or Energy cost of your next damage, healing spell or offensive ability by 100%."
      ],
      "cn": "清晰预兆",
      "cnDesc": [
       "德鲁伊的每次伤害法术、治疗法术和普通攻击都有一定几率令德鲁伊进入节能施法状态。该状态可以让你的下一个伤害法术、治疗法术或攻击技能所消耗的法力值、怒气值或能量值降低100%。"
      ]
     },
     {
      "name": "Master Shapeshifter",
      "row": 2,
      "col": 2,
      "maxRank": 2,
      "req": 10,
      "prereq": "Natural Shapeshifter",
      "prereqRank": 3,
      "desc": [
       "Grants an effect which lasts while the Druid is within the respective shapeshift form.\n\nBear Form - Increases physical damage by 2%.\n\nCat Form - Increases critical strike chance by 2%.\n\nMoonking Form - Increases spell damage by 2%.\n\nTree of Life Form - Increases healing by 2%.",
       "Grants an effect which lasts while the Druid is within the respective shapeshift form.\n\nBear Form - Increases physical damage by 4%.\n\nCat Form - Increases critical strike chance by 4%.\n\nMoonking Form - Increases spell damage by 4%.\n\nTree of Life Form - Increases healing by 4%."
      ],
      "cn": "变形大师",
      "cnDesc": [
       "当德鲁伊进入某种变形形态时获得相应的效果。<br /><br />熊形态 - 物理伤害提高2%。<br /><br />猎豹形态 - 爆击几率提高2%。<br /><br />枭兽形态 - 法术伤害提高2%。<br /><br />生命之树形态 - 治疗效果提高2%。",
       "当德鲁伊进入某种变形形态时获得相应的效果。<br /><br />熊形态 - 物理伤害提高4%。<br /><br />猎豹形态 - 爆击几率提高4%。<br /><br />枭兽形态 - 法术伤害提高4%。<br /><br />生命之树形态 - 治疗效果提高4%。"
      ]
     },
     {
      "name": "Tranquil Spirit",
      "row": 3,
      "col": 1,
      "maxRank": 5,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your Healing Touch, Nourish and Tranquility spells by 2%.",
       "Reduces the mana cost of your Healing Touch, Nourish and Tranquility spells by 4%.",
       "Reduces the mana cost of your Healing Touch, Nourish and Tranquility spells by 6%.",
       "Reduces the mana cost of your Healing Touch, Nourish and Tranquility spells by 8%.",
       "Reduces the mana cost of your Healing Touch, Nourish and Tranquility spells by 10%."
      ],
      "cn": "宁静之魂",
      "cnDesc": [
       "使你的治疗之触、滋养和宁静所消耗的法力值减少2%。",
       "使你的治疗之触、滋养和宁静所消耗的法力值减少4%。",
       "使你的治疗之触、滋养和宁静所消耗的法力值减少6%。",
       "使你的治疗之触、滋养和宁静所消耗的法力值减少8%。",
       "使你的治疗之触、滋养和宁静所消耗的法力值减少10%。"
      ]
     },
     {
      "name": "Improved Rejuvenation",
      "row": 3,
      "col": 2,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effect of your Rejuvenation spell by 5%.",
       "Increases the effect of your Rejuvenation spell by 10%.",
       "Increases the effect of your Rejuvenation spell by 15%."
      ],
      "cn": "强化回春术",
      "cnDesc": [
       "使你的回春术的效果提高5%。",
       "使你的回春术的效果提高10%。",
       "使你的回春术的效果提高15%。"
      ]
     },
     {
      "name": "Nature's Swiftness",
      "row": 4,
      "col": 0,
      "maxRank": 1,
      "req": 20,
      "prereq": "Intensity",
      "prereqRank": 3,
      "desc": [
       "When activated, your next Nature spell with a base casting time less than 10 sec. becomes an instant cast spell."
      ],
      "cn": "自然迅捷",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>激活之后，你的下一个基础施法时间少于10秒的自然系法术会成为瞬发法术。"
      ]
     },
     {
      "name": "Gift of Nature",
      "row": 4,
      "col": 1,
      "maxRank": 5,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effect of all healing spells by 2%.",
       "Increases the effect of all healing spells by 4%.",
       "Increases the effect of all healing spells by 6%.",
       "Increases the effect of all healing spells by 8%.",
       "Increases the effect of all healing spells by 10%."
      ],
      "cn": "自然赐福",
      "cnDesc": [
       "使你的所有治疗法术的效果提高2%。",
       "使你的所有治疗法术的效果提高4%。",
       "使你的所有治疗法术的效果提高6%。",
       "使你的所有治疗法术的效果提高8%。",
       "使你的所有治疗法术的效果提高10%。"
      ]
     },
     {
      "name": "Improved Tranquility",
      "row": 4,
      "col": 3,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces threat caused by Tranquility by 50%, and reduces the cooldown by 30%.",
       "Reduces threat caused by Tranquility by 100%, and reduces the cooldown by 60%."
      ],
      "cn": "强化宁静",
      "cnDesc": [
       "使你的宁静法术的威胁值降低50%，冷却时间缩短30%。",
       "使你的宁静法术的威胁值降低100%，冷却时间缩短60%。"
      ]
     },
     {
      "name": "Empowered Touch",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Healing Touch spell gains an additional 20% and your Nourish spell gains an additional 10% of your bonus healing effects.",
       "Your Healing Touch spell gains an additional 40% and your Nourish spell gains an additional 20% of your bonus healing effects."
      ],
      "cn": "治疗之触增效",
      "cnDesc": [
       "提高法术治疗的效果对你的治疗之触有20%的额外加成，对你的滋养有10%的额外加成。",
       "提高法术治疗的效果对你的治疗之触有40%的额外加成，对你的滋养有20%的额外加成。"
      ]
     },
     {
      "name": "Nature's Bounty",
      "row": 5,
      "col": 2,
      "maxRank": 5,
      "req": 25,
      "prereq": "Improved Rejuvenation",
      "prereqRank": 3,
      "desc": [
       "Increases the critical effect chance of your Regrowth and Nourish spells by 5%.",
       "Increases the critical effect chance of your Regrowth and Nourish spells by 10%.",
       "Increases the critical effect chance of your Regrowth and Nourish spells by 15%.",
       "Increases the critical effect chance of your Regrowth and Nourish spells by 20%.",
       "Increases the critical effect chance of your Regrowth and Nourish spells by 25%."
      ],
      "cn": "自然的慷慨",
      "cnDesc": [
       "使你的愈合和滋养法术的爆击几率提高5%。",
       "使你的愈合和滋养法术的爆击几率提高10%。",
       "使你的愈合和滋养法术的爆击几率提高15%。",
       "使你的愈合和滋养法术的爆击几率提高20%。",
       "使你的愈合和滋养法术的爆击几率提高25%。"
      ]
     },
     {
      "name": "Living Spirit",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Spirit by 5%.",
       "Increases your total Spirit by 10%.",
       "Increases your total Spirit by 15%."
      ],
      "cn": "生命之魂",
      "cnDesc": [
       "使你的精神总值提高5%。",
       "使你的精神总值提高10%。",
       "使你的精神总值提高15%。"
      ]
     },
     {
      "name": "Swiftmend",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Gift of Nature",
      "prereqRank": 5,
      "desc": [
       "Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal them an amount equal to 12 sec. of Rejuvenation or 18 sec. of Regrowth."
      ],
      "cn": "迅捷治愈",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>16% 的基础法力值</td><th>40码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>15 秒冷却时间</th></tr></table>吞噬友方目标身上的一个回春术或愈合的持续效果，并立即为其回复生命值，其数值等于12秒的回春效果或18秒的愈合效果。"
      ]
     },
     {
      "name": "Natural Perfection",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your critical strike chance with all spells is increased by 1% and critical strikes against you give you the Natural Perfection effect reducing all damage taken by 2%.  Stacks up to 3 times.  Lasts 8 sec.",
       "Your critical strike chance with all spells is increased by 2% and critical strikes against you give you the Natural Perfection effect reducing all damage taken by 3%.  Stacks up to 3 times.  Lasts 8 sec.",
       "Your critical strike chance with all spells is increased by 3% and critical strikes against you give you the Natural Perfection effect reducing all damage taken by 4%.  Stacks up to 3 times.  Lasts 8 sec."
      ],
      "cn": "天然完美",
      "cnDesc": [
       "你的法术爆击几率提高1%，受到爆击之后会获得天然完美效果，使你承受的所有伤害降低2%。可叠加最多3次，效果持续8 秒。",
       "你的法术爆击几率提高2%，受到爆击之后会获得天然完美效果，使你承受的所有伤害降低3%。可叠加最多3次，效果持续8 秒。",
       "你的法术爆击几率提高3%，受到爆击之后会获得天然完美效果，使你承受的所有伤害降低4%。可叠加最多3次，效果持续8 秒。"
      ]
     },
     {
      "name": "Empowered Rejuvenation",
      "row": 7,
      "col": 1,
      "maxRank": 5,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "The bonus healing effects of your healing over time spells is increased by 4%.",
       "The bonus healing effects of your healing over time spells is increased by 8%.",
       "The bonus healing effects of your healing over time spells is increased by 12%.",
       "The bonus healing effects of your healing over time spells is increased by 16%.",
       "The bonus healing effects of your healing over time spells is increased by 20%."
      ],
      "cn": "回春增效",
      "cnDesc": [
       "提高法术治疗的效果对你的持续治疗法术有4%的额外加成。",
       "提高法术治疗的效果对你的持续治疗法术有8%的额外加成。",
       "提高法术治疗的效果对你的持续治疗法术有12%的额外加成。",
       "提高法术治疗的效果对你的持续治疗法术有16%的额外加成。",
       "提高法术治疗的效果对你的持续治疗法术有20%的额外加成。"
      ]
     },
     {
      "name": "Living Seed",
      "row": 7,
      "col": 2,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you critically heal your target with Swiftmend, Regrowth, Nourish or Healing Touch spell you have a 33% chance to plant a Living Seed on the target for 30% of the amount healed. The Living Seed will bloom when the target is next attacked. Lasts 15 sec.",
       "When you critically heal your target with Swiftmend, Regrowth, Nourish or Healing Touch spell you have a 66% chance to plant a Living Seed on the target for 30% of the amount healed. The Living Seed will bloom when the target is next attacked. Lasts 15 sec.",
       "When you critically heal your target with Swiftmend, Regrowth, Nourish or Healing Touch spell you have a 100% chance to plant a Living Seed on the target for 30% of the amount healed. The Living Seed will bloom when the target is next attacked. Lasts 15 sec."
      ],
      "cn": "生命之种",
      "cnDesc": [
       "当你的迅捷治愈、愈合、滋养或治疗之触爆击之后，有33%的几率在目标身上植入一枚生命之种。该目标受到下一次攻击时，生命之种会绽放，为其恢复生命值，数值相当于之前那次治疗法术治疗量的30%。生命之种持续15 秒。",
       "当你的迅捷治愈、愈合、滋养或治疗之触爆击之后，有66%的几率在目标身上植入一枚生命之种。该目标受到下一次攻击时，生命之种会绽放，为其恢复生命值，数值相当于之前那次治疗法术治疗量的30%。生命之种持续15 秒。",
       "当你的迅捷治愈、愈合、滋养或治疗之触爆击之后，有100%的几率在目标身上植入一枚生命之种。该目标受到下一次攻击时，生命之种会绽放，为其恢复生命值，数值相当于之前那次治疗法术治疗量的30%。生命之种持续15 秒。"
      ]
     },
     {
      "name": "Revitalize",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Rejuvenation and Wild Growth spells have a 5% chance to restore 8 Energy, 4 Rage, 1% Mana or 16 Runic Power per tick.",
       "Your Rejuvenation and Wild Growth spells have a 10% chance to restore 8 Energy, 4 Rage, 1% Mana or 16 Runic Power per tick.",
       "Your Rejuvenation and Wild Growth spells have a 15% chance to restore 8 Energy, 4 Rage, 1% Mana or 16 Runic Power per tick."
      ],
      "cn": "新生",
      "cnDesc": [
       "你的回春术和野性成长每一跳都有5%的几率为目标恢复8点能量值、4点怒气值、1%的法力值或16点符文能量值。",
       "你的回春术和野性成长每一跳都有10%的几率为目标恢复8点能量值、4点怒气值、1%的法力值或16点符文能量值。",
       "你的回春术和野性成长每一跳都有15%的几率为目标恢复8点能量值、4点怒气值、1%的法力值或16点符文能量值。"
      ]
     },
     {
      "name": "Tree of Life",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": "Empowered Rejuvenation",
      "prereqRank": 5,
      "desc": [
       "Instant Reduces the mana cost of your healing over time spells by 20% and grants the ability to shapeshift into the Tree of Life. While in this form you increase healing received by 6% for all party and raid members within 100 yards, and you can only cast Restoration spells in addition to Innervate, Barkskin, Nature's Grasp and Thorns spells.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
      ],
      "cn": "生命之树",
      "cnDesc": [
       "100码范围<br />瞬发使你的持续治疗法术消耗的法力值降低20%，并使你可以进入生命之树形态。在这种形态下，你身边半径100码范围内的所有小队和团队成员受到的治疗效果提高6%。你只能施放恢复系法术、激活、树皮术、自然之握和荆棘术。<br /><br />变身可以解除施法者身上的一切变形和移动限制效果。"
      ]
     },
     {
      "name": "Improved Tree of Life",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": "Tree of Life",
      "prereqRank": 1,
      "desc": [
       "Increases your armor contribution from items while in Tree of Life Form by 67%, and increases your healing spell power by 5% of your spirit while in Tree of Life Form.",
       "Increases your armor contribution from items while in Tree of Life Form by 133%, and increases your healing spell power by 10% of your spirit while in Tree of Life Form.",
       "Increases your armor contribution from items while in Tree of Life Form by 200%, and increases your healing spell power by 15% of your spirit while in Tree of Life Form."
      ],
      "cn": "强化生命之树",
      "cnDesc": [
       "使你在生命之树形态下从装备获得的护甲值提高67%，在生命之树形态下的治疗法术强度提高，数值相当于你的精神值的5%。",
       "使你在生命之树形态下从装备获得的护甲值提高133%，在生命之树形态下的治疗法术强度提高，数值相当于你的精神值的10%。",
       "使你在生命之树形态下从装备获得的护甲值提高200%，在生命之树形态下的治疗法术强度提高，数值相当于你的精神值的15%。"
      ]
     },
     {
      "name": "Improved Barkskin",
      "row": 9,
      "col": 0,
      "maxRank": 2,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Grants 80% additional armor contribution from cloth and leather items while in Travel Form or while not shapeshifted, increases the damage reduction granted by your Barkskin spell by 5% and reduces the chance your Barkskin is dispelled by 35%.",
       "Grants 160% additional armor contribution from cloth and leather items while in Travel Form or while not shapeshifted, increases the damage reduction granted by your Barkskin spell by 10% and reduces the chance your Barkskin is dispelled by 70%."
      ],
      "cn": "强化树皮",
      "cnDesc": [
       "使你的树皮术提供的伤害减免效果提高5%。在树皮术效果持续期间，抵抗驱散的几率提高35%。在旅行形态和人形形态下也可以获得80%的额外护甲值。",
       "使你的树皮术提供的伤害减免效果提高10%。在树皮术效果持续期间，抵抗驱散的几率提高70%。在旅行形态和人形形态下也可以获得160%的额外护甲值。"
      ]
     },
     {
      "name": "Gift of the Earthmother",
      "row": 9,
      "col": 2,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total spell haste by 2% and reduces the base cooldown of your Lifebloom spell by 2%.",
       "Increases your total spell haste by 4% and reduces the base cooldown of your Lifebloom spell by 4%.",
       "Increases your total spell haste by 6% and reduces the base cooldown of your Lifebloom spell by 6%.",
       "Increases your total spell haste by 8% and reduces the base cooldown of your Lifebloom spell by 8%.",
       "Increases your total spell haste by 10% and reduces the base cooldown of your Lifebloom spell by 10%."
      ],
      "cn": "大地母亲的恩赐",
      "cnDesc": [
       "使你的法术急速总量提高2%，生命绽放法术的基础冷却时间降低2%。",
       "使你的法术急速总量提高4%，生命绽放法术的基础冷却时间降低4%。",
       "使你的法术急速总量提高6%，生命绽放法术的基础冷却时间降低6%。",
       "使你的法术急速总量提高8%，生命绽放法术的基础冷却时间降低8%。",
       "使你的法术急速总量提高10%，生命绽放法术的基础冷却时间降低10%。"
      ]
     },
     {
      "name": "Wild Growth",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": "Tree of Life",
      "prereqRank": 1,
      "desc": [
       "Heals up to 5 friendly party or raid members within 15 yards of the target for 686 over 7 sec. The amount healed is applied quickly at first, and slows down as the Wild Growth reaches its full duration."
      ],
      "cn": "野性成长",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>23% 的基础法力值</td><th>40码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>6 秒冷却时间</th></tr></table>在7 秒内为目标身边半径15码范围内的最多5个小队或团队成员恢复总计686点生命值。治疗效果起初会很快生效，在野性生长即将结束时生效速度会变慢。"
      ]
     }
    ],
    "sprite": "assets/sprites/druid_restoration.webp"
   }
  ],
  "icon": "assets/class-icons/druid.jpg"
 },
 {
  "id": "hunter",
  "name": "Hunter",
  "cn": "猎人",
  "trees": [
   {
    "name": "Beast Mastery",
    "cn": "野兽控制",
    "bg": "assets/tree-bg/hunter_beastmastery.jpg",
    "talents": [
     {
      "name": "Improved Aspect of the Hawk",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 3% for 12 sec.",
       "While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 6% for 12 sec.",
       "While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 9% for 12 sec.",
       "While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 12% for 12 sec.",
       "While Aspect of the Hawk or Dragonhawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 15% for 12 sec."
      ],
      "cn": "强化雄鹰守护",
      "cnDesc": [
       "当雄鹰守护或龙鹰守护处于激活状态时，所有普通的远程攻击都有10%的几率使你的远程攻击速度提高3%，持续12 秒。",
       "当雄鹰守护或龙鹰守护处于激活状态时，所有普通的远程攻击都有10%的几率使你的远程攻击速度提高6%，持续12 秒。",
       "当雄鹰守护或龙鹰守护处于激活状态时，所有普通的远程攻击都有10%的几率使你的远程攻击速度提高9%，持续12 秒。",
       "当雄鹰守护或龙鹰守护处于激活状态时，所有普通的远程攻击都有10%的几率使你的远程攻击速度提高12%，持续12 秒。",
       "当雄鹰守护或龙鹰守护处于激活状态时，所有普通的远程攻击都有10%的几率使你的远程攻击速度提高15%，持续12 秒。"
      ]
     },
     {
      "name": "Endurance Training",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the health of your pet by 2% and your total health by 1%.",
       "Increases the health of your pet by 4% and your total health by 2%.",
       "Increases the health of your pet by 6% and your total health by 3%.",
       "Increases the health of your pet by 8% and your total health by 4%.",
       "Increases the health of your pet by 10% and your total health by 5%."
      ],
      "cn": "耐久训练",
      "cnDesc": [
       "使你的宠物的生命值提高2%，你的生命总值提高1%。",
       "使你的宠物的生命值提高4%，你的生命总值提高2%。",
       "使你的宠物的生命值提高6%，你的生命总值提高3%。",
       "使你的宠物的生命值提高8%，你的生命总值提高4%。",
       "使你的宠物的生命值提高10%，你的生命总值提高5%。"
      ]
     },
     {
      "name": "Focused Fire",
      "row": 1,
      "col": 0,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "All damage caused by you is increased by 1% while your pet is active and the critical strike chance of your pet's special abilities is increased by 10% while Kill Command is active.",
       "All damage caused by you is increased by 2% while your pet is active and the critical strike chance of your pet's special abilities is increased by 20% while Kill Command is active."
      ],
      "cn": "火力集中",
      "cnDesc": [
       "当你的宠物处于激活状态下时，使你造成的所有伤害提高1%，当你的杀戮命令处于激活状态下时，你的宠物的特殊技能的爆击几率提高10%。",
       "当你的宠物处于激活状态下时，使你造成的所有伤害提高2%，当你的杀戮命令处于激活状态下时，你的宠物的特殊技能的爆击几率提高20%。"
      ]
     },
     {
      "name": "Improved Aspect of the Monkey",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the Dodge bonus of your Aspect of the Monkey and Aspect of the Dragonhawk by 2%.",
       "Increases the Dodge bonus of your Aspect of the Monkey and Aspect of the Dragonhawk by 4%.",
       "Increases the Dodge bonus of your Aspect of the Monkey and Aspect of the Dragonhawk by 6%."
      ],
      "cn": "强化灵猴守护",
      "cnDesc": [
       "使你的灵猴守护和龙鹰守护提供2%的额外躲闪几率。",
       "使你的灵猴守护和龙鹰守护提供4%的额外躲闪几率。",
       "使你的灵猴守护和龙鹰守护提供6%的额外躲闪几率。"
      ]
     },
     {
      "name": "Thick Hide",
      "row": 1,
      "col": 2,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [],
      "cn": "厚皮",
      "cnDesc": [
       "使你的宠物的护甲等级提高7%，你的装备所提供的护甲加成提高4%。",
       "使你的宠物的护甲等级提高14%，你的装备所提供的护甲加成提高7%。",
       "使你的宠物的护甲等级提高20%，你的装备所提供的护甲加成提高10%。"
      ]
     },
     {
      "name": "Improved Revive Pet",
      "row": 1,
      "col": 3,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Revive Pet's casting time is reduced by 3 sec, mana cost is reduced by 20%, and increases the health your pet returns with by an additional 15%.",
       "Revive Pet's casting time is reduced by 6 sec, mana cost is reduced by 40%, and increases the health your pet returns with by an additional 30%."
      ],
      "cn": "强化复活宠物",
      "cnDesc": [
       "使你的复活宠物法术的施法时间减少3秒，法力值消耗降低20%，宠物复活后的生命值提高15%。",
       "使你的复活宠物法术的施法时间减少6秒，法力值消耗降低40%，宠物复活后的生命值提高30%。"
      ]
     },
     {
      "name": "Pathfinding",
      "row": 2,
      "col": 0,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 4%, and increases your speed while mounted by 5%. The mounted movement speed increase does not stack with other effects.",
       "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 8%, and increases your speed while mounted by 10%. The mounted movement speed increase does not stack with other effects."
      ],
      "cn": "寻路",
      "cnDesc": [
       "使你的猎豹守护和豹群守护的速度加成效果提高4%，并使你的骑乘速度提高5%。此骑乘加速效果不与任何其它同类效果叠加。",
       "使你的猎豹守护和豹群守护的速度加成效果提高8%，并使你的骑乘速度提高10%。此骑乘加速效果不与任何其它同类效果叠加。"
      ]
     },
     {
      "name": "Aspect Mastery",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Aspect of the Viper - Reduces the damage penalty by 10%.\n\nAspect of the Monkey - Reduces the damage done to you while active by 5%.\n\nAspect of the Hawk - Increases the attack power bonus by 30%.\n\nAspect of the Dragonhawk - Combines the bonuses from Aspect of the Monkey and Hawk."
      ],
      "cn": "守护掌握",
      "cnDesc": [
       "蝰蛇守护 - 伤害值惩罚降低10%。<br /><br />灵猴守护 - 使你受到的伤害降低5%。<br /><br />雄鹰守护 - 攻击强度加成提高30%。<br /><br />龙鹰守护 - 获得灵猴守护和雄鹰守护的加成效果。"
      ]
     },
     {
      "name": "Unleashed Fury",
      "row": 2,
      "col": 2,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your pets by 3%.",
       "Increases the damage done by your pets by 6%.",
       "Increases the damage done by your pets by 9%.",
       "Increases the damage done by your pets by 12%.",
       "Increases the damage done by your pets by 15%."
      ],
      "cn": "狂怒释放",
      "cnDesc": [
       "使你的宠物所造成的伤害提高3%。",
       "使你的宠物所造成的伤害提高6%。",
       "使你的宠物所造成的伤害提高9%。",
       "使你的宠物所造成的伤害提高12%。",
       "使你的宠物所造成的伤害提高15%。"
      ]
     },
     {
      "name": "Improved Mend Pet",
      "row": 3,
      "col": 1,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your Mend Pet spell by 10% and gives the Mend Pet spell a 25% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.",
       "Reduces the mana cost of your Mend Pet spell by 20% and gives the Mend Pet spell a 50% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick."
      ],
      "cn": "强化治疗宠物",
      "cnDesc": [
       "使你的治疗宠物技能所消耗的法力值减少10%，并且有25%的几率每一跳驱散宠物身上的1个诅咒、疾病、魔法或中毒效果。",
       "使你的治疗宠物技能所消耗的法力值减少20%，并且有50%的几率每一跳驱散宠物身上的1个诅咒、疾病、魔法或中毒效果。"
      ]
     },
     {
      "name": "Ferocity",
      "row": 3,
      "col": 2,
      "maxRank": 5,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your pet by 2%.",
       "Increases the critical strike chance of your pet by 4%.",
       "Increases the critical strike chance of your pet by 6%.",
       "Increases the critical strike chance of your pet by 8%.",
       "Increases the critical strike chance of your pet by 10%."
      ],
      "cn": "凶暴",
      "cnDesc": [
       "使你的宠物的爆击几率提高2%。",
       "使你的宠物的爆击几率提高4%。",
       "使你的宠物的爆击几率提高6%。",
       "使你的宠物的爆击几率提高8%。",
       "使你的宠物的爆击几率提高10%。"
      ]
     },
     {
      "name": "Spirit Bond",
      "row": 4,
      "col": 0,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While your pet is active, you and your pet will regenerate 1% of total health every 10 sec., and increases healing done to you and your pet by 5%.",
       "While your pet is active, you and your pet will regenerate 2% of total health every 10 sec., and increases healing done to you and your pet by 10%."
      ],
      "cn": "灵魂联结",
      "cnDesc": [
       "当你的宠物处于激活状态下时，你和你的宠物都会每10秒恢复1%的生命值，并且都获得受到的治疗量提高5%的效果。",
       "当你的宠物处于激活状态下时，你和你的宠物都会每10秒恢复2%的生命值，并且都获得受到的治疗量提高10%的效果。"
      ]
     },
     {
      "name": "Intimidation",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Command your pet to intimidate the target, causing a high amount of threat and stunning the target for 3 sec. Lasts 15 sec."
      ],
      "cn": "胁迫",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>8% 的基础法力值</td><th>100码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>1 分钟冷却时间</th></tr></table>命令你的宠物胁迫敌人，造成大量的威胁值，并使目标昏迷3 秒。胁迫持续15 秒。"
      ]
     },
     {
      "name": "Bestial Discipline",
      "row": 4,
      "col": 3,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the Focus regeneration of your pets by 50%.",
       "Increases the Focus regeneration of your pets by 100%."
      ],
      "cn": "野兽戒律",
      "cnDesc": [
       "使你的宠物的集中值回复速度提高50%。",
       "使你的宠物的集中值回复速度提高100%。"
      ]
     },
     {
      "name": "Animal Handler",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your pet's attack power by 5%, and increases the duration of your Master's Call effect by 3 sec.",
       "Increases your pet's attack power by 10%, and increases the duration of your Master's Call effect by 6 sec."
      ],
      "cn": "驭兽者",
      "cnDesc": [
       "使你的宠物的攻击强度提高5%，主人的召唤技能的持续时间延长3秒。",
       "使你的宠物的攻击强度提高10%，主人的召唤技能的持续时间延长6秒。"
      ]
     },
     {
      "name": "Frenzy",
      "row": 5,
      "col": 2,
      "maxRank": 5,
      "req": 25,
      "prereq": "Ferocity",
      "prereqRank": 5,
      "desc": [
       "Gives your pet a 20% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
       "Gives your pet a 40% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
       "Gives your pet a 60% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
       "Gives your pet a 80% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
       "Gives your pet a 100% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike."
      ],
      "cn": "狂乱",
      "cnDesc": [
       "使你的宠物有20%的几率在对敌人造成爆击后获得攻击速度提高30%的效果，持续8 秒。",
       "使你的宠物有40%的几率在对敌人造成爆击后获得攻击速度提高30%的效果，持续8 秒。",
       "使你的宠物有60%的几率在对敌人造成爆击后获得攻击速度提高30%的效果，持续8 秒。",
       "使你的宠物有80%的几率在对敌人造成爆击后获得攻击速度提高30%的效果，持续8 秒。",
       "使你的宠物有100%的几率在对敌人造成爆击后获得攻击速度提高30%的效果，持续8 秒。"
      ]
     },
     {
      "name": "Ferocious Inspiration",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "All party and raid members have all damage increased by 1% within 100 yards of your pet. In addition, increases the damage dealt by Arcane Shot and Steady Shot by 3%.",
       "All party and raid members have all damage increased by 2% within 100 yards of your pet. In addition, increases the damage dealt by Arcane Shot and Steady Shot by 6%.",
       "All party and raid members have all damage increased by 3% within 100 yards of your pet. In addition, increases the damage dealt by Arcane Shot and Steady Shot by 9%."
      ],
      "cn": "凶猛灵感",
      "cnDesc": [
       "使在你的宠物周围半径100码内的所有小队和团队成员造成的所有伤害提高2%。另外，你的奥术射击和稳固射击造成的伤害提高3%。",
       "使在你的宠物周围半径100码内的所有小队和团队成员造成的所有伤害提高2%。另外，你的奥术射击和稳固射击造成的伤害提高6%。",
       "使在你的宠物周围半径100码内的所有小队和团队成员造成的所有伤害提高3%。另外，你的奥术射击和稳固射击造成的伤害提高9%。"
      ]
     },
     {
      "name": "Bestial Wrath",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Intimidation",
      "prereqRank": 1,
      "desc": [
       "Send your pet into a rage causing 50% additional damage for 10 sec. While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed."
      ],
      "cn": "狂野怒火",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>10% 的基础法力值</td><th>100码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>使宠物进入疯狂状态，对目标造成的伤害提高50%，持续10 秒。在这种状态下，宠物不会有任何恐惧或怜悯，也无法停止下来，除非被杀死。"
      ]
     },
     {
      "name": "Catlike Reflexes",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to dodge by 1% and your pet's chance to dodge by an additional 3%. In addition, reduces the cooldown of your Kill Command ability by 10 sec.",
       "Increases your chance to dodge by 2% and your pet's chance to dodge by an additional 6%. In addition, reduces the cooldown of your Kill Command ability by 20 sec.",
       "Increases your chance to dodge by 3% and your pet's chance to dodge by an additional 9%. In addition, reduces the cooldown of your Kill Command ability by 30 sec."
      ],
      "cn": "猎豹反射",
      "cnDesc": [
       "使你的躲闪几率提高1%，你的宠物的躲闪几率提高3%。另外，你的杀戮命令技能的冷却时间缩短10秒。",
       "使你的躲闪几率提高2%，你的宠物的躲闪几率提高6%。另外，你的杀戮命令技能的冷却时间缩短20秒。",
       "使你的躲闪几率提高3%，你的宠物的躲闪几率提高9%。另外，你的杀戮命令技能的冷却时间缩短30秒。"
      ]
     },
     {
      "name": "Invigoration",
      "row": 7,
      "col": 0,
      "maxRank": 2,
      "req": 35,
      "prereq": "Ferocious Inspiration",
      "prereqRank": 3,
      "desc": [
       "When your pet scores a critical hit with a special ability, you have a 50% chance to instantly regenerate 1% mana.",
       "When your pet scores a critical hit with a special ability, you have a 100% chance to instantly regenerate 1% mana."
      ],
      "cn": "鼓舞",
      "cnDesc": [
       "当你的宠物的特殊技能打出爆击之后，你有50%的几率立即恢复1%的法力值。",
       "当你的宠物的特殊技能打出爆击之后，你有100%的几率立即恢复1%的法力值。"
      ]
     },
     {
      "name": "Serpent's Swiftness",
      "row": 7,
      "col": 2,
      "maxRank": 5,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases ranged combat attack speed by 4% and your pet's melee attack speed by 4%.",
       "Increases ranged combat attack speed by 8% and your pet's melee attack speed by 8%.",
       "Increases ranged combat attack speed by 12% and your pet's melee attack speed by 12%.",
       "Increases ranged combat attack speed by 16% and your pet's melee attack speed by 16%.",
       "Increases ranged combat attack speed by 20% and your pet's melee attack speed by 20%."
      ],
      "cn": "蛇之迅捷",
      "cnDesc": [
       "你的远程攻击速度提高4%，你的宠物的近战攻击速度提高4%。",
       "你的远程攻击速度提高8%，你的宠物的近战攻击速度提高8%。",
       "你的远程攻击速度提高12%，你的宠物的近战攻击速度提高12%。",
       "你的远程攻击速度提高16%，你的宠物的近战攻击速度提高16%。",
       "你的远程攻击速度提高20%，你的宠物的近战攻击速度提高20%。"
      ]
     },
     {
      "name": "Longevity",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Bestial Wrath, Intimidation and Pet Special Abilities by 10%.",
       "Reduces the cooldown of your Bestial Wrath, Intimidation and Pet Special Abilities by 20%.",
       "Reduces the cooldown of your Bestial Wrath, Intimidation and Pet Special Abilities by 30%."
      ],
      "cn": "资历",
      "cnDesc": [
       "使你的狂野怒火、胁迫和宠物特殊技能的冷却时间缩短10%。",
       "使你的狂野怒火、胁迫和宠物特殊技能的冷却时间缩短20%。",
       "使你的狂野怒火、胁迫和宠物特殊技能的冷却时间缩短30%。"
      ]
     },
     {
      "name": "The Beast Within",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": "Bestial Wrath",
      "prereqRank": 1,
      "desc": [
       "Increases all damage you deal by 10% and while your pet is under the effects of Bestial Wrath, you also go into a rage causing 10% additional damage and reducing mana costs of all spells by 50% for 10 sec. While enraged, you do not feel pity or remorse or fear and you cannot be stopped unless killed."
      ],
      "cn": "野兽之心",
      "cnDesc": [
       "使你的所有伤害提高10%，并当你的宠物激活狂野怒火之后，你也会进入狂暴状态，对目标造成的伤害提高10%，所有法术所消耗的法力值降低50%，效果持续10 秒。在这种状态下，你不会有任何恐惧或怜悯，也无法停止下来，除非被杀死。"
      ]
     },
     {
      "name": "Cobra Strikes",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": "Serpent's Swiftness",
      "prereqRank": 5,
      "desc": [
       "You have a 20% chance when you critically hit with Arcane Shot, Steady Shot or Kill Shot to cause your pet's next 2 special attacks to critically hit.",
       "You have a 40% chance when you critically hit with Arcane Shot, Steady Shot or Kill Shot to cause your pet's next 2 special attacks to critically hit.",
       "You have a 60% chance when you critically hit with Arcane Shot, Steady Shot or Kill Shot to cause your pet's next 2 special attacks to critically hit."
      ],
      "cn": "眼镜蛇打击",
      "cnDesc": [
       "当你的奥术射击、稳固射击或杀戮射击打出爆击之后，有20%的几率令你的宠物的下2次特殊攻击必定爆击。",
       "当你的奥术射击、稳固射击或杀戮射击打出爆击之后，有40%的几率令你的宠物的下2次特殊攻击必定爆击。",
       "当你的奥术射击、稳固射击或杀戮射击打出爆击之后，有60%的几率令你的宠物的下2次特殊攻击必定爆击。"
      ]
     },
     {
      "name": "Kindred Spirits",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your pet's damage by 4% and you and your pet's movement speed by 2% while your pet is active. This does not stack with other movement speed increasing effects.",
       "Increases your pet's damage by 8% and you and your pet's movement speed by 4% while your pet is active. This does not stack with other movement speed increasing effects.",
       "Increases your pet's damage by 12% and you and your pet's movement speed by 6% while your pet is active. This does not stack with other movement speed increasing effects.",
       "Increases your pet's damage by 16% and you and your pet's movement speed by 8% while your pet is active. This does not stack with other movement speed increasing effects.",
       "Increases your pet's damage by 20% and you and your pet's movement speed by 10% while your pet is active. This does not stack with other movement speed increasing effects."
      ],
      "cn": "志趣相投",
      "cnDesc": [
       "使你的宠物造成的伤害提高4%。当你的宠物处于激活状态下时，你和你的宠物的移动速度提高2%。这个效果不与其它提高移动速度的效果叠加。",
       "使你的宠物造成的伤害提高8%。当你的宠物处于激活状态下时，你和你的宠物的移动速度提高4%。这个效果不与其它提高移动速度的效果叠加。",
       "使你的宠物造成的伤害提高12%。当你的宠物处于激活状态下时，你和你的宠物的移动速度提高6%。这个效果不与其它提高移动速度的效果叠加。",
       "使你的宠物造成的伤害提高16%。当你的宠物处于激活状态下时，你和你的宠物的移动速度提高8%。这个效果不与其它提高移动速度的效果叠加。",
       "使你的宠物造成的伤害提高20%。当你的宠物处于激活状态下时，你和你的宠物的移动速度提高10%。这个效果不与其它提高移动速度的效果叠加。"
      ]
     },
     {
      "name": "Beast Mastery",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You master the art of Beast training, teaching you the ability to tame Exotic pets and increasing your total amount of Pet Skill Points by 4."
      ],
      "cn": "野兽主宰",
      "cnDesc": [
       "瞬发你非常精通野兽训练，因此获得了驯服特殊宠物的能力，以及额外的4点宠物技能点数。"
      ]
     }
    ],
    "sprite": "assets/sprites/hunter_beastmastery.webp"
   },
   {
    "name": "Marksmanship",
    "cn": "射击",
    "bg": "assets/tree-bg/hunter_marksmanship.jpg",
    "talents": [
     {
      "name": "Improved Concussive Shot",
      "row": 0,
      "col": 0,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the duration of your Concussive Shot's daze effect by 1 sec.",
       "Increases the duration of your Concussive Shot's daze effect by 2 sec."
      ],
      "cn": "强化震荡射击",
      "cnDesc": [
       "使你的震荡射击的眩晕效果持续时间延长1秒。",
       "使你的震荡射击的眩晕效果持续时间延长2秒。"
      ]
     },
     {
      "name": "Focused Aim",
      "row": 0,
      "col": 1,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the pushback suffered from damaging attacks while casting Steady Shot by 23%, and increases your chance to hit by 1%.",
       "Reduces the pushback suffered from damaging attacks while casting Steady Shot by 46%, and increases your chance to hit by 2%.",
       "Reduces the pushback suffered from damaging attacks while casting Steady Shot by 70%, and increases your chance to hit by 3%."
      ],
      "cn": "专注瞄准",
      "cnDesc": [
       "使你在施放稳固射击时因受到伤害而承受的施法推迟时间缩短23%，并使你的命中几率提高1%。",
       "使你在施放稳固射击时因受到伤害而承受的施法推迟时间缩短46%，并使你的命中几率提高2%。",
       "使你在施放稳固射击时因受到伤害而承受的施法推迟时间缩短70%，并使你的命中几率提高3%。"
      ]
     },
     {
      "name": "Lethal Shots",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires Bows, Crossbows, Guns, Thrown Increases your critical strike chance with ranged weapons by 1%.",
       "Requires Bows, Crossbows, Guns, Thrown Increases your critical strike chance with ranged weapons by 2%.",
       "Requires Bows, Crossbows, Guns, Thrown Increases your critical strike chance with ranged weapons by 3%.",
       "Requires Bows, Crossbows, Guns, Thrown Increases your critical strike chance with ranged weapons by 4%.",
       "Requires Bows, Crossbows, Guns, Thrown Increases your critical strike chance with ranged weapons by 5%."
      ],
      "cn": "夺命射击",
      "cnDesc": [
       "使你的远程武器的爆击几率提高1%。",
       "使你的远程武器的爆击几率提高2%。",
       "使你的远程武器的爆击几率提高3%。",
       "使你的远程武器的爆击几率提高4%。",
       "使你的远程武器的爆击几率提高5%。"
      ]
     },
     {
      "name": "Careful Aim",
      "row": 1,
      "col": 0,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your ranged attack power by an amount equal to 33% of your total Intellect.",
       "Increases your ranged attack power by an amount equal to 66% of your total Intellect.",
       "Increases your ranged attack power by an amount equal to 100% of your total Intellect."
      ],
      "cn": "精确瞄准",
      "cnDesc": [
       "使你的远程攻击强度提高，数值相当于你的智力总值的33%。",
       "使你的远程攻击强度提高，数值相当于你的智力总值的66%。",
       "使你的远程攻击强度提高，数值相当于你的智力总值的100%。"
      ]
     },
     {
      "name": "Improved Hunter's Mark",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the bonus attack power granted by your Hunter's Mark ability by 10%, and reduces the mana cost of your Hunter's Mark ability by 33%.",
       "Increases the bonus attack power granted by your Hunter's Mark ability by 20%, and reduces the mana cost of your Hunter's Mark ability by 66%.",
       "Increases the bonus attack power granted by your Hunter's Mark ability by 30%, and reduces the mana cost of your Hunter's Mark ability by 100%."
      ],
      "cn": "强化猎人印记",
      "cnDesc": [
       "使你的猎人印记提供的攻击强度加成效果提高10%，并使其法力值消耗降低33%。",
       "使你的猎人印记提供的攻击强度加成效果提高20%，并使其法力值消耗降低66%。",
       "使你的猎人印记提供的攻击强度加成效果提高30%，并使其法力值消耗降低100%。"
      ]
     },
     {
      "name": "Mortal Shots",
      "row": 1,
      "col": 2,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike damage bonus of your ranged abilities by 6%.",
       "Increases the critical strike damage bonus of your ranged abilities by 12%.",
       "Increases the critical strike damage bonus of your ranged abilities by 18%.",
       "Increases the critical strike damage bonus of your ranged abilities by 24%.",
       "Increases the critical strike damage bonus of your ranged abilities by 30%."
      ],
      "cn": "致死射击",
      "cnDesc": [
       "使你的远程技能爆击伤害加成提高6%。",
       "使你的远程技能爆击伤害加成提高12%。",
       "使你的远程技能爆击伤害加成提高18%。",
       "使你的远程技能爆击伤害加成提高24%。",
       "使你的远程技能爆击伤害加成提高30%。"
      ]
     },
     {
      "name": "Go for the Throat",
      "row": 2,
      "col": 0,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your ranged critical hits cause your pet to generate 25 Focus.",
       "Your ranged critical hits cause your pet to generate 50 Focus."
      ],
      "cn": "直取要害",
      "cnDesc": [
       "你的远程爆击可以令你的宠物回复25点集中值。",
       "你的远程爆击可以令你的宠物回复50点集中值。"
      ]
     },
     {
      "name": "Improved Arcane Shot",
      "row": 2,
      "col": 1,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Arcane Shot by 5%.",
       "Increases the damage done by your Arcane Shot by 10%.",
       "Increases the damage done by your Arcane Shot by 15%."
      ],
      "cn": "强化奥术射击",
      "cnDesc": [
       "使你的奥术射击造成的伤害提高5%。",
       "使你的奥术射击造成的伤害提高10%。",
       "使你的奥术射击造成的伤害提高15%。"
      ]
     },
     {
      "name": "Aimed Shot",
      "row": 2,
      "col": 2,
      "maxRank": 1,
      "req": 10,
      "prereq": "Mortal Shots",
      "prereqRank": 5,
      "desc": [
       "An aimed shot that increases ranged damage by 5 and reduces healing done to that target by 50%.  Lasts 10 sec."
      ],
      "cn": "瞄准射击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>8% 的基础法力值</td><th>35码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>10 秒冷却时间</th></tr></table>瞄准目标射击，使远程伤害提高5点，并使其受到的治疗效果降低50%。持续10 秒。"
      ]
     },
     {
      "name": "Rapid Killing",
      "row": 2,
      "col": 3,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Rapid Fire ability by 1 min.  In addition, after killing an opponent that yields experience or honor, your next Aimed Shot, Arcane Shot or Chimera Shot causes 10% additional damage.  Lasts 20 sec.",
       "Reduces the cooldown of your Rapid Fire ability by 2 min.  In addition, after killing an opponent that yields experience or honor, your next Aimed Shot, Arcane Shot or Chimera Shot causes 20% additional damage.  Lasts 20 sec."
      ],
      "cn": "疾速杀戮",
      "cnDesc": [
       "使你的急速射击技能的冷却时间缩短1分钟。另外，在杀死一个能够使你获得经验值或荣誉值的敌人之后，你的下一次瞄准射击、奥术射击或奇美拉射击造成的伤害提高10%，效果持续20 秒。",
       "使你的急速射击技能的冷却时间缩短2分钟。另外，在杀死一个能够使你获得经验值或荣誉值的敌人之后，你的下一次瞄准射击、奥术射击或奇美拉射击造成的伤害提高20%，效果持续20 秒。"
      ]
     },
     {
      "name": "Improved Stings",
      "row": 3,
      "col": 1,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Serpent Sting and Wyvern Sting by 10% and the mana drained by your Viper Sting by 10%.  In addition, reduces the chance your Sting damage over time effects will be dispelled by 10%.",
       "Increases the damage done by your Serpent Sting and Wyvern Sting by 20% and the mana drained by your Viper Sting by 20%.  In addition, reduces the chance your Sting damage over time effects will be dispelled by 20%.",
       "Increases the damage done by your Serpent Sting and Wyvern Sting by 30% and the mana drained by your Viper Sting by 30%.  In addition, reduces the chance your Sting damage over time effects will be dispelled by 30%."
      ],
      "cn": "强化钉刺",
      "cnDesc": [
       "使你的毒蛇钉刺和翼龙钉刺所造成的伤害提高10%，蝰蛇钉刺所吸取的法力值提高10%，另外还可使你的造成持续伤害的钉刺效果被驱散的几率降低10%。",
       "使你的毒蛇钉刺和翼龙钉刺所造成的伤害提高20%，蝰蛇钉刺所吸取的法力值提高20%，另外还可使你的造成持续伤害的钉刺效果被驱散的几率降低20%。",
       "使你的毒蛇钉刺和翼龙钉刺所造成的伤害提高30%，蝰蛇钉刺所吸取的法力值提高30%，另外还可使你的造成持续伤害的钉刺效果被驱散的几率降低30%。"
      ]
     },
     {
      "name": "Efficiency",
      "row": 3,
      "col": 2,
      "maxRank": 5,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the Mana cost of your Shots and Stings by 3%.",
       "Reduces the Mana cost of your Shots and Stings by 6%.",
       "Reduces the Mana cost of your Shots and Stings by 9%.",
       "Reduces the Mana cost of your Shots and Stings by 12%.",
       "Reduces the Mana cost of your Shots and Stings by 15%."
      ],
      "cn": "效率",
      "cnDesc": [
       "使你施放射击和钉刺技能所消耗的法力值减少3%。",
       "使你施放射击和钉刺技能所消耗的法力值减少6%。",
       "使你施放射击和钉刺技能所消耗的法力值减少9%。",
       "使你施放射击和钉刺技能所消耗的法力值减少12%。",
       "使你施放射击和钉刺技能所消耗的法力值减少15%。"
      ]
     },
     {
      "name": "Concussive Barrage",
      "row": 4,
      "col": 0,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your successful Chimera Shot and Multi-Shot attacks have a 50% chance to Daze the target for 4 sec.",
       "Your successful Chimera Shot and Multi-Shot attacks have a 100% chance to Daze the target for 4 sec."
      ],
      "cn": "冲击弹幕",
      "cnDesc": [
       "你的奇美拉射击和多重射击命中目标后有50%的几率令目标眩晕4 秒。",
       "你的奇美拉射击和多重射击命中目标后有100%的几率令目标眩晕4 秒。"
      ]
     },
     {
      "name": "Readiness",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When activated, this ability immediately finishes the cooldown on your other Hunter abilities except Bestial Wrath."
      ],
      "cn": "准备就绪",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>激活之后，这个技能立刻使你的其它猎人技能的冷却时间结束（除了狂野怒火）。"
      ]
     },
     {
      "name": "Barrage",
      "row": 4,
      "col": 2,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley spells by 4%.",
       "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley spells by 8%.",
       "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley spells by 12%."
      ],
      "cn": "弹幕",
      "cnDesc": [
       "使你的多重射击、瞄准射击和乱射的伤害提高4%。",
       "使你的多重射击、瞄准射击和乱射的伤害提高8%。",
       "使你的多重射击、瞄准射击和乱射的伤害提高12%。"
      ]
     },
     {
      "name": "Combat Experience",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Agility and Intellect by 2%.",
       "Increases your total Agility and Intellect by 4%."
      ],
      "cn": "战斗经验",
      "cnDesc": [
       "使你的敏捷和智力总值提高2%。",
       "使你的敏捷和智力总值提高4%。"
      ]
     },
     {
      "name": "Ranged Weapon Specialization",
      "row": 5,
      "col": 3,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires Ranged Weapon Increases the damage you deal with ranged weapons by 1%.",
       "Requires Ranged Weapon Increases the damage you deal with ranged weapons by 3%.",
       "Requires Ranged Weapon Increases the damage you deal with ranged weapons by 5%."
      ],
      "cn": "远程武器专精",
      "cnDesc": [
       "使你的远程武器伤害提高1%。",
       "使你的远程武器伤害提高3%。",
       "使你的远程武器伤害提高5%。"
      ]
     },
     {
      "name": "Piercing Shots",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your critical Aimed, Steady and Chimera Shots cause the target to bleed for 10% of the damage dealt over 8 sec.",
       "Your critical Aimed, Steady and Chimera Shots cause the target to bleed for 20% of the damage dealt over 8 sec.",
       "Your critical Aimed, Steady and Chimera Shots cause the target to bleed for 30% of the damage dealt over 8 sec."
      ],
      "cn": "穿刺射击",
      "cnDesc": [
       "你的稳固射击、瞄准射击和奇美拉射击在打出爆击之后，可以使目标流血8 秒，并造成伤害（总值相当于该次射击伤害的10%）。",
       "你的稳固射击、瞄准射击和奇美拉射击在打出爆击之后，可以使目标流血8 秒，并造成伤害（总值相当于该次射击伤害的20%）。",
       "你的稳固射击、瞄准射击和奇美拉射击在打出爆击之后，可以使目标流血8 秒，并造成伤害（总值相当于该次射击伤害的30%）。"
      ]
     },
     {
      "name": "Trueshot Aura",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Readiness",
      "prereqRank": 1,
      "desc": [
       "Increases the attack power of party and raid members within 100 yards by 10%. Lasts until cancelled."
      ],
      "cn": "强击光环",
      "cnDesc": [
       "瞬发使半径100码范围内的小队和团队成员的攻击强度提高10%，持续直到主动取消。"
      ]
     },
     {
      "name": "Improved Barrage",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": "Barrage",
      "prereqRank": 3,
      "desc": [
       "Increases the critical strike chance of your Multi-Shot and Aimed Shot abilities by 4% and reduces the pushback suffered from damaging attacks while channeling Volley by 33%.",
       "Increases the critical strike chance of your Multi-Shot and Aimed Shot abilities by 8% and reduces the pushback suffered from damaging attacks while channeling Volley by 66%.",
       "Increases the critical strike chance of your Multi-Shot and Aimed Shot abilities by 12% and reduces the pushback suffered from damaging attacks while channeling Volley by 100%."
      ],
      "cn": "强化弹幕",
      "cnDesc": [
       "使你的多重射击技能和瞄准射击的爆击几率提高4%，并使你在引导乱射技能时因受到伤害而承受的施法推迟时间缩短33%。",
       "使你的多重射击技能和瞄准射击的爆击几率提高8%，并使你在引导乱射技能时因受到伤害而承受的施法推迟时间缩短66%。",
       "使你的多重射击技能和瞄准射击的爆击几率提高12%，并使你在引导乱射技能时因受到伤害而承受的施法推迟时间缩短100%。"
      ]
     },
     {
      "name": "Master Marksman",
      "row": 7,
      "col": 1,
      "maxRank": 5,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your critical strike chance by 1%, and reduces the Mana cost of your Steady Shot, Aimed Shot, and Chimera Shot by 5%.",
       "Increases your critical strike chance by 2%, and reduces the Mana cost of your Steady Shot, Aimed Shot, and Chimera Shot by 10%.",
       "Increases your critical strike chance by 3%, and reduces the Mana cost of your Steady Shot, Aimed Shot, and Chimera Shot by 15%.",
       "Increases your critical strike chance by 4%, and reduces the Mana cost of your Steady Shot, Aimed Shot, and Chimera Shot by 20%.",
       "Increases your critical strike chance by 5%, and reduces the Mana cost of your Steady Shot, Aimed Shot, and Chimera Shot by 25%."
      ],
      "cn": "狙击高手",
      "cnDesc": [
       "使你的爆击几率提高1%，稳固射击、瞄准射击和奇美拉射击的法力值消耗降低5%。",
       "使你的爆击几率提高2%，稳固射击、瞄准射击和奇美拉射击的法力值消耗降低10%。",
       "使你的爆击几率提高3%，稳固射击、瞄准射击和奇美拉射击的法力值消耗降低15%。",
       "使你的爆击几率提高4%，稳固射击、瞄准射击和奇美拉射击的法力值消耗降低20%。",
       "使你的爆击几率提高5%，稳固射击、瞄准射击和奇美拉射击的法力值消耗降低25%。"
      ]
     },
     {
      "name": "Rapid Recuperation",
      "row": 7,
      "col": 2,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You gain 2% of your mana every 3 sec while under the effect of Rapid Fire, and you gain 1% of your mana every 2 sec for 6 sec when you gain Rapid Killing.",
       "You gain 4% of your mana every 3 sec while under the effect of Rapid Fire, and you gain 2% of your mana every 2 sec for 6 sec when you gain Rapid Killing."
      ],
      "cn": "急速恢复",
      "cnDesc": [
       "在急速射击效果影响下时，你每3秒恢复2%的法力值。另外，当你获得疾速杀戮效果时，每2秒可以恢复1%的法力值，持续6 秒。",
       "在急速射击效果影响下时，你每3秒恢复4%的法力值。另外，当你获得疾速杀戮效果时，每2秒可以恢复2%的法力值，持续6 秒。"
      ]
     },
     {
      "name": "Wild Quiver",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You have a 4% chance to shoot an additional shot when doing damage with your auto shot, dealing 80% weapon nature damage. Wild Quiver consumes no ammo.",
       "You have a 8% chance to shoot an additional shot when doing damage with your auto shot, dealing 80% weapon nature damage. Wild Quiver consumes no ammo.",
       "You have a 12% chance to shoot an additional shot when doing damage with your auto shot, dealing 80% weapon nature damage. Wild Quiver consumes no ammo."
      ],
      "cn": "急速抽箭",
      "cnDesc": [
       "你的自动射击对敌人造成伤害时，你有4%的几率进行一次额外的射击，造成武器伤害值80%的自然伤害。急速抽箭不消耗任何弹药。",
       "你的自动射击对敌人造成伤害时，你有8%的几率进行一次额外的射击，造成武器伤害值80%的自然伤害。急速抽箭不消耗任何弹药。",
       "你的自动射击对敌人造成伤害时，你有12%的几率进行一次额外的射击，造成武器伤害值80%的自然伤害。急速抽箭不消耗任何弹药。"
      ]
     },
     {
      "name": "Silencing Shot",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": "Master Marksman",
      "prereqRank": 5,
      "desc": [
       "A shot that deals 50% weapon damage and Silences the target for 3 sec. Non-player victim spellcasting is also interrupted for 3 sec."
      ],
      "cn": "沉默射击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>6% 的基础法力值</td><th>35码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>20 秒冷却时间</th></tr></table>射击目标，对其造成50%的武器伤害，并使其沉默3 秒。非玩家目标的施法还会被打断3 秒。"
      ]
     },
     {
      "name": "Improved Steady Shot",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Steady Shot hits have a 5% chance to increase the damage done by your next Aimed Shot, Arcane Shot or Chimera Shot by 15%, and reduce the mana cost of your next Aimed Shot, Arcane Shot or Chimera Shot by 20%.",
       "Your Steady Shot hits have a 10% chance to increase the damage done by your next Aimed Shot, Arcane Shot or Chimera Shot by 15%, and reduce the mana cost of your next Aimed Shot, Arcane Shot or Chimera Shot by 20%.",
       "Your Steady Shot hits have a 15% chance to increase the damage done by your next Aimed Shot, Arcane Shot or Chimera Shot by 15%, and reduce the mana cost of your next Aimed Shot, Arcane Shot or Chimera Shot by 20%."
      ],
      "cn": "强化稳固射击",
      "cnDesc": [
       "你的稳固射击命中目标之后有5%的几率使你的下一次瞄准射击、奥术射击或奇美拉射击造成的伤害提高15%，并使你的下一次瞄准射击、奥术射击或奇美拉射击消耗的法力值减少20%。",
       "你的稳固射击命中目标之后有10%的几率使你的下一次瞄准射击、奥术射击或奇美拉射击造成的伤害提高15%，并使你的下一次瞄准射击、奥术射击或奇美拉射击消耗的法力值减少20%。",
       "你的稳固射击命中目标之后有15%的几率使你的下一次瞄准射击、奥术射击或奇美拉射击造成的伤害提高15%，并使你的下一次瞄准射击、奥术射击或奇美拉射击消耗的法力值减少20%。"
      ]
     },
     {
      "name": "Marked for Death",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your damage done by your shots and the damage done by your pet's special abilities by 1% on marked targets, and increases the critical strike damage bonus of your Aimed Shot, Arcane Shot, Steady Shot, Kill Shot and Chimera Shot by 2%.",
       "Increases your damage done by your shots and the damage done by your pet's special abilities by 2% on marked targets, and increases the critical strike damage bonus of your Aimed Shot, Arcane Shot, Steady Shot, Kill Shot and Chimera Shot by 4%.",
       "Increases your damage done by your shots and the damage done by your pet's special abilities by 3% on marked targets, and increases the critical strike damage bonus of your Aimed Shot, Arcane Shot, Steady Shot, Kill Shot and Chimera Shot by 6%.",
       "Increases your damage done by your shots and the damage done by your pet's special abilities by 4% on marked targets, and increases the critical strike damage bonus of your Aimed Shot, Arcane Shot, Steady Shot, Kill Shot and Chimera Shot by 8%.",
       "Increases your damage done by your shots and the damage done by your pet's special abilities by 5% on marked targets, and increases the critical strike damage bonus of your Aimed Shot, Arcane Shot, Steady Shot, Kill Shot and Chimera Shot by 10%."
      ],
      "cn": "死亡标记",
      "cnDesc": [
       "使你的射击和你的宠物的特殊技能对于被标记的目标造成的伤害提高1%，并使你的瞄准射击、奥术射击、稳固射击、杀戮射击和奇美拉射击的爆击伤害加成提高2%。",
       "使你的射击和你的宠物的特殊技能对于被标记的目标造成的伤害提高2%，并使你的瞄准射击、奥术射击、稳固射击、杀戮射击和奇美拉射击的爆击伤害加成提高4%。",
       "使你的射击和你的宠物的特殊技能对于被标记的目标造成的伤害提高3%，并使你的瞄准射击、奥术射击、稳固射击、杀戮射击和奇美拉射击的爆击伤害加成提高6%。",
       "使你的射击和你的宠物的特殊技能对于被标记的目标造成的伤害提高4%，并使你的瞄准射击、奥术射击、稳固射击、杀戮射击和奇美拉射击的爆击伤害加成提高8%。",
       "使你的射击和你的宠物的特殊技能对于被标记的目标造成的伤害提高5%，并使你的瞄准射击、奥术射击、稳固射击、杀戮射击和奇美拉射击的爆击伤害加成提高10%。"
      ]
     },
     {
      "name": "Chimera Shot",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You deal 125% weapon damage, refreshing the current Sting on your target and triggering an effect:\n\nSerpent Sting - Instantly deals 40% of the damage done by your Serpent Sting.\n\nViper Sting - Instantly restores mana to you equal to 60% of the total amount drained by your Viper Sting.\n\nScorpid Sting - Attempts to Disarm the target for 10 sec. This effect cannot occur more than once per 1 minute."
      ],
      "cn": "奇美拉射击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>12% 的基础法力值</td><th>35码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>10 秒冷却时间</th></tr></table>造成125%的武器伤害，刷新目标身上已有的钉刺，并触发一个特殊效果：<br /><br />毒蛇钉刺 - 立即造成伤害，数值相当于你的毒蛇钉刺伤害值的40%。<br /><br />蝰蛇钉刺 - 立即为你恢复法力值，数值相当于你的蝰蛇钉刺吸取法力值的60%。<br /><br />毒蝎钉刺 - 尝试缴械目标，持续10秒。这个效果每1分钟只能触发一次。"
      ]
     }
    ],
    "sprite": "assets/sprites/hunter_marksmanship.webp"
   },
   {
    "name": "Survival",
    "cn": "生存",
    "bg": "assets/tree-bg/hunter_survival.jpg",
    "talents": [
     {
      "name": "Improved Tracking",
      "row": 0,
      "col": 0,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 1%.",
       "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 2%.",
       "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 3%.",
       "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 4%.",
       "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 5%."
      ],
      "cn": "强化追踪",
      "cnDesc": [
       "在追踪野兽、恶魔、龙类、元素生物、巨人、人型生物和亡灵时，猎人对被追踪的目标造成的所有伤害提高1%。",
       "在追踪野兽、恶魔、龙类、元素生物、巨人、人型生物和亡灵时，猎人对被追踪的目标造成的所有伤害提高2%。",
       "在追踪野兽、恶魔、龙类、元素生物、巨人、人型生物和亡灵时，猎人对被追踪的目标造成的所有伤害提高3%。",
       "在追踪野兽、恶魔、龙类、元素生物、巨人、人型生物和亡灵时，猎人对被追踪的目标造成的所有伤害提高4%。",
       "在追踪野兽、恶魔、龙类、元素生物、巨人、人型生物和亡灵时，猎人对被追踪的目标造成的所有伤害提高5%。"
      ]
     },
     {
      "name": "Hawk Eye",
      "row": 0,
      "col": 1,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of your ranged weapons by 2 yards.",
       "Increases the range of your ranged weapons by 4 yards.",
       "Increases the range of your ranged weapons by 6 yards."
      ],
      "cn": "鹰眼",
      "cnDesc": [
       "使你的远程武器的射程延长2码。",
       "使你的远程武器的射程延长4码。",
       "使你的远程武器的射程延长6码。"
      ]
     },
     {
      "name": "Savage Strikes",
      "row": 0,
      "col": 2,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of Raptor Strike, Mongoose Bite and Counterattack by 10%.",
       "Increases the critical strike chance of Raptor Strike, Mongoose Bite and Counterattack by 20%."
      ],
      "cn": "野蛮打击",
      "cnDesc": [
       "使你的猛禽一击、猫鼬撕咬和反击的爆击几率提高10%。",
       "使你的猛禽一击、猫鼬撕咬和反击的爆击几率提高20%。"
      ]
     },
     {
      "name": "Surefooted",
      "row": 1,
      "col": 0,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the duration of movement impairing effects by 10%.",
       "Reduces the duration of movement impairing effects by 20%.",
       "Reduces the duration of movement impairing effects by 30%."
      ],
      "cn": "稳固",
      "cnDesc": [
       "移动限制效果的持续时间缩短10%。",
       "移动限制效果的持续时间缩短20%。",
       "移动限制效果的持续时间缩短30%。"
      ]
     },
     {
      "name": "Entrapment",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When your Frost Trap or Snake Trap are triggered you entrap all afflicted targets, preventing them from moving for 2 sec.",
       "When your Frost Trap or Snake Trap are triggered you entrap all afflicted targets, preventing them from moving for 3 sec.",
       "When your Frost Trap or Snake Trap are triggered you entrap all afflicted targets, preventing them from moving for 4 sec."
      ],
      "cn": "诱捕",
      "cnDesc": [
       "当你的冰霜陷阱和毒蛇陷阱触发时会困住目标，令它们无法移动，持续2 秒。",
       "当你的冰霜陷阱和毒蛇陷阱触发时会困住目标，令它们无法移动，持续3 秒。",
       "当你的冰霜陷阱和毒蛇陷阱触发时会困住目标，令它们无法移动，持续4 秒。"
      ]
     },
     {
      "name": "Trap Mastery",
      "row": 1,
      "col": 2,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Frost Trap and Freezing Trap - Increases the duration by 10%.\n\nImmolation Trap, Explosive Trap and Black Arrow - Increases the periodic damage done by 10%.\n\nSnake Trap - Increases the number of snakes summoned by 2.",
       "Frost Trap and Freezing Trap - Increases the duration by 20%.\n\nImmolation Trap, Explosive Trap and Black Arrow - Increases the periodic damage done by 20%.\n\nSnake Trap - Increases the number of snakes summoned by 4.",
       "Frost Trap and Freezing Trap - Increases the duration by 30%.\n\nImmolation Trap, Explosive Trap and Black Arrow - Increases the periodic damage done by 30%.\n\nSnake Trap - Increases the number of snakes summoned by 6."
      ],
      "cn": "陷阱掌握",
      "cnDesc": [
       "冰霜陷阱和冰冻陷阱 - 持续时间延长10%。<br /><br />献祭陷阱、爆炸陷阱和黑箭 - 造成的持续伤害提高10%。<br /><br />毒蛇陷阱 - 毒蛇的数量增加2。",
       "冰霜陷阱和冰冻陷阱 - 持续时间延长20%。<br /><br />献祭陷阱、爆炸陷阱和黑箭 - 造成的持续伤害提高20%。<br /><br />毒蛇陷阱 - 毒蛇的数量增加4。",
       "冰霜陷阱和冰冻陷阱 - 持续时间延长30%。<br /><br />献祭陷阱、爆炸陷阱和黑箭 - 造成的持续伤害提高30%。<br /><br />毒蛇陷阱 - 毒蛇的数量增加6。"
      ]
     },
     {
      "name": "Survival Instincts",
      "row": 1,
      "col": 3,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces all damage taken by 2% and increases the critical strike chance of your Arcane Shot, Steady Shot, and Explosive Shot by 2%.",
       "Reduces all damage taken by 4% and increases the critical strike chance of your Arcane Shot, Steady Shot, and Explosive Shot by 4%."
      ],
      "cn": "生存本能",
      "cnDesc": [
       "受到的所有伤害降低2%，奥术射击、稳固射击和爆炸射击的爆击几率提高2%。",
       "受到的所有伤害降低4%，奥术射击、稳固射击和爆炸射击的爆击几率提高4%。"
      ]
     },
     {
      "name": "Survivalist",
      "row": 2,
      "col": 0,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Stamina by 2%.",
       "Increases your Stamina by 4%.",
       "Increases your Stamina by 6%.",
       "Increases your Stamina by 8%.",
       "Increases your Stamina by 10%."
      ],
      "cn": "生存专家",
      "cnDesc": [
       "使你的耐力提高2%。",
       "使你的耐力提高4%。",
       "使你的耐力提高6%。",
       "使你的耐力提高8%。",
       "使你的耐力提高10%。"
      ]
     },
     {
      "name": "Scatter Shot",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "A short-range shot that deals 50% weapon damage and disorients the target for 4 sec. Any damage caused will remove the effect. Turns off your attack when used."
      ],
      "cn": "驱散射击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>8% 的基础法力值</td><th>15码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>30 秒冷却时间</th></tr></table>短程射击，对目标造成50%的武器伤害，并使其困惑4 秒。任何伤害都会打断该效果。使用之后结束你的攻击。"
      ]
     },
     {
      "name": "Deflection",
      "row": 2,
      "col": 2,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to parry by 1%, and reduces the duration of all Disarm effects used against you by 16%.  This does not stack with other Disarm duration reducing effects.",
       "Increases your chance to parry by 2%, and reduces the duration of all Disarm effects used against you by 25%.  This does not stack with other Disarm duration reducing effects.",
       "Increases your chance to parry by 3%, and reduces the duration of all Disarm effects used against you by 50%.  This does not stack with other Disarm duration reducing effects."
      ],
      "cn": "偏斜",
      "cnDesc": [
       "使你的招架几率提高1%，受到的所有缴械效果持续时间缩短16%。这个效果不与任何其它缩短缴械持续时间的效果叠加。",
       "使你的招架几率提高2%，受到的所有缴械效果持续时间缩短25%。这个效果不与任何其它缩短缴械持续时间的效果叠加。",
       "使你的招架几率提高3%，受到的所有缴械效果持续时间缩短50%。这个效果不与任何其它缩短缴械持续时间的效果叠加。"
      ]
     },
     {
      "name": "Survival Tactics",
      "row": 2,
      "col": 3,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the chance your Feign Death ability and all trap spells will be resisted by 2%, and reduces the cooldown of your Disengage ability by 2 sec.",
       "Reduces the chance your Feign Death ability and all trap spells will be resisted by 4%, and reduces the cooldown of your Disengage ability by 4 sec."
      ],
      "cn": "生存战术",
      "cnDesc": [
       "使敌人抵抗你的假死技能和各类陷阱的几率降低2%，并使你的逃脱技能的冷却时间缩短2秒。",
       "使敌人抵抗你的假死技能和各类陷阱的几率降低4%，并使你的逃脱技能的冷却时间缩短4秒。"
      ]
     },
     {
      "name": "T.N.T",
      "row": 3,
      "col": 1,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Explosive Shot, Explosive Trap, Black Arrow and Immolation Trap by 2%.",
       "Increases the damage done by your Explosive Shot, Explosive Trap, Black Arrow and Immolation Trap by 4%.",
       "Increases the damage done by your Explosive Shot, Explosive Trap, Black Arrow and Immolation Trap by 6%."
      ],
      "cn": "T.N.T.",
      "cnDesc": [
       "使你的献祭陷阱、爆炸陷阱、爆炸射击和黑箭造成的伤害提高2%。",
       "使你的献祭陷阱、爆炸陷阱、爆炸射击和黑箭造成的伤害提高4%。",
       "使你的献祭陷阱、爆炸陷阱、黑箭和爆炸射击造成的伤害提高6%。"
      ]
     },
     {
      "name": "Lock and Load",
      "row": 3,
      "col": 3,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You have a 33% chance when you trap a target with Freezing Trap, Freezing Arrow or Frost Trap and a 2% chance when you deal periodic damage with your Immolation Trap, Explosive Trap or Black Arrow to cause your next 2 Arcane Shot or Explosive Shot spells to trigger no cooldown, cost no mana and consume no ammo. This effect has a 22 sec cooldown.",
       "You have a 66% chance when you trap a target with Freezing Trap, Freezing Arrow or Frost Trap and a 4% chance when you deal periodic damage with your Immolation Trap, Explosive Trap or Black Arrow to cause your next 2 Arcane Shot or Explosive Shot spells to trigger no cooldown, cost no mana and consume no ammo. This effect has a 22 sec cooldown.",
       "You have a 100% chance when you trap a target with Freezing Trap, Freezing Arrow or Frost Trap and a 6% chance when you deal periodic damage with your Immolation Trap, Explosive Trap or Black Arrow to cause your next 2 Arcane Shot or Explosive Shot spells to trigger no cooldown, cost no mana and consume no ammo. This effect has a 22 sec cooldown."
      ],
      "cn": "荷枪实弹",
      "cnDesc": [
       "当你的冰冻陷阱、冰冻之箭或冰霜陷阱被一个目标触发时有33%的几率、当你的献祭陷阱、爆炸陷阱或黑箭对目标造成持续伤害时有2%的几率，使你的下2次奥术射击或爆炸射击不触发冷却、不消耗法力值，也不消耗弹药。该效果的冷却时间为22秒。",
       "当你的冰冻陷阱、冰冻之箭或冰霜陷阱被一个目标触发时有66%的几率、当你的献祭陷阱、爆炸陷阱或黑箭对目标造成持续伤害时有4%的几率，使你的下2次奥术射击或爆炸射击不触发冷却、不消耗法力值，也不消耗弹药。该效果的冷却时间为22秒。",
       "当你的冰冻陷阱、冰冻之箭或冰霜陷阱被一个目标触发时有100%的几率、当你的献祭陷阱、爆炸陷阱或黑箭对目标造成持续伤害时有6%的几率，使你的下2次奥术射击或爆炸射击不触发冷却、不消耗法力值，也不消耗弹药。该效果的冷却时间为22秒。"
      ]
     },
     {
      "name": "Hunter vs. Wild",
      "row": 4,
      "col": 0,
      "maxRank": 3,
      "req": 20,
      "prereq": "Survivalist",
      "prereqRank": 5,
      "desc": [
       "Increases you and your pet's attack power and ranged attack power equal to 10% of your total Stamina.",
       "Increases you and your pet's attack power and ranged attack power equal to 20% of your total Stamina.",
       "Increases you and your pet's attack power and ranged attack power equal to 30% of your total Stamina."
      ],
      "cn": "荒野猎手",
      "cnDesc": [
       "使你和你的宠物的攻击强度和远程攻击强度提高，数值相当于你的耐力总值的10%。",
       "使你和你的宠物的攻击强度和远程攻击强度提高，数值相当于你的耐力总值的20%。",
       "使你和你的宠物的攻击强度和远程攻击强度提高，数值相当于你的耐力总值的30%。"
      ]
     },
     {
      "name": "Killer Instinct",
      "row": 4,
      "col": 1,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your critical strike chance with all attacks by 1%.",
       "Increases your critical strike chance with all attacks by 2%.",
       "Increases your critical strike chance with all attacks by 3%."
      ],
      "cn": "杀戮本能",
      "cnDesc": [
       "使你的所有攻击的爆击几率提高1%。",
       "使你的所有攻击的爆击几率提高2%。",
       "使你的所有攻击的爆击几率提高3%。"
      ]
     },
     {
      "name": "Counterattack",
      "row": 4,
      "col": 2,
      "maxRank": 1,
      "req": 20,
      "prereq": "Deflection",
      "prereqRank": 3,
      "desc": [
       "A strike that becomes active after parrying an opponent's attack.  This attack deals AP *0.2+48 damage and immobilizes the target for 5 sec.  Counterattack cannot be blocked, dodged, or parried."
      ],
      "cn": "反击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>3% 的基础法力值</td><th>近战范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>5 秒冷却时间</th></tr></table>在招架敌人的攻击之后可以使用的技能，对敌人造成攻击强度*0.2+48点伤害，并使其无法行动，持续5 秒。反击无法被格挡、躲闪或招架。"
      ]
     },
     {
      "name": "Lightning Reflexes",
      "row": 5,
      "col": 0,
      "maxRank": 5,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Agility by 3%.",
       "Increases your Agility by 6%.",
       "Increases your Agility by 9%.",
       "Increases your Agility by 12%.",
       "Increases your Agility by 15%."
      ],
      "cn": "闪电反射",
      "cnDesc": [
       "使你的敏捷提高3%。",
       "使你的敏捷提高6%。",
       "使你的敏捷提高9%。",
       "使你的敏捷提高12%。",
       "使你的敏捷提高15%。"
      ]
     },
     {
      "name": "Resourcefulness",
      "row": 5,
      "col": 2,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of all traps, melee abilities and Black Arrow by 20% and reduces the cooldown of all traps and Black Arrow by 2 sec.",
       "Reduces the mana cost of all traps, melee abilities and Black Arrow by 40% and reduces the cooldown of all traps and Black Arrow by 4 sec.",
       "Reduces the mana cost of all traps, melee abilities and Black Arrow by 60% and reduces the cooldown of all traps and Black Arrow by 6 sec."
      ],
      "cn": "足智多谋",
      "cnDesc": [
       "使你的所有陷阱、近战技能和黑箭的法力值消耗降低20%，所有陷阱和黑箭的冷却时间缩短2秒。",
       "使你的所有陷阱、近战技能和黑箭的法力值消耗降低40%，所有陷阱和黑箭的冷却时间缩短4秒。",
       "使你的所有陷阱、近战技能和黑箭的法力值消耗降低60%，所有陷阱和黑箭的冷却时间缩短6秒。"
      ]
     },
     {
      "name": "Expose Weakness",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": "Lightning Reflexes",
      "prereqRank": 5,
      "desc": [
       "Your ranged criticals have a 33% chance to grant you Expose Weakness. Expose Weakness increases your attack power by 25% of your Agility for 7 sec.",
       "Your ranged criticals have a 66% chance to grant you Expose Weakness. Expose Weakness increases your attack power by 25% of your Agility for 7 sec.",
       "Your ranged criticals have a 100% chance to grant you Expose Weakness. Expose Weakness increases your attack power by 25% of your Agility for 7 sec."
      ],
      "cn": "破甲虚弱",
      "cnDesc": [
       "你的远程爆击有33%的几率使你获得破甲虚弱效果。破甲虚弱效果令你的攻击强度提高，数值相当于你的敏捷值的25%，效果持续7 秒。",
       "你的远程爆击有66%的几率使你获得破甲虚弱效果。破甲虚弱效果令你的攻击强度提高，数值相当于你的敏捷值的25%，效果持续7 秒。",
       "你的远程爆击有100%的几率使你获得破甲虚弱效果。破甲虚弱效果令你的攻击强度提高，数值相当于你的敏捷值的25%，效果持续7 秒。"
      ]
     },
     {
      "name": "Wyvern Sting",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Killer Instinct",
      "prereqRank": 3,
      "desc": [
       "A stinging shot that puts the target to sleep for 30 sec.  Any damage will cancel the effect.  When the target wakes up, the Sting causes 300 Nature damage over 6 sec.  Only one Sting per Hunter can be active on the target at a time."
      ],
      "cn": "翼龙钉刺",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>8% 的基础法力值</td><th>35码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>1 分钟冷却时间</th></tr></table>钉刺目标，使其沉睡30 秒。任何伤害都会取消沉睡效果。当目标醒来时，钉刺会在6 秒内对其造成300点自然伤害。每个猎人在同一时间内只能对一个目标使用一种钉刺，且同类钉刺无法叠加。"
      ]
     },
     {
      "name": "Thrill of the Hunt",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives you a 33% chance to regain 40% of the mana cost of any shot when it critically hits.",
       "Gives you a 66% chance to regain 40% of the mana cost of any shot when it critically hits.",
       "Gives you a 100% chance to regain 40% of the mana cost of any shot when it critically hits."
      ],
      "cn": "狩猎刺激",
      "cnDesc": [
       "你有33%的几率在任何射击技能爆击之后回复该技能消耗法力值的40%。",
       "你有66%的几率在任何射击技能爆击之后回复该技能消耗法力值的40%。",
       "你有100%的几率在任何射击技能爆击之后回复该技能消耗法力值的40%。"
      ]
     },
     {
      "name": "Master Tactician",
      "row": 7,
      "col": 0,
      "maxRank": 5,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your successful ranged attacks have a 10% chance to increase your critical strike chance with all attacks by 2% for 8 sec.",
       "Your successful ranged attacks have a 10% chance to increase your critical strike chance with all attacks by 4% for 8 sec.",
       "Your successful ranged attacks have a 10% chance to increase your critical strike chance with all attacks by 6% for 8 sec.",
       "Your successful ranged attacks have a 10% chance to increase your critical strike chance with all attacks by 8% for 8 sec.",
       "Your successful ranged attacks have a 10% chance to increase your critical strike chance with all attacks by 10% for 8 sec."
      ],
      "cn": "战术大师",
      "cnDesc": [
       "你的远程攻击命中后有10%的几率使你的所有攻击的爆击几率提高2%，效果持续8 秒。",
       "你的远程攻击命中后有10%的几率使你的所有攻击的爆击几率提高4%，效果持续8 秒。",
       "你的远程攻击命中后有10%的几率使你的所有攻击的爆击几率提高6%，效果持续8 秒。",
       "你的远程攻击命中后有10%的几率使你的所有攻击的爆击几率提高8%，效果持续8 秒。",
       "你的远程攻击命中后有10%的几率使你的所有攻击的爆击几率提高10%，效果持续8 秒。"
      ]
     },
     {
      "name": "Noxious Stings",
      "row": 7,
      "col": 1,
      "maxRank": 3,
      "req": 35,
      "prereq": "Wyvern Sting",
      "prereqRank": 1,
      "desc": [
       "If Wyvern Sting is dispelled, the dispeller is also afflicted by Wyvern Sting lasting 16% of the duration remaining, and increases all damage done by you on targets afflicted by your Serpent Sting by 1%.",
       "If Wyvern Sting is dispelled, the dispeller is also afflicted by Wyvern Sting lasting 25% of the duration remaining, and increases all damage done by you on targets afflicted by your Serpent Sting by 2%.",
       "If Wyvern Sting is dispelled, the dispeller is also afflicted by Wyvern Sting lasting 50% of the duration remaining, and increases all damage done by you on targets afflicted by your Serpent Sting by 3%."
      ],
      "cn": "毒性钉刺",
      "cnDesc": [
       "如果你的翼龙钉刺被驱散，则驱散者受到翼龙钉刺的影响，持续时间为被驱散钉刺剩余时间的16%。你对所有受到你所施加的毒蛇钉刺的目标造成的伤害提高1%。",
       "如果你的翼龙钉刺被驱散，则驱散者受到翼龙钉刺的影响，持续时间为被驱散钉刺剩余时间的25%。你对所有受到你所施加的毒蛇钉刺的目标造成的伤害提高2%。",
       "如果你的翼龙钉刺被驱散，则驱散者受到翼龙钉刺的影响，持续时间为被驱散钉刺剩余时间的50%。你对所有受到你所施加的毒蛇钉刺的目标造成的伤害提高3%。"
      ]
     },
     {
      "name": "Point of No Escape",
      "row": 8,
      "col": 0,
      "maxRank": 2,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of all of your attacks on targets affected by your Frost Trap, Freezing Trap and Freezing Arrow by 3%.",
       "Increases the critical strike chance of all of your attacks on targets affected by your Frost Trap, Freezing Trap and Freezing Arrow by 6%."
      ],
      "cn": "无路可逃",
      "cnDesc": [
       "所有攻击对于受到你的冰霜陷阱、冰冻陷阱和冰冻之箭效果影响的目标造成爆击的几率提高3%。",
       "所有攻击对于受到你的冰霜陷阱、冰冻陷阱和冰冻之箭效果影响的目标造成爆击的几率提高6%。"
      ]
     },
     {
      "name": "Black Arrow",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Fires a Black Arrow at the target, increasing all damage done by you to the target by 6% and dealing RAP *0.1+157*5 Shadow damage over 15 sec. Black Arrow shares a cooldown with Trap spells."
      ],
      "cn": "黑箭",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>6% 的基础法力值</td><th>35码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>30 秒冷却时间</th></tr></table>向目标射出一支黑箭，使你对其造成的所有伤害提高6%，并在15 秒内造成总计远程攻击强度*0.1+157*5点暗影伤害。黑箭与陷阱技能共享冷却时间。"
      ]
     },
     {
      "name": "Sniper Training",
      "row": 8,
      "col": 3,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your Kill Shot ability by 5%, and while standing still for 6 sec, you gain Sniper Training increasing the damage done by your Steady Shot, Aimed Shot, Black Arrow and Explosive Shot by 2% for 15 sec.",
       "Increases the critical strike chance of your Kill Shot ability by 10%, and while standing still for 6 sec, you gain Sniper Training increasing the damage done by your Steady Shot, Aimed Shot, Black Arrow and Explosive Shot by 4% for 15 sec.",
       "Increases the critical strike chance of your Kill Shot ability by 15%, and while standing still for 6 sec, you gain Sniper Training increasing the damage done by your Steady Shot, Aimed Shot, Black Arrow and Explosive Shot by 6% for 15 sec."
      ],
      "cn": "狙击训练",
      "cnDesc": [
       "使你的杀戮射击的爆击几率提高5%。当你站定6秒以上时，可以获得狙击训练效果，使你的稳固射击、瞄准射击、黑箭和爆炸射击的伤害提高2%，持续15 秒。",
       "使你的杀戮射击的爆击几率提高10%。当你站定6秒以上时，可以获得狙击训练效果，使你的稳固射击、瞄准射击、黑箭和爆炸射击的伤害提高4%，持续15 秒。",
       "使你的杀戮射击的爆击几率提高15%。当你站定6秒以上时，可以获得狙击训练效果，使你的稳固射击、瞄准射击、黑箭和爆炸射击的伤害提高6%，持续15 秒。"
      ]
     },
     {
      "name": "Hunting Party",
      "row": 9,
      "col": 2,
      "maxRank": 3,
      "req": 45,
      "prereq": "Thrill of the Hunt",
      "prereqRank": 3,
      "desc": [
       "Increases your total Agility by an additional 1%, and your Arcane Shot, Explosive Shot and Steady Shot critical strikes have a 33% chance to grant up to 10 party or raid members mana regeneration equal to 1% of the maximum mana per 5 sec. Lasts for 15 sec.",
       "Increases your total Agility by an additional 2%, and your Arcane Shot, Explosive Shot and Steady Shot critical strikes have a 66% chance to grant up to 10 party or raid members mana regeneration equal to 1% of the maximum mana per 5 sec. Lasts for 15 sec.",
       "Increases your total Agility by an additional 3%, and your Arcane Shot, Explosive Shot and Steady Shot critical strikes have a 100% chance to grant up to 10 party or raid members mana regeneration equal to 1% of the maximum mana per 5 sec. Lasts for 15 sec."
      ],
      "cn": "狩猎小队",
      "cnDesc": [
       "使你的敏捷总值提高1%，你的奥术射击、爆炸射击和稳固射击在爆击之后有33%的几率为小队或团队中的最多10名成员每5秒恢复相当于法力值上限1%的法力值，持续15 秒。",
       "使你的敏捷总值提高2%，你的奥术射击、爆炸射击和稳固射击在爆击之后有66%的几率为小队或团队中的最多10名成员每5秒恢复相当于法力值上限1%的法力值，持续15 秒。",
       "使你的敏捷总值提高3%，你的奥术射击、爆炸射击和稳固射击在爆击之后有100%的几率为小队或团队中的最多10名成员每5秒恢复相当于法力值上限1%的法力值，持续15 秒。"
      ]
     },
     {
      "name": "Explosive Shot",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": "Black Arrow",
      "prereqRank": 1,
      "desc": [
       "You fire an explosive charge into the enemy target, dealing RAP *0.14+144- RAP *0.14+172 Fire damage. The charge will blast the target every second for an additional 2 sec."
      ],
      "cn": "爆炸射击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>7% 的基础法力值</td><th>35码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>6 秒冷却时间</th></tr></table>你对敌方目标发射爆炸性的弹药，造成远程攻击强度*0.14+144-远程攻击强度*0.14+172点火焰伤害，这发弹药还会在接下来的2 秒内每秒对目标造成一次伤害。"
      ]
     }
    ],
    "sprite": "assets/sprites/hunter_survival.webp"
   }
  ],
  "icon": "assets/class-icons/hunter.jpg"
 },
 {
  "id": "mage",
  "name": "Mage",
  "cn": "法师",
  "trees": [
   {
    "name": "Arcane",
    "cn": "奥术",
    "bg": "assets/tree-bg/mage_arcane.jpg",
    "talents": [
     {
      "name": "Arcane Subtlety",
      "row": 0,
      "col": 0,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the chance your helpful spells and damage over time effects will be dispelled by 15% and reduces the threat caused by your Arcane spells by 20%.",
       "Reduces the chance your helpful spells and damage over time effects will be dispelled by 30% and reduces the threat caused by your Arcane spells by 40%."
      ],
      "cn": "奥术精妙",
      "cnDesc": [
       "使你的增益法术和持续伤害法术被驱散的几率降低15%，并使你的奥术系法术造成的威胁值降低20%。",
       "使你的增益法术和持续伤害法术被驱散的几率降低30%，并使你的奥术系法术造成的威胁值降低40%。"
      ]
     },
     {
      "name": "Arcane Focus",
      "row": 0,
      "col": 1,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to hit and reduces the mana cost of your Arcane spells by 1%.",
       "Increases your chance to hit and reduces the mana cost of your Arcane spells by 2%.",
       "Increases your chance to hit and reduces the mana cost of your Arcane spells by 3%."
      ],
      "cn": "奥术集中",
      "cnDesc": [
       "使你的奥术法术命中几率提高1%，法力值消耗降低1%。",
       "使你的奥术法术命中几率提高2%，法力值消耗降低2%。",
       "使你的奥术法术命中几率提高3%，法力值消耗降低3%。"
      ]
     },
     {
      "name": "Arcane Stability",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the pushback suffered from damaging attacks while casting Arcane Missiles and Arcane Blast by 20%.",
       "Reduces the pushback suffered from damaging attacks while casting Arcane Missiles and Arcane Blast by 40%.",
       "Reduces the pushback suffered from damaging attacks while casting Arcane Missiles and Arcane Blast by 60%.",
       "Reduces the pushback suffered from damaging attacks while casting Arcane Missiles and Arcane Blast by 80%.",
       "Reduces the pushback suffered from damaging attacks while casting Arcane Missiles and Arcane Blast by 100%."
      ],
      "cn": "奥术稳定",
      "cnDesc": [
       "使你在施放奥术飞弹和奥术冲击时因受到伤害而承受的施法打退效果降低20%。",
       "使你在施放奥术飞弹和奥术冲击时因受到伤害而承受的施法打退效果降低40%。",
       "使你在施放奥术飞弹和奥术冲击时因受到伤害而承受的施法打退效果降低60%。",
       "使你在施放奥术飞弹和奥术冲击时因受到伤害而承受的施法打退效果降低80%。",
       "使你在施放奥术飞弹和奥术冲击时因受到伤害而承受的施法打退效果降低100%。"
      ]
     },
     {
      "name": "Arcane Fortitude",
      "row": 1,
      "col": 0,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your armor by an amount equal to 50% of your Intellect.",
       "Increases your armor by an amount equal to 100% of your Intellect.",
       "Increases your armor by an amount equal to 150% of your Intellect."
      ],
      "cn": "奥术坚韧",
      "cnDesc": [
       "使你的护甲值提高，数值相当于你的智力值的50%。",
       "使你的护甲值提高，数值相当于你的智力值的100%。",
       "使你的护甲值提高，数值相当于你的智力值的150%。"
      ]
     },
     {
      "name": "Magic Absorption",
      "row": 1,
      "col": 1,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases all resistances by .5 per level and causes all spells you fully resist to restore 1% of your total mana.  1 sec cooldown.",
       "Increases all resistances by 1 per level and causes all spells you fully resist to restore 2% of your total mana.  1 sec cooldown."
      ],
      "cn": "魔法吸收",
      "cnDesc": [
       "使你的所有抗性提高每等级0.5点，你每次完全抵抗一个法术就可以恢复法力值总量的1%。冷却时间1秒钟。",
       "使你的所有抗性提高每等级1点，你每次完全抵抗一个法术就可以恢复法力值总量的2%。冷却时间1秒钟。"
      ]
     },
     {
      "name": "Arcane Concentration",
      "row": 1,
      "col": 2,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives you a 2% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
       "Gives you a 4% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
       "Gives you a 6% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
       "Gives you a 8% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
       "Gives you a 10% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%."
      ],
      "cn": "奥术专注",
      "cnDesc": [
       "使你有2%的几率在任何伤害法术命中目标之后进入节能施法状态。节能施法状态可以使你的下一个伤害性法术所消耗的法力值减少100%。",
       "使你有4%的几率在任何伤害法术命中目标之后进入节能施法状态。节能施法状态可以使你的下一个伤害性法术所消耗的法力值减少100%。",
       "使你有6%的几率在任何伤害法术命中目标之后进入节能施法状态。节能施法状态可以使你的下一个伤害性法术所消耗的法力值减少100%。",
       "使你有8%的几率在任何伤害法术命中目标之后进入节能施法状态。节能施法状态可以使你的下一个伤害性法术所消耗的法力值减少100%。",
       "使你有10%的几率在任何伤害法术命中目标之后进入节能施法状态。节能施法状态可以使你的下一个伤害性法术所消耗的法力值减少100%。"
      ]
     },
     {
      "name": "Magic Attunement",
      "row": 2,
      "col": 0,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of your Arcane spells by 3 yards and the effect of your Amplify Magic and Dampen Magic spells by 25%.",
       "Increases the range of your Arcane spells by 6 yards and the effect of your Amplify Magic and Dampen Magic spells by 50%."
      ],
      "cn": "魔法协调",
      "cnDesc": [
       "使你的奥术法术的射程延长3码，魔法抑制和魔法增效的效果提高25%。",
       "使你的奥术法术的射程延长6码，魔法抑制和魔法增效的效果提高50%。"
      ]
     },
     {
      "name": "Spell Impact",
      "row": 2,
      "col": 1,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of your Arcane Explosion, Arcane Blast, Blast Wave, Fire Blast, Scorch, Fireball, Ice Lance and Cone of Cold spells by an additional 2%.",
       "Increases the damage of your Arcane Explosion, Arcane Blast, Blast Wave, Fire Blast, Scorch, Fireball, Ice Lance and Cone of Cold spells by an additional 4%.",
       "Increases the damage of your Arcane Explosion, Arcane Blast, Blast Wave, Fire Blast, Scorch, Fireball, Ice Lance and Cone of Cold spells by an additional 6%."
      ],
      "cn": "法术冲撞",
      "cnDesc": [
       "使你的魔爆术、奥术冲击、冲击波、火焰冲击、灼烧、火球术、冰枪术和冰锥术的伤害提高2%。",
       "使你的魔爆术、奥术冲击、冲击波、火焰冲击、灼烧、火球术、冰枪术和冰锥术的伤害提高4%。",
       "使你的魔爆术、奥术冲击、冲击波、火焰冲击、灼烧、火球术、冰枪术和冰锥术的伤害提高6%。"
      ]
     },
     {
      "name": "Student of the Mind",
      "row": 2,
      "col": 2,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Spirit by 4%.",
       "Increases your total Spirit by 7%.",
       "Increases your total Spirit by 10%."
      ],
      "cn": "心灵学者",
      "cnDesc": [
       "使你的精神总值提高4%。",
       "使你的精神总值提高7%。",
       "使你的精神总值提高10%。"
      ]
     },
     {
      "name": "Focus Magic",
      "row": 2,
      "col": 3,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the target's chance to critically hit with spells by 3%. When the target critically hits the caster's chance to critically hit with spells is increased by 3% for 10 sec. Cannot be cast on self."
      ],
      "cn": "专注魔法",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>6% 的基础法力值</td><th>30码范围</th></tr></table>瞬发将你的能量集中在目标身上，使其法术爆击几率提高3%。当目标打出爆击之后，施法者的法术爆击几率也会提高3%，持续10 秒。不能对自己使用。"
      ]
     },
     {
      "name": "Arcane Shielding",
      "row": 3,
      "col": 0,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Decreases the mana lost per point of damage taken when Mana Shield is active by 17% and increases the resistances granted by Mage Armor by 25%.",
       "Decreases the mana lost per point of damage taken when Mana Shield is active by 33% and increases the resistances granted by Mage Armor by 50%."
      ],
      "cn": "奥术护盾",
      "cnDesc": [
       "使你的法力护盾每吸收一点伤害所消耗的法力值减少17%，并使法师护甲所提供的抗性值提高25%。",
       "使你的法力护盾每吸收一点伤害所消耗的法力值减少33%，并使法师护甲所提供的抗性值提高50%。"
      ]
     },
     {
      "name": "Improved Counterspell",
      "row": 3,
      "col": 1,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Counterspell also silences the target for 2 sec.",
       "Your Counterspell also silences the target for 4 sec."
      ],
      "cn": "强化法术反制",
      "cnDesc": [
       "你的法术反制可以使目标沉默2 秒。",
       "你的法术反制可以使目标沉默4 秒。"
      ]
     },
     {
      "name": "Arcane Meditation",
      "row": 3,
      "col": 2,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Allows 17% of your mana regeneration to continue while casting.",
       "Allows 33% of your mana regeneration to continue while casting.",
       "Allows 50% of your mana regeneration to continue while casting."
      ],
      "cn": "奥术冥想",
      "cnDesc": [
       "使你在施法时仍保持17%的法力恢复速度。",
       "使你在施法时仍保持33%的法力恢复速度。",
       "使你在施法时仍保持50%的法力恢复速度。"
      ]
     },
     {
      "name": "Torment the Weak",
      "row": 3,
      "col": 3,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Frostbolt, Fireball, Frostfire Bolt, Pyroblast, Arcane Missiles, Arcane Blast, and Arcane Barrage abilities deal 4% more damage to snared or slowed targets.",
       "Your Frostbolt, Fireball, Frostfire Bolt, Pyroblast, Arcane Missiles, Arcane Blast, and Arcane Barrage abilities deal 8% more damage to snared or slowed targets.",
       "Your Frostbolt, Fireball, Frostfire Bolt, Pyroblast, Arcane Missiles, Arcane Blast, and Arcane Barrage abilities deal 12% more damage to snared or slowed targets."
      ],
      "cn": "欺凌弱小",
      "cnDesc": [
       "你的寒冰箭、火球术、霜火之箭、炎爆术、奥术飞弹、奥术冲击和奥术弹幕对被诱捕或减速的目标造成的伤害提高4%。",
       "你的寒冰箭、火球术、霜火之箭、炎爆术、奥术飞弹、奥术冲击和奥术弹幕对被诱捕或减速的目标造成的伤害提高8%。",
       "你的寒冰箭、火球术、霜火之箭、炎爆术、奥术飞弹、奥术冲击和奥术弹幕对被诱捕或减速的目标造成的伤害提高12%。"
      ]
     },
     {
      "name": "Improved Blink",
      "row": 4,
      "col": 0,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of Blink by 25% and for 4 sec after casting your chance to be hit by all attacks and spells is reduced by 15%.",
       "Reduces the mana cost of Blink by 50% and for 4 sec after casting your chance to be hit by all attacks and spells is reduced by 30%."
      ],
      "cn": "强化闪现术",
      "cnDesc": [
       "使你的闪现法术所消耗的法力值降低25%。在施放闪现法术之后的4 秒内，你被任何攻击命中的几率降低15%。",
       "使你的闪现法术所消耗的法力值降低50%。在施放闪现法术之后的4 秒内，你被任何攻击命中的几率降低30%。"
      ]
     },
     {
      "name": "Presence of Mind",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell."
      ],
      "cn": "气定神闲",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>激活之后，你的下一个施法时间低于10秒的法师法术会成为瞬发法术。"
      ]
     },
     {
      "name": "Arcane Mind",
      "row": 4,
      "col": 3,
      "maxRank": 5,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Intellect by 3%.",
       "Increases your total Intellect by 6%.",
       "Increases your total Intellect by 9%.",
       "Increases your total Intellect by 12%.",
       "Increases your total Intellect by 15%."
      ],
      "cn": "奥术心智",
      "cnDesc": [
       "使你的智力总值提高3%。",
       "使你的智力总值提高6%。",
       "使你的智力总值提高9%。",
       "使你的智力总值提高12%。",
       "使你的智力总值提高15%。"
      ]
     },
     {
      "name": "Prismatic Cloak",
      "row": 5,
      "col": 0,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces all damage taken by 2% and reduces the fade time of your Invisibility spell by 1 sec.",
       "Reduces all damage taken by 4% and reduces the fade time of your Invisibility spell by 2 sec.",
       "Reduces all damage taken by 6% and reduces the fade time of your Invisibility spell by 3 sec."
      ],
      "cn": "多彩屏障",
      "cnDesc": [
       "受到的所有伤害降低2%，并使你的隐形术生效所需的时间减少1秒。",
       "受到的所有伤害降低4%，并使你的隐形术生效所需的时间减少2秒。",
       "受到的所有伤害降低6%，并使你的隐形术生效所需的时间减少3秒。"
      ]
     },
     {
      "name": "Arcane Instability",
      "row": 5,
      "col": 1,
      "maxRank": 3,
      "req": 25,
      "prereq": "Presence of Mind",
      "prereqRank": 1,
      "desc": [
       "Increases the damage done by your spells and your critical strike chance by 1%.",
       "Increases the damage done by your spells and your critical strike chance by 2%.",
       "Increases the damage done by your spells and your critical strike chance by 3%."
      ],
      "cn": "奥术动荡",
      "cnDesc": [
       "使你的法术伤害和爆击几率提高1%。",
       "使你的法术伤害和爆击几率提高2%。",
       "使你的法术伤害和爆击几率提高3%。"
      ]
     },
     {
      "name": "Arcane Potency",
      "row": 5,
      "col": 2,
      "maxRank": 2,
      "req": 25,
      "prereq": "Presence of Mind",
      "prereqRank": 1,
      "desc": [
       "Increases the critical strike chance of your next damaging spell by 15% after gaining Clearcasting or Presence of Mind.",
       "Increases the critical strike chance of your next damaging spell by 30% after gaining Clearcasting or Presence of Mind."
      ],
      "cn": "奥术潜能",
      "cnDesc": [
       "在获得节能施法或气定神闲效果后施放的下一个伤害性法术的爆击几率提高15%。",
       "在获得节能施法或气定神闲效果后施放的下一个伤害性法术的爆击几率提高30%。"
      ]
     },
     {
      "name": "Arcane Empowerment",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of your Arcane Missiles spell by an amount equal to 15% of your spell power and the damage of your Arcane Blast by 3% of your spell power.  In addition, increases the damage of all party and raid members within 100 yds by 1%.",
       "Increases the damage of your Arcane Missiles spell by an amount equal to 30% of your spell power and the damage of your Arcane Blast by 6% of your spell power.  In addition, increases the damage of all party and raid members within 100 yds by 2%.",
       "Increases the damage of your Arcane Missiles spell by an amount equal to 45% of your spell power and the damage of your Arcane Blast by 9% of your spell power.  In addition, increases the damage of all party and raid members within 100 yds by 3%."
      ],
      "cn": "奥术增效",
      "cnDesc": [
       "使你的奥术飞弹造成的伤害提高，数值相当于你的法术强度的15%；使你的奥术冲击造成的伤害提高，数值相当于你的法术强度的3%。此外，100码内的所有小队和团队成员所造成的伤害都提高1%。",
       "使你的奥术飞弹造成的伤害提高，数值相当于你的法术强度的30%；使你的奥术冲击造成的伤害提高，数值相当于你的法术强度的6%。此外，100码内的所有小队和团队成员所造成的伤害都提高2%。",
       "使你的奥术飞弹造成的伤害提高，数值相当于你的法术强度的45%；使你的奥术冲击造成的伤害提高，数值相当于你的法术强度的9%。此外，100码内的所有小队和团队成员所造成的伤害都提高3%。"
      ]
     },
     {
      "name": "Arcane Power",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Arcane Instability",
      "prereqRank": 3,
      "desc": [
       "When activated, your spells deal 20% more damage while costing 20% more mana to cast. This effect lasts 15 sec."
      ],
      "cn": "奥术强化",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>激活之后，你的法术会造成20%的额外伤害，但同时也要消耗20%的额外法力才能施放。这个效果可以持续15 秒。"
      ]
     },
     {
      "name": "Incanter's Absorption",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When your Mana Shield, Frost Ward, Fire Ward, or Ice Barrier absorbs damage your spell damage is increased by 5% of the amount absorbed for 10 sec.",
       "When your Mana Shield, Frost Ward, Fire Ward, or Ice Barrier absorbs damage your spell damage is increased by 10% of the amount absorbed for 10 sec.",
       "When your Mana Shield, Frost Ward, Fire Ward, or Ice Barrier absorbs damage your spell damage is increased by 15% of the amount absorbed for 10 sec."
      ],
      "cn": "咒术吸收",
      "cnDesc": [
       "当你的法力护盾、防护冰霜结界、防护火焰结界或寒冰屏障吸收伤害时，你的法术伤害将会提高，提高量为吸收伤害的5%，持续10 秒。",
       "当你的法力护盾、防护冰霜结界、防护火焰结界或寒冰屏障吸收伤害时，你的法术伤害将会提高，提高量为吸收伤害的10%，持续10 秒。",
       "当你的法力护盾、防护冰霜结界、防护火焰结界或寒冰屏障吸收伤害时，你的法术伤害将会提高，提高量为吸收伤害的15%，持续10 秒。"
      ]
     },
     {
      "name": "Arcane Flows",
      "row": 7,
      "col": 1,
      "maxRank": 2,
      "req": 35,
      "prereq": "Arcane Power",
      "prereqRank": 1,
      "desc": [
       "Reduces the cooldown of your Presence of Mind, Arcane Power and Invisibility spells by 15% and the cooldown of your Evocation spell by 1 min.",
       "Reduces the cooldown of your Presence of Mind, Arcane Power and Invisibility spells by 30% and the cooldown of your Evocation spell by 2 min."
      ],
      "cn": "奥术涌动",
      "cnDesc": [
       "使你的气定神闲、奥术强化和隐形术的冷却时间缩短15%，唤醒的冷却时间缩短1分钟。",
       "使你的气定神闲、奥术强化和隐形术的冷却时间缩短30%，唤醒的冷却时间缩短2分钟。"
      ]
     },
     {
      "name": "Mind Mastery",
      "row": 7,
      "col": 2,
      "maxRank": 5,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases spell power by 3% of your total Intellect.",
       "Increases spell power by 6% of your total Intellect.",
       "Increases spell power by 9% of your total Intellect.",
       "Increases spell power by 12% of your total Intellect.",
       "Increases spell power by 15% of your total Intellect."
      ],
      "cn": "心灵掌握",
      "cnDesc": [
       "使你的法术强度提高，数值相当于你的智力总值的3%。",
       "使你的法术强度提高，数值相当于你的智力总值的6%。",
       "使你的法术强度提高，数值相当于你的智力总值的9%。",
       "使你的法术强度提高，数值相当于你的智力总值的12%。",
       "使你的法术强度提高，数值相当于你的智力总值的15%。"
      ]
     },
     {
      "name": "Slow",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces target's movement speed by 60%, increases the time between ranged attacks by 60% and increases casting time by 30%. Lasts 15 sec. Slow can only affect one target at a time."
      ],
      "cn": "减速",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>12% 的基础法力值</td><th>30码范围</th></tr></table>瞬发使目标的移动速度降低60%，远程攻击间隔延长60%，施法时间延长30%，持续15 秒。同一时间内只能对一个目标使用减速。"
      ]
     },
     {
      "name": "Missile Barrage",
      "row": 8,
      "col": 2,
      "maxRank": 5,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your Arcane Blast a 8% chance, and your Arcane Barrage, Fireball, Frostbolt and Frostfire Bolt spells a 4% chance to reduce the channeled duration of the next Arcane Missiles spell by 2.5 secs, reduce the mana cost by 100%, and missiles will fire every .5 secs.",
       "Gives your Arcane Blast a 16% chance, and your Arcane Barrage, Fireball, Frostbolt and Frostfire Bolt spells a 8% chance to reduce the channeled duration of the next Arcane Missiles spell by 2.5 secs, reduce the mana cost by 100%, and missiles will fire every .5 secs.",
       "Gives your Arcane Blast a 24% chance, and your Arcane Barrage, Fireball, Frostbolt and Frostfire Bolt spells a 12% chance to reduce the channeled duration of the next Arcane Missiles spell by 2.5 secs, reduce the mana cost by 100%, and missiles will fire every .5 secs.",
       "Gives your Arcane Blast a 32% chance, and your Arcane Barrage, Fireball, Frostbolt and Frostfire Bolt spells a 16% chance to reduce the channeled duration of the next Arcane Missiles spell by 2.5 secs, reduce the mana cost by 100%, and missiles will fire every .5 secs.",
       "Gives your Arcane Blast a 40% chance, and your Arcane Barrage, Fireball, Frostbolt and Frostfire Bolt spells a 20% chance to reduce the channeled duration of the next Arcane Missiles spell by 2.5 secs, reduce the mana cost by 100%, and missiles will fire every .5 secs."
      ],
      "cn": "飞弹速射",
      "cnDesc": [
       "你的奥术冲击有8%的几率，你的奥术弹幕、火球术、寒冰箭和霜火之箭有4%的几率使下一个奥术飞弹的引导时间缩短2.5秒，法力消耗减少100%，每两轮奥术飞弹的施放间隔变为0.5秒。",
       "你的奥术冲击有16%的几率，你的奥术弹幕、火球术、寒冰箭和霜火之箭有8%的几率使下一个奥术飞弹的引导时间缩短2.5秒，法力消耗减少100%，每两轮奥术飞弹的施放间隔变为0.5秒。",
       "你的奥术冲击有24%的几率，你的奥术弹幕、火球术、寒冰箭和霜火之箭有12%的几率使下一个奥术飞弹的引导时间缩短2.5秒，法力消耗减少100%，每两轮奥术飞弹的施放间隔变为0.5秒。",
       "你的奥术冲击有32%的几率，你的奥术弹幕、火球术、寒冰箭和霜火之箭有16%的几率使下一个奥术飞弹的引导时间缩短2.5秒，法力消耗减少100%，每两轮奥术飞弹的施放间隔变为0.5秒。",
       "你的奥术冲击有40%的几率，你的奥术弹幕、火球术、寒冰箭和霜火之箭有20%的几率使下一个奥术飞弹的引导时间缩短2.5秒，法力消耗减少100%，每两轮奥术飞弹的施放间隔变为0.5秒。"
      ]
     },
     {
      "name": "Netherwind Presence",
      "row": 9,
      "col": 1,
      "maxRank": 3,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your spell haste by 2%.",
       "Increases your spell haste by 4%.",
       "Increases your spell haste by 6%."
      ],
      "cn": "灵风拂面",
      "cnDesc": [
       "使你的法术急速提高2%。",
       "使你的法术急速提高4%。",
       "使你的法术急速提高6%。"
      ]
     },
     {
      "name": "Spell Power",
      "row": 9,
      "col": 2,
      "maxRank": 2,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases critical strike damage bonus of all spells by 25%.",
       "Increases critical strike damage bonus of all spells by 50%."
      ],
      "cn": "法术能量",
      "cnDesc": [
       "所有法术的爆击伤害加成提高25%。",
       "所有法术的爆击伤害加成提高50%。"
      ]
     },
     {
      "name": "Arcane Barrage",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Launches several missiles at the enemy target, causing 386 to 470 Arcane damage."
      ],
      "cn": "奥术弹幕",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>18% 的基础法力值</td><th>30码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 秒冷却时间</th></tr></table>向目标发射多枚魔法飞弹，造成386到470点奥术伤害。"
      ]
     }
    ],
    "sprite": "assets/sprites/mage_arcane.webp"
   },
   {
    "name": "Fire",
    "cn": "火焰",
    "bg": "assets/tree-bg/mage_fire.jpg",
    "talents": [
     {
      "name": "Improved Fire Blast",
      "row": 0,
      "col": 0,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Fire Blast spell by 1 sec.",
       "Reduces the cooldown of your Fire Blast spell by 2 sec."
      ],
      "cn": "强化火焰冲击",
      "cnDesc": [
       "使你的火焰冲击的冷却时间缩短1秒。",
       "使你的火焰冲击的冷却时间缩短2秒。"
      ]
     },
     {
      "name": "Incineration",
      "row": 0,
      "col": 1,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your Fire Blast, Scorch, Arcane Blast and Cone of Cold spells by 2%.",
       "Increases the critical strike chance of your Fire Blast, Scorch, Arcane Blast and Cone of Cold spells by 4%.",
       "Increases the critical strike chance of your Fire Blast, Scorch, Arcane Blast and Cone of Cold spells by 6%."
      ],
      "cn": "烧尽",
      "cnDesc": [
       "使你的火焰冲击、灼烧、奥术冲击和冰锥术的爆击几率提高2%。",
       "使你的火焰冲击、灼烧、奥术冲击和冰锥术的爆击几率提高4%。",
       "使你的火焰冲击、灼烧、奥术冲击和冰锥术的爆击几率提高6%。"
      ]
     },
     {
      "name": "Improved Fireball",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the casting time of your Fireball spell by 0.1 sec.",
       "Reduces the casting time of your Fireball spell by 0.2 sec.",
       "Reduces the casting time of your Fireball spell by 0.3 sec.",
       "Reduces the casting time of your Fireball spell by 0.4 sec.",
       "Reduces the casting time of your Fireball spell by 0.5 sec."
      ],
      "cn": "强化火球术",
      "cnDesc": [
       "使你的火球术的施法时间缩短0.1秒。",
       "使你的火球术的施法时间缩短0.2秒。",
       "使你的火球术的施法时间缩短0.3秒。",
       "使你的火球术的施法时间缩短0.4秒。",
       "使你的火球术的施法时间缩短0.5秒。"
      ]
     },
     {
      "name": "Ignite",
      "row": 1,
      "col": 0,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your critical strikes from Fire damage spells cause the target to burn for an additional 8% of your spell's damage over 4 sec.",
       "Your critical strikes from Fire damage spells cause the target to burn for an additional 16% of your spell's damage over 4 sec.",
       "Your critical strikes from Fire damage spells cause the target to burn for an additional 24% of your spell's damage over 4 sec.",
       "Your critical strikes from Fire damage spells cause the target to burn for an additional 32% of your spell's damage over 4 sec.",
       "Your critical strikes from Fire damage spells cause the target to burn for an additional 40% of your spell's damage over 4 sec."
      ],
      "cn": "点燃",
      "cnDesc": [
       "你的火焰法术在造成爆击之后使目标燃烧，令其在4 秒内承受相当于你的法术伤害8%的额外伤害。",
       "你的火焰法术在造成爆击之后使目标燃烧，令其在4 秒内承受相当于你的法术伤害16%的额外伤害。",
       "你的火焰法术在造成爆击之后使目标燃烧，令其在4 秒内承受相当于你的法术伤害24%的额外伤害。",
       "你的火焰法术在造成爆击之后使目标燃烧，令其在4 秒内承受相当于你的法术伤害32%的额外伤害。",
       "你的火焰法术在造成爆击之后使目标燃烧，令其在4 秒内承受相当于你的法术伤害40%的额外伤害。"
      ]
     },
     {
      "name": "Burning Determination",
      "row": 1,
      "col": 1,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When Interrupted or Silenced you have a 50% chance to become immune to the next Interrupt or Silence mechanic.  Lasts 20 sec.",
       "When Interrupted or Silenced you have a 100% chance to become immune to the next Interrupt or Silence mechanic.  Lasts 20 sec."
      ],
      "cn": "燃烧意志",
      "cnDesc": [
       "被打断或沉默之后，你有50%的几率对这两种效果免疫，持续20 秒。",
       "被打断或沉默之后，你有100%的几率对这两种效果免疫，持续20 秒。"
      ]
     },
     {
      "name": "World in Flames",
      "row": 1,
      "col": 2,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your Flamestrike, Pyroblast, Blast Wave, Dragon's Breath, Living Bomb, Blizzard and Arcane Explosion spells by 2%.",
       "Increases the critical strike chance of your Flamestrike, Pyroblast, Blast Wave, Dragon's Breath, Living Bomb, Blizzard and Arcane Explosion spells by 4%.",
       "Increases the critical strike chance of your Flamestrike, Pyroblast, Blast Wave, Dragon's Breath, Living Bomb, Blizzard and Arcane Explosion spells by 6%."
      ],
      "cn": "烈焰世界",
      "cnDesc": [
       "使你的烈焰风暴、炎爆术、冲击波、龙息术、活动炸弹、暴风雪和魔爆术的爆击几率提高2%。",
       "使你的烈焰风暴、炎爆术、冲击波、龙息术、活动炸弹、暴风雪和魔爆术的爆击几率提高4%。",
       "使你的烈焰风暴、炎爆术、冲击波、龙息术、活动炸弹、暴风雪和魔爆术的爆击几率提高6%。"
      ]
     },
     {
      "name": "Flame Throwing",
      "row": 2,
      "col": 0,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of all Fire spells except Frostfire Bolt by 3 yards.",
       "Increases the range of all Fire spells except Frostfire Bolt by 6 yards."
      ],
      "cn": "烈焰投掷",
      "cnDesc": [
       "使你的所有火焰法术（霜火之箭除外）的射程延长3码。",
       "使你的所有火焰法术（霜火之箭除外）的射程延长6码。"
      ]
     },
     {
      "name": "Impact",
      "row": 2,
      "col": 1,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your damaging spells a 4% chance to cause the next Fire Blast you cast to stun the target for 2 sec.",
       "Gives your damaging spells a 7% chance to cause the next Fire Blast you cast to stun the target for 2 sec.",
       "Gives your damaging spells a 10% chance to cause the next Fire Blast you cast to stun the target for 2 sec."
      ],
      "cn": "冲击",
      "cnDesc": [
       "你的伤害性法术有4%的几率使你的下一个火焰冲击可以令目标昏迷2 秒。",
       "你的伤害性法术有7%的几率使你的下一个火焰冲击可以令目标昏迷2 秒。",
       "你的伤害性法术有10%的几率使你的下一个火焰冲击可以令目标昏迷2 秒。"
      ]
     },
     {
      "name": "Pyroblast",
      "row": 2,
      "col": 2,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Hurls an immense fiery boulder that causes 141 to 187 Fire damage and an additional 56 Fire damage over 12 sec."
      ],
      "cn": "炎爆术",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>22% 的基础法力值</td><th>35码范围</th></tr></table>5秒施法时间发射一枚巨大的火球，对目标造成141到187点火焰伤害，并在12 秒内造成总计56点额外的火焰伤害。"
      ]
     },
     {
      "name": "Burning Soul",
      "row": 2,
      "col": 3,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the pushback suffered from damaging attacks while casting Fire spells by 35% and reduces the threat caused by your Fire spells by 10%.",
       "Reduces the pushback suffered from damaging attacks while casting Fire spells by 70% and reduces the threat caused by your Fire spells by 20%."
      ],
      "cn": "燃烧之魂",
      "cnDesc": [
       "使你在施放或引导火焰系法术时因受到伤害而承受的施法推迟时间缩短35%，火焰系法术所造成的威胁值降低10%。",
       "使你在施放或引导火焰系法术时因受到伤害而承受的施法推迟时间缩短70%，火焰系法术所造成的威胁值降低20%。"
      ]
     },
     {
      "name": "Improved Scorch",
      "row": 3,
      "col": 0,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to critically hit with Scorch, Fireball and Frostfire Bolt by an additional 1% and your damaging Scorch spells have a 33% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5% and lasts 30 sec.",
       "Increases your chance to critically hit with Scorch, Fireball and Frostfire Bolt by an additional 2% and your damaging Scorch spells have a 66% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5% and lasts 30 sec.",
       "Increases your chance to critically hit with Scorch, Fireball and Frostfire Bolt by an additional 3% and your damaging Scorch spells have a 100% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5% and lasts 30 sec."
      ],
      "cn": "强化灼烧",
      "cnDesc": [
       "你的灼烧、火球术和霜火之箭的爆击几率提高1%，你的灼烧法术在造成伤害之后有33%的几率令目标更易受到法术伤害，所有法术对该目标的爆击几率提高5%，持续30 秒。可叠加最多1次。",
       "你的灼烧、火球术和霜火之箭的爆击几率提高2%，你的灼烧法术在造成伤害之后有66%的几率令目标更易受到法术伤害，所有法术对该目标的爆击几率提高5%，持续30 秒。可叠加最多1次。",
       "你的灼烧、火球术和霜火之箭的爆击几率提高3%，你的灼烧法术在造成伤害之后有100%的几率令目标更易受到法术伤害，所有法术对该目标的爆击几率提高5%，持续30 秒。可叠加最多1次。"
      ]
     },
     {
      "name": "Molten Shields",
      "row": 3,
      "col": 1,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Causes your Fire Ward and Frost Ward spells to have a 15% chance to reflect the warded spell while active. In addition, your Molten Armor has a 50% chance to affect ranged and spell attacks.",
       "Causes your Fire Ward and Frost Ward spells to have a 30% chance to reflect the warded spell while active. In addition, your Molten Armor has a 100% chance to affect ranged and spell attacks."
      ],
      "cn": "熔岩护盾",
      "cnDesc": [
       "你的防护火焰结界和防护冰霜结界有15%的几率将相应的法术反射给施法者。另外，你的熔岩护甲有50%的几率对远程或法术攻击生效。",
       "你的防护火焰结界和防护冰霜结界有30%的几率将相应的法术反射给施法者。另外，你的熔岩护甲有100%的几率对远程或法术攻击生效。"
      ]
     },
     {
      "name": "Master of Elements",
      "row": 3,
      "col": 3,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your spell criticals will refund 10% of their base mana cost.",
       "Your spell criticals will refund 20% of their base mana cost.",
       "Your spell criticals will refund 30% of their base mana cost."
      ],
      "cn": "元素大师",
      "cnDesc": [
       "你的法术爆击之后会为你回复该法术所消耗基础法力值的10%。",
       "你的法术爆击之后会为你回复该法术所消耗基础法力值的20%。",
       "你的法术爆击之后会为你回复该法术所消耗基础法力值的30%。"
      ]
     },
     {
      "name": "Playing with Fire",
      "row": 4,
      "col": 0,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases all spell damage caused by 1% and all spell damage taken by 1%.",
       "Increases all spell damage caused by 2% and all spell damage taken by 2%.",
       "Increases all spell damage caused by 3% and all spell damage taken by 3%."
      ],
      "cn": "玩火自焚",
      "cnDesc": [
       "使你所造成的法术伤害提高1%，受到的所有法术伤害提高1%。",
       "使你所造成的法术伤害提高2%，受到的所有法术伤害提高2%。",
       "使你所造成的法术伤害提高3%，受到的所有法术伤害提高3%。"
      ]
     },
     {
      "name": "Critical Mass",
      "row": 4,
      "col": 1,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your Fire spells by 2%.",
       "Increases the critical strike chance of your Fire spells by 4%.",
       "Increases the critical strike chance of your Fire spells by 6%."
      ],
      "cn": "火焰重击",
      "cnDesc": [
       "使你的火焰法术的爆击几率提高2%。",
       "使你的火焰法术的爆击几率提高4%。",
       "使你的火焰法术的爆击几率提高6%。"
      ]
     },
     {
      "name": "Blast Wave",
      "row": 4,
      "col": 2,
      "maxRank": 1,
      "req": 20,
      "prereq": "Pyroblast",
      "prereqRank": 1,
      "desc": [
       "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 154 to 186 Fire damage, knocking them back and dazing them for 6 sec."
      ],
      "cn": "冲击波",
      "cnDesc": [
       "7% 的基础法力值<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>30 秒冷却时间</th></tr></table>施法者放出一道火焰冲击波，所有被冲击波触及的敌人都会受到154到186点火焰伤害，被击退并眩晕6 秒。"
      ]
     },
     {
      "name": "Blazing Speed",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives you a 5% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all movement impairing effects.  This effect lasts 8 sec.",
       "Gives you a 10% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all movement impairing effects.  This effect lasts 8 sec."
      ],
      "cn": "炽热疾速",
      "cnDesc": [
       "使你有5%的几率在受到近战或远程攻击之后，移动速度提高50%，并解除所有移动限制效果。炽热疾速效果可持续8 秒。",
       "使你有10%的几率在受到近战或远程攻击之后，移动速度提高50%，并解除所有移动限制效果。炽热疾速效果可持续8 秒。"
      ]
     },
     {
      "name": "Fire Power",
      "row": 5,
      "col": 2,
      "maxRank": 5,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Fire spells by 2%.",
       "Increases the damage done by your Fire spells by 4%.",
       "Increases the damage done by your Fire spells by 6%.",
       "Increases the damage done by your Fire spells by 8%.",
       "Increases the damage done by your Fire spells by 10%."
      ],
      "cn": "火焰强化",
      "cnDesc": [
       "使你的火焰法术的伤害提高2%。",
       "使你的火焰法术的伤害提高4%。",
       "使你的火焰法术的伤害提高6%。",
       "使你的火焰法术的伤害提高8%。",
       "使你的火焰法术的伤害提高10%。"
      ]
     },
     {
      "name": "Pyromaniac",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases chance to critically hit by 1% and allows 17% of your mana regeneration to continue while casting.",
       "Increases chance to critically hit by 2% and allows 33% of your mana regeneration to continue while casting.",
       "Increases chance to critically hit by 3% and allows 50% of your mana regeneration to continue while casting."
      ],
      "cn": "纵火",
      "cnDesc": [
       "爆击几率提高1%，在施法时仍可保持17%的法力值回复速度。",
       "爆击几率提高2%，在施法时仍可保持33%的法力值回复速度。",
       "爆击几率提高3%，在施法时仍可保持50%的法力值回复速度。"
      ]
     },
     {
      "name": "Combustion",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Critical Mass",
      "prereqRank": 3,
      "desc": [
       "When activated, this spell increases your critical strike damage bonus with Fire damage spells by 50%, and causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%. This effect lasts until you have caused 3 non-periodic critical strikes with Fire spells."
      ],
      "cn": "燃烧",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>激活之后，使你的火焰法术的爆击伤害提高50%，当你的火焰系伤害性法术每一次命中目标，你的火焰系法术的爆击几率都会提高10%。这个效果会一直持续到你使用火焰系法术造成了3次非周期性法术爆击。"
      ]
     },
     {
      "name": "Molten Fury",
      "row": 6,
      "col": 2,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases damage of all spells against targets with less than 35% health by 6%.",
       "Increases damage of all spells against targets with less than 35% health by 12%."
      ],
      "cn": "熔岩之怒",
      "cnDesc": [
       "所有法术对生命值低于35%的目标造成的伤害提高6%。",
       "所有法术对生命值低于35%的目标造成的伤害提高12%。"
      ]
     },
     {
      "name": "Fiery Payback",
      "row": 7,
      "col": 0,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When below 35% health all damage taken is reduced by 10% and your Pyroblast spell's cast time is reduced by 1.75 secs while the cooldown is increased by 2.5 secs.  In addition, melee and ranged attacks made against you have a 5% chance to disarm your attacker's main hand and ranged weapons.",
       "When below 35% health all damage taken is reduced by 20% and your Pyroblast spell's cast time is reduced by 3.5 secs while the cooldown is increased by 5 secs.  In addition, melee and ranged attacks made against you have a 10% chance to disarm your attacker's main hand and ranged weapons."
      ],
      "cn": "炽热报复",
      "cnDesc": [
       "当你的生命值低于35%时，你受到的所有伤害降低10%，你的炎爆术的施法时间缩短1.75秒，但是冷却时间延长2.5秒。另外，对你进行的近战和远程攻击有5%的几率使攻击者的主手和远程武器被缴械。",
       "当你的生命值低于35%时，你受到的所有伤害降低20%，你的炎爆术的施法时间缩短3.5秒，但是冷却时间延长5秒。另外，对你进行的近战和远程攻击有10%的几率使攻击者的主手和远程武器被缴械。"
      ]
     },
     {
      "name": "Empowered Fire",
      "row": 7,
      "col": 2,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of your Fireball, Frostfire Bolt and Pyroblast spells by an amount equal to 5% of your spell power.  In addition, each time your Ignite talent causes damage, you have a 33% chance to regain 2% of your base mana.",
       "Increases the damage of your Fireball, Frostfire Bolt and Pyroblast spells by an amount equal to 10% of your spell power.  In addition, each time your Ignite talent causes damage, you have a 67% chance to regain 2% of your base mana.",
       "Increases the damage of your Fireball, Frostfire Bolt and Pyroblast spells by an amount equal to 15% of your spell power.  In addition, each time your Ignite talent causes damage, you have a 100% chance to regain 2% of your base mana."
      ],
      "cn": "火焰增效",
      "cnDesc": [
       "使你的火球术、霜火之箭和炎爆术造成的伤害提高，数值相当于你的法术强度的5%。另外，每次你的点燃天赋造成伤害时，你有33%的几率恢复你的基础法力值的2%。",
       "使你的火球术、霜火之箭和炎爆术造成的伤害提高，数值相当于你的法术强度的10%。另外，每次你的点燃天赋造成伤害时，你有67%的几率恢复你的基础法力值的2%。",
       "使你的火球术、霜火之箭和炎爆术造成的伤害提高，数值相当于你的法术强度的15%。另外，每次你的点燃天赋造成伤害时，你有100%的几率恢复你的基础法力值的2%。"
      ]
     },
     {
      "name": "Firestarter",
      "row": 8,
      "col": 0,
      "maxRank": 2,
      "req": 40,
      "prereq": "Dragon's Breath",
      "prereqRank": 1,
      "desc": [
       "Your damaging Blast Wave and Dragon's Breath spells have a 50% chance to make your next Flamestrike spell instant cast and cost no mana.  Lasts 10 sec.",
       "Your damaging Blast Wave and Dragon's Breath spells have a 100% chance to make your next Flamestrike spell instant cast and cost no mana.  Lasts 10 sec."
      ],
      "cn": "点燃者",
      "cnDesc": [
       "你的冲击波和龙息术造成伤害时，有50%几率使你的下一个烈焰风暴瞬发且不消耗法力。持续10秒。",
       "你的冲击波和龙息术造成伤害时，有100%几率使你的下一个烈焰风暴瞬发且不消耗法力。持续10秒。"
      ]
     },
     {
      "name": "Dragon's Breath",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": "Combustion",
      "prereqRank": 1,
      "desc": [
       "Targets in a cone in front of the caster take 370 to 430 Fire damage and are Disoriented for 5 sec.  Any direct damaging attack will revive targets.  Turns off your attack when used."
      ],
      "cn": "龙息术",
      "cnDesc": [
       "施法者前方锥形范围内的目标受到370-430点火焰伤害并被迷惑5秒。任何直接伤害性攻击都会唤醒目标。使用时关闭你的攻击。"
      ]
     },
     {
      "name": "Hot Streak",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Any time you score 2 non-periodic spell criticals in a row using Fireball, Fire Blast, Scorch, Living Bomb, or Frostfire Bolt, you have a 33% chance the next Pyroblast spell cast within 10 sec will be instant cast.",
       "Any time you score 2 non-periodic spell criticals in a row using Fireball, Fire Blast, Scorch, Living Bomb, or Frostfire Bolt, you have a 66% chance the next Pyroblast spell cast within 10 sec will be instant cast.",
       "Any time you score 2 non-periodic spell criticals in a row using Fireball, Fire Blast, Scorch, Living Bomb, or Frostfire Bolt, you have a 100% chance the next Pyroblast spell cast within 10 sec will be instant cast."
      ],
      "cn": "法术连击",
      "cnDesc": [
       "每当你用火球术、炎爆术、灼烧、活动炸弹或霜火之箭连续打出2次非周期性法术暴击时，你有33%几率在10秒内施放的下一个炎爆术变为瞬发。",
       "每当你用火球术、炎爆术、灼烧、活动炸弹或霜火之箭连续打出2次非周期性法术暴击时，你有66%几率在10秒内施放的下一个炎爆术变为瞬发。",
       "每当你用火球术、炎爆术、灼烧、活动炸弹或霜火之箭连续打出2次非周期性法术暴击时，你有100%几率在10秒内施放的下一个炎爆术变为瞬发。"
      ]
     },
     {
      "name": "Burnout",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your spell critical damage bonus with all spells by 10% but your non-periodic spell criticals cost an additional 1% of the spell's cost.",
       "Increases your spell critical damage bonus with all spells by 20% but your non-periodic spell criticals cost an additional 2% of the spell's cost.",
       "Increases your spell critical damage bonus with all spells by 30% but your non-periodic spell criticals cost an additional 3% of the spell's cost.",
       "Increases your spell critical damage bonus with all spells by 40% but your non-periodic spell criticals cost an additional 4% of the spell's cost.",
       "Increases your spell critical damage bonus with all spells by 50% but your non-periodic spell criticals cost an additional 5% of the spell's cost."
      ],
      "cn": "燃尽",
      "cnDesc": [
       "使你所有法术的暴击伤害加成提高10%，但你的非周期性法术暴击额外消耗该法术法力消耗的1%。",
       "使你所有法术的暴击伤害加成提高20%，但你的非周期性法术暴击额外消耗该法术法力消耗的2%。",
       "使你所有法术的暴击伤害加成提高30%，但你的非周期性法术暴击额外消耗该法术法力消耗的3%。",
       "使你所有法术的暴击伤害加成提高40%，但你的非周期性法术暴击额外消耗该法术法力消耗的4%。",
       "使你所有法术的暴击伤害加成提高50%，但你的非周期性法术暴击额外消耗该法术法力消耗的5%。"
      ]
     },
     {
      "name": "Living Bomb",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "The target becomes a Living Bomb, taking 612 Fire damage over 12 sec.  After 12 sec or when the spell is dispelled, the target explodes dealing 306 Fire damage to all enemies within 10 yards."
      ],
      "cn": "活动炸弹",
      "cnDesc": [
       "目标变为活动炸弹，在12秒内受到612点火焰伤害。12秒后或被驱散时，目标爆炸，对10码内所有敌人造成306点火焰伤害。"
      ]
     }
    ],
    "sprite": "assets/sprites/mage_fire.webp"
   },
   {
    "name": "Frost",
    "cn": "冰霜",
    "bg": "assets/tree-bg/mage_frost.jpg",
    "talents": [
     {
      "name": "Frostbite",
      "row": 0,
      "col": 0,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your Chill effects a 5% chance to freeze the target for 5 sec.",
       "Gives your Chill effects a 10% chance to freeze the target for 5 sec.",
       "Gives your Chill effects a 15% chance to freeze the target for 5 sec."
      ],
      "cn": "霜寒刺骨",
      "cnDesc": [
       "你的减速效果有5%几率将目标冻结5秒。",
       "你的减速效果有10%几率将目标冻结5秒。",
       "你的减速效果有15%几率将目标冻结5秒。"
      ]
     },
     {
      "name": "Improved Frostbolt",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the casting time of your Frostbolt spell by 0.1 sec.",
       "Reduces the casting time of your Frostbolt spell by 0.2 sec.",
       "Reduces the casting time of your Frostbolt spell by 0.3 sec.",
       "Reduces the casting time of your Frostbolt spell by 0.4 sec.",
       "Reduces the casting time of your Frostbolt spell by 0.5 sec."
      ],
      "cn": "强化寒冰箭",
      "cnDesc": [
       "使你的寒冰箭施法时间缩短0.1秒。",
       "使你的寒冰箭施法时间缩短0.2秒。",
       "使你的寒冰箭施法时间缩短0.3秒。",
       "使你的寒冰箭施法时间缩短0.4秒。",
       "使你的寒冰箭施法时间缩短0.5秒。"
      ]
     },
     {
      "name": "Ice Floes",
      "row": 0,
      "col": 2,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Frost Nova, Cone of Cold, Ice Block and Icy Veins spells by 7%.",
       "Reduces the cooldown of your Frost Nova, Cone of Cold, Ice Block and Icy Veins spells by 14%.",
       "Reduces the cooldown of your Frost Nova, Cone of Cold, Ice Block and Icy Veins spells by 20%."
      ],
      "cn": "浮冰",
      "cnDesc": [
       "使你的冰霜新星、冰锥术、寒冰屏障和冰冷血脉的冷却时间缩短7%。",
       "使你的冰霜新星、冰锥术、寒冰屏障和冰冷血脉的冷却时间缩短14%。",
       "使你的冰霜新星、冰锥术、寒冰屏障和冰冷血脉的冷却时间缩短20%。"
      ]
     },
     {
      "name": "Ice Shards",
      "row": 1,
      "col": 0,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike damage bonus of your Frost spells by 33%.",
       "Increases the critical strike damage bonus of your Frost spells by 66%.",
       "Increases the critical strike damage bonus of your Frost spells by 100%."
      ],
      "cn": "寒冰碎片",
      "cnDesc": [
       "使你的冰霜法术的爆击伤害提高33%。",
       "使你的冰霜法术的爆击伤害提高66%。",
       "使你的冰霜法术的爆击伤害提高100%。"
      ]
     },
     {
      "name": "Frost Warding",
      "row": 1,
      "col": 1,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 25%.  In addition, gives your Frost Ward and Fire Ward a 15% chance to negate the warded damage spell and restore mana equal to the damage caused.",
       "Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 50%.  In addition, gives your Frost Ward and Fire Ward a 30% chance to negate the warded damage spell and restore mana equal to the damage caused."
      ],
      "cn": "冰霜障壁",
      "cnDesc": [
       "使你冰霜护甲和冰霜铠甲提供的护甲和抗性提高25%。此外，你的冰霜防护结界和火焰防护结界有15%几率抵消所受法术伤害，并恢复相当于该伤害的法力值。",
       "使你冰霜护甲和冰霜铠甲提供的护甲和抗性提高50%。此外，你的冰霜防护结界和火焰防护结界有30%几率抵消所受法术伤害，并恢复相当于该伤害的法力值。"
      ]
     },
     {
      "name": "Precision",
      "row": 1,
      "col": 2,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost and increases your chance to hit with spells by 1%.",
       "Reduces the mana cost and increases your chance to hit with spells by 2%.",
       "Reduces the mana cost and increases your chance to hit with spells by 3%."
      ],
      "cn": "精准",
      "cnDesc": [
       "降低法力消耗，并使你法术的命中几率提高1%。",
       "降低法力消耗，并使你法术的命中几率提高2%。",
       "降低法力消耗，并使你法术的命中几率提高3%。"
      ]
     },
     {
      "name": "Permafrost",
      "row": 1,
      "col": 3,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the duration of your Chill effects by 1 sec, reduces the target's speed by an additional 4%, and reduces the target's healing received by 7%.",
       "Increases the duration of your Chill effects by 2 secs, reduces the target's speed by an additional 7%, and reduces the target's healing received by 13%.",
       "Increases the duration of your Chill effects by 3 secs, reduces the target's speed by an additional 10%, and reduces the target's healing received by 20%."
      ],
      "cn": "极寒冰霜",
      "cnDesc": [
       "使你的冰冷效果的持续时间延长1秒，并使目标身上的减速效果提高4%，目标受到的治疗效果降低7%。",
       "使你的冰冷效果的持续时间延长2秒，并使目标身上的减速效果提高7%，目标受到的治疗效果降低13%。",
       "使你的冰冷效果的持续时间延长3秒，并使目标身上的减速效果提高10%，目标受到的治疗效果降低20%。"
      ]
     },
     {
      "name": "Piercing Ice",
      "row": 2,
      "col": 0,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Frost spells by 2%.",
       "Increases the damage done by your Frost spells by 4%.",
       "Increases the damage done by your Frost spells by 6%."
      ],
      "cn": "刺骨寒冰",
      "cnDesc": [
       "使你的冰霜法术的伤害提高2%。",
       "使你的冰霜法术的伤害提高4%。",
       "使你的冰霜法术的伤害提高6%。"
      ]
     },
     {
      "name": "Icy Veins",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Hastens your spellcasting, increasing spell casting speed by 20% and reduces the pushback suffered from damaging attacks while casting by 100%. Lasts 20 sec."
      ],
      "cn": "冰冷血脉",
      "cnDesc": [
       "加速你的施法，使施法速度提高20%，并使其施法时受到伤害性攻击而中断的程度降低100%。持续20秒。"
      ]
     },
     {
      "name": "Improved Blizzard",
      "row": 2,
      "col": 2,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Adds a chill effect to your Blizzard spell.  This effect lowers the target's movement speed by 25%.  Lasts 1.5 sec.",
       "Adds a chill effect to your Blizzard spell.  This effect lowers the target's movement speed by 40%.  Lasts 1.5 sec.",
       "Adds a chill effect to your Blizzard spell.  This effect lowers the target's movement speed by 50%.  Lasts 1.5 sec."
      ],
      "cn": "强化暴风雪",
      "cnDesc": [
       "为你的暴风雪法术添加减速效果，使目标移动速度降低25%，持续1.5秒。",
       "为你的暴风雪法术添加减速效果，使目标移动速度降低40%，持续1.5秒。",
       "为你的暴风雪法术添加减速效果，使目标移动速度降低50%，持续1.5秒。"
      ]
     },
     {
      "name": "Arctic Reach",
      "row": 3,
      "col": 0,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of your Frostbolt, Ice Lance, Deep Freeze and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.",
       "Increases the range of your Frostbolt, Ice Lance, Deep Freeze and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 20%."
      ],
      "cn": "极寒延伸",
      "cnDesc": [
       "使你的寒冰箭、冰枪术、深度冻结和暴风雪的射程，以及冰霜新星和冰锥术的半径提高10%。",
       "使你的寒冰箭、冰枪术、深度冻结和暴风雪的射程，以及冰霜新星和冰锥术的半径提高20%。"
      ]
     },
     {
      "name": "Frost Channeling",
      "row": 3,
      "col": 1,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of all spells by 4% and reduces the threat caused by your Frost spells by 4%.",
       "Reduces the mana cost of all spells by 7% and reduces the threat caused by your Frost spells by 7%.",
       "Reduces the mana cost of all spells by 10% and reduces the threat caused by your Frost spells by 10%."
      ],
      "cn": "冰霜导能",
      "cnDesc": [
       "使所有法术的法力消耗降低4%，并使其冰霜法术产生的威胁降低4%。",
       "使所有法术的法力消耗降低7%，并使其冰霜法术产生的威胁降低7%。",
       "使所有法术的法力消耗降低10%，并使其冰霜法术产生的威胁降低10%。"
      ]
     },
     {
      "name": "Shatter",
      "row": 3,
      "col": 2,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of all your spells against frozen targets by 17%.",
       "Increases the critical strike chance of all your spells against frozen targets by 34%.",
       "Increases the critical strike chance of all your spells against frozen targets by 50%."
      ],
      "cn": "碎冰",
      "cnDesc": [
       "使你的所有法术对于被冰冻的敌人的爆击几率提高17%。",
       "使你的所有法术对于被冰冻的敌人的爆击几率提高34%。",
       "使你的所有法术对于被冰冻的敌人的爆击几率提高50%。"
      ]
     },
     {
      "name": "Cold Snap",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When activated, this spell finishes the cooldown on all Frost spells you recently cast."
      ],
      "cn": "急速冷却",
      "cnDesc": [
       "激活后，立即结束你最近施放的冰霜法术的冷却时间。"
      ]
     },
     {
      "name": "Improved Cone of Cold",
      "row": 4,
      "col": 2,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage dealt by your Cone of Cold spell by 15%.",
       "Increases the damage dealt by your Cone of Cold spell by 25%.",
       "Increases the damage dealt by your Cone of Cold spell by 35%."
      ],
      "cn": "强化冰锥术",
      "cnDesc": [
       "使你冰锥术造成的伤害提高15%。",
       "使你冰锥术造成的伤害提高25%。",
       "使你冰锥术造成的伤害提高35%。"
      ]
     },
     {
      "name": "Frozen Core",
      "row": 4,
      "col": 3,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the damage taken from all spells by 2%.",
       "Reduces the damage taken from all spells by 4%.",
       "Reduces the damage taken from all spells by 6%."
      ],
      "cn": "冰冻之心",
      "cnDesc": [
       "受到的所有法术伤害降低2%。",
       "受到的所有法术伤害降低4%。",
       "受到的所有法术伤害降低6%。"
      ]
     },
     {
      "name": "Cold as Ice",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": "Cold Snap",
      "prereqRank": 1,
      "desc": [
       "Reduces the cooldown of your Cold Snap, Ice Barrier and Summon Water Elemental spells by 10%.",
       "Reduces the cooldown of your Cold Snap, Ice Barrier and Summon Water Elemental spells by 20%."
      ],
      "cn": "冷若冰霜",
      "cnDesc": [
       "使你的急速冷却、寒冰护体和召唤水元素的冷却时间缩短10%。",
       "使你的急速冷却、寒冰护体和召唤水元素的冷却时间缩短20%。"
      ]
     },
     {
      "name": "Winter's Chill",
      "row": 5,
      "col": 2,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to critically hit with Frostbolt by an additional 1% and gives your Frost damage spells a 33% chance to apply the Winter's Chill effect, which increases the chance spells will critically hit the target by 1% for 15 sec.  Stacks up to 5 times.",
       "Increases your chance to critically hit with Frostbolt by an additional 2% and gives your Frost damage spells a 66% chance to apply the Winter's Chill effect, which increases the chance spells will critically hit the target by 1% for 15 sec.  Stacks up to 5 times.",
       "Increases your chance to critically hit with Frostbolt by an additional 3% and gives your Frost damage spells a 100% chance to apply the Winter's Chill effect, which increases the chance spells will critically hit the target by 1% for 15 sec.  Stacks up to 5 times."
      ],
      "cn": "深冬之寒",
      "cnDesc": [
       "使你寒冰箭的暴击几率额外提高1%，并使你的冰霜伤害法术有33%几率施加深冬之寒效果，使目标被法术暴击的几率提高1%，持续15秒。最多叠加5次。",
       "使你寒冰箭的暴击几率额外提高2%，并使你的冰霜伤害法术有66%几率施加深冬之寒效果，使目标被法术暴击的几率提高1%，持续15秒。最多叠加5次。",
       "使你寒冰箭的暴击几率额外提高3%，并使你的冰霜伤害法术有100%几率施加深冬之寒效果，使目标被法术暴击的几率提高1%，持续15秒。最多叠加5次。"
      ]
     },
     {
      "name": "Shattered Barrier",
      "row": 6,
      "col": 0,
      "maxRank": 2,
      "req": 30,
      "prereq": "Ice Barrier",
      "prereqRank": 1,
      "desc": [
       "Gives your Ice Barrier spell a 50% chance to freeze all enemies within 10 yds for 8 sec when it is destroyed.",
       "Gives your Ice Barrier spell a 100% chance to freeze all enemies within 10 yds for 8 sec when it is destroyed."
      ],
      "cn": "碎冰屏障",
      "cnDesc": [
       "你的寒冰护体被打破时，有50%几率冻结10码内所有敌人8秒。",
       "你的寒冰护体被打破时，有100%几率冻结10码内所有敌人8秒。"
      ]
     },
     {
      "name": "Ice Barrier",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Cold Snap",
      "prereqRank": 1,
      "desc": [
       "Instantly shields you, absorbing 438 damage.  Lasts 1 min.  While the shield holds, spellcasting will not be delayed by damage."
      ],
      "cn": "寒冰护体",
      "cnDesc": [
       "立即为你施加护盾，吸收438点伤害。持续1分钟。护盾存在期间，施法不会因受到伤害而延迟。"
      ]
     },
     {
      "name": "Arctic Winds",
      "row": 6,
      "col": 2,
      "maxRank": 5,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases all Frost damage you cause by 1% and reduces the chance melee and ranged attacks will hit you by 1%.",
       "Increases all Frost damage you cause by 2% and reduces the chance melee and ranged attacks will hit you by 2%.",
       "Increases all Frost damage you cause by 3% and reduces the chance melee and ranged attacks will hit you by 3%.",
       "Increases all Frost damage you cause by 4% and reduces the chance melee and ranged attacks will hit you by 4%.",
       "Increases all Frost damage you cause by 5% and reduces the chance melee and ranged attacks will hit you by 5%."
      ],
      "cn": "极寒之风",
      "cnDesc": [
       "使你造成的一切冰霜伤害提高1%，并降低近战和远程攻击命中你的几率1%。",
       "使你造成的一切冰霜伤害提高2%，并降低近战和远程攻击命中你的几率2%。",
       "使你造成的一切冰霜伤害提高3%，并降低近战和远程攻击命中你的几率3%。",
       "使你造成的一切冰霜伤害提高4%，并降低近战和远程攻击命中你的几率4%。",
       "使你造成的一切冰霜伤害提高5%，并降低近战和远程攻击命中你的几率5%。"
      ]
     },
     {
      "name": "Empowered Frostbolt",
      "row": 7,
      "col": 1,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of your Frostbolt spell by an amount equal to 5% of your spell power and reduces the cast time by 0.1 sec.",
       "Increases the damage of your Frostbolt spell by an amount equal to 10% of your spell power and reduces the cast time by 0.2 sec."
      ],
      "cn": "寒冰箭增效",
      "cnDesc": [
       "使你的寒冰箭伤害提高相当于你法术强度5%的数值，并使施法时间缩短0.1秒。",
       "使你的寒冰箭伤害提高相当于你法术强度10%的数值，并使施法时间缩短0.2秒。"
      ]
     },
     {
      "name": "Fingers of Frost",
      "row": 7,
      "col": 2,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your Chill effects a 7% chance to grant you the Fingers of Frost effect, which treats your next 2 spells cast as if the target were Frozen.  Lasts 15 sec.",
       "Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next 2 spells cast as if the target were Frozen.  Lasts 15 sec."
      ],
      "cn": "寒冰指",
      "cnDesc": [
       "你的减速效果有7%几率赋予你寒冰指效果，使你接下来施放的2个法术视为目标已被冻结。持续15秒。",
       "你的减速效果有15%几率赋予你寒冰指效果，使你接下来施放的2个法术视为目标已被冻结。持续15秒。"
      ]
     },
     {
      "name": "Brain Freeze",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Frost damage spells with chilling effects have a 5% chance to cause your next Fireball or Frostfire Bolt spell to be instant cast and cost no mana.",
       "Your Frost damage spells with chilling effects have a 10% chance to cause your next Fireball or Frostfire Bolt spell to be instant cast and cost no mana.",
       "Your Frost damage spells with chilling effects have a 15% chance to cause your next Fireball or Frostfire Bolt spell to be instant cast and cost no mana."
      ],
      "cn": "思维冷却",
      "cnDesc": [
       "你带有减速效果的冰霜伤害法术有5%几率使你的下一个火球术或霜火之箭瞬发且不消耗法力。",
       "你带有减速效果的冰霜伤害法术有10%几率使你的下一个火球术或霜火之箭瞬发且不消耗法力。",
       "你带有减速效果的冰霜伤害法术有15%几率使你的下一个火球术或霜火之箭瞬发且不消耗法力。"
      ]
     },
     {
      "name": "Summon Water Elemental",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Summon a Water Elemental to fight for the caster for 45 sec."
      ],
      "cn": "召唤水元素",
      "cnDesc": [
       "召唤一个水元素为你作战，持续45秒。"
      ]
     },
     {
      "name": "Enduring Winter",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": "Summon Water Elemental",
      "prereqRank": 1,
      "desc": [
       "Increases the duration of your Summon Water Elemental spell by 5 sec and your Frostbolt spell has a 33% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec.  This effect cannot occur more often than once every 6 sec.",
       "Increases the duration of your Summon Water Elemental spell by 10 sec and your Frostbolt spell has a 66% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec.  This effect cannot occur more often than once every 6 sec.",
       "Increases the duration of your Summon Water Elemental spell by 15 sec and your Frostbolt spell has a 100% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec.  This effect cannot occur more often than once every 6 sec."
      ],
      "cn": "漫长寒冬",
      "cnDesc": [
       "使你召唤的水元素的持续时间延长5秒，你的寒冰箭有33%的几率为小队或团队中的最多10个成员每5秒恢复一次法力值，数值相当于他们自身法力值上限的1%，效果持续15 秒。该效果每6秒最多只能触发一次。",
       "使你召唤的水元素的持续时间延长10秒，你的寒冰箭有66%的几率为小队或团队中的最多10个成员每5秒恢复一次法力值，数值相当于他们自身法力值上限的1%，效果持续15 秒。该效果每6秒最多只能触发一次。",
       "使你召唤的水元素的持续时间延长15秒，你的寒冰箭有100%的几率为小队或团队中的最多10个成员每5秒恢复一次法力值，数值相当于他们自身法力值上限的1%，效果持续15 秒。该效果每6秒最多只能触发一次。"
      ]
     },
     {
      "name": "Chilled to the Bone",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 1% and reduces the movement speed of all chilled targets by an additional 2%.",
       "Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 2% and reduces the movement speed of all chilled targets by an additional 4%.",
       "Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 3% and reduces the movement speed of all chilled targets by an additional 6%.",
       "Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 4% and reduces the movement speed of all chilled targets by an additional 8%.",
       "Increases the damage caused by your Frostbolt, Frostfire Bolt and Ice Lance spells by 5% and reduces the movement speed of all chilled targets by an additional 10%."
      ],
      "cn": "透骨之寒",
      "cnDesc": [
       "使你的寒冰箭、霜火之箭和冰枪术造成的伤害提高1%，并使所有被减速目标的移动速度额外降低2%。",
       "使你的寒冰箭、霜火之箭和冰枪术造成的伤害提高2%，并使所有被减速目标的移动速度额外降低4%。",
       "使你的寒冰箭、霜火之箭和冰枪术造成的伤害提高3%，并使所有被减速目标的移动速度额外降低6%。",
       "使你的寒冰箭、霜火之箭和冰枪术造成的伤害提高4%，并使所有被减速目标的移动速度额外降低8%。",
       "使你的寒冰箭、霜火之箭和冰枪术造成的伤害提高5%，并使所有被减速目标的移动速度额外降低10%。"
      ]
     },
     {
      "name": "Deep Freeze",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Stuns the target for 5 sec. Only usable on Frozen targets. Deals 1469 to 1741 damage to targets permanently immune to stuns."
      ],
      "cn": "深度冻结",
      "cnDesc": [
       "使目标昏迷5秒。只能对冻结目标使用。对永久免疫昏迷的目标造成1469-1741点伤害。"
      ]
     }
    ],
    "sprite": "assets/sprites/mage_frost.webp"
   }
  ],
  "icon": "assets/class-icons/mage.jpg"
 },
 {
  "id": "paladin",
  "name": "Paladin",
  "cn": "圣骑士",
  "trees": [
   {
    "name": "Holy",
    "cn": "神圣",
    "bg": "assets/tree-bg/paladin_holy.jpg",
    "talents": [
     {
      "name": "Spiritual Focus",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 14%.",
       "Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 28%.",
       "Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 42%.",
       "Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 56%.",
       "Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 70%."
      ],
      "cn": "精神集中",
      "cnDesc": [
       "使你在施放或引导圣光闪现或圣光术时因受到伤害而承受的施法推迟时间缩短14%。",
       "使你在施放或引导圣光闪现或圣光术时因受到伤害而承受的施法推迟时间缩短28%。",
       "使你在施放或引导圣光闪现或圣光术时因受到伤害而承受的施法推迟时间缩短42%。",
       "使你在施放或引导圣光闪现或圣光术时因受到伤害而承受的施法推迟时间缩短56%。",
       "使你在施放或引导圣光闪现或圣光术时因受到伤害而承受的施法推迟时间缩短70%。"
      ]
     },
     {
      "name": "Seals of the Pure",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 3%.",
       "Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 6%.",
       "Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 9%.",
       "Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 12%.",
       "Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 15%."
      ],
      "cn": "纯净圣印",
      "cnDesc": [
       "使你的正义圣印、复仇圣印和腐蚀圣印造成的伤害以及它们的相应审判效果提高3%。",
       "使你的正义圣印、复仇圣印和腐蚀圣印造成的伤害以及它们的相应审判效果提高6%。",
       "使你的正义圣印、复仇圣印和腐蚀圣印造成的伤害以及它们的相应审判效果提高9%。",
       "使你的正义圣印、复仇圣印和腐蚀圣印造成的伤害以及它们的相应审判效果提高12%。",
       "使你的正义圣印、复仇圣印和腐蚀圣印造成的伤害以及它们的相应审判效果提高15%。"
      ]
     },
     {
      "name": "Healing Light",
      "row": 1,
      "col": 0,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount healed by your Holy Light, Flash of Light and the effectiveness of Holy Shock spells by 4%.",
       "Increases the amount healed by your Holy Light, Flash of Light and the effectiveness of Holy Shock spells by 8%.",
       "Increases the amount healed by your Holy Light, Flash of Light and the effectiveness of Holy Shock spells by 12%."
      ],
      "cn": "治疗之光",
      "cnDesc": [
       "使你的圣光术和圣光闪现的治疗量以及神圣震击的效果提高4%。",
       "使你的圣光术和圣光闪现的治疗量以及神圣震击的效果提高8%。",
       "使你的圣光术和圣光闪现的治疗量以及神圣震击的效果提高12%。"
      ]
     },
     {
      "name": "Divine Intellect",
      "row": 1,
      "col": 1,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Intellect by 2%.",
       "Increases your total Intellect by 4%.",
       "Increases your total Intellect by 6%.",
       "Increases your total Intellect by 8%.",
       "Increases your total Intellect by 10%."
      ],
      "cn": "神圣智慧",
      "cnDesc": [
       "使你的智力总值提高2%。",
       "使你的智力总值提高4%。",
       "使你的智力总值提高6%。",
       "使你的智力总值提高8%。",
       "使你的智力总值提高10%。"
      ]
     },
     {
      "name": "Unyielding Faith",
      "row": 1,
      "col": 2,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the duration of all Fear and Disorient effects by 15%.",
       "Reduces the duration of all Fear and Disorient effects by 30%."
      ],
      "cn": "不灭信仰",
      "cnDesc": [
       "使你受到恐惧和困惑效果影响的持续时间缩短15%。",
       "使你受到恐惧和困惑效果影响的持续时间缩短30%。"
      ]
     },
     {
      "name": "Aura Mastery",
      "row": 2,
      "col": 0,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Causes your Concentration Aura to make all affected targets immune to Silence and Interrupt effects and improve the effect of all other auras by 100%. Lasts 6 sec."
      ],
      "cn": "光环掌握",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>使你的专注光环影响下的所有目标免疫沉默和打断效果，并使所有其它光环的效果提高100%，持续6 秒。"
      ]
     },
     {
      "name": "Illumination",
      "row": 2,
      "col": 1,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell you have a 20% chance to gain mana equal to 30% of the base cost of the spell.",
       "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell you have a 40% chance to gain mana equal to 30% of the base cost of the spell.",
       "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell you have a 60% chance to gain mana equal to 30% of the base cost of the spell.",
       "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell you have a 80% chance to gain mana equal to 30% of the base cost of the spell.",
       "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell you have a 100% chance to gain mana equal to 30% of the base cost of the spell."
      ],
      "cn": "启发",
      "cnDesc": [
       "在你的圣光闪现、圣光术或神圣震击治疗法术爆击之后，你有20%的几率恢复施放该法术所需基础法力值的30%。",
       "在你的圣光闪现、圣光术或神圣震击治疗法术爆击之后，你有40%的几率恢复施放该法术所需基础法力值的30%。",
       "在你的圣光闪现、圣光术或神圣震击治疗法术爆击之后，你有60%的几率恢复施放该法术所需基础法力值的30%。",
       "在你的圣光闪现、圣光术或神圣震击治疗法术爆击之后，你有80%的几率恢复施放该法术所需基础法力值的30%。",
       "在你的圣光闪现、圣光术或神圣震击治疗法术爆击之后，你有100%的几率恢复施放该法术所需基础法力值的30%。"
      ]
     },
     {
      "name": "Improved Lay on Hands",
      "row": 2,
      "col": 2,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Grants the target of your Lay on Hands spell 10% reduced physical damage taken for 15 sec.  In addition, the cooldown for your Lay on Hands spell is reduced by 2 min.",
       "Grants the target of your Lay on Hands spell 20% reduced physical damage taken for 15 sec.  In addition, the cooldown for your Lay on Hands spell is reduced by 4 min."
      ],
      "cn": "强化圣疗术",
      "cnDesc": [
       "被你的圣疗术治疗的目标所受到的伤害降低10%，持续15 秒。另外，圣疗术的冷却时间减少2分钟。",
       "被你的圣疗术治疗的目标所受到的伤害降低20%，持续15 秒。另外，圣疗术的冷却时间减少4分钟。"
      ]
     },
     {
      "name": "Improved Concentration Aura",
      "row": 3,
      "col": 0,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effect of your Concentration Aura by an additional 5% and while any Aura is active reduces the duration of any Silence or Interrupt effect used against an affected group member by 10%.  The duration reduction does not stack with any other effects.",
       "Increases the effect of your Concentration Aura by an additional 10% and while any Aura is active reduces the duration of any Silence or Interrupt effect used against an affected group member by 20%.  The duration reduction does not stack with any other effects.",
       "Increases the effect of your Concentration Aura by an additional 15% and while any Aura is active reduces the duration of any Silence or Interrupt effect used against an affected group member by 30%.  The duration reduction does not stack with any other effects."
      ],
      "cn": "强化专注光环",
      "cnDesc": [
       "使你的专注光环的效果提高5%，受到你的任何光环影响的队友受到沉默和打断效果影响的时间都缩短10%。影响时间缩短的效果不与其它同类效果叠加。",
       "使你的专注光环的效果提高10%，受到你的任何光环影响的队友受到沉默和打断效果影响的时间都缩短20%。影响时间缩短的效果不与其它同类效果叠加。",
       "使你的专注光环的效果提高15%，受到你的任何光环影响的队友受到沉默和打断效果影响的时间都缩短30%。影响时间缩短的效果不与其它同类效果叠加。"
      ]
     },
     {
      "name": "Improved Blessing of Wisdom",
      "row": 3,
      "col": 2,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effect of your Blessing of Wisdom spell by 10%.",
       "Increases the effect of your Blessing of Wisdom spell by 20%."
      ],
      "cn": "强化智慧祝福",
      "cnDesc": [
       "使你的智慧祝福的效果提高10%。",
       "使你的智慧祝福的效果提高20%。"
      ]
     },
     {
      "name": "Blessed Hands",
      "row": 3,
      "col": 3,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of Hand of Freedom, Hand of Sacrifice and Hand of Salvation by 15%, increases the effectiveness of Hand of Salvation by 50% and the effectiveness of Hand of Sacrifice by an additional 5%.",
       "Reduces the mana cost of Hand of Freedom, Hand of Sacrifice and Hand of Salvation by 30%, increases the effectiveness of Hand of Salvation by 100% and the effectiveness of Hand of Sacrifice by an additional 10%."
      ],
      "cn": "神宠之手",
      "cnDesc": [
       "使自由之手、牺牲之手和拯救之手的法力值消耗降低15%，拯救之手的效果提高50%，牺牲之手的效果提高5%。",
       "使自由之手、牺牲之手和拯救之手的法力值消耗降低30%，拯救之手的效果提高100%，牺牲之手的效果提高10%。"
      ]
     },
     {
      "name": "Pure of Heart",
      "row": 4,
      "col": 0,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the duration of Curse, Disease and Poison effects by 15%.",
       "Reduces the duration of Curse, Disease and Poison effects by 30%."
      ],
      "cn": "纯净心灵",
      "cnDesc": [
       "使你受到诅咒、中毒和疾病效果影响的时间缩短15%。",
       "使你受到诅咒、中毒和疾病效果影响的时间缩短30%。"
      ]
     },
     {
      "name": "Divine Favor",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": "Illumination",
      "prereqRank": 5,
      "desc": [
       "When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance."
      ],
      "cn": "神恩术",
      "cnDesc": [
       "3% 的基础法力值<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>激活之后，使你的下一个圣光闪现、圣光术或神圣震击有100%的爆击几率。"
      ]
     },
     {
      "name": "Sanctified Light",
      "row": 4,
      "col": 2,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical effect chance of your Holy Light and Holy Shock spells by 2%.",
       "Increases the critical effect chance of your Holy Light and Holy Shock spells by 4%.",
       "Increases the critical effect chance of your Holy Light and Holy Shock spells by 6%."
      ],
      "cn": "神圣光芒",
      "cnDesc": [
       "使你的圣光术和神圣震击的爆击几率提高2%。",
       "使你的圣光术和神圣震击的爆击几率提高4%。",
       "使你的圣光术和神圣震击的爆击几率提高6%。"
      ]
     },
     {
      "name": "Purifying Power",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your Cleanse, Purify and Consecration spells by 5% and reduces the cooldown of your Exorcism and Holy Wrath spells by 17%.",
       "Reduces the mana cost of your Cleanse, Purify and Consecration spells by 10% and reduces the cooldown of your Exorcism and Holy Wrath spells by 33%."
      ],
      "cn": "净化之力",
      "cnDesc": [
       "使你的清洁术、纯净术和奉献法术的法力值消耗降低5%，驱邪术和神圣愤怒的冷却时间缩短17%。",
       "使你的清洁术、纯净术和奉献法术的法力值消耗降低10%，驱邪术和神圣愤怒的冷却时间缩短33%。"
      ]
     },
     {
      "name": "Holy Power",
      "row": 5,
      "col": 2,
      "maxRank": 5,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical effect chance of your Holy spells by 1%.",
       "Increases the critical effect chance of your Holy spells by 2%.",
       "Increases the critical effect chance of your Holy spells by 3%.",
       "Increases the critical effect chance of your Holy spells by 4%.",
       "Increases the critical effect chance of your Holy spells by 5%."
      ],
      "cn": "神圣能量",
      "cnDesc": [
       "使你的神圣法术的爆击几率提高1%。",
       "使你的神圣法术的爆击几率提高2%。",
       "使你的神圣法术的爆击几率提高3%。",
       "使你的神圣法术的爆击几率提高4%。",
       "使你的神圣法术的爆击几率提高5%。"
      ]
     },
     {
      "name": "Light's Grace",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your Holy Light spell a 33% chance to reduce the cast time of your next Holy Light spell by 0.5 sec.  This effect lasts 15 sec.",
       "Gives your Holy Light spell a 66% chance to reduce the cast time of your next Holy Light spell by 0.5 sec.  This effect lasts 15 sec.",
       "Gives your Holy Light spell a 100% chance to reduce the cast time of your next Holy Light spell by 0.5 sec.  This effect lasts 15 sec."
      ],
      "cn": "光之优雅",
      "cnDesc": [
       "使你施放的圣光术有33%的几率令下一个圣光术的施法时间减少0.5秒，该效果可持续15 秒。",
       "使你施放的圣光术有66%的几率令下一个圣光术的施法时间减少0.5秒，该效果可持续15 秒。",
       "使你施放的圣光术有100%的几率令下一个圣光术的施法时间减少0.5秒，该效果可持续15 秒。"
      ]
     },
     {
      "name": "Holy Shock",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Divine Favor",
      "prereqRank": 1,
      "desc": [
       "Blasts the target with Holy energy, causing 314 to 340 Holy damage to an enemy, or 481 to 519 healing to an ally."
      ],
      "cn": "神圣震击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>18% 的基础法力值</td><th><span class='q10'>20</span> - <span class='q2'>40</span>码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>6 秒冷却时间</th></tr></table>以神圣能量冲击目标，对一个敌人造成314到340点神圣伤害，或者为一个友方目标恢复481到519点生命值。"
      ]
     },
     {
      "name": "Blessed Life",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "All attacks against you have a 4% chance to cause half damage.",
       "All attacks against you have a 7% chance to cause half damage.",
       "All attacks against you have a 10% chance to cause half damage."
      ],
      "cn": "神佑之体",
      "cnDesc": [
       "你有4%的几率在受到任何攻击时只承受一半的伤害。",
       "你有7%的几率在受到任何攻击时只承受一半的伤害。",
       "你有10%的几率在受到任何攻击时只承受一半的伤害。"
      ]
     },
     {
      "name": "Sacred Cleansing",
      "row": 7,
      "col": 0,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Cleanse spell has a 10% chance to increase the target's resistance to Disease, Magic and Poison by 30% for 10 sec.",
       "Your Cleanse spell has a 20% chance to increase the target's resistance to Disease, Magic and Poison by 30% for 10 sec.",
       "Your Cleanse spell has a 30% chance to increase the target's resistance to Disease, Magic and Poison by 30% for 10 sec."
      ],
      "cn": "神圣净化",
      "cnDesc": [
       "你的清洁术有10%的几率使目标对疾病、魔法和中毒效果的抵抗几率提高30%，持续10 秒。",
       "你的清洁术有20%的几率使目标对疾病、魔法和中毒效果的抵抗几率提高30%，持续10 秒。",
       "你的清洁术有30%的几率使目标对疾病、魔法和中毒效果的抵抗几率提高30%，持续10 秒。"
      ]
     },
     {
      "name": "Holy Guidance",
      "row": 7,
      "col": 2,
      "maxRank": 5,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your spell power by 4% of your total Intellect.",
       "Increases your spell power by 8% of your total Intellect.",
       "Increases your spell power by 12% of your total Intellect.",
       "Increases your spell power by 16% of your total Intellect.",
       "Increases your spell power by 20% of your total Intellect."
      ],
      "cn": "神圣指引",
      "cnDesc": [
       "使你的法术强度提高，数值相当于你的智力总值的4%。",
       "使你的法术强度提高，数值相当于你的智力总值的8%。",
       "使你的法术强度提高，数值相当于你的智力总值的12%。",
       "使你的法术强度提高，数值相当于你的智力总值的16%。",
       "使你的法术强度提高，数值相当于你的智力总值的20%。"
      ]
     },
     {
      "name": "Divine Illumination",
      "row": 8,
      "col": 0,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of all sells by 50% for 15 sec."
      ],
      "cn": "神启",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>使你的所有法术所消耗的法力值减少50%，持续15 秒。"
      ]
     },
     {
      "name": "Judgements of the Pure",
      "row": 8,
      "col": 2,
      "maxRank": 5,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Seal and Judgement spells by 5%, and your Judgement spells increase your casting and melee haste by 3% for 1 min.",
       "Increases the damage done by your Seal and Judgement spells by 10%, and your Judgement spells increase your casting and melee haste by 6% for 1 min.",
       "Increases the damage done by your Seal and Judgement spells by 15%, and your Judgement spells increase your casting and melee haste by 9% for 1 min.",
       "Increases the damage done by your Seal and Judgement spells by 20%, and your Judgement spells increase your casting and melee haste by 12% for 1 min.",
       "Increases the damage done by your Seal and Judgement spells by 25%, and your Judgement spells increase your casting and melee haste by 15% for 1 min."
      ],
      "cn": "纯洁审判",
      "cnDesc": [
       "使你的圣印和审判法术造成的伤害提高5%。你的审判法术可以使你的施法和近战急速提高3%，持续1 分钟。",
       "使你的圣印和审判法术造成的伤害提高10%。你的审判法术可以使你的施法和近战急速提高6%，持续1 分钟。",
       "使你的圣印和审判法术造成的伤害提高15%。你的审判法术可以使你的施法和近战急速提高9%，持续1 分钟。",
       "使你的圣印和审判法术造成的伤害提高20%。你的审判法术可以使你的施法和近战急速提高12%，持续1 分钟。",
       "使你的圣印和审判法术造成的伤害提高25%。你的审判法术可以使你的施法和近战急速提高15%，持续1 分钟。"
      ]
     },
     {
      "name": "Infusion of Light",
      "row": 9,
      "col": 1,
      "maxRank": 2,
      "req": 45,
      "prereq": "Holy Shock",
      "prereqRank": 1,
      "desc": [
       "Your Holy Shock critical hits reduce the cast time of your next Flash of Light by 0.75 sec or increase the critical chance of your next Holy Light by 10%.  In addition, causes your Flash of Light to heal targets with Sacred Shield for an additional 50% over 12 sec.",
       "Your Holy Shock critical hits reduce the cast time of your next Flash of Light by 1.5 sec or increase the critical chance of your next Holy Light by 20%.  In addition, causes your Flash of Light to heal targets with Sacred Shield for an additional 100% over 12 sec."
      ],
      "cn": "圣光灌注",
      "cnDesc": [
       "你的神圣震击技能爆击之后可以使你的下一个圣光闪现的施法时间缩短0.75秒，或者使你的下一个圣光术的爆击几率提高10%。此外，你在使用圣光闪现治疗带有圣洁护盾的目标时，目标会在12 秒内受到该次治疗量50%的额外持续治疗。",
       "你的神圣震击技能爆击之后可以使你的下一个圣光闪现的施法时间缩短1.5秒，或者使你的下一个圣光术的爆击几率提高20%。此外，你在使用圣光闪现治疗带有圣洁护盾的目标时，目标会在12 秒内受到该次治疗量100%的额外持续治疗。"
      ]
     },
     {
      "name": "Enlightened Judgements",
      "row": 9,
      "col": 2,
      "maxRank": 2,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of your Judgement of Light and Judgement of Wisdom spells by 15 yards and increases your chance to hit by 2%.",
       "Increases the range of your Judgement of Light and Judgement of Wisdom spells by 30 yards and increases your chance to hit by 4%."
      ],
      "cn": "开明审判",
      "cnDesc": [
       "使你的圣光审判和智慧审判的射程延长15码，命中几率提高2%。",
       "使你的圣光审判和智慧审判的射程延长30码，命中几率提高4%。"
      ]
     },
     {
      "name": "Beacon of Light",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "The target becomes a Beacon of Light to all members of your party or raid within a 60 yard radius. Any heals you cast on party or raid members will also heal the Beacon for 100% of the amount healed. Only one target can be the Beacon of Light at a time. Lasts 1 min."
      ],
      "cn": "圣光道标",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>35% 的基础法力值</td><th>60码范围</th></tr></table>瞬发目标成为圣光的道标，照耀周围半径60码范围内的所有目标。你对这些目标施放的任何治疗法术都会令圣光道标也受到治疗，数值相当于该次治疗量的100%。你在同一时间内只能指定一个圣光道标。持续1 分钟。"
      ]
     }
    ],
    "sprite": "assets/sprites/paladin_holy.webp"
   },
   {
    "name": "Protection",
    "cn": "防护",
    "bg": "assets/tree-bg/paladin_protection.jpg",
    "talents": [
     {
      "name": "Divinity",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases all healing done by you and all healing effects on you by 1%.",
       "Increases all healing done by you and all healing effects on you by 2%.",
       "Increases all healing done by you and all healing effects on you by 3%.",
       "Increases all healing done by you and all healing effects on you by 4%.",
       "Increases all healing done by you and all healing effects on you by 5%."
      ],
      "cn": "圣洁",
      "cnDesc": [
       "使你自身的治疗效果和你受到的所有治疗效果提高1%。",
       "使你自身的治疗效果和你受到的所有治疗效果提高2%。",
       "使你自身的治疗效果和你受到的所有治疗效果提高3%。",
       "使你自身的治疗效果和你受到的所有治疗效果提高4%。",
       "使你自身的治疗效果和你受到的所有治疗效果提高5%。"
      ]
     },
     {
      "name": "Divine Strength",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Strength by 3%.",
       "Increases your total Strength by 6%.",
       "Increases your total Strength by 9%.",
       "Increases your total Strength by 12%.",
       "Increases your total Strength by 15%."
      ],
      "cn": "神圣之力",
      "cnDesc": [
       "使你的力量总值提高3%。",
       "使你的力量总值提高6%。",
       "使你的力量总值提高9%。",
       "使你的力量总值提高12%。",
       "使你的力量总值提高15%。"
      ]
     },
     {
      "name": "Stoicism",
      "row": 1,
      "col": 0,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the duration of all Stun effects by an additional 10% and reduces the chance your helpful spells and damage over time effects will be dispelled by an additional 10%.",
       "Reduces the duration of all Stun effects by an additional 20% and reduces the chance your helpful spells and damage over time effects will be dispelled by an additional 20%.",
       "Reduces the duration of all Stun effects by an additional 30% and reduces the chance your helpful spells and damage over time effects will be dispelled by an additional 30%."
      ],
      "cn": "淡泊",
      "cnDesc": [
       "使你受到昏迷效果影响的持续时间缩短10%，你的增益法术和持续伤害法术被驱散的几率降低10%。",
       "使你受到昏迷效果影响的持续时间缩短20%，你的增益法术和持续伤害法术被驱散的几率降低20%。",
       "使你受到昏迷效果影响的持续时间缩短30%，你的增益法术和持续伤害法术被驱散的几率降低30%。"
      ]
     },
     {
      "name": "Guardian's Favor",
      "row": 1,
      "col": 1,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Hand of Protection by 60 sec and increases the duration of your Hand of Freedom by 2 sec.",
       "Reduces the cooldown of your Hand of Protection by 2 min and increases the duration of your Hand of Freedom by 4 sec."
      ],
      "cn": "守护者的宠爱",
      "cnDesc": [
       "使你的保护之手的冷却时间缩短60秒，自由之手的效果持续时间延长2秒。",
       "使你的保护之手的冷却时间缩短2分钟，自由之手的效果持续时间延长4秒。"
      ]
     },
     {
      "name": "Anticipation",
      "row": 1,
      "col": 2,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to dodge by 1%.",
       "Increases your chance to dodge by 2%.",
       "Increases your chance to dodge by 3%.",
       "Increases your chance to dodge by 4%.",
       "Increases your chance to dodge by 5%."
      ],
      "cn": "预知",
      "cnDesc": [
       "使你的躲闪几率提高1%。",
       "使你的躲闪几率提高2%。",
       "使你的躲闪几率提高3%。",
       "使你的躲闪几率提高4%。",
       "使你的躲闪几率提高5%。"
      ]
     },
     {
      "name": "Divine Sacrifice",
      "row": 2,
      "col": 0,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "30% of all damage taken by party members within 30 yards is redirected to the Paladin (up to a maximum of 40% of the Paladin's health times the number of party members). Damage which reduces the Paladin below 20% health will break the effect. Lasts 10 sec."
      ],
      "cn": "神圣牺牲",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>周围半径30码范围内的小队成员受到的所有伤害的30%由圣骑士分担（该值最多不超过圣骑士生命值的40%乘以队员数量）。使圣骑士的生命值降至20%以下的伤害会打断神圣牺牲效果。持续10 秒。"
      ]
     },
     {
      "name": "Improved Righteous Fury",
      "row": 2,
      "col": 1,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While Righteous Fury is active, all damage taken is reduced by 2%.",
       "While Righteous Fury is active, all damage taken is reduced by 4%.",
       "While Righteous Fury is active, all damage taken is reduced by 6%."
      ],
      "cn": "强化正义之怒",
      "cnDesc": [
       "当正义之怒处于激活状态时，你所承受的一切伤害降低2%。",
       "当正义之怒处于激活状态时，你所承受的一切伤害降低4%。",
       "当正义之怒处于激活状态时，你所承受的一切伤害降低6%。"
      ]
     },
     {
      "name": "Toughness",
      "row": 2,
      "col": 2,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your armor value from items by 2% and reduces the duration of all movement slowing effects by 6%.",
       "Increases your armor value from items by 4% and reduces the duration of all movement slowing effects by 12%.",
       "Increases your armor value from items by 6% and reduces the duration of all movement slowing effects by 18%.",
       "Increases your armor value from items by 8% and reduces the duration of all movement slowing effects by 24%.",
       "Increases your armor value from items by 10% and reduces the duration of all movement slowing effects by 30%."
      ],
      "cn": "坚韧",
      "cnDesc": [
       "使你因装备而获得的护甲值提高2%，所有移动限制效果的持续时间缩短6%。",
       "使你因装备而获得的护甲值提高4%，所有移动限制效果的持续时间缩短12%。",
       "使你因装备而获得的护甲值提高6%，所有移动限制效果的持续时间缩短18%。",
       "使你因装备而获得的护甲值提高8%，所有移动限制效果的持续时间缩短24%。",
       "使你因装备而获得的护甲值提高10%，所有移动限制效果的持续时间缩短30%。"
      ]
     },
     {
      "name": "Divine Guardian",
      "row": 3,
      "col": 0,
      "maxRank": 2,
      "req": 15,
      "prereq": "Divine Sacrifice",
      "prereqRank": 1,
      "desc": [
       "When Divine Sacrifice is activated, your party and raid members within 30 yards take 10% reduced damage for 6 sec.  In addition, increases the duration of your Sacred Shield by 50% and the amount absorbed by 10%.",
       "When Divine Sacrifice is activated, your party and raid members within 30 yards take 20% reduced damage for 6 sec.  In addition, increases the duration of your Sacred Shield by 100% and the amount absorbed by 20%."
      ],
      "cn": "神圣守护者",
      "cnDesc": [
       "神圣牺牲激活状态下，在你附近30码内的小队和团队成员受到的伤害降低10%，持续6 秒。此外，使你圣洁护盾的持续时间延长50%，伤害吸收量提高10%。",
       "神圣牺牲激活状态下，在你附近30码内的小队和团队成员受到的伤害降低20%，持续6 秒。此外，使你圣洁护盾的持续时间延长100%，伤害吸收量提高20%。"
      ]
     },
     {
      "name": "Improved Hammer of Justice",
      "row": 3,
      "col": 1,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Decreases the cooldown of your Hammer of Justice spell by 10 sec.",
       "Decreases the cooldown of your Hammer of Justice spell by 20 sec."
      ],
      "cn": "强化制裁之锤",
      "cnDesc": [
       "使你的制裁之锤的冷却时间减少10秒。",
       "使你的制裁之锤的冷却时间减少20秒。"
      ]
     },
     {
      "name": "Improved Devotion Aura",
      "row": 3,
      "col": 2,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the armor bonus of your Devotion Aura by 17% and increases the amount healed on any target affected by any of your Auras by 2%.",
       "Increases the armor bonus of your Devotion Aura by 34% and increases the amount healed on any target affected by any of your Auras by 4%.",
       "Increases the armor bonus of your Devotion Aura by 50% and increases the amount healed on any target affected by any of your Auras by 6%."
      ],
      "cn": "强化虔诚光环",
      "cnDesc": [
       "使你的虔诚光环提供额外护甲值的效果增强17%，受到你的任何光环影响的目标所受到的治疗量提高2%。",
       "使你的虔诚光环提供额外护甲值的效果增强34%，受到你的任何光环影响的目标所受到的治疗量提高4%。",
       "使你的虔诚光环提供额外护甲值的效果增强50%，受到你的任何光环影响的目标所受到的治疗量提高6%。"
      ]
     },
     {
      "name": "Blessing of Sanctuary",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Places a Blessing on the friendly target, reducing damage taken from all sources by 3% for 10 min and increasing strength and stamina by 10%. In addition, when the target blocks, parries, or dodges a melee attack the target will gain 2% of maximum displayed mana. Players may only have one Blessing on them per Paladin at any one time."
      ],
      "cn": "庇护祝福",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>7% 的基础法力值</td><th>30码范围</th></tr></table>瞬发为友方目标施加祝福，使其受到的所有类型的伤害都降低3%，持续10 分钟。同时力量和耐力提高10%。另外，当目标格挡、招架或躲闪近战攻击之后，他可以获得标示法力值上限的2%。每个圣骑士在同一时间内只能给目标施加一种祝福，同类型的祝福不能重叠。"
      ]
     },
     {
      "name": "Reckoning",
      "row": 4,
      "col": 2,
      "maxRank": 5,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives you a 2% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
       "Gives you a 4% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
       "Gives you a 6% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
       "Gives you a 8% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
       "Gives you a 10% chance after blocking or being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack."
      ],
      "cn": "清算",
      "cnDesc": [
       "使你在承受任何攻击伤害之后有2%的几率在接下来的8 秒内进行的4次武器攻击获得一次额外的攻击机会。",
       "使你在承受任何攻击伤害之后有4%的几率在接下来的8 秒内进行的4次武器攻击获得一次额外的攻击机会。",
       "使你在承受任何攻击伤害之后有6%的几率在接下来的8 秒内进行的4次武器攻击获得一次额外的攻击机会。",
       "使你在承受任何攻击伤害之后有8%的几率在接下来的8 秒内进行的4次武器攻击获得一次额外的攻击机会。",
       "使你在格挡或承受任何攻击伤害之后有10%的几率在接下来的8 秒内进行的4次武器攻击获得一次额外的攻击机会。"
      ]
     },
     {
      "name": "Sacred Duty",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Stamina by 2%, reduces the cooldown of your Divine Shield and Divine Protection spells by 30 sec.",
       "Increases your total Stamina by 4%, reduces the cooldown of your Divine Shield and Divine Protection spells by 60 sec."
      ],
      "cn": "神圣使命",
      "cnDesc": [
       "使你的耐力总值提高2%，圣盾术和圣佑术的冷却时间缩短30秒。",
       "使你的耐力总值提高4%，圣盾术和圣佑术的冷却时间缩短60秒。"
      ]
     },
     {
      "name": "One-Handed Weapon Specialization",
      "row": 5,
      "col": 2,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases all damage you deal when a one-handed melee weapon is equipped by 4%.",
       "Increases all damage you deal when a one-handed melee weapon is equipped by 7%.",
       "Increases all damage you deal when a one-handed melee weapon is equipped by 10%."
      ],
      "cn": "单手武器专精",
      "cnDesc": [
       "使你在持有单手近战武器时造成的所有伤害提高4%。",
       "使你在持有单手近战武器时造成的所有伤害提高7%。",
       "使你在持有单手近战武器时造成的所有伤害提高10%。"
      ]
     },
     {
      "name": "Spiritual Attunement",
      "row": 6,
      "col": 0,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "A passive ability that gives the Paladin mana when healed by other friendly targets' spells. The amount of mana gained is equal to 5% of the amount healed.",
       "A passive ability that gives the Paladin mana when healed by other friendly targets' spells. The amount of mana gained is equal to 10% of the amount healed."
      ],
      "cn": "灵魂协调",
      "cnDesc": [
       "被动技能，使圣骑士在被其他友方单位的法术治疗时获得法力值，数值相当于被治疗量的5%。",
       "被动技能，使圣骑士在被其他友方单位的法术治疗时获得法力值，数值相当于被治疗量的10%。"
      ]
     },
     {
      "name": "Holy Shield",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Blessing of Sanctuary",
      "prereqRank": 1,
      "desc": [
       "Increases chance to block by 30% for 10 sec and deals 79 Holy damage for each attack blocked while active.  Each block expends a charge.  8 charges."
      ],
      "cn": "神圣之盾",
      "cnDesc": [
       "10% 的基础法力值<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>8 秒冷却时间</th></tr></table>使你的格挡几率提高30%，持续10 秒。在此期间每次成功格挡都会对攻击者造成79点神圣伤害，每次成功格挡会消耗掉一次格挡机会，最多可格挡8次。"
      ]
     },
     {
      "name": "Ardent Defender",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Damage that takes you below 35% health is reduced by 7%.  In addition, attacks which would otherwise kill you cause you to be healed by up to 10% of your maximum health (amount healed based on defense).  This healing effect cannot occur more often than once every 2 min.",
       "Damage that takes you below 35% health is reduced by 13%.  In addition, attacks which would otherwise kill you cause you to be healed by up to 20% of your maximum health (amount healed based on defense).  This healing effect cannot occur more often than once every 2 min.",
       "Damage that takes you below 35% health is reduced by 20%.  In addition, attacks which would otherwise kill you cause you to be healed by up to 30% of your maximum health (amount healed based on defense).  This healing effect cannot occur more often than once every 2 min."
      ],
      "cn": "炽热防御者",
      "cnDesc": [
       "当你的生命值低于35%时，你承受的所有伤害降低7%。另外，会使你致死的攻击反而会治疗你，治疗量等于你生命值上限的10%（治疗量基于防御等级）。该治疗每2 分钟只能生效一次。",
       "当你的生命值低于35%时，你承受的所有伤害降低13%。另外，会使你致死的攻击反而会治疗你，治疗量等于你生命值上限的20%（治疗量基于防御等级）。该治疗每2 分钟只能生效一次。",
       "当你的生命值低于35%时，你承受的所有伤害降低20%。另外，会使你致死的攻击反而会治疗你，治疗量等于你生命值上限的30%（治疗量基于防御等级）。该治疗每2 分钟只能生效一次。"
      ]
     },
     {
      "name": "Redoubt",
      "row": 7,
      "col": 0,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires Shields Increases your block value by 10% and damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 10%.  Lasts 10 sec or 5 blocks.",
       "Requires Shields Increases your block value by 20% and damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 20%.  Lasts 10 sec or 5 blocks.",
       "Requires Shields Increases your block value by 30% and damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 30%.  Lasts 10 sec or 5 blocks."
      ],
      "cn": "盾牌壁垒",
      "cnDesc": [
       "使你的格挡值提高10%，在受到近战和远程伤害之后有10%的几率获得盾牌格挡几率提高10%的效果。持续10 秒或格挡5次攻击。",
       "使你的格挡值提高20%，在受到近战和远程伤害之后有10%的几率获得盾牌格挡几率提高20%的效果。持续10 秒或格挡5次攻击。",
       "使你的格挡值提高30%，在受到近战和远程伤害之后有10%的几率获得盾牌格挡几率提高30%的效果。持续10 秒或格挡5次攻击。"
      ]
     },
     {
      "name": "Combat Expertise",
      "row": 7,
      "col": 2,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your expertise by 2, total Stamina and chance to critically hit by 2%.",
       "Increases your expertise by 4, total Stamina and chance to critically hit by 4%.",
       "Increases your expertise by 6, total Stamina and chance to critically hit by 6%."
      ],
      "cn": "战斗精准",
      "cnDesc": [
       "使你的精准等级提高2，耐力总值和爆击几率提高2%。",
       "使你的精准等级提高4，耐力总值和爆击几率提高4%。",
       "使你的精准等级提高6，耐力总值和爆击几率提高6%。"
      ]
     },
     {
      "name": "Touched by the Light",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your spell power by an amount equal to 20% of your Strength and increases the amount healed by your critical heals by 10%.",
       "Increases your spell power by an amount equal to 40% of your Strength and increases the amount healed by your critical heals by 20%.",
       "Increases your spell power by an amount equal to 60% of your Strength and increases the amount healed by your critical heals by 30%."
      ],
      "cn": "圣光之触",
      "cnDesc": [
       "使你的法术强度提高，数值相当于你的力量值的20%；你的治疗爆击的治疗量提高10%。",
       "使你的法术强度提高，数值相当于你的力量值的40%；你的治疗爆击的治疗量提高20%。",
       "使你的法术强度提高，数值相当于你的力量值的60%；你的治疗爆击的治疗量提高30%。"
      ]
     },
     {
      "name": "Avenger's Shield",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": "Holy Shield",
      "prereqRank": 1,
      "desc": [
       "Hurls a holy shield at the enemy, dealing 440+0.07* HolP +0.07* AP to 536+0.07* HolP +0.07* AP Holy damage, Dazing them and then jumping to additional nearby enemies.  Affects 3 total targets.  Lasts 10 sec."
      ],
      "cn": "复仇者之盾",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>26% 的基础法力值</td><th>30码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>30 秒冷却时间</th></tr></table>向目标投掷神圣之盾，对其造成440+0.07*神圣法术强度+0.07*攻击强度到536+0.07*神圣法术强度+0.07*攻击强度点神圣伤害并使其眩晕，然后跳转攻击下一个附近的目标。最多可攻击3个目标。效果持续10 秒。"
      ]
     },
     {
      "name": "Guarded by the Light",
      "row": 8,
      "col": 2,
      "maxRank": 2,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces spell damage taken by 3% and gives a 50% chance to refresh the duration of your Divine Plea when you hit an enemy.  In addition, your Divine Plea spell is 50% less likely to be dispelled.",
       "Reduces spell damage taken by 6% and gives a 100% chance to refresh the duration of your Divine Plea when you hit an enemy.  In addition, your Divine Plea spell is 100% less likely to be dispelled."
      ],
      "cn": "圣光守护",
      "cnDesc": [
       "使你受到的法术伤害降低3%，当你击中敌人时，有50%的几率刷新你的神圣恳求效果。另外，你的神圣恳求被驱散的几率降低50%。",
       "使你受到的法术伤害降低6%，当你击中敌人时，有100%的几率刷新你的神圣恳求效果。另外，你的神圣恳求被驱散的几率降低100%。"
      ]
     },
     {
      "name": "Shield of the Templar",
      "row": 9,
      "col": 1,
      "maxRank": 3,
      "req": 45,
      "prereq": "Avenger's Shield",
      "prereqRank": 1,
      "desc": [
       "Reduces all damage taken by 1% and grants your Avenger's Shield a 33% chance to silence your targets for 3 sec.",
       "Reduces all damage taken by 2% and grants your Avenger's Shield a 66% chance to silence your targets for 3 sec.",
       "Reduces all damage taken by 3% and grants your Avenger's Shield a 100% chance to silence your targets for 3 sec."
      ],
      "cn": "圣殿骑士之盾",
      "cnDesc": [
       "使你受到的所有伤害降低1%，你的复仇者之盾有33%的几率使你的目标沉默3 秒。",
       "使你受到的所有伤害降低2%，你的复仇者之盾有66%的几率使你的目标沉默3 秒。",
       "使你受到的所有伤害降低3%，你的复仇者之盾有100%的几率使你的目标沉默3 秒。"
      ]
     },
     {
      "name": "Judgements of the Just",
      "row": 9,
      "col": 2,
      "maxRank": 2,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Hammer of Justice by 5 sec, increases the duration of your Seal of Justice effect by 0.5 sec and your Judgement spells also reduce the melee attack speed of the target by 10%.",
       "Reduces the cooldown of your Hammer of Justice by 10 sec, increases the duration of your Seal of Justice effect by 1 sec and your Judgement spells also reduce the melee attack speed of the target by 20%."
      ],
      "cn": "正义审判",
      "cnDesc": [
       "你的制裁之锤的冷却时间缩短5秒，公正圣印效果的持续时间延长0.5秒，你的审判法术可以使目标的近战攻击速度降低10%。",
       "你的制裁之锤的冷却时间缩短10秒，公正圣印效果的持续时间延长1秒，你的审判法术可以使目标的近战攻击速度降低20%。"
      ]
     },
     {
      "name": "Hammer of the Righteous",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Hammer the current target and up to 2 additional nearby targets, causing 4 times your main hand damage per second as Holy damage."
      ],
      "cn": "正义之锤",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>6% 的基础法力值</td><th>近战范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>6 秒冷却时间</th></tr></table>用战锤攻击当前目标和最多2个邻近的额外目标，每秒造成4倍于主手武器伤害的神圣伤害。"
      ]
     }
    ],
    "sprite": "assets/sprites/paladin_protection.webp"
   },
   {
    "name": "Retribution",
    "cn": "惩戒",
    "bg": "assets/tree-bg/paladin_retribution.jpg",
    "talents": [
     {
      "name": "Deflection",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Parry chance by 1%.",
       "Increases your Parry chance by 2%.",
       "Increases your Parry chance by 3%.",
       "Increases your Parry chance by 4%.",
       "Increases your Parry chance by 5%."
      ],
      "cn": "偏斜",
      "cnDesc": [
       "使你的招架几率提高1%。",
       "使你的招架几率提高2%。",
       "使你的招架几率提高3%。",
       "使你的招架几率提高4%。",
       "使你的招架几率提高5%。"
      ]
     },
     {
      "name": "Benediction",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of all instant cast spells by 2%.",
       "Reduces the mana cost of all instant cast spells by 4%.",
       "Reduces the mana cost of all instant cast spells by 6%.",
       "Reduces the mana cost of all instant cast spells by 8%.",
       "Reduces the mana cost of all instant cast spells by 10%."
      ],
      "cn": "祈福",
      "cnDesc": [
       "所有瞬发法术消耗的法力值减少2%。",
       "所有瞬发法术消耗的法力值减少4%。",
       "所有瞬发法术消耗的法力值减少6%。",
       "所有瞬发法术消耗的法力值减少8%。",
       "所有瞬发法术消耗的法力值减少10%。"
      ]
     },
     {
      "name": "Improved Judgements",
      "row": 1,
      "col": 0,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Decreases the cooldown of your Judgement spells by 1 sec.",
       "Decreases the cooldown of your Judgement spells by 2 sec."
      ],
      "cn": "强化审判",
      "cnDesc": [
       "使你的审判法术的冷却时间缩短1秒。",
       "使你的审判法术的冷却时间缩短2秒。"
      ]
     },
     {
      "name": "Heart of the Crusader",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "In addition to the normal effect, your Judgement spells will also increase the critical strike chance of all attacks made against that target by an additional 1%.",
       "In addition to the normal effect, your Judgement spells will also increase the critical strike chance of all attacks made against that target by an additional 2%.",
       "In addition to the normal effect, your Judgement spells will also increase the critical strike chance of all attacks made against that target by an additional 3%."
      ],
      "cn": "十字军之心",
      "cnDesc": [
       "除了普通的效果外，你的审判法术也会令所有攻击对审判目标的爆击几率提高1%。",
       "除了普通的效果外，你的审判法术也会令所有攻击对审判目标的爆击几率提高2%。",
       "除了普通的效果外，你的审判法术也会令所有攻击对审判目标的爆击几率提高3%。"
      ]
     },
     {
      "name": "Improved Blessing of Might",
      "row": 1,
      "col": 2,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the attack power bonus of your Blessing of Might by 12%.",
       "Increases the attack power bonus of your Blessing of Might by 25%."
      ],
      "cn": "强化力量祝福",
      "cnDesc": [
       "使你的力量祝福所提供的攻击强度加成提高12%。",
       "使你的力量祝福所提供的攻击强度加成提高25%。"
      ]
     },
     {
      "name": "Vindication",
      "row": 2,
      "col": 0,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives the Paladin's damaging attacks a chance to reduce the target's attack power by 23 for 10 sec.",
       "Gives the Paladin's damaging attacks a chance to reduce the target's attack power by 46 for 10 sec."
      ],
      "cn": "辩护",
      "cnDesc": [
       "使圣骑士的伤害性攻击有一定的几率令目标的攻击强度降低23点，持续10 秒。",
       "使圣骑士的伤害性攻击有一定的几率令目标的攻击强度降低46，持续10 秒。"
      ]
     },
     {
      "name": "Conviction",
      "row": 2,
      "col": 1,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to get a critical strike with all spells and attacks by 1%.",
       "Increases your chance to get a critical strike with all spells and attacks by 2%.",
       "Increases your chance to get a critical strike with all spells and attacks by 3%.",
       "Increases your chance to get a critical strike with all spells and attacks by 4%.",
       "Increases your chance to get a critical strike with all spells and attacks by 5%."
      ],
      "cn": "定罪",
      "cnDesc": [
       "使你的所有法术和攻击的爆击几率提高1%。",
       "使你的所有法术和攻击的爆击几率提高2%。",
       "使你的所有法术和攻击的爆击几率提高3%。",
       "使你的所有法术和攻击的爆击几率提高4%。",
       "使你的所有法术和攻击的爆击几率提高5%。"
      ]
     },
     {
      "name": "Seal of Command",
      "row": 2,
      "col": 2,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "All melee attacks deal 0.36*mw to 0.36*MW additional Holy damage. When used with attacks or abilities that strike a single target, this additional Holy damage will strike up to 2 additional targets. Lasts 30 min.\n\nUnleashing this Seal's energy will judge an enemy, instantly causing 0.19*mw+0.08*AP+0.13*HolP to 0.19*MW+0.08*AP+0.13*HolP Holy damage."
      ],
      "cn": "命令圣印",
      "cnDesc": [
       "14% 的基础法力值<br />瞬发使圣骑士的所有物理攻击对目标造成0.36*主手武器伤害到0.36*主手武器最大伤害点的额外神圣伤害。 当激活时圣骑士的技能或攻击击中某个单体目标，则该神圣伤害会攻击额外2个目标。持续30 分钟。<br /><br />释放这种圣印的能量将对目标造成审判效果，对其立刻造成0.19*主手武器伤害+0.08*攻击强度+0.13*神圣法术强度到0.19*主手武器最大伤害+0.08*攻击强度+0.13*神圣法术强度点神圣伤害，"
      ]
     },
     {
      "name": "Pursuit of Justice",
      "row": 2,
      "col": 3,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the duration of all Disarm effects by 25% and increases movement and mounted movement speed by 8%.  This does not stack with other movement speed increasing effects.",
       "Reduces the duration of all Disarm effects by 50% and increases movement and mounted movement speed by 15%.  This does not stack with other movement speed increasing effects."
      ],
      "cn": "正义追击",
      "cnDesc": [
       "使你受到的所有缴械效果持续时间缩短25%，移动速度和坐骑移动速度提高8%。这个效果不与其它提高移动速度的效果叠加。",
       "使你受到的所有缴械效果持续时间缩短50%，移动速度和坐骑移动速度提高15%。这个效果不与其它提高移动速度的效果叠加。"
      ]
     },
     {
      "name": "Eye for an Eye",
      "row": 3,
      "col": 0,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "All criticals against you cause 5% of the damage taken to the attacker as well.  The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
       "All criticals against you cause 10% of the damage taken to the attacker as well.  The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health."
      ],
      "cn": "以眼还眼",
      "cnDesc": [
       "所有对你造成爆击的攻击都会对攻击者造成5%的伤害，但最大数值不会超过圣骑士生命值总量的50%。",
       "所有对你造成爆击的攻击都会对攻击者造成10%的伤害，但最大数值不会超过圣骑士生命值总量的50%。"
      ]
     },
     {
      "name": "Sanctity of Battle",
      "row": 3,
      "col": 2,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to critically hit with all spells and attacks by 1% and increases the damage caused by Exorcism and Crusader Strike by 5%.",
       "Increases your chance to critically hit with all spells and attacks by 2% and increases the damage caused by Exorcism and Crusader Strike by 10%.",
       "Increases your chance to critically hit with all spells and attacks by 3% and increases the damage caused by Exorcism and Crusader Strike by 15%."
      ],
      "cn": "战斗的圣洁",
      "cnDesc": [
       "你的所有法术和攻击的爆击几率提高1%，驱邪术和十字军打击造成的伤害提高5%。",
       "你的所有法术和攻击的爆击几率提高2%，驱邪术和十字军打击造成的伤害提高10%。",
       "你的所有法术和攻击的爆击几率提高3%，驱邪术和十字军打击造成的伤害提高15%。"
      ]
     },
     {
      "name": "Crusade",
      "row": 3,
      "col": 3,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases all damage caused by 1% and all damage caused against Humanoids, Demons, Undead and Elementals by an additional 1%.",
       "Increases all damage caused by 2% and all damage caused against Humanoids, Demons, Undead and Elementals by an additional 2%.",
       "Increases all damage caused by 3% and all damage caused against Humanoids, Demons, Undead and Elementals by an additional 3%."
      ],
      "cn": "征伐",
      "cnDesc": [
       "使你造成的所有伤害提高1%，对人型生物、恶魔、亡灵和元素生物造成的所有伤害再提高1%。",
       "使你造成的所有伤害提高2%，对人型生物、恶魔、亡灵和元素生物造成的所有伤害再提高2%。",
       "使你造成的所有伤害提高3%，对人型生物、恶魔、亡灵和元素生物造成的所有伤害再提高3%。"
      ]
     },
     {
      "name": "Two-Handed Weapon Specialization",
      "row": 4,
      "col": 0,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage you deal with two-handed melee weapons by 2%.",
       "Increases the damage you deal with two-handed melee weapons by 4%.",
       "Increases the damage you deal with two-handed melee weapons by 6%."
      ],
      "cn": "双手武器专精",
      "cnDesc": [
       "使你的双手近战武器伤害提高2%。",
       "使你的双手近战武器伤害提高4%。",
       "使你的双手近战武器伤害提高6%。"
      ]
     },
     {
      "name": "Sanctified Retribution",
      "row": 4,
      "col": 2,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage caused by Retribution Aura by 50% and all damage caused by friendly targets affected by any of your Auras is increased by 3%."
      ],
      "cn": "圣洁惩戒",
      "cnDesc": [
       "惩戒光环造成的伤害提高50%，受到你的任何光环影响的友方目标造成的伤害提高3%。"
      ]
     },
     {
      "name": "Vengeance",
      "row": 5,
      "col": 1,
      "maxRank": 3,
      "req": 25,
      "prereq": "Conviction",
      "prereqRank": 5,
      "desc": [
       "Gives you a 1% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability. This effect stacks up to 3 times.",
       "Gives you a 2% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability. This effect stacks up to 3 times.",
       "Gives you a 3% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability. This effect stacks up to 3 times."
      ],
      "cn": "复仇",
      "cnDesc": [
       "使你的武器攻击、法术或技能在对敌人造成爆击之后有1%的物理和神圣伤害加成，持续30 秒。这个效果可以叠加最多3次。",
       "使你的武器攻击、法术或技能在对敌人造成爆击之后有2%的物理和神圣伤害加成，持续30 秒。这个效果可以叠加最多3次。",
       "使你的武器攻击、法术或技能在对敌人造成爆击之后有3%的物理和神圣伤害加成，持续30 秒。这个效果可以叠加最多3次。"
      ]
     },
     {
      "name": "Divine Purpose",
      "row": 5,
      "col": 2,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces your chance to be hit by spells and ranged attacks by 2% and gives your Hand of Freedom spell a 50% chance to remove any Stun effects on the target.",
       "Reduces your chance to be hit by spells and ranged attacks by 4% and gives your Hand of Freedom spell a 100% chance to remove any Stun effects on the target."
      ],
      "cn": "神圣意志",
      "cnDesc": [
       "法术和远程攻击对你的命中几率降低2%，你的自由之手法术有50%的几率移除目标身上的所有昏迷效果。",
       "法术和远程攻击对你的命中几率降低4%，你的自由之手法术有100%的几率移除目标身上的所有昏迷效果。"
      ]
     },
     {
      "name": "The Art of War",
      "row": 6,
      "col": 0,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of your Judgement, Crusader Strike and Divine Storm abilities by 5% and when your melee attacks critically hit the cast time of your next Flash of Light or Exorcism is reduced by 0.75 sec.",
       "Increases the damage of your Judgement, Crusader Strike and Divine Storm abilities by 10% and when your melee attacks critically hit your next Flash of Light  or Exorcism spell becomes instant cast."
      ],
      "cn": "战争艺术",
      "cnDesc": [
       "使你的审判、十字军打击和神圣风暴技能的伤害提高5%，当近战攻击爆击时，你的下一个圣光闪现或驱邪术的施法时间缩短0.75秒。",
       "使你的审判、十字军打击和神圣风暴技能的伤害提高10%，当近战攻击爆击时，你的下一个圣光闪现或驱邪术变成瞬发。"
      ]
     },
     {
      "name": "Repentance",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Puts the enemy target in a state of meditation, incapacitating them for up to 1 min, and removing the effect of Righteous Vengeance. Any damage caused will awaken the target. Usable against Demons, Dragonkin, Giants, Humanoids and Undead."
      ],
      "cn": "忏悔",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>9% 的基础法力值</td><th>20码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>1 分钟冷却时间</th></tr></table>使目标进入冥想状态并移除目标身上的正义复仇效果，最多瘫痪1 分钟。任何伤害都会唤醒目标。可以对恶魔、龙类、巨人、人型生物和亡灵使用。"
      ]
     },
     {
      "name": "Judgements of the Wise",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your damaging Judgement spells have a 33% chance to grant the Replenishment effect to up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec, and to immediately grant you 25% of your base mana.",
       "Your damaging Judgement spells have a 66% chance to grant the Replenishment effect to up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec, and to immediately grant you 25% of your base mana.",
       "Your damaging Judgement spells have a 100% chance to grant the Replenishment effect to up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 sec, and to immediately grant you 25% of your base mana."
      ],
      "cn": "智者审判",
      "cnDesc": [
       "你的审判法术有33%的几率使小队或团队中的最多10个队友获得休息效果，每5秒恢复法力值上限的1%，持续15 秒，并使你立即恢复基础法力值的25%。",
       "你的审判法术有66%的几率使小队或团队中的最多10个队友获得休息效果，每5秒恢复法力值上限的1%，持续15 秒，并使你立即恢复基础法力值的25%。",
       "你的审判法术有100%的几率使小队或团队中的最多10个队友获得休息效果，每5秒恢复法力值上限的1%，持续15 秒，并使你立即恢复基础法力值的25%。"
      ]
     },
     {
      "name": "Fanaticism",
      "row": 7,
      "col": 1,
      "maxRank": 3,
      "req": 35,
      "prereq": "Repentance",
      "prereqRank": 1,
      "desc": [
       "Increases the critical strike chance of all Judgements capable of a critical hit by 6% and reduces threat caused by all actions by 10% except when under the effects of Righteous Fury.",
       "Increases the critical strike chance of all Judgements capable of a critical hit by 12% and reduces threat caused by all actions by 20% except when under the effects of Righteous Fury.",
       "Increases the critical strike chance of all Judgements capable of a critical hit by 18% and reduces threat caused by all actions by 30% except when under the effects of Righteous Fury."
      ],
      "cn": "狂热",
      "cnDesc": [
       "所有可以造成爆击的审判法术的爆击几率提高6%，所有行为造成的威胁值降低10%（在正义之怒效果影响下时不会降低威胁值）。",
       "所有可以造成爆击的审判法术的爆击几率提高12%，所有行为造成的威胁值降低20%（在正义之怒效果影响下时不会降低威胁值）。",
       "所有可以造成爆击的审判法术的爆击几率提高18%，所有行为造成的威胁值降低30%（在正义之怒效果影响下时不会降低威胁值）。"
      ]
     },
     {
      "name": "Sanctified Wrath",
      "row": 7,
      "col": 2,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of Hammer of Wrath by 25%, reduces the cooldown of Avenging Wrath by 30 secs and while affected by Avenging Wrath 25% of all damage caused bypasses damage reduction effects.",
       "Increases the critical strike chance of Hammer of Wrath by 50%, reduces the cooldown of Avenging Wrath by 60 secs and while affected by Avenging Wrath 50% of all damage caused bypasses damage reduction effects."
      ],
      "cn": "圣洁怒火",
      "cnDesc": [
       "愤怒之锤的爆击几率提高25%，复仇之怒的冷却时间缩短30秒，在复仇之怒效果影响下时，你造成的所有伤害的25%忽略目标的伤害减免效果。",
       "愤怒之锤的爆击几率提高50%，复仇之怒的冷却时间缩短60秒，在复仇之怒效果影响下时，你造成的所有伤害的50%忽略目标的伤害减免效果。"
      ]
     },
     {
      "name": "Swift Retribution",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your auras also increase casting, ranged and melee attack speeds by 1%.",
       "Your auras also increase casting, ranged and melee attack speeds by 2%.",
       "Your auras also increase casting, ranged and melee attack speeds by 3%."
      ],
      "cn": "迅捷惩戒",
      "cnDesc": [
       "你的光环也可以使施法、远程和近战攻击速度提高1%。",
       "你的光环也可以使施法、远程和近战攻击速度提高2%。",
       "你的光环也可以使施法、远程和近战攻击速度提高3%。"
      ]
     },
     {
      "name": "Crusader Strike",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "An Instant strike that causes 75% weapon damage."
      ],
      "cn": "十字军打击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>5% 的基础法力值</td><th>近战范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>4 秒冷却时间</th></tr></table>瞬发的攻击，造成75%的武器伤害。"
      ]
     },
     {
      "name": "Sheath of Light",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your spell power by an amount equal to 10% of your attack power and your critical healing spells heal the target for 20% of the healed amount over 12 seconds.",
       "Increases your spell power by an amount equal to 20% of your attack power and your critical healing spells heal the target for 40% of the healed amount over 12 seconds.",
       "Increases your spell power by an amount equal to 30% of your attack power and your critical healing spells heal the target for 60% of the healed amount over 12 seconds."
      ],
      "cn": "圣光出鞘",
      "cnDesc": [
       "使你的法术强度提高，数值相当于你的攻击强度的10%；你的治疗爆击可以在12秒内继续为目标进行治疗，治疗量相当于该次产生爆击的治疗法术所造成治疗量的20%。",
       "使你的法术强度提高，数值相当于你的攻击强度的20%；你的治疗爆击可以在12秒内继续为目标进行治疗，治疗量相当于该次产生爆击的治疗法术所造成治疗量的40%。",
       "使你的法术强度提高，数值相当于你的攻击强度的30%；你的治疗爆击可以在12秒内继续为目标进行治疗，治疗量相当于该次产生爆击的治疗法术所造成治疗量的60%。"
      ]
     },
     {
      "name": "Righteous Vengeance",
      "row": 9,
      "col": 1,
      "maxRank": 3,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When your Judgement, Crusader Strike and Divine Storm spells deal a critical strike, your target will take 10% additional damage over 8 sec.",
       "When your Judgement, Crusader Strike and Divine Storm spells deal a critical strike, your target will take 20% additional damage over 8 sec.",
       "When your Judgement, Crusader Strike and Divine Storm spells deal a critical strike, your target will take 30% additional damage over 8 sec."
      ],
      "cn": "正义复仇",
      "cnDesc": [
       "当你的审判、十字军打击和神圣风暴打出爆击时，你的目标会受到10%的额外伤害，持续8 秒。",
       "当你的审判、十字军打击和神圣风暴打出爆击时，你的目标会受到20%的额外伤害，持续8 秒。",
       "当你的审判、十字军打击和神圣风暴打出爆击时，你的目标会受到30%的额外伤害，持续8 秒。"
      ]
     },
     {
      "name": "Divine Storm",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "An instant weapon attack that causes 110% of weapon damage to up to 4 enemies within 8 yards. The Divine Storm heals up to 3 party or raid members totaling 25% of the damage caused."
      ],
      "cn": "神圣风暴",
      "cnDesc": [
       "12% 的基础法力值<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>10 秒冷却时间</th></tr></table>瞬发的武器攻击，对周围半径8码范围内的最多4个敌人造成110%的武器伤害。神圣风暴还会治疗最多3个小队或团队成员，治疗总量相当于它所造成伤害的25%。"
      ]
     }
    ],
    "sprite": "assets/sprites/paladin_retribution.webp"
   }
  ],
  "icon": "assets/class-icons/paladin.jpg"
 },
 {
  "id": "priest",
  "name": "Priest",
  "cn": "牧师",
  "trees": [
   {
    "name": "Discipline",
    "cn": "戒律",
    "bg": "assets/tree-bg/priest_discipline.jpg",
    "talents": [
     {
      "name": "Unbreakable Will",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 6%.",
       "Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 12%.",
       "Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 18%.",
       "Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 24%.",
       "Reduces the duration of Stun, Fear, and Silence effects done to you by an additional 30%."
      ],
      "cn": "坚定意志",
      "cnDesc": [
       "使你受到的昏迷、恐惧和沉默效果的持续时间缩短6%。",
       "使你受到的昏迷、恐惧和沉默效果的持续时间缩短12%。",
       "使你受到的昏迷、恐惧和沉默效果的持续时间缩短18%。",
       "使你受到的昏迷、恐惧和沉默效果的持续时间缩短24%。",
       "使你受到的昏迷、恐惧和沉默效果的持续时间缩短30%。"
      ]
     },
     {
      "name": "Twin Disciplines",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage and healing done by your instant spells by 1%.",
       "Increases the damage and healing done by your instant spells by 2%.",
       "Increases the damage and healing done by your instant spells by 3%.",
       "Increases the damage and healing done by your instant spells by 4%.",
       "Increases the damage and healing done by your instant spells by 5%."
      ],
      "cn": "双生戒律",
      "cnDesc": [
       "使你的瞬发法术造成的伤害和治疗量提高1%。",
       "使你的瞬发法术造成的伤害和治疗量提高2%。",
       "使你的瞬发法术造成的伤害和治疗量提高3%。",
       "使你的瞬发法术造成的伤害和治疗量提高4%。",
       "使你的瞬发法术造成的伤害和治疗量提高5%。"
      ]
     },
     {
      "name": "Silent Resolve",
      "row": 1,
      "col": 0,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the threat generated by your Holy and Discipline spells by 7% and reduces the chance your helpful spells and damage over time effects will be dispelled by 10%.",
       "Reduces the threat generated by your Holy and Discipline spells by 14% and reduces the chance your helpful spells and damage over time effects will be dispelled by 20%.",
       "Reduces the threat generated by your Holy and Discipline spells by 20% and reduces the chance your helpful spells and damage over time effects will be dispelled by 30%."
      ],
      "cn": "无声消退",
      "cnDesc": [
       "使你的神圣和戒律系法术造成的威胁值降低7%，并使你的增益法术和持续伤害法术被驱散的几率降低10%。",
       "使你的神圣和戒律系法术造成的威胁值降低14%，并使你的增益法术和持续伤害法术被驱散的几率降低20%。",
       "使你的神圣和戒律系法术造成的威胁值降低20%，并使你的增益法术和持续伤害法术被驱散的几率降低30%。"
      ]
     },
     {
      "name": "Improved Inner Fire",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effect of your Inner Fire spell by 15%, and increases the total number of charges by 4.",
       "Increases the effect of your Inner Fire spell by 30%, and increases the total number of charges by 8.",
       "Increases the effect of your Inner Fire spell by 45%, and increases the total number of charges by 12."
      ],
      "cn": "强化心灵之火",
      "cnDesc": [
       "使你的心灵之火的效果提高15%，可使用次数增加4次。",
       "使你的心灵之火的效果提高30%，可使用次数增加8次。",
       "使你的心灵之火的效果提高45%，可使用次数增加12次。"
      ]
     },
     {
      "name": "Improved Power Word: Fortitude",
      "row": 1,
      "col": 2,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effect of your Power Word: Fortitude and Prayer of Fortitude spells by 15%, and increases your total Stamina by 2%.",
       "Increases the effect of your Power Word: Fortitude and Prayer of Fortitude spells by 30%, and increases your total Stamina by 4%."
      ],
      "cn": "强化真言术：韧",
      "cnDesc": [
       "使你的真言术：韧和坚韧祷言的效果提高15%，你的耐力总值提高2%。",
       "使你的真言术：韧和坚韧祷言的效果提高30%，你的耐力总值提高4%。"
      ]
     },
     {
      "name": "Martyrdom",
      "row": 1,
      "col": 3,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives you a 50% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike.  The Focused Casting effect reduces the pushback suffered from damaging attacks while casting Priest spells and decreases the duration of Interrupt effects by 10%.",
       "Gives you a 100% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike.  The Focused Casting effect reduces the pushback suffered from damaging attacks while casting Priest spells and decreases the duration of Interrupt effects by 20%."
      ],
      "cn": "殉难",
      "cnDesc": [
       "使你有50%的几率在受到敌人的近战或远程爆击后获得专注施法效果，持续6 秒。专注施法效果可以使你在施放牧师法术时因受到伤害而承受的施法推迟时间以及打断效果的持续时间缩短10%。",
       "使你有100%的几率在受到敌人的近战或远程爆击后获得专注施法效果，持续6 秒。专注施法效果可以使你在施放牧师法术时因受到伤害而承受的施法推迟时间以及打断效果的持续时间缩短20%。"
      ]
     },
     {
      "name": "Meditation",
      "row": 2,
      "col": 0,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Allows 17% of your mana regeneration to continue while casting.",
       "Allows 33% of your mana regeneration to continue while casting.",
       "Allows 50% of your mana regeneration to continue while casting."
      ],
      "cn": "冥想",
      "cnDesc": [
       "使你在施法时仍保持17%的法力值恢复速度。",
       "使你在施法时仍保持33%的法力值恢复速度。",
       "使你在施法时仍保持50%的法力值恢复速度。"
      ]
     },
     {
      "name": "Inner Focus",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When activated, reduces the mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is capable of a critical effect."
      ],
      "cn": "心灵专注",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>激活之后，你的下一个法术所消耗的法力值减少100%，爆击几率提高25%（如果它有可能造成爆击的话）。"
      ]
     },
     {
      "name": "Improved Power Word: Shield",
      "row": 2,
      "col": 2,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage absorbed by your Power Word: Shield by 5%.",
       "Increases the damage absorbed by your Power Word: Shield by 10%.",
       "Increases the damage absorbed by your Power Word: Shield by 15%."
      ],
      "cn": "强化真言术：盾",
      "cnDesc": [
       "使你的真言术：盾所吸收的伤害提高5%。",
       "使你的真言术：盾所吸收的伤害提高10%。",
       "使你的真言术：盾所吸收的伤害提高15%。"
      ]
     },
     {
      "name": "Absolution",
      "row": 3,
      "col": 0,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your Dispel Magic, Cure Disease, Abolish Disease and Mass Dispel spells by 5%.",
       "Reduces the mana cost of your Dispel Magic, Cure Disease, Abolish Disease and Mass Dispel spells by 10%.",
       "Reduces the mana cost of your Dispel Magic, Cure Disease, Abolish Disease and Mass Dispel spells by 15%."
      ],
      "cn": "赦免",
      "cnDesc": [
       "使你的驱散魔法、治愈疾病、驱除疾病和群体驱散法术所消耗的法力值降低5%。",
       "使你的驱散魔法、治愈疾病、驱除疾病和群体驱散法术所消耗的法力值降低10%。",
       "使你的驱散魔法、治愈疾病、驱除疾病和群体驱散法术所消耗的法力值降低15%。"
      ]
     },
     {
      "name": "Mental Agility",
      "row": 3,
      "col": 1,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your instant cast spells by 4%.",
       "Reduces the mana cost of your instant cast spells by 7%.",
       "Reduces the mana cost of your instant cast spells by 10%."
      ],
      "cn": "精神敏锐",
      "cnDesc": [
       "使你的瞬发法术所消耗的法力值减少4%。",
       "使你的瞬发法术所消耗的法力值减少7%。",
       "使你的瞬发法术所消耗的法力值减少10%。"
      ]
     },
     {
      "name": "Improved Mana Burn",
      "row": 3,
      "col": 3,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the casting time of your Mana Burn spell by 0.5 sec.",
       "Reduces the casting time of your Mana Burn spell by 1 sec."
      ],
      "cn": "强化法力燃烧",
      "cnDesc": [
       "使你的法力燃烧的施法时间缩短0.5秒。",
       "使你的法力燃烧的施法时间缩短1秒。"
      ]
     },
     {
      "name": "Reflective Shield",
      "row": 4,
      "col": 0,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Causes 22% of the damage you absorb with Power Word: Shield to reflect back at the attacker.  This damage causes no threat.",
       "Causes 45% of the damage you absorb with Power Word: Shield to reflect back at the attacker.  This damage causes no threat."
      ],
      "cn": "反射护盾",
      "cnDesc": [
       "你的真言术：盾所吸收的伤害有22%反射给攻击者。这种伤害不会产生威胁值。",
       "你的真言术：盾所吸收的伤害有45%反射给攻击者。这种伤害不会产生威胁值。"
      ]
     },
     {
      "name": "Mental Strength",
      "row": 4,
      "col": 1,
      "maxRank": 5,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Intellect by 3%.",
       "Increases your total Intellect by 6%.",
       "Increases your total Intellect by 9%.",
       "Increases your total Intellect by 12%.",
       "Increases your total Intellect by 15%."
      ],
      "cn": "心灵之力",
      "cnDesc": [
       "使你的智力总值提高3%。",
       "使你的智力总值提高6%。",
       "使你的智力总值提高9%。",
       "使你的智力总值提高12%。",
       "使你的智力总值提高15%。"
      ]
     },
     {
      "name": "Soul Warding",
      "row": 4,
      "col": 2,
      "maxRank": 1,
      "req": 20,
      "prereq": "Improved Power Word: Shield",
      "prereqRank": 3,
      "desc": [
       "Reduces the cooldown of your Power Word: Shield ability by 4 sec, and reduces the mana cost of your Power Word: Shield by 15%."
      ],
      "cn": "灵魂守护",
      "cnDesc": [
       "瞬发使你的真言术：盾的冷却时间缩短4秒，法力值消耗降低15%。"
      ]
     },
     {
      "name": "Focused Power",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases damage and healing done by your spells by 2%. In addition, your Mass Dispel cast time is reduced by 0.5 sec.",
       "Increases damage and healing done by your spells by 4%. In addition, your Mass Dispel cast time is reduced by 1 sec."
      ],
      "cn": "能量集中",
      "cnDesc": [
       "使你的法术伤害和治疗效果提高2%。另外，你的群体驱散法术的施法时间缩短0.5秒。",
       "使你的法术伤害和治疗效果提高4%。另外，你的群体驱散法术的施法时间缩短1秒。"
      ]
     },
     {
      "name": "Enlightenment",
      "row": 5,
      "col": 2,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Spirit by 2% and increases your spell hase by 2%.",
       "Increases your total Spirit by 4% and increases your spell hase by 4%.",
       "Increases your total Spirit by 6% and increases your spell hase by 6%."
      ],
      "cn": "启迪",
      "cnDesc": [
       "使你的精神总值提高2%，法术急速提高2%。",
       "使你的精神总值提高4%，法术急速提高4%。",
       "使你的精神总值提高6%，法术急速提高6%。"
      ]
     },
     {
      "name": "Focused Will",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your spell critical effect chance by 1%, and after taking a critical hit you gain the Focused Will effect, reducing all damage taken by 2% and increasing healing effects on you by 3%.  Stacks up to 3 times.  Lasts 8 sec.",
       "Increases your spell critical effect chance by 2%, and after taking a critical hit you gain the Focused Will effect, reducing all damage taken by 3% and increasing healing effects on you by 4%.  Stacks up to 3 times.  Lasts 8 sec.",
       "Increases your spell critical effect chance by 3%, and after taking a critical hit you gain the Focused Will effect, reducing all damage taken by 4% and increasing healing effects on you by 5%.  Stacks up to 3 times.  Lasts 8 sec."
      ],
      "cn": "专注意志",
      "cnDesc": [
       "使你的法术爆击几率提高1%。在受到爆击之后获得专注意志效果，受到的所有伤害降低2%，受到的治疗效果提高3%，可叠加最多3次。效果持续8 秒。",
       "使你的法术爆击几率提高2%。在受到爆击之后获得专注意志效果，受到的所有伤害降低3%，受到的治疗效果提高4%，可叠加最多3次。效果持续8 秒。",
       "使你的法术爆击几率提高3%。在受到爆击之后获得专注意志效果，受到的所有伤害降低4%，受到的治疗效果提高5%，可叠加最多3次。效果持续8 秒。"
      ]
     },
     {
      "name": "Power Infusion",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Mental Strength",
      "prereqRank": 5,
      "desc": [
       "Infuses the target with power, increasing spell casting speed by 20% and reducing the mana cost of all spells by 20%. Lasts 15 sec."
      ],
      "cn": "能量灌注",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>16% 的基础法力值</td><th>30码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>能量灌注目标全身，使其施法速度提高20%，所有法术的消耗降低20%，持续15 秒。"
      ]
     },
     {
      "name": "Improved Flash Heal",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your Flash Heal by 5%, and increases the critical effect chance of your Flash Heal by 4% on friendly targets at or below 50% health.",
       "Reduces the mana cost of your Flash Heal by 10%, and increases the critical effect chance of your Flash Heal by 7% on friendly targets at or below 50% health.",
       "Reduces the mana cost of your Flash Heal by 15%, and increases the critical effect chance of your Flash Heal by 10% on friendly targets at or below 50% health."
      ],
      "cn": "强化快速治疗",
      "cnDesc": [
       "使你的快速治疗的法力值消耗降低5%，快速治疗对生命值低于50%的友方目标产生爆击的几率提高4%。",
       "使你的快速治疗的法力值消耗降低10%，快速治疗对生命值低于50%的友方目标产生爆击的几率提高7%。",
       "使你的快速治疗的法力值消耗降低15%，快速治疗对生命值低于50%的友方目标产生爆击的几率提高10%。"
      ]
     },
     {
      "name": "Renewed Hope",
      "row": 7,
      "col": 0,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical effect chance of your Flash Heal, Greater Heal and Penance (Heal) spells by 2% on targets afflicted by the Weakened Soul effect, and you have a 50% chance to reduce all damage taken by 3% for 1 min to all friendly party and raid targets when you cast Power Word: Shield. This effect has a 15 sec cooldown.",
       "Increases the critical effect chance of your Flash Heal, Greater Heal and Penance (Heal) spells by 4% on targets afflicted by the Weakened Soul effect, and you have a 100% chance to reduce all damage taken by 3% for 1 min to all friendly party and raid targets when you cast Power Word: Shield. This effect has a 15 sec cooldown."
      ],
      "cn": "新生希望",
      "cnDesc": [
       "使你的快速治疗、强效治疗术和苦修（治疗）对于带有虚弱灵魂效果的目标产生爆击的几率提高2%。当你对任何友方单位或团队目标施放真言术：盾时，有50%的几率使其受到的所有伤害降低3%，持续1 分钟。该效果的冷却时间为15秒。",
       "使你的快速治疗、强效治疗术和苦修（治疗）对于带有虚弱灵魂效果的目标产生爆击的几率提高4%。当你对任何友方单位或团队目标施放真言术：盾时，有100%的几率使其受到的所有伤害降低3%，持续1 分钟。该效果的冷却时间为15秒。"
      ]
     },
     {
      "name": "Rapture",
      "row": 7,
      "col": 1,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When your Power Word: Shield is completely absorbed or dispelled you are instantly energized with 1.5% of your total mana, and you have a 33% chance to energize your shielded target with 2% total mana, 8 rage, 16 energy or 32 runic power. This effect can only occur once every 12 sec.",
       "When your Power Word: Shield is completely absorbed or dispelled you are instantly energized with 2% of your total mana, and you have a 66% chance to energize your shielded target with 2% total mana, 8 rage, 16 energy or 32 runic power. This effect can only occur once every 12 sec.",
       "When your Power Word: Shield is completely absorbed or dispelled you are instantly energized with 2.5% of your total mana, and you have a 100% chance to energize your shielded target with 2% total mana, 8 rage, 16 energy or 32 runic power. This effect can only occur once every 12 sec."
      ],
      "cn": "全神贯注",
      "cnDesc": [
       "当你的真言术：盾完全吸收伤害或被驱散时，你可以立即回复1.5%的法力值，而被你的真言术：盾保护的目标有33%的几率回复2%的法力值、8点怒气值、16点能量值或32点符文能量值。这个效果每12 秒只能触发一次。",
       "当你的真言术：盾完全吸收伤害或被驱散时，你可以立即回复2%的法力值，而被你的真言术：盾保护的目标有66%的几率回复2%的法力值、8点怒气值、16点能量值或32点符文能量值。这个效果每12 秒只能触发一次。",
       "当你的真言术：盾完全吸收伤害或被驱散时，你可以立即回复2.5%的法力值，而被你的真言术：盾保护的目标有100%的几率回复2%的法力值、8点怒气值、16点能量值或32点符文能量值。这个效果每12 秒只能触发一次。"
      ]
     },
     {
      "name": "Aspiration",
      "row": 7,
      "col": 2,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Inner Focus, Power Infusion, Pain Suppression and Penance spells by 10%.",
       "Reduces the cooldown of your Inner Focus, Power Infusion, Pain Suppression and Penance spells by 20%."
      ],
      "cn": "渴望",
      "cnDesc": [
       "使你的心灵专注、能量灌注、痛苦压制和苦修的冷却时间缩短10%。",
       "使你的心灵专注、能量灌注、痛苦压制和苦修的冷却时间缩短20%。"
      ]
     },
     {
      "name": "Divine Aegis",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Critical heals create a protective shield on the target, absorbing 10% of the amount healed. Lasts 12 sec.",
       "Critical heals create a protective shield on the target, absorbing 20% of the amount healed. Lasts 12 sec.",
       "Critical heals create a protective shield on the target, absorbing 30% of the amount healed. Lasts 12 sec."
      ],
      "cn": "神圣庇护",
      "cnDesc": [
       "治疗爆击为目标附加一层魔法护盾，可吸收相当于该次治疗量10%的伤害。效果持续12 秒。",
       "治疗爆击为目标附加一层魔法护盾，可吸收相当于该次治疗量20%的伤害。效果持续12 秒。",
       "治疗爆击为目标附加一层魔法护盾，可吸收相当于该次治疗量30%的伤害。效果持续12 秒。"
      ]
     },
     {
      "name": "Pain Suppression",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Instantly reduces a friendly target's threat by 5%, reduces all damage taken by 40% and increases resistance to Dispel mechanics by 65% for 8 sec."
      ],
      "cn": "痛苦压制",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>8% 的基础法力值</td><th>40码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>立即使一个友方目标的威胁值降低5%，受到的所有伤害降低40%，抵抗驱散效果的几率提高65%，效果持续8 秒。"
      ]
     },
     {
      "name": "Grace",
      "row": 8,
      "col": 2,
      "maxRank": 2,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Flash Heal, Greater Heal, and Penance spells have a 50% chance to bless the target with Grace, increasing all healing received from the Priest by 3%. This effect will stack up to 3 times. Effect lasts 15 sec. Grace can only be active on one target at a time.",
       "Your Flash Heal, Greater Heal, and Penance spells have a 100% chance to bless the target with Grace, increasing all healing received from the Priest by 3%. This effect will stack up to 3 times. Effect lasts 15 sec. Grace can only be active on one target at a time."
      ],
      "cn": "恩赐",
      "cnDesc": [
       "你的快速治疗、强效治疗术和苦修有50%的几率令目标获得恩赐效果，使你对该目标的治疗效果提高3%。恩赐效果可以叠加最多3次，持续15 秒。你在同一时间内只能给一个目标提供恩赐效果。",
       "你的快速治疗、强效治疗术和苦修有100%的几率令目标获得恩赐效果，使你对该目标的治疗效果提高3%。恩赐效果可以叠加最多3次，持续15 秒。你在同一时间内只能给一个目标提供恩赐效果。"
      ]
     },
     {
      "name": "Borrowed Time",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Grants 5% spell haste for your next spell after casting Power Word: Shield, and increases the amount absorbed by your Power Word: Shield equal to 8% of your spell power.",
       "Grants 10% spell haste for your next spell after casting Power Word: Shield, and increases the amount absorbed by your Power Word: Shield equal to 16% of your spell power.",
       "Grants 15% spell haste for your next spell after casting Power Word: Shield, and increases the amount absorbed by your Power Word: Shield equal to 24% of your spell power.",
       "Grants 20% spell haste for your next spell after casting Power Word: Shield, and increases the amount absorbed by your Power Word: Shield equal to 32% of your spell power.",
       "Grants 25% spell haste for your next spell after casting Power Word: Shield, and increases the amount absorbed by your Power Word: Shield equal to 40% of your spell power."
      ],
      "cn": "争分夺秒",
      "cnDesc": [
       "在施放真言术：盾之后，使你的下一个法术获得5%的法术急速，并使你的真言术：盾所吸收的伤害值提高，数值相当于你的法术强度的8%。",
       "在施放真言术：盾之后，使你的下一个法术获得10%的法术急速，并使你的真言术：盾所吸收的伤害值提高，数值相当于你的法术强度的16%。",
       "在施放真言术：盾之后，使你的下一个法术获得15%的法术急速，并使你的真言术：盾所吸收的伤害值提高，数值相当于你的法术强度的24%。",
       "在施放真言术：盾之后，使你的下一个法术获得20%的法术急速，并使你的真言术：盾所吸收的伤害值提高，数值相当于你的法术强度的32%。",
       "在施放真言术：盾之后，使你的下一个法术获得25%的法术急速，并使你的真言术：盾所吸收的伤害值提高，数值相当于你的法术强度的40%。"
      ]
     },
     {
      "name": "Penance",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Launches a volley of holy light at the target, causing 240 Holy damage to an enemy, or 670 to 756 healing to an ally instantly and every 1 sec for 2 sec."
      ],
      "cn": "苦修",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>16% 的基础法力值</td><th><span class='q10'>30</span> - <span class='q2'>40</span>码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>需引导</td><th>12 秒冷却时间</th></tr></table>向目标释放圣光能量，对敌方目标造成240点神圣伤害，或对友方目标立即恢复670到756点生命值、并在接下来的2 秒内每1秒继续为其恢复等量生命值。"
      ]
     }
    ],
    "sprite": "assets/sprites/priest_discipline.webp"
   },
   {
    "name": "Holy",
    "cn": "神圣",
    "bg": "assets/tree-bg/priest_holy.jpg",
    "talents": [
     {
      "name": "Healing Focus",
      "row": 0,
      "col": 0,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the pushback suffered from damaging attacks  while casting any healing spell by 35%.",
       "Reduces the pushback suffered from damaging attacks  while casting any healing spell by 70%."
      ],
      "cn": "治疗专注",
      "cnDesc": [
       "使你在施放任何治疗法术时因受到伤害而承受的施法推迟时间缩短35%。",
       "使你在施放任何治疗法术时因受到伤害而承受的施法推迟时间缩短70%。"
      ]
     },
     {
      "name": "Improved Renew",
      "row": 0,
      "col": 1,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount healed by your Renew spell by 5%.",
       "Increases the amount healed by your Renew spell by 10%.",
       "Increases the amount healed by your Renew spell by 15%."
      ],
      "cn": "强化恢复",
      "cnDesc": [
       "使你的恢复法术的治疗量提高5%。",
       "使你的恢复法术的治疗量提高10%。",
       "使你的恢复法术的治疗量提高15%。"
      ]
     },
     {
      "name": "Holy Specialization",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical effect chance of your Holy spells by 1%.",
       "Increases the critical effect chance of your Holy spells by 2%.",
       "Increases the critical effect chance of your Holy spells by 3%.",
       "Increases the critical effect chance of your Holy spells by 4%.",
       "Increases the critical effect chance of your Holy spells by 5%."
      ],
      "cn": "神圣专精",
      "cnDesc": [
       "使你的神圣法术的爆击几率提高1%。",
       "使你的神圣法术的爆击几率提高2%。",
       "使你的神圣法术的爆击几率提高3%。",
       "使你的神圣法术的爆击几率提高4%。",
       "使你的神圣法术的爆击几率提高5%。"
      ]
     },
     {
      "name": "Spell Warding",
      "row": 1,
      "col": 1,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces all spell damage taken by 2%.",
       "Reduces all spell damage taken by 4%.",
       "Reduces all spell damage taken by 6%.",
       "Reduces all spell damage taken by 8%.",
       "Reduces all spell damage taken by 10%."
      ],
      "cn": "法术屏障",
      "cnDesc": [
       "使你受到的所有法术伤害降低2%。",
       "使你受到的所有法术伤害降低4%。",
       "使你受到的所有法术伤害降低6%。",
       "使你受到的所有法术伤害降低8%。",
       "使你受到的所有法术伤害降低10%。"
      ]
     },
     {
      "name": "Divine Fury",
      "row": 1,
      "col": 2,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.1 sec.",
       "Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.2 sec.",
       "Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.3 sec.",
       "Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.4 sec.",
       "Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.5 sec."
      ],
      "cn": "神圣之怒",
      "cnDesc": [
       "使你的惩击、神圣之火、治疗术和强效治疗术的施法时间缩短0.1秒。",
       "使你的惩击、神圣之火、治疗术和强效治疗术的施法时间缩短0.2秒。",
       "使你的惩击、神圣之火、治疗术和强效治疗术的施法时间缩短0.3秒。",
       "使你的惩击、神圣之火、治疗术和强效治疗术的施法时间缩短0.4秒。",
       "使你的惩击、神圣之火、治疗术和强效治疗术的施法时间缩短0.5秒。"
      ]
     },
     {
      "name": "Desperate Power",
      "row": 2,
      "col": 0,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Instantly heals the caster for 263 to 325."
      ],
      "cn": "绝望祷言",
      "cnDesc": [
       "21% 的基础法力值<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>立即为施法者治疗263到325点伤害。"
      ]
     },
     {
      "name": "Blessed Recovery",
      "row": 2,
      "col": 1,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "After being struck by a melee or ranged critical hit, Blessed Recovery heals you for 5% of the damage taken over 6 sec.  Additional critical hits taken during the effect increase the healing received.",
       "After being struck by a melee or ranged critical hit, Blessed Recovery heals you for 10% of the damage taken over 6 sec.  Additional critical hits taken during the effect increase the healing received.",
       "After being struck by a melee or ranged critical hit, Blessed Recovery heals you for 15% of the damage taken over 6 sec.  Additional critical hits taken during the effect increase the healing received."
      ],
      "cn": "神恩回复",
      "cnDesc": [
       "在遭受近战或远程爆击之后，为你在6 秒内恢复相当于该伤害总量5%的生命值。在此期间如果继续受到爆击，则治疗效果提高。",
       "在遭受近战或远程爆击之后，为你在6 秒内恢复相当于该伤害总量10%的生命值。在此期间如果继续受到爆击，则治疗效果提高。",
       "在遭受近战或远程爆击之后，为你在6 秒内恢复相当于该伤害总量15%的生命值。在此期间如果继续受到爆击，则治疗效果提高。"
      ]
     },
     {
      "name": "Inspiration",
      "row": 2,
      "col": 3,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces your target's physical damage taken by 3% for 15 sec after getting a critical effect from your Flash Heal, Heal, Greater Heal, Binding Heal, Penance, Prayer of Mending, Prayer of Healing, or Circle of Healing spell.",
       "Reduces your target's physical damage taken by 7% for 15 sec after getting a critical effect from your Flash Heal, Heal, Greater Heal, Binding Heal, Penance, Prayer of Mending, Prayer of Healing, or Circle of Healing spell.",
       "Reduces your target's physical damage taken by 10% for 15 sec after getting a critical effect from your Flash Heal, Heal, Greater Heal, Binding Heal, Penance, Prayer of Mending, Prayer of Healing, or Circle of Healing spell."
      ],
      "cn": "灵感",
      "cnDesc": [
       "在你的快速治疗、治疗术、强效治疗术、联结治疗、苦修、治疗祷言或治疗之环对目标造成爆击效果后，使目标受到的物理伤害降低3%，持续15 秒。",
       "在你的快速治疗、治疗术、强效治疗术、联结治疗、苦修、治疗祷言或治疗之环对目标造成爆击效果后，使目标受到的物理伤害降低7%，持续15 秒。",
       "在你的快速治疗、治疗术、强效治疗术、联结治疗、苦修、治疗祷言或治疗之环对目标造成爆击效果后，使目标受到的物理伤害降低10%，持续15 秒。"
      ]
     },
     {
      "name": "Holy Reach",
      "row": 3,
      "col": 0,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing, Holy Nova, Divine Hymn and Circle of Healing spells by 10%.",
       "Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing, Holy Nova, Divine Hymn and Circle of Healing spells by 20%."
      ],
      "cn": "神圣延伸",
      "cnDesc": [
       "使你的惩击和神圣之火的射程，治疗祷言、神圣新星、神圣赞美诗和治疗之环的作用半径提高10%。",
       "使你的惩击和神圣之火的射程，治疗祷言、神圣新星、神圣赞美诗和治疗之环的作用半径提高20%。"
      ]
     },
     {
      "name": "Improved Healing",
      "row": 3,
      "col": 1,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your Lesser Heal, Heal, Greater Heal, Divine Hymn and Penance spells by 5%.",
       "Reduces the mana cost of your Lesser Heal, Heal, Greater Heal, Divine Hymn and Penance spells by 10%.",
       "Reduces the mana cost of your Lesser Heal, Heal, Greater Heal, Divine Hymn and Penance spells by 15%."
      ],
      "cn": "强化治疗术",
      "cnDesc": [
       "使你的次级治疗术、治疗术、强效治疗术、神圣赞美诗和苦修的法力值消耗降低5%。",
       "使你的次级治疗术、治疗术、强效治疗术、神圣赞美诗和苦修的法力值消耗降低10%。",
       "使你的次级治疗术、治疗术、强效治疗术、神圣赞美诗和苦修的法力值消耗降低15%。"
      ]
     },
     {
      "name": "Searing Light",
      "row": 3,
      "col": 2,
      "maxRank": 2,
      "req": 15,
      "prereq": "Divine Fury",
      "prereqRank": 5,
      "desc": [
       "Increases the damage of your Smite, Holy Fire, Holy Nova and Penance spells by 5%.",
       "Increases the damage of your Smite, Holy Fire, Holy Nova and Penance spells by 10%."
      ],
      "cn": "灼热之光",
      "cnDesc": [
       "使你的惩击、神圣之火、神圣新星和苦修的伤害提高5%。",
       "使你的惩击、神圣之火、神圣新星和苦修的伤害提高10%。"
      ]
     },
     {
      "name": "Healing Prayers",
      "row": 4,
      "col": 0,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your Prayer of Healing and Prayer of Mending spell by 10%.",
       "Reduces the mana cost of your Prayer of Healing and Prayer of Mending spell by 20%."
      ],
      "cn": "治疗祈祷",
      "cnDesc": [
       "使你的治疗祷言和愈合祷言所消耗的法力值减少10%。",
       "使你的治疗祷言和愈合祷言所消耗的法力值减少20%。"
      ]
     },
     {
      "name": "Spirit of Redemption",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases total Spirit by 5% and upon death, the priest becomes the Spirit of Redemption for 15 sec. The Spirit of Redemption cannot move, attack, be attacked or targeted by any spells or effects. While in this form the priest can cast any healing spell free of cost. When the effect ends, the priest dies."
      ],
      "cn": "救赎之魂",
      "cnDesc": [
       "瞬发精神总值提高5%。牧师在死亡之后变身成为救赎之魂，持续15 秒。救赎之魂无法移动、攻击、被攻击或被任何法术效果影响。在这个状态下，牧师可以随意施放任何治疗法术。效果结束之后，牧师死亡。"
      ]
     },
     {
      "name": "Spiritual Guidance",
      "row": 4,
      "col": 2,
      "maxRank": 5,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases spell power by 5% of your total Spirit.",
       "Increases spell power by 10% of your total Spirit.",
       "Increases spell power by 15% of your total Spirit.",
       "Increases spell power by 20% of your total Spirit.",
       "Increases spell power by 25% of your total Spirit."
      ],
      "cn": "精神指引",
      "cnDesc": [
       "使你的法术强度提高，数值相当于你的精神总值的5%。",
       "使你的法术强度提高，数值相当于你的精神总值的10%。",
       "使你的法术强度提高，数值相当于你的精神总值的15%。",
       "使你的法术强度提高，数值相当于你的精神总值的20%。",
       "使你的法术强度提高，数值相当于你的精神总值的25%。"
      ]
     },
     {
      "name": "Surge of Light",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your spell criticals have a 25% chance to cause your next Smite or Flash Heal spell to be instant cast, cost no mana but be incapable of a critical hit.  This effect lasts 10 sec.",
       "Your spell criticals have a 50% chance to cause your next Smite or Flash Heal spell to be instant cast, cost no mana but be incapable of a critical hit.  This effect lasts 10 sec."
      ],
      "cn": "圣光涌动",
      "cnDesc": [
       "你的法术爆击有25%的几率令你的下一次惩击或快速治疗变为瞬发，不消耗法力值，但是无法造成爆击。这个效果可以持续10 秒。",
       "你的法术爆击有50%的几率令你的下一次惩击或快速治疗变为瞬发，不消耗法力值，但是无法造成爆击。这个效果可以持续10 秒。"
      ]
     },
     {
      "name": "Spiritual Healing",
      "row": 5,
      "col": 2,
      "maxRank": 5,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount healed by your healing spells by 2%.",
       "Increases the amount healed by your healing spells by 4%.",
       "Increases the amount healed by your healing spells by 6%.",
       "Increases the amount healed by your healing spells by 8%.",
       "Increases the amount healed by your healing spells by 10%."
      ],
      "cn": "精神治疗",
      "cnDesc": [
       "使你的治疗法术的治疗效果提高2%。",
       "使你的治疗法术的治疗效果提高4%。",
       "使你的治疗法术的治疗效果提高6%。",
       "使你的治疗法术的治疗效果提高8%。",
       "使你的治疗法术的治疗效果提高10%。"
      ]
     },
     {
      "name": "Holy Concentration",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your mana regeneration from spirit is increased by 16% for 8 sec after you critically heal with Flash Heal, Greater Heal, Binding Heal or Empowered Renew.",
       "Your mana regeneration from spirit is increased by 32% for 8 sec after you critically heal with Flash Heal, Greater Heal, Binding Heal or Empowered Renew.",
       "Your mana regeneration from spirit is increased by 50% for 8 sec after you critically heal with Flash Heal, Greater Heal, Binding Heal or Empowered Renew."
      ],
      "cn": "神圣专注",
      "cnDesc": [
       "当你的快速治疗、强效治疗术、恢复增效或联结治疗爆击之后，你的基于精神值的法力回复速度提高16%，持续8 秒。",
       "当你的快速治疗、强效治疗术、恢复增效或联结治疗爆击之后，你的基于精神值的法力回复速度提高32%，持续8 秒。",
       "当你的快速治疗、强效治疗术、恢复增效或联结治疗爆击之后，你的基于精神值的法力回复速度提高50%，持续8 秒。"
      ]
     },
     {
      "name": "Lightwell",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Spirit of Redemption",
      "prereqRank": 1,
      "desc": [
       "Creates a Holy Lightwell.  Friendly players can click the Lightwell to restore 267*3*1 health over 6 sec.  Attacks done to you equal to 30% of your total health will cancel the effect. Lightwell lasts for 3 min or 10 charges."
      ],
      "cn": "光明之泉",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>17% 的基础法力值</td><th>40码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>0.5秒施法时间</td><th>3 分钟冷却时间</th></tr></table>制造一个光明之泉。友方玩家可以点击光明之泉，在6 秒内恢复267*3*<!--sp55673:0-->1<!--sp55673-->点生命值。如果你受到攻击并损失了相当于你自身生命值总量30%的生命值，该效果就会中断。光明之泉会在3 分钟或者在被使用10次之后消失。"
      ]
     },
     {
      "name": "Blessed Resilience",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effectiveness of your healing spells by 1%, and critical hits made against you have a 20% chance to prevent you from being critically hit again for 6 sec.",
       "Increases the effectiveness of your healing spells by 2%, and critical hits made against you have a 40% chance to prevent you from being critically hit again for 6 sec.",
       "Increases the effectiveness of your healing spells by 3%, and critical hits made against you have a 60% chance to prevent you from being critically hit again for 6 sec."
      ],
      "cn": "神佑之韧",
      "cnDesc": [
       "使你的治疗法术的效果提高1%，你遭受爆击之后有20%的几率在接下来的6 秒内不会再受到爆击。",
       "使你的治疗法术的效果提高2%，你遭受爆击之后有40%的几率在接下来的6 秒内不会再受到爆击。",
       "使你的治疗法术的效果提高3%，你遭受爆击之后有60%的几率在接下来的6 秒内不会再受到爆击。"
      ]
     },
     {
      "name": "Body and Soul",
      "row": 7,
      "col": 0,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you cast Power Word: Shield, you increase the target's movement speed by 30% for 4 sec, and you have a 50% chance when you cast Abolish Disease on yourself to also cleanse 1 poison effect in addition to diseases.",
       "When you cast Power Word: Shield, you increase the target's movement speed by 60% for 4 sec, and you have a 100% chance when you cast Abolish Disease on yourself to also cleanse 1 poison effect in addition to diseases."
      ],
      "cn": "全心全意",
      "cnDesc": [
       "当你施放真言术：盾时，可以使目标的移动速度提高30%，持续4 秒。当你对自己施放驱除疾病时，有50%的几率除了驱散疾病效果之外还可以驱散1个中毒效果。",
       "当你施放真言术：盾时，可以使目标的移动速度提高60%，持续4 秒。当你对自己施放驱除疾病时，有100%的几率除了驱散疾病效果之外还可以驱散1个中毒效果。"
      ]
     },
     {
      "name": "Empowered Healing",
      "row": 7,
      "col": 1,
      "maxRank": 5,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Greater Heal spell gains an additional 8% and your Flash Heal and Binding Heal gain an additional 4% of your bonus healing effects.",
       "Your Greater Heal spell gains an additional 16% and your Flash Heal and Binding Heal gain an additional 8% of your bonus healing effects.",
       "Your Greater Heal spell gains an additional 24% and your Flash Heal and Binding Heal gain an additional 12% of your bonus healing effects.",
       "Your Greater Heal spell gains an additional 32% and your Flash Heal and Binding Heal gain an additional 16% of your bonus healing effects.",
       "Your Greater Heal spell gains an additional 40% and your Flash Heal and Binding Heal gain an additional 20% of your bonus healing effects."
      ],
      "cn": "治疗增效",
      "cnDesc": [
       "提高法术治疗的效果对你的强效治疗术有8%的额外加成，对你的快速治疗和联结治疗有4%的额外加成。",
       "提高法术治疗的效果对你的强效治疗术有16%的额外加成，对你的快速治疗和联结治疗有8%的额外加成。",
       "提高法术治疗的效果对你的强效治疗术有24%的额外加成，对你的快速治疗和联结治疗有12%的额外加成。",
       "提高法术治疗的效果对你的强效治疗术有32%的额外加成，对你的快速治疗和联结治疗有16%的额外加成。",
       "提高法术治疗的效果对你的强效治疗术有40%的额外加成，对你的快速治疗和联结治疗有20%的额外加成。"
      ]
     },
     {
      "name": "Serendipity",
      "row": 7,
      "col": 2,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you heal with Binding Heal or Flash Heal, the cast time of your next Greater Heal or Prayer of Healing spell is reduced by 4%. Stacks up to 3 times. Lasts 20 sec.",
       "When you heal with Binding Heal or Flash Heal, the cast time of your next Greater Heal or Prayer of Healing spell is reduced by 8%. Stacks up to 3 times. Lasts 20 sec.",
       "When you heal with Binding Heal or Flash Heal, the cast time of your next Greater Heal or Prayer of Healing spell is reduced by 12%. Stacks up to 3 times. Lasts 20 sec."
      ],
      "cn": "好运",
      "cnDesc": [
       "当你施放联结治疗或快速治疗时，你的下一次强效治疗术或治疗祷言的施法时间缩短4%。这个效果可叠加最多3次，持续20 秒。",
       "当你施放联结治疗或快速治疗时，你的下一次强效治疗术或治疗祷言的施法时间缩短8%。这个效果可叠加最多3次，持续20 秒。",
       "当你施放联结治疗或快速治疗时，你的下一次强效治疗术或治疗祷言的施法时间缩短12%。这个效果可叠加最多3次，持续20 秒。"
      ]
     },
     {
      "name": "Empowered Renew",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Renew spell gains an additional 5% of your bonus healing effects, and your Renew will instantly heal the target for 5% of the total periodic effect.",
       "Your Renew spell gains an additional 10% of your bonus healing effects, and your Renew will instantly heal the target for 10% of the total periodic effect.",
       "Your Renew spell gains an additional 15% of your bonus healing effects, and your Renew will instantly heal the target for 15% of the total periodic effect."
      ],
      "cn": "恢复增效",
      "cnDesc": [
       "你的恢复法术受到的治疗效果加成提高5%，并且在施放后会立即为目标回复生命值，数值相当于其持续治疗效果总量的5%。",
       "你的恢复法术受到的治疗效果加成提高10%，并且在施放后会立即为目标回复生命值，数值相当于其持续治疗效果总量的10%。",
       "你的恢复法术受到的治疗效果加成提高15%，并且在施放后会立即为目标回复生命值，数值相当于其持续治疗效果总量的15%。"
      ]
     },
     {
      "name": "Circle of Healing",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Heals up to 5 friendly party or raid members within 15 yards of the target for 343 to 379."
      ],
      "cn": "治疗之环",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>21% 的基础法力值</td><th>40码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>6 秒冷却时间</th></tr></table>治疗友方目标及其身边半径15码范围内的最多<!--sp55675:0-->5<!--sp55675-->名小队或团队成员，恢复343到379点生命值。"
      ]
     },
     {
      "name": "Test of Faith",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases healing by 4% on friendly targets at or below 50% health.",
       "Increases healing by 8% on friendly targets at or below 50% health.",
       "Increases healing by 12% on friendly targets at or below 50% health."
      ],
      "cn": "信仰试炼",
      "cnDesc": [
       "对生命值不高于50%的友方目标所施放的治疗法术，其治疗效果提高4%。",
       "对生命值不高于50%的友方目标所施放的治疗法术，其治疗效果提高8%。",
       "对生命值不高于50%的友方目标所施放的治疗法术，其治疗效果提高12%。"
      ]
     },
     {
      "name": "Divine Providence",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount healed by Circle of Healing, Binding Heal, Holy Nova, Prayer of Healing, Divine Hymn and Prayer of Mending by 2%, and reduces the cooldown of your Prayer of Mending by 6%.",
       "Increases the amount healed by Circle of Healing, Binding Heal, Holy Nova, Prayer of Healing, Divine Hymn and Prayer of Mending by 4%, and reduces the cooldown of your Prayer of Mending by 12%.",
       "Increases the amount healed by Circle of Healing, Binding Heal, Holy Nova, Prayer of Healing, Divine Hymn and Prayer of Mending by 6%, and reduces the cooldown of your Prayer of Mending by 18%.",
       "Increases the amount healed by Circle of Healing, Binding Heal, Holy Nova, Prayer of Healing, Divine Hymn and Prayer of Mending by 8%, and reduces the cooldown of your Prayer of Mending by 24%.",
       "Increases the amount healed by Circle of Healing, Binding Heal, Holy Nova, Prayer of Healing, Divine Hymn and Prayer of Mending by 10%, and reduces the cooldown of your Prayer of Mending by 30%."
      ],
      "cn": "神圣眷顾",
      "cnDesc": [
       "治疗之环、联结治疗、神圣新星、治疗祷言、神圣赞美诗和愈合祷言的治疗量提高2%。愈合祷言的冷却时间缩短6%。",
       "治疗之环、联结治疗、神圣新星、治疗祷言、神圣赞美诗和愈合祷言的治疗量提高4%。愈合祷言的冷却时间缩短12%。",
       "治疗之环、联结治疗、神圣新星、治疗祷言、神圣赞美诗和愈合祷言的治疗量提高6%。愈合祷言的冷却时间缩短18%。",
       "治疗之环、联结治疗、神圣新星、治疗祷言、神圣赞美诗和愈合祷言的治疗量提高8%。愈合祷言的冷却时间缩短24%。",
       "治疗之环、联结治疗、神圣新星、治疗祷言、神圣赞美诗和愈合祷言的治疗量提高10%。愈合祷言的冷却时间缩短30%。"
      ]
     },
     {
      "name": "Guardian Spirit",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Calls upon a guardian spirit to watch over the friendly target. The spirit increases the healing received by the target by 40%, and also prevents the target from dying by sacrificing itself. This sacrifice terminates the effect but heals the target of 50% of their maximum health. Lasts 10 sec."
      ],
      "cn": "守护之魂",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>6% 的基础法力值</td><th>40码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>召唤一个守护之魂庇护一个友方目标，使其受到的治疗量提高40%，并且可以通过牺牲自己来阻止该目标死亡。牺牲守护之魂会中断其庇护效果，但是可以为该目标恢复50%的生命值。守护之魂持续10秒。"
      ]
     }
    ],
    "sprite": "assets/sprites/priest_holy.webp"
   },
   {
    "name": "Shadow",
    "cn": "暗影",
    "bg": "assets/tree-bg/priest_shadow.jpg",
    "talents": [
     {
      "name": "Spirit Tap",
      "row": 0,
      "col": 0,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives you a 33% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor. For the duration, your mana will regenerate at a 83% rate while casting. Lasts 15 sec.",
       "Gives you a 66% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor. For the duration, your mana will regenerate at a 83% rate while casting. Lasts 15 sec.",
       "Gives you a 100% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor. For the duration, your mana will regenerate at a 83% rate while casting. Lasts 15 sec."
      ],
      "cn": "精神分流",
      "cnDesc": [
       "使你有33%的几率在杀死一个可以为你提供经验值或荣誉值的目标之后精神属性提高100%。在这段时间里，你的法力值可以在施法时仍保持83%的恢复速度。持续15 秒。",
       "使你有66%的几率在杀死一个可以为你提供经验值或荣誉值的目标之后精神属性提高100%。在这段时间里，你的法力值可以在施法时仍保持83%的恢复速度。持续15 秒。",
       "使你有100%的几率在杀死一个可以为你提供经验值或荣誉值的目标之后精神属性提高100%。在这段时间里，你的法力值可以在施法时仍保持83%的恢复速度。持续15 秒。"
      ]
     },
     {
      "name": "Improved Spirit Tap",
      "row": 0,
      "col": 1,
      "maxRank": 2,
      "req": 0,
      "prereq": "Spirit Tap",
      "prereqRank": 3,
      "desc": [
       "Your Mind Blast and Shadow Word: Death critical strikes have a 100% chance and your Mind Flay critical strikes have a 50% chance to increase your total Spirit by 5%. For the duration, your mana will regenerate at a 17% rate while casting. Lasts 8 sec.",
       "Your Mind Blast and Shadow Word: Death critical strikes have a 100% chance and your Mind Flay critical strikes have a 50% chance to increase your total Spirit by 10%. For the duration, your mana will regenerate at a 33% rate while casting. Lasts 8 sec."
      ],
      "cn": "强化精神分流",
      "cnDesc": [
       "你的心灵震爆和暗言术：灭打出爆击后有100%的几率，你的精神鞭笞打出爆击后有50%的几率使你的精神总值提高5%，持续8 秒。在这段时间里，你的法力值可以在施法时仍保持17%的回复速度。",
       "你的心灵震爆和暗言术：灭打出爆击后有100%的几率，你的精神鞭笞打出爆击后有50%的几率使你的精神总值提高10%，持续8 秒。在这段时间里，你的法力值可以在施法时仍保持33%的回复速度。"
      ]
     },
     {
      "name": "Darkness",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Shadow spell damage by 2%.",
       "Increases your Shadow spell damage by 4%.",
       "Increases your Shadow spell damage by 6%.",
       "Increases your Shadow spell damage by 8%.",
       "Increases your Shadow spell damage by 10%."
      ],
      "cn": "黑暗",
      "cnDesc": [
       "使你的暗影法术伤害提高2%。",
       "使你的暗影法术伤害提高4%。",
       "使你的暗影法术伤害提高6%。",
       "使你的暗影法术伤害提高8%。",
       "使你的暗影法术伤害提高10%。"
      ]
     },
     {
      "name": "Shadow Affinity",
      "row": 1,
      "col": 0,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the threat generated by your Shadow spells by 8%, and you receive 5% of your base mana when your Shadow Word: Pain or Vampiric Touch spells are dispelled.",
       "Reduces the threat generated by your Shadow spells by 16%, and you receive 10% of your base mana when your Shadow Word: Pain or Vampiric Touch spells are dispelled.",
       "Reduces the threat generated by your Shadow spells by 25%, and you receive 15% of your base mana when your Shadow Word: Pain or Vampiric Touch spells are dispelled."
      ],
      "cn": "暗影亲和",
      "cnDesc": [
       "使你的暗影法术造成的威胁值降低8%。当你的暗言术：痛或吸血鬼之触被驱散时，你获得5%的基础法力值。",
       "使你的暗影法术造成的威胁值降低16%。当你的暗言术：痛或吸血鬼之触被驱散时，你获得10%的基础法力值。",
       "使你的暗影法术造成的威胁值降低25%。当你的暗言术：痛或吸血鬼之触被驱散时，你获得15%的基础法力值。"
      ]
     },
     {
      "name": "Improved Shadow Word: Pain",
      "row": 1,
      "col": 1,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of your Shadow Word: Pain spell by 3%.",
       "Increases the damage of your Shadow Word: Pain spell by 6%."
      ],
      "cn": "强化暗言术：痛",
      "cnDesc": [
       "使你的暗言术：痛造成的伤害提高3%。",
       "使你的暗言术：痛造成的伤害提高6%。"
      ]
     },
     {
      "name": "Shadow Focus",
      "row": 1,
      "col": 2,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to hit with your Shadow spells by 1%, and reduces the mana cost of your Shadow spells by 2%.",
       "Increases your chance to hit with your Shadow spells by 2%, and reduces the mana cost of your Shadow spells by 4%.",
       "Increases your chance to hit with your Shadow spells by 3%, and reduces the mana cost of your Shadow spells by 6%."
      ],
      "cn": "暗影集中",
      "cnDesc": [
       "使你的暗影法术命中几率提高1%，法力值消耗降低2%。",
       "使你的暗影法术命中几率提高2%，法力值消耗降低4%。",
       "使你的暗影法术命中几率提高3%，法力值消耗降低6%。"
      ]
     },
     {
      "name": "Improved Psychic Scream",
      "row": 2,
      "col": 0,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Psychic Scream spell by 2 sec.",
       "Reduces the cooldown of your Psychic Scream spell by 4 sec."
      ],
      "cn": "强化心灵尖啸",
      "cnDesc": [
       "使你的心灵尖啸的冷却时间缩短2秒。",
       "使你的心灵尖啸的冷却时间缩短4秒。"
      ]
     },
     {
      "name": "Improved Mind Blast",
      "row": 2,
      "col": 1,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Mind Blast spell by 0.5 sec., and while in Shadowform your Mind Blast also has a 20% chance to reduce all healing done to the target by 20% for 10 sec.",
       "Reduces the cooldown of your Mind Blast spell by 1 sec., and while in Shadowform your Mind Blast also has a 40% chance to reduce all healing done to the target by 20% for 10 sec.",
       "Reduces the cooldown of your Mind Blast spell by 1.5 sec., and while in Shadowform your Mind Blast also has a 60% chance to reduce all healing done to the target by 20% for 10 sec.",
       "Reduces the cooldown of your Mind Blast spell by 2 sec., and while in Shadowform your Mind Blast also has a 80% chance to reduce all healing done to the target by 20% for 10 sec.",
       "Reduces the cooldown of your Mind Blast spell by 2.5 sec., and while in Shadowform your Mind Blast also has a 100% chance to reduce all healing done to the target by 20% for 10 sec."
      ],
      "cn": "强化心灵震爆",
      "cnDesc": [
       "使你的心灵震爆的冷却时间缩短0.5秒，在暗影形态下，你的心灵震爆还有20%的几率会使目标受到的治疗效果降低20%，持续10 秒。",
       "使你的心灵震爆的冷却时间缩短1秒，在暗影形态下，你的心灵震爆还有40%的几率会使目标受到的治疗效果降低20%，持续10 秒。",
       "使你的心灵震爆的冷却时间缩短1.5秒，在暗影形态下，你的心灵震爆还有60%的几率会使目标受到的治疗效果降低20%，持续10 秒。",
       "使你的心灵震爆的冷却时间缩短2秒，在暗影形态下，你的心灵震爆还有80%的几率会使目标受到的治疗效果降低20%，持续10 秒。",
       "使你的心灵震爆的冷却时间缩短2.5秒，在暗影形态下，你的心灵震爆还有100%的几率会使目标受到的治疗效果降低20%，持续10 秒。"
      ]
     },
     {
      "name": "Mind Flay",
      "row": 2,
      "col": 2,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Assault the target's mind with Shadow energy, causing 45 Shadow damage over 3 sec and slowing their movement speed by 50%."
      ],
      "cn": "精神鞭笞",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>9% 的基础法力值</td><th>30码范围</th></tr></table>需引导以暗影能量攻击目标的灵魂，在3 秒内对其造成总计45点暗影伤害，并使其移动速度降低50%。"
      ]
     },
     {
      "name": "Veiled Shadows",
      "row": 3,
      "col": 1,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Decreases the cooldown of your Fade ability by 3 sec, and reduces the cooldown of your Shadowfiend ability by 1 minute.",
       "Decreases the cooldown of your Fade ability by 6 sec, and reduces the cooldown of your Shadowfiend ability by 2 minutes."
      ],
      "cn": "遮蔽之影",
      "cnDesc": [
       "使你的渐隐术的冷却时间缩短3秒，暗影恶魔的冷却时间缩短1分钟。",
       "使你的渐隐术的冷却时间缩短6秒，暗影恶魔的冷却时间缩短2分钟。"
      ]
     },
     {
      "name": "Shadow Reach",
      "row": 3,
      "col": 2,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of your offensive Shadow spells by 10%.",
       "Increases the range of your offensive Shadow spells by 20%."
      ],
      "cn": "暗影延伸",
      "cnDesc": [
       "使你的暗影系伤害性法术的射程延长10%。",
       "使你的暗影系伤害性法术的射程延长20%。"
      ]
     },
     {
      "name": "Shadow Weaving",
      "row": 3,
      "col": 3,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Shadow damage spells have a 33% chance to increase the Shadow damage you deal by 2% for 15 sec.  Stacks up to 5 times.",
       "Your Shadow damage spells have a 66% chance to increase the Shadow damage you deal by 2% for 15 sec.  Stacks up to 5 times.",
       "Your Shadow damage spells have a 100% chance to increase the Shadow damage you deal by 2% for 15 sec.  Stacks up to 5 times."
      ],
      "cn": "暗影交织",
      "cnDesc": [
       "你的暗影系伤害性法术有33%的几率使你的暗影系伤害提高2%，持续15 秒。此效果最多可叠加5次。",
       "你的暗影系伤害性法术有66%的几率使你的暗影系伤害提高2%，持续15 秒。此效果最多可叠加5次。",
       "你的暗影系伤害性法术有100%的几率使你的暗影系伤害提高2%，持续15 秒。此效果最多可叠加5次。"
      ]
     },
     {
      "name": "Silence",
      "row": 4,
      "col": 0,
      "maxRank": 1,
      "req": 20,
      "prereq": "Improved Psychic Scream",
      "prereqRank": 2,
      "desc": [
       "Silences the target, preventing them from casting spells for 5 sec. Non-player victim spellcasting is also interrupted for 3 sec."
      ],
      "cn": "沉默",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>225 法力值</td><th>30码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>45 秒冷却时间</th></tr></table>使目标沉默，在5 秒内不能施法。还可中断非玩家类敌人的法术施放，持续3 秒。"
      ]
     },
     {
      "name": "Vampiric Embrace",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Fills you with the embrace of Shadow energy, causing you to be healed for 15% and other party members to be healed for 3% of any single-target Shadow spell damage you deal for 30 min."
      ],
      "cn": "吸血鬼的拥抱",
      "cnDesc": [
       "瞬发一股暗影能量充满你的全身，使你和其他的小队成员获得治疗效果，你获得的治疗量相当于你所造成的所有暗影法术伤害的15%，小队成员获得的治疗量相当于你所造成的暗影法术伤害的3%，持续30 分钟。"
      ]
     },
     {
      "name": "Improved Vampiric Embrace",
      "row": 4,
      "col": 2,
      "maxRank": 2,
      "req": 20,
      "prereq": "Vampiric Embrace",
      "prereqRank": 1,
      "desc": [
       "Increases the healing received from Vampiric Embrace by 33%.",
       "Increases the healing received from Vampiric Embrace by 67%."
      ],
      "cn": "强化吸血鬼的拥抱",
      "cnDesc": [
       "使吸血鬼的拥抱恢复生命值的百分比提高33%。",
       "使吸血鬼的拥抱恢复生命值的百分比提高67%。"
      ]
     },
     {
      "name": "Focused Mind",
      "row": 4,
      "col": 3,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your Mind Blast, Mind Control, Mind Flay and Mind Sear spells by 5%.",
       "Reduces the mana cost of your Mind Blast, Mind Control, Mind Flay and Mind Sear spells by 10%.",
       "Reduces the mana cost of your Mind Blast, Mind Control, Mind Flay and Mind Sear spells by 15%."
      ],
      "cn": "心灵集中",
      "cnDesc": [
       "使你的心灵震爆、精神控制、精神鞭笞和精神灼烧所消耗的法力值降低5%。",
       "使你的心灵震爆、精神控制、精神鞭笞和精神灼烧所消耗的法力值降低10%。",
       "使你的心灵震爆、精神控制、精神鞭笞和精神灼烧所消耗的法力值降低15%。"
      ]
     },
     {
      "name": "Mind Melt",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your Mind Blast, Mind Flay and Mind Sear spells by 2%, and increases the periodic critical strike chance of your Vampiric Touch, Devouring Plague and Shadow Word: Pain spells by 3%.",
       "Increases the critical strike chance of your Mind Blast, Mind Flay and Mind Sear spells by 4%, and increases the periodic critical strike chance of your Vampiric Touch, Devouring Plague and Shadow Word: Pain spells by 6%."
      ],
      "cn": "心灵熔化",
      "cnDesc": [
       "使你的心灵震爆、精神鞭笞和精神灼烧的爆击几率提高2%，吸血鬼之触、噬灵疫病和暗言术：痛的持续伤害爆击几率提高3%。",
       "使你的心灵震爆、精神鞭笞和精神灼烧的爆击几率提高4%，吸血鬼之触、噬灵疫病和暗言术：痛的持续伤害爆击几率提高6%。"
      ]
     },
     {
      "name": "Improved Devouring Plague",
      "row": 5,
      "col": 2,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the periodic damage done by your Devouring Plague by 5%, and when you cast Devouring Plague you instantly deal damage equal to 10% of its total periodic effect.",
       "Increases the periodic damage done by your Devouring Plague by 10%, and when you cast Devouring Plague you instantly deal damage equal to 20% of its total periodic effect.",
       "Increases the periodic damage done by your Devouring Plague by 15%, and when you cast Devouring Plague you instantly deal damage equal to 30% of its total periodic effect."
      ],
      "cn": "强化噬灵疫病",
      "cnDesc": [
       "使你的噬灵疫病造成的持续伤害提高5%，当你施放噬灵疫病时，可以立即对敌人造成伤害，数值相当于该法术伤害总量的10%。",
       "使你的噬灵疫病造成的持续伤害提高10%，当你施放噬灵疫病时，可以立即对敌人造成伤害，数值相当于该法术伤害总量的20%。",
       "使你的噬灵疫病造成的持续伤害提高15%，当你施放噬灵疫病时，可以立即对敌人造成伤害，数值相当于该法术伤害总量的30%。"
      ]
     },
     {
      "name": "Shadowform",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Vampiric Embrace",
      "prereqRank": 1,
      "desc": [
       "Assume a Shadowform, increasing your Shadow damage by 15%, reducing all damage done to you by 15% and threat generated by 30%. However, you may not cast Holy spells while in this form except Cure Disease and Abolish Disease. Grants the periodic damage from your Shadow Word: Pain, Devouring Plague, and Vampiric Touch spells the ability to critically hit for 100% increased damage and grants Devouring Plague and Vampiric Touch the ability to benefit from haste."
      ],
      "cn": "暗影形态",
      "cnDesc": [
       "13% 的基础法力值<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>1 秒冷却时间</th></tr></table>进入暗影形态，使你的暗影伤害提高15%，受到的所有伤害降低15%，你所造成的威胁值降低30%。但是在这种形态下，你不能施放神圣系的法术（除了祛病术和驱除疾病）。你的暗言术：痛、噬灵疫病和吸血鬼之触的持续性伤害可以产生爆击，造成100%的额外伤害，并且噬灵疫病和吸血鬼之触可以从急速等级中获益。"
      ]
     },
     {
      "name": "Shadow Power",
      "row": 6,
      "col": 2,
      "maxRank": 5,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike damage bonus of your Mind Blast, Mind Flay, and Shadow Word: Death spells by 20%.",
       "Increases the critical strike damage bonus of your Mind Blast, Mind Flay, and Shadow Word: Death spells by 40%.",
       "Increases the critical strike damage bonus of your Mind Blast, Mind Flay, and Shadow Word: Death spells by 60%.",
       "Increases the critical strike damage bonus of your Mind Blast, Mind Flay, and Shadow Word: Death spells by 80%.",
       "Increases the critical strike damage bonus of your Mind Blast, Mind Flay, and Shadow Word: Death spells by 100%."
      ],
      "cn": "暗影能量",
      "cnDesc": [
       "使你的心灵震爆、精神鞭笞和暗言术：灭的爆击伤害加成提高20%。",
       "使你的心灵震爆、精神鞭笞和暗言术：灭的爆击伤害加成提高40%。",
       "使你的心灵震爆、精神鞭笞和暗言术：灭的爆击伤害加成提高60%。",
       "使你的心灵震爆、精神鞭笞和暗言术：灭的爆击伤害加成提高80%。",
       "使你的心灵震爆、精神鞭笞和暗言术：灭的爆击伤害加成提高100%。"
      ]
     },
     {
      "name": "Improved Shadowform",
      "row": 7,
      "col": 0,
      "maxRank": 2,
      "req": 35,
      "prereq": "Shadowform",
      "prereqRank": 1,
      "desc": [
       "Your Fade ability now has a 50% chance to remove all movement impairing effects when used while in Shadowform, and reduces casting or channeling time lost when damaged by 35% when casting any Shadow spell while in Shadowform.",
       "Your Fade ability now has a 100% chance to remove all movement impairing effects when used while in Shadowform, and reduces casting or channeling time lost when damaged by 70% when casting any Shadow spell while in Shadowform."
      ],
      "cn": "强化暗影形态",
      "cnDesc": [
       "你在暗影形态下施放的渐隐术有50%的几率移除所有移动限制效果；在暗影形态下施放任何暗影系法术时，因受到伤害而损失的施法或引导时间都减少35%。",
       "你在暗影形态下施放的渐隐术有100%的几率移除所有移动限制效果；在暗影形态下施放任何暗影系法术时，因受到伤害而损失的施法或引导时间都减少70%。"
      ]
     },
     {
      "name": "Misery",
      "row": 7,
      "col": 2,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Shadow Word: Pain, Mind Flay and Vampiric Touch spells also increase the chance for harmful spells to hit by 1% lasting 24 sec, and increases the benefit from spell power gained by your Mind Blast, Mind Flay and Mind Sear spells by 5%.",
       "Your Shadow Word: Pain, Mind Flay and Vampiric Touch spells also increase the chance for harmful spells to hit by 2% lasting 24 sec, and increases the benefit from spell power gained by your Mind Blast, Mind Flay and Mind Sear spells by 10%.",
       "Your Shadow Word: Pain, Mind Flay and Vampiric Touch spells also increase the chance for harmful spells to hit by 3% lasting 24 sec, and increases the benefit from spell power gained by your Mind Blast, Mind Flay and Mind Sear spells by 15%."
      ],
      "cn": "悲惨",
      "cnDesc": [
       "你的暗言术：痛、精神鞭笞和吸血鬼之触使目标被伤害性法术命中的几率提高1%，持续24 秒。并使你的心灵震爆、精神鞭笞和精神灼烧受到的法术强度加成提高5%。",
       "你的暗言术：痛、精神鞭笞和吸血鬼之触使目标被伤害性法术命中的几率提高2%，持续24 秒。并使你的心灵震爆、精神鞭笞和精神灼烧受到的法术强度加成提高10%。",
       "你的暗言术：痛、精神鞭笞和吸血鬼之触使目标被伤害性法术命中的几率提高3%，持续24 秒。并使你的心灵震爆、精神鞭笞和精神灼烧受到的法术强度加成提高15%。"
      ]
     },
     {
      "name": "Psychic Horror",
      "row": 8,
      "col": 0,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You terrify the target, causing them to tremble in horror for 3 sec and drop their main hand and ranged weapons for 10 sec."
      ],
      "cn": "心灵惊骇",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>16% 的基础法力值</td><th>30码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>你恐吓目标，使其在惊骇中颤抖3 秒，并丢下主手和远程武器，效果持续10 秒。"
      ]
     },
     {
      "name": "Vampiric Touch",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": "Shadowform",
      "prereqRank": 1,
      "desc": [
       "Causes 450 Shadow damage over 15 sec to your target and causes up to 10 party or raid members to gain 1% of their maximum mana per 5 sec when you deal damage from Mind Blast. In addition, if the Vampiric Touch is dispelled it will cause 720 damage to the afflicted target."
      ],
      "cn": "吸血鬼之触",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>16% 的基础法力值</td><th>30码范围</th></tr></table>1.5秒施法时间在15 秒内对你的目标造成450点暗影伤害。当你的心灵震爆造成伤害时，每5秒为小队或团队中的最多10名成员恢复一次法力值，数值相当于他们法力值上限的1%。另外，如果吸血鬼之触被驱散，则对目标造成720点伤害。"
      ]
     },
     {
      "name": "Pain and Suffering",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Mind Flay has a 33% chance to refresh the duration of your Shadow Word: Pain on the target, and reduces the damage you take from your own Shadow Word: Death by 10%.",
       "Your Mind Flay has a 66% chance to refresh the duration of your Shadow Word: Pain on the target, and reduces the damage you take from your own Shadow Word: Death by 20%.",
       "Your Mind Flay has a 100% chance to refresh the duration of your Shadow Word: Pain on the target, and reduces the damage you take from your own Shadow Word: Death by 30%."
      ],
      "cn": "饱受折磨",
      "cnDesc": [
       "你的精神鞭笞有33%的几率刷新你对目标施放的暗言术：痛的持续时间；你因自己的暗言术：灭而受到的伤害降低10%。",
       "你的精神鞭笞有66%的几率刷新你对目标施放的暗言术：痛的持续时间；你因自己的暗言术：灭而受到的伤害降低20%。",
       "你的精神鞭笞有100%的几率刷新你对目标施放的暗言术：痛的持续时间；你因自己的暗言术：灭而受到的伤害降低30%。"
      ]
     },
     {
      "name": "Twisted Faith",
      "row": 9,
      "col": 2,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your spell power by 4% of your total Spirit, and your damage done by your Mind Flay and Mind Blast is increased by 2% if your target is afflicted by your Shadow Word: Pain.",
       "Increases your spell power by 8% of your total Spirit, and your damage done by your Mind Flay and Mind Blast is increased by 4% if your target is afflicted by your Shadow Word: Pain.",
       "Increases your spell power by 12% of your total Spirit, and your damage done by your Mind Flay and Mind Blast is increased by 6% if your target is afflicted by your Shadow Word: Pain.",
       "Increases your spell power by 16% of your total Spirit, and your damage done by your Mind Flay and Mind Blast is increased by 8% if your target is afflicted by your Shadow Word: Pain.",
       "Increases your spell power by 20% of your total Spirit, and your damage done by your Mind Flay and Mind Blast is increased by 10% if your target is afflicted by your Shadow Word: Pain."
      ],
      "cn": "扭曲信仰",
      "cnDesc": [
       "你的法术强度提高，数值相当于你的精神总值的4%。另外，如果目标受到了你的暗言术：痛的影响，则你的精神鞭笞和心灵震爆对该目标造成的伤害提高2%。",
       "你的法术强度提高，数值相当于你的精神总值的8%。另外，如果目标受到了你的暗言术：痛的影响，则你的精神鞭笞和心灵震爆对该目标造成的伤害提高4%。",
       "你的法术强度提高，数值相当于你的精神总值的12%。另外，如果目标受到了你的暗言术：痛的影响，则你的精神鞭笞和心灵震爆对该目标造成的伤害提高6%。",
       "你的法术强度提高，数值相当于你的精神总值的16%。另外，如果目标受到了你的暗言术：痛的影响，则你的精神鞭笞和心灵震爆对该目标造成的伤害提高8%。",
       "你的法术强度提高，数值相当于你的精神总值的20%。另外，如果目标受到了你的暗言术：痛的影响，则你的精神鞭笞和心灵震爆对该目标造成的伤害提高10%。"
      ]
     },
     {
      "name": "Dispersion",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": "Vampiric Touch",
      "prereqRank": 1,
      "desc": [
       "You disperse into pure Shadow energy, reducing all damage taken by 90%. You are unable to attack or cast spells, but you regenerate 6% mana every 1 sec for 6 sec. Dispersion can be cast while stunned, feared or silenced and clears all snare and movement impairing effects when cast, and makes you immune to them while dispersed."
      ],
      "cn": "消散",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>你进入纯粹的暗影能量形态，受到的所有伤害降低90%。你不能攻击或施法，但是可以每1秒回复6%的法力值，持续6 秒。可以在昏迷、恐惧或沉默状态下施放消散，施放之后解除所有诱捕和移动限制效果，并在消散持续期间免疫这些效果。"
      ]
     }
    ],
    "sprite": "assets/sprites/priest_shadow.webp"
   }
  ],
  "icon": "assets/class-icons/priest.jpg"
 },
 {
  "id": "rogue",
  "name": "Rogue",
  "cn": "潜行者",
  "trees": [
   {
    "name": "Assassination",
    "cn": "刺杀",
    "bg": "assets/tree-bg/rogue_assassination.jpg",
    "talents": [
     {
      "name": "Improved Eviscerate",
      "row": 0,
      "col": 0,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Eviscerate ability by 7%.",
       "Increases the damage done by your Eviscerate ability by 14%.",
       "Increases the damage done by your Eviscerate ability by 20%."
      ],
      "cn": "强化刺骨",
      "cnDesc": [
       "使你的刺骨技能的伤害提高7%。",
       "使你的刺骨技能的伤害提高14%。",
       "使你的刺骨技能的伤害提高20%。"
      ]
     },
     {
      "name": "Remorseless Attacks",
      "row": 0,
      "col": 1,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "After killing an opponent that yields experience or honor, gives you a 20% increased critical strike chance on your next Sinister Strike, Hemorrhage, Backstab, Mutilate, Ambush, or Ghostly Strike.  Lasts 20 sec.",
       "After killing an opponent that yields experience or honor, gives you a 40% increased critical strike chance on your next Sinister Strike, Hemorrhage, Backstab, Mutilate, Ambush, or Ghostly Strike.  Lasts 20 sec."
      ],
      "cn": "冷酷攻击",
      "cnDesc": [
       "在你杀死一个可为你提供经验值或荣誉值的敌人后，你的下一次影袭、出血、背刺、毁伤、伏击或鬼魅攻击有20%的额外几率造成爆击，效果持续20 秒。",
       "在你杀死一个可为你提供经验值或荣誉值的敌人后，你的下一次影袭、出血、背刺、毁伤、伏击或鬼魅攻击有40%的额外几率造成爆击，效果持续20 秒。"
      ]
     },
     {
      "name": "Malice",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your critical strike chance by 1%.",
       "Increases your critical strike chance by 2%.",
       "Increases your critical strike chance by 3%.",
       "Increases your critical strike chance by 4%.",
       "Increases your critical strike chance by 5%."
      ],
      "cn": "恶意",
      "cnDesc": [
       "使你的爆击几率提高1%。",
       "使你的爆击几率提高2%。",
       "使你的爆击几率提高3%。",
       "使你的爆击几率提高4%。",
       "使你的爆击几率提高5%。"
      ]
     },
     {
      "name": "Ruthlessness",
      "row": 1,
      "col": 0,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your melee finishing moves a 20% chance to add a combo point to your target.",
       "Gives your melee finishing moves a 40% chance to add a combo point to your target.",
       "Gives your melee finishing moves a 60% chance to add a combo point to your target."
      ],
      "cn": "无情",
      "cnDesc": [
       "使你的近战终结技有20%的几率为目标增加一个连击点数。",
       "使你的近战终结技有40%的几率为目标增加一个连击点数。",
       "使你的近战终结技有60%的几率为目标增加一个连击点数。"
      ]
     },
     {
      "name": "Blood Spatter",
      "row": 1,
      "col": 1,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage caused by your Garrote and Rupture abilities by 15%.",
       "Increases the damage caused by your Garrote and Rupture abilities by 30%."
      ],
      "cn": "鲜血飞溅",
      "cnDesc": [
       "使你的锁喉和割裂技能所造成的伤害提高15%。",
       "使你的锁喉和割裂技能所造成的伤害提高30%。"
      ]
     },
     {
      "name": "Puncturing Wounds",
      "row": 1,
      "col": 3,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your Backstab ability by 10%, and the critical strike chance of your Mutilate ability by 5%.",
       "Increases the critical strike chance of your Backstab ability by 20%, and the critical strike chance of your Mutilate ability by 10%.",
       "Increases the critical strike chance of your Backstab ability by 30%, and the critical strike chance of your Mutilate ability by 15%."
      ],
      "cn": "穿刺之伤",
      "cnDesc": [
       "使你的背刺技能的爆击几率提高10%，毁伤技能的爆击几率提高5%。",
       "使你的背刺技能的爆击几率提高20%，毁伤技能的爆击几率提高10%。",
       "使你的背刺技能的爆击几率提高30%，毁伤技能的爆击几率提高15%。"
      ]
     },
     {
      "name": "Vigor",
      "row": 2,
      "col": 0,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your maximum Energy by 10."
      ],
      "cn": "精力",
      "cnDesc": [
       "使你的能量值上限提高10点。"
      ]
     },
     {
      "name": "Improved Expose Armor",
      "row": 2,
      "col": 1,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the energy cost of your Expose Armor ability by 5.",
       "Reduces the energy cost of your Expose Armor ability by 10."
      ],
      "cn": "强化破甲",
      "cnDesc": [
       "使你的破甲技能消耗的能量值减少5点。",
       "使你的破甲技能消耗的能量值减少10点。"
      ]
     },
     {
      "name": "Lethality",
      "row": 2,
      "col": 2,
      "maxRank": 5,
      "req": 10,
      "prereq": "Malice",
      "prereqRank": 5,
      "desc": [
       "Increases the critical strike damage bonus of all combo point-generating abilities that do not require stealth by 6%.",
       "Increases the critical strike damage bonus of all combo point-generating abilities that do not require stealth by 12%.",
       "Increases the critical strike damage bonus of all combo point-generating abilities that do not require stealth by 18%.",
       "Increases the critical strike damage bonus of all combo point-generating abilities that do not require stealth by 24%.",
       "Increases the critical strike damage bonus of all combo point-generating abilities that do not require stealth by 30%."
      ],
      "cn": "致命偷袭",
      "cnDesc": [
       "使你的所有不需要潜行且可以产生连击点数的战斗技能的爆击伤害加成提高6%。",
       "使你的所有不需要潜行且可以产生连击点数的技能的爆击伤害加成提高12%。",
       "使你的所有不需要潜行且可以产生连击点数的战斗技能的爆击伤害加成提高18%。",
       "使你的所有不需要潜行且可以产生连击点数的战斗技能的爆击伤害加成提高24%。",
       "使你的所有不需要潜行且可以产生连击点数的战斗技能的爆击伤害加成提高30%。"
      ]
     },
     {
      "name": "Vile Poisons",
      "row": 3,
      "col": 1,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage dealt by your poisons and Envenom ability by 7% and gives your damage over time poisons an additional 10% chance to resist dispel effects.",
       "Increases the damage dealt by your poisons and Envenom ability by 14% and gives your damage over time poisons an additional 20% chance to resist dispel effects.",
       "Increases the damage dealt by your poisons and Envenom ability by 20% and gives your damage over time poisons an additional 30% chance to resist dispel effects."
      ],
      "cn": "剧毒",
      "cnDesc": [
       "使你的毒药和毒伤技能所造成的伤害提高7%，并使你的造成持续伤害的毒药抵抗驱散效果的几率提高10%。",
       "使你的毒药和毒伤技能所造成的伤害提高14%，并使你的造成持续伤害的毒药抵抗驱散效果的几率提高20%。",
       "使你的毒药和毒伤技能所造成的伤害提高20%，并使你的造成持续伤害的毒药抵抗驱散效果的几率提高30%。"
      ]
     },
     {
      "name": "Improved Poisons",
      "row": 3,
      "col": 2,
      "maxRank": 5,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the chance to apply Deadly Poison to your target by 4% and the frequency of applying Instant Poison to your target by 10%.",
       "Increases the chance to apply Deadly Poison to your target by 8% and the frequency of applying Instant Poison to your target by 20%.",
       "Increases the chance to apply Deadly Poison to your target by 12% and the frequency of applying Instant Poison to your target by 30%.",
       "Increases the chance to apply Deadly Poison to your target by 16% and the frequency of applying Instant Poison to your target by 40%.",
       "Increases the chance to apply Deadly Poison to your target by 20% and the frequency of applying Instant Poison to your target by 50%."
      ],
      "cn": "强化药膏",
      "cnDesc": [
       "使你对目标成功施放致命药膏的几率提高4%，对目标施放速效药膏的频率提高10%。",
       "使你对目标成功施放致命药膏的几率提高8%，对目标施放速效药膏的频率提高20%。",
       "使你对目标成功施放致命药膏的几率提高12%，对目标施放速效药膏的频率提高30%。",
       "使你对目标成功施放致命药膏的几率提高16%，对目标施放速效药膏的频率提高40%。",
       "使你对目标成功施放致命药膏的几率提高20%，对目标施放速效药膏的频率提高50%。"
      ]
     },
     {
      "name": "Fleet Footed",
      "row": 4,
      "col": 0,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the duration of all movement impairing effects by 15% and increases your movement speed by 8%.  This does not stack with other movement speed increasing effects.",
       "Reduces the duration of all movement impairing effects by 30% and increases your movement speed by 15%.  This does not stack with other movement speed increasing effects."
      ],
      "cn": "健步如飞",
      "cnDesc": [
       "使你受到移动限制效果影响的持续时间缩短15%，并使你的移动速度提高8%。不与其它提高移动速度的效果叠加。",
       "使你受到移动限制效果影响的持续时间缩短30%，并使你的移动速度提高15%。不与其它提高移动速度的效果叠加。"
      ]
     },
     {
      "name": "Cold Blood",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When activated, increases the critical strike chance of your next offensive ability by 100%."
      ],
      "cn": "冷血",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>激活之后，你的下一次攻击技能的爆击几率提高100%。"
      ]
     },
     {
      "name": "Improved Kidney Shot",
      "row": 4,
      "col": 2,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While affected by your Kidney Shot ability, the target receives an additional 3% damage from all sources.",
       "While affected by your Kidney Shot ability, the target receives an additional 6% damage from all sources.",
       "While affected by your Kidney Shot ability, the target receives an additional 9% damage from all sources."
      ],
      "cn": "强化肾击",
      "cnDesc": [
       "目标受到你的肾击技能影响之后，任何攻击者对其所造成的伤害量都提高3%。",
       "目标受到你的肾击技能影响之后，任何攻击者对其所造成的伤害量都提高6%。",
       "目标受到你的肾击技能影响之后，任何攻击者对其所造成的伤害量都提高9%。"
      ]
     },
     {
      "name": "Quick Recovery",
      "row": 4,
      "col": 3,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "All healing effects on you are increased by 10%.  In addition, your finishing moves refund 40% of their Energy cost when they fail to hit.",
       "All healing effects on you are increased by 20%.  In addition, your finishing moves refund 80% of their Energy cost when they fail to hit."
      ],
      "cn": "快速恢复",
      "cnDesc": [
       "对你施加的所有治疗效果提高10%。另外，你的终结技如果未能命中目标，则为你返还该技能消耗能量值的40%。",
       "对你施加的所有治疗效果提高20%。另外，你的终结技如果未能命中目标，则为你返还该技能消耗能量值的80%。"
      ]
     },
     {
      "name": "Seal Fate",
      "row": 5,
      "col": 1,
      "maxRank": 5,
      "req": 25,
      "prereq": "Cold Blood",
      "prereqRank": 1,
      "desc": [
       "Your critical strikes from abilities that add combo points have a 20% chance to add an additional combo point.",
       "Your critical strikes from abilities that add combo points have a 40% chance to add an additional combo point.",
       "Your critical strikes from abilities that add combo points have a 60% chance to add an additional combo point.",
       "Your critical strikes from abilities that add combo points have a 80% chance to add an additional combo point.",
       "Your critical strikes from abilities that add combo points have a 100% chance to add an additional combo point."
      ],
      "cn": "封印命运",
      "cnDesc": [
       "如果你的某个可以增加连击点数的技能造成了爆击，那么它就有20%的几率增加一个额外的连击点数。",
       "如果你的某个可以增加连击点数的技能造成了爆击，那么它就有40%的几率增加一个额外的连击点数。",
       "如果你的某个可以增加连击点数的技能造成了爆击，那么它就有60%的几率增加一个额外的连击点数。",
       "如果你的某个可以增加连击点数的技能造成了爆击，那么它就有80%的几率增加一个额外的连击点数。",
       "如果你的某个可以增加连击点数的技能造成了爆击，那么它就有100%的几率增加一个额外的连击点数。"
      ]
     },
     {
      "name": "Murder",
      "row": 5,
      "col": 2,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases all damage caused by 2%.",
       "Increases all damage caused by 4%."
      ],
      "cn": "谋划",
      "cnDesc": [
       "造成的所有伤害提高2%。",
       "造成的所有伤害提高4%。"
      ]
     },
     {
      "name": "Deadly Brew",
      "row": 6,
      "col": 0,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you apply Instant, Wound or Mind-Numbing poison to a target, you have a 50% chance to apply Crippling poison.",
       "When you apply Instant, Wound or Mind-Numbing poison to a target, you have a 100% chance to apply Crippling poison."
      ],
      "cn": "致命酝酿",
      "cnDesc": [
       "当你向目标施放速效药膏、致伤药膏或麻痹药膏时，有50%的几率附加一个减速药膏效果。",
       "当你向目标施放速效药膏、致伤药膏或麻痹药膏时，有100%的几率附加一个减速药膏效果。"
      ]
     },
     {
      "name": "Overkill",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While stealthed, and for 20 seconds after breaking stealth, you regenerate 30% additional energy."
      ],
      "cn": "灭绝",
      "cnDesc": [
       "瞬发在潜行状态下及打破潜行状态后的20秒内，你额外回复30%的能量值。"
      ]
     },
     {
      "name": "Deadened Nerves",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces all damage taken by 2%.",
       "Reduces all damage taken by 4%.",
       "Reduces all damage taken by 6%."
      ],
      "cn": "勇气衰竭",
      "cnDesc": [
       "受到的所有伤害降低2%。",
       "受到的所有伤害降低4%。",
       "受到的所有伤害降低6%。"
      ]
     },
     {
      "name": "Focused Attacks",
      "row": 7,
      "col": 0,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your melee critical strikes have a 33% chance to give you 2 energy.",
       "Your melee critical strikes have a 66% chance to give you 2 energy.",
       "Your melee critical strikes have a 100% chance to give you 2 energy."
      ],
      "cn": "专注攻击",
      "cnDesc": [
       "你的近战爆击有33%的几率为你恢复2点能量值。",
       "你的近战爆击有66%的几率为你恢复2点能量值。",
       "你的近战爆击有100%的几率为你恢复2点能量值。"
      ]
     },
     {
      "name": "Find Weakness",
      "row": 7,
      "col": 2,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Offensive ability damage increased by 2%.",
       "Offensive ability damage increased by 4%.",
       "Offensive ability damage increased by 6%."
      ],
      "cn": "寻找弱点",
      "cnDesc": [
       "攻击技能的伤害提高2%。",
       "攻击技能的伤害提高4%。",
       "攻击技能的伤害提高6%。"
      ]
     },
     {
      "name": "Master Poisoner",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical hit chance of all attacks made against any target you have poisoned by 1%, reduces the duration of all Poison effects applied to you by 17%, and gives Envenom a 33% chance not to consume Deadly Poison.",
       "Increases the critical hit chance of all attacks made against any target you have poisoned by 2%, reduces the duration of all Poison effects applied to you by 34%, and gives Envenom a 66% chance not to consume Deadly Poison.",
       "Increases the critical hit chance of all attacks made against any target you have poisoned by 3%, reduces the duration of all Poison effects applied to you by 50%, and gives Envenom a 100% chance not to consume Deadly Poison."
      ],
      "cn": "奇毒",
      "cnDesc": [
       "如果目标身上带有你施加的毒药效果，则所有攻击对其爆击几率提高1%。你受到中毒效果影响的持续时间缩短17%。当你使用毒伤技能时，有33%的几率不会消耗致命药膏。",
       "如果目标身上带有你施加的毒药效果，则所有攻击对其爆击几率提高2%。你受到中毒效果影响的持续时间缩短34%。当你使用毒伤技能时，有66%的几率不会消耗致命药膏。",
       "如果目标身上带有你施加的毒药效果，则所有攻击对其爆击几率提高3%。你受到中毒效果影响的持续时间缩短50%。当你使用毒伤技能时，有100%的几率不会消耗致命药膏。"
      ]
     },
     {
      "name": "Mutilate",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": "Overkill",
      "prereqRank": 1,
      "desc": [
       "Instantly attacks with both weapons for 100% weapon damage plus an additional 44 with each weapon.  Damage is increased by 20% against Poisoned targets.  Awards 2 combo points."
      ],
      "cn": "毁伤",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>60 能量</td><th>近战范围</th></tr></table>瞬发同时用两把武器攻击目标，造成100%的武器伤害，另外每把武器所造成的伤害都提高44点。如果目标处于中毒状态，则对其造成的伤害提高20%。奖励2个连击点数。"
      ]
     },
     {
      "name": "Turn the Tables",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Whenever anyone in your party or raid blocks, dodges, or parries an attack your chance to critically hit with all combo moves is increased by 2% for 8 sec.",
       "Whenever anyone in your party or raid blocks, dodges, or parries an attack your chance to critically hit with all combo moves is increased by 4% for 8 sec.",
       "Whenever anyone in your party or raid blocks, dodges, or parries an attack your chance to critically hit with all combo moves is increased by 6% for 8 sec."
      ],
      "cn": "扭转局势",
      "cnDesc": [
       "每当你的小队或团队中有人格挡、躲闪或招架攻击，你的所有连击技能的爆击几率就提高2%，持续8 秒。",
       "每当你的小队或团队中有人格挡、躲闪或招架攻击，你的所有连击技能的爆击几率就提高4%，持续8 秒。",
       "每当你的小队或团队中有人格挡、躲闪或招架攻击，你的所有连击技能的爆击几率就提高6%，持续8 秒。"
      ]
     },
     {
      "name": "Cut to the Chase",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Eviscerate and Envenom abilities have a 20% chance to refresh your Slice and Dice duration to its 5 combo point maximum.",
       "Your Eviscerate and Envenom abilities have a 40% chance to refresh your Slice and Dice duration to its 5 combo point maximum.",
       "Your Eviscerate and Envenom abilities have a 60% chance to refresh your Slice and Dice duration to its 5 combo point maximum.",
       "Your Eviscerate and Envenom abilities have a 80% chance to refresh your Slice and Dice duration to its 5 combo point maximum.",
       "Your Eviscerate and Envenom abilities have a 100% chance to refresh your Slice and Dice duration to its 5 combo point maximum."
      ],
      "cn": "穷追猛砍",
      "cnDesc": [
       "你的刺骨和毒伤技能有20%的几率使你的切割技能的持续时间刷新到相当于消耗5个连击点数的状态。",
       "你的刺骨和毒伤技能有40%的几率使你的切割技能的持续时间刷新到相当于消耗5个连击点数的状态。",
       "你的刺骨和毒伤技能有60%的几率使你的切割技能的持续时间刷新到相当于消耗5个连击点数的状态。",
       "你的刺骨和毒伤技能有80%的几率使你的切割技能的持续时间刷新到相当于消耗5个连击点数的状态。",
       "你的刺骨和毒伤技能有100%的几率使你的切割技能的持续时间刷新到相当于消耗5个连击点数的状态。"
      ]
     },
     {
      "name": "Hunger For Blood",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Enrages you, increasing all damage caused by 5%. Requires a bleed effect to be active on the target. Lasts 1 min."
      ],
      "cn": "血之饥渴",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>15 能量</td><th>30码范围</th></tr></table>瞬发使你激怒，造成的所有伤害提高5%。只能对受到流血效果影响的目标使用，持续1 分钟。"
      ]
     }
    ],
    "sprite": "assets/sprites/rogue_assassination.webp"
   },
   {
    "name": "Combat",
    "cn": "战斗",
    "bg": "assets/tree-bg/rogue_combat.jpg",
    "talents": [
     {
      "name": "Improved Gouge",
      "row": 0,
      "col": 0,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effect duration of your Gouge ability by 0.5 sec.",
       "Increases the effect duration of your Gouge ability by 1 sec.",
       "Increases the effect duration of your Gouge ability by 1.5 sec."
      ],
      "cn": "强化凿击",
      "cnDesc": [
       "使你的凿击技能的效果持续时间延长0.5秒。",
       "使你的凿击技能的效果持续时间延长1秒。",
       "使你的凿击技能的效果持续时间延长1.5秒。"
      ]
     },
     {
      "name": "Improved Sinister Strike",
      "row": 0,
      "col": 1,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the Energy cost of your Sinister Strike ability by 3.",
       "Reduces the Energy cost of your Sinister Strike ability by 5."
      ],
      "cn": "强化影袭",
      "cnDesc": [
       "使你的影袭技能所消耗的能量值减少3点。",
       "使你的影袭技能所消耗的能量值减少5点。"
      ]
     },
     {
      "name": "Dual Wield Specialization",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your offhand weapon by 10%.",
       "Increases the damage done by your offhand weapon by 20%.",
       "Increases the damage done by your offhand weapon by 30%.",
       "Increases the damage done by your offhand weapon by 40%.",
       "Increases the damage done by your offhand weapon by 50%."
      ],
      "cn": "双武器专精",
      "cnDesc": [
       "使你的副手武器伤害提高10%。",
       "使你的副手武器伤害提高20%。",
       "使你的副手武器伤害提高30%。",
       "使你的副手武器伤害提高40%。",
       "使你的副手武器伤害提高50%。"
      ]
     },
     {
      "name": "Improved Slice and Dice",
      "row": 1,
      "col": 0,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the duration of your Slice and Dice ability by 25%.",
       "Increases the duration of your Slice and Dice ability by 50%."
      ],
      "cn": "强化切割",
      "cnDesc": [
       "使你的切割技能的效果持续时间延长25%。",
       "使你的切割技能的效果持续时间延长50%。"
      ]
     },
     {
      "name": "Deflection",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Parry chance by 2%.",
       "Increases your Parry chance by 4%.",
       "Increases your Parry chance by 6%."
      ],
      "cn": "偏斜",
      "cnDesc": [
       "使你的招架几率提高2%。",
       "使你的招架几率提高4%。",
       "使你的招架几率提高6%。"
      ]
     },
     {
      "name": "Precision",
      "row": 1,
      "col": 3,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to hit with weapon and poison attacks by 1%.",
       "Increases your chance to hit with weapon and poison attacks by 2%.",
       "Increases your chance to hit with weapon and poison attacks by 3%.",
       "Increases your chance to hit with weapon and poison attacks by 4%.",
       "Increases your chance to hit with weapon and poison attacks by 5%."
      ],
      "cn": "精确",
      "cnDesc": [
       "使你的武器和毒药的命中几率提高1%。",
       "使你的武器和毒药的命中几率提高2%。",
       "使你的武器和毒药的命中几率提高3%。",
       "使你的武器和毒药的命中几率提高4%。",
       "使你的武器和毒药的命中几率提高5%。"
      ]
     },
     {
      "name": "Endurance",
      "row": 2,
      "col": 0,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Sprint and Evasion abilities by 30 sec and increases your total Stamina by 2%.",
       "Reduces the cooldown of your Sprint and Evasion abilities by 60 sec and increases your total Stamina by 4%."
      ],
      "cn": "耐久",
      "cnDesc": [
       "使你的疾跑和闪避技能的冷却时间缩短30秒，耐力总值提高2%。",
       "使你的疾跑和闪避技能的冷却时间缩短60秒，耐力总值提高4%。"
      ]
     },
     {
      "name": "Riposte",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": "Deflection",
      "prereqRank": 3,
      "desc": [
       "A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and slows their melee attack speed by 20% for 30 sec. Awards 1 combo point."
      ],
      "cn": "还击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>10 能量</td><th>近战范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>6 秒冷却时间</th></tr></table>在招架了敌人的攻击之后可以使用的技能，对目标造成150%的武器伤害，并使其近战攻击速度降低20%，持续30 秒。奖励1个连击点数。"
      ]
     },
     {
      "name": "Close Quarters Combat",
      "row": 2,
      "col": 2,
      "maxRank": 5,
      "req": 10,
      "prereq": "Dual Wield Specialization",
      "prereqRank": 5,
      "desc": [
       "Requires Daggers, Fist Weapons Increases your chance to get a critical strike with Daggers and Fist Weapons by 1%.",
       "Requires Daggers, Fist Weapons Increases your chance to get a critical strike with Daggers and Fist Weapons by 2%.",
       "Requires Daggers, Fist Weapons Increases your chance to get a critical strike with Daggers and Fist Weapons by 3%.",
       "Requires Daggers, Fist Weapons Increases your chance to get a critical strike with Daggers and Fist Weapons by 4%.",
       "Requires Daggers, Fist Weapons Increases your chance to get a critical strike with Daggers and Fist Weapons by 5%."
      ],
      "cn": "近身格斗",
      "cnDesc": [
       "使你的匕首和拳套的爆击几率提高1%。",
       "使你的匕首和拳套的爆击几率提高2%。",
       "使你的匕首和拳套的爆击几率提高3%。",
       "使你的匕首和拳套的爆击几率提高4%。",
       "使你的匕首和拳套的爆击几率提高5%。"
      ]
     },
     {
      "name": "Improved Kick",
      "row": 3,
      "col": 0,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your Kick ability a 50% chance to silence the target for 2 sec.",
       "Gives your Kick ability a 100% chance to silence the target for 2 sec."
      ],
      "cn": "强化脚踢",
      "cnDesc": [
       "使你的脚踢技能有50%的几率令目标沉默2 秒。",
       "使你的脚踢技能有100%的几率令目标沉默2 秒。"
      ]
     },
     {
      "name": "Improved Sprint",
      "row": 3,
      "col": 1,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives a 50% chance to remove all Movement Impairing effects when you activate your Sprint ability.",
       "Gives a 100% chance to remove all Movement Impairing effects when you activate your Sprint ability."
      ],
      "cn": "强化疾跑",
      "cnDesc": [
       "使你在启动疾跑技能时有50%的几率移除所有移动限制效果。",
       "使你在启动疾跑技能时有100%的几率移除所有移动限制效果。"
      ]
     },
     {
      "name": "Lightning Reflexes",
      "row": 3,
      "col": 2,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Dodge chance by 2% and gives you 4% melee haste.",
       "Increases your Dodge chance by 4% and gives you 7% melee haste.",
       "Increases your Dodge chance by 6% and gives you 10% melee haste."
      ],
      "cn": "闪电反射",
      "cnDesc": [
       "使你的躲闪几率提高2%，近战急速提高4%。",
       "使你的躲闪几率提高4%，近战急速提高7%。",
       "使你的躲闪几率提高6%，近战急速提高10%。"
      ]
     },
     {
      "name": "Aggression",
      "row": 3,
      "col": 3,
      "maxRank": 5,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 3%.",
       "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 6%.",
       "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 9%.",
       "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 12%.",
       "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 15%."
      ],
      "cn": "侵犯",
      "cnDesc": [
       "使你的影袭、背刺和刺骨技能的伤害提高3%。",
       "使你的影袭、背刺和刺骨技能的伤害提高6%。",
       "使你的影袭、背刺和刺骨技能的伤害提高9%。",
       "使你的影袭、背刺和刺骨技能的伤害提高12%。",
       "使你的影袭、背刺和刺骨技能的伤害提高15%。"
      ]
     },
     {
      "name": "Mace Specialization",
      "row": 4,
      "col": 0,
      "maxRank": 5,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your attacks with maces ignore up to 3% of your opponent's armor.",
       "Your attacks with maces ignore up to 6% of your opponent's armor.",
       "Your attacks with maces ignore up to 9% of your opponent's armor.",
       "Your attacks with maces ignore up to 12% of your opponent's armor.",
       "Your attacks with maces ignore up to 15% of your opponent's armor."
      ],
      "cn": "锤类武器专精",
      "cnDesc": [
       "你用锤类武器攻击目标时忽略目标3%的护甲值。",
       "你用锤类武器攻击目标时忽略目标6%的护甲值。",
       "你用锤类武器攻击目标时忽略目标9%的护甲值。",
       "你用锤类武器攻击目标时忽略目标12%的护甲值。",
       "你用锤类武器攻击目标时忽略目标15%的护甲值。"
      ]
     },
     {
      "name": "Blade Flurry",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your attack speed by 20%. In addition, attacks strike an additional nearby opponent. Lasts 15 sec."
      ],
      "cn": "剑刃乱舞",
      "cnDesc": [
       "25 能量<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>使你的攻击速度提高20%。另外还可以对附近的一个额外的敌人造成伤害。持续15 秒。"
      ]
     },
     {
      "name": "Hack and Slash",
      "row": 4,
      "col": 2,
      "maxRank": 5,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires One-Handed Axes, One-Handed Swords Gives you a 1% chance to get an extra attack on the same target after hitting your target with your Sword or Axe.",
       "Requires One-Handed Axes, One-Handed Swords Gives you a 2% chance to get an extra attack on the same target after hitting your target with your Sword or Axe.",
       "Requires One-Handed Axes, One-Handed Swords Gives you a 3% chance to get an extra attack on the same target after hitting your target with your Sword or Axe.",
       "Requires One-Handed Axes, One-Handed Swords Gives you a 4% chance to get an extra attack on the same target after hitting your target with your Sword or Axe.",
       "Requires One-Handed Axes, One-Handed Swords Gives you a 5% chance to get an extra attack on the same target after hitting your target with your Sword or Axe."
      ],
      "cn": "劈斩",
      "cnDesc": [
       "使你在用剑类武器或斧类武器击中敌人后有1%的几率对同一目标进行一次额外的攻击。",
       "使你在用剑类武器或斧类武器击中敌人后有2%的几率对同一目标进行一次额外的攻击。",
       "使你在用剑类武器或斧类武器击中敌人后有3%的几率对同一目标进行一次额外的攻击。",
       "使你在用剑类武器或斧类武器击中敌人后有4%的几率对同一目标进行一次额外的攻击。",
       "使你在用剑类武器或斧类武器击中敌人后有5%的几率对同一目标进行一次额外的攻击。"
      ]
     },
     {
      "name": "Weapon Expertise",
      "row": 5,
      "col": 1,
      "maxRank": 2,
      "req": 25,
      "prereq": "Blade Flurry",
      "prereqRank": 1,
      "desc": [
       "Increases your expertise by 5.",
       "Increases your expertise by 10."
      ],
      "cn": "武器专家",
      "cnDesc": [
       "使你的精准值提高5点。",
       "使你的精准值提高10点。"
      ]
     },
     {
      "name": "Blade Twisting",
      "row": 5,
      "col": 2,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires Melee Weapon Increases the damage dealt by Sinister Strike and Backstab by 5%, and your damaging melee attacks have a 10% chance to Daze the target for 4 sec.",
       "Requires Melee Weapon Increases the damage dealt by Sinister Strike and Backstab by 10%, and your damaging melee attacks have a 10% chance to Daze the target for 8 sec."
      ],
      "cn": "利刃漩涡",
      "cnDesc": [
       "使你的影袭和背刺造成的伤害提高5%，你的伤害性近战攻击有10%的几率令目标眩晕8 秒。",
       "使你的影袭和背刺造成的伤害提高10%，你的伤害性近战攻击有10%的几率令目标眩晕8 秒。"
      ]
     },
     {
      "name": "Vitality",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Energy regeneration rate by 8%.",
       "Increases your Energy regeneration rate by 16%.",
       "Increases your Energy regeneration rate by 25%."
      ],
      "cn": "活力",
      "cnDesc": [
       "使你的能量值恢复速度提高8%。",
       "使你的能量值恢复速度提高16%。",
       "使你的能量值恢复速度提高25%。"
      ]
     },
     {
      "name": "Adrenaline Rush",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Energy regeneration rate by 100% for 15 sec."
      ],
      "cn": "冲动",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>使你的能量值回复速度提高100%，持续15 秒。"
      ]
     },
     {
      "name": "Nerves of Steel",
      "row": 6,
      "col": 2,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces damage taken while affected by Stun and Fear effects by 15%.",
       "Reduces damage taken while affected by Stun and Fear effects by 30%."
      ],
      "cn": "钢铁勇气",
      "cnDesc": [
       "使你在昏迷和恐惧状态下时受到的伤害降低15%。",
       "使你在昏迷和恐惧状态下时受到的伤害降低30%。"
      ]
     },
     {
      "name": "Throwing Specialization",
      "row": 7,
      "col": 0,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of Throw and Deadly Throw by 2 yards and gives your Deadly Throw a 50% chance to interrupt the target for 3 sec.",
       "Increases the range of Throw and Deadly Throw by 4 yards and gives your Deadly Throw a 100% chance to interrupt the target for 3 sec."
      ],
      "cn": "投掷专精",
      "cnDesc": [
       "使你的投掷和致命投掷技能的射程延长2码，致命投掷有50%的几率打断目标施法，持续3 秒。",
       "使你的投掷和致命投掷技能的射程延长4码，致命投掷有100%的几率打断目标施法，持续3 秒。"
      ]
     },
     {
      "name": "Combat Potency",
      "row": 7,
      "col": 2,
      "maxRank": 5,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your successful off-hand melee attacks a 20% chance to generate 3 Energy.",
       "Gives your successful off-hand melee attacks a 20% chance to generate 6 Energy.",
       "Gives your successful off-hand melee attacks a 20% chance to generate 9 Energy.",
       "Gives your successful off-hand melee attacks a 20% chance to generate 12 Energy.",
       "Gives your successful off-hand melee attacks a 20% chance to generate 15 Energy."
      ],
      "cn": "作战潜能",
      "cnDesc": [
       "你的副手近战攻击命中后有20%的几率回复3点能量值。",
       "你的副手近战攻击命中后有20%的几率回复6点能量值。",
       "你的副手近战攻击命中后有20%的几率回复9点能量值。",
       "你的副手近战攻击命中后有20%的几率回复12点能量值。",
       "你的副手近战攻击命中后有20%的几率回复15点能量值。"
      ]
     },
     {
      "name": "Unfair Advantage",
      "row": 8,
      "col": 0,
      "maxRank": 2,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Whenever you dodge an attack you gain an Unfair Advantage, striking back for 50% of your main hand weapon's damage.  This cannot occur more than once per second.",
       "Whenever you dodge an attack you gain an Unfair Advantage, striking back for 100% of your main hand weapon's damage.  This cannot occur more than once per second."
      ],
      "cn": "压倒优势",
      "cnDesc": [
       "每当你躲闪攻击，就可以获得压倒优势效果，对攻击者进行反击，造成相当于主手武器伤害50%的伤害。这个效果每秒只能触发一次。",
       "每当你躲闪攻击，就可以获得压倒优势效果，对攻击者进行反击，造成相当于主手武器伤害100%的伤害。这个效果每秒只能触发一次。"
      ]
     },
     {
      "name": "Suprise Attacks",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": "Adrenaline Rush",
      "prereqRank": 1,
      "desc": [
       "Your finishing moves can no longer be dodged, and the damage dealt by your Sinister Strike, Backstab, Shiv, Hemorrhage and Gouge abilities is increased by 10%."
      ],
      "cn": "突袭",
      "cnDesc": [
       "瞬发你的终结技无法被躲闪，你的影袭、背刺、毒刃、出血和凿击技能造成的伤害提高10%。"
      ]
     },
     {
      "name": "Savage Combat",
      "row": 8,
      "col": 2,
      "maxRank": 2,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total attack power by 2% and all physical damage caused to enemies you have poisoned is increased by 2%.",
       "Increases your total attack power by 4% and all physical damage caused to enemies you have poisoned is increased by 4%."
      ],
      "cn": "野蛮战斗",
      "cnDesc": [
       "使你的攻击强度总值提高2%，对所有被你施加毒药效果的敌人造成的物理伤害提高2%。",
       "使你的攻击强度总值提高4%，对所有被你施加毒药效果的敌人造成的物理伤害提高4%。"
      ]
     },
     {
      "name": "Prey on the Weak",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your critical strike damage is increased by 4% when the target has less health than you (as a percentage of total health).",
       "Your critical strike damage is increased by 8% when the target has less health than you (as a percentage of total health).",
       "Your critical strike damage is increased by 12% when the target has less health than you (as a percentage of total health).",
       "Your critical strike damage is increased by 16% when the target has less health than you (as a percentage of total health).",
       "Your critical strike damage is increased by 20% when the target has less health than you (as a percentage of total health)."
      ],
      "cn": "欺凌",
      "cnDesc": [
       "如果目标的生命值少于你的生命值（按当前生命值与总生命值的比例计算），则你的爆击伤害提高4%。",
       "如果目标的生命值少于你的生命值（按当前生命值与总生命值的比例计算），则你的爆击伤害提高8%。",
       "如果目标的生命值少于你的生命值（按当前生命值与总生命值的比例计算），则你的爆击伤害提高12%。",
       "如果目标的生命值少于你的生命值（按当前生命值与总生命值的比例计算），则你的爆击伤害提高16%。",
       "如果目标的生命值少于你的生命值（按当前生命值与总生命值的比例计算），则你的爆击伤害提高20%。"
      ]
     },
     {
      "name": "Killing Spree",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Step through the shadows from enemy to enemy within 10 yards, attacking an enemy every .5 secs with both weapons until 5 assaults are made, and increasing all damage done by 20% for the duration. Can hit the same target multiple times. Cannot hit invisible or stealthed targets."
      ],
      "cn": "杀戮盛筵",
      "cnDesc": [
       "10码范围<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>2 分钟冷却时间</th></tr></table>在10码范围内的多个敌方目标之间快速移动，每0.5秒使用两把武器攻击一个敌人，总共进行5次攻击。在此期间，你造成的所有伤害提高20%。可以多次攻击同一个目标，但是不能攻击隐形或潜行的目标。"
      ]
     }
    ],
    "sprite": "assets/sprites/rogue_combat.webp"
   },
   {
    "name": "Subtlety",
    "cn": "敏锐",
    "bg": "assets/tree-bg/rogue_subtlety.jpg",
    "talents": [
     {
      "name": "Relentless Strikes",
      "row": 0,
      "col": 0,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your finishing moves have a 4% chance per combo point to restore 25 energy.",
       "Your finishing moves have a 8% chance per combo point to restore 25 energy.",
       "Your finishing moves have a 12% chance per combo point to restore 25 energy.",
       "Your finishing moves have a 16% chance per combo point to restore 25 energy.",
       "Your finishing moves have a 20% chance per combo point to restore 25 energy."
      ],
      "cn": "无情打击",
      "cnDesc": [
       "你的终结技有每连击点数4%的几率恢复25点能量值。",
       "在你使用终结技时，有8%的几率每个连击点数为你恢复25点能量值。",
       "在你使用终结技时，有12%的几率每个连击点数为你恢复25点能量值。",
       "在你使用终结技时，有16%的几率每个连击点数为你恢复25点能量值。",
       "在你使用终结技时，有20%的几率每个连击点数为你恢复25点能量值。"
      ]
     },
     {
      "name": "Master of Deception",
      "row": 0,
      "col": 1,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the chance enemies have to detect you while in Stealth mode.",
       "Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 1).",
       "Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 2)."
      ],
      "cn": "欺诈高手",
      "cnDesc": [
       "当你在潜行状态下时，降低敌人侦测到你的几率。",
       "当你在潜行状态下时，降低敌人侦测到你的几率。比欺诈高手（等级 1）更有效。",
       "当你在潜行状态下时，降低敌人侦测到你的几率。比欺诈高手（等级 2）更有效。"
      ]
     },
     {
      "name": "Opportunity",
      "row": 0,
      "col": 2,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage dealt with your Backstab, Mutilate, Garrote and Ambush abilities by 10%.",
       "Increases the damage dealt with your Backstab, Mutilate, Garrote and Ambush abilities by 20%."
      ],
      "cn": "伺机而动",
      "cnDesc": [
       "使你的背刺、毁伤、锁喉和伏击技能造成的伤害提高10%。",
       "使你的背刺、毁伤、锁喉和伏击技能造成的伤害提高20%。"
      ]
     },
     {
      "name": "Sleight of Hand",
      "row": 1,
      "col": 0,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the chance you are critically hit by melee and ranged attacks by 1% and increases the threat reduction of your Feint ability by 10%.",
       "Reduces the chance you are critically hit by melee and ranged attacks by 2% and increases the threat reduction of your Feint ability by 20%."
      ],
      "cn": "狡诈",
      "cnDesc": [
       "使你受到近战和远程爆击的几率降低1%，并使你的佯攻技能降低仇恨的效果提高10%。",
       "使你受到近战和远程爆击的几率降低2%，并使你的佯攻技能降低仇恨的效果提高20%。"
      ]
     },
     {
      "name": "Dirty Tricks",
      "row": 1,
      "col": 1,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of your Blind and Sap abilities by 2 yards and reduces the energy cost of your Blind and Sap abilities by 25%.",
       "Increases the range of your Blind and Sap abilities by 5 yards and reduces the energy cost of your Blind and Sap abilities by 50%."
      ],
      "cn": "邪恶计谋",
      "cnDesc": [
       "使你的致盲和闷棍技能的射程延长2码，致盲和闷棍技能所消耗的能量值减少25%。",
       "使你的致盲和闷棍技能的射程延长5码，致盲和闷棍技能所消耗的能量值减少50%。"
      ]
     },
     {
      "name": "Camouflage",
      "row": 1,
      "col": 2,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your speed while stealthed by 5% and reduces the cooldown of your Stealth ability by 2 sec.",
       "Increases your speed while stealthed by 10% and reduces the cooldown of your Stealth ability by 4 sec.",
       "Increases your speed while stealthed by 15% and reduces the cooldown of your Stealth ability by 6 sec."
      ],
      "cn": "伪装",
      "cnDesc": [
       "使你在潜行后的移动速度提高5%，潜行技能的冷却时间降低2秒。",
       "使你在潜行后的移动速度提高10%，潜行技能的冷却时间降低4秒。",
       "使你在潜行后的移动速度提高15%，潜行技能的冷却时间降低6秒。"
      ]
     },
     {
      "name": "Elusiveness",
      "row": 2,
      "col": 0,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Vanish and Blind abilities by 30 sec and your Cloak of Shadows ability by 15 sec.",
       "Reduces the cooldown of your Vanish and Blind abilities by 60 sec and your Cloak of Shadows ability by 30 sec."
      ],
      "cn": "飘忽不定",
      "cnDesc": [
       "使你的消失和致盲技能的冷却时间缩短30秒，暗影斗篷的冷却时间缩短15秒。",
       "使你的消失和致盲技能的冷却时间缩短60秒，暗影斗篷的冷却时间缩短30秒。"
      ]
     },
     {
      "name": "Ghostly Strike",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "A strike that deals 125% weapon damage (180% if a dagger is equipped) and increases your chance to dodge by 15% for 7 sec. Awards 1 combo point."
      ],
      "cn": "鬼魅攻击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>40 能量</td><th>近战范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>20 秒冷却时间</th></tr></table>对敌人造成125%的武器伤害（如果装备匕首则造成180%的武器伤害），并使你躲闪攻击的几率提高15%，持续7 秒。奖励1个连击点数。"
      ]
     },
     {
      "name": "Serrated Blades",
      "row": 2,
      "col": 2,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Causes your attacks to ignore up to 3% of your target's Armor and increases the damage dealt by your Rupture ability by 10%.",
       "Causes your attacks to ignore up to 6% of your target's Armor and increases the damage dealt by your Rupture ability by 20%.",
       "Causes your attacks to ignore up to 9% of your target's Armor and increases the damage dealt by your Rupture ability by 30%."
      ],
      "cn": "锯齿利刃",
      "cnDesc": [
       "使你的攻击忽视目标最多3%的护甲，并使你的割裂技能所造成的伤害提高10%。",
       "使你的攻击忽视目标最多6%的护甲，并使你的割裂技能所造成的伤害提高20%。",
       "使你的攻击忽视目标最多9%的护甲，并使你的割裂技能所造成的伤害提高30%。"
      ]
     },
     {
      "name": "Setup",
      "row": 3,
      "col": 0,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives you a 33% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.  This cannot happen more than once per second.",
       "Gives you a 66% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.  This cannot happen more than once per second.",
       "Gives you a 100% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.  This cannot happen more than once per second."
      ],
      "cn": "调整",
      "cnDesc": [
       "使你有33%的几率在成功躲闪敌人的攻击或完全抵抗一个法术之后对你的目标获得一个连击点数。这个效果每秒只能触发一次。",
       "使你有66%的几率在成功躲闪敌人的攻击或完全抵抗一个法术之后对你的目标获得一个连击点数。这个效果每秒只能触发一次。",
       "使你有100%的几率在成功躲闪敌人的攻击或完全抵抗一个法术之后对你的目标获得一个连击点数。这个效果每秒只能触发一次。"
      ]
     },
     {
      "name": "Initiative",
      "row": 3,
      "col": 1,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives you a 33% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
       "Gives you a 66% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
       "Gives you a 100% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability."
      ],
      "cn": "先发制人",
      "cnDesc": [
       "使你有33%的几率在使用伏击、锁喉或偷袭技能后获得1个额外的连击点数。",
       "使你有66%的几率在使用伏击、锁喉或偷袭技能后获得1个额外的连击点数。",
       "使你有100%的几率在使用伏击、锁喉或偷袭技能后获得1个额外的连击点数。"
      ]
     },
     {
      "name": "Improved Ambush",
      "row": 3,
      "col": 2,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your Ambush ability by 25%.",
       "Increases the critical strike chance of your Ambush ability by 50%."
      ],
      "cn": "强化伏击",
      "cnDesc": [
       "使你的伏击技能的爆击几率提高25%。",
       "使你的伏击技能的爆击几率提高50%。"
      ]
     },
     {
      "name": "Heightened Senses",
      "row": 4,
      "col": 0,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 2%.",
       "Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 4%.  More effective than Heightened Senses (Rank 1)."
      ],
      "cn": "察觉",
      "cnDesc": [
       "使你的潜行侦测能力提高，并使你被法术和远程攻击命中的几率降低2%。",
       "使你的潜行侦测能力提高，并使你被法术和远程攻击命中的几率降低4%。比察觉（等级 1）更有效。"
      ]
     },
     {
      "name": "Preparation",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When activated, this ability immediately finishes the cooldown on your Evasion, Sprint, Vanish, Cold Blood and Shadowstep abilities."
      ],
      "cn": "伺机待发",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>8 分钟冷却时间</th></tr></table>激活之后，这项技能立刻使你的闪避、疾跑、消失、冷血和暗影步的冷却时间结束。"
      ]
     },
     {
      "name": "Dirty Deeds",
      "row": 4,
      "col": 2,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 10.  Additionally, your special abilities cause 10% more damage against targets below 35% health.",
       "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 20.  Additionally, your special abilities cause 20% more damage against targets below 35% health."
      ],
      "cn": "卑鄙",
      "cnDesc": [
       "使你的偷袭和锁喉技能所消耗的能量值减少10点。另外，你的特殊技能对生命值低于35%的目标所造成的伤害提高10%。",
       "使你的偷袭和锁喉技能所消耗的能量值减少20点。另外，你的特殊技能对生命值低于35%的目标所造成的伤害提高20%。"
      ]
     },
     {
      "name": "Hemorrhage",
      "row": 4,
      "col": 3,
      "maxRank": 1,
      "req": 20,
      "prereq": "Serrated Blades",
      "prereqRank": 3,
      "desc": [
       "An instant strike that deals 110% weapon damage (160% if a dagger is equipped) and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to 13.  Lasts 10 charges or 15 sec.  Awards 1 combo point."
      ],
      "cn": "出血",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>35 能量</td><th>近战范围</th></tr></table>瞬发立即对目标造成110%的武器伤害（如果装备匕首则造成160%的武器伤害），并令其流血，使其在受到物理攻击时所承受的伤害提高最多<!--sp56807:0-->13<!--sp56807-->点。可最多生效10次，或者持续15 秒。奖励1个连击点数。"
      ]
     },
     {
      "name": "Master of Subtlety",
      "row": 5,
      "col": 0,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 4% damage.",
       "Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 7% damage.",
       "Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 10% damage."
      ],
      "cn": "敏锐大师",
      "cnDesc": [
       "在潜行状态和解除潜行状态后的6秒内进行的攻击所造成的伤害提高4%。",
       "在潜行状态和解除潜行状态后的6秒内进行的攻击所造成的伤害提高7%。",
       "在潜行状态和解除潜行状态后的6秒内进行的攻击所造成的伤害提高10%。"
      ]
     },
     {
      "name": "Deadliness",
      "row": 5,
      "col": 2,
      "maxRank": 5,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your attack power by 2%.",
       "Increases your attack power by 4%.",
       "Increases your attack power by 6%.",
       "Increases your attack power by 8%.",
       "Increases your attack power by 10%."
      ],
      "cn": "致命",
      "cnDesc": [
       "攻击强度提高2%。",
       "攻击强度提高4%。",
       "攻击强度提高6%。",
       "攻击强度提高8%。",
       "攻击强度提高10%。"
      ]
     },
     {
      "name": "Enveloping Shadows",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the damage taken by area of effect attacks by 10%.",
       "Reduces the damage taken by area of effect attacks by 20%.",
       "Reduces the damage taken by area of effect attacks by 30%."
      ],
      "cn": "覆体之影",
      "cnDesc": [
       "使你因范围攻击受到的伤害降低10%。",
       "使你因范围攻击受到的伤害降低20%。",
       "使你因范围攻击受到的伤害降低30%。"
      ]
     },
     {
      "name": "Premeditation",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Preparation",
      "prereqRank": 1,
      "desc": [
       "When used, adds 2 combo points to your target. You must add to or use those combo points within 20 sec or the combo points are lost."
      ],
      "cn": "预谋",
      "cnDesc": [
       "30码范围<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>20 秒冷却时间</th></tr></table>使用此技能后，为你的当前目标增加2个连击点数。你必须在20 秒内消耗掉这些点数，或者为其增加新的连击点数，否则它们就会消失。"
      ]
     },
     {
      "name": "Cheat Death",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You have a 33% chance that an attack which would otherwise kill you will instead reduce you to 10% of your maximum health. In addition, all damage taken will be reduced by up to 90% for 3 sec (modified by resilience).  This effect cannot occur more than once per minute.",
       "You have a 66% chance that an attack which would otherwise kill you will instead reduce you to 10% of your maximum health. In addition, all damage taken will be reduced by up to 90% for 3 sec (modified by resilience).  This effect cannot occur more than once per minute.",
       "You have a 100% chance that an attack which would otherwise kill you will instead reduce you to 10% of your maximum health. In addition, all damage taken will be reduced by up to 90% for 3 sec (modified by resilience).  This effect cannot occur more than once per minute."
      ],
      "cn": "装死",
      "cnDesc": [
       "你有33%的几率令任何可以导致你死亡的攻击对你造成的伤害只将你的生命值降低到其上限的10%，并且使你受到的所有伤害降低最多90%，持续3 秒（减免数值受韧性影响）。这个效果每1分钟只能触发一次。",
       "你有66%的几率令任何可以导致你死亡的攻击对你造成的伤害只将你的生命值降低到其上限的10%，并且使你受到的所有伤害降低最多90%，持续3 秒（减免数值受韧性影响）。这个效果每1分钟只能触发一次。",
       "你有100%的几率令任何可以导致你死亡的攻击对你造成的伤害只将你的生命值降低到其上限的10%，并且使你受到的所有伤害降低最多90%，持续3 秒（减免数值受韧性影响）。这个效果每1分钟只能触发一次。"
      ]
     },
     {
      "name": "Sinister Calling",
      "row": 7,
      "col": 1,
      "maxRank": 5,
      "req": 35,
      "prereq": "Premeditation",
      "prereqRank": 1,
      "desc": [
       "Increases your total Agility by 3% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 2%.",
       "Increases your total Agility by 6% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 4%.",
       "Increases your total Agility by 9% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 6%.",
       "Increases your total Agility by 12% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 8%.",
       "Increases your total Agility by 15% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 10%."
      ],
      "cn": "邪恶召唤",
      "cnDesc": [
       "使你的敏捷总值提高3%，并使背刺和出血技能的百分比伤害加成提高2%。",
       "使你的敏捷总值提高6%，并使背刺和出血技能的百分比伤害加成提高4%。",
       "使你的敏捷总值提高9%，并使背刺和出血技能的百分比伤害加成提高6%。",
       "使你的敏捷总值提高12%，并使背刺和出血技能的百分比伤害加成提高8%。",
       "使你的敏捷总值提高15%，并使背刺和出血技能的百分比伤害加成提高10%。"
      ]
     },
     {
      "name": "Waylay",
      "row": 7,
      "col": 2,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Ambush and Backstab hits have a 50% chance to unbalance a target, increasing the time between their melee and ranged attacks by 20%, and reducing movement speed by 50% for 8 sec.",
       "Your Ambush and Backstab hits have a 100% chance to unbalance a target, increasing the time between their melee and ranged attacks by 20%, and reducing movement speed by 50% for 8 sec."
      ],
      "cn": "打劫",
      "cnDesc": [
       "你的伏击和背刺技能命中后有50%的几率使目标失衡，近战和远程攻击速度降低20%，移动速度降低50%，持续8 秒。",
       "你的伏击和背刺技能命中后有100%的几率使目标失衡，近战和远程攻击速度降低20%，移动速度降低50%，持续8 秒。"
      ]
     },
     {
      "name": "Honor Among Thieves",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When anyone in your group critically hits with a damage or healing spell or ability, you have a 33% chance to gain a combo point on your current target.  This effect cannot occur more than once every second.",
       "When anyone in your group critically hits with a damage or healing spell or ability, you have a 66% chance to gain a combo point on your current target.  This effect cannot occur more than once every second.",
       "When anyone in your group critically hits with a damage or healing spell or ability, you have a 100% chance to gain a combo point on your current target.  This effect cannot occur more than once every second."
      ],
      "cn": "盗贼的尊严",
      "cnDesc": [
       "当你所在的小队中有任意成员的伤害或治疗法术/技能爆击之后，你有33%的几率对当前目标获得一个连击点数。这个效果每秒只能触发一次。",
       "当你所在的小队中有任意成员的伤害或治疗法术/技能爆击之后，你有66%的几率对当前目标获得一个连击点数。这个效果每秒只能触发一次。",
       "当你所在的小队中有任意成员的伤害或治疗法术/技能爆击之后，你有100%的几率对当前目标获得一个连击点数。这个效果每秒只能触发一次。"
      ]
     },
     {
      "name": "Shadowstep",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Attempts to step through the shadows and reappear behind your enemy and increases movement speed by 70% for 3 sec. The damage of your next ability is increased by 20% and the threat caused is reduced by 50%. Lasts 10 sec."
      ],
      "cn": "暗影步",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>10 能量</td><th>25码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>30 秒冷却时间</th></tr></table>尝试在暗影中行进，并出现在你的目标身后，移动速度提高70%，持续3 秒。你的下一个技能造成的伤害提高20%，威胁值降低50%。持续10 秒。"
      ]
     },
     {
      "name": "Filthy Tricks",
      "row": 8,
      "col": 2,
      "maxRank": 2,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown by 5 sec and energy cost by 5 of your Tricks of the Trade, Distract and Shadowstep abilities and reduces the cooldown of Preparation by 1.5 min.",
       "Reduces the cooldown by 10 sec and energy cost by 10 of your Tricks of the Trade, Distract and Shadowstep abilities and reduces the cooldown of Preparation by 3 min."
      ],
      "cn": "恶毒诡计",
      "cnDesc": [
       "使你的嫁祸诀窍、扰乱和暗影步技能的冷却时间缩短5秒，能量消耗降低5点，伺机待发的冷却时间缩短1.5分钟。",
       "使你的嫁祸诀窍、扰乱和暗影步技能的冷却时间缩短10秒，能量消耗降低10点，伺机待发的冷却时间缩短3分钟。"
      ]
     },
     {
      "name": "Slaughter from the Shadows",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the energy cost of your Backstab and Ambush abilities by 4 and the energy cost of your Hemorrhage by 1, and increases all damage done by 1%.",
       "Reduces the energy cost of your Backstab and Ambush abilities by 8 and the energy cost of your Hemorrhage by 2, and increases all damage done by 2%.",
       "Reduces the energy cost of your Backstab and Ambush abilities by 12 and the energy cost of your Hemorrhage by 3, and increases all damage done by 3%.",
       "Reduces the energy cost of your Backstab and Ambush abilities by 16 and the energy cost of your Hemorrhage by 4, and increases all damage done by 4%.",
       "Reduces the energy cost of your Backstab and Ambush abilities by 20 and the energy cost of your Hemorrhage by 5, and increases all damage done by 5%."
      ],
      "cn": "暗影杀手",
      "cnDesc": [
       "使你的背刺和伏击技能消耗的能量值减少4点，出血技能消耗的能量值减少1点，所有伤害提高1%。",
       "使你的背刺和伏击技能消耗的能量值减少8点，出血技能消耗的能量值减少2点，所有伤害提高2%。",
       "使你的背刺和伏击技能消耗的能量值减少12点，出血技能消耗的能量值减少3点，所有伤害提高3%。",
       "使你的背刺和伏击技能消耗的能量值减少16点，出血技能消耗的能量值减少4点，所有伤害提高4%。",
       "使你的背刺和伏击技能消耗的能量值减少20点，出血技能消耗的能量值减少5点，所有伤害提高5%。"
      ]
     },
     {
      "name": "Shadow Dance",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Enter the Shadow Dance for 6 sec, allowing the use of Sap, Garrote, Ambush, Cheap Shot, Premeditation, Pickpocket and Disarm Trap regardless of being stealthed."
      ],
      "cn": "暗影之舞",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>1 分钟冷却时间</th></tr></table>立即进入暗影之舞状态，持续6 秒。无论是否潜行都可以使用闷棍、锁喉、伏击、偷袭、预谋、搜索和解除陷阱技能。"
      ]
     }
    ],
    "sprite": "assets/sprites/rogue_subtlety.webp"
   }
  ],
  "icon": "assets/class-icons/rogue.jpg"
 },
 {
  "id": "shaman",
  "name": "Shaman",
  "cn": "萨满祭司",
  "trees": [
   {
    "name": "Elemental",
    "cn": "元素",
    "bg": "assets/tree-bg/shaman_elemental.jpg",
    "talents": [
     {
      "name": "Convection",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, Lava Burst, and Wind Shear spells by 2%.",
       "Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, Lava Burst, and Wind Shear spells by 4%.",
       "Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, Lava Burst, and Wind Shear spells by 6%.",
       "Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, Lava Burst, and Wind Shear spells by 8%.",
       "Reduces the mana cost of your Shock, Lightning Bolt, Chain Lightning, Lava Burst, and Wind Shear spells by 10%."
      ],
      "cn": "传导",
      "cnDesc": [
       "使你的震击、闪电箭、闪电链、熔岩爆裂和风剪所消耗的法力值减少2%。",
       "使你的震击、闪电箭、闪电链、熔岩爆裂和风剪所消耗的法力值减少4%。",
       "使你的震击、闪电箭、闪电链、熔岩爆裂和风剪所消耗的法力值减少6%。",
       "使你的震击、闪电箭、闪电链、熔岩爆裂和风剪所消耗的法力值减少8%。",
       "使你的震击、闪电箭、闪电链、熔岩爆裂和风剪所消耗的法力值减少10%。"
      ]
     },
     {
      "name": "Concussion",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by 1%.",
       "Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by 2%.",
       "Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by 3%.",
       "Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by 4%.",
       "Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by 5%."
      ],
      "cn": "震荡",
      "cnDesc": [
       "使你的震击、闪电箭、闪电链、雷霆风暴和熔岩爆裂造成的伤害提高1%。",
       "使你的震击、闪电箭、闪电链、雷霆风暴和熔岩爆裂造成的伤害提高2%。",
       "使你的震击、闪电箭、闪电链、雷霆风暴和熔岩爆裂造成的伤害提高3%。",
       "使你的震击、闪电箭、闪电链、雷霆风暴和熔岩爆裂造成的伤害提高4%。",
       "使你的震击、闪电箭、闪电链、雷霆风暴和熔岩爆裂造成的伤害提高5%。"
      ]
     },
     {
      "name": "Call of Flame",
      "row": 1,
      "col": 0,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Fire Totems and Fire Nova by 5%, and damage done by your Lava Burst spell by 2%.",
       "Increases the damage done by your Fire Totems and Fire Nova by 10%, and damage done by your Lava Burst spell by 4%.",
       "Increases the damage done by your Fire Totems and Fire Nova by 15%, and damage done by your Lava Burst spell by 6%."
      ],
      "cn": "烈焰召唤",
      "cnDesc": [
       "使你的火焰图腾和火焰新星所造成的伤害提高5%，熔岩爆裂法术所造成的伤害提高2%。",
       "使你的火焰图腾和火焰新星所造成的伤害提高10%，熔岩爆裂法术所造成的伤害提高4%。",
       "使你的火焰图腾和火焰新星所造成的伤害提高15%，熔岩爆裂法术所造成的伤害提高6%。"
      ]
     },
     {
      "name": "Elemental Warding",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces all damage taken by 2%.",
       "Reduces all damage taken by 4%.",
       "Reduces all damage taken by 6%."
      ],
      "cn": "元素防护",
      "cnDesc": [
       "使你受到的所有伤害降低2%。",
       "使你受到的所有伤害降低4%。",
       "使你受到的所有伤害降低6%。"
      ]
     },
     {
      "name": "Elemental Devastation",
      "row": 1,
      "col": 2,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your non-periodic offensive spell crits will increase your chance to get a critical strike with melee attacks by 3% for 10 sec.",
       "Your non-periodic offensive spell crits will increase your chance to get a critical strike with melee attacks by 6% for 10 sec.",
       "Your non-periodic offensive spell crits will increase your chance to get a critical strike with melee attacks by 9% for 10 sec."
      ],
      "cn": "元素浩劫",
      "cnDesc": [
       "你的非周期性攻击法术在造成爆击之后可以使你的近战爆击几率提高3%，持续10 秒。",
       "你的非周期性攻击法术在造成爆击之后可以使你的近战爆击几率提高6%，持续10 秒。",
       "你的非周期性攻击法术在造成爆击之后可以使你的近战爆击几率提高9%，持续10 秒。"
      ]
     },
     {
      "name": "Reverberation",
      "row": 2,
      "col": 0,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Shock spells and Wind Shear by 0.2 sec.",
       "Reduces the cooldown of your Shock spells and Wind Shear by 0.4 sec.",
       "Reduces the cooldown of your Shock spells and Wind Shear by 0.6 sec.",
       "Reduces the cooldown of your Shock and Wind Shear spells by 0.8 sec.",
       "Reduces the cooldown of your Shock and Wind Shear spells by 1 sec."
      ],
      "cn": "回响",
      "cnDesc": [
       "使你的震击法术和风剪法术的冷却时间缩短0.2秒。",
       "使你的震击法术和风剪法术的冷却时间缩短0.4秒。",
       "使你的震击法术和风剪法术的冷却时间缩短0.6秒。",
       "使你的震击法术和风剪法术的冷却时间缩短0.8秒。",
       "使你的震击法术和风剪法术的冷却时间缩短1秒。"
      ]
     },
     {
      "name": "Elemental Focus",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "After landing a non-periodic critical strike with a Fire, Frost, or Nature damage spell, you enter a Clearcasting state. The Clearcasting state reduces the mana cost of your next 2 damage or healing spells by 40%."
      ],
      "cn": "元素集中",
      "cnDesc": [
       "瞬发你的任何非周期性火焰、冰霜或自然系的伤害性法术造成爆击之后，你都会进入节能施法状态。这个状态可以使你的下2个伤害或治疗法术所消耗的法力值减少40%。"
      ]
     },
     {
      "name": "Elemental Fury",
      "row": 2,
      "col": 2,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 20%.",
       "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 40%.",
       "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 60%.",
       "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 80%.",
       "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 100%."
      ],
      "cn": "元素之怒",
      "cnDesc": [
       "使你的灼热图腾、熔岩图腾、火焰新星图腾以及你的火焰、冰霜和自然系法术的爆击伤害加成提高20%。",
       "使你的灼热图腾、熔岩图腾和火焰新星图腾，以及你的火焰、冰霜和自然法术的爆击伤害加成提高40%。",
       "使你的灼热图腾、熔岩图腾和火焰新星图腾，以及你的火焰、冰霜和自然法术的爆击伤害加成提高60%。",
       "使你的灼热图腾、熔岩图腾和火焰新星图腾，以及你的火焰、冰霜和自然法术的爆击伤害加成提高80%。",
       "使你的灼热图腾、熔岩图腾和火焰新星图腾，以及你的火焰、冰霜和自然法术的爆击伤害加成提高100%。"
      ]
     },
     {
      "name": "Improved Fire Nova",
      "row": 3,
      "col": 0,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Fire Nova by 10% and reduces the cooldown by 2 sec.",
       "Increases the damage done by your Fire Nova by 20% and reduces the cooldown by 4 sec."
      ],
      "cn": "强化火焰新星",
      "cnDesc": [
       "你的火焰新星所造成的伤害提高10%，冷却时间缩短2秒",
       "你的火焰新星所造成的伤害提高20%，冷却时间缩短4秒"
      ]
     },
     {
      "name": "Eye of the Storm",
      "row": 3,
      "col": 3,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, Lava Burst and Hex spells by 23%.",
       "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, Lava Burst and Hex spells by 46%.",
       "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, Lava Burst and Hex spells by 70%."
      ],
      "cn": "风暴之眼",
      "cnDesc": [
       "使你在施放闪电箭、闪电链、熔岩爆裂和妖术时因受到伤害而承受的施法推迟时间缩短23%。",
       "使你在施放闪电箭、闪电链、熔岩爆裂和妖术时因受到伤害而承受的施法推迟时间缩短46%。",
       "使你在施放闪电箭、闪电链、熔岩爆裂和妖术时因受到伤害而承受的施法推迟时间缩短70%。"
      ]
     },
     {
      "name": "Elemental Reach",
      "row": 4,
      "col": 0,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by 3 yards, increases the radius of your Thunderstorm spell by 10%, and increases the range of your Flame Shock by 7 yards.",
       "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by 6 yards, increases the radius of your Thunderstorm spell by 20%, and increases the range of your Flame Shock by 15 yards."
      ],
      "cn": "元素射程",
      "cnDesc": [
       "使你的闪电箭、闪电链、火焰新星和熔岩爆裂的射程延长3码，雷霆风暴的作用范围增加10%，烈焰震击的射程延长7码。",
       "使你的闪电箭、闪电链、火焰新星和熔岩爆裂的射程延长6码，雷霆风暴的作用范围增加20%，烈焰震击的射程延长15码。"
      ]
     },
     {
      "name": "Call of Thunder",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": "Elemental Focus",
      "prereqRank": 1,
      "desc": [
       "Increases the critical strike chance of your Lightning Bolt, Chain Lightning and Thunderstorm spells by an additional 5%."
      ],
      "cn": "雷霆召唤",
      "cnDesc": [
       "使你的闪电箭、闪电链和雷霆风暴的爆击几率提高5%。"
      ]
     },
     {
      "name": "Unrelenting Storm",
      "row": 4,
      "col": 3,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Regenerate mana equal to 4% of your Intellect every 5 sec, even while casting.",
       "Regenerate mana equal to 8% of your Intellect every 5 sec, even while casting.",
       "Regenerate mana equal to 12% of your Intellect every 5 sec, even while casting."
      ],
      "cn": "冷酷风暴",
      "cnDesc": [
       "每5秒为你恢复相当于你的智力值4%的法力值，在施法时仍然有效。",
       "每5秒为你恢复相当于你的智力值8%的法力值，在施法时仍然有效。",
       "每5秒为你恢复相当于你的智力值12%的法力值，在施法时仍然有效。"
      ]
     },
     {
      "name": "Elemental Precision",
      "row": 5,
      "col": 0,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to hit with Fire, Frost and Nature spells by 1% and reduces the threat caused by Fire, Frost and Nature spells by 10%.",
       "Increases your chance to hit with Fire, Frost and Nature spells by 2% and reduces the threat caused by Fire, Frost and Nature spells by 20%.",
       "Increases your chance to hit with Fire, Frost and Nature spells by 3% and reduces the threat caused by Fire, Frost and Nature spells by 30%."
      ],
      "cn": "元素精准",
      "cnDesc": [
       "使你的火焰、冰霜和自然系法术的命中几率提高1%，火焰、冰霜和自然系法术所造成的威胁值降低10%。",
       "使你的火焰、冰霜和自然系法术的命中几率提高2%，火焰、冰霜和自然系法术所造成的威胁值降低20%。",
       "使你的火焰、冰霜和自然系法术的命中几率提高3%，火焰、冰霜和自然系法术所造成的威胁值降低30%。"
      ]
     },
     {
      "name": "Lightning Mastery",
      "row": 5,
      "col": 2,
      "maxRank": 5,
      "req": 25,
      "prereq": "Elemental Fury",
      "prereqRank": 5,
      "desc": [
       "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.1 sec.",
       "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.2 sec.",
       "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.3 sec.",
       "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.4 sec.",
       "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.5 sec."
      ],
      "cn": "闪电掌握",
      "cnDesc": [
       "使你的闪电箭、闪电链和熔岩爆裂的施法时间缩短0.1秒。",
       "使你的闪电箭、闪电链和熔岩爆裂的施法时间缩短0.2秒。",
       "使你的闪电箭、闪电链和熔岩爆裂的施法时间缩短0.3秒。",
       "使你的闪电箭、闪电链和熔岩爆裂的施法时间缩短0.4秒。",
       "使你的闪电箭、闪电链和熔岩爆裂的施法时间缩短0.5秒。"
      ]
     },
     {
      "name": "Elemental Mastery",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Call of Thunder",
      "prereqRank": 1,
      "desc": [
       "When activated, your next Lightning Bolt, Chain Lightning or Lava Burst spell becomes an instant cast spell. In addition, you gain 15% spell haste for 15 sec. Elemental Mastery shares a cooldown with Nature's Swiftness."
      ],
      "cn": "元素掌握",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>激活之后，你的下一个闪电箭、闪电链或熔岩爆裂法术成为瞬发法术。另外，你的法术急速等级提高15%，持续15 秒。元素掌握与自然迅捷共享冷却时间。"
      ]
     },
     {
      "name": "Storm, Earth and Fire",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Chain Lightning spell by .75 sec, your Earthbind Totem also has a 33% chance to root targets for 5 sec when cast and the periodic damage done by your Flame Shock is increased by 20%.",
       "Reduces the cooldown of your Chain Lightning spell by 1.5 sec, your Earthbind Totem also has a 66% chance to root targets for 5 sec when cast and the periodic damage done by your Flame Shock is increased by 40%.",
       "Reduces the cooldown of your Chain Lightning spell by 2.5 sec, your Earthbind Totem also has a 100% chance to root targets for 5 sec when cast and the periodic damage done by your Flame Shock is increased by 60%."
      ],
      "cn": "风暴、大地与火焰",
      "cnDesc": [
       "使你的闪电链的冷却时间缩短0.75秒，施放地缚图腾时有33%的几率将目标定身5 秒，烈焰震击的持续伤害量提高20%。",
       "使你的闪电链的冷却时间缩短1.5秒，施放地缚图腾时有66%的几率将目标定身5 秒，烈焰震击的持续伤害量提高40%。",
       "使你的闪电链的冷却时间缩短2.5秒，施放地缚图腾时有100%的几率将目标定身5 秒，烈焰震击的持续伤害量提高60%。"
      ]
     },
     {
      "name": "Booming Echoes",
      "row": 7,
      "col": 0,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Flame Shock and Frost Shock spells by an additional 1 sec., and increases the direct damage done by your Flame Shock and Frost Shock spells by an additional 10%.",
       "Reduces the cooldown of your Flame Shock and Frost Shock spells by an additional 2 sec., and increases the direct damage done by your Flame Shock and Frost Shock spells by an additional 20%."
      ],
      "cn": "震耳回音",
      "cnDesc": [
       "你的烈焰震击和冰霜震击的冷却时间缩短1秒；烈焰震击和冰霜震击的直接伤害提高10%。",
       "你的烈焰震击和冰霜震击的冷却时间缩短2秒；烈焰震击和冰霜震击的直接伤害提高20%。"
      ]
     },
     {
      "name": "Elemental Oath",
      "row": 7,
      "col": 1,
      "maxRank": 2,
      "req": 35,
      "prereq": "Elemental Mastery",
      "prereqRank": 1,
      "desc": [
       "While Clearcasting from Elemental Focus is active, you deal 5% more spell damage. In addition, party and raid members within 100 yards receive a 3% bonus to their spell critical strike chance.",
       "While Clearcasting from Elemental Focus is active, you deal 10% more spell damage. In addition, party and raid members within 100 yards receive a 5% bonus to their spell critical strike chance."
      ],
      "cn": "元素之誓",
      "cnDesc": [
       "当元素集中天赋触发节能施法效果时，你的法术伤害提高5%。此外，100码内的小队和团队成员的法术爆击几率提高3%。",
       "当元素集中天赋触发节能施法效果时，你的法术伤害提高10%。此外，100码内的小队和团队成员的法术爆击几率提高5%。"
      ]
     },
     {
      "name": "Lightning Overload",
      "row": 7,
      "col": 2,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your Lightning Bolt and Chain Lightning spells a 11% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
       "Gives your Lightning Bolt and Chain Lightning spells a 22% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
       "Gives your Lightning Bolt and Chain Lightning spells a 33% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat."
      ],
      "cn": "闪电过载",
      "cnDesc": [
       "你的闪电箭和闪电链法术有11%的几率令你对同一个目标施放第二个完全一样的法术，不需任何法力值消耗，且不产生威胁值，但是伤害减半。",
       "你的闪电箭和闪电链法术有22%的几率令你对同一个目标施放第二个完全一样的法术，不需任何法力值消耗，且不产生威胁值，但是伤害减半。",
       "你的闪电箭和闪电链法术有33%的几率令你对同一个目标施放第二个完全一样的法术，不需任何法力值消耗，且不产生威胁值，但是伤害减半。"
      ]
     },
     {
      "name": "Astral Shift",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When stunned, feared or silenced you shift into the Astral Plane reducing all damage taken by 10% for the duration of the stun, fear or silence effect.",
       "When stunned, feared or silenced you shift into the Astral Plane reducing all damage taken by 20% for the duration of the stun, fear or silence effect.",
       "When stunned, feared or silenced you shift into the Astral Plane reducing all damage taken by 30% for the duration of the stun, fear or silence effect."
      ],
      "cn": "星界转移",
      "cnDesc": [
       "当你受到昏迷、恐惧或沉默效果影响后，你进入星界位面，在昏迷、恐惧或沉默期间受到的所有伤害降低10%。",
       "当你受到昏迷、恐惧或沉默效果影响后，你进入星界位面，在昏迷、恐惧或沉默期间受到的所有伤害降低20%。",
       "当你受到昏迷、恐惧或沉默效果影响后，你进入星界位面，在昏迷、恐惧或沉默期间受到的所有伤害降低30%。"
      ]
     },
     {
      "name": "Totem of Wrath",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Summons a Totem of Wrath with 5 health at the feet of the caster.  The totem increases spell power by 100 for all party and raid members, and increases the critical strike chance of all attacks by 3% against all enemies within 40 yards.  Lasts 5 min."
      ],
      "cn": "天怒图腾",
      "cnDesc": [
       "5% 的基础法力值<br />瞬发在施法者身边召唤一个生命值为5点的天怒图腾，持续5 分钟。这个图腾可以使周围半径40码范围内的小队和团队成员的法术强度提高100点，对半径40码范围内的所有敌人造成爆击的几率提高3%。"
      ]
     },
     {
      "name": "Lava Flows",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike damage bonus of your Lava Burst spell by an additional 6%, and when your Flame Shock is dispelled your spell casting speed is increased by 10% for 6 sec.",
       "Increases the critical strike damage bonus of your Lava Burst spell by an additional 12%, and when your Flame Shock is dispelled your spell casting speed is increased by 20% for 6 sec.",
       "Increases the critical strike damage bonus of your Lava Burst spell by an additional 24%, and when your Flame Shock is dispelled your spell casting speed is increased by 30% for 6 sec."
      ],
      "cn": "熔岩涌动",
      "cnDesc": [
       "使你的熔岩爆裂的爆击伤害加成提高6%，如果烈焰震击被驱散，则你的施法速度提高10%，持续6 秒。",
       "使你的熔岩爆裂的爆击伤害加成提高12%，如果烈焰震击被驱散，则你的施法速度提高20%，持续6 秒。",
       "使你的熔岩爆裂的爆击伤害加成提高24%，如果烈焰震击被驱散，则你的施法速度提高30%，持续6 秒。"
      ]
     },
     {
      "name": "Shamanism",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Lightning Bolt and Chain Lightning spells gain an additional 4% and your Lava Burst gains an additional 5% of your bonus damage effects.",
       "Your Lightning Bolt and Chain Lightning spells gain an additional 8% and your Lava Burst gains an additional 10% of your bonus damage effects.",
       "Your Lightning Bolt and Chain Lightning spells gain an additional 12% and your Lava Burst gains an additional 15% of your bonus damage effects.",
       "Your Lightning Bolt and Chain Lightning spells gain an additional 16% and your Lava Burst gains an additional 20% of your bonus damage effects.",
       "Your Lightning Bolt and Chain Lightning spells gain an additional 20% and your Lava Burst gains an additional 25% of your bonus damage effects."
      ],
      "cn": "萨满教义",
      "cnDesc": [
       "你的闪电箭和闪电链获得的伤害加成效果提高4%，你的熔岩爆裂获得的伤害加成效果提高5%。",
       "你的闪电箭和闪电链获得的伤害加成效果提高8%，你的熔岩爆裂获得的伤害加成效果提高10%。",
       "你的闪电箭和闪电链获得的伤害加成效果提高12%，你的熔岩爆裂获得的伤害加成效果提高15%。",
       "你的闪电箭和闪电链获得的伤害加成效果提高16%，你的熔岩爆裂获得的伤害加成效果提高20%。",
       "你的闪电箭和闪电链获得的伤害加成效果提高20%，你的熔岩爆裂获得的伤害加成效果提高25%。"
      ]
     },
     {
      "name": "Thunderstorm",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You call down a bolt of lightning, energizing you and damaging nearby enemies within 10 yards. Restores 8% mana to you and deals 551 to 629 Nature damage to all nearby enemies, knocking them back 20 yards. This spell is usable while stunned."
      ],
      "cn": "雷霆风暴",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>45 秒冷却时间</th></tr></table>你召唤一道从天而降的雷霆为你灌注能量，并攻击周围半径10码范围内的所有敌人。你恢复8%的法力值，所有被攻击的敌人受到551到629点自然伤害并被击退20码。这个法术可以在昏迷时使用。"
      ]
     }
    ],
    "sprite": "assets/sprites/shaman_elemental.webp"
   },
   {
    "name": "Enhancement",
    "cn": "增强",
    "bg": "assets/tree-bg/shaman_enhancement.jpg",
    "talents": [
     {
      "name": "Enhancing Totems",
      "row": 0,
      "col": 0,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effect of your Strength of Earth and Flametongue Totems by 5%.",
       "Increases the effect of your Strength of Earth and Flametongue Totems by 10%.",
       "Increases the effect of your Strength of Earth and Flametongue Totems by 15%."
      ],
      "cn": "强化图腾",
      "cnDesc": [
       "使你的大地之力图腾和火舌图腾的效果提高5%。",
       "使你的大地之力图腾和火舌图腾的效果提高10%。",
       "使你的大地之力图腾和火舌图腾的效果提高15%。"
      ]
     },
     {
      "name": "Earth's Grasp",
      "row": 0,
      "col": 1,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the health of your Stoneclaw Totem by 25% and the radius of your Earthbind Totem by 10%, and reduces the cooldown of both totems by 15%.",
       "Increases the health of your Stoneclaw Totem by 50% and the radius of your Earthbind Totem by 20%, and reduces the cooldown of both totems by 30%."
      ],
      "cn": "大地之握",
      "cnDesc": [
       "使你的石爪图腾的生命值提高25%，地缚图腾的影响范围增加10%，这两个图腾的冷却时间缩短15%。",
       "使你的石爪图腾的生命值提高50%，地缚图腾的影响范围增加20%，这两个图腾的冷却时间缩短30%。"
      ]
     },
     {
      "name": "Ancestral Knowledge",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Intellect by 2%.",
       "Increases your Intellect by 4%.",
       "Increases your Intellect by 6%.",
       "Increases your Intellect by 8%.",
       "Increases your Intellect by 10%."
      ],
      "cn": "先祖知识",
      "cnDesc": [
       "使你的智力值提高2%。",
       "使你的智力值提高4%。",
       "使你的智力值提高6%。",
       "使你的智力值提高8%。",
       "使你的智力值提高10%。"
      ]
     },
     {
      "name": "Guardian Totems",
      "row": 1,
      "col": 0,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount of armor increased by your Stoneskin Totem by 10% and reduces the cooldown of your Grounding Totem by 1 sec.",
       "Increases the amount of armor increased by your Stoneskin Totem by 20% and reduces the cooldown of your Grounding Totem by 2 sec."
      ],
      "cn": "守护图腾",
      "cnDesc": [
       "使你的石肤图腾提供的护甲值加成效果提高10%，根基图腾的冷却时间缩短1秒。",
       "使你的石肤图腾提供的护甲值加成效果提高20%，根基图腾的冷却时间缩短2秒。"
      ]
     },
     {
      "name": "Thundering Strikes",
      "row": 1,
      "col": 1,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Improves your chance to get a critical strike with all spells and attacks by 1%.",
       "Improves your chance to get a critical strike with all spells and attacks by 2%.",
       "Improves your chance to get a critical strike with all spells and attacks by 3%.",
       "Improves your chance to get a critical strike with all spells and attacks by 4%.",
       "Improves your chance to get a critical strike with all spells and attacks by 5%."
      ],
      "cn": "雷鸣猛击",
      "cnDesc": [
       "使你的所有法术和攻击的爆击几率提高1%。",
       "使你的所有法术和攻击的爆击几率提高2%。",
       "使你的所有法术和攻击的爆击几率提高3%。",
       "使你的所有法术和攻击的爆击几率提高4%。",
       "使你的所有法术和攻击的爆击几率提高5%。"
      ]
     },
     {
      "name": "Improved Ghost Wolf",
      "row": 1,
      "col": 2,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cast time of your Ghost Wolf spell by 1 sec.",
       "Reduces the cast time of your Ghost Wolf spell by 2 sec."
      ],
      "cn": "强化幽灵狼",
      "cnDesc": [
       "使你的幽灵狼法术的施法时间减少1秒。",
       "使你的幽灵狼法术的施法时间减少2秒。"
      ]
     },
     {
      "name": "Improved Shields",
      "row": 1,
      "col": 3,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Lightning Shield orbs by 5%, increases the amount of mana gained from your Water Shield orbs by 5% and increases the amount of healing done by your Earth Shield orbs by 5%.",
       "Increases the damage done by your Lightning Shield orbs by 10%, increases the amount of mana gained from your Water Shield orbs by 10% and increases the amount of healing done by your Earth Shield orbs by 10%.",
       "Increases the damage done by your Lightning Shield orbs by 15%, increases the amount of mana gained from your Water Shield orbs by 15% and increases the amount of healing done by your Earth Shield orbs by 15%."
      ],
      "cn": "强化护盾",
      "cnDesc": [
       "使你的闪电之盾的伤害提高5%，水之护盾恢复的法力值提高5%，大地之盾的治疗效果提高5%。",
       "使你的闪电之盾的伤害提高10%，水之护盾恢复的法力值提高10%，大地之盾的治疗效果提高10%。",
       "使你的闪电之盾的伤害提高15%，水之护盾恢复的法力值提高15%，大地之盾的治疗效果提高15%。"
      ]
     },
     {
      "name": "Elemental Weapons",
      "row": 2,
      "col": 0,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage caused by your Windfury Weapon effect by 13%  increases the spell damage on your Flametongue Weapon by 10% and increases the bonus healing on your Earthliving Weapon by 10%.",
       "Increases the damage caused by your Windfury Weapon effect by 27%  increases the spell damage on your Flametongue Weapon by 20% and increases the bonus healing on your Earthliving Weapon by 20%.",
       "Increases the damage caused by your Windfury Weapon effect by 40%  increases the spell damage on your Flametongue Weapon by 30% and increases the bonus healing on your Earthliving Weapon by 30%."
      ],
      "cn": "元素武器",
      "cnDesc": [
       "使你的风怒武器造成的伤害提高13%，火舌武器造成的法术伤害提高10%，大地生命武器的治疗效果加成提高10%。",
       "使你的风怒武器造成的伤害提高27%，火舌武器造成的法术伤害提高20%，大地生命武器的治疗效果加成提高20%。",
       "使你的风怒武器造成的伤害提高40%，火舌武器造成的法术伤害提高30%，大地生命武器的治疗效果加成提高30%。"
      ]
     },
     {
      "name": "Shamanistic Focus",
      "row": 2,
      "col": 2,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your Shock spells by 45%."
      ],
      "cn": "萨满专注",
      "cnDesc": [
       "瞬发使你的震击法术消耗的法力值减少45%。"
      ]
     },
     {
      "name": "Anticipation",
      "row": 2,
      "col": 3,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to dodge by an additional 1%, and reduces the duration of all Disarm effects used against you by 16%. This does not stack with other Disarm duration reducing effects.",
       "Increases your chance to dodge by an additional 2%, and reduces the duration of all Disarm effects used against you by 25%. This does not stack with other Disarm duration reducing effects.",
       "Increases your chance to dodge by an additional 3%, and reduces the duration of all Disarm effects used against you by 50%. This does not stack with other Disarm duration reducing effects."
      ],
      "cn": "预知",
      "cnDesc": [
       "使你的躲闪几率提高1%，受到的所有缴械效果持续时间缩短16%。这个效果不与任何其它缩短缴械持续时间的效果叠加。",
       "使你的躲闪几率提高2%，受到的所有缴械效果持续时间缩短25%。这个效果不与任何其它缩短缴械持续时间的效果叠加。",
       "使你的躲闪几率提高3%，受到的所有缴械效果持续时间缩短50%。这个效果不与任何其它缩短缴械持续时间的效果叠加。"
      ]
     },
     {
      "name": "Flurry",
      "row": 3,
      "col": 1,
      "maxRank": 5,
      "req": 15,
      "prereq": "Thundering Strikes",
      "prereqRank": 5,
      "desc": [
       "Increases your attack speed by 6% for your next 3 swings after dealing a critical strike.",
       "Increases your attack speed by 12% for your next 3 swings after dealing a critical strike.",
       "Increases your attack speed by 18% for your next 3 swings after dealing a critical strike.",
       "Increases your attack speed by 24% for your next 3 swings after dealing a critical strike.",
       "Increases your attack speed by 30% for your next 3 swings after dealing a critical strike."
      ],
      "cn": "乱舞",
      "cnDesc": [
       "在你打出爆击之后，使你的下3次近战攻击速度提高6%。",
       "在你打出爆击之后，使你的下3次近战攻击速度提高12%。",
       "在你打出爆击之后，使你的下3次近战攻击速度提高18%。",
       "在你打出爆击之后，使你的下3次近战攻击速度提高24%。",
       "在你打出爆击之后，使你的下3次近战攻击速度提高30%。"
      ]
     },
     {
      "name": "Toughness",
      "row": 3,
      "col": 2,
      "maxRank": 5,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Stamina by 2%, and reduces the duration of movement slowing effects on you by 6%.",
       "Increases your Stamina by 4%, and reduces the duration of movement slowing effects on you by 12%.",
       "Increases your Stamina by 6%, and reduces the duration of movement slowing effects on you by 18%.",
       "Increases your Stamina by 8%, and reduces the duration of movement slowing effects on you by 24%.",
       "Increases your Stamina by 10%, and reduces the duration of movement slowing effects on you by 30%."
      ],
      "cn": "坚韧",
      "cnDesc": [
       "使你的耐力值提高2%，你身上的所有移动限制效果的持续时间缩短6%。",
       "使你的耐力值提高4%，你身上的所有移动限制效果的持续时间缩短12%。",
       "使你的耐力值提高6%，你身上的所有移动限制效果的持续时间缩短18%。",
       "使你的耐力值提高8%，你身上的所有移动限制效果的持续时间缩短24%。",
       "使你的耐力值提高10%，你身上的所有移动限制效果的持续时间缩短30%。"
      ]
     },
     {
      "name": "Improved Windfury Totem",
      "row": 4,
      "col": 0,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the melee haste granted by your Windfury totem by 2%.",
       "Increases the melee haste granted by your Windfury totem by 4%."
      ],
      "cn": "强化风怒图腾",
      "cnDesc": [
       "使你的风怒图腾所提供的近战急速效果提高2%。",
       "使你的风怒图腾所提供的近战急速效果提高4%。"
      ]
     },
     {
      "name": "Spirit Weapons",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives a chance to parry enemy melee attacks and reduces all threat generated by 30%."
      ],
      "cn": "灵魂武器",
      "cnDesc": [
       "使你产生的所有威胁值降低30%，并有一定几率招架敌人的近战攻击。"
      ]
     },
     {
      "name": "Mental Dexterity",
      "row": 4,
      "col": 2,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Attack Power by 33% of your Intellect.",
       "Increases your Attack Power by 66% of your Intellect.",
       "Increases your Attack Power by 100% of your Intellect."
      ],
      "cn": "聪慧",
      "cnDesc": [
       "使你的攻击强度提高，数值相当于你的智力值的33%。",
       "使你的攻击强度提高，数值相当于你的智力值的66%。",
       "使你的攻击强度提高，数值相当于你的智力值的100%。"
      ]
     },
     {
      "name": "Unleashed Rage",
      "row": 5,
      "col": 0,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your expertise by 3, and increases all party and raid members' attack power by 4% while within 100 yards of the Shaman.",
       "Increases your expertise by 6, and increases all party and raid members' attack power by 7% while within 100 yards of the Shaman.",
       "Increases your expertise by 9, and increases all party and raid members' attack power by 10% while within 100 yards of the Shaman."
      ],
      "cn": "怒火释放",
      "cnDesc": [
       "使你的精准提高3，在你身边半径100码范围内的小队和团队成员的攻击强度提高4%。",
       "使你的精准提高6，在你身边半径100码范围内的小队和团队成员的攻击强度提高7%。",
       "使你的精准提高9，在你身边半径100码范围内的小队和团队成员的攻击强度提高10%。"
      ]
     },
     {
      "name": "Weapon Mastery",
      "row": 5,
      "col": 2,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires Daggers, Fist Weapons, One-Handed Axes, One-Handed Maces, Staves, Two-Handed Axes, Two-Handed Maces Increases the damage you deal with all weapons by 4%.",
       "Requires Daggers, Fist Weapons, One-Handed Axes, One-Handed Maces, Staves, Two-Handed Axes, Two-Handed Maces Increases the damage you deal with all weapons by 7%.",
       "Requires Daggers, Fist Weapons, One-Handed Axes, One-Handed Maces, Staves, Two-Handed Axes, Two-Handed Maces Increases the damage you deal with all weapons by 10%."
      ],
      "cn": "武器掌握",
      "cnDesc": [
       "使你的所有武器伤害提高4%。",
       "使你的所有武器伤害提高7%。",
       "使你的所有武器伤害提高10%。"
      ]
     },
     {
      "name": "Frozen Power",
      "row": 5,
      "col": 3,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Lightning Bolt, Chain Lightning, Lava Lash and Shock spells by 5% on targets afflicted by your Frostbrand Attack effect, and your Frost Shock has a 50% chance to root the target in ice for 5 sec. when used on targets at or further than 15 yards from you.",
       "Increases the damage done by your Lightning Bolt, Chain Lightning, Lava Lash and Shock spells by 10% on targets afflicted by your Frostbrand Attack effect, and your Frost Shock has a 100% chance to root the target in ice for 5 sec. when used on targets at or further than 15 yards from you."
      ],
      "cn": "冰霜之力",
      "cnDesc": [
       "使你的震击法术、闪电箭、闪电链和熔岩猛击对于受到你的冰封攻击效果影响的目标造成的伤害提高5%。当你对距离15码以外的目标施放冰霜震击时，有50%的几率使目标被冻结在冰块中，持续5 秒。",
       "使你的震击法术、闪电箭、闪电链和熔岩猛击对于受到你的冰封攻击效果影响的目标造成的伤害提高10%。当你对距离15码以外的目标施放冰霜震击时，有100%的几率使目标被冻结在冰块中，持续5 秒。"
      ]
     },
     {
      "name": "Dual Wield Specialization",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": "Dual Wield",
      "prereqRank": 1,
      "desc": [
       "Increases your chance to hit while dual wielding by an additional 2%.",
       "Increases your chance to hit while dual wielding by an additional 4%.",
       "Increases your chance to hit while dual wielding by an additional 6%."
      ],
      "cn": "双武器专精",
      "cnDesc": [
       "使你在双持时的命中几率额外提高2%。",
       "使你在双持时的命中几率额外提高4%。",
       "使你在双持时的命中几率额外提高6%。"
      ]
     },
     {
      "name": "Dual Wield",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Spirit Weapons",
      "prereqRank": 1,
      "desc": [
       "Allows one-hand and off-hand weapons to be equipped in the off-hand."
      ],
      "cn": "双武器",
      "cnDesc": [
       "允许在副手装备单手和副手武器。"
      ]
     },
     {
      "name": "Stormstrike",
      "row": 6,
      "col": 2,
      "maxRank": 1,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Instantly attack with both weapons. In addition, the next 4 sources of Nature damage dealt to the target from the Shaman are increased by 20%. Lasts 12 sec."
      ],
      "cn": "风暴打击",
      "cnDesc": [
       "立即使用两把武器攻击。另外，萨满祭司对目标造成的下4次自然伤害提高20%，持续12 秒。"
      ]
     },
     {
      "name": "Static Shock",
      "row": 7,
      "col": 0,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You have a 2% chance to hit your target with a Lightning Shield orb charge when you deal damage with melee attacks and abilities, and your Lightning Shield gains 2 additional charges.",
       "You have a 4% chance to hit your target with a Lightning Shield orb charge when you deal damage with melee attacks and abilities, and your Lightning Shield gains 4 additional charges.",
       "You have a 6% chance to hit your target with a Lightning Shield orb charge when you deal damage with melee attacks and abilities, and your Lightning Shield gains 6 additional charges."
      ],
      "cn": "静电震击",
      "cnDesc": [
       "你用近战攻击和技能造成伤害时，有2%几率用闪电之盾的宝珠击中目标，且你的闪电之盾获得2层额外充能。",
       "你用近战攻击和技能造成伤害时，有4%几率用闪电之盾的宝珠击中目标，且你的闪电之盾获得4层额外充能。",
       "你用近战攻击和技能造成伤害时，有6%几率用闪电之盾的宝珠击中目标，且你的闪电之盾获得6层额外充能。"
      ]
     },
     {
      "name": "Lava Lash",
      "row": 7,
      "col": 1,
      "maxRank": 1,
      "req": 35,
      "prereq": "Dual Wield",
      "prereqRank": 1,
      "desc": [
       "You charge your off-hand weapon with lava, instantly dealing 100% off-hand Weapon damage. Damage is increased by 25% if your off-hand weapon is enchanted with Flametongue."
      ],
      "cn": "熔岩猛击",
      "cnDesc": [
       "你用熔岩充能副手武器，立即造成100%副手武器伤害。若副手武器附有火舌，伤害提高25%。"
      ]
     },
     {
      "name": "Improved Stormstrike",
      "row": 7,
      "col": 2,
      "maxRank": 2,
      "req": 35,
      "prereq": "Stormstrike",
      "prereqRank": 1,
      "desc": [
       "When you Stormstrike, you have a 50% chance to immediately grant you 20% of your base mana.",
       "When you Stormstrike, you have a 100% chance to immediately grant you 20% of your base mana."
      ],
      "cn": "强化风暴打击",
      "cnDesc": [
       "当你施放风暴打击时，有50%几率立即恢复你20%的基础法力。",
       "当你施放风暴打击时，有100%几率立即恢复你20%的基础法力。"
      ]
     },
     {
      "name": "Mental Quickness",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your instant cast Shaman spells by 2% and increases your spell power by an amount equal to 10% of your attack power.",
       "Reduces the mana cost of your instant cast Shaman spells by 4% and increases your spell power by an amount equal to 20% of your attack power.",
       "Reduces the mana cost of your instant cast Shaman spells by 6% and increases your spell power by an amount equal to 30% of your attack power."
      ],
      "cn": "精神敏锐",
      "cnDesc": [
       "使你瞬发萨满法术的法力消耗降低2%，并使你的法术强度提高相当于你攻击强度10%的数值。",
       "使你瞬发萨满法术的法力消耗降低4%，并使你的法术强度提高相当于你攻击强度20%的数值。",
       "使你瞬发萨满法术的法力消耗降低6%，并使你的法术强度提高相当于你攻击强度30%的数值。"
      ]
     },
     {
      "name": "Shamanistic Rage",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces all damage taken by 30% and gives your successful melee attacks a chance to regenerate mana equal to 15% of your attack power. This spell is usable while stunned. Lasts 15 sec."
      ],
      "cn": "萨满之怒",
      "cnDesc": [
       "使你受到的所有伤害降低30%，并使你的近战攻击有几率恢复相当于你攻击强度15%的法力值。该法术可在被眩晕时使用。持续15秒。"
      ]
     },
     {
      "name": "Earthen Power",
      "row": 8,
      "col": 2,
      "maxRank": 2,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Earthbind Totem's pulses have a 50% chance to also remove all snare effects from you and nearby friendly targets, and your Earth Shock reduces enemy attack speed by an additional 5%.",
       "Your Earthbind Totem's pulses have a 100% chance to also remove all snare effects from you and nearby friendly targets, and your Earth Shock reduces enemy attack speed by an additional 10%."
      ],
      "cn": "土灵之力",
      "cnDesc": [
       "你的根基图腾的脉冲有50%几率同时移除你及附近友善目标的减速效果，且你的地震术使敌人攻击速度额外降低5%。",
       "你的根基图腾的脉冲有100%几率同时移除你及附近友善目标的减速效果，且你的地震术使敌人攻击速度额外降低10%。"
      ]
     },
     {
      "name": "Maelstrom Weapon",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires Daggers, Fist Weapons, One-Handed Axes, One-Handed Maces, Staves, Two-Handed Axes, Two-Handed Maces, Two-Handed Swords, Guns, Miscellaneous When you deal damage with a melee weapon, you have a chance to reduce the cast time of your next Lightning Bolt, Chain Lightning, Lesser Healing Wave, Healing Wave, Chain Heal, or Hex spell by 20%. Stacks up to 5 times. Lasts 30 sec.",
       "Requires Daggers, Fist Weapons, One-Handed Axes, One-Handed Maces, Staves, Two-Handed Axes, Two-Handed Maces, Miscellaneous When you deal damage with a melee weapon, you have a chance (higher than rank 1) to reduce the cast time of your next Lightning Bolt, Chain Lightning, Lesser Healing Wave, Healing Wave, Chain Heal, or Hex spell by 20%. Stacks up to 5 times. Lasts 30 sec.",
       "Requires Daggers, Fist Weapons, One-Handed Axes, One-Handed Maces, Staves, Two-Handed Axes, Two-Handed Maces, Two-Handed Swords, Miscellaneous When you deal damage with a melee weapon, you have a chance (higher than rank 2) to reduce the cast time of your next Lightning Bolt, Chain Lightning, Lesser Healing Wave, Healing Wave, Chain Heal, or Hex spell by 20%. Stacks up to 5 times. Lasts 30 sec.",
       "Requires Daggers, Fist Weapons, One-Handed Axes, One-Handed Maces, Staves, Two-Handed Axes, Two-Handed Maces, Miscellaneous When you deal damage with a melee weapon, you have a chance (higher than rank 3) to reduce the cast time of your next Lightning Bolt, Chain Lightning, Lesser Healing Wave, Healing Wave, Chain Heal, or Hex spell by 20%. Stacks up to 5 times. Lasts 30 sec.",
       "Requires Daggers, Fist Weapons, One-Handed Axes, One-Handed Maces, Staves, Two-Handed Axes, Two-Handed Maces, Miscellaneous When you deal damage with a melee weapon, you have a chance (higher than rank 4) to reduce the cast time of your next Lightning Bolt, Chain Lightning, Lesser Healing Wave, Healing Wave, Chain Heal, or Hex spell by 20%. Stacks up to 5 times. Lasts 30 sec."
      ],
      "cn": "漩涡武器",
      "cnDesc": [
       "需求：匕首、拳套、单手斧、单手锤、法杖、双手斧、双手锤、双手剑、枪械、杂项。当你用近战武器造成伤害时，有几率使你的下一个闪电箭、闪电链、次级治疗波、治疗波、治疗链或妖术的施法时间缩短20%。最多叠加5次。持续30秒。",
       "需求：匕首、拳套、单手斧、单手锤、法杖、双手斧、双手锤、双手剑、枪械、杂项。当你用近战武器造成伤害时，有几率（高于第1层）使你的下一个闪电箭、闪电链、次级治疗波、治疗波、治疗链或妖术的施法时间缩短20%。最多叠加5次。持续30秒。",
       "需求：匕首、拳套、单手斧、单手锤、法杖、双手斧、双手锤、双手剑、枪械、杂项。当你用近战武器造成伤害时，有几率（高于第2层）使你的下一个闪电箭、闪电链、次级治疗波、治疗波、治疗链或妖术的施法时间缩短20%。最多叠加5次。持续30秒。",
       "需求：匕首、拳套、单手斧、单手锤、法杖、双手斧、双手锤、双手剑、枪械、杂项。当你用近战武器造成伤害时，有几率（高于第3层）使你的下一个闪电箭、闪电链、次级治疗波、治疗波、治疗链或妖术的施法时间缩短20%。最多叠加5次。持续30秒。",
       "需求：匕首、拳套、单手斧、单手锤、法杖、双手斧、双手锤、双手剑、枪械、杂项。当你用近战武器造成伤害时，有几率（高于第4层）使你的下一个闪电箭、闪电链、次级治疗波、治疗波、治疗链或妖术的施法时间缩短20%。最多叠加5次。持续30秒。"
      ]
     },
     {
      "name": "Feral Spirit",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Summons two Spirit Wolves under the command of the Shaman, lasting 45 sec."
      ],
      "cn": "野性狼魂",
      "cnDesc": [
       "召唤两只幽魂之狼受萨满指挥，持续45秒。"
      ]
     }
    ],
    "sprite": "assets/sprites/shaman_enhancement.webp"
   },
   {
    "name": "Restoration",
    "cn": "恢复",
    "bg": "assets/tree-bg/shaman_restoration.jpg",
    "talents": [
     {
      "name": "Improved Healing Wave",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the casting time of your Healing Wave spell by 0.1 sec.",
       "Reduces the casting time of your Healing Wave spell by 0.2 sec.",
       "Reduces the casting time of your Healing Wave spell by 0.3 sec.",
       "Reduces the casting time of your Healing Wave spell by 0.4 sec.",
       "Reduces the casting time of your Healing Wave spell by 0.5 sec."
      ],
      "cn": "强化治疗波",
      "cnDesc": [
       "使你的治疗波施法时间缩短0.1秒。",
       "使你的治疗波施法时间缩短0.2秒。",
       "使你的治疗波施法时间缩短0.3秒。",
       "使你的治疗波施法时间缩短0.4秒。",
       "使你的治疗波施法时间缩短0.5秒。"
      ]
     },
     {
      "name": "Totemic Focus",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your totems by 5%.",
       "Reduces the mana cost of your totems by 10%.",
       "Reduces the mana cost of your totems by 15%.",
       "Reduces the mana cost of your totems by 20%.",
       "Reduces the mana cost of your totems by 25%."
      ],
      "cn": "图腾集中",
      "cnDesc": [
       "使你的图腾所消耗的法力值减少5%。",
       "使你的图腾所消耗的法力值减少10%。",
       "使你的图腾所消耗的法力值减少15%。",
       "使你的图腾所消耗的法力值减少20%。",
       "使你的图腾所消耗的法力值减少25%。"
      ]
     },
     {
      "name": "Improved Reincarnation",
      "row": 1,
      "col": 0,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Reincarnation spell by 7 min and increases the amount of health and mana recovered when reincarnating by an additional 10%.",
       "Reduces the cooldown of your Reincarnation spell by 15 min and increases the amount of health and mana recovered when reincarnating by an additional 20%."
      ],
      "cn": "强化复生",
      "cnDesc": [
       "使你的复生法术冷却时间缩短7分钟，并使复生时恢复的生命和法力额外提高10%。",
       "使你的复生法术冷却时间缩短15分钟，并使复生时恢复的生命和法力额外提高20%。"
      ]
     },
     {
      "name": "Healing Grace",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the threat generated by your healing spells by 5% and reduces the chance your helpful spells and damage over time effects will be dispelled by 10%.",
       "Reduces the threat generated by your healing spells by 10% and reduces the chance your helpful spells and damage over time effects will be dispelled by 20%.",
       "Reduces the threat generated by your healing spells by 15% and reduces the chance your helpful spells and damage over time effects will be dispelled by 30%."
      ],
      "cn": "治疗之赐",
      "cnDesc": [
       "使你治疗法术产生的威胁降低5%，并降低你的有益法术和持续伤害效果被驱散的几率10%。",
       "使你治疗法术产生的威胁降低10%，并降低你的有益法术和持续伤害效果被驱散的几率20%。",
       "使你治疗法术产生的威胁降低15%，并降低你的有益法术和持续伤害效果被驱散的几率30%。"
      ]
     },
     {
      "name": "Tidal Focus",
      "row": 1,
      "col": 2,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the mana cost of your healing spells by 1%.",
       "Reduces the mana cost of your healing spells by 2%.",
       "Reduces the mana cost of your healing spells by 3%.",
       "Reduces the mana cost of your healing spells by 4%.",
       "Reduces the mana cost of your healing spells by 5%."
      ],
      "cn": "潮汐集中",
      "cnDesc": [
       "使你的治疗法术法力消耗降低1%。",
       "使你的治疗法术法力消耗降低2%。",
       "使你的治疗法术法力消耗降低3%。",
       "使你的治疗法术法力消耗降低4%。",
       "使你的治疗法术法力消耗降低5%。"
      ]
     },
     {
      "name": "Improved Water Shield",
      "row": 2,
      "col": 0,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You have a 33% chance to instantly gain mana as if you consumed a Water Shield Orb when you gain a critical effect from your Healing Wave or Riptide spells, a 20% chance when you gain a critical effect from your Lesser Healing Wave spell, and a 10% chance when you gain a critical effect from your Chain Heal spell.",
       "You have a 66% chance to instantly gain mana as if you consumed a Water Shield Orb when you gain a critical effect from your Healing Wave or Riptide spells, a 40% chance when you gain a critical effect from your Lesser Healing Wave spell, and a 20% chance when you gain a critical effect from your Chain Heal spell.",
       "You have a 100% chance to instantly gain mana as if you consumed a Water Shield Orb when you gain a critical effect from your Healing Wave or Riptide spells, a 60% chance when you gain a critical effect from your Lesser Healing Wave spell, and a 30% chance when you gain a critical effect from your Chain Heal spell."
      ],
      "cn": "强化水之护盾",
      "cnDesc": [
       "当你从治疗波或激流法术获得暴击效果时，有33%几率立即获得相当于消耗一枚水之护盾宝珠的法力；从次级治疗波获得暴击效果时为20%几率；从治疗链获得暴击效果时为10%几率。",
       "当你从治疗波或激流法术获得暴击效果时，有66%几率立即获得相当于消耗一枚水之护盾宝珠的法力；从次级治疗波获得暴击效果时为40%几率；从治疗链获得暴击效果时为20%几率。",
       "当你从治疗波或激流法术获得暴击效果时，有100%几率立即获得相当于消耗一枚水之护盾宝珠的法力；从次级治疗波获得暴击效果时为60%几率；从治疗链获得暴击效果时为30%几率。"
      ]
     },
     {
      "name": "Healing Focus",
      "row": 2,
      "col": 1,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the pushback suffered from damaging attacks while casting any Shaman healing spell by 23%.",
       "Reduces the pushback suffered from damaging attacks while casting any Shaman healing spell by 46%.",
       "Reduces the pushback suffered from damaging attacks while casting any Shaman healing spell by 70%."
      ],
      "cn": "治疗专注",
      "cnDesc": [
       "使你在施放任意萨满祭司治疗法术时因受到伤害而承受的施法推迟时间缩短23%。",
       "使你在施放任意萨满祭司治疗法术时因受到伤害而承受的施法推迟时间缩短46%。",
       "使你在施放任意萨满祭司治疗法术时因受到伤害而承受的施法推迟时间缩短70%。"
      ]
     },
     {
      "name": "Tidal Force",
      "row": 2,
      "col": 2,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical effect chance of your Healing Wave, Lesser Healing Wave and Chain Heal by 60%. Each critical heal reduces the chance by 20%. Lasts 20 sec."
      ],
      "cn": "潮汐之力",
      "cnDesc": [
       "使你的治疗波、次级治疗波和治疗链的暴击效果几率提高60%。每次暴击治疗使其几率降低20%。持续20秒。"
      ]
     },
     {
      "name": "Ancestral Healing",
      "row": 2,
      "col": 3,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces your target's physical damage taken by 3% for 15 sec after getting a critical effect from one of your healing spells.",
       "Reduces your target's physical damage taken by 7% for 15 sec after getting a critical effect from one of your healing spells.",
       "Reduces your target's physical damage taken by 10% for 15 sec after getting a critical effect from one of your healing spells."
      ],
      "cn": "先祖治疗",
      "cnDesc": [
       "你的某个治疗法术产生暴击效果后，使目标受到物理伤害降低3%，持续15秒。",
       "你的某个治疗法术产生暴击效果后，使目标受到物理伤害降低7%，持续15秒。",
       "你的某个治疗法术产生暴击效果后，使目标受到物理伤害降低10%，持续15秒。"
      ]
     },
     {
      "name": "Restorative Totems",
      "row": 3,
      "col": 1,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effect of your Mana Spring Totem by 7%, and increases the amount healed by your Healing Stream Totem by 15%.",
       "Increases the effect of your Mana Spring Totem by 12%, and increases the amount healed by your Healing Stream Totem by 30%.",
       "Increases the effect of your Mana Spring Totem by 20%, and increases the amount healed by your Healing Stream Totem by 45%."
      ],
      "cn": "恢复图腾",
      "cnDesc": [
       "使你的法力之泉图腾的效果提高7%，治疗之泉图腾的治疗量提高15%。",
       "使你的法力之泉图腾的效果提高12%，治疗之泉图腾的治疗量提高30%。",
       "使你的法力之泉图腾的效果提高20%，治疗之泉图腾的治疗量提高45%。"
      ]
     },
     {
      "name": "Tidal Mastery",
      "row": 3,
      "col": 2,
      "maxRank": 5,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical effect chance of your healing and lightning spells by 1%.",
       "Increases the critical effect chance of your healing and lightning spells by 2%.",
       "Increases the critical effect chance of your healing and lightning spells by 3%.",
       "Increases the critical effect chance of your healing and lightning spells by 4%.",
       "Increases the critical effect chance of your healing and lightning spells by 5%."
      ],
      "cn": "潮汐掌握",
      "cnDesc": [
       "使你治疗和闪电法术的暴击效果几率提高1%。",
       "使你治疗和闪电法术的暴击效果几率提高2%。",
       "使你治疗和闪电法术的暴击效果几率提高3%。",
       "使你治疗和闪电法术的暴击效果几率提高4%。",
       "使你治疗和闪电法术的暴击效果几率提高5%。"
      ]
     },
     {
      "name": "Healing Way",
      "row": 4,
      "col": 0,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount healed by your Healing Wave spell by 8%.",
       "Increases the amount healed by your Healing Wave spell by 16%.",
       "Increases the amount healed by your Healing Wave spell by 25%."
      ],
      "cn": "治疗之道",
      "cnDesc": [
       "使你治疗波治疗量提高8%。",
       "使你治疗波治疗量提高16%。",
       "使你治疗波治疗量提高25%。"
      ]
     },
     {
      "name": "Nature's Swiftness",
      "row": 4,
      "col": 2,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When activated, your next Nature spell with a base casting time less than 10 sec. becomes an instant cast spell. Nature's Swiftness shares a cooldown with Elemental Mastery."
      ],
      "cn": "自然迅捷",
      "cnDesc": [
       "激活后，你的下一个基础施法时间小于10秒的自然系法术变为瞬发。自然迅捷与元素掌握共享冷却。"
      ]
     },
     {
      "name": "Focused Mind",
      "row": 4,
      "col": 3,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the duration of any Silence or Interrupt effects used against the Shaman by 10%. This effect does not stack with other similar effects.",
       "Reduces the duration of any Silence or Interrupt effects used against the Shaman by 20%. This effect does not stack with other similar effects.",
       "Reduces the duration of any Silence or Interrupt effects used against the Shaman by 30%. This effect does not stack with other similar effects."
      ],
      "cn": "心灵专注",
      "cnDesc": [
       "使作用于萨满的沉默或打断效果持续时间缩短10%。该效果不与其他类似效果叠加。",
       "使作用于萨满的沉默或打断效果持续时间缩短20%。该效果不与其他类似效果叠加。",
       "使作用于萨满的沉默或打断效果持续时间缩短30%。该效果不与其他类似效果叠加。"
      ]
     },
     {
      "name": "Purification",
      "row": 5,
      "col": 2,
      "maxRank": 5,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effectiveness of your healing spells by 2%.",
       "Increases the effectiveness of your healing spells by 4%.",
       "Increases the effectiveness of your healing spells by 6%.",
       "Increases the effectiveness of your healing spells by 8%.",
       "Increases the effectiveness of your healing spells by 10%."
      ],
      "cn": "净化",
      "cnDesc": [
       "使你治疗法术的效果提高2%。",
       "使你治疗法术的效果提高4%。",
       "使你治疗法术的效果提高6%。",
       "使你治疗法术的效果提高8%。",
       "使你治疗法术的效果提高10%。"
      ]
     },
     {
      "name": "Nature's Guardian",
      "row": 6,
      "col": 0,
      "maxRank": 5,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Whenever a damaging attack brings you below 30% health, your maximum health is increased by 3% for 10 sec and your threat level towards the attacker is reduced.  30 second cooldown.",
       "Whenever a damaging attack brings you below 30% health, your maximum health is increased by 6% for 10 sec and your threat level towards the attacker is reduced.  30 second cooldown.",
       "Whenever a damaging attack brings you below 30% health, your maximum health is increased by 9% for 10 sec and your threat level towards the attacker is reduced.  30 second cooldown.",
       "Whenever a damaging attack brings you below 30% health, your maximum health is increased by 12% for 10 sec and your threat level towards the attacker is reduced.  30 second cooldown.",
       "Whenever a damaging attack brings you below 30% health, your maximum health is increased by 15% for 10 sec and your threat level towards the attacker is reduced.  30 second cooldown."
      ],
      "cn": "自然的守护者",
      "cnDesc": [
       "当一次伤害性的攻击使你的生命值降低到30%以下时，你的生命值上限提高3%，持续10 秒，并降低你对该目标的威胁值。30秒冷却时间。",
       "当一次伤害性的攻击使你的生命值降低到30%以下时，你的生命值上限提高6%，持续10 秒，并降低你对该目标的威胁值。30秒冷却时间。",
       "当一次伤害性的攻击使你的生命值降低到30%以下时，你的生命值上限提高9%，持续10 秒，并降低你对该目标的威胁值。30秒冷却时间。",
       "当一次伤害性的攻击使你的生命值降低到30%以下时，你的生命值上限提高12%，持续10 秒，并降低你对该目标的威胁值。30秒冷却时间。",
       "当一次伤害性的攻击使你的生命值降低到30%以下时，你的生命值上限提高15%，持续10 秒，并降低你对该目标的威胁值。30秒冷却时间。"
      ]
     },
     {
      "name": "Mana Tide Totem",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Restorative Totems",
      "prereqRank": 3,
      "desc": [
       "Summons a Mana Tide Totem with 10% of the caster's health at the feet of the caster for 12 sec that restores 6% of total mana every 3 seconds to group members within 30 yards."
      ],
      "cn": "法力之潮图腾",
      "cnDesc": [
       "在施法者脚下召唤一个法力之潮图腾，拥有施法者10%的生命值，持续12秒，每3秒为30码内的小组成员恢复6%的总法力值。"
      ]
     },
     {
      "name": "Cleanse Spirit",
      "row": 6,
      "col": 2,
      "maxRank": 1,
      "req": 30,
      "prereq": "Purification",
      "prereqRank": 5,
      "desc": [
       "Cleanse the spirit of a friendly target, removing 1 poison effect, 1 disease effect, and 1 curse effect."
      ],
      "cn": "净化灵魂",
      "cnDesc": [
       "净化一个友方目标的灵魂，移除1个中毒效果、1个疾病效果和1个诅咒效果。"
      ]
     },
     {
      "name": "Blessing of the Eternals",
      "row": 7,
      "col": 0,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical effect chance of your spells by 2%, and increases the chance to apply the Earthliving heal over time effect on the target by 40% when they are at or under 35% total health.",
       "Increases the critical effect chance of your spells by 4%, and increases the chance to apply the Earthliving heal over time effect on the target by 80% when they are at or under 35% total health."
      ],
      "cn": "永恒祝福",
      "cnDesc": [
       "使你法术的暴击效果几率提高2%，并使目标生命值在35%或以下时施加大地之盾持续治疗效果的几率提高40%。",
       "使你法术的暴击效果几率提高4%，并使目标生命值在35%或以下时施加大地之盾持续治疗效果的几率提高80%。"
      ]
     },
     {
      "name": "Improved Chain Heal",
      "row": 7,
      "col": 1,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount healed by your Chain Heal spell by 10%.",
       "Increases the amount healed by your Chain Heal spell by 20%."
      ],
      "cn": "强化治疗链",
      "cnDesc": [
       "使你的治疗链法术所恢复的生命值提高10%。",
       "使你的治疗链法术所恢复的生命值提高20%。"
      ]
     },
     {
      "name": "Nature's Blessing",
      "row": 7,
      "col": 2,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your healing by an amount equal to 5% of your Intellect.",
       "Increases your healing by an amount equal to 10% of your Intellect.",
       "Increases your healing by an amount equal to 15% of your Intellect."
      ],
      "cn": "自然的祝福",
      "cnDesc": [
       "使你治疗量提高相当于你智力5%的数值。",
       "使你治疗量提高相当于你智力10%的数值。",
       "使你治疗量提高相当于你智力15%的数值。"
      ]
     },
     {
      "name": "Ancestral Awakening",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you critically heal with your Healing Wave, Lesser Healing Wave or Riptide you summon an Ancestral spirit to aid you, instantly healing the lowest percentage health friendly party or raid target within 40 yards for 10% of the amount healed.",
       "When you critically heal with your Healing Wave, Lesser Healing Wave or Riptide you summon an Ancestral spirit to aid you, instantly healing the lowest percentage health friendly party or raid target within 40 yards for 20% of the amount healed.",
       "When you critically heal with your Healing Wave, Lesser Healing Wave or Riptide you summon an Ancestral spirit to aid you, instantly healing the lowest percentage health friendly party or raid target within 40 yards for 30% of the amount healed."
      ],
      "cn": "先祖复苏",
      "cnDesc": [
       "当你的治疗波、次级治疗波或激流产生爆击效果时，一个先祖之魂会出现并帮助你，立即为周围半径40码范围内生命值最低的友方目标或团队成员治疗，该次治疗量相当于产生爆击效果的治疗波或次级治疗波的10%。",
       "当你的治疗波、次级治疗波或激流产生爆击效果时，一个先祖之魂会出现并帮助你，立即为周围半径40码范围内生命值最低的友方目标或团队成员治疗，该次治疗量相当于产生爆击效果的治疗波或次级治疗波的20%。",
       "当你的治疗波、次级治疗波或激流产生爆击效果时，一个先祖之魂会出现并帮助你，立即为周围半径40码范围内生命值最低的友方目标或团队成员治疗，该次治疗量相当于产生爆击效果的治疗波或次级治疗波的30%。"
      ]
     },
     {
      "name": "Earth Shield",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Protects the target with an earthen shield, reducing casting or channeling time lost when damaged by 30%  and causing attacks to heal the shielded target for 150.  This effect can only occur once every few seconds.  6 charges.  Lasts 10 min.  Earth Shield can only be placed on one target at a time and only one Elemental Shield can be active on a target at a time."
      ],
      "cn": "大地之盾",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>15% 的基础法力值</td><th>40码范围</th></tr></table>瞬发一层大地之盾保护目标，使其因受到伤害而损失的施法或引导时间缩短30%，被大地之盾保护的目标在受到攻击时可以恢复<!--sp63279:0-->150<!--sp63279-->点生命值。该效果每数秒只能出现一次，共可生效6次。大地之盾持续10 分钟，同一时间内只能给一个目标施放大地之盾，且同一时间内只能有一种元素护盾在同一目标身上生效。"
      ]
     },
     {
      "name": "Improved Earth Shield",
      "row": 8,
      "col": 2,
      "maxRank": 2,
      "req": 40,
      "prereq": "Earth Shield",
      "prereqRank": 1,
      "desc": [
       "Increases the amount of charges for your Earth Shield by 1, and increases the healing done by your Earth Shield by 5%.",
       "Increases the amount of charges for your Earth Shield by 2, and increases the healing done by your Earth Shield by 10%."
      ],
      "cn": "强化大地之盾",
      "cnDesc": [
       "使你大地之盾的充能层数提高1，并使大地之盾的治疗量提高5%。",
       "使你大地之盾的充能层数提高2，并使大地之盾的治疗量提高10%。"
      ]
     },
     {
      "name": "Tidal Waves",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you cast Chain Heal or Riptide, you have a 20% chance to lower the cast time of your Healing Wave spell by 30% and increase the critical effect chance of your Lesser Healing Wave spell by 25%, until two such spells have been cast. In addition, your Healing Wave gains an additional 4% of your bonus healing effects and your Lesser Healing Wave gains an additional 2% of your bonus healing effects.",
       "When you cast Chain Heal or Riptide, you have a 40% chance to lower the cast time of your Healing Wave spell by 30% and increase the critical effect chance of your Lesser Healing Wave spell by 25%, until two such spells have been cast. In addition, your Healing Wave gains an additional 8% of your bonus healing effects and your Lesser Healing Wave gains an additional 4% of your bonus healing effects.",
       "When you cast Chain Heal or Riptide, you have a 60% chance to lower the cast time of your Healing Wave spell by 30% and increase the critical effect chance of your Lesser Healing Wave spell by 25%, until two such spells have been cast. In addition, your Healing Wave gains an additional 12% of your bonus healing effects and your Lesser Healing Wave gains an additional 6% of your bonus healing effects.",
       "When you cast Chain Heal or Riptide, you have a 80% chance to lower the cast time of your Healing Wave spell by 30% and increase the critical effect chance of your Lesser Healing Wave spell by 25%, until two such spells have been cast. In addition, your Healing Wave gains an additional 16% of your bonus healing effects and your Lesser Healing Wave gains an additional 8% of your bonus healing effects.",
       "When you cast Chain Heal or Riptide, you have a 100% chance to lower the cast time of your Healing Wave spell by 30% and increase the critical effect chance of your Lesser Healing Wave spell by 25%, until two such spells have been cast. In addition, your Healing Wave gains an additional 20% of your bonus healing effects and your Lesser Healing Wave gains an additional 10% of your bonus healing effects."
      ],
      "cn": "潮汐之波",
      "cnDesc": [
       "当你施放治疗链或激流时，有20%几率使你的治疗波施法时间缩短30%，并使次级治疗波的暴击效果几率提高25%，直到施放两个此类法术。此外，你的治疗波额外获得你增益治疗效果的4%，次级治疗波额外获得2%。",
       "当你施放治疗链或激流时，有40%几率使你的治疗波施法时间缩短30%，并使次级治疗波的暴击效果几率提高25%，直到施放两个此类法术。此外，你的治疗波额外获得你增益治疗效果的8%，次级治疗波额外获得4%。",
       "当你施放治疗链或激流时，有60%几率使你的治疗波施法时间缩短30%，并使次级治疗波的暴击效果几率提高25%，直到施放两个此类法术。此外，你的治疗波额外获得你增益治疗效果的12%，次级治疗波额外获得6%。",
       "当你施放治疗链或激流时，有80%几率使你的治疗波施法时间缩短30%，并使次级治疗波的暴击效果几率提高25%，直到施放两个此类法术。此外，你的治疗波额外获得你增益治疗效果的16%，次级治疗波额外获得8%。",
       "当你施放治疗链或激流时，有100%几率使你的治疗波施法时间缩短30%，并使次级治疗波的暴击效果几率提高25%，直到施放两个此类法术。此外，你的治疗波额外获得你增益治疗效果的20%，次级治疗波额外获得10%。"
      ]
     },
     {
      "name": "Riptide",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Heals a friendly target for 639 to 691 and another 665 over 15 sec.  Your next Chain Heal cast on that primary target within 15 sec will consume the healing over time effect and increase the amount of the Chain Heal by 25%."
      ],
      "cn": "激流",
      "cnDesc": [
       "为一个友方单位恢复639到691点生命值，并在15 秒内继续恢复总计665点生命值。在15 秒内，你对该目标直接施放的下一个治疗链将会吞噬这个持续治疗效果，并使治疗链的效果提高25%。"
      ]
     }
    ],
    "sprite": "assets/sprites/shaman_restoration.webp"
   }
  ],
  "icon": "assets/class-icons/shaman.jpg"
 },
 {
  "id": "warlock",
  "name": "Warlock",
  "cn": "术士",
  "trees": [
   {
    "name": "Affliction",
    "cn": "痛苦",
    "bg": "assets/tree-bg/warlock_affliction.jpg",
    "talents": [
     {
      "name": "Improved Curse of Agony",
      "row": 0,
      "col": 0,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Curse of Agony by 5%.",
       "Increases the damage done by your Curse of Agony by 10%."
      ],
      "cn": "强化痛苦诅咒",
      "cnDesc": [
       "使你的痛苦诅咒的伤害提高5%。",
       "使你的痛苦诅咒的伤害提高10%。"
      ]
     },
     {
      "name": "Suppression",
      "row": 0,
      "col": 1,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to hit with spells by 1%, and reduces the mana cost of your Affliction spells by 2%.",
       "Increases your chance to hit with spells by 2%, and reduces the mana cost of your Affliction spells by 4%.",
       "Increases your chance to hit with spells by 3%, and reduces the mana cost of your Affliction spells by 6%."
      ],
      "cn": "镇压",
      "cnDesc": [
       "使你的法术命中几率提高1%，痛苦系法术的法力值消耗降低2%。",
       "使你的法术命中几率提高2%，痛苦系法术的法力值消耗降低4%。",
       "使你的法术命中几率提高3%，痛苦系法术的法力值消耗降低6%。"
      ]
     },
     {
      "name": "Improved Corruption",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Corruption by 2%, and increases the critical strike chance of your Seed of Corruption by 1%.",
       "Increases the damage done by your Corruption by 4%, and increases the critical strike chance of your Seed of Corruption by 2%.",
       "Increases the damage done by your Corruption by 6%, and increases the critical strike chance of your Seed of Corruption by 3%.",
       "Increases the damage done by your Corruption by 8%, and increases the critical strike chance of your Seed of Corruption by 4%.",
       "Increases the damage done by your Corruption by 10%, and increases the critical strike chance of your Seed of Corruption by 5%."
      ],
      "cn": "强化腐蚀术",
      "cnDesc": [
       "使你的腐蚀术造成的伤害提高2%，腐蚀之种的爆击几率提高1%。",
       "使你的腐蚀术造成的伤害提高4%，腐蚀之种的爆击几率提高2%。",
       "使你的腐蚀术造成的伤害提高6%，腐蚀之种的爆击几率提高3%。",
       "使你的腐蚀术造成的伤害提高8%，腐蚀之种的爆击几率提高4%。",
       "使你的腐蚀术造成的伤害提高10%，腐蚀之种的爆击几率提高5%。"
      ]
     },
     {
      "name": "Improved Curse of Weakness",
      "row": 1,
      "col": 0,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount of attack power reduced by your Curse of Weakness by 10%.",
       "Increases the amount of attack power reduced by your Curse of Weakness by 20%."
      ],
      "cn": "强化虚弱诅咒",
      "cnDesc": [
       "使你的虚弱诅咒提供的攻击强度削弱效果提高10%。",
       "使你的虚弱诅咒提供的攻击强度削弱效果提高20%。"
      ]
     },
     {
      "name": "Improved Drain Soul",
      "row": 1,
      "col": 1,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Returns 7% of your maximum mana if the target is killed by you while you drain its soul. In addition, your Affliction spells generate 10% less threat.",
       "Returns 15% of your maximum mana if the target is killed by you while you drain its soul. In addition, your Affliction spells generate 20% less threat."
      ],
      "cn": "强化吸取灵魂",
      "cnDesc": [
       "在目标死于你的吸取灵魂过程中时，你将获得你的法力值上限的7%。另外，你的痛苦系法术所产生的威胁值降低10%。",
       "在目标死于你的吸取灵魂过程中时，你将获得你的法力值上限的15%。另外，你的痛苦系法术所产生的威胁值降低20%。"
      ]
     },
     {
      "name": "Improved Life Tap",
      "row": 1,
      "col": 2,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount of Mana awarded by your Life Tap spell by 10%.",
       "Increases the amount of Mana awarded by your Life Tap spell by 20%."
      ],
      "cn": "强化生命分流",
      "cnDesc": [
       "使你的生命分流法术所转化的法力值提高10%。",
       "使你的生命分流法术所转化的法力值提高20%。"
      ]
     },
     {
      "name": "Soul Siphon",
      "row": 1,
      "col": 3,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount drained by your Drain Life and Drain Soul spells by an additional 3% for each of your Affliction effects on the target, up to a maximum of 9% additional effect.",
       "Increases the amount drained by your Drain Life and Drain Soul spells by an additional 6% for each of your Affliction effects on the target, up to a maximum of 18% additional effect."
      ],
      "cn": "灵魂虹吸",
      "cnDesc": [
       "目标身上每多一个由你施加的痛苦系法术效果，你的吸取生命和吸取灵魂的效果就提高3%，最多可以获得9%的效果加成。",
       "目标身上每多一个由你施加的痛苦系法术效果，你的吸取生命和吸取灵魂的效果就提高6%，最多可以获得18%的效果加成。"
      ]
     },
     {
      "name": "Improved Fear",
      "row": 2,
      "col": 0,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Causes your Fear spell to inflict a Nightmare on the target when the fear effect ends. The Nightmare effect reduces the target's movement speed by 15% for 5 sec.",
       "Causes your Fear spell to inflict a Nightmare on the target when the fear effect ends. The Nightmare effect reduces the target's movement speed by 30% for 5 sec."
      ],
      "cn": "强化恐惧",
      "cnDesc": [
       "当你的恐惧效果结束之后，为目标附加梦魇效果，使其移动速度降低15%，持续5 秒。",
       "当你的恐惧效果结束之后，为目标附加梦魇效果，使其移动速度降低30%，持续5 秒。"
      ]
     },
     {
      "name": "Fel Concentration",
      "row": 2,
      "col": 1,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the pushback suffered from damaging attacks while casting Drain Life, Drain Mana, Drain Soul, Unstable Affliction, and Haunt by 23%.",
       "Reduces the pushback suffered from damaging attacks while casting Drain Life, Drain Mana, Drain Soul, Unstable Affliction, and Haunt by 46%.",
       "Reduces the pushback suffered from damaging attacks while casting Drain Life, Drain Mana, Drain Soul, Unstable Affliction, and Haunt by 70%."
      ],
      "cn": "恶魔专注",
      "cnDesc": [
       "使你在施放或引导吸取生命、吸取法力、吸取灵魂、痛苦无常或鬼影缠身时因受到伤害而承受的施法推迟时间缩短23%。",
       "使你在施放或引导吸取生命、吸取法力、吸取灵魂、痛苦无常或鬼影缠身时因受到伤害而承受的施法推迟时间缩短46%。",
       "使你在施放或引导吸取生命、吸取法力、吸取灵魂、痛苦无常或鬼影缠身时因受到伤害而承受的施法推迟时间缩短70%。"
      ]
     },
     {
      "name": "Amplify Curse",
      "row": 2,
      "col": 2,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the global cooldown of your Curses by 0.5 sec."
      ],
      "cn": "诅咒增幅",
      "cnDesc": [
       "瞬发使你的诅咒法术的公共冷却时间缩短0.5秒。"
      ]
     },
     {
      "name": "Grim Reach",
      "row": 3,
      "col": 0,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of your Affliction spells by 10%.",
       "Increases the range of your Affliction spells by 20%."
      ],
      "cn": "无情延伸",
      "cnDesc": [
       "使你的痛苦系法术的射程延长10%。",
       "使你的痛苦系法术的射程延长20%。"
      ]
     },
     {
      "name": "Nightfall",
      "row": 3,
      "col": 1,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your Corruption and Drain Life spells a 2% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
       "Gives your Corruption and Drain Life spells a 4% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%."
      ],
      "cn": "夜幕",
      "cnDesc": [
       "使你的腐蚀术和吸取生命法术有2%的几率在对敌人造成伤害之后令你进入暗影冥思状态。暗影冥思状可以令你的下一个暗影箭法术的施法时间减少100%。",
       "使你的腐蚀术和吸取生命法术有4%的几率在对敌人造成伤害之后令你进入暗影冥思状态。暗影冥思状可以令你的下一个暗影箭法术的施法时间减少100%。"
      ]
     },
     {
      "name": "Empowered Corruption",
      "row": 3,
      "col": 3,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of your Corruption spell by an amount equal to 12% of your spell power.",
       "Increases the damage of your Corruption spell by an amount equal to 24% of your spell power.",
       "Increases the damage of your Corruption spell by an amount equal to 36% of your spell power."
      ],
      "cn": "腐蚀增效",
      "cnDesc": [
       "使你的腐蚀术所造成的伤害提高，数值相当于你的法术强度的12%。",
       "使你的腐蚀术所造成的伤害提高，数值相当于你的法术强度的24%。",
       "使你的腐蚀术所造成的伤害提高，数值相当于你的法术强度的36%。"
      ]
     },
     {
      "name": "Shadow Embrace",
      "row": 4,
      "col": 0,
      "maxRank": 5,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Shadow Bolt and Haunt spells apply the Shadow Embrace effect, increasing all shadow periodic damage dealt to the target by you by 1%, and reduces all periodic healing done to the target by 2%. Lasts for 12 sec. Stacks up to 3 times.",
       "Your Shadow Bolt and Haunt spells apply the Shadow Embrace effect, increasing all shadow periodic damage dealt to the target by you by 2%, and reduces all periodic healing done to the target by 4%. Lasts for 12 sec. Stacks up to 3 times.",
       "Your Shadow Bolt and Haunt spells apply the Shadow Embrace effect, increasing all shadow periodic damage dealt to the target by you by 3%, and reduces all periodic healing done to the target by 6%. Lasts for 12 sec. Stacks up to 3 times.",
       "Your Shadow Bolt and Haunt spells apply the Shadow Embrace effect, increasing all shadow periodic damage dealt to the target by you by 4%, and reduces all periodic healing done to the target by 8%. Lasts for 12 sec. Stacks up to 3 times.",
       "Your Shadow Bolt and Haunt spells apply the Shadow Embrace effect, increasing all shadow periodic damage dealt to the target by you by 5%, and reduces all periodic healing done to the target by 10%. Lasts for 12 sec. Stacks up to 3 times."
      ],
      "cn": "暗影之拥",
      "cnDesc": [
       "你的暗影箭和鬼影缠身法术会造成暗影之拥效果，使你对该目标造成的所有持续性暗影伤害提高1%，并使其受到的所有持续治疗效果降低2%。效果持续12 秒，可叠加最多3次。",
       "你的暗影箭和鬼影缠身法术会造成暗影之拥效果，使你对该目标造成的所有持续性暗影伤害提高2%，并使其受到的所有持续治疗效果降低4%。效果持续12 秒，可叠加最多3次。",
       "你的暗影箭和鬼影缠身法术会造成暗影之拥效果，使你对该目标造成的所有持续性暗影伤害提高3%，并使其受到的所有持续治疗效果降低6%。效果持续12 秒，可叠加最多3次。",
       "你的暗影箭和鬼影缠身法术会造成暗影之拥效果，使你对该目标造成的所有持续性暗影伤害提高4%，并使其受到的所有持续治疗效果降低8%。效果持续12 秒，可叠加最多3次。",
       "你的暗影箭和鬼影缠身法术会造成暗影之拥效果，使你对该目标造成的所有持续性暗影伤害提高5%，并使其受到的所有持续治疗效果降低10%。效果持续12 秒，可叠加最多3次。"
      ]
     },
     {
      "name": "Siphon Life",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you deal damage with your Corruption spell, you are instantly healed for 40% of the damage done. In addition, the damage done by your Corruption, Seed of Corruption and Unstable Affliction damage over time effects is increased by 5%."
      ],
      "cn": "生命虹吸",
      "cnDesc": [
       "瞬发当你的腐蚀术造成伤害时，你可以立即获得治疗，数值相当于该伤害值的<!--sp56216:0-->40<!--sp56216-->%。另外，你的腐蚀术、腐蚀之种和痛苦无常的持续伤害效果提高5%。"
      ]
     },
     {
      "name": "Curse of Exhaustion",
      "row": 4,
      "col": 2,
      "maxRank": 1,
      "req": 20,
      "prereq": "Amplify Curse",
      "prereqRank": 1,
      "desc": [
       "Reduces the target's movement speed by 30% for 12 sec. Only one Curse per Warlock can be active on any one target."
      ],
      "cn": "疲劳诅咒",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>6% 的基础法力值</td><th>30码范围</th></tr></table>瞬发使目标的速度降低30%，持续12 秒。对于一个目标，每个术士只能施加一种诅咒。"
      ]
     },
     {
      "name": "Improved Felhunter",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Felhunter regains 4% of its maximum mana each time it hits with its Shadow Bite ability and the cooldown on that ability is reduced by 2 sec. In addition, increases the effect of your Felhunter's Fel Intelligence by 5%.",
       "Your Felhunter regains 8% of its maximum mana each time it hits with its Shadow Bite ability and the cooldown on that ability is reduced by 4 sec. In addition, increases the effect of your Felhunter's Fel Intelligence by 10%."
      ],
      "cn": "强化地狱猎犬",
      "cnDesc": [
       "你的地狱猎犬的暗影撕咬技能每次命中目标，都可以恢复法力值上限的4%，暗影撕咬的冷却时间缩短2秒。此外，你的地狱猎犬的邪能智力的效果提高5%。",
       "你的地狱猎犬的暗影撕咬技能每次命中目标，都可以恢复法力值上限的8%，暗影撕咬的冷却时间缩短4秒。此外，你的地狱猎犬的邪能智力的效果提高10%。"
      ]
     },
     {
      "name": "Shadow Mastery",
      "row": 5,
      "col": 1,
      "maxRank": 5,
      "req": 25,
      "prereq": "Siphon Life",
      "prereqRank": 1,
      "desc": [
       "Increases the damage dealt or life drained by your Shadow spells and your Felhunter's Shadow Bite ability by 3%.",
       "Increases the damage dealt or life drained by your Shadow spells and your Felhunter's Shadow Bite ability by 6%.",
       "Increases the damage dealt or life drained by your Shadow spells and your Felhunter's Shadow Bite ability by 9%.",
       "Increases the damage dealt or life drained by your Shadow spells and your Felhunter's Shadow Bite ability by 12%.",
       "Increases the damage dealt or life drained by your Shadow spells and your Felhunter's Shadow Bite ability by 15%."
      ],
      "cn": "暗影掌握",
      "cnDesc": [
       "使你暗影法术的伤害或吸取的生命值提高3%，地狱猎犬的暗影撕咬技能造成的伤害也提高3%。",
       "使你暗影法术的伤害或吸取的生命值提高6%，地狱猎犬的暗影撕咬技能造成的伤害也提高6%。",
       "使你暗影法术的伤害或吸取的生命值提高9%，地狱猎犬的暗影撕咬技能造成的伤害也提高9%。",
       "使你暗影法术的伤害或吸取的生命值提高12%，地狱猎犬的暗影撕咬技能造成的伤害也提高12%。",
       "使你暗影法术的伤害或吸取的生命值提高15%，地狱猎犬的暗影撕咬技能造成的伤害也提高15%。"
      ]
     },
     {
      "name": "Eradication",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you deal damage with Corruption, you have 6% chance to increase your spell casting speed by 6% for 10 sec.",
       "When you deal damage with Corruption, you have 6% chance to increase your spell casting speed by 12% for 10 sec.",
       "When you deal damage with Corruption, you have 6% chance to increase your spell casting speed by 20% for 10 sec."
      ],
      "cn": "根除",
      "cnDesc": [
       "当你的腐蚀术造成伤害时，你有6%的几率获得施法速度提高6%的效果，持续10 秒。",
       "当你的腐蚀术造成伤害时，你有6%的几率获得施法速度提高12%的效果，持续10 秒。",
       "当你的腐蚀术造成伤害时，你有6%的几率获得施法速度提高20%的效果，持续10 秒。"
      ]
     },
     {
      "name": "Contagion",
      "row": 6,
      "col": 1,
      "maxRank": 5,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 1% and reduces the chance your helpful Affliction spells and damage over time effects will be dispelled by an additional 6%.",
       "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 2% and reduces the chance your helpful Affliction spells and damage over time effects will be dispelled by an additional 12%.",
       "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 3% and reduces the chance your helpful Affliction spells and damage over time effects will be dispelled by an additional 18%.",
       "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 4% and reduces the chance your helpful Affliction spells and damage over time effects will be dispelled by an additional 24%.",
       "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 5% and reduces the chance your helpful Affliction spells and damage over time effects will be dispelled by an additional 30%."
      ],
      "cn": "传染",
      "cnDesc": [
       "使你的痛苦诅咒、腐蚀术和腐蚀之种的伤害提高1%，你的痛苦系增益法术和持续伤害效果被驱散的几率降低6%。",
       "使你的痛苦诅咒、腐蚀术和腐蚀之种的伤害提高2%，你的痛苦系增益法术和持续伤害效果被驱散的几率降低12%。",
       "使你的痛苦诅咒、腐蚀术和腐蚀之种的伤害提高3%，你的痛苦系增益法术和持续伤害效果被驱散的几率降低18%。",
       "使你的痛苦诅咒、腐蚀术和腐蚀之种的伤害提高4%，你的痛苦系增益法术和持续伤害效果被驱散的几率降低24%。",
       "使你的痛苦诅咒、腐蚀术和腐蚀之种的伤害提高5%，你的痛苦系增益法术和持续伤害效果被驱散的几率降低30%。"
      ]
     },
     {
      "name": "Dark Pact",
      "row": 6,
      "col": 2,
      "maxRank": 1,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Drains 305 of your summoned demon's Mana, returning 100% to you."
      ],
      "cn": "黑暗契约",
      "cnDesc": [
       "100码范围<br />瞬发从你的宠物身上抽取305点法力值，并将其完全转化给你。"
      ]
     },
     {
      "name": "Improved Howl of Terror",
      "row": 7,
      "col": 0,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the casting time of your Howl of Terror spell by 0.8 sec.",
       "Reduces the casting time of your Howl of Terror spell by 1.5 sec."
      ],
      "cn": "强化恐惧嚎叫",
      "cnDesc": [
       "使你的恐惧嚎叫法术的施法时间缩短0.8秒。",
       "使你的恐惧嚎叫法术的施法时间缩短1.5秒。"
      ]
     },
     {
      "name": "Malediction",
      "row": 7,
      "col": 2,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your spell damage by 1%, and increases the periodic critical strike chance of your Corruption and Unstable Affliction spells by 3%.",
       "Increases your spell damage by 2%, and increases the periodic critical strike chance of your Corruption and Unstable Affliction spells by 6%.",
       "Increases your spell damage by 3%, and increases the periodic critical strike chance of your Corruption and Unstable Affliction spells by 9%."
      ],
      "cn": "邪咒",
      "cnDesc": [
       "使你的法术伤害提高1%，你的腐蚀术和痛苦无常的持续伤害爆击几率提高3%。",
       "使你的法术伤害提高2%，你的腐蚀术和痛苦无常的持续伤害爆击几率提高6%。",
       "使你的法术伤害提高3%，你的腐蚀术和痛苦无常的持续伤害爆击几率提高9%。"
      ]
     },
     {
      "name": "Death's Embrace",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount drained by your Drain Life by 10% while your health is at or below 20% health, and increases the damage done by your Shadow spells by 4% when your target is at or below 35% health.",
       "Increases the amount drained by your Drain Life by 20% while your health is at or below 20% health, and increases the damage done by your Shadow spells by 8% when your target is at or below 35% health.",
       "Increases the amount drained by your Drain Life by 30% while your health is at or below 20% health, and increases the damage done by your Shadow spells by 12% when your target is at or below 35% health."
      ],
      "cn": "死亡之拥",
      "cnDesc": [
       "当你的生命值不高于20%的时候，你的吸取生命法术所吸取的生命值提高10%；当你的目标的生命值不高于35%的时候，你的暗影系法术的伤害提高4%。",
       "当你的生命值不高于20%的时候，你的吸取生命法术所吸取的生命值提高20%；当你的目标的生命值不高于35%的时候，你的暗影系法术的伤害提高8%。",
       "当你的生命值不高于20%的时候，你的吸取生命法术所吸取的生命值提高30%；当你的目标的生命值不高于35%的时候，你的暗影系法术的伤害提高12%。"
      ]
     },
     {
      "name": "Unstable Affliction",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": "Contagion",
      "prereqRank": 5,
      "desc": [
       "Shadow energy slowly destroys the target, causing 550 damage over 15 sec. In addition, if the Unstable Affliction is dispelled it will cause 990 damage to the dispeller and silence them for 5 sec. Only one Unstable Affliction or Immolate per Warlock can be active on any one target."
      ],
      "cn": "痛苦无常",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>15% 的基础法力值</td><th>30码范围</th></tr></table>1.5秒施法时间暗影能量逐渐吞噬目标，在15 秒内对其造成总计550点伤害。如果这个效果被驱散，则它对驱散者造成990点伤害，并令其沉默5 秒。对于一个目标，每个术士只能施加痛苦无常和献祭中的一种。"
      ]
     },
     {
      "name": "Pandemic",
      "row": 8,
      "col": 2,
      "maxRank": 1,
      "req": 40,
      "prereq": "Unstable Affliction",
      "prereqRank": 1,
      "desc": [
       "Grants the periodic damage from your Corruption and Unstable Affliction spells the ability to critically hit for 100% increased damage, and increases the critical strike damage bonus of your Haunt spell by 100%."
      ],
      "cn": "疫病肆虐",
      "cnDesc": [
       "使你的腐蚀术或痛苦无常的持续伤害可以爆击，造成100%的额外伤害，鬼影缠身法术的爆击伤害加成提高100%。"
      ]
     },
     {
      "name": "Everşasting Affliction",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Corruption and Unstable Affliction spells gain an additional 1% of your bonus spell damage, and your Drain Life, Drain Soul, Shadow Bolt, and Haunt spells have a 20% chance to reset the duration of your Corruption spell on the target.",
       "Your Corruption and Unstable Affliction spells gain an additional 2% of your bonus spell damage, and your Drain Life, Drain Soul, Shadow Bolt, and Haunt spells have a 40% chance to reset the duration of your Corruption spell on the target.",
       "Your Corruption and Unstable Affliction spells gain an additional 3% of your bonus spell damage, and your Drain Life, Drain Soul, Shadow Bolt, and Haunt spells have a 60% chance to reset the duration of your Corruption spell on the target.",
       "Your Corruption and Unstable Affliction spells gain an additional 4% of your bonus spell damage, and your Drain Life, Drain Soul, Shadow Bolt, and Haunt spells have a 80% chance to reset the duration of your Corruption spell on the target.",
       "Your Corruption and Unstable Affliction spells gain an additional 5% of your bonus spell damage, and your Drain Life, Drain Soul, Shadow Bolt, and Haunt spells have a 100% chance to reset the duration of your Corruption spell on the target."
      ],
      "cn": "持久痛苦",
      "cnDesc": [
       "你的腐蚀术和痛苦无常受到的法术伤害加成提高1%，你的吸取生命、吸取灵魂、暗影箭和鬼影缠身有20%的几率令你施放在目标身上的腐蚀术的持续时间重置。",
       "你的腐蚀术和痛苦无常受到的法术伤害加成提高2%，你的吸取生命、吸取灵魂、暗影箭和鬼影缠身有40%的几率令你施放在目标身上的腐蚀术的持续时间重置。",
       "你的腐蚀术和痛苦无常受到的法术伤害加成提高3%，你的吸取生命、吸取灵魂、暗影箭和鬼影缠身有60%的几率令你施放在目标身上的腐蚀术的持续时间重置。",
       "你的腐蚀术和痛苦无常受到的法术伤害加成提高4%，你的吸取生命、吸取灵魂、暗影箭和鬼影缠身有80%的几率令你施放在目标身上的腐蚀术的持续时间重置。",
       "你的腐蚀术和痛苦无常受到的法术伤害加成提高5%，你的吸取生命、吸取灵魂、暗影箭和鬼影缠身有100%的几率令你施放在目标身上的腐蚀术的持续时间重置。"
      ]
     },
     {
      "name": "Haunt",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You send a ghostly soul into the target, dealing 405 to 473 Shadow damage and increasing all damage done by your Shadow damage-over-time effects on the target by 20% for 12 sec. When the Haunt spell ends or is dispelled, the soul returns to you, healing you for 100% of the damage it did to the target."
      ],
      "cn": "鬼影缠身",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>12% 的基础法力值</td><th>30码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>1.5秒施法时间</td><th>8 秒冷却时间</th></tr></table>你将鬼魅之魂注入目标体内，造成405到473点暗影伤害，并使你对该目标施放的所有暗影系持续伤害法术造成的伤害提高20%，持续12 秒。鬼影缠身效果结束或被驱散之后，鬼魅之魂会回到你身边，为你恢复生命值，数值相当于目标受到的伤害值的100%。"
      ]
     }
    ],
    "sprite": "assets/sprites/warlock_affliction.webp"
   },
   {
    "name": "Demonology",
    "cn": "恶魔学识",
    "bg": "assets/tree-bg/warlock_demonology.jpg",
    "talents": [
     {
      "name": "Improved Healthstone",
      "row": 0,
      "col": 0,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount of Health restored by your Healthstone by 10%.",
       "Increases the amount of Health restored by your Healthstone by 20%."
      ],
      "cn": "强化治疗石",
      "cnDesc": [
       "使你的治疗石所恢复的生命值增加10%。",
       "使你的治疗石所恢复的生命值增加20%。"
      ]
     },
     {
      "name": "Improved Imp",
      "row": 0,
      "col": 1,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 10%.",
       "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 20%.",
       "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 30%."
      ],
      "cn": "强化小鬼",
      "cnDesc": [
       "使小鬼的火焰箭、火焰之盾和血之契印的效果提高10%。",
       "使小鬼的火焰箭、火焰之盾和血之契印的效果提高20%。",
       "使小鬼的火焰箭、火焰之盾和血之契印的效果提高30%。"
      ]
     },
     {
      "name": "Demonic Embrace",
      "row": 0,
      "col": 2,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Stamina by 4%.",
       "Increases your total Stamina by 7%.",
       "Increases your total Stamina by 10%."
      ],
      "cn": "恶魔之拥",
      "cnDesc": [
       "使你的耐力总值提高4%。",
       "使你的耐力总值提高7%。",
       "使你的耐力总值提高10%。"
      ]
     },
     {
      "name": "Fel Synergy",
      "row": 0,
      "col": 3,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You have a 50% chance to heal your pet for 15% of the amount of spell damage done by you.",
       "You have a 100% chance to heal your pet for 15% of the amount of spell damage done by you."
      ],
      "cn": "邪能共效",
      "cnDesc": [
       "你的法术造成伤害之后，你有50%的几率为你的宠物恢复生命值，数值相当于该伤害值的15%。",
       "你的法术造成伤害之后，你有100%的几率为你的宠物恢复生命值，数值相当于该伤害值的15%。"
      ]
     },
     {
      "name": "Improved Health Funnel",
      "row": 1,
      "col": 0,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount of Health transferred by your Health Funnel spell by 10% and reduces the health cost by 10%. In addition, your summoned Demon takes 15% less damage while under the effect of your Health Funnel.",
       "Increases the amount of Health transferred by your Health Funnel spell by 20% and reduces the health cost by 20%. In addition, your summoned Demon takes 30% less damage while under the effect of your Health Funnel."
      ],
      "cn": "强化生命通道",
      "cnDesc": [
       "使你的生命通道法术所转化的生命值提高10%，初始生命值消耗减少10%。另外，处于你的生命通道法术影响下的恶魔受到的伤害降低15%。",
       "使你的生命通道法术所转化的生命值提高20%，初始生命值消耗减少20%。另外，处于你的生命通道法术影响下的恶魔受到的伤害降低30%。"
      ]
     },
     {
      "name": "Demonic Brutality",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 10%, and increases the attack power bonus on your Felguard's Demonic Frenzy effect by 1%.",
       "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 20%, and increases the attack power bonus on your Felguard's Demonic Frenzy effect by 2%.",
       "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 30%, and increases the attack power bonus on your Felguard's Demonic Frenzy effect by 3%."
      ],
      "cn": "恶魔蛮力",
      "cnDesc": [
       "使你的虚空行者的折磨、吞噬暗影、牺牲和受难法术的效果提高10%，恶魔卫士的恶魔狂暴技能的攻击强度加成效果提高1%。",
       "使你的虚空行者的折磨、吞噬暗影、牺牲和受难法术的效果提高20%，恶魔卫士的恶魔狂暴技能的攻击强度加成效果提高2%。",
       "使你的虚空行者的折磨、吞噬暗影、牺牲和受难法术的效果提高30%，恶魔卫士的恶魔狂暴技能的攻击强度加成效果提高3%。"
      ]
     },
     {
      "name": "Fel Vitality",
      "row": 1,
      "col": 2,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the Stamina and Intellect of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 5% and increases your maximum health and mana by 1%.",
       "Increases the Stamina and Intellect of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 10% and increases your maximum health and mana by 2%.",
       "Increases the Stamina and Intellect of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 15% and increases your maximum health and mana by 3%."
      ],
      "cn": "邪能活力",
      "cnDesc": [
       "使你的小鬼、虚空行者、魅魔、地狱猎犬和恶魔卫士的耐力和智力提高5%，你的生命值和法力值上限提高1%。",
       "使你的小鬼、虚空行者、魅魔、地狱猎犬和恶魔卫士的耐力和智力提高10%，你的生命值和法力值上限提高2%。",
       "使你的小鬼、虚空行者、魅魔、地狱猎犬和恶魔卫士的耐力和智力提高15%，你的生命值和法力值上限提高3%。"
      ]
     },
     {
      "name": "Improved Scubbus",
      "row": 2,
      "col": 0,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cast time of your Succubus' Seduction by 22%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 10%.",
       "Reduces the cast time of your Succubus' Seduction by 44%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 20%.",
       "Reduces the cast time of your Succubus' Seduction by 66%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 30%."
      ],
      "cn": "强化魅魔",
      "cnDesc": [
       "使你的魅魔的诱惑技能的施法时间缩短22%，并使你的魅魔的诱惑和次级隐形术的持续时间延长10%。",
       "使你的魅魔的诱惑技能的施法时间缩短44%，并使你的魅魔的诱惑和次级隐形术的持续时间延长20%。",
       "使你的魅魔的诱惑技能的施法时间缩短66%，并使你的魅魔的诱惑和次级隐形术的持续时间延长30%。"
      ]
     },
     {
      "name": "Soul Link",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When active, 20% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, Felhunter, Felguard, or enslaved demon instead. That damage cannot be prevented. Lasts as long as the demon is active and controlled."
      ],
      "cn": "灵魂链接",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>16% 的基础法力值</td><th>100码范围</th></tr></table>瞬发激活之后，施法者所承受的伤害有20%被&lt;他/她&gt;的小鬼、虚空行者、魅魔、地狱猎犬、恶魔卫士或者奴役的恶魔分担。该伤害无法避免。只要恶魔保持激活状态，该效果就一直持续。"
      ]
     },
     {
      "name": "Fel Domination",
      "row": 2,
      "col": 2,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your next Imp, Voidwalker, Succubus, Felhunter or Felguard Summon spell has its casting time reduced by 5.5 sec and its Mana cost reduced by 50%."
      ],
      "cn": "恶魔支配",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>你的下一个召唤小鬼、虚空行者、魅魔、地狱猎犬或恶魔卫士的法术施法时间减少5.5秒，法力消耗减少50%。"
      ]
     },
     {
      "name": "Demonic Aegis",
      "row": 2,
      "col": 3,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the effectiveness of your Demon Armor and Fel Armor spells by 10%.",
       "Increases the effectiveness of your Demon Armor and Fel Armor spells by 20%.",
       "Increases the effectiveness of your Demon Armor and Fel Armor spells by 30%."
      ],
      "cn": "恶魔庇护",
      "cnDesc": [
       "使你的魔甲术和邪甲术的效果提高10%。",
       "使你的魔甲术和邪甲术的效果提高20%。",
       "使你的魔甲术和邪甲术的效果提高30%。"
      ]
     },
     {
      "name": "Unholy Power",
      "row": 3,
      "col": 1,
      "maxRank": 5,
      "req": 15,
      "prereq": "Soul Link",
      "prereqRank": 1,
      "desc": [
       "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 4%.",
       "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 8%.",
       "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 12%.",
       "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 16%.",
       "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 20%."
      ],
      "cn": "邪恶强化",
      "cnDesc": [
       "使你的虚空行者、魅魔、地狱猎犬和恶魔卫士的近战伤害及小鬼的火焰箭伤害提高4%。",
       "使你的虚空行者、魅魔、地狱猎犬和恶魔卫士的近战伤害及小鬼的火焰箭伤害提高8%。",
       "使你的虚空行者、魅魔、地狱猎犬和恶魔卫士的近战伤害及小鬼的火焰箭伤害提高12%。",
       "使你的虚空行者、魅魔、地狱猎犬和恶魔卫士的近战伤害及小鬼的火焰箭伤害提高16%。",
       "使你的虚空行者、魅魔、地狱猎犬和恶魔卫士的近战伤害及小鬼的火焰箭伤害提高20%。"
      ]
     },
     {
      "name": "Master Summoner",
      "row": 3,
      "col": 2,
      "maxRank": 2,
      "req": 15,
      "prereq": "Fel Domination",
      "prereqRank": 1,
      "desc": [
       "Reduces the casting time of your Imp, Voidwalker, Succubus, Felhunter and Fel Guard Summoning spells by 2 sec and the Mana cost by 20%.",
       "Reduces the casting time of your Imp, Voidwalker, Succubus, Felhunter and Fel Guard Summoning spells by 4 sec and the Mana cost by 40%."
      ],
      "cn": "召唤大师",
      "cnDesc": [
       "使你召唤小鬼、虚空行者、魅魔、地狱猎犬和恶魔卫士的施法时间缩短2秒，法力值消耗降低20%。",
       "使你召唤小鬼、虚空行者、魅魔、地狱猎犬和恶魔卫士的施法时间缩短4秒，法力值消耗降低40%。"
      ]
     },
     {
      "name": "Mana Feed",
      "row": 4,
      "col": 0,
      "maxRank": 1,
      "req": 20,
      "prereq": "Unholy Power",
      "prereqRank": 5,
      "desc": [
       "When you gain mana from Drain Mana or Life Tap spells, your summoned demon gains 100% of the mana you gain."
      ],
      "cn": "法力喂食",
      "cnDesc": [
       "瞬发当你因法力吸取或生命分流而获得法力值时，你的宠物也可以获得法力值，数值相当于你所获法力值的100%。"
      ]
     },
     {
      "name": "Master Conjuror",
      "row": 4,
      "col": 2,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the combat ratings gained from your conjured Firestone and Spellstone by 150%.",
       "Increases the combat ratings gained from your conjured Firestone and Spellstone by 300%."
      ],
      "cn": "魔石大师",
      "cnDesc": [
       "使你的火焰石和法术石提供的战斗等级加成效果提高150%。",
       "使你的火焰石和法术石提供的战斗等级加成效果提高300%。"
      ]
     },
     {
      "name": "Master Demonologist",
      "row": 5,
      "col": 1,
      "maxRank": 5,
      "req": 25,
      "prereq": "Unholy Power",
      "prereqRank": 5,
      "desc": [
       "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases your Fire damage by 1%, and increases the critical effect chance of your Fire spells by 1%.\n\nVoidwalker - Reduces Physical damage taken by 2%.\n\nSuccubus - Increases your Shadow damage by 1%, and increases the critical effect chance of your Shadow spells by 1%.\n\nFelhunter - Reduces all spell damage taken by 2%.\n\nFelguard - Increases all damage done by 1%, and reduces all damage taken by 1%.",
       "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases your Fire damage by 2%, and increases the critical effect chance of your Fire spells by 2%.\n\nVoidwalker - Reduces Physical damage taken by 4%.\n\nSuccubus - Increases your Shadow damage by 2%, and increases the critical effect chance of your Shadow spells by 2%.\n\nFelhunter - Reduces all spell damage taken by 4%.\n\nFelguard - Increases all damage done by 2%, and reduces all damage taken by 2%.",
       "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases your Fire damage by 3%, and increases the critical effect chance of your Fire spells by 3%.\n\nVoidwalker - Reduces Physical damage taken by 6%.\n\nSuccubus - Increases your Shadow damage by 3%, and increases the critical effect chance of your Shadow spells by 3%.\n\nFelhunter - Reduces all spell damage taken by 6%.\n\nFelguard - Increases all damage done by 3%, and reduces all damage taken by 3%.",
       "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases your Fire damage by 4%, and increases the critical effect chance of your Fire spells by 4%.\n\nVoidwalker - Reduces Physical damage taken by 8%.\n\nSuccubus - Increases your Shadow damage by 4%, and increases the critical effect chance of your Shadow spells by 4%.\n\nFelhunter - Reduces all spell damage taken by 8%.\n\nFelguard - Increases all damage done by 4%, and reduces all damage taken by 4%.",
       "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases your Fire damage by 5%, and increases the critical effect chance of your Fire spells by 5%.\n\nVoidwalker - Reduces Physical damage taken by 10%.\n\nSuccubus - Increases your Shadow damage by 5%, and increases the critical effect chance of your Shadow spells by 5%.\n\nFelhunter - Reduces all spell damage taken by 10%.\n\nFelguard - Increases all damage done by 5%, and reduces all damage taken by 5%."
      ],
      "cn": "恶魔学识大师",
      "cnDesc": [
       "使术士和&lt;他/她&gt;所召唤的恶魔均获得一个特殊效果，只要该恶魔处于激活状态就不会消失。<br /><br />小鬼 - 使你的火焰伤害提高1%，你的火焰法术的爆击几率提高1%。<br /><br />虚空行者 - 受到物理攻击时承受的伤害降低2%。<br /><br />魅魔 - 使你的暗影伤害提高1%，你的暗影法术的爆击几率提高1%。<br /><br />地狱猎犬 - 受到的所有法术伤害降低2%。<br /><br />恶魔卫士 - 造成的所有伤害提高1%，受到的所有伤害降低1%。",
       "使术士和&lt;他/她&gt;所召唤的恶魔均获得一个特殊效果，只要该恶魔处于激活状态就不会消失。<br /><br />小鬼 - 使你的火焰伤害提高2%，你的火焰法术的爆击几率提高2%。<br /><br />虚空行者 - 受到物理攻击时承受的伤害降低4%。<br /><br />魅魔 - 使你的暗影伤害提高2%，你的暗影法术的爆击几率提高2%。<br /><br />地狱猎犬 - 受到的所有法术伤害降低4%。<br /><br />恶魔卫士 - 造成的所有伤害提高2%，受到的所有伤害降低2%。",
       "使术士和&lt;他/她&gt;所召唤的恶魔均获得一个特殊效果，只要该恶魔处于激活状态就不会消失。<br /><br />小鬼 - 使你的火焰伤害提高3%，你的火焰法术的爆击几率提高3%。<br /><br />虚空行者 - 受到物理攻击时承受的伤害降低6%。<br /><br />魅魔 - 使你的暗影伤害提高3%，你的暗影法术的爆击几率提高3%。<br /><br />地狱猎犬 - 受到的所有法术伤害降低6%。<br /><br />恶魔卫士 - 造成的所有伤害提高3%，受到的所有伤害降低3%。",
       "使术士和&lt;他/她&gt;所召唤的恶魔均获得一个特殊效果，只要该恶魔处于激活状态就不会消失。<br /><br />小鬼 - 使你的火焰伤害提高4%，你的火焰法术的爆击几率提高4%。<br /><br />虚空行者 - 受到物理攻击时承受的伤害降低8%。<br /><br />魅魔 - 使你的暗影伤害提高4%，你的暗影法术的爆击几率提高4%。<br /><br />地狱猎犬 - 受到的所有法术伤害降低8%。<br /><br />恶魔卫士 - 造成的所有伤害提高4%，受到的所有伤害降低4%。",
       "使术士和&lt;他/她&gt;所召唤的恶魔均获得一个特殊效果，只要该恶魔处于激活状态就不会消失。<br /><br />小鬼 - 使你的火焰伤害提高5%，你的火焰法术的爆击几率提高5%。<br /><br />虚空行者 - 受到物理攻击时承受的伤害降低10%。<br /><br />魅魔 - 使你的暗影伤害提高5%，你的暗影法术的爆击几率提高5%。<br /><br />地狱猎犬 - 受到的所有法术伤害降低10%。<br /><br />恶魔卫士 - 造成的所有伤害提高5%，受到的所有伤害降低5%。"
      ]
     },
     {
      "name": "Molten Core",
      "row": 5,
      "col": 2,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the duration of your Immolate by 3 sec, and you have a 4% chance to gain the Molten Core effect when your Corruption deals damage. The Molten Core effect empowers your next 3 Incinerate or Soul Fire spells cast within 15 sec.\n\nIncinerate - Increases damage done by 6% and reduces cast time by 10%.\n\nSoul Fire - Increases damage done by 6% and increases critical strike chance by 5%.",
       "Increases the duration of your Immolate by 6 sec, and you have a 8% chance to gain the Molten Core effect when your Corruption deals damage. The Molten Core effect empowers your next 3 Incinerate or Soul Fire spells cast within 15 sec.\n\nIncinerate - Increases damage done by 12% and reduces cast time by 20%.\n\nSoul Fire - Increases damage done by 12% and increases critical strike chance by 10%.",
       "Increases the duration of your Immolate by 9 sec, and you have a 12% chance to gain the Molten Core effect when your Corruption deals damage. The Molten Core effect empowers your next 3 Incinerate or Soul Fire spells cast within 15 sec.\n\nIncinerate - Increases damage done by 18% and reduces cast time by 30%.\n\nSoul Fire - Increases damage done by 18% and increases critical strike chance by 15%."
      ],
      "cn": "熔火之心",
      "cnDesc": [
       "使你献祭法术的持续时间延长3秒，当你腐蚀术造成伤害时，你有4%的几率获得熔火之心的效果。熔火之心效果使你在15 秒内施放的3个烧尽或灵魂之火法术变得更有威力。<br /><br />烧尽：使你所造成的伤害提高6%，施法时间缩短10%。<br /><br />灵魂之火：使你所造成的伤害提高6%，爆击几率提高5%。",
       "使你献祭法术的持续时间延长6秒，当你腐蚀术造成伤害时，你有8%的几率获得熔火之心的效果。熔火之心效果使你在15 秒内施放的3个烧尽或灵魂之火法术变得更有威力。<br /><br />烧尽：使你所造成的伤害提高12%，施法时间缩短20%。<br /><br />灵魂之火：使你所造成的伤害提高12%，爆击几率提高10%。",
       "使你献祭法术的持续时间延长9秒，当你腐蚀术造成伤害时，你有12%的几率获得熔火之心的效果。熔火之心效果使你在15 秒内施放的3个烧尽或灵魂之火法术变得更有威力。<br /><br />烧尽：使你所造成的伤害提高18%，施法时间缩短30%。<br /><br />灵魂之火：使你所造成的伤害提高18%，爆击几率提高15%。"
      ]
     },
     {
      "name": "Demonic Resilience",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the chance you'll be critically hit by melee and spells by 1% and reduces all damage your summoned demon takes by 5%.",
       "Reduces the chance you'll be critically hit by melee and spells by 2% and reduces all damage your summoned demon takes by 10%.",
       "Reduces the chance you'll be critically hit by melee and spells by 3% and reduces all damage your summoned demon takes by 15%."
      ],
      "cn": "恶魔韧性",
      "cnDesc": [
       "使你受到近战和法术爆击的几率降低1%，你所召唤的恶魔受到的所有伤害降低5%。",
       "使你受到近战和法术爆击的几率降低2%，你所召唤的恶魔受到的所有伤害降低10%。",
       "使你受到近战和法术爆击的几率降低3%，你所召唤的恶魔受到的所有伤害降低15%。"
      ]
     },
     {
      "name": "Demonic Empowerment",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Master Demonologist",
      "prereqRank": 5,
      "desc": [
       "Grants the Warlock's summoned demon Empowerment.\n\nImp - Increases the Imp's spell critical strike chance by 20% for 30 sec.\n\nVoidwalker - Increases the Voidwalker's health by 20%, and its threat generated from spells and attacks by 20% for 20 sec.\n\nSuccubus - Instantly vanishes, causing the Succubus to go into an improved Invisibility state. The vanish effect removes all stuns, snares and movement impairing effects from the Succubus.\n\nFelhunter - Dispels all magical effects from the Felhunter.\n\nFelguard - Increases the Felguard's attack speed by 20% and breaks all stun, snare and movement impairing effects and makes your Felguard immune to them for 15 sec."
      ],
      "cn": "恶魔增效",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>6% 的基础法力值</td><th>100码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>1 分钟冷却时间</th></tr></table>使术士召唤的恶魔获得增效。<br /><br />小鬼 - 使小鬼的法术爆击几率提高20%，持续30 秒。<br /><br />虚空行者 - 使虚空行者的生命值提高20%，并使其通过法术和技能产生的威胁值提高20%，持续20 秒。<br /><br />魅魔 - 立即消失，使魅魔进入强化隐形状态，移除魅魔身上的所有昏迷、诱捕和移动限制效果。<br /><br />地狱猎犬 - 驱散地狱猎犬身上的所有魔法效果。<br /><br />恶魔卫士 - 使恶魔卫士的攻击速度提高20%，移除所有昏迷、诱捕和移动限制效果，并使恶魔卫士对这些效果免疫，持续15 秒。"
      ]
     },
     {
      "name": "Demonic Knowledge",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your spell damage by an amount equal to 4% of the total of your active demon's Stamina plus Intellect.",
       "Increases your spell damage by an amount equal to 8% of the total of your active demon's Stamina plus Intellect.",
       "Increases your spell damage by an amount equal to 12% of the total of your active demon's Stamina plus Intellect."
      ],
      "cn": "恶魔知识",
      "cnDesc": [
       "使你的法术伤害提高，数值相当于你所激活的恶魔宠物的耐力值与智力值总合的4%。",
       "使你的法术伤害提高，数值相当于你所激活的恶魔宠物的耐力值与智力值总合的8%。",
       "使你的法术伤害提高，数值相当于你所激活的恶魔宠物的耐力值与智力值总合的12%。"
      ]
     },
     {
      "name": "Demonic Tactics",
      "row": 7,
      "col": 1,
      "maxRank": 5,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases melee and spell critical strike chance for you and your summoned demon by 2%.",
       "Increases melee and spell critical strike chance for you and your summoned demon by 4%.",
       "Increases melee and spell critical strike chance for you and your summoned demon by 6%.",
       "Increases melee and spell critical strike chance for you and your summoned demon by 8%.",
       "Increases melee and spell critical strike chance for you and your summoned demon by 10%."
      ],
      "cn": "恶魔战术",
      "cnDesc": [
       "使你和你所召唤的恶魔宠物的近战和法术爆击几率提高2%。",
       "使你和你所召唤的恶魔宠物的近战和法术爆击几率提高4%。",
       "使你和你所召唤的恶魔宠物的近战和法术爆击几率提高6%。",
       "使你和你所召唤的恶魔宠物的近战和法术爆击几率提高8%。",
       "使你和你所召唤的恶魔宠物的近战和法术爆击几率提高10%。"
      ]
     },
     {
      "name": "Decimation",
      "row": 7,
      "col": 2,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you Shadowbolt, Incinerate or Soul Fire a target that is at or below 35% health, the cast time of Soul Fire spell is reduced by 20% for 10 sec. Soul Fires cast under the effect of Decimation cost no shard.",
       "When you Shadowbolt, Incinerate or Soul Fire a target that is at or below 35% health, the cast time of your Soul Fire spell is reduced by 40% for 10 sec. Soul Fires cast under the effect of Decimation cost no shard."
      ],
      "cn": "灭杀",
      "cnDesc": [
       "当你对一个生命值不高于35%的目标施放暗影箭或烧尽之后，你的下一个灵魂之火的施法时间缩短20%，持续10 秒。在灭杀效果下施放的灵魂之火不消耗灵魂碎片。",
       "当你对一个生命值不高于35%的目标施放暗影箭或烧尽之后，你的下一个灵魂之火的施法时间缩短40%，持续10 秒。在灭杀效果下施放的灵魂之火不消耗灵魂碎片。"
      ]
     },
     {
      "name": "Improved Demonic Tactics",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": "Demonic Tactics",
      "prereqRank": 5,
      "desc": [
       "Increases your summoned demon's critical strike chance equal to 10% of your critical strike chance.",
       "Increases your summoned demon's critical strike chance equal to 20% of your critical strike chance.",
       "Increases your summoned demon's critical strike chance equal to 30% of your critical strike chance."
      ],
      "cn": "强化恶魔战术",
      "cnDesc": [
       "提高你所召唤的恶魔的爆击几率，数值相当于你的爆击几率的10%。",
       "提高你所召唤的恶魔的爆击几率，数值相当于你的爆击几率的20%。",
       "提高你所召唤的恶魔的爆击几率，数值相当于你的爆击几率的30%。"
      ]
     },
     {
      "name": "Summon Felguard",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Summons a Felguard under the command of the Warlock."
      ],
      "cn": "召唤恶魔卫士",
      "cnDesc": [
       "80% 的基础法力值<br />10秒施法时间召唤一个恶魔卫士协助术士作战。"
      ]
     },
     {
      "name": "Nemesis",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Demonic Empowerment, Metamorphosis, and Fel Domination spells by 10%.",
       "Reduces the cooldown of your Demonic Empowerment, Metamorphosis, and Fel Domination spells by 20%.",
       "Reduces the cooldown of your Demonic Empowerment, Metamorphosis, and Fel Domination spells by 30%."
      ],
      "cn": "复仇女神",
      "cnDesc": [
       "使你的恶魔增效、恶魔变形和恶魔支配的冷却时间缩短10%。",
       "使你的恶魔增效、恶魔变形和恶魔支配的冷却时间缩短20%。",
       "使你的恶魔增效、恶魔变形和恶魔支配的冷却时间缩短30%。"
      ]
     },
     {
      "name": "Demonic Pact",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your spell damage by 2%, and your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 2% of your Spell Damage for 45 sec. This effect has a 20 sec cooldown. Does not work on Enslaved demons.",
       "Increases your spell damage by 4%, and your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 4% of your Spell Damage for 45 sec. This effect has a 20 sec cooldown. Does not work on Enslaved demons.",
       "Increases your spell damage by 6%, and your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 6% of your Spell Damage for 45 sec. This effect has a 20 sec cooldown. Does not work on Enslaved demons.",
       "Increases your spell damage by 8%, and your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 8% of your Spell Damage for 45 sec. This effect has a 20 sec cooldown. Does not work on Enslaved demons.",
       "Increases your spell damage by 10%, and your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 10% of your Spell Damage for 45 sec. This effect has a 20 sec cooldown. Does not work on Enslaved demons."
      ],
      "cn": "恶魔契约",
      "cnDesc": [
       "使你的法术伤害提高2%，你的宠物打出爆击之后使你的小队或团队成员获得恶魔契约效果，法术强度提高，数值相当于你的法术伤害值的2%，持续45 秒。该效果有20秒的冷却时间。对被奴役的恶魔无效。",
       "使你的法术伤害提高4%，你的宠物打出爆击之后使你的小队或团队成员获得恶魔契约效果，法术强度提高，数值相当于你的法术伤害值的4%，持续45 秒。该效果有20秒的冷却时间。对被奴役的恶魔无效。",
       "使你的法术伤害提高6%，你的宠物打出爆击之后使你的小队或团队成员获得恶魔契约效果，法术强度提高，数值相当于你的法术伤害值的6%，持续45 秒。该效果有20秒的冷却时间。对被奴役的恶魔无效。",
       "使你的法术伤害提高8%，你的宠物打出爆击之后使你的小队或团队成员获得恶魔契约效果，法术强度提高，数值相当于你的法术伤害值的8%，持续45 秒。该效果有20秒的冷却时间。对被奴役的恶魔无效。",
       "使你的法术伤害提高10%，你的宠物打出爆击之后使你的小队或团队成员获得恶魔契约效果，法术强度提高，数值相当于你的法术伤害值的10%，持续45 秒。该效果有20秒的冷却时间。对被奴役的恶魔无效。"
      ]
     },
     {
      "name": "Metamorphosis",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You transform into a Demon for 30 sec. This form increases your armor by 600%, damage by 20%, reduces the chance you'll be critically hit by melee attacks by 6% and reduces the duration of stun and snare effects by 50%. You gain some unique demon abilities in addition to your normal abilities. 3 minute cooldown."
      ],
      "cn": "恶魔变形",
      "cnDesc": [
       "瞬发你变身成为一个恶魔，持续30 秒。护甲值提高600%，伤害提高20%，被近战爆击的几率降低6%，受到昏迷和诱捕效果影响的持续时间缩短50%，除了普通的技能之外，你还可以获得一些特殊的恶魔技能。3分钟冷却时间。"
      ]
     }
    ],
    "sprite": "assets/sprites/warlock_demonology.webp"
   },
   {
    "name": "Destruction",
    "cn": "毁灭",
    "bg": "assets/tree-bg/warlock_destruction.jpg",
    "talents": [
     {
      "name": "Improved Shadow Bolt",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Shadow Bolt spell by 2%, and your Shadow Bolt has a 20% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.",
       "Increases the damage done by your Shadow Bolt spell by 4%, and your Shadow Bolt has a 40% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.",
       "Increases the damage done by your Shadow Bolt spell by 6%, and your Shadow Bolt has a 60% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.",
       "Increases the damage done by your Shadow Bolt spell by 8%, and your Shadow Bolt has a 80% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.",
       "Increases the damage done by your Shadow Bolt spell by 10%, and your Shadow Bolt has a 100% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec."
      ],
      "cn": "强化暗影箭",
      "cnDesc": [
       "使你的暗影箭造成的伤害提高2%。并有20%的几率可以令目标更易受到法术伤害，法术对该目标的爆击几率提高5%，效果持续30 秒。",
       "使你的暗影箭造成的伤害提高4%。并有40%的几率可以令目标更易受到法术伤害，法术对该目标的爆击几率提高5%，效果持续30 秒。",
       "使你的暗影箭造成的伤害提高6%。并有60%的几率可以令目标更易受到法术伤害，法术对该目标的爆击几率提高5%，效果持续30 秒。",
       "使你的暗影箭造成的伤害提高8%。并有80%的几率可以令目标更易受到法术伤害，法术对该目标的爆击几率提高5%，效果持续30 秒。",
       "使你的暗影箭造成的伤害提高10%。并有100%的几率可以令目标更易受到法术伤害，法术对该目标的爆击几率提高5%，效果持续30 秒。"
      ]
     },
     {
      "name": "Bane",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the casting time of your Shadow Bolt. Chaos Bolt and Immolate spells by 0.1 sec and your Soul Fire spell by 0.4 sec.",
       "Reduces the casting time of your Shadow Bolt. Chaos Bolt and Immolate spells by 0.2 sec and your Soul Fire spell by 0.8 sec.",
       "Reduces the casting time of your Shadow Bolt. Chaos Bolt and Immolate spells by 0.3 sec and your Soul Fire spell by 1.2 sec.",
       "Reduces the casting time of your Shadow Bolt. Chaos Bolt and Immolate spells by 0.4 sec and your Soul Fire spell by 1.6 sec.",
       "Reduces the casting time of your Shadow Bolt. Chaos Bolt and Immolate spells by 0.5 sec and your Soul Fire spell by 2 sec."
      ],
      "cn": "灾祸",
      "cnDesc": [
       "使你的暗影箭、混乱之箭和献祭的施法时间缩短0.1秒，灵魂之火的施法时间缩短0.4秒。",
       "使你的暗影箭、混乱之箭和献祭的施法时间缩短0.2秒，灵魂之火的施法时间缩短0.8秒。",
       "使你的暗影箭、混乱之箭和献祭的施法时间缩短0.3秒，灵魂之火的施法时间缩短1.2秒。",
       "使你的暗影箭、混乱之箭和献祭的施法时间缩短0.4秒，灵魂之火的施法时间缩短1.6秒。",
       "使你的暗影箭、混乱之箭和献祭的施法时间缩短0.5秒，灵魂之火的施法时间缩短2秒。"
      ]
     },
     {
      "name": "Aftermath",
      "row": 1,
      "col": 0,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the periodic damage done by your Immolate by 3%, and your Conflagrate has a 50% chance to daze the target for 5 sec.",
       "Increases the periodic damage done by your Immolate by 6%, and your Conflagrate has a 100% chance to daze the target for 5 sec."
      ],
      "cn": "清算",
      "cnDesc": [
       "使你的献祭法术造成的持续伤害提高3%，你的燃烧法术有50%的几率令目标眩晕5 秒。",
       "使你的献祭法术造成的持续伤害提高6%，你的燃烧法术有100%的几率令目标眩晕5 秒。"
      ]
     },
     {
      "name": "Molten Skin",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces all damage taken by 2%.",
       "Reduces all damage taken by 4%.",
       "Reduces all damage taken by 6%."
      ],
      "cn": "熔铸皮肤",
      "cnDesc": [
       "受到的所有伤害降低2%。",
       "受到的所有伤害降低4%。",
       "受到的所有伤害降低6%。"
      ]
     },
     {
      "name": "Cataclysm",
      "row": 1,
      "col": 2,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the Mana cost of your Destruction spells by 4%",
       "Reduces the Mana cost of your Destruction spells by 7%",
       "Reduces the Mana cost of your Destruction spells by 10%"
      ],
      "cn": "灾变",
      "cnDesc": [
       "使你的毁灭系法术所消耗的法力值减少4%。",
       "使你的毁灭系法术所消耗的法力值减少7%。",
       "使你的毁灭系法术所消耗的法力值减少10%。"
      ]
     },
     {
      "name": "Demonic Power",
      "row": 2,
      "col": 0,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Succubus' Lash of Pain spell by 3 sec. and reduces the casting time of your Imp's Firebolt spell by 0.25 sec.",
       "Reduces the cooldown of your Succubus' Lash of Pain spell by 6 sec. and reduces the casting time of your Imp's Firebolt spell by 0.5 sec."
      ],
      "cn": "恶魔之能",
      "cnDesc": [
       "使魅魔的剧痛鞭笞的冷却时间缩短3秒，小鬼的火焰箭的施法时间缩短0.25秒。",
       "使魅魔的剧痛鞭笞的冷却时间缩短6秒，小鬼的火焰箭的施法时间缩短0.5秒。"
      ]
     },
     {
      "name": "Shadowburn",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Instantly blasts the target for 87 to 99 Shadow damage. If the target dies within 5 sec of Shadowburn, and yields experience or honor, the caster gains a Soul Shard."
      ],
      "cn": "暗影灼烧",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>20% 的基础法力值</td><th>20码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>15 秒冷却时间</th></tr></table>立即使用暗影能量冲击目标，对其造成87到99点暗影伤害。如果目标在5 秒内死亡，且施法者因此获得经验值或荣誉，则施法者获得一块灵魂碎片。"
      ]
     },
     {
      "name": "Ruin",
      "row": 2,
      "col": 2,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike damage bonus of your Destruction spells and your Imp's Firebolt spell by 20%.",
       "Increases the critical strike damage bonus of your Destruction spells and your Imp's Firebolt spell by 40%.",
       "Increases the critical strike damage bonus of your Destruction spells and your Imp's Firebolt spell by 60%.",
       "Increases the critical strike damage bonus of your Destruction spells and your Imp's Firebolt spell by 80%.",
       "Increases the critical strike damage bonus of your Destruction spells and your Imp's Firebolt spell by 100%."
      ],
      "cn": "毁灭",
      "cnDesc": [
       "使你的毁灭系法术和小鬼火焰箭法术的爆击伤害加成提高20%。",
       "使你的毁灭系法术和小鬼火焰箭法术的爆击伤害加成提高40%。",
       "使你的毁灭系法术和小鬼火焰箭法术的爆击伤害加成提高60%。",
       "使你的毁灭系法术和小鬼火焰箭法术的爆击伤害加成提高80%。",
       "使你的毁灭系法术和小鬼火焰箭法术的爆击伤害加成提高100%。"
      ]
     },
     {
      "name": "Intensity",
      "row": 3,
      "col": 0,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the pushback suffered from damaging attacks while casting or channeling any Destruction spell by 35%.",
       "Reduces the pushback suffered from damaging attacks while casting or channeling any Destruction spell by 70%."
      ],
      "cn": "强烈",
      "cnDesc": [
       "使你在施放或引导任何毁灭系法术时因受到伤害而承受的施法推迟时间缩短35%。",
       "使你在施放或引导任何毁灭系法术时因受到伤害而承受的施法推迟时间缩短70%。"
      ]
     },
     {
      "name": "Destructive Reach",
      "row": 3,
      "col": 1,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the range of your Destruction spells by 10% and reduces threat caused by Destruction spells by 10%.",
       "Increases the range of your Destruction spells by 20% and reduces threat caused by Destruction spells by 20%."
      ],
      "cn": "毁灭延伸",
      "cnDesc": [
       "使你的毁灭系法术的射程增加10%，毁灭系法术所造成的威胁值降低10%。",
       "使你的毁灭系法术的射程增加20%，毁灭系法术所造成的威胁值降低20%。"
      ]
     },
     {
      "name": "Improved Searing Pain",
      "row": 3,
      "col": 3,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your Searing Pain spell by 4%.",
       "Increases the critical strike chance of your Searing Pain spell by 7%.",
       "Increases the critical strike chance of your Searing Pain spell by 10%."
      ],
      "cn": "强化灼热之痛",
      "cnDesc": [
       "使你的灼热之痛的爆击几率提高4%。",
       "使你的灼热之痛的爆击几率提高7%。",
       "使你的灼热之痛的爆击几率提高10%。"
      ]
     },
     {
      "name": "Backlash",
      "row": 4,
      "col": 0,
      "maxRank": 3,
      "req": 20,
      "prereq": "Intensity",
      "prereqRank": 2,
      "desc": [
       "Increases your critical strike chance with spells by an additional 1% and gives you a 8% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%. This effect lasts 8 sec and will not occur more than once every 8 seconds.",
       "Increases your critical strike chance with spells by an additional 2% and gives you a 16% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%. This effect lasts 8 sec and will not occur more than once every 8 seconds.",
       "Increases your critical strike chance with spells by an additional 3% and gives you a 25% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%. This effect lasts 8 sec and will not occur more than once every 8 seconds."
      ],
      "cn": "反冲",
      "cnDesc": [
       "使你的法术爆击几率提高1%，并使你有8%的几率在受到物理攻击之后的下一个暗影箭或燃尽法术的施法时间减少100%。这个效果可以持续8 秒，且在8秒内只能出现一次。",
       "使你的法术爆击几率提高2%，并使你有16%的几率在受到物理攻击之后的下一个暗影箭或燃尽法术的施法时间减少100%。这个效果可以持续8 秒，且在8秒内只能出现一次。",
       "使你的法术爆击几率提高3%，并使你有25%的几率在受到物理攻击之后的下一个暗影箭或燃尽法术的施法时间减少100%。这个效果可以持续8 秒，且在8秒内只能出现一次。"
      ]
     },
     {
      "name": "Improved Immolate",
      "row": 4,
      "col": 1,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Immolate spell by 10%.",
       "Increases the damage done by your Immolate spell by 20%.",
       "Increases the damage done by your Immolate spell by 30%."
      ],
      "cn": "强化献祭",
      "cnDesc": [
       "使你的献祭法术造成的伤害提高10%。",
       "使你的献祭法术造成的伤害提高20%。",
       "使你的献祭法术造成的伤害提高30%。"
      ]
     },
     {
      "name": "Devastation",
      "row": 4,
      "col": 2,
      "maxRank": 1,
      "req": 20,
      "prereq": "Ruin",
      "prereqRank": 5,
      "desc": [
       "Increases the critical strike chance of your Destruction spells by 5%."
      ],
      "cn": "毁坏",
      "cnDesc": [
       "使你的毁灭系法术的爆击几率提高5%。"
      ]
     },
     {
      "name": "Nether Protection",
      "row": 5,
      "col": 0,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "After being hit with a spell, you have a 10% chance to gain Nether Protection, reducing all damage by that spell school by 30% for 8 sec.",
       "After being hit with a spell, you have a 20% chance to gain Nether Protection, reducing all damage by that spell school by 30% for 8 sec.",
       "After being hit with a spell, you have a 30% chance to gain Nether Protection, reducing all damage by that spell school by 30% for 8 sec."
      ],
      "cn": "虚空防护",
      "cnDesc": [
       "被法术击中之后有10%的几率获得虚空防护效果，使该系法术对你造成的所有伤害降低30%，持续8 秒。",
       "被法术击中之后有20%的几率获得虚空防护效果，使该系法术对你造成的所有伤害降低30%，持续8 秒。",
       "被法术击中之后有30%的几率获得虚空防护效果，使该系法术对你造成的所有伤害降低30%，持续8 秒。"
      ]
     },
     {
      "name": "Emberstorm",
      "row": 5,
      "col": 2,
      "maxRank": 5,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Fire spells by 3% and reduces the cast time of your Incinerate spell by 0.05 sec.",
       "Increases the damage done by your Fire spells by 6% and reduces the cast time of your Incinerate spell by 0.1 sec.",
       "Increases the damage done by your Fire spells by 9% and reduces the cast time of your Incinerate spell by 0.15 sec.",
       "Increases the damage done by your Fire spells by 12% and reduces the cast time of your Incinerate spell by 0.2 sec.",
       "Increases the damage done by your Fire spells by 15% and reduces the cast time of your Incinerate spell by 0.25 sec."
      ],
      "cn": "灰烬风暴",
      "cnDesc": [
       "使你的火焰法术造成的伤害提高3%，烧尽法术的施法时间缩短0.05秒。",
       "使你的火焰法术造成的伤害提高6%，烧尽法术的施法时间缩短0.1秒。",
       "使你的火焰法术造成的伤害提高9%，烧尽法术的施法时间缩短0.15秒。",
       "使你的火焰法术造成的伤害提高12%，烧尽法术的施法时间缩短0.2秒。",
       "使你的火焰法术造成的伤害提高15%，烧尽法术的施法时间缩短0.25秒。"
      ]
     },
     {
      "name": "Conflagrate",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Improved Immolate",
      "prereqRank": 3,
      "desc": [
       "Consumes an Immolate or Shadowflame effect on the enemy target to instantly deal damage equal to 60% of your Immolate or Shadowflame, and causes an additional 40% damage over 6 sec."
      ],
      "cn": "燃烧",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>16% 的基础法力值</td><th>30码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>10 秒冷却时间</th></tr></table><!--sp56235:0-->吞噬<!--sp56235-->目标身上的献祭或暗影烈焰效果，立即对其造成伤害，数值相当于你的献祭或暗影烈焰伤害的60%，并在6 秒内造成40%的额外伤害。"
      ]
     },
     {
      "name": "Soul Leech",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your Shadow Bolt, Shadowburn, Chaos Bolt, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 10% chance to return health equal to 20% of the damage caused.",
       "Gives your Shadow Bolt, Shadowburn, Chaos Bolt, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 20% chance to return health equal to 20% of the damage caused.",
       "Gives your Shadow Bolt, Shadowburn, Chaos Bolt, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 30% chance to return health equal to 20% of the damage caused."
      ],
      "cn": "灵魂榨取",
      "cnDesc": [
       "使你的暗影箭、暗影灼烧、混乱之箭、灵魂之火、灼热之痛、烧尽和燃烧有10%的几率为你回复生命值，数值相当于该法术所造成伤害的20%。",
       "使你的暗影箭、暗影灼烧、混乱之箭、灵魂之火、灼热之痛、烧尽和燃烧有20%的几率为你回复生命值，数值相当于该法术所造成伤害的20%。",
       "使你的暗影箭、暗影灼烧、混乱之箭、灵魂之火、灼热之痛、烧尽和燃烧有30%的几率为你回复生命值，数值相当于该法术所造成伤害的20%。"
      ]
     },
     {
      "name": "Pyroclasm",
      "row": 6,
      "col": 3,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When you critically strike with Searing Pain or Conflagrate, your Fire and Shadow spell damage is increased by 2% for 10 sec.",
       "When you critically strike with Searing Pain or Conflagrate, your Fire and Shadow spell damage is increased by 4% for 10 sec.",
       "When you critically strike with Searing Pain or Conflagrate, your Fire and Shadow spell damage is increased by 6% for 10 sec."
      ],
      "cn": "火焰冲撞",
      "cnDesc": [
       "当你的灼热之痛或燃烧法术打出爆击之后，你的火焰和暗影伤害提高2%，持续10 秒。",
       "当你的灼热之痛或燃烧法术打出爆击之后，你的火焰和暗影伤害提高4%，持续10 秒。",
       "当你的灼热之痛或燃烧法术打出爆击之后，你的火焰和暗影伤害提高6%，持续10 秒。"
      ]
     },
     {
      "name": "Shadow and Flame",
      "row": 7,
      "col": 1,
      "maxRank": 5,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Shadow Bolt, Shadowburn, Chaos Bolt and Incinerate spells gain an additional 4% of your bonus spell damage effects.",
       "Your Shadow Bolt, Shadowburn, Chaos Bolt and Incinerate spells gain an additional 8% of your bonus spell damage effects.",
       "Your Shadow Bolt, Shadowburn, Chaos Bolt and Incinerate spells gain an additional 12% of your bonus spell damage effects.",
       "Your Shadow Bolt, Shadowburn, Chaos Bolt and Incinerate spells gain an additional 16% of your bonus spell damage effects.",
       "Your Shadow Bolt, Shadowburn, Chaos Bolt and Incinerate spells gain an additional 20% of your bonus spell damage effects."
      ],
      "cn": "暗影烈焰",
      "cnDesc": [
       "你的暗影箭、暗影灼烧、混乱之箭和烧尽所获得的法术伤害加成效果提高4%。",
       "你的暗影箭、暗影灼烧、混乱之箭和烧尽所获得的法术伤害加成效果提高8%。",
       "你的暗影箭、暗影灼烧、混乱之箭和烧尽所获得的法术伤害加成效果提高12%。",
       "你的暗影箭、暗影灼烧、混乱之箭和烧尽所获得的法术伤害加成效果提高16%。",
       "你的暗影箭、暗影灼烧、混乱之箭和烧尽所获得的法术伤害加成效果提高20%。"
      ]
     },
     {
      "name": "Improved Soul Leech",
      "row": 7,
      "col": 2,
      "maxRank": 2,
      "req": 35,
      "prereq": "Soul Leech",
      "prereqRank": 3,
      "desc": [
       "Your Soul Leech effect also restores mana to you and your summoned demon equal to 1% of maximum mana, and has a 50% chance to grant up to 10 party or raid members mana regeneration equal to 1% of maximum mana per 5 sec. Lasts for 15 sec.",
       "Your Soul Leech effect also restores mana to you and your summoned demon equal to 2% of maximum mana, and has a 100% chance to grant up to 10 party or raid members mana regeneration equal to 1% of maximum mana per 5 sec. Lasts for 15 sec."
      ],
      "cn": "强化灵魂榨取",
      "cnDesc": [
       "你的灵魂榨取效果也会为你和你所召唤的恶魔恢复法力值上限的1%，并有50%的几率为小队或团队中的最多10个成员每5秒恢复法力值上限的1%，持续15 秒。",
       "你的灵魂榨取效果也会为你和你所召唤的恶魔恢复法力值上限的2%，并有100%的几率为小队或团队中的最多10个成员每5秒恢复法力值上限的1%，持续15 秒。"
      ]
     },
     {
      "name": "Backdraft",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": "Conflagrate",
      "prereqRank": 1,
      "desc": [
       "When you cast Conflagrate, the cast time and global cooldown of your next three Destruction spells is reduced by 10%. Lasts 15 sec.",
       "When you cast Conflagrate, the cast time and global cooldown of your next three Destruction spells is reduced by 20%. Lasts 15 sec.",
       "When you cast Conflagrate, the cast time and global cooldown of your next three Destruction spells is reduced by 30%. Lasts 15 sec."
      ],
      "cn": "爆燃",
      "cnDesc": [
       "当你施放燃烧之后，你的下三次毁灭系法术的施法时间和公共冷却时间缩短10%，效果持续15 秒。",
       "当你施放燃烧之后，你的下三次毁灭系法术的施法时间和公共冷却时间缩短20%，效果持续15 秒。",
       "当你施放燃烧之后，你的下三次毁灭系法术的施法时间和公共冷却时间缩短30%，效果持续15 秒。"
      ]
     },
     {
      "name": "Shadowfury",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Shadowfury is unleashed, causing 343 to 407 Shadow damage and stunning all enemies within 8 yds for 3 sec."
      ],
      "cn": "暗影之怒",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>27% 的基础法力值</td><th>30码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>20 秒冷却时间</th></tr></table>释放暗影之怒，对身边半径8码内的所有敌人造成343到407点暗影伤害，并使它们昏迷3 秒。"
      ]
     },
     {
      "name": "Empowered Imp",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Imp by 10%, and all critical hits done by your Imp have a 33% chance to increase your spell critical hit chance for your next spell by 100%. This effect lasts 8 sec.",
       "Increases the damage done by your Imp by 20%, and all critical hits done by your Imp have a 66% chance to increase your spell critical hit chance for your next spell by 100%. This effect lasts 8 sec.",
       "Increases the damage done by your Imp by 30%, and all critical hits done by your Imp have a 100% chance to increase your spell critical hit chance for your next spell by 100%. This effect lasts 8 sec."
      ],
      "cn": "小鬼增效",
      "cnDesc": [
       "使你的小鬼造成的伤害提高10%。当小鬼打出爆击时，有33%的几率令你的下一个法术的爆击几率提高100%，效果持续8 秒。",
       "使你的小鬼造成的伤害提高20%。当小鬼打出爆击时，有66%的几率令你的下一个法术的爆击几率提高100%，效果持续8 秒。",
       "使你的小鬼造成的伤害提高30%。当小鬼打出爆击时，有100%的几率令你的下一个法术的爆击几率提高100%，效果持续8 秒。"
      ]
     },
     {
      "name": "Fire and Brimstone",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Incinerate and Chaos Bolt spells to targets afflicted by your Immolate by 2%, and the critical strike chance of your Conflagrate spell is increased by 5%.",
       "Increases the damage done by your Incinerate and Chaos Bolt spells to targets afflicted by your Immolate by 4%, and the critical strike chance of your Conflagrate spell is increased by 10%.",
       "Increases the damage done by your Incinerate and Chaos Bolt spells to targets afflicted by your Immolate by 6%, and the critical strike chance of your Conflagrate spell is increased by 15%.",
       "Increases the damage done by your Incinerate and Chaos Bolt spells to targets afflicted by your Immolate by 8%, and the critical strike chance of your Conflagrate spell is increased by 20%.",
       "Increases the damage done by your Incinerate and Chaos Bolt spells to targets afflicted by your Immolate by 10%, and the critical strike chance of your Conflagrate spell is increased by 25%."
      ],
      "cn": "硫磺烈火",
      "cnDesc": [
       "当目标带有你的献祭效果时，你的烧尽和混乱箭法术对其造成的伤害提高2%，你的燃烧法术的爆击几率提高5%。",
       "当目标带有你的献祭效果时，你的烧尽和混乱箭法术对其造成的伤害提高4%，你的燃烧法术的爆击几率提高10%。",
       "当目标带有你的献祭效果时，你的烧尽和混乱箭法术对其造成的伤害提高6%，你的燃烧法术的爆击几率提高15%。",
       "当目标带有你的献祭效果时，你的烧尽和混乱箭法术对其造成的伤害提高8%，你的燃烧法术的爆击几率提高20%。",
       "当目标带有你的献祭效果时，你的烧尽和混乱箭法术对其造成的伤害提高10%，你的燃烧法术的爆击几率提高25%。"
      ]
     },
     {
      "name": "Chaos Bolt",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Sends a bolt of chaotic fire at the enemy, dealing 837 to 1061 Fire damage. Chaos Bolt cannot be resisted, and pierces through all absorption effects."
      ],
      "cn": "混乱之箭",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>7% 的基础法力值</td><th>30码范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>2.5秒施法时间</td><th>12 秒冷却时间</th></tr></table>向敌人发射混乱之箭，造成837到1061点火焰伤害。混乱之箭无法被抵抗，并且可以穿透所有伤害吸收效果。"
      ]
     }
    ],
    "sprite": "assets/sprites/warlock_destruction.webp"
   }
  ],
  "icon": "assets/class-icons/warlock.jpg"
 },
 {
  "id": "warrior",
  "name": "Warrior",
  "cn": "战士",
  "trees": [
   {
    "name": "Arms",
    "cn": "武器",
    "bg": "assets/tree-bg/warrior_arms.jpg",
    "talents": [
     {
      "name": "Improved Heroic Strike",
      "row": 0,
      "col": 0,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cost of your Heroic Strike ability by 1 rage point.",
       "Reduces the cost of your Heroic Strike ability by 2 rage points.",
       "Reduces the cost of your Heroic Strike ability by 3 rage points."
      ],
      "cn": "强化英勇打击",
      "cnDesc": [
       "使你的英勇打击技能所消耗的怒气值减少1点。",
       "使你的英勇打击技能所消耗的怒气值减少2点。",
       "使你的英勇打击技能所消耗的怒气值减少3点。"
      ]
     },
     {
      "name": "Deflection",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Parry chance by 1%.",
       "Increases your Parry chance by 2%.",
       "Increases your Parry chance by 3%.",
       "Increases your Parry chance by 4%.",
       "Increases your Parry chance by 5%."
      ],
      "cn": "偏斜",
      "cnDesc": [
       "使你的招架几率提高1%。",
       "使你的招架几率提高2%。",
       "使你的招架几率提高3%。",
       "使你的招架几率提高4%。",
       "使你的招架几率提高5%。"
      ]
     },
     {
      "name": "Improved Rend",
      "row": 0,
      "col": 2,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the bleed damage done by your Rend ability by 10%.",
       "Increases the bleed damage done by your Rend ability by 20%."
      ],
      "cn": "强化撕裂",
      "cnDesc": [
       "使你的撕裂技能造成的流血伤害提高10%。",
       "使你的撕裂技能造成的流血伤害提高20%。"
      ]
     },
     {
      "name": "Improved Charge",
      "row": 1,
      "col": 0,
      "maxRank": 2,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the amount of rage generated by your Charge ability by 5.",
       "Increases the amount of rage generated by your Charge ability by 10."
      ],
      "cn": "强化冲锋",
      "cnDesc": [
       "使你的冲锋技能积攒的怒气值提高5点。",
       "使你的冲锋技能积攒的怒气值提高10点。"
      ]
     },
     {
      "name": "Iron Will",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the duration of all Stun and Charm effects used against you by 7%.",
       "Reduces the duration of all Stun and Charm effects used against you by 14%.",
       "Reduces the duration of all Stun and Charm effects used against you by 20%."
      ],
      "cn": "钢铁意志",
      "cnDesc": [
       "使所有对你施加的昏迷和魅惑效果的持续时间缩短7%。",
       "使所有对你施加的昏迷和魅惑效果的持续时间缩短14%。",
       "使所有对你施加的昏迷和魅惑效果的持续时间缩短20%。"
      ]
     },
     {
      "name": "Tactical Mastery",
      "row": 1,
      "col": 2,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You retain up to an additional 5 of your rage points when you change stances.  Also greatly increases the threat generated by your Bloodthirst and Mortal Strike abilities when you are in Defensive Stance.",
       "You retain up to an additional 10 of your rage points when you change stances.  Also greatly increases the threat generated by your Bloodthirst and Mortal Strike abilities when you are in Defensive Stance (More effective than Rank 1).",
       "You retain up to an additional 15 of your rage points when you change stances.  Also greatly increases the threat generated by your Bloodthirst and Mortal Strike abilities when you are in Defensive Stance (More effective than Rank 2)."
      ],
      "cn": "战术掌握",
      "cnDesc": [
       "在改变姿态的时候可以保留的怒气值上限提高5点，同时极大提高你在防御姿态下使用嗜血和致死打击技能所造成的威胁值。",
       "在改变姿态的时候可以保留的怒气值上限提高10点，同时极大提高你在防御姿态下使用嗜血和致死打击技能所造成的威胁值（比等级 1更有效）。",
       "在改变姿态的时候可以保留的怒气值上限提高15点，同时极大提高你在防御姿态下使用嗜血和致死打击技能所造成的威胁值（比等级 2更有效）。"
      ]
     },
     {
      "name": "Improved Overpower",
      "row": 2,
      "col": 0,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your Overpower ability by 25%.",
       "Increases the critical strike chance of your Overpower ability by 50%."
      ],
      "cn": "强化压制",
      "cnDesc": [
       "使你的压制技能的爆击几率提高25%。",
       "使你的压制技能的爆击几率提高50%。"
      ]
     },
     {
      "name": "Anger Management",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Generates 1 rage per 3 seconds."
      ],
      "cn": "愤怒掌控",
      "cnDesc": [
       "瞬发每3秒获得1点怒气值。"
      ]
     },
     {
      "name": "Impale",
      "row": 2,
      "col": 2,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike damage bonus of your abilities by 10%.",
       "Increases the critical strike damage bonus of your abilities by 20%."
      ],
      "cn": "穿刺",
      "cnDesc": [
       "使你的技能爆击伤害加成提高10%。",
       "使你的技能爆击伤害加成提高20%。"
      ]
     },
     {
      "name": "Deep Wounds",
      "row": 2,
      "col": 3,
      "maxRank": 3,
      "req": 10,
      "prereq": "Impale",
      "prereqRank": 2,
      "desc": [
       "Requires Melee Weapon Your critical strikes cause the opponent to bleed, dealing 16% of your melee weapon's average damage over 6 sec.",
       "Requires Melee Weapon Your critical strikes cause the opponent to bleed, dealing 32% of your melee weapon's average damage over 6 sec.",
       "Requires Melee Weapon Your critical strikes cause the opponent to bleed, dealing 48% of your melee weapon's average damage over 6 sec."
      ],
      "cn": "重伤",
      "cnDesc": [
       "你的爆击导致目标流血，在6 秒内造成相当于你的武器平均伤害16%的伤害。",
       "你的爆击导致目标流血，在6 秒内造成相当于你的武器平均伤害32%的伤害。",
       "你的爆击导致目标流血，在6 秒内造成相当于你的武器平均伤害48%的伤害。"
      ]
     },
     {
      "name": "Two-Handed Weapon Specialization",
      "row": 3,
      "col": 1,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage you deal with two-handed melee weapons by 2%",
       "Increases the damage you deal with two-handed melee weapons by 4%",
       "Increases the damage you deal with two-handed melee weapons by 6%"
      ],
      "cn": "双手武器专精",
      "cnDesc": [
       "使你的双手近战武器伤害提高2%。",
       "使你的双手近战武器伤害提高4%。",
       "使你的双手近战武器伤害提高6%。"
      ]
     },
     {
      "name": "Taste for Blood",
      "row": 3,
      "col": 2,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Whenever your Rend ability causes damage, you have a 33% chance of allowing the use of your Overpower ability for 9 sec. 1 charge. This effect will not occur more than once every 6 sec.",
       "Whenever your Rend ability causes damage, you have a 66% chance of allowing the use of your Overpower ability for 9 sec. 1 charge. This effect will not occur more than once every 6 sec.",
       "Whenever your Rend ability causes damage, you have a 100% chance of allowing the use of your Overpower ability for 9 sec. 1 charge. This effect will not occur more than once every 6 sec."
      ],
      "cn": "血之气息",
      "cnDesc": [
       "你的撕裂技能每次造成伤害时都有33%的几率使压制技能可以使用，持续9 秒。可以生效1次。这个效果每6秒只能触发一次。",
       "你的撕裂技能每次造成伤害时都有66%的几率使压制技能可以使用，持续9 秒。可以生效1次。这个效果每6秒只能触发一次。",
       "你的撕裂技能每次造成伤害时都有100%的几率使压制技能可以使用，持续9 秒。可以生效1次。这个效果每6秒只能触发一次。"
      ]
     },
     {
      "name": "Poleaxe Specialization",
      "row": 4,
      "col": 0,
      "maxRank": 5,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires One-Handed Axes, Polearms, Two-Handed Axes Increases your chance to get a critical strike and the critical damage caused with Axes and Polearms by 1%.",
       "Requires One-Handed Axes, Polearms, Two-Handed Axes Increases your chance to get a critical strike and the critical damage caused with Axes and Polearms by 2%.",
       "Requires One-Handed Axes, Polearms, Two-Handed Axes Increases your chance to get a critical strike and the critical damage caused with Axes and Polearms by 3%.",
       "Requires One-Handed Axes, Polearms, Two-Handed Axes Increases your chance to get a critical strike and the critical damage caused with Axes and Polearms by 4%.",
       "Requires One-Handed Axes, Polearms, Two-Handed Axes Increases your chance to get a critical strike and the critical damage caused with Axes and Polearms by 5%."
      ],
      "cn": "长柄专精",
      "cnDesc": [
       "使你的斧类武器和长柄武器的爆击几率及爆击伤害提高1%。",
       "使你的斧类武器和长柄武器的爆击几率及爆击伤害提高2%。",
       "使你的斧类武器和长柄武器的爆击几率及爆击伤害提高3%。",
       "使你的斧类武器和长柄武器的爆击几率及爆击伤害提高4%。",
       "使你的斧类武器和长柄武器的爆击几率及爆击伤害提高5%。"
      ]
     },
     {
      "name": "Sweeping Strikes",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your next 5 melee attacks strike an additional nearby opponent."
      ],
      "cn": "横扫攻击",
      "cnDesc": [
       "30 怒气<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>30 秒冷却时间</th></tr></table>你在接下来的5次近战攻击中可以攻击到一个额外的敌人。"
      ]
     },
     {
      "name": "Mace Specialization",
      "row": 4,
      "col": 2,
      "maxRank": 5,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your attacks with maces ignore up to 3% of your opponent's armor.",
       "Your attacks with maces ignore up to 6% of your opponent's armor.",
       "Your attacks with maces ignore up to 9% of your opponent's armor.",
       "Your attacks with maces ignore up to 12% of your opponent's armor.",
       "Your attacks with maces ignore up to 15% of your opponent's armor."
      ],
      "cn": "锤类武器专精",
      "cnDesc": [
       "你用锤类武器攻击目标时忽略目标3%的护甲值。",
       "你用锤类武器攻击目标时忽略目标6%的护甲值。",
       "你用锤类武器攻击目标时忽略目标9%的护甲值。",
       "你用锤类武器攻击目标时忽略目标12%的护甲值。",
       "你用锤类武器攻击目标时忽略目标15%的护甲值。"
      ]
     },
     {
      "name": "Sword Specialization",
      "row": 4,
      "col": 3,
      "maxRank": 5,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires One-Handed Swords, Two-Handed Swords Gives you a 2% chance to get an extra attack on the same target after hitting your target with your Sword.  This effect cannot occur more than once every 6 seconds.",
       "Requires One-Handed Swords, Two-Handed Swords Gives you a 4% chance to get an extra attack on the same target after hitting your target with your Sword.  This effect cannot occur more than once every 6 seconds.",
       "Requires One-Handed Swords, Two-Handed Swords Gives you a 6% chance to get an extra attack on the same target after hitting your target with your Sword.  This effect cannot occur more than once every 6 seconds.",
       "Requires One-Handed Swords, Two-Handed Swords Gives you a 8% chance to get an extra attack on the same target after hitting your target with your Sword.  This effect cannot occur more than once every 6 seconds.",
       "Requires One-Handed Swords, Two-Handed Swords Gives you a 10% chance to get an extra attack on the same target after hitting your target with your Sword.  This effect cannot occur more than once every 6 seconds."
      ],
      "cn": "剑类武器专精",
      "cnDesc": [
       "使你在用剑类武器击中敌人后有2%的几率对同一目标进行一次额外的攻击。这个效果每6秒只能触发一次。",
       "使你在用剑类武器击中敌人后有4%的几率对同一目标进行一次额外的攻击。这个效果每6秒只能触发一次。",
       "使你在用剑类武器击中敌人后有6%的几率对同一目标进行一次额外的攻击。这个效果每6秒只能触发一次。",
       "使你在用剑类武器击中敌人后有8%的几率对同一目标进行一次额外的攻击。这个效果每6秒只能触发一次。",
       "使你在用剑类武器击中敌人后有10%的几率对同一目标进行一次额外的攻击。这个效果每6秒只能触发一次。"
      ]
     },
     {
      "name": "Weapon Mastery",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the chance for your attacks to be dodged by 1% and reduces the duration of all Disarm effects used against you by 25%. This does not stack with other Disarm duration reducing effects.",
       "Reduces the chance for your attacks to be dodged by 2% and reduces the duration of all Disarm effects used against you by 50%. This does not stack with other Disarm duration reducing effects."
      ],
      "cn": "武器掌握",
      "cnDesc": [
       "使你的攻击被躲闪的几率降低1%，并使你受到的缴械效果持续时间缩短25%。不与其它缴械时间缩短效果叠加。",
       "使你的攻击被躲闪的几率降低2%，并使你受到的缴械效果持续时间缩短50%。不与其它缴械时间缩短效果叠加。"
      ]
     },
     {
      "name": "Improved Hamstring",
      "row": 5,
      "col": 2,
      "maxRank": 3,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your Hamstring ability a 5% chance to immobilize the target for 5 sec.",
       "Gives your Hamstring ability a 10% chance to immobilize the target for 5 sec.",
       "Gives your Hamstring ability a 15% chance to immobilize the target for 5 sec."
      ],
      "cn": "强化断筋",
      "cnDesc": [
       "使你的断筋技能有5%的几率令目标无法移动，持续5 秒。",
       "使你的断筋技能有10%的几率令目标无法移动，持续5 秒。",
       "使你的断筋技能有15%的几率令目标无法移动，持续5 秒。"
      ]
     },
     {
      "name": "Trauma",
      "row": 5,
      "col": 3,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your melee critical strikes increase the effectiveness of Bleed effects on the target by 15% for 1 min.",
       "Your melee critical strikes increase the effectiveness of Bleed effects on the target by 30% for 1 min."
      ],
      "cn": "创伤",
      "cnDesc": [
       "你的近战爆击可以令目标身上的流血效果提高15%，持续1 分钟。",
       "你的近战爆击可以令目标身上的流血效果提高30%，持续1 分钟。"
      ]
     },
     {
      "name": "Second Wind",
      "row": 6,
      "col": 0,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Whenever you are struck by a Stun or Immobilize effect you will generate 10 rage and 5% of your total health over 10 sec.",
       "Whenever you are struck by a Stun or Immobilize effect you will generate 20 rage and 10% of your total health over 10 sec."
      ],
      "cn": "复苏之风",
      "cnDesc": [
       "当你受到昏迷或定身效果影响时，你将在10 秒内获得10点怒气值和生命总值的5%。",
       "当你受到昏迷或定身效果影响时，你将在10 秒内获得20点怒气值和生命总值的10%。"
      ]
     },
     {
      "name": "Mortal Strike",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Sweeping Strikes",
      "prereqRank": 1,
      "desc": [
       "A vicious strike that deals weapon damage plus 85 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec."
      ],
      "cn": "致死打击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>30 怒气</td><th>近战范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>6 秒冷却时间</th></tr></table>一次邪恶的攻击，对目标造成武器伤害外加85点伤害，并使任何形式的治疗对其产生的效果降低50%，持续10 秒。"
      ]
     },
     {
      "name": "Strength of Arms",
      "row": 6,
      "col": 2,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Strength and Stamina by 2% and your Expertise by 2.",
       "Increases your total Strength and Stamina by 4% and your Expertise by 4."
      ],
      "cn": "神兵之力",
      "cnDesc": [
       "使你的力量和耐力总值提高2%，精准提高2。",
       "使你的力量和耐力总值提高4%，精准提高4。"
      ]
     },
     {
      "name": "Improved Slam",
      "row": 6,
      "col": 3,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Decreases the swing time of your Slam ability by 0.5 sec.",
       "Decreases the swing time of your Slam ability by 1 sec."
      ],
      "cn": "强化猛击",
      "cnDesc": [
       "使你的猛击技能的施放时间缩短0.5秒。",
       "使你的猛击技能的施放时间缩短1秒。"
      ]
     },
     {
      "name": "Juggernaut",
      "row": 7,
      "col": 0,
      "maxRank": 1,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Charge ability is now usable while in combat, but the cooldown on Charge is increased by 5 sec. Following a Charge, your next Slam or Mortal Strike has an additional 25% chance to critically hit if used within 10 sec."
      ],
      "cn": "主宰",
      "cnDesc": [
       "你可以在战斗中使用冲锋技能，但冲锋的冷却时间延长5秒。在冲锋之后，你在10 秒内施放的下一个猛击或致死打击技能的爆击几率提高25%。"
      ]
     },
     {
      "name": "Improved Mortal Strike",
      "row": 7,
      "col": 1,
      "maxRank": 3,
      "req": 35,
      "prereq": "Mortal Strike",
      "prereqRank": 1,
      "desc": [
       "Increases the damage caused by your Mortal Strike ability by 3% and reduces the cooldown by 0.33 sec.",
       "Increases the damage caused by your Mortal Strike ability by 6% and reduces the cooldown by 0.67 sec.",
       "Increases the damage caused by your Mortal Strike ability by 10% and reduces the cooldown by 1 sec."
      ],
      "cn": "强化致死打击",
      "cnDesc": [
       "使你的致死打击技能造成的伤害提高3%，冷却时间缩短0.33秒。",
       "使你的致死打击技能造成的伤害提高6%，冷却时间缩短0.67秒。",
       "使你的致死打击技能造成的伤害提高10%，冷却时间缩短1秒。"
      ]
     },
     {
      "name": "Unrelenting Assault",
      "row": 7,
      "col": 2,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Overpower and Revenge abilities by 2 secs and increases the damage done by both abilities by 10%.  In addition, if you strike a player with Overpower while they are casting, their magical damage and healing will be reduced by 25% for 6 sec.",
       "Reduces the cooldown of your Overpower and Revenge abilities by 4 secs and increases the damage done by both abilities by 20%.  In addition, if you strike a player with Overpower while they are casting, their magical damage and healing will be reduced by 50% for 6 sec."
      ],
      "cn": "冷酷突击",
      "cnDesc": [
       "使你的压制和复仇技能的冷却时间缩短2秒，这两个技能造成的伤害提高10%。另外，如果你在玩家施法时对其使用压制技能，则该目标的魔法伤害和治疗效果降低25%，持续6 秒。",
       "使你的压制和复仇技能的冷却时间缩短4秒，这两个技能造成的伤害提高20%。另外，如果你在玩家施法时对其使用压制技能，则该目标的魔法伤害和治疗效果降低50%，持续6 秒。"
      ]
     },
     {
      "name": "Sudden Death",
      "row": 8,
      "col": 0,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your melee hits have a 3% chance of allowing the use of Execute regardless of the target's health state. In addition, you keep at least 3 rage after using Execute.",
       "Your melee hits have a 6% chance of allowing the use of Execute regardless of the target's health state. In addition, you keep at least 7 rage after using Execute.",
       "Your melee hits have a 9% chance of allowing the use of Execute regardless of the target's health state. In addition, you keep at least 10 rage after using Execute."
      ],
      "cn": "猝死",
      "cnDesc": [
       "你的近战攻击命中之后有3%的几率令你可以立即发动斩杀技能，无论目标的生命值是多少。另外，你在使用斩杀技能之后仍可保留至少3点怒气值。",
       "你的近战攻击命中之后有6%的几率令你可以立即发动斩杀技能，无论目标的生命值是多少。另外，你在使用斩杀技能之后仍可保留至少7点怒气值。",
       "你的近战攻击命中之后有9%的几率令你可以立即发动斩杀技能，无论目标的生命值是多少。另外，你在使用斩杀技能之后仍可保留至少10点怒气值。"
      ]
     },
     {
      "name": "Endless Rage",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "You generate 25% more rage from damage dealt."
      ],
      "cn": "无尽怒气",
      "cnDesc": [
       "瞬发在对敌人造成伤害时产生的怒气值提高25%。"
      ]
     },
     {
      "name": "Blood Frenzy",
      "row": 8,
      "col": 2,
      "maxRank": 2,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your melee attack speed by 5%.  In addition your Rend and Deep Wounds abilities also increase all physical damage caused to that target by 2%.",
       "Increases your melee attack speed by 10%.  In addition your Rend and Deep Wounds abilities also increase all physical damage caused to that target by 4%."
      ],
      "cn": "血性狂乱",
      "cnDesc": [
       "你的攻击速度提高5%。另外，你的撕裂和重伤技能也可以使目标受到的所有物理伤害提高2%。",
       "你的攻击速度提高10%。另外，你的撕裂和重伤技能也可以使目标受到的所有物理伤害提高4%。"
      ]
     },
     {
      "name": "Wrecking Crew",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your melee critical hits Enrage you, increasing all damage caused by 2% for 12 sec.  This effect does not stack with Enrage.",
       "Your melee critical hits Enrage you, increasing all damage caused by 4% for 12 sec.  This effect does not stack with Enrage.",
       "Your melee critical hits Enrage you, increasing all damage caused by 6% for 12 sec.  This effect does not stack with Enrage.",
       "Your melee critical hits Enrage you, increasing all damage caused by 8% for 12 sec.  This effect does not stack with Enrage.",
       "Your melee critical hits Enrage you, increasing all damage caused by 10% for 12 sec.  This effect does not stack with Enrage."
      ],
      "cn": "破坏能手",
      "cnDesc": [
       "你的近战爆击使你激怒，造成的所有伤害提高2%，持续12 秒。这个效果不与激怒叠加。",
       "你的近战爆击使你激怒，造成的所有伤害提高4%，持续12 秒。这个效果不与激怒叠加。",
       "你的近战爆击使你激怒，造成的所有伤害提高6%，持续12 秒。这个效果不与激怒叠加。",
       "你的近战爆击使你激怒，造成的所有伤害提高8%，持续12 秒。这个效果不与激怒叠加。",
       "你的近战爆击使你激怒，造成的所有伤害提高10%，持续12 秒。这个效果不与激怒叠加。"
      ]
     },
     {
      "name": "Bladestorm",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Instantly Whirlwind up to 4 nearby targets and for the next 6 sec you will perform a whirlwind attack every 1 sec. While under the effects of Bladestorm, you can move but cannot perform any other abilities but you do not feel pity or remorse or fear and you cannot be stopped unless killed."
      ],
      "cn": "利刃风暴",
      "cnDesc": [
       "25 怒气<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>1 分钟冷却时间</th></tr></table>立即对附近的最多4个目标发动旋风斩，在接下来的6 秒内，你每1秒会发动一次旋风斩。在此期间，你可以移动，但是无法使用其它技能。你不会有任何怜悯的感觉，也不会感到恐惧，除非被杀死，否则无法被阻止。"
      ]
     }
    ],
    "sprite": "assets/sprites/warrior_arms.webp"
   },
   {
    "name": "Fury",
    "cn": "狂怒",
    "bg": "assets/tree-bg/warrior_fury.jpg",
    "talents": [
     {
      "name": "Armored to the Teeth",
      "row": 0,
      "col": 0,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your attack power by 1 for every 108 armor value you have.",
       "Increases your attack power by 2 for every 108 armor value you have.",
       "Increases your attack power by 3 for every 108 armor value you have."
      ],
      "cn": "全副武装",
      "cnDesc": [
       "你的每108点护甲值可以为你提供1点攻击强度加成。",
       "你的每108点护甲值可以为你提供2点攻击强度加成。",
       "你的每108点护甲值可以为你提供3点攻击强度加成。"
      ]
     },
     {
      "name": "Booming Voice",
      "row": 0,
      "col": 1,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the area of effect and duration of your Battle Shout, Demoralizing Shout and Commanding Shout by 25%.",
       "Increases the area of effect and duration of your Battle Shout, Demoralizing Shout and Commanding Shout by 50%."
      ],
      "cn": "震耳嗓音",
      "cnDesc": [
       "使你的战斗怒吼、挫志怒吼和命令怒吼的作用范围和持续时间提高25%。",
       "使你的战斗怒吼、挫志怒吼和命令怒吼的作用范围和持续时间提高50%。"
      ]
     },
     {
      "name": "Cruelty",
      "row": 0,
      "col": 2,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires Melee Weapon Increases your chance to get a critical strike with melee weapons by 1%.",
       "Requires Melee Weapon Increases your chance to get a critical strike with melee weapons by 2%.",
       "Requires Melee Weapon Increases your chance to get a critical strike with melee weapons by 3%.",
       "Requires Melee Weapon Increases your chance to get a critical strike with melee weapons by 4%.",
       "Requires Melee Weapon Increases your chance to get a critical strike with melee weapons by 5%."
      ],
      "cn": "残忍",
      "cnDesc": [
       "使你的近战武器的爆击几率提高1%。",
       "使你的近战武器的爆击几率提高2%。",
       "使你的近战武器的爆击几率提高3%。",
       "使你的近战武器的爆击几率提高4%。",
       "使你的近战武器的爆击几率提高5%。"
      ]
     },
     {
      "name": "Improved Demoralizing Shout",
      "row": 1,
      "col": 1,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the melee attack power reduction of your Demoralizing Shout by 8%.",
       "Increases the melee attack power reduction of your Demoralizing Shout by 16%.",
       "Increases the melee attack power reduction of your Demoralizing Shout by 24%.",
       "Increases the melee attack power reduction of your Demoralizing Shout by 32%.",
       "Increases the melee attack power reduction of your Demoralizing Shout by 40%."
      ],
      "cn": "强化挫志怒吼",
      "cnDesc": [
       "使你的挫志怒吼技能降低敌人近战攻击强度的效果提高8%。",
       "使你的挫志怒吼技能降低敌人近战攻击强度的效果提高16%。",
       "使你的挫志怒吼技能降低敌人近战攻击强度的效果提高24%。",
       "使你的挫志怒吼技能降低敌人近战攻击强度的效果提高32%。",
       "使你的挫志怒吼技能降低敌人近战攻击强度的效果提高40%。"
      ]
     },
     {
      "name": "Unbridled Wrath",
      "row": 1,
      "col": 2,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires Melee Weapon Gives you a chance to generate an additional rage point when you deal melee damage with a weapon.",
       "Requires Melee Weapon Gives you a chance to generate an additional rage point when you deal melee damage with a weapon.  Effect occurs more often than Unbridled Wrath (Rank 1).",
       "Requires Melee Weapon Gives you a chance to generate an additional rage point when you deal melee damage with a weapon.  Effect occurs more often than Unbridled Wrath (Rank 2).",
       "Requires Melee Weapon Gives you a chance to generate an additional rage point when you deal melee damage with a weapon.  Effect occurs more often than Unbridled Wrath (Rank 3).",
       "Requires Melee Weapon Gives you a chance to generate an additional rage point when you deal melee damage with a weapon.  Effect occurs more often than Unbridled Wrath (Rank 4)."
      ],
      "cn": "怒不可遏",
      "cnDesc": [
       "使你有一定几率在对敌人造成近战伤害之后获得1个额外的怒气点数。",
       "使你有一定几率在对敌人造成近战伤害之后获得1个额外的怒气点数。触发几率比怒不可遏（等级 1）更高。",
       "使你有一定几率在对敌人造成近战伤害之后获得1个额外的怒气点数。触发几率比怒不可遏（等级 2）更高。",
       "使你有一定几率在对敌人造成近战伤害之后获得1个额外的怒气点数。触发几率比怒不可遏（等级 3）更高。",
       "使你有一定几率在对敌人造成近战伤害之后获得1个额外的怒气点数。触发几率比怒不可遏（等级 4）更高。"
      ]
     },
     {
      "name": "Improved Cleave",
      "row": 2,
      "col": 0,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the bonus damage done by your Cleave ability by 40%.",
       "Increases the bonus damage done by your Cleave ability by 80%.",
       "Increases the bonus damage done by your Cleave ability by 120%."
      ],
      "cn": "强化顺劈斩",
      "cnDesc": [
       "使你的顺劈斩技能附加的伤害提高40%。",
       "使你的顺劈斩技能附加的伤害提高80%。",
       "使你的顺劈斩技能附加的伤害提高120%。"
      ]
     },
     {
      "name": "Piercing Howl",
      "row": 2,
      "col": 1,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Causes all enemies within 10 yards to be Dazed, reducing movement speed by 50% for 6 sec."
      ],
      "cn": "刺耳怒吼",
      "cnDesc": [
       "10 怒气<br />瞬发使战士身边半径10码范围内的所有敌人眩晕，移动速度降低50%，持续6 秒。"
      ]
     },
     {
      "name": "Blood Craze",
      "row": 2,
      "col": 2,
      "maxRank": 3,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Regenerates 2% of your total Health over 6 sec after being the victim of a critical strike.",
       "Regenerates 4% of your total Health over 6 sec after being the victim of a critical strike.",
       "Regenerates 6% of your total Health over 6 sec after being the victim of a critical strike."
      ],
      "cn": "血之狂热",
      "cnDesc": [
       "在受到爆击之后的6 秒内为你回复生命值总量的2%。",
       "在受到爆击之后的6 秒内为你回复生命值总量的4%。",
       "在受到爆击之后的6 秒内为你回复生命值总量的6%。"
      ]
     },
     {
      "name": "Commanding Presence",
      "row": 2,
      "col": 3,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the melee attack power bonus of your Battle Shout and the health bonus of your Commanding Shout by 5%.",
       "Increases the melee attack power bonus of your Battle Shout and the health bonus of your Commanding Shout by 10%.",
       "Increases the melee attack power bonus of your Battle Shout and the health bonus of your Commanding Shout by 15%.",
       "Increases the melee attack power bonus of your Battle Shout and the health bonus of your Commanding Shout by 20%.",
       "Increases the melee attack power bonus of your Battle Shout and the health bonus of your Commanding Shout by 25%."
      ],
      "cn": "统御之力",
      "cnDesc": [
       "使你的战斗怒吼所提供的近战攻击强度加成和命令怒吼所提供的生命值加成提高5%。",
       "使你的战斗怒吼所提供的近战攻击强度加成和命令怒吼所提供的生命值加成提高10%。",
       "使你的战斗怒吼所提供的近战攻击强度加成和命令怒吼所提供的生命值加成提高15%。",
       "使你的战斗怒吼所提供的近战攻击强度加成和命令怒吼所提供的生命值加成提高20%。",
       "使你的战斗怒吼所提供的近战攻击强度加成和命令怒吼所提供的生命值加成提高25%。"
      ]
     },
     {
      "name": "Dual Wield Specialization",
      "row": 3,
      "col": 0,
      "maxRank": 5,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your offhand weapon by 5%.",
       "Increases the damage done by your offhand weapon by 10%.",
       "Increases the damage done by your offhand weapon by 15%.",
       "Increases the damage done by your offhand weapon by 20%.",
       "Increases the damage done by your offhand weapon by 25%."
      ],
      "cn": "双武器专精",
      "cnDesc": [
       "使你的副手武器伤害提高5%。",
       "使你的副手武器伤害提高10%。",
       "使你的副手武器伤害提高15%。",
       "使你的副手武器伤害提高20%。",
       "使你的副手武器伤害提高25%。"
      ]
     },
     {
      "name": "Improved Execute",
      "row": 3,
      "col": 1,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the rage cost of your Execute ability by 2.",
       "Reduces the rage cost of your Execute ability by 5."
      ],
      "cn": "强化斩杀",
      "cnDesc": [
       "使你的斩杀技能的怒气值消耗减少2点。",
       "使你的斩杀技能的怒气值消耗减少5点。"
      ]
     },
     {
      "name": "Enrage",
      "row": 3,
      "col": 2,
      "maxRank": 5,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives you a 30% chance to receive a 2% damage bonus for 12 sec after being the victim of a damaging attack.  This effect does not stack with Wrecking Crew.",
       "Gives you a 30% chance to receive a 4% damage bonus for 12 sec after being the victim of a damaging attack.  This effect does not stack with Wrecking Crew.",
       "Gives you a 30% chance to receive a 6% damage bonus for 12 sec after being the victim of a damaging attack.  This effect does not stack with Wrecking Crew.",
       "Gives you a 30% chance to receive a 8% damage bonus for 12 sec after being the victim of a damaging attack.  This effect does not stack with Wrecking Crew.",
       "Gives you a 30% chance to receive a 10% damage bonus for 12 sec after being the victim of a damaging attack.  This effect does not stack with Wrecking Crew."
      ],
      "cn": "激怒",
      "cnDesc": [
       "使你有30%的几率在受到伤害性的攻击之后获得2%的伤害加成，持续12 秒。这个效果不与破坏能手叠加。",
       "使你有30%的几率在受到伤害性的攻击之后获得4%的伤害加成，持续12 秒。这个效果不与破坏能手叠加。",
       "使你有30%的几率在受到伤害性的攻击之后获得6%的伤害加成，持续12 秒。这个效果不与破坏能手叠加。",
       "使你有30%的几率在受到伤害性的攻击之后获得8%的伤害加成，持续12 秒。这个效果不与破坏能手叠加。",
       "使你有30%的几率在受到伤害性的攻击之后获得10%的伤害加成，持续12 秒。这个效果不与破坏能手叠加。"
      ]
     },
     {
      "name": "Precision",
      "row": 4,
      "col": 0,
      "maxRank": 3,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to hit with melee weapons by 1%.",
       "Increases your chance to hit with melee weapons by 2%.",
       "Increases your chance to hit with melee weapons by 3%."
      ],
      "cn": "精确",
      "cnDesc": [
       "使你的近战武器的命中几率提高1%。",
       "使你的近战武器的命中几率提高2%。",
       "使你的近战武器的命中几率提高3%。"
      ]
     },
     {
      "name": "Death Wish",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When activated you become enraged, increasing your physical damage by 20% but increasing all damage taken by 5%. Lasts 30 sec."
      ],
      "cn": "死亡之愿",
      "cnDesc": [
       "10 怒气<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>激活之后进入激怒状态，使你造成的物理伤害提高20%，但是受到任何攻击时所承受的伤害都提高5%。持续30 秒。"
      ]
     },
     {
      "name": "Improved Intercept",
      "row": 4,
      "col": 2,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Intercept ability by 5 sec.",
       "Reduces the cooldown of your Intercept ability by 10 sec."
      ],
      "cn": "强化拦截",
      "cnDesc": [
       "使你的拦截技能的冷却时间缩短5秒。",
       "使你的拦截技能的冷却时间缩短10秒。"
      ]
     },
     {
      "name": "Improved Berserker Rage",
      "row": 5,
      "col": 0,
      "maxRank": 2,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "The Berserker Rage ability will generate 10 rage when used.",
       "The Berserker Rage ability will generate 20 rage when used."
      ],
      "cn": "强化狂暴之怒",
      "cnDesc": [
       "在使用狂暴之怒技能之后获得10点怒气值。",
       "在使用狂暴之怒技能之后获得20点怒气值。"
      ]
     },
     {
      "name": "Flurry",
      "row": 5,
      "col": 2,
      "maxRank": 5,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your attack speed by 5% for your next 3 swings after dealing a melee critical strike.",
       "Increases your attack speed by 10% for your next 3 swings after dealing a melee critical strike.",
       "Increases your attack speed by 15% for your next 3 swings after dealing a melee critical strike.",
       "Increases your attack speed by 20% for your next 3 swings after dealing a melee critical strike.",
       "Increases your attack speed by 25% for your next 3 swings after dealing a melee critical strike."
      ],
      "cn": "乱舞",
      "cnDesc": [
       "在你的近战攻击打出爆击之后，使你的下3次近战攻击速度提高5%。",
       "在你的近战攻击打出爆击之后，使你的下3次近战攻击速度提高10%。",
       "在你的近战攻击打出爆击之后，使你的下3次近战攻击速度提高15%。",
       "在你的近战攻击打出爆击之后，使你的下3次近战攻击速度提高20%。",
       "在你的近战攻击打出爆击之后，使你的下3次近战攻击速度提高25%。"
      ]
     },
     {
      "name": "Intensify Rage",
      "row": 6,
      "col": 0,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Bloodrage, Berserker Rage, Recklessness and Death Wish abilities by 11%.",
       "Reduces the cooldown of your Bloodrage, Berserker Rage, Recklessness and Death Wish abilities by 22%.",
       "Reduces the cooldown of your Bloodrage, Berserker Rage, Recklessness and Death Wish abilities by 33%."
      ],
      "cn": "怒发冲冠",
      "cnDesc": [
       "使你的血性狂暴、狂暴之怒、鲁莽和死亡之愿的冷却时间缩短11%。",
       "使你的血性狂暴、狂暴之怒、鲁莽和死亡之愿的冷却时间缩短22%。",
       "使你的血性狂暴、狂暴之怒、鲁莽和死亡之愿的冷却时间缩短33%。"
      ]
     },
     {
      "name": "Bloodthirst",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Death Wish",
      "prereqRank": 1,
      "desc": [
       "Instantly attack the target causing AP*50/100 damage. In addition, the next 3 successful melee attacks will restore 1% of max health. This effect lasts 8 sec. Damage is based on your attack power."
      ],
      "cn": "嗜血",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>20 怒气</td><th>近战范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>4 秒冷却时间</th></tr></table>立刻攻击目标，对其造成攻击强度*50/100点伤害。另外，你的下3次成功的近战攻击每次都可令你恢复生命值总量的1%。效果持续8 秒。此技能的伤害值受攻击强度加成影响。"
      ]
     },
     {
      "name": "Improved Whirlwind",
      "row": 6,
      "col": 3,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage of your Whirlwind ability by 10%.",
       "Increases the damage of your Whirlwind ability by 20%."
      ],
      "cn": "强化旋风斩",
      "cnDesc": [
       "使你的旋风斩技能造成的伤害提高10%。",
       "使你的旋风斩技能造成的伤害提高20%。"
      ]
     },
     {
      "name": "Furious Attacks",
      "row": 7,
      "col": 0,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your normal melee attacks have a chance to reduce all healing done to the target by 25% for 10 sec.  This can stack up to 2 times.",
       "Your normal melee attacks have a chance to reduce all healing done to the target by 25% for 10 sec.  This can stack up to 2 times.  This occurs more often than Furious Attacks (Rank 1)."
      ],
      "cn": "狂暴攻击",
      "cnDesc": [
       "你的普通近战攻击有一定几率使目标受到的所有治疗效果降低25%，持续10 秒。这个效果可以叠加最多2次。",
       "你的普通近战攻击有一定几率使目标受到的所有治疗效果降低25%，持续10 秒。这个效果可以叠加最多2次。比狂暴攻击（等级 1）更容易触发。"
      ]
     },
     {
      "name": "Improved Berserker Stance",
      "row": 7,
      "col": 3,
      "maxRank": 5,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases Strength by 4% and reduces threat caused by 2% while in Berserker Stance.",
       "Increases Strength by 8% and reduces threat caused by 4% while in Berserker Stance.",
       "Increases Strength by 12% and reduces threat caused by 6% while in Berserker Stance.",
       "Increases Strength by 16% and reduces threat caused by 8% while in Berserker Stance.",
       "Increases Strength by 20% and reduces threat caused by 10% while in Berserker Stance."
      ],
      "cn": "强化狂暴姿态",
      "cnDesc": [
       "在狂暴姿态下的力量提高4%，威胁值降低2%。",
       "在狂暴姿态下的力量提高8%，威胁值降低4%。",
       "在狂暴姿态下的力量提高12%，威胁值降低6%。",
       "在狂暴姿态下的力量提高16%，威胁值降低8%。",
       "在狂暴姿态下的力量提高20%，威胁值降低10%。"
      ]
     },
     {
      "name": "Heroic Fury",
      "row": 8,
      "col": 0,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Removes any Immobilization effects and refreshes the cooldown of your Intercept ability."
      ],
      "cn": "英勇之怒",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>45 秒冷却时间</th></tr></table>移除所有定身效果，并刷新你的拦截技能的冷却时间。"
      ]
     },
     {
      "name": "Rampage",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": "Bloodthirst",
      "prereqRank": 1,
      "desc": [
       "Increases ranged and melee critical hit chance of all party and raid members within 100 yds by 5%."
      ],
      "cn": "暴怒",
      "cnDesc": [
       "瞬发使周围半径100码范围内所有小队和团队成员的远程和近战爆击几率提高5%。"
      ]
     },
     {
      "name": "Bloodsurge",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": "Bloodthirst",
      "prereqRank": 1,
      "desc": [
       "Your Heroic Strike, Bloodthirst, and Whirlwind hits have a 7% chance of making your next Slam instant for 5 sec.",
       "Your Heroic Strike, Bloodthirst, and Whirlwind hits have a 13% chance of making your next Slam instant for 5 sec.",
       "Your Heroic Strike, Bloodthirst, and Whirlwind hits have a 20% chance of making your next Slam instant for 5 sec."
      ],
      "cn": "血涌",
      "cnDesc": [
       "你的英勇打击、嗜血和旋风斩命中目标之后有7%的几率使你的下一次猛击技能变成瞬发，持续5 秒。",
       "你的英勇打击、嗜血和旋风斩命中目标之后有13%的几率使你的下一次猛击技能变成瞬发，持续5 秒。",
       "你的英勇打击、嗜血和旋风斩命中目标之后有20%的几率使你的下一次猛击技能变成瞬发，持续5 秒。"
      ]
     },
     {
      "name": "Unending Fury",
      "row": 9,
      "col": 1,
      "maxRank": 5,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the damage done by your Slam, Whirlwind and Bloodthirst abilities by 2%.",
       "Increases the damage done by your Slam, Whirlwind and Bloodthirst abilities by 4%.",
       "Increases the damage done by your Slam, Whirlwind and Bloodthirst abilities by 6%.",
       "Increases the damage done by your Slam, Whirlwind and Bloodthirst abilities by 8%.",
       "Increases the damage done by your Slam, Whirlwind and Bloodthirst abilities by 10%."
      ],
      "cn": "无尽狂怒",
      "cnDesc": [
       "使你的猛击、旋风斩和嗜血技能造成的伤害提高2%。",
       "使你的猛击、旋风斩和嗜血技能造成的伤害提高4%。",
       "使你的猛击、旋风斩和嗜血技能造成的伤害提高6%。",
       "使你的猛击、旋风斩和嗜血技能造成的伤害提高8%。",
       "使你的猛击、旋风斩和嗜血技能造成的伤害提高10%。"
      ]
     },
     {
      "name": "Titan's Grip",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Allows you to equip two-handed axes, maces and swords in one hand.  While you have a two-handed weapon equipped in one hand, your physical damage done is reduced by 10%."
      ],
      "cn": "泰坦之握",
      "cnDesc": [
       "使你可以用单手挥舞双手斧、双手锤或双手剑。当你以单手装备双手武器时，你造成的物理伤害降低10%。"
      ]
     }
    ],
    "sprite": "assets/sprites/warrior_fury.webp"
   },
   {
    "name": "Protection",
    "cn": "防护",
    "bg": "assets/tree-bg/warrior_protection.jpg",
    "talents": [
     {
      "name": "Improved Bloodrage",
      "row": 0,
      "col": 0,
      "maxRank": 2,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the rage generated by your Bloodrage ability by 25%.",
       "Increases the rage generated by your Bloodrage ability by 50%."
      ],
      "cn": "强化血性狂暴",
      "cnDesc": [
       "使你的血性狂暴技能产生的怒气值增加25%。",
       "使你的血性狂暴技能产生的怒气值增加50%。"
      ]
     },
     {
      "name": "Shield Specialization",
      "row": 0,
      "col": 1,
      "maxRank": 5,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your chance to block attacks with a shield by 1% and has a 20% chance to generate 5 rage when a block, dodge, or parry occurs.",
       "Increases your chance to block attacks with a shield by 2% and has a 40% chance to generate 5 rage when a block, dodge, or parry occurs.",
       "Increases your chance to block attacks with a shield by 3% and has a 60% chance to generate 5 rage when a block, dodge, or parry occurs.",
       "Increases your chance to block attacks with a shield by 4% and has a 80% chance to generate 5 rage when a block, dodge, or parry occurs.",
       "Increases your chance to block attacks with a shield by 5% and has a 100% chance to generate 5 rage when a block, dodge, or parry occurs."
      ],
      "cn": "盾牌专精",
      "cnDesc": [
       "使你用盾牌格挡攻击的几率提高1%，在成功格档、躲闪或招架后有20%的几率得到5点怒气。",
       "使你用盾牌格挡攻击的几率提高2%，在成功格档、躲闪或招架后有40%的几率得到5点怒气。",
       "使你用盾牌格挡攻击的几率提高3%，在成功格档、躲闪或招架后有60%的几率得到5点怒气。",
       "使你用盾牌格挡攻击的几率提高4%，在成功格档、躲闪或招架后有80%的几率得到5点怒气。",
       "使你用盾牌格挡攻击的几率提高5%，在成功格档、躲闪或招架后有100%的几率得到5点怒气。"
      ]
     },
     {
      "name": "Improved Thunder Clap",
      "row": 0,
      "col": 2,
      "maxRank": 3,
      "req": 0,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cost of your Thunder Clap ability by 1 rage point and increases the damage by 10% and the slowing effect by an additional 4%.",
       "Reduces the cost of your Thunder Clap ability by 2 rage points and increases the damage by 20% and the slowing effect by an additional 7%.",
       "Reduces the cost of your Thunder Clap ability by 4 rage points and increases the damage by 30% and the slowing effect by an additional 10%."
      ],
      "cn": "强化雷霆一击",
      "cnDesc": [
       "使你的雷霆一击技能所消耗的怒气值减少1点，伤害提高10%，减速效果提高4%。",
       "使你的雷霆一击技能所消耗的怒气值减少2点，伤害提高20%，减速效果提高7%。",
       "使你的雷霆一击技能所消耗的怒气值减少4点，伤害提高30%，减速效果提高10%。"
      ]
     },
     {
      "name": "Incite",
      "row": 1,
      "col": 1,
      "maxRank": 3,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases the critical strike chance of your Heroic Strike, Thunder Clap and Cleave abilities by 5%.",
       "Increases the critical strike chance of your Heroic Strike, Thunder Clap and Cleave abilities by 10%.",
       "Increases the critical strike chance of your Heroic Strike, Thunder Clap and Cleave abilities by 15%."
      ],
      "cn": "激动",
      "cnDesc": [
       "使你的英勇打击、雷霆一击和顺劈斩技能的爆击几率提高5%。",
       "使你的英勇打击、雷霆一击和顺劈斩技能的爆击几率提高10%。",
       "使你的英勇打击、雷霆一击和顺劈斩技能的爆击几率提高15%。"
      ]
     },
     {
      "name": "Anticipation",
      "row": 1,
      "col": 2,
      "maxRank": 5,
      "req": 5,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your Dodge chance by 1%.",
       "Increases your Dodge chance by 2%.",
       "Increases your Dodge chance by 3%.",
       "Increases your Dodge chance by 4%.",
       "Increases your Dodge chance by 5%."
      ],
      "cn": "预知",
      "cnDesc": [
       "使你的躲闪几率提高1%。",
       "使你的躲闪几率提高2%。",
       "使你的躲闪几率提高3%。",
       "使你的躲闪几率提高4%。",
       "使你的躲闪几率提高5%。"
      ]
     },
     {
      "name": "Last Stand",
      "row": 2,
      "col": 0,
      "maxRank": 1,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "When activated, this ability temporarily grants you 30% of your maximum health for 20 sec. After the effect expires, the health is lost."
      ],
      "cn": "破釜沉舟",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>3 分钟冷却时间</th></tr></table>激活之后，使你暂时获得相当于最大生命值30%的生命值，持续20 秒。在效果解除之后，这些生命值会被扣除。"
      ]
     },
     {
      "name": "Improved Revenge",
      "row": 2,
      "col": 1,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases damage of your Revenge ability by 30% and causes Revenge to strike an additional target for 50% damage.",
       "Increases damage of your Revenge ability by 60% and causes Revenge to strike an additional target."
      ],
      "cn": "强化复仇",
      "cnDesc": [
       "使你的复仇技能所造成的伤害提高30%，并对另外一个目标造成50%的伤害。",
       "使你的复仇技能所造成的伤害提高60%，并对另外一个目标造成伤害。"
      ]
     },
     {
      "name": "Shield Mastery",
      "row": 2,
      "col": 2,
      "maxRank": 2,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your block value by 15% and reduces the cooldown of your Shield Block ability by 10 sec.",
       "Increases your block value by 30% and reduces the cooldown of your Shield Block ability by 20 sec."
      ],
      "cn": "盾牌掌握",
      "cnDesc": [
       "使你的格挡值提高15%，盾牌格挡技能的冷却时间缩短10秒。",
       "使你的格挡值提高30%，盾牌格挡技能的冷却时间缩短20秒。"
      ]
     },
     {
      "name": "Toughness",
      "row": 2,
      "col": 3,
      "maxRank": 5,
      "req": 10,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your armor value from items by 2% and reduces the duration of all movement slowing effects by 6%.",
       "Increases your armor value from items by 4% and reduces the duration of all movement slowing effects by 12%.",
       "Increases your armor value from items by 6% and reduces the duration of all movement slowing effects by 18%.",
       "Increases your armor value from items by 8% and reduces the duration of all movement slowing effects by 24%.",
       "Increases your armor value from items by 10% and reduces the duration of all movement slowing effects by 30%."
      ],
      "cn": "坚韧",
      "cnDesc": [
       "使你因装备而获得的护甲值提高2%，所有移动限制效果的持续时间缩短6%。",
       "使你因装备而获得的护甲值提高4%，所有移动限制效果的持续时间缩短12%。",
       "使你因装备而获得的护甲值提高6%，所有移动限制效果的持续时间缩短18%。",
       "使你因装备而获得的护甲值提高8%，所有移动限制效果的持续时间缩短24%。",
       "使你因装备而获得的护甲值提高10%，所有移动限制效果的持续时间缩短30%。"
      ]
     },
     {
      "name": "Improved Spell Reflection",
      "row": 3,
      "col": 0,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the chance you'll be hit by spells by 2% and when the ability is used it will reflect the first spell cast against the 2 closest party members within 20 yards.",
       "Reduces the chance you'll be hit by spells by 4% and when the ability is used it will reflect the first spell cast against the 4 closest party members within 20 yards."
      ],
      "cn": "强化法术反射",
      "cnDesc": [
       "使你被法术命中的几率降低2%，当你使用法术反射技能时，它会反射向你身边半径20码范围内的2个小队成员施放的第一个法术。",
       "使你被法术命中的几率降低4%，当你使用法术反射技能时，它会反射向你身边半径20码范围内的4个小队成员施放的第一个法术。"
      ]
     },
     {
      "name": "Improved Disarm",
      "row": 3,
      "col": 1,
      "maxRank": 2,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Disarm ability by 10 sec and causes the target to take an additional 5% damage while disarmed.",
       "Reduces the cooldown of your Disarm ability by 20 sec and causes the target to take an additional 10% damage while disarmed."
      ],
      "cn": "强化缴械",
      "cnDesc": [
       "使你的缴械技能的冷却时间缩短10秒，被缴械的目标受到的伤害提高5%。",
       "使你的缴械技能的冷却时间缩短20秒，被缴械的目标受到的伤害提高10%。"
      ]
     },
     {
      "name": "Puncture",
      "row": 3,
      "col": 2,
      "maxRank": 3,
      "req": 15,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the rage cost of your Sunder Armor and Devastate abilities by 1.",
       "Reduces the rage cost of your Sunder Armor and Devastate abilities by 2.",
       "Reduces the rage cost of your Sunder Armor and Devastate abilities by 3."
      ],
      "cn": "刺穿",
      "cnDesc": [
       "使你的破甲攻击和毁灭打击消耗的怒气值减少1点。",
       "使你的破甲攻击和毁灭打击消耗的怒气值减少2点。",
       "使你的破甲攻击和毁灭打击消耗的怒气值减少3点。"
      ]
     },
     {
      "name": "Improved Disciplines",
      "row": 4,
      "col": 0,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the cooldown of your Shield Wall, Retaliation and Recklessness abilities by 30 secs.",
       "Reduces the cooldown of your Shield Wall, Retaliation and Recklessness abilities by 60 secs."
      ],
      "cn": "强化戒律",
      "cnDesc": [
       "使你的盾墙、反击风暴和鲁莽的冷却时间缩短30秒。",
       "使你的盾墙、反击风暴和鲁莽的冷却时间缩短60秒。"
      ]
     },
     {
      "name": "Concussion Blow",
      "row": 4,
      "col": 1,
      "maxRank": 1,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Stuns the opponent for 5 sec and deals 38/100*AP damage (based on attack power)."
      ],
      "cn": "震荡猛击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>15 怒气</td><th>近战范围</th></tr></table><table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>30 秒冷却时间</th></tr></table>使目标昏迷5 秒，并造成38/100*攻击强度点伤害（此伤害值受到攻击强度加成影响）。"
      ]
     },
     {
      "name": "Gag Order",
      "row": 4,
      "col": 2,
      "maxRank": 2,
      "req": 20,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Gives your Shield Bash and Heroic Throw abilities a 50% chance to silence the target for 3 sec and increases the damage of your Shield Slam ability by 5%.",
       "Gives your Shield Bash and Heroic Throw abilities a 100% chance to silence the target for 3 sec and increases the damage of your Shield Slam ability by 10%."
      ],
      "cn": "禁令",
      "cnDesc": [
       "你的盾击和英勇投掷有50%的几率使目标沉默3 秒，盾牌猛击造成的伤害提高5%。",
       "你的盾击和英勇投掷有100%的几率使目标沉默3 秒，盾牌猛击造成的伤害提高10%。"
      ]
     },
     {
      "name": "One-Handed Weapon Specialization",
      "row": 5,
      "col": 2,
      "maxRank": 5,
      "req": 25,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases physical damage you deal when a one-handed melee weapon is equipped by 2%.",
       "Increases physical damage you deal when a one-handed melee weapon is equipped by 4%.",
       "Increases physical damage you deal when a one-handed melee weapon is equipped by 6%.",
       "Increases physical damage you deal when a one-handed melee weapon is equipped by 8%.",
       "Increases physical damage you deal when a one-handed melee weapon is equipped by 10%."
      ],
      "cn": "单手武器专精",
      "cnDesc": [
       "在你装备单手近战武器时，使你的物理伤害提高2%。",
       "在你装备单手近战武器时，使你的物理伤害提高4%。",
       "在你装备单手近战武器时，使你的物理伤害提高6%。",
       "在你装备单手近战武器时，使你的物理伤害提高8%。",
       "在你装备单手近战武器时，使你的物理伤害提高10%。"
      ]
     },
     {
      "name": "Improved Defensive Stance",
      "row": 6,
      "col": 0,
      "maxRank": 2,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "While in Defensive Stance all spell damage is reduced by 3% and when you Block, Parry or Dodge an attack you have a 50% chance to become Enraged, increasing Physical damage caused by 5% for 12 sec.",
       "While in Defensive Stance all spell damage is reduced by 6% and when you Block, Parry or Dodge an attack you have a 100% chance to become Enraged, increasing Physical damage caused by 10% for 12 sec."
      ],
      "cn": "强化防御姿态",
      "cnDesc": [
       "在防御姿态下受到的所有法术伤害降低3%。当你格挡、招架或躲闪攻击时，有50%的几率进入激怒状态，使你造成的物理伤害提高5%，持续12 秒。",
       "在防御姿态下受到的所有法术伤害降低6%。当你格挡、招架或躲闪攻击时，有100%的几率进入激怒状态，使你造成的物理伤害提高10%，持续12 秒。"
      ]
     },
     {
      "name": "Vigilance",
      "row": 6,
      "col": 1,
      "maxRank": 1,
      "req": 30,
      "prereq": "Concussion Blow",
      "prereqRank": 1,
      "desc": [
       "Focus your protective gaze on a group or raid target, reducing their damage taken by 3% and transfers 10% of the threat they cause to you. In addition, each time they are hit by an attack your Taunt cooldown is refreshed. Lasts 30 min. This effect can only be on one target at a time."
      ],
      "cn": "警戒",
      "cnDesc": [
       "30码范围<br />瞬发你专注于保护小队或团队中的一个友方目标，使其受到的伤害降低3%，并将其产生的威胁值的<!--sp63326:0-->10<!--sp63326-->%转移给你。另外，每当该目标被攻击命中，你的嘲讽技能的冷却时间就立即结束。该效果持续30 分钟。你在同一时间内只能对一个目标使用警戒技能。"
      ]
     },
     {
      "name": "Focused Rage",
      "row": 6,
      "col": 2,
      "maxRank": 3,
      "req": 30,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces the rage cost of your offensive abilities by 1.",
       "Reduces the rage cost of your offensive abilities by 2.",
       "Reduces the rage cost of your offensive abilities by 3."
      ],
      "cn": "怒火专注",
      "cnDesc": [
       "使你的所有攻击技能所消耗的怒气值降低1。",
       "使你的所有攻击技能所消耗的怒气值降低2。",
       "使你的所有攻击技能所消耗的怒气值降低3。"
      ]
     },
     {
      "name": "Vitality",
      "row": 7,
      "col": 1,
      "maxRank": 3,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Increases your total Strength by 2%, Stamina by 3% and your Expertise by 2.",
       "Increases your total Strength by 4%, Stamina by 6% and your Expertise by 4.",
       "Increases your total Strength by 6%, Stamina by 9% and your Expertise by 6."
      ],
      "cn": "活力",
      "cnDesc": [
       "使你的耐力总值提高3%，力量总值提高2%，精准提高2。",
       "使你的耐力总值提高6%，力量总值提高4%，精准提高4。",
       "使你的耐力总值提高9%，力量总值提高6%，精准提高6。"
      ]
     },
     {
      "name": "Safeguard",
      "row": 7,
      "col": 2,
      "maxRank": 2,
      "req": 35,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Reduces damage taken by the target of your Intervene ability by 15% for 6 sec.",
       "Reduces damage taken by the target of your Intervene ability by 30% for 6 sec."
      ],
      "cn": "捍卫",
      "cnDesc": [
       "使你的援护技能的目标受到的伤害降低15%，持续6 秒。",
       "使你的援护技能的目标受到的伤害降低30%，持续6 秒。"
      ]
     },
     {
      "name": "Warbringer",
      "row": 8,
      "col": 0,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your Charge, Intercept and Intervene abilities are now usable while in combat and in any stance.  In addition, your Intervene ability will remove all movement impairing effects."
      ],
      "cn": "战神",
      "cnDesc": [
       "你可以在战斗中以及任何姿态下使用冲锋、拦截和援护技能。另外，你的援护技能可以移除所有移动限制效果。"
      ]
     },
     {
      "name": "Devastate",
      "row": 8,
      "col": 1,
      "maxRank": 1,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Sunder the target's armor causing the Sunder Armor effect.  In addition, causes 120% of weapon damage plus 58 for each application of Sunder Armor on the target.  The Sunder Armor effect can stack up to 5 times."
      ],
      "cn": "毁灭打击",
      "cnDesc": [
       "<table width='100%' style='background:none;border:0;'><tr><td>15 怒气</td><th>近战范围</th></tr></table>瞬发击碎目标的护甲，对其造成破甲效果。另外还可以造成120%的武器伤害，外加目标身上每层破甲效果所提供的58点伤害加成。破甲效果可以叠加最多5次。"
      ]
     },
     {
      "name": "Critical Block",
      "row": 8,
      "col": 2,
      "maxRank": 3,
      "req": 40,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Your successful blocks have a 20% chance to block double the normal amount and increases your chance to critically hit with your Shield Slam ability by an additional 5%.",
       "Your successful blocks have a 40% chance to block double the normal amount and increases your chance to critically hit with your Shield Slam ability by an additional 10%.",
       "Your successful blocks have a 60% chance to block double the normal amount and increases your chance to critically hit with your Shield Slam ability by an additional 15%."
      ],
      "cn": "精确格挡",
      "cnDesc": [
       "你的成功格挡有20%的几率格挡掉双倍于你的格挡值的伤害。你的盾牌猛击技能的爆击几率提高5%。",
       "你的成功格挡有40%的几率格挡掉双倍于你的格挡值的伤害。你的盾牌猛击技能的爆击几率提高10%。",
       "你的成功格挡有60%的几率格挡掉双倍于你的格挡值的伤害。你的盾牌猛击技能的爆击几率提高15%。"
      ]
     },
     {
      "name": "Sword and Board",
      "row": 9,
      "col": 1,
      "maxRank": 3,
      "req": 45,
      "prereq": "Devastate",
      "prereqRank": 1,
      "desc": [
       "Increases the critical strike chance of your Devastate ability by 5% and when your Devastate or Revenge ability deals damage it has a 10% chance of refreshing the cooldown of your Shield Slam ability and reducing its cost by 100% for 5 sec.",
       "Increases the critical strike chance of your Devastate ability by 10% and when your Devastate or Revenge ability deals damage it has a 20% chance of refreshing the cooldown of your Shield Slam ability and reducing its cost by 100% for 5 sec.",
       "Increases the critical strike chance of your Devastate ability by 15% and when your Devastate or Revenge ability deals damage it has a 30% chance of refreshing the cooldown of your Shield Slam ability and reducing its cost by 100% for 5 sec."
      ],
      "cn": "剑盾猛攻",
      "cnDesc": [
       "使你的毁灭打击的爆击几率提高5%。当你的毁灭打击或复仇造成伤害时，有10%的几率令你的盾牌猛击技能结束冷却，并使其消耗的怒气值减少100%，持续5 秒。",
       "使你的毁灭打击的爆击几率提高10%。当你的毁灭打击或复仇造成伤害时，有20%的几率令你的盾牌猛击技能结束冷却，并使其消耗的怒气值减少100%，持续5 秒。",
       "使你的毁灭打击的爆击几率提高15%。当你的毁灭打击或复仇造成伤害时，有30%的几率令你的盾牌猛击技能结束冷却，并使其消耗的怒气值减少100%，持续5 秒。"
      ]
     },
     {
      "name": "Damage Shield",
      "row": 9,
      "col": 2,
      "maxRank": 2,
      "req": 45,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Requires Shields Whenever you take damage from or block a melee attack you cause damage equal to 10% of your block value.",
       "Requires Shields Whenever you take damage from or block a melee attack you cause damage equal to 20% of your block value."
      ],
      "cn": "盾牌反伤",
      "cnDesc": [
       "每当你受到近战伤害，或格挡近战伤害，就可以对攻击者造成反弹伤害，数值相当于你的格挡值的10%。",
       "每当你受到近战伤害，或格挡近战伤害，就可以对攻击者造成反弹伤害，数值相当于你的格挡值的20%。"
      ]
     },
     {
      "name": "Shockwave",
      "row": 10,
      "col": 1,
      "maxRank": 1,
      "req": 50,
      "prereq": null,
      "prereqRank": 0,
      "desc": [
       "Sends a wave of force in front of the warrior, causing 75/100*AP damage (based on attack power) and stunning all enemy targets within 10 yards in a frontal cone for 4 sec."
      ],
      "cn": "震荡波",
      "cnDesc": [
       "15 怒气<table width='100%' style='background:none;border:0;'><tr><td>瞬发</td><th>20 秒冷却时间</th></tr></table>向前方释放出强大的能量波，造成75/100*攻击强度点伤害（受攻击强度加成影响），并使你面前半径10码范围内的正面锥形区域中的所有敌方目标昏迷4 秒。"
      ]
     }
    ],
    "sprite": "assets/sprites/warrior_protection.webp"
   }
  ],
  "icon": "assets/class-icons/warrior.jpg"
 }
];