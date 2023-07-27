onEvent("recipes", (event) => {
  event.remove({ id: "avaritia:skullfire_sword" });
  event.remove({ id: "avaritia:ultimate_stew" });
  event.remove({ id: "avaritia:extreme_crafting_table" });
  event.remove({ id: "avaritia:iron_singularity" });
  event.remove({ id: "avaritia:copper_singularity" });
  event.remove({ id: "avaritia:gold_singularity" });
  event.remove({ id: "avaritia:lapis_singularity" });
  event.remove({ id: "avaritia:redstone_singularity" });
  event.remove({ id: "avaritia:quartz_singularity" });
  event.remove({ id: "avaritia:tin_singularity" });
  event.remove({ id: "avaritia:lead_singularity" });
  event.remove({ id: "avaritia:silver_singularity" });
  event.remove({ id: "avaritia:nickel_singularity" });
  event.remove({ id: "avaritia:diamond_singularity" });
  event.remove({ id: "avaritia:emerald_singularity" });
  event.remove({ id: "avaritia:fluxed_singularity" });
  event.remove({ id: "avaritia:platinum_singularity" });
  event.remove({ id: "avaritia:iridium_singularity" });
  event.remove({ id: "avaritia:netherite_singularity" });
  event.remove({ id: "avaritia:amethyst_singularity" });
  event.remove({ id: "avaritia:diamond_lattice" });

  event.shaped("avaritia:diamond_lattice", ["X X", " D ", "X X"], {
    X: {
      tag: "forge:gems/diamond",
    },
    D: {
      item: "minecraft:netherite_scrap",
    },
  });

  event.shapeless("9x avaritia:neutronium_ingot", [
    "avaritia:neutronium_block",
  ]);

  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:addon_singularity",
    },
    cost: 45,
    ingredients: [
      {
        type: "forge:nbt",
        item: "industrialforegoing:processing_addon_2",
        count: 1,
        nbt: "{TitaniumAugment:{Processing:3.0f}}",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:balloon_singularity",
    },
    cost: 720,
    ingredients: [
      {
        item: "immersiveengineering:balloon",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:corrupted_ingot_singularity",
    },
    cost: 5000,
    ingredients: [
      {
        item: "soulshards:corrupted_ingot",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:enderium_block_singularity",
    },
    cost: 22,
    ingredients: [
      {
        item: "thermal:enderium_block",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:filter_pet_singularity",
    },
    cost: 7000,
    ingredients: [
      {
        item: "darkutils:filter_pet",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:infused_enderpearl_singularity",
    },
    cost: 2000,
    ingredients: [
      {
        item: "rftoolsbase:infused_enderpearl",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:manasteel_ingot_singularity",
    },
    cost: 72,
    ingredients: [
      {
        item: "botania:manasteel_ingot",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:mob_soul_singularity",
    },
    cost: 45,
    ingredients: [
      {
        item: "ftbstoneblock:mob_soul",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:nether_star_singularity",
    },
    cost: 2666,
    ingredients: [
      {
        item: "minecraft:nether_star",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:flux_block_singularity",
    },
    cost: 9012,
    ingredients: [
      {
        item: "fluxnetworks:flux_block",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:crystal_nitro_singularity",
    },
    cost: 240,
    ingredients: [
      {
        item: "powah:crystal_nitro",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:overclocker_node_singularity",
    },
    cost: 9999,
    ingredients: [
      {
        item: "laserio:overclocker_node",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:palette_singularity",
    },
    cost: 3333,
    ingredients: [
      {
        item: "supercircuitmaker:palette",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:pellet_polonium_singularity",
    },
    cost: 3,
    ingredients: [
      {
        item: "mekanism:pellet_polonium",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:pig_iron_ingot_singularity",
    },
    cost: 128,
    ingredients: [
      {
        item: "tconstruct:pig_iron_ingot",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:etherealslate_singularity",
    },
    cost: 3,
    ingredients: [
      {
        item: "bloodmagic:etherealslate",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:magenta_matter_singularity",
    },
    cost: 1777,
    ingredients: [
      {
        item: "extendedexchange:magenta_matter",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:source_gem_singularity",
    },
    cost: 90,
    ingredients: [
      {
        item: "ars_nouveau:source_gem",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:track_singularity",
    },
    cost: 80,
    ingredients: [
      {
        item: "create:track",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:uraninite_singularity",
    },
    cost: 45,
    ingredients: [
      {
        item: "powah:uraninite",
      },
    ],
  });
  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:wall_singularity",
    },
    cost: 48,
    ingredients: [
      {
        item: "compactmachines:wall",
      },
    ],
  });

  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:emerald_cluster_singularity",
    },
    cost: 1024,
    ingredients: [
      {
        item: "buddingcrystals:emerald_cluster",
      },
    ],
  });

  event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:xp_jelly_baby_singularity",
    },
    cost: 12,
    ingredients: [
      {
        item: "mob_grinding_utils:solid_xp_baby",
      },
    ],
  });

  event.recipes.createMechanicalCrafting(
    "avaritia:extreme_crafting_table",
    [" AAA ", "AAAAA", "AASAA", "AAAAA", " AAA "],
    {
      A: {
        item: "avaritia:crystal_matrix_ingot",
      },
      S: {
        item: "avaritia:double_compressed_crafting_table",
      },
    }
  );

  event.recipes.avaritia
    .extreme_shapeless({
      ingredients: [
        {
          item: "avaritia:diamond_lattice",
        },
        {
          item: "avaritia:crystal_matrix_ingot",
        },
        {
          item: "avaritia:neutron_pile",
        },
        {
          item: "avaritia:neutron_nugget",
        },
        {
          item: "avaritia:neutronium_ingot",
        },
        {
          item: "avaritia:record_fragment",
        },
        {
          item: "avaritia:endest_pearl",
        },
        {
          item: "avaritia:ultimate_stew",
        },
        {
          item: "avaritia:cosmic_meatballs",
        },
        {
          item: "avaritia:addon_singularity",
        },
        {
          item: "avaritia:balloon_singularity",
        },
        {
          item: "avaritia:corrupted_ingot_singularity",
        },
        {
          item: "avaritia:enderium_block_singularity",
        },
        {
          item: "avaritia:filter_pet_singularity",
        },
        {
          item: "avaritia:infused_enderpearl_singularity",
        },
        {
          item: "avaritia:manasteel_ingot_singularity",
        },
        {
          item: "avaritia:mob_soul_singularity",
        },
        {
          item: "avaritia:nether_star_singularity",
        },
        {
          item: "avaritia:flux_block_singularity",
        },
        {
          item: "avaritia:crystal_nitro_singularity",
        },
        {
          item: "avaritia:overclocker_node_singularity",
        },
        {
          item: "avaritia:palette_singularity",
        },
        {
          item: "avaritia:pellet_polonium_singularity",
        },
        {
          item: "avaritia:pig_iron_ingot_singularity",
        },
        {
          item: "avaritia:etherealslate_singularity",
        },
        {
          item: "avaritia:magenta_matter_singularity",
        },
        {
          item: "avaritia:source_gem_singularity",
        },
        {
          item: "avaritia:track_singularity",
        },
        {
          item: "avaritia:uraninite_singularity",
        },
        {
          item: "avaritia:wall_singularity",
        },
        {
          item: "avaritia:emerald_cluster_singularity",
        },
        {
          item: "avaritia:xp_jelly_baby_singularity",
        },
      ],
      result: {
        item: "avaritia:infinity_catalyst",
      },
    })
    .id("avaritia:infinity_catalyst");

  event.recipes.avaritia.extreme_shapeless({
    ingredients: [
      {
        item: "minecraft:apple",
      },
      {
        item: "minecraft:golden_apple",
      },
      {
        item: "minecraft:bread",
      },
      {
        item: "minecraft:kelp",
      },
      {
        item: "minecraft:cocoa_beans",
      },
      {
        item: "minecraft:cake",
      },
      {
        item: "minecraft:glistering_melon_slice",
      },
      {
        item: "minecraft:carrot",
      },
      {
        item: "minecraft:poisonous_potato",
      },
      {
        item: "minecraft:chorus_fruit",
      },
      {
        item: "minecraft:beetroot",
      },
      {
        item: "minecraft:mushroom_stew",
      },
      {
        item: "minecraft:honey_bottle",
      },
      {
        item: "minecraft:sweet_berries",
      },
      {
        item: "farmersdelight:apple_pie",
      },
      {
        item: "farmersdelight:sweet_berry_cheesecake",
      },
      {
        item: "farmersdelight:chocolate_pie",
      },
      {
        item: "farmersdelight:melon_popsicle",
      },
      {
        item: "farmersdelight:fruit_salad",
      },
      {
        item: "farmersdelight:mixed_salad",
      },
      {
        item: "farmersdelight:nether_salad",
      },
      {
        item: "farmersdelight:barbecue_stick",
      },
      {
        item: "farmersdelight:egg_sandwich",
      },
      {
        item: "farmersdelight:chicken_sandwich",
      },
      {
        item: "farmersdelight:hamburger",
      },
      {
        item: "farmersdelight:bacon_sandwich",
      },
      {
        item: "farmersdelight:mutton_wrap",
      },
      {
        item: "farmersdelight:dumplings",
      },
      {
        item: "farmersdelight:stuffed_potato",
      },
      {
        item: "farmersdelight:cabbage_rolls",
      },
      {
        item: "farmersdelight:cooked_rice",
      },
      {
        item: "farmersdelight:beef_stew",
      },
      {
        item: "farmersdelight:chicken_soup",
      },
      {
        item: "farmersdelight:vegetable_soup",
      },
      {
        item: "farmersdelight:fish_stew",
      },
      {
        item: "farmersdelight:fried_rice",
      },
      {
        item: "farmersdelight:pumpkin_soup",
      },
      {
        item: "farmersdelight:baked_cod_stew",
      },
      {
        item: "farmersdelight:noodle_soup",
      },
      {
        item: "farmersdelight:bacon_and_eggs",
      },
      {
        item: "farmersdelight:pasta_with_meatballs",
      },
      {
        item: "farmersdelight:pasta_with_mutton_chop",
      },
      {
        item: "farmersdelight:roasted_mutton_chops",
      },
      {
        item: "farmersdelight:vegetable_noodles",
      },
      {
        item: "farmersdelight:steak_and_potatoes",
      },
      {
        item: "farmersdelight:ratatouille",
      },
      {
        item: "farmersdelight:salmon_roll",
      },
      {
        item: "farmersdelight:stuffed_pumpkin_block",
      },
      {
        item: "farmersdelight:roast_chicken_block",
      },
      {
        item: "farmersdelight:grilled_salmon",
      },
      {
        item: "ars_nouveau:source_berry",
      },
      {
        item: "supplementaries:pancake",
      },
      {
        item: "create:blaze_cake",
      },
      {
        item: "create:chocolate_glazed_berries",
      },
      {
        item: "create:honeyed_apple",
      },
      {
        item: "avaritia:neutron_nugget",
      },
    ],
    result: {
      item: "avaritia:ultimate_stew",
    },
  });

  event.recipes.avaritia
    .extreme_shapeless({
      ingredients: [
        {
          item: "minecraft:porkchop",
        },
        {
          item: "minecraft:beef",
        },
        {
          item: "minecraft:mutton",
        },
        {
          item: "minecraft:cod",
        },
        {
          item: "minecraft:salmon",
        },
        {
          item: "minecraft:tropical_fish",
        },
        {
          item: "minecraft:pufferfish",
        },
        {
          item: "minecraft:rabbit",
        },
        {
          item: "minecraft:chicken",
        },
        {
          item: "minecraft:rotten_flesh",
        },
        {
          item: "minecraft:spider_eye",
        },
        {
          item: "minecraft:egg",
        },
        {
          item: "avaritia:neutron_nugget",
        },
      ],
      result: {
        item: "avaritia:cosmic_meatballs",
      },
    })
    .id("avaritia:cosmic_meatballs");

  event.recipes.avaritia
    .extreme_shaped({
      pattern: [
        " NNNGNNN ",
        " NINININ ",
        " NIN NIN ",
        "NNIN NINN",
        "NIIN NIIN",
        "NNNN NNNN",
      ],
      key: {
        G: {
          item: "projecte:gem_boots",
        },
        I: {
          item: "avaritia:infinity_ingot",
        },
        N: {
          item: "avaritia:neutronium_ingot",
        },
      },
      result: {
        item: "avaritia:infinity_boots",
      },
    })
    .id("avaritia:infinity_boots");

  event.recipes.avaritia
    .extreme_shaped({
      pattern: [
        "NNNNNNNNN",
        "NIIIGIIIN",
        "NINNXNNIN",
        "NIN   NIN",
        "NCN   NCN",
        "NIN   NIN",
        "NIN   NIN",
        "NIN   NIN",
        "NNN   NNN",
      ],
      key: {
        G: {
          item: "projecte:gem_leggings",
        },
        I: {
          item: "avaritia:infinity_ingot",
        },
        X: {
          item: "avaritia:infinity_catalyst",
        },
        N: {
          item: "avaritia:neutronium_ingot",
        },
        C: {
          item: "avaritia:crystal_matrix_block",
        },
      },
      result: {
        item: "avaritia:infinity_legs",
      },
    })
    .id("avaritia:infinity_legs");

  event.recipes.avaritia
    .extreme_shaped({
      pattern: [
        " NN   NN ",
        "NNN   NNN",
        "NNN   NNN",
        " NIIIIIN ",
        " NIIGIIN ",
        " NIIIIIN ",
        " NIIIIIN ",
        " NIIIIIN ",
        "  NNNNN  ",
      ],
      key: {
        G: {
          item: "projecte:gem_chestplate",
        },
        I: {
          item: "avaritia:infinity_ingot",
        },
        N: {
          item: "avaritia:neutronium_ingot",
        },
      },
      result: {
        item: "avaritia:infinity_chestplate",
      },
    })
    .id("avaritia:infinity_chestplate");

  event.recipes.avaritia
    .extreme_shaped({
      pattern: [
        "  NNNNN  ",
        " NIIGIIN ",
        " N XIX N ",
        " NIIIIIN ",
        " NIIIIIN ",
        " NI I IN ",
      ],
      key: {
        G: {
          item: "projecte:gem_helmet",
        },
        I: {
          item: "avaritia:infinity_ingot",
        },
        X: {
          item: "avaritia:infinity_catalyst",
        },
        N: {
          item: "avaritia:neutronium_ingot",
        },
      },
      result: {
        item: "avaritia:infinity_helmet",
      },
    })
    .id("avaritia:infinity_helmet");

  event.recipes.avaritia
    .extreme_shaped({
      pattern: [
        "   I   ",
        "  IIPII",
        "  IIXI ",
        "   IN  ",
        "    N  ",
        "    N  ",
        "    N  ",
        "    N  ",
        "    N  ",
      ],
      key: {
        I: {
          item: "avaritia:infinity_ingot",
        },
        N: {
          item: "avaritia:neutronium_ingot",
        },
        X: {
          item: "avaritia:infinity_catalyst",
        },
        P: {
          item: "projecte:rm_axe",
        },
      },
      result: {
        item: "avaritia:infinity_axe",
      },
    })
    .id("avaritia:infinity_axe");

  event.recipes.avaritia
    .extreme_shaped({
      pattern: [
        "   II",
        "  I W",
        " I  W",
        "I   W",
        "X P W",
        "I   W",
        " I  W",
        "  I W",
        "   II",
      ],
      key: {
        I: {
          item: "avaritia:infinity_ingot",
        },
        X: {
          item: "avaritia:crystal_matrix_block",
        },
        W: {
          tag: "minecraft:wool",
        },
        P: {
          item: "ftbstoneblock:silverfish_heart",
        },
      },
      result: {
        item: "avaritia:infinity_bow",
      },
    })
    .id("avaritia:infinity_bow");

  event.recipes.avaritia
    .extreme_shaped({
      pattern: [
        "     N ",
        "   IIII",
        "  IIIPI",
        "  I  XI",
        "     N ",
        "     N ",
        "     N ",
        "     N ",
        "     N ",
      ],
      key: {
        I: {
          item: "avaritia:infinity_ingot",
        },
        N: {
          item: "avaritia:neutronium_ingot",
        },
        X: {
          item: "avaritia:infinity_catalyst",
        },
        P: {
          item: "projecte:rm_hoe",
        },
      },
      result: {
        item: "avaritia:infinity_hoe",
      },
    })
    .id("avaritia:infinity_hoe");

  event.recipes.avaritia
    .extreme_shaped({
      pattern: [
        " IIIPIII ",
        "IIIICIIII",
        "II  N  II",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
      ],
      key: {
        I: {
          item: "avaritia:infinity_ingot",
        },
        N: {
          item: "avaritia:neutronium_ingot",
        },
        C: {
          item: "avaritia:crystal_matrix_block",
        },
        P: {
          item: "projecte:rm_pick",
        },
      },
      result: {
        item: "avaritia:infinity_pickaxe",
      },
    })
    .id("avaritia:infinity_pickaxe");

  event.recipes.avaritia
    .extreme_shaped({
      pattern: [
        "      III",
        "     IIXI",
        "      IPI",
        "     N I ",
        "    N    ",
        "   N     ",
        "  N      ",
        " N       ",
        "N        ",
      ],
      key: {
        I: {
          item: "avaritia:infinity_ingot",
        },
        N: {
          item: "avaritia:neutronium_ingot",
        },
        X: {
          item: "avaritia:infinity_catalyst",
        },
        P: {
          item: "projecte:rm_shovel",
        },
      },
      result: {
        item: "avaritia:infinity_shovel",
      },
    })
    .id("avaritia:infinity_shovel");

  event.recipes.avaritia
    .extreme_shaped({
      pattern: [
        "       II",
        "      IPI",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        ",
      ],
      key: {
        I: {
          item: "avaritia:infinity_ingot",
        },
        N: {
          item: "avaritia:neutronium_ingot",
        },
        C: {
          item: "avaritia:crystal_matrix_block",
        },
        X: {
          item: "avaritia:infinity_catalyst",
        },
        P: {
          item: "projecte:rm_sword",
        },
      },
      result: {
        item: "avaritia:infinity_sword",
      },
    })
    .id("avaritia:infinity_sword");

  event.recipes.createMechanicalCrafting(
    "avaritia:infinity_ingot",
    ["NNNNNNNNN", "NCIICIICN", "NICCICCIN", "NCIICIICN", "NNNNNNNNN"],
    {
      C: {
        item: "avaritia:crystal_matrix_ingot",
      },
      N: {
        item: "avaritia:neutronium_ingot",
      },
      I: {
        item: "avaritia:infinity_catalyst",
      },
    }
  );

  event.recipes.createMechanicalCrafting(
    "avaritia:infinity_catalyst",
    ["ABCDEFGHI", "JKLMNOPQR", "STUVWXYZ1", "23456    "],
    {
      A: {
        item: "avaritia:diamond_lattice",
      },
      B: {
        item: "avaritia:crystal_matrix_ingot",
      },
      C: {
        item: "avaritia:neutron_pile",
      },
      D: {
        item: "avaritia:neutron_nugget",
      },
      E: {
        item: "avaritia:neutronium_ingot",
      },
      F: {
        item: "avaritia:record_fragment",
      },
      G: {
        item: "avaritia:endest_pearl",
      },
      H: {
        item: "avaritia:ultimate_stew",
      },
      I: {
        item: "avaritia:cosmic_meatballs",
      },
      J: {
        item: "avaritia:addon_singularity",
      },
      K: {
        item: "avaritia:balloon_singularity",
      },
      L: {
        item: "avaritia:corrupted_ingot_singularity",
      },
      M: {
        item: "avaritia:enderium_block_singularity",
      },
      N: {
        item: "avaritia:filter_pet_singularity",
      },
      O: {
        item: "avaritia:infused_enderpearl_singularity",
      },
      P: {
        item: "avaritia:manasteel_ingot_singularity",
      },
      Q: {
        item: "avaritia:mob_soul_singularity",
      },
      R: {
        item: "avaritia:nether_star_singularity",
      },
      S: {
        item: "avaritia:flux_block_singularity",
      },
      T: {
        item: "avaritia:crystal_nitro_singularity",
      },
      U: {
        item: "avaritia:overclocker_node_singularity",
      },
      V: {
        item: "avaritia:palette_singularity",
      },
      W: {
        item: "avaritia:pellet_polonium_singularity",
      },
      X: {
        item: "avaritia:pig_iron_ingot_singularity",
      },
      Y: {
        item: "avaritia:etherealslate_singularity",
      },
      Z: {
        item: "avaritia:magenta_matter_singularity",
      },
      1: {
        item: "avaritia:source_gem_singularity",
      },
      2: {
        item: "avaritia:track_singularity",
      },
      3: {
        item: "avaritia:uraninite_singularity",
      },
      4: {
        item: "avaritia:wall_singularity",
      },
      5: {
        item: "avaritia:emerald_cluster_singularity",
      },
      6: {
        item: "avaritia:xp_jelly_baby_singularity",
      },
    }
  );

  event.recipes.createMechanicalCrafting(
    "avaritia:cosmic_meatballs",
    ["ABCDEFGHI", "JKLM     "],
    {
      A: {
        item: "minecraft:porkchop",
      },
      B: {
        item: "minecraft:beef",
      },
      C: {
        item: "minecraft:mutton",
      },
      D: {
        item: "minecraft:cod",
      },
      E: {
        item: "minecraft:salmon",
      },
      F: {
        item: "minecraft:tropical_fish",
      },
      G: {
        item: "minecraft:pufferfish",
      },
      H: {
        item: "minecraft:rabbit",
      },
      I: {
        item: "minecraft:chicken",
      },
      J: {
        item: "minecraft:rotten_flesh",
      },
      K: {
        item: "minecraft:spider_eye",
      },
      L: {
        item: "minecraft:egg",
      },
      M: {
        item: "avaritia:neutron_nugget",
      },
    }
  );

  event.recipes.createMechanicalCrafting(
    "avaritia:ultimate_stew",
    [
      "ABCDEFGHI",
      "JKLMOPQRS",
      "TUVWXYZab",
      "cdefghijk",
      "lmnopqrst",
      "uvwxyz123",
      "45       ",
    ],
    {
      A: {
        item: "minecraft:apple",
      },
      B: {
        item: "minecraft:golden_apple",
      },
      C: {
        item: "minecraft:bread",
      },
      D: {
        item: "minecraft:kelp",
      },
      E: {
        item: "minecraft:cocoa_beans",
      },
      F: {
        item: "minecraft:cake",
      },
      G: {
        item: "minecraft:glistering_melon_slice",
      },
      H: {
        item: "minecraft:carrot",
      },
      I: {
        item: "minecraft:poisonous_potato",
      },
      J: {
        item: "minecraft:chorus_fruit",
      },
      K: {
        item: "minecraft:beetroot",
      },
      L: {
        item: "minecraft:mushroom_stew",
      },
      M: {
        item: "minecraft:honey_bottle",
      },
      O: {
        item: "minecraft:sweet_berries",
      },
      P: {
        item: "farmersdelight:apple_pie",
      },
      Q: {
        item: "farmersdelight:sweet_berry_cheesecake",
      },
      R: {
        item: "farmersdelight:chocolate_pie",
      },
      S: {
        item: "farmersdelight:melon_popsicle",
      },
      T: {
        item: "farmersdelight:fruit_salad",
      },
      U: {
        item: "farmersdelight:mixed_salad",
      },
      V: {
        item: "farmersdelight:nether_salad",
      },
      W: {
        item: "farmersdelight:barbecue_stick",
      },
      X: {
        item: "farmersdelight:egg_sandwich",
      },
      Y: {
        item: "farmersdelight:chicken_sandwich",
      },
      Z: {
        item: "farmersdelight:hamburger",
      },
      a: {
        item: "farmersdelight:bacon_sandwich",
      },
      b: {
        item: "farmersdelight:mutton_wrap",
      },
      c: {
        item: "farmersdelight:dumplings",
      },
      d: {
        item: "farmersdelight:stuffed_potato",
      },
      e: {
        item: "farmersdelight:cabbage_rolls",
      },
      f: {
        item: "farmersdelight:cooked_rice",
      },
      g: {
        item: "farmersdelight:beef_stew",
      },
      h: {
        item: "farmersdelight:chicken_soup",
      },
      i: {
        item: "farmersdelight:vegetable_soup",
      },
      j: {
        item: "farmersdelight:fish_stew",
      },
      k: {
        item: "farmersdelight:fried_rice",
      },
      l: {
        item: "farmersdelight:pumpkin_soup",
      },
      m: {
        item: "farmersdelight:baked_cod_stew",
      },
      n: {
        item: "farmersdelight:noodle_soup",
      },
      o: {
        item: "farmersdelight:bacon_and_eggs",
      },
      p: {
        item: "farmersdelight:pasta_with_meatballs",
      },
      q: {
        item: "farmersdelight:pasta_with_mutton_chop",
      },
      r: {
        item: "farmersdelight:roasted_mutton_chops",
      },
      s: {
        item: "farmersdelight:vegetable_noodles",
      },
      t: {
        item: "farmersdelight:steak_and_potatoes",
      },
      u: {
        item: "farmersdelight:ratatouille",
      },
      v: {
        item: "farmersdelight:salmon_roll",
      },
      w: {
        item: "farmersdelight:stuffed_pumpkin_block",
      },
      x: {
        item: "farmersdelight:roast_chicken_block",
      },
      y: {
        item: "farmersdelight:grilled_salmon",
      },
      z: {
        item: "ars_nouveau:source_berry",
      },
      1: {
        item: "supplementaries:pancake",
      },
      2: {
        item: "create:blaze_cake",
      },
      3: {
        item: "create:chocolate_glazed_berries",
      },
      4: {
        item: "create:honeyed_apple",
      },
      5: {
        item: "avaritia:neutron_nugget",
      },
    }
  );

  event.recipes.createMechanicalCrafting(
    "avaritia:endest_pearl",
    [
      "   AAA   ",
      " AABBBAA ",
      " ABBBBBA ",
      "ABBBDBBBA",
      "ABBDCDBBA",
      "ABBBDBBBA",
      " ABBBBBA ",
      " AABBBAA ",
      "   AAA   ",
    ],
    {
      A: {
        item: "minecraft:end_stone",
      },
      B: {
        item: "minecraft:ender_pearl",
      },
      C: {
        item: "minecraft:nether_star",
      },
      D: {
        item: "avaritia:neutronium_ingot",
      },
    }
  );

  event.recipes.createMechanicalCrafting(
    "avaritia:neutron_collector",
    [
      "IIQQQQQII",
      "I QQQQQ I",
      "I  RRR  I",
      "X RRRRR X",
      "I RRXRR I",
      "X RRRRR X",
      "I  RRR  I",
      "I       I",
      "IIIXIXIII",
    ],
    {
      I: {
        tag: "forge:storage_blocks/iron",
      },
      X: {
        item: "avaritia:crystal_matrix_ingot",
      },
      R: {
        tag: "forge:storage_blocks/redstone",
      },
      Q: {
        tag: "forge:storage_blocks/quartz",
      },
    }
  );

  event.recipes.createMechanicalCrafting(
    "avaritia:compressor",
    [
      "IIIHHHIII",
      "X N   N X",
      "I N   N I",
      "X N   N X",
      "RNN O NNR",
      "X N   N X",
      "I N   N I",
      "X N   N X",
      "IIIXIXIII",
    ],
    {
      N: {
        item: "avaritia:neutronium_ingot",
      },
      H: {
        item: "minecraft:hopper",
      },
      I: {
        tag: "forge:storage_blocks/iron",
      },
      O: {
        item: "avaritia:neutronium_block",
      },
      X: {
        item: "avaritia:crystal_matrix_ingot",
      },
      R: {
        tag: "forge:storage_blocks/redstone",
      },
    }
  );
});
