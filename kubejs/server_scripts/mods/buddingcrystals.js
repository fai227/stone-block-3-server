const resources = [
  {
    type: "redstone",
    breakdown: {
      first: {
        output: "4x minecraft:redstone",
        chance: 1.0,
      },
      second: {
        output: "2x minecraft:redstone",
        chance: 0.13,
      },
    },
  },
  {
    type: "diamond",
    breakdown: {
      first: {
        output: "2x minecraft:diamond",
        chance: 1.0,
      },
      second: {
        output: "minecraft:diamond",
        chance: 0.13,
      },
    },
  },
  {
    type: "emerald",
    breakdown: {
      first: {
        output: "2x minecraft:emerald",
        chance: 1.0,
      },
      second: {
        output: "minecraft:emerald",
        chance: 0.13,
      },
    },
  },
  {
    type: "lapis_lazuli",
    breakdown: {
      first: {
        output: "4x minecraft:lapis_lazuli",
        chance: 1.0,
      },
      second: {
        output: "2x minecraft:lapis_lazuli",
        chance: 0.13,
      },
    },
  },
  {
    type: "glowstone",
    breakdown: {
      first: {
        output: "4x minecraft:glowstone_dust",
        chance: 1.0,
      },
      second: {
        output: "2x minecraft:glowstone_dust",
        chance: 0.13,
      },
    },
  },
  {
    type: "nether_quartz",
    breakdown: {
      first: {
        output: "4x minecraft:quartz",
        chance: 1.0,
      },
      second: {
        output: "2x minecraft:quartz",
        chance: 0.13,
      },
    },
  },
  {
    type: "prismarine",
    breakdown: {
      first: {
        output: "4x minecraft:prismarine",
        chance: 1.0,
      },
      second: {
        output: "2x minecraft:prismarine",
        chance: 0.13,
      },
    },
  },
  {
    type: "certus_quartz",
    breakdown: {
      first: {
        output: "4x ae2:certus_quartz_crystal",
        chance: 1.0,
      },
      second: {
        output: "2x ae2:certus_quartz_crystal",
        chance: 0.13,
      },
    },
  },
  {
    type: "fluix",
    breakdown: {
      first: {
        output: "4x ae2:fluix_crystal",
        chance: 1.0,
      },
      second: {
        output: "2x ae2:fluix_crystal",
        chance: 0.13,
      },
    },
  },
  {
    type: "salt",
    breakdown: {
      first: {
        output: "4x mekanism:salt",
        chance: 1.0,
      },
      second: {
        output: "2x mekanism:salt",
        chance: 0.13,
      },
    },
  },
  {
    type: "fluorite",
    breakdown: {
      first: {
        output: "4x mekanism:fluorite_gem",
        chance: 1.0,
      },
      second: {
        output: "2x mekanism:fluorite_gem",
        chance: 0.13,
      },
    },
  },
];

onEvent("block.loot_tables", (event) => {
  resources.forEach((resource) => {
    event.addBlock(`buddingcrystals:budding_${resource.type}`, (table) => {
      table.addPool((pool) => {
        (pool.rolls = 1), pool.addItem(`buddingcrystals:budding_${resource.type}`);
        pool.addCondition({
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:silk_touch",
                levels: {
                  min: 1,
                },
              },
            ],
          },
        });
      });
    });
  });
});

onEvent("recipes", (event) => {
  resources.forEach((resource) => {
    event
      .shaped(`buddingcrystals:medium_${resource.type}_bud`, ["rr", "rr"], {
        r: `buddingcrystals:small_${resource.type}_bud`,
      })
      .id(`ftbstoneblock:buddingcrystals/small_${resource.type}_to_medium`);
    event
      .shaped(`buddingcrystals:large_${resource.type}_bud`, ["rr", "rr"], {
        r: `buddingcrystals:medium_${resource.type}_bud`,
      })
      .id(`ftbstoneblock:buddingcrystals/medium_${resource.type}_to_large`);
    event
      .shaped(`buddingcrystals:${resource.type}_cluster`, ["rr", "rr"], {
        r: `buddingcrystals:large_${resource.type}_bud`,
      })
      .id(`ftbstoneblock:buddingcrystals/large_${resource.type}_to_crystal`);

    event.recipes
      .createCrushing(
        [
          Item.of(resource.breakdown.first.output).withChance(resource.breakdown.first.chance),
          Item.of(resource.breakdown.second.output).withChance(resource.breakdown.second.chance),
          Item.of(`buddingcrystals:small_${resource.type}_bud`).withChance(0.23),
        ],
        `buddingcrystals:${resource.type}_cluster`
      )
      .id(`ftbstoneblock:buddingcrystals/crystal_${resource.type}_breakdown/create`);
  });

  resources.forEach((resource) => {
    event.recipes.thermal
      .crystallizer(`12x buddingcrystals:small_${resource.type}_bud`, [
        `buddingcrystals:budding_${resource.type}`,
        `buddingcrystals:crystal_catalyst`,
        Fluid.of(`tconstruct:molten_amethyst`, 800),
      ])
      .energy(50000)
      .id(`ftbstoneblock:buddingcrystals/crystallizer/small_${resource.type}_bud`);

    // small => medium, medium => large, each at a 75% chance and using 1B of water
    event.recipes.thermal
      .crystallizer(Item.of(`2x buddingcrystals:medium_${resource.type}_bud`).withChance(0.75), [
        `3x buddingcrystals:small_${resource.type}_bud`,
        `2x buddingcrystals:crystal_catalyst`,
        Fluid.of(`minecraft:water`, 1000),
      ])
      .energy(10000)
      .id(`ftbstoneblock:buddingcrystals/crystallizer/medium_${resource.type}_bud`);

    event.recipes.thermal
      .crystallizer(Item.of(`2x buddingcrystals:large_${resource.type}_bud`).withChance(0.75), [
        `3x buddingcrystals:medium_${resource.type}_bud`,
        `4x buddingcrystals:crystal_catalyst`,
        Fluid.of(`minecraft:water`, 2000),
      ])
      .energy(20000)
      .id(`ftbstoneblock:buddingcrystals/crystallizer/large_${resource.type}_bud`);
  });
});
