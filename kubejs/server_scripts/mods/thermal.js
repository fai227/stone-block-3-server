onEvent("recipes", (event) => {
  event.remove({ id: "thermal:rockwool/white_rockwool_from_smelting" });
  event.remove({ id: "thermal:machines/pyrolyzer/pyrolyzer_coal" });
  event.remove({ id: "thermal:machines/pyrolyzer/pyrolyzer_logs" });
  event.remove({ id: "thermal:storage/bamboo_block" });

  //Honey unify, readded in tconstruct.js
  event.remove({ id: "thermal:machines/centrifuge/centrifuge_honey_bottle" });
  event.remove({ id: "thermal:machines/centrifuge/centrifuge_honeycomb" });
  event.remove({
    id: "thermal:machines/crucible/crucible_honey_block_to_honey",
  });
  event.remove({ id: "thermal:machines/chiller/chiller_honey_to_honey_block" });

  //Remove coins as they are not used.
  event.remove({ output: /thermal:.*_coin/ });
  event.remove({ input: /thermal:.*_coin/ });
  event.remove({ id: "thermal:dynamo_numismatic" });

  //Remove all ruby stuff as it's not used.
  event.remove({ output: "thermal:ruby" });
  event.remove({ input: "thermal:ruby" });
  event.remove({ id: "thermal:machines/pulverizer/pulverizer_ruby" });

  //Remove all sapphire stuff as it's not used.
  event.remove({ output: "thermal:sapphire" });
  event.remove({ input: "thermal:sapphire" });
  event.remove({ id: "thermal:machines/pulverizer/pulverizer_sapphire" });

  event.shaped("2x thermal:compost", ["XZ", "ZY"], {
    X: "minecraft:dirt",
    Z: "minecraft:wheat",
    Y: "farmersdelight:tree_bark",
  });

  event.remove({ output: "thermal:potato_block" });
  event.remove({ input: "thermal:potato_block" });

  event.remove({ output: "thermal:beetroot_block" });
  event.remove({ input: "thermal:beetroot_block" });

  event.shaped("thermal:charge_bench", ["III", "PCP", "XPX"], {
    C: "#forge:storage_blocks/redstone",
    I: "#forge:ingots/electrum",
    P: "thermal:rf_coil",
    X: "#forge:ingots/lead",
  });

  //Rockwool moved to Induction Smelter
  event.remove({ id: "thermal:rockwool/white_rockwool_from_smelting" });
  event.remove({ id: "thermal:rockwool/white_rockwool_from_blasting" });
  //Rockwool
  event.recipes.thermal.smelter("thermal:white_rockwool", "thermal:slag");

  // produce fluid xp from mob grinding utils instead of essence of knowledge
  // (essence of knowledge can still be obtained from the insightful crystal, since we cannot change that unfortunately)
  event.recipes.thermal
    .centrifuge(["minecraft:glass_bottle", Fluid.of("mob_grinding_utils:fluid_xp", 250)], "minecraft:experience_bottle")
    .id("thermal:machines/centrifuge/centrifuge_experience_bottle");
});
