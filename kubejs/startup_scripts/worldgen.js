// priority: 100
onEvent("worldgen.remove", (event) => {
  // event.printFeatures("", "minecraft:lush_caves");
  event.removeAllFeatures([
    "minecraft:plains",
    "minecraft:nether_wastes",
    "minecraft:the_end",
    "minecraft:forest",
  ]);

  event.removeOres((ores) => {
    ores.blocks = ["thermal:ruby_ore", "thermal:deepslate_ruby_ore"];
  });

  const removeByFeature = [
    {
      biome: "minecraft:lush_caves",
      feature: "lakes",
      ids: ["minecraft:lake_lava_underground", "minecraft:lake_lava_surface"],
    },
    {
      biome: "minecraft:lush_caves",
      feature: "underground_structures",
      ids: ["minecraft:monster_room", "minecraft:monster_room_deep"],
    },
  ];

  removeByFeature.forEach((i) => {
    i.ids.forEach((id) => {
      event.removeFeatureById(i.biome, i.feature, id);
    });
  });
});

onEvent("worldgen.add", (event) => {
  event.addSpawn((spawn) => {
    spawn.category = "creature";
    spawn.entity = "minecraft:rabbit";
    spawn.weight = 6;
    spawn.minCount = 4;
    spawn.maxCount = 4;
    spawn.biomes = "minecraft:plains";
  });

  event.addSpawn((spawn) => {
    spawn.category = "creature";
    spawn.entity = "ars_nouveau:drygmy";
    spawn.weight = 3;
    spawn.minCount = 1;
    spawn.maxCount = 2;
    spawn.biomes = "minecraft:plains";
  });

  event.addSpawn((spawn) => {
    spawn.category = "creature";
    spawn.entity = "ars_nouveau:starbuncle";
    spawn.weight = 5;
    spawn.minCount = 1;
    spawn.maxCount = 2;
    spawn.biomes = "minecraft:plains";
  });

  event.addSpawn((spawn) => {
    spawn.category = "creature";
    spawn.entity = "ars_nouveau:whirlisprig";
    spawn.weight = 5;
    spawn.minCount = 1;
    spawn.maxCount = 2;
    spawn.biomes = "minecraft:plains";
  });
});
