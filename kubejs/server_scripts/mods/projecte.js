onEvent("recipes", (event) => {
  event.remove({ id: "projecte:dm_helmet" });
  event.recipes.createMechanicalCrafting("projecte:dm_helmet", ["DDD", "DHD"], {
    D: {
      item: "projecte:dark_matter",
    },
    H: {
      item: "ftbstoneblock:silverfish_heart",
    },
  });

  event.remove({ id: "projecte:dm_chestplate" });
  event.recipes.createMechanicalCrafting(
    "projecte:dm_chestplate",
    ["DHD", "DDD", "DDD"],
    {
      D: {
        item: "projecte:dark_matter",
      },
      H: {
        item: "ftbstoneblock:silverfish_heart",
      },
    }
  );

  event.remove({ id: "projecte:dm_leggings" });
  event.recipes.createMechanicalCrafting(
    "projecte:dm_leggings",
    ["DDD", "DHD", "D D"],
    {
      D: {
        item: "projecte:dark_matter",
      },
      H: {
        item: "ftbstoneblock:silverfish_heart",
      },
    }
  );

  event.remove({ id: "projecte:dm_boots" });
  event.recipes.createMechanicalCrafting("projecte:dm_boots", ["DHD", "D D"], {
    D: {
      item: "projecte:dark_matter",
    },
    H: {
      item: "ftbstoneblock:silverfish_heart",
    },
  });

  event.remove({ id: "projecte:dm_pick" });
  event.recipes.createMechanicalCrafting(
    "projecte:dm_pick",
    ["DHD", " G ", " G "],
    {
      D: {
        item: "projecte:dark_matter",
      },
      G: {
        tag: "forge:gems/diamond",
      },
      H: {
        item: "ftbstoneblock:silverfish_heart",
      },
    }
  );

  event.remove({ id: "projecte:dm_shears" });
  event.recipes.createMechanicalCrafting("projecte:dm_shears", ["HD", "G "], {
    D: {
      item: "projecte:dark_matter",
    },
    G: {
      tag: "forge:gems/diamond",
    },
    H: {
      item: "ftbstoneblock:silverfish_heart",
    },
  });

  event.remove({ id: "projecte:dm_hammer" });
  event.recipes.createMechanicalCrafting(
    "projecte:dm_hammer",
    ["DGD", " H ", " G "],
    {
      D: {
        item: "projecte:dark_matter",
      },
      G: {
        tag: "forge:gems/diamond",
      },
      H: {
        item: "ftbstoneblock:silverfish_heart",
      },
    }
  );

  event.remove({ id: "projecte:dm_axe" });
  event.recipes.createMechanicalCrafting(
    "projecte:dm_axe",
    ["HD ", "DG ", " G "],
    {
      D: {
        item: "projecte:dark_matter",
      },
      G: {
        tag: "forge:gems/diamond",
      },
      H: {
        item: "ftbstoneblock:silverfish_heart",
      },
    }
  );

  event.remove({ id: "projecte:dm_shovel" });
  event.recipes.createMechanicalCrafting(
    "projecte:dm_shovel",
    [" D ", " H ", " G "],
    {
      D: {
        item: "projecte:dark_matter",
      },
      G: {
        tag: "forge:gems/diamond",
      },
      H: {
        item: "ftbstoneblock:silverfish_heart",
      },
    }
  );

  event.remove({ id: "projecte:dm_sword" });
  event.recipes.createMechanicalCrafting(
    "projecte:dm_sword",
    [" H ", " D ", " G "],
    {
      D: {
        item: "projecte:dark_matter",
      },
      G: {
        tag: "forge:gems/diamond",
      },
      H: {
        item: "ftbstoneblock:silverfish_heart",
      },
    }
  );

  event.remove({ id: "projecte:dm_hoe" });
  event.recipes.createMechanicalCrafting(
    "projecte:dm_hoe",
    ["DH ", " G ", " G "],
    {
      D: {
        item: "projecte:dark_matter",
      },
      G: {
        tag: "forge:gems/diamond",
      },
      H: {
        item: "ftbstoneblock:silverfish_heart",
      },
    }
  );

  event.remove({ id: "projecte:rm_helmet" });
  event.recipes.createMechanicalCrafting("projecte:rm_helmet", ["DDD", "DHD"], {
    D: {
      item: "projecte:red_matter",
    },
    H: {
      item: "projecte:dm_helmet",
    },
  });

  event.remove({ id: "projecte:rm_chestplate" });
  event.recipes.createMechanicalCrafting(
    "projecte:rm_chestplate",
    ["DHD", "DDD", "DDD"],
    {
      D: {
        item: "projecte:red_matter",
      },
      H: {
        item: "projecte:dm_chestplate",
      },
    }
  );

  event.remove({ id: "projecte:rm_leggings" });
  event.recipes.createMechanicalCrafting(
    "projecte:rm_leggings",
    ["DDD", "DHD", "D D"],
    {
      D: {
        item: "projecte:red_matter",
      },
      H: {
        item: "projecte:dm_leggings",
      },
    }
  );

  event.remove({ id: "projecte:rm_boots" });
  event.recipes.createMechanicalCrafting("projecte:rm_boots", ["DHD", "D D"], {
    D: {
      item: "projecte:red_matter",
    },
    H: {
      item: "projecte:dm_boots",
    },
  });

  event.remove({ id: "projecte:rm_pick" });
  event.recipes.createMechanicalCrafting(
    "projecte:rm_pick",
    ["DDD", " H ", " G "],
    {
      D: {
        item: "projecte:red_matter",
      },
      G: {
        item: "projecte:dark_matter",
      },
      H: {
        item: "projecte:dm_pick",
      },
    }
  );

  event.remove({ id: "projecte:rm_shears" });
  event.recipes.createMechanicalCrafting("projecte:rm_shears", [" D", "H "], {
    D: {
      item: "projecte:red_matter",
    },
    H: {
      item: "projecte:dm_shears",
    },
  });

  event.remove({ id: "projecte:rm_hammer" });
  event.recipes.createMechanicalCrafting(
    "projecte:rm_hammer",
    ["DGD", " H ", " G "],
    {
      D: {
        item: "projecte:red_matter",
      },
      G: {
        item: "projecte:dark_matter",
      },
      H: {
        item: "projecte:dm_hammer",
      },
    }
  );

  event.remove({ id: "projecte:rm_axe" });
  event.recipes.createMechanicalCrafting(
    "projecte:rm_axe",
    ["DD ", "DH ", " G "],
    {
      D: {
        item: "projecte:red_matter",
      },
      G: {
        item: "projecte:dark_matter",
      },
      H: {
        item: "projecte:dm_axe",
      },
    }
  );

  event.remove({ id: "projecte:rm_shovel" });
  event.recipes.createMechanicalCrafting(
    "projecte:rm_shovel",
    [" D ", " H ", " G "],
    {
      D: {
        item: "projecte:red_matter",
      },
      G: {
        item: "projecte:dark_matter",
      },
      H: {
        item: "projecte:dm_shovel",
      },
    }
  );

  event.remove({ id: "projecte:rm_sword" });
  event.recipes.createMechanicalCrafting(
    "projecte:rm_sword",
    [" D ", " D ", " H "],
    {
      D: {
        item: "projecte:red_matter",
      },
      H: {
        item: "projecte:dm_sword",
      },
    }
  );

  event.remove({ id: "projecte:rm_hoe" });
  event.recipes.createMechanicalCrafting(
    "projecte:rm_hoe",
    ["DD ", " H ", " G "],
    {
      D: {
        item: "projecte:red_matter",
      },
      G: {
        item: "projecte:dark_matter",
      },
      H: {
        item: "projecte:dm_hoe",
      },
    }
  );

  event.remove({ id: "projecte:rm_katar" });
  event.recipes.createMechanicalCrafting(
    "projecte:rm_katar",
    ["ABC", "DEE", "EEE"],
    {
      A: {
        item: "projecte:rm_shears",
      },
      B: {
        item: "projecte:rm_axe",
      },
      C: {
        item: "projecte:rm_sword",
      },
      D: {
        item: "projecte:rm_hoe",
      },
      E: {
        item: "projecte:red_matter",
      },
    }
  );

  event.remove({ id: "projecte:rm_morning_star" });
  event.recipes.createMechanicalCrafting(
    "projecte:rm_morning_star",
    ["ABC", "EEE", "EEE"],
    {
      A: {
        item: "projecte:rm_hammer",
      },
      B: {
        item: "projecte:rm_pick",
      },
      C: {
        item: "projecte:rm_shovel",
      },
      E: {
        item: "projecte:red_matter",
      },
    }
  );

  event.remove({ id: "projecte:low_covalence_dust" });
  event.recipes.powah.energizing({
    ingredients: [
      { tag: "forge:dusts/redstone" },
      { tag: "forge:dusts/redstone" },
      { item: "ftbstoneblock:2x_compressed_cobblestone" },
      { tag: "forge:dusts/redstone" },
      { tag: "forge:dusts/redstone" },
    ],
    energy: 12000,
    result: {
      item: "projecte:low_covalence_dust",
    },
  });

  event.remove({ id: "projecte:medium_covalence_dust" });
  event.recipes.powah.energizing({
    ingredients: [
      { tag: "forge:dusts/redstone" },
      { tag: "forge:dusts/redstone" },
      { tag: "forge:ingots/zinc" },
      { tag: "forge:dusts/redstone" },
      { tag: "forge:dusts/redstone" },
    ],
    energy: 12000,
    result: {
      item: "projecte:medium_covalence_dust",
    },
  });

  event.remove({ id: "projecte:high_covalence_dust" });
  event.recipes.powah.energizing({
    ingredients: [
      { tag: "minecraft:coals" },
      { tag: "minecraft:coals" },
      { tag: "forge:gems/diamond" },
      { tag: "minecraft:coals" },
      { tag: "minecraft:coals" },
    ],
    energy: 12000,
    result: {
      item: "projecte:high_covalence_dust",
    },
  });

  event.remove({ id: "projecte:alchemical_chest" });
  event.shaped("projecte:alchemical_chest", ["LMH", "SDS", "ICI"], {
    L: "projecte:low_covalence_dust",
    M: "projecte:medium_covalence_dust",
    H: "projecte:high_covalence_dust",
    S: "#forge:stone",
    D: "avaritia:diamond_lattice",
    I: "tconstruct:amethyst_bronze_ingot",
    C: "ironchest:obsidian_chest",
  });

  event.remove({ id: "projecte:collector_mk1" });
  event.recipes.powah.energizing({
    ingredients: [
      { item: "minecraft:glowstone" },
      { item: "minecraft:glass" },
      { item: "minecraft:furnace" },
      { item: "projecte:alchemical_chest" },
      { item: "minecraft:diamond_block" },
      { item: "minecraft:glowstone" },
    ],
    energy: 32000,
    result: {
      item: "projecte:collector_mk1",
    },
  });

  event.remove({ id: "projecte:collector_mk2" });
  event.recipes.powah.energizing({
    ingredients: [
      { item: "minecraft:glowstone" },
      { item: "minecraft:glowstone" },
      { item: "projecte:collector_mk1" },
      { item: "projecte:dark_matter" },
      { item: "minecraft:glowstone" },
      { item: "minecraft:glowstone" },
    ],
    energy: 64000,
    result: {
      item: "projecte:collector_mk2",
    },
  });

  event.remove({ id: "projecte:collector_mk3" });
  event.recipes.powah.energizing({
    ingredients: [
      { item: "minecraft:glowstone" },
      { item: "minecraft:glowstone" },
      { item: "projecte:collector_mk2" },
      { item: "projecte:red_matter" },
      { item: "minecraft:glowstone" },
      { item: "minecraft:glowstone" },
    ],
    energy: 128000,
    result: {
      item: "projecte:collector_mk3",
    },
  });

  event.remove({ id: "projecte:relay_mk1" });
  event.recipes.powah.energizing({
    ingredients: [
      { item: "minecraft:obsidian" },
      { item: "minecraft:glass" },
      { item: "minecraft:furnace" },
      { item: "projecte:alchemical_chest" },
      { item: "minecraft:diamond_block" },
      { item: "minecraft:obsidian" },
    ],
    energy: 32000,
    result: {
      item: "projecte:relay_mk1",
    },
  });

  event.remove({ id: "projecte:relay_mk2" });
  event.recipes.powah.energizing({
    ingredients: [
      { item: "minecraft:obsidian" },
      { item: "minecraft:obsidian" },
      { item: "projecte:relay_mk1" },
      { item: "projecte:dark_matter" },
      { item: "minecraft:obsidian" },
      { item: "minecraft:obsidian" },
    ],
    energy: 64000,
    result: {
      item: "projecte:relay_mk2",
    },
  });

  event.remove({ id: "projecte:relay_mk3" });
  event.recipes.powah.energizing({
    ingredients: [
      { item: "minecraft:obsidian" },
      { item: "minecraft:obsidian" },
      { item: "projecte:relay_mk2" },
      { item: "projecte:red_matter" },
      { item: "minecraft:obsidian" },
      { item: "minecraft:obsidian" },
    ],
    energy: 128000,
    result: {
      item: "projecte:relay_mk3",
    },
  });

  event.remove({ id: "projecte:condenser_mk1" });
  event.recipes.powah.energizing({
    ingredients: [
      { item: "projecte:dark_matter_block" },
      { item: "projecte:alchemical_chest" },
      { item: "projecte:red_matter_block" },
      { item: "ironchest:dirt_chest" },
      { item: "ironchest:crystal_chest" },
    ],
    energy: 5000000,
    result: {
      item: "projecte:condenser_mk1",
    },
  });

  event.remove({ id: "projecte:condenser_mk2" });
  event.recipes.powah.energizing({
    ingredients: [
      { item: "projecte:dark_matter_block" },
      { item: "projecte:condenser_mk1" },
      { item: "functionalstorage:compacting_drawer" },
      { item: "projecte:red_matter_block" },
      { item: "projecte:collector_mk3" },
      { item: "projecte:relay_mk3" },
    ],
    energy: 15000000,
    result: {
      item: "projecte:condenser_mk2",
    },
  });

  event.remove({ id: "projecte:philosophers_stone_alt" });
  event.remove({ id: "projecte:philosophers_stone" });
  event.shaped("projecte:philosophers_stone", ["GRG", "RSR", "DED"], {
    G: "minecraft:glowstone",
    R: "minecraft:redstone_block",
    S: "minecraft:nether_star",
    D: "minecraft:diamond_block",
    E: "minecraft:emerald_block",
  });

  event.remove({ id: "projecte:repair_talisman_alt" });
  event.remove({ id: "projecte:repair_talisman" });

  event.remove({ id: "projecte:watch_of_flowing_time" });
  event.recipes
    .createSequencedAssembly(
      "projecte:watch_of_flowing_time",
      "minecraft:clock",
      [
        event.recipes.createDeploying("minecraft:clock", [
          "minecraft:clock",
          "projecte:dark_matter_block",
        ]),
        event.recipes.createDeploying("minecraft:clock", [
          "minecraft:clock",
          "minecraft:glowstone",
        ]),
        event.recipes.createDeploying("minecraft:clock", [
          "minecraft:clock",
          "minecraft:obsidian",
        ]),
      ]
    )
    .transitionalItem("ftbstoneblock:incomplete_watch")
    .loops(6);

  event.remove({ id: "projecte:transmutation_table" });
  event.recipes.avaritia.extreme_shaped({
    pattern: [
      "E       E",
      " NNDDDNN ",
      " NUICIUN ",
      " DIAFAID ",
      " DCRGRCD ",
      " DIAFAID ",
      " NUICIUN ",
      " NNDDDNN ",
      "E       E",
    ],
    key: {
      E: {
        item: "ftbstoneblock:silverfish_heart",
      },
      N: {
        item: "avaritia:neutron_nugget",
      },
      D: {
        item: "projecte:dark_matter",
      },
      U: {
        item: "functionalstorage:netherite_upgrade",
      },
      I: {
        item: "avaritia:crystal_matrix_ingot",
      },
      C: {
        item: "powah:crystal_nitro",
      },
      A: {
        item: "projecte:alchemical_chest",
      },
      F: {
        item: "projecte:collector_mk2",
      },
      R: {
        item: "projecte:relay_mk2",
      },
      G: {
        item: "projecte:condenser_mk1",
      },
    },
    result: {
      item: "projecte:transmutation_table",
    },
  });

  event.remove({ id: "projecte:transmutation_tablet" });
  event.recipes.avaritia.extreme_shaped({
    pattern: [
      "CSIIIIISC",
      "SBHBHBHBS",
      "IHEYXYEHI",
      "IBYUEUYBI",
      "IHXEGEXHI",
      "IBYUEUYBI",
      "IHEYXYEHI",
      "SBHBHBHBS",
      "CSIIIIISC",
    ],
    key: {
      C: {
        item: "projecte:condenser_mk2",
      },
      S: {
        item: "avaritia:neutron_nugget",
      },
      I: {
        item: "avaritia:neutronium_ingot",
      },
      B: {
        item: "projecte:red_matter_block",
      },
      H: {
        item: "mekanism:hdpe_sheet",
      },
      E: {
        item: "powah:crystal_nitro",
      },
      Y: {
        item: "avaritia:infinity_ingot",
      },
      U: {
        item: "projecte:collector_mk2",
      },
      G: {
        item: "projecte:transmutation_table",
      },
      X: {
        item: "ftbstoneblock:silverfish_heart",
      },
    },
    result: {
      item: "projecte:transmutation_tablet",
    },
  });

  event.recipes.powah.energizing({
    ingredients: [
      { item: "avaritia:endest_pearl" },
      { item: "projecte:dark_matter_block" },
      { item: "projecte:transmutation_tablet" },
      { item: "projecte:red_matter_block" },
      { item: "avaritia:endest_pearl" },
    ],
    energy: 400000000,
    result: {
      item: "projecte:tome",
    },
  });
});
