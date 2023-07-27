// priority: 99
onEvent("recipes", (event) => {
  const { shaped, shapeless } = event;

  event.remove({
    id: "minecraft:bread",
  });
  shapeless("minecraft:bread", [
    "#forge:crops/wheat",
    "#forge:crops/wheat",
    "#forge:crops/wheat",
  ]).id("ftb:shortcut_recipes/bread");

  shapeless("minecraft:flint", [
    "#forge:gravel",
    "#forge:gravel",
    "#forge:gravel",
  ]).id("ftb:shortcut_recipes/flint");

  shapeless("minecraft:wheat_seeds", ["#forge:crops/wheat"]);

  shaped("4x minecraft:chest", ["LLL", "L L", "LLL"], {
    L: "#minecraft:logs",
  }).id("ftb:shortcut_recipes/chest");

  shaped("minecraft:hopper", ["ILI", "ILI", " I "], {
    I: "#forge:ingots/iron",
    L: "#minecraft:logs",
  }).id("ftb:shortcut_recipes/hopper");

  shaped("16x minecraft:stick", ["L", "L"], {
    L: [
      "minecraft:oak_log",
      "minecraft:spruce_log",
      "minecraft:birch_log",
      "minecraft:jungle_log",
      "minecraft:acacia_log",
      "minecraft:dark_oak_log",
      "minecraft:crimson_stem",
      "minecraft:warped_stem",
      "minecraft:stripped_oak_log",
      "minecraft:stripped_spruce_log",
      "minecraft:stripped_birch_log",
      "minecraft:stripped_jungle_log",
      "minecraft:stripped_acacia_log",
      "minecraft:stripped_dark_oak_log",
      "minecraft:stripped_crimson_stem",
      "minecraft:stripped_warped_stem",
      "minecraft:stripped_oak_wood",
      "minecraft:stripped_spruce_wood",
      "minecraft:stripped_birch_wood",
      "minecraft:stripped_jungle_wood",
      "minecraft:stripped_acacia_wood",
      "minecraft:stripped_dark_oak_wood",
      "minecraft:stripped_crimson_hyphae",
      "minecraft:stripped_warped_hyphae",
      "minecraft:oak_wood",
      "minecraft:spruce_wood",
      "minecraft:birch_wood",
      "minecraft:jungle_wood",
      "minecraft:acacia_wood",
      "minecraft:dark_oak_wood",
      "minecraft:crimson_hyphae",
      "minecraft:warped_hyphae",
      "botania:dreamwood_log",
      "botania:glimmering_dreamwood_log",
      "botania:stripped_dreamwood_log",
      "botania:glimmering_stripped_dreamwood_log",
      "botania:dreamwood",
      "botania:stripped_dreamwood",
      "botania:glimmering_stripped_dreamwood",
      "botania:glimmering_dreamwood",
      "ars_nouveau:blue_archwood_log",
      "ars_nouveau:blue_archwood_wood",
      "ars_nouveau:purple_archwood_log",
      "ars_nouveau:purple_archwood_wood",
      "ars_nouveau:green_archwood_log",
      "ars_nouveau:green_archwood_wood",
      "ars_nouveau:red_archwood_log",
      "ars_nouveau:red_archwood_wood",
      "ars_nouveau:stripped_blue_archwood_log",
      "ars_nouveau:stripped_blue_archwood_wood",
      "ars_nouveau:stripped_green_archwood_log",
      "ars_nouveau:stripped_green_archwood_wood",
      "ars_nouveau:stripped_red_archwood_log",
      "ars_nouveau:stripped_red_archwood_wood",
      "ars_nouveau:stripped_purple_archwood_log",
      "ars_nouveau:stripped_purple_archwood_wood",
      "tconstruct:stripped_greenheart_log",
      "tconstruct:stripped_greenheart_wood",
      "tconstruct:greenheart_log",
      "tconstruct:greenheart_wood",
      "tconstruct:stripped_skyroot_log",
      "tconstruct:stripped_skyroot_wood",
      "tconstruct:skyroot_log",
      "tconstruct:skyroot_wood",
      "tconstruct:stripped_bloodshroom_log",
      "tconstruct:stripped_bloodshroom_wood",
      "tconstruct:bloodshroom_log",
      "tconstruct:bloodshroom_wood",
    ],
  }).id("ftb:shortcut_recipes/stick");

  shaped("minecraft:dispenser", [" WS", "WDS", " WS"], {
    W: "#forge:rods/wooden",
    S: "#forge:string",
    D: "minecraft:dropper",
  }).id("ftb:shortcut_recipes/dispenser");

  shaped("minecraft:repeater", ["R R", "WRW", "SSS"], {
    R: "#forge:dusts/redstone",
    W: "#forge:rods/wooden",
    S: "minecraft:stone",
  }).id("ftb:shortcut_recipes/repeater");

  shaped("minecraft:chest_minecart", ["ICI", "III"], {
    I: "#forge:ingots/iron",
    C: "#forge:chests",
  }).id(`ftb:shortcut_recipes/chest_minecart_0`);

  shaped("minecraft:chest_minecart", ["PPP", "PMP", "PPP"], {
    P: "#minecraft:planks",
    M: "minecraft:minecart",
  }).id(`ftb:shortcut_recipes/chest_minecart_1`);

  shaped("minecraft:furnace_minecart", ["IFI", "III"], {
    I: "#forge:ingots/iron",
    F: "minecraft:furnace",
  }).id(`ftb:shortcut_recipes/furnace_minecart_0`);

  shaped("minecraft:furnace_minecart", ["CCC", "CMC", "CCC"], {
    C: "#minecraft:stone_tool_materials",
    M: "minecraft:minecart",
  }).id(`ftb:shortcut_recipes/furnace_minecart_1`);

  shaped("minecraft:hopper_minecart", ["IHI", "III"], {
    I: "#forge:ingots/iron",
    H: "minecraft:hopper",
  }).id(`ftb:shortcut_recipes/hopper_minecart_0`);

  shaped("minecraft:hopper_minecart", ["ICI", "IMI", " I "], {
    I: "#forge:ingots/iron",
    M: "minecraft:minecart",
    C: "#forge:chests",
  }).id(`ftb:shortcut_recipes/hopper_minecart_1`);

  shaped("minecraft:hopper_minecart", ["IMI", "ICI", " I "], {
    I: "#forge:ingots/iron",
    M: "minecraft:minecart",
    C: "#forge:chests",
  }).id(`ftb:shortcut_recipes/hopper_minecart_2`);

  shapeless("4x minecraft:clay_ball", ["minecraft:clay"]).id(
    "ftb:shortcut_recipes/uncraft_clay_to_balls"
  );
});
