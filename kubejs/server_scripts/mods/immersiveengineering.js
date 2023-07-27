onEvent("recipes", (event) => {
  event.remove({ id: "immersiveengineering:crafting/sawdust" });
  event.remove({ id: "immersiveengineering:crafting/coal_coke_to_coke" });
  event.remove({ id: "immersiveengineering:crafting/coke_to_coal_coke" });
  event.remove({ id: "immersiveengineering:crafting/windmill" });
  event.remove({ id: "immersiveengineering:crafting/windmill_blade" });
  event.remove({ id: "immersiveengineering:crafting/windmill_sail" });
  event.remove({ id: "immersiveengineering:blueprint/banner_windmill" });

  event.recipes.thermal.pyrolyzer({
    ingredient: {
      item: "minecraft:coal",
    },
    result: [
      {
        item: "thermal:coal_coke",
      },
      {
        item: "thermal:tar",
        chance: 0.25,
      },
      {
        fluid: "immersiveengineering:creosote",
        amount: 250,
      },
    ],
    experience: 0.15,
  });

  event.recipes.thermal.pyrolyzer({
    ingredient: {
      tag: "minecraft:logs",
    },
    result: [
      {
        item: "minecraft:charcoal",
      },
      {
        fluid: "immersiveengineering:creosote",
        amount: 125,
      },
    ],
    experience: 0.15,
  });

  event.recipes
    .immersiveengineeringAlloy(
      "4x tconstruct:manyullyn_ingot",
      "3x tconstruct:cobalt_ingot",
      "minecraft:netherite_scrap"
    )
    .id("immersiveengineering:alloysmelter/manyullyn");

  event.recipes
    .immersiveengineeringAlloy(
      "2x create:brass_ingot",
      "minecraft:copper_ingot",
      "create:zinc_ingot"
    )
    .id("immersiveengineering:alloysmelter/brass");

  event.recipes
    .immersiveengineeringAlloy(
      "2x create:brass_ingot",
      "minecraft:copper_ingot",
      "create:zinc_ingot"
    )
    .id("immersiveengineering:alloysmelter/brass");

  event.recipes
    .immersiveengineeringAlloy(
      "2x immersiveengineering:insulating_glass",
      "2x #forge:glass",
      "#forge:dusts/iron"
    )
    .id("immersiveengineering:alloysmelter/insulating_glass");

  event.recipes
    .immersiveengineeringAlloy(
      "4x tconstruct:rose_gold_ingot",
      "3x #forge:ingots/copper",
      "#forge:ingots/gold"
    )
    .id("immersiveengineering:alloysmelter/rose_gold");

  event.recipes
    .immersiveengineeringAlloy(
      "2x thermal:constantan_ingot",
      "#forge:ingots/copper",
      "#forge:ingots/nickel"
    )
    .id("immersiveengineering:alloysmelter/constantan");

  event.recipes
    .immersiveengineeringAlloy(
      "3x thermal:invar_ingot",
      "2x #forge:ingots/iron",
      "#forge:ingots/nickel"
    )
    .id("immersiveengineering:alloysmelter/invar");

  event.recipes
    .immersiveengineeringAlloy(
      "2x thermal:electrum_ingot",
      "2x #forge:ingots/gold",
      "#forge:ingots/silver"
    )
    .id("immersiveengineering:alloysmelter/electrum");

  event.recipes
    .immersiveengineeringAlloy(
      "4x thermal:bronze_ingot",
      "3x #forge:ingots/copper",
      "#forge:ingots/tin"
    )
    .id("immersiveengineering:alloysmelter/bronze");

  event.recipes
    .immersiveengineeringBlastFurnace(
      "immersiveengineering:storage_steel",
      "#forge:storage_blocks/iron",
      "9x thermal:slag"
    )
    .id("immersiveengineering:blastfurnace/steel_block");

  event.recipes
    .immersiveengineeringBlastFurnace(
      "immersiveengineering:ingot_steel",
      "#forge:ingots/iron",
      "thermal:slag"
    )
    .id("immersiveengineering:blastfurnace/steel");

  event.recipes
    .immersiveengineeringCokeOven(
      "thermal:coal_coke_block",
      "#forge:storage_blocks/coal"
    )
    .creosote(5000)
    .time(16200)
    .id("immersiveengineering:cokeoven/coke_block");

  event.recipes
    .immersiveengineeringCokeOven("thermal:coal_coke", "#minecraft:coals")
    .creosote(500)
    .time(1800)
    .id("immersiveengineering:cokeoven/coke");

    //Fix the Shader Grabbag recipe interactions causing a lot of crashes
    //by removing recipes, then manually re-adding them
    //https://github.com/FTBTeam/FTB-Modpack-Issues/issues/2464
    //https://github.com/FTBTeam/FTB-Modpack-Issues/issues/2583
    event.remove({ type: "immersiveengineering:shader_bag" });
    event.shapeless("immersiveengineering:shader_bag_common", "immersiveengineering:shader_bag_uncommon");
    event.shapeless("immersiveengineering:shader_bag_uncommon", "immersiveengineering:shader_bag_rare");
    event.shapeless("immersiveengineering:shader_bag_rare", "immersiveengineering:shader_bag_epic");
    event.shapeless("immersiveengineering:shader_bag_epic", "immersiveengineering:shader_bag_ie_masterwork");
});
