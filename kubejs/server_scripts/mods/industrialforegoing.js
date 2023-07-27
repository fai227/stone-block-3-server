onEvent("recipes", (event) => {
  //Rudy are not used.
  event.remove({ id: "industrialforegoing:laser_drill_ore/ores/ruby" });

  //Sapphire are not used.
  event.remove({ id: "industrialforegoing:laser_drill_ore/ores/sapphire" });

  event.recipes.industrialforegoing.laser_drill_ore({
    output: {
      tag: "forge:raw_materials/zinc",
    },
    rarity: [
      {
        whitelist: {},
        blacklist: {
          type: "minecraft:worldgen/biome",
          values: [
            "minecraft:the_end",
            "minecraft:the_void",
            "minecraft:small_end_islands",
            "minecraft:end_barrens",
            "minecraft:end_highlands",
            "minecraft:end_midlands",
          ],
        },
        depth_min: 10,
        depth_max: 40,
        weight: 5,
      },
      {
        whitelist: {},
        blacklist: {
          type: "minecraft:worldgen/biome",
          values: [
            "minecraft:the_end",
            "minecraft:the_void",
            "minecraft:small_end_islands",
            "minecraft:end_barrens",
            "minecraft:end_highlands",
            "minecraft:end_midlands",
          ],
        },
        depth_min: 0,
        depth_max: 255,
        weight: 1,
      },
    ],
    pointer: 0,
    catalyst: {
      item: "industrialforegoing:laser_lens7",
    },
  });

  event.recipes.industrialforegoing
    .laser_drill_ore({
      output: {
        tag: "forge:raw_materials/gold",
      },
      rarity: [
        {
          whitelist: {},
          blacklist: {
            type: "minecraft:worldgen/biome",
            values: [
              "minecraft:the_end",
              "minecraft:the_void",
              "minecraft:small_end_islands",
              "minecraft:end_barrens",
              "minecraft:end_highlands",
              "minecraft:end_midlands",
            ],
          },
          depth_min: 32,
          depth_max: 80,
          weight: 16,
        },
        {
          whitelist: {},
          blacklist: {
            type: "minecraft:worldgen/biome",
            values: [
              "minecraft:the_end",
              "minecraft:the_void",
              "minecraft:small_end_islands",
              "minecraft:end_barrens",
              "minecraft:end_highlands",
              "minecraft:end_midlands",
            ],
          },
          depth_min: 0,
          depth_max: 255,
          weight: 1,
        },
      ],
      pointer: 0,
      catalyst: {
        item: "industrialforegoing:laser_lens4",
      },
    })
    .id("industrialforegoing:laser_drill_ore/raw_materials/gold");

  event.recipes.industrialforegoing
    .laser_drill_ore({
      output: {
        item: "minecraft:emerald_ore",
      },
      rarity: [
        {
          whitelist: {},
          blacklist: {
            type: "minecraft:worldgen/biome",
            values: [
              "minecraft:the_end",
              "minecraft:the_void",
              "minecraft:small_end_islands",
              "minecraft:end_barrens",
              "minecraft:end_highlands",
              "minecraft:end_midlands",
            ],
          },
          depth_min: 5,
          depth_max: 29,
          weight: 8,
        },
        {
          whitelist: {},
          blacklist: {
            type: "minecraft:worldgen/biome",
            values: [
              "minecraft:the_end",
              "minecraft:the_void",
              "minecraft:small_end_islands",
              "minecraft:end_barrens",
              "minecraft:end_highlands",
              "minecraft:end_midlands",
            ],
          },
          depth_min: 0,
          depth_max: 255,
          weight: 1,
        },
      ],
      pointer: 0,
      catalyst: {
        item: "industrialforegoing:laser_lens5",
      },
    })
    .id("industrialforegoing:laser_drill_ore/emerald");
});
