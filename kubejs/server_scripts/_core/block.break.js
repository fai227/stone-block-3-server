const allowedToBreak = [
  "projecte:philosophers_stone",
  "buildinggadgets:gadget_exchanging",
  "minecraft:air",
  "botania:exchange_rod",
  "projecte:mercurial_eye",
  "mekanism:cardboard_box",
];

const ars = [
  "ars_nouveau:novice_spell_book",
  "ars_nouveau:apprentice_spell_book",
  "ars_nouveau:archmage_spell_book",
];

const wand = [
  "constructionwand:stone_wand",
  "constructionwand:iron_wand",
  "constructionwand:diamond_wand",
  "constructionwand:infinity_wand",
];

onEvent("block.break", (event) => {
  if (event.block === "minecraft:stone" && event.player) {
    // console.log(event.player.mainHandItem);
    if (!event.player.mainHandItem.hasTag("ftbstoneblock:pickaxe")) {
      //Support for Ars Nouveau break spell
      if (ars.includes(event.player.mainHandItem.id)) {
        var inbt = event.player.mainHandItem.nbt;
        if (inbt && inbt !== "{}") {
          var allowedSpells = [
            "break",
            "exchange",
            "conjure_water",
            "gravity",
            "grow",
            "intangible",
            "interact",
            "gust",
            "launch",
            "pull",
            "smelt",
            "explosion",
          ];
          var s = inbt.ars_nouveau_spellCaster;
          var k = s.current_slot.toString();
          var b = allowedSpells.some((v) => s[`spell_${k}`].includes(v));
          if (b) {
            return;
          } else {
            event.cancel();
            event.block.set("minecraft:air");
            return;
          }
        } else {
          event.cancel();
          event.block.set("minecraft:air");
          return;
        }
      }

      //Support for Construction Wand's Destruction Core
      if (wand.includes(event.player.mainHandItem.id)) {
        var inbt = event.player.mainHandItem.nbt;
        if (inbt && inbt !== "{wand_options:{}}") {
          var cores = inbt.wand_options.cores;
          var coresSel = inbt.wand_options.cores_sel
            .toString()
            .replace("b", "");
          var selectedCore = cores[coresSel - 1];
          if (
            selectedCore &&
            selectedCore === "constructionwand:core_destruction"
          ) {
            return;
          } else {
            event.cancel();
            event.block.set("minecraft:air");
            return;
          }
        }
      }

      if (!allowedToBreak.includes(event.player.mainHandItem.id)) {
        event.cancel();
        event.block.set("minecraft:air");
        return;
      }
    }
  }
});
