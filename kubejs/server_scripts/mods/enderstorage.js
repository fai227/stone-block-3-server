onEvent("recipes", (event) => {
  //Remove Create x EnderStorage issues, then re-add the recipes manually.
  //https://github.com/FTBTeam/FTB-Modpack-Issues/issues/2565
  //https://github.com/Creators-of-Create/Create/issues/4122
  event.remove({ type: "enderstorage:recolour_recipe" });
  event.remove({ type: "enderstorage:create_recipe" });

  event.shaped("enderstorage:ender_tank", ["BWB", "OCO", "BPB"], {
    P: "#forge:ender_pearls",
    O: "#forge:obsidian",
    C: "minecraft:cauldron",
    B: "minecraft:blaze_rod",
    W: "#forge:wool"
  });

  event.shaped("enderstorage:ender_pouch", ["BLB", "LPL", "BWB"], {
    P: "#forge:ender_pearls",
    L: "#forge:leather",
    B: "minecraft:blaze_rod",
    W: "#forge:wool"
  });

  event.shaped("enderstorage:ender_chest", ["BWB", "OCO", "BPB"], {
    P: "#forge:ender_pearls",
    O: "#forge:obsidian",
    C: "#forge:chests/wooden",
    B: "minecraft:blaze_rod",
    W: "#forge:wool"
  });
});
