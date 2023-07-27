onEvent("recipes", (event) => {
  const ftbsbtools = event.recipes.ftbsbc;

  ftbsbtools.hammer(
    [
      "minecraft:stone",
      "minecraft:granite",
      "minecraft:polished_granite",
      "minecraft:diorite",
      "minecraft:polished_diorite",
      "minecraft:andesite",
      "minecraft:polished_andesite",
      "minecraft:polished_deepslate",
      "minecraft:tuff",
      "minecraft:infested_stone",
      "minecraft:infested_deepslate",
    ],
    ["minecraft:cobblestone"]
  );
  ftbsbtools.hammer(
    [
      "minecraft:cobblestone",
      "minecraft:mossy_cobblestone",
      "minecraft:infested_cobblestone",
    ],
    ["minecraft:gravel"]
  );
  ftbsbtools.hammer("#forge:gravel", ["minecraft:dirt"]);
  ftbsbtools.hammer("minecraft:dirt", ["minecraft:sand"]);
  ftbsbtools.hammer("#minecraft:sand", ["ftbstoneblock:dust"]);
  ftbsbtools.hammer("#forge:netherrack", ["ftbstoneblock:crushed_netherrack"]);
  ftbsbtools.hammer("#forge:end_stones", ["ftbstoneblock:crushed_endstone"]);
  ftbsbtools.hammer("#forge:deepslate", ["ftbstoneblock:crushed_deepslate"]);

  ftbsbtools.hammer("ftbstoneblock:1x_compressed_stone", [
    "9x minecraft:cobblestone",
  ]);
  ftbsbtools.hammer("ftbstoneblock:1x_compressed_cobblestone", [
    "9x minecraft:gravel",
  ]);
  ftbsbtools.hammer("ftbstoneblock:1x_compressed_gravel", [
    "9x minecraft:dirt",
  ]);
  ftbsbtools.hammer("ftbstoneblock:1x_compressed_dirt", ["9x minecraft:sand"]);
  ftbsbtools.hammer("ftbstoneblock:1x_compressed_sand", [
    "9x ftbstoneblock:dust",
  ]);
  ftbsbtools.hammer("ftbstoneblock:1x_compressed_netherrack", [
    "9x ftbstoneblock:crushed_netherrack",
  ]);
  ftbsbtools.hammer("ftbstoneblock:1x_compressed_endstone", [
    "9x ftbstoneblock:crushed_endstone",
  ]);
  ftbsbtools.hammer("ftbstoneblock:1x_compressed_deepslate", [
    "9x ftbstoneblock:crushed_deepslate",
  ]);

  ftbsbtools.hammer("ftbstoneblock:2x_compressed_stone", [
    "81x minecraft:cobblestone",
  ]);
  ftbsbtools.hammer("ftbstoneblock:2x_compressed_cobblestone", [
    "81x minecraft:gravel",
  ]);
  ftbsbtools.hammer("ftbstoneblock:2x_compressed_gravel", [
    "81x minecraft:dirt",
  ]);
  ftbsbtools.hammer("ftbstoneblock:2x_compressed_dirt", ["81x minecraft:sand"]);
  ftbsbtools.hammer("ftbstoneblock:2x_compressed_sand", [
    "81x ftbstoneblock:dust",
  ]);
  ftbsbtools.hammer("ftbstoneblock:2x_compressed_netherrack", [
    "81x ftbstoneblock:crushed_netherrack",
  ]);
  ftbsbtools.hammer("ftbstoneblock:2x_compressed_endstone", [
    "81x ftbstoneblock:crushed_endstone",
  ]);
  ftbsbtools.hammer("ftbstoneblock:2x_compressed_deepslate", [
    "81x ftbstoneblock:crushed_deepslate",
  ]);

  ftbsbtools.hammer("ftbstoneblock:3x_compressed_stone", [
    "729x minecraft:cobblestone",
  ]);
  ftbsbtools.hammer("ftbstoneblock:3x_compressed_cobblestone", [
    "729x minecraft:gravel",
  ]);
  ftbsbtools.hammer("ftbstoneblock:3x_compressed_gravel", [
    "729x minecraft:dirt",
  ]);
  ftbsbtools.hammer("ftbstoneblock:3x_compressed_dirt", [
    "729x minecraft:sand",
  ]);
  ftbsbtools.hammer("ftbstoneblock:3x_compressed_sand", [
    "729x ftbstoneblock:dust",
  ]);
  ftbsbtools.hammer("ftbstoneblock:3x_compressed_netherrack", [
    "729x ftbstoneblock:crushed_netherrack",
  ]);
  ftbsbtools.hammer("ftbstoneblock:3x_compressed_endstone", [
    "729x ftbstoneblock:crushed_endstone",
  ]);
  ftbsbtools.hammer("ftbstoneblock:3x_compressed_deepslate", [
    "729x ftbstoneblock:crushed_deepslate",
  ]);

  ftbsbtools
    .crook("minecraft:dirt", [
      Item.of("minecraft:oak_sapling").withChance(0.5),
      Item.of("minecraft:spruce_sapling").withChance(0.5),
      Item.of("minecraft:birch_sapling").withChance(0.5),
      Item.of("minecraft:jungle_sapling").withChance(0.5),
      Item.of("minecraft:acacia_sapling").withChance(0.5),
      Item.of("minecraft:dark_oak_sapling").withChance(0.5),
      Item.of("minecraft:wheat_seeds").withChance(0.15),
      Item.of("minecraft:pumpkin_seeds").withChance(0.15),
      Item.of("minecraft:melon_seeds").withChance(0.15),
      Item.of("minecraft:beetroot_seeds").withChance(0.15),
      Item.of("minecraft:carrot").withChance(0.05),
      Item.of("minecraft:potato").withChance(0.05),
      Item.of("jags:jags").withChance(0.15),
      Item.of("ars_nouveau:blue_archwood_sapling").withChance(0.3),
      Item.of("ars_nouveau:purple_archwood_sapling").withChance(0.3),
      Item.of("ars_nouveau:green_archwood_sapling").withChance(0.3),
      Item.of("ars_nouveau:red_archwood_sapling").withChance(0.3),
      Item.of("ars_nouveau:source_berry").withChance(0.4),
    ])
    .max(2);

  ftbsbtools
    .crook("minecraft:oak_leaves", [
      Item.of("minecraft:oak_sapling").withChance(0.35),
      Item.of("minecraft:apple").withChance(0.15),
      Item.of("minecraft:vine").withChance(0.03),
    ])
    .max(2);

  ftbsbtools
    .crook("minecraft:spruce_leaves", [
      Item.of("minecraft:spruce_sapling").withChance(0.35),
      Item.of("minecraft:vine").withChance(0.03),
    ])
    .max(1);

  ftbsbtools
    .crook("minecraft:birch_leaves", [
      Item.of("minecraft:birch_sapling").withChance(0.35),
      Item.of("minecraft:vine").withChance(0.03),
    ])
    .max(1);

  ftbsbtools
    .crook("minecraft:jungle_leaves", [
      Item.of("minecraft:jungle_sapling").withChance(0.35),
      Item.of("minecraft:vine").withChance(0.03),
    ])
    .max(1);

  ftbsbtools
    .crook("minecraft:acacia_leaves", [
      Item.of("minecraft:acacia_sapling").withChance(0.35),
      Item.of("minecraft:vine").withChance(0.03),
    ])
    .max(1);

  ftbsbtools
    .crook("minecraft:dark_oak_leaves", [
      Item.of("minecraft:dark_oak_sapling").withChance(0.35),
      Item.of("minecraft:apple").withChance(0.2),
      Item.of("minecraft:vine").withChance(0.03),
    ])
    .max(1);

  ftbsbtools
    .crook("minecraft:grass_block", [
      Item.of("minecraft:oxeye_daisy").withChance(0.15),
      Item.of("minecraft:cornflower").withChance(0.15),
      Item.of("minecraft:lily_of_the_valley").withChance(0.15),
      Item.of("minecraft:dandelion").withChance(0.15),
      Item.of("minecraft:poppy").withChance(0.15),
      Item.of("minecraft:blue_orchid").withChance(0.15),
      Item.of("minecraft:allium").withChance(0.15),
      Item.of("minecraft:azure_bluet").withChance(0.15),
      Item.of("minecraft:red_tulip").withChance(0.15),
      Item.of("minecraft:orange_tulip").withChance(0.15),
      Item.of("minecraft:pink_tulip").withChance(0.15),
      Item.of("minecraft:white_tulip").withChance(0.15),
    ])
    .max(2);

  ftbsbtools
    .crook("#minecraft:sand", [
      Item.of("minecraft:kelp").withChance(0.11),
      Item.of("minecraft:sugar_cane").withChance(0.16),
      Item.of("minecraft:bamboo").withChance(0.09),
      Item.of("minecraft:cactus").withChance(0.07),
    ])
    .max(2);

  ftbsbtools
    .crook("minecraft:soul_sand", [
      Item.of("minecraft:brown_mushroom").withChance(0.13),
      Item.of("minecraft:red_mushroom").withChance(0.13),
      Item.of("minecraft:nether_wart").withChance(0.1),
      Item.of("minecraft:crimson_fungus").withChance(0.09),
      Item.of("minecraft:warped_fungus").withChance(0.09),
      Item.of("farmersdelight:brown_mushroom_colony").withChance(0.07),
      Item.of("farmersdelight:red_mushroom_colony").withChance(0.07),
    ])
    .max(2);

  ftbsbtools
    .crook("minecraft:mycelium", [
      Item.of("farmersdelight:wild_beetroots").withChance(0.3),
      Item.of("farmersdelight:wild_potatoes").withChance(0.3),
      Item.of("farmersdelight:wild_carrots").withChance(0.3),
      Item.of("farmersdelight:wild_cabbages").withChance(0.3),
      Item.of("farmersdelight:wild_tomatoes").withChance(0.3),
      Item.of("farmersdelight:wild_onions").withChance(0.3),
      Item.of("farmersdelight:wild_rice").withChance(0.3),
    ])
    .max(1);
});
