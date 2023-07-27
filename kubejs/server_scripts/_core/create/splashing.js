// priority: 1000
onEvent("recipes", (event) => {
  event.remove({
    id: "create:splashing/gravel",
  });
  event.recipes
    .createSplashing(
      [
        Item.of("minecraft:lapis_lazuli").withChance(0.8),
        Item.of("minecraft:amethyst_shard").withChance(0.02),
        Item.of("minecraft:iron_nugget").withChance(0.7),
        Item.of("minecraft:flint").withChance(0.2),
        Item.of("minecraft:diamond").withChance(0.02),
        Item.of("minecraft:emerald").withChance(0.02),
        Item.of("thermal:cinnabar").withChance(0.1),
        Item.of("minecraft:emerald").withChance(0.05),
        Item.of("minecraft:diamond").withChance(0.05),
      ],
      "#forge:gravel"
    )
    .processingTime(600);

  event.remove({
    id: "create:splashing/sand",
  });
  event.recipes
    .createSplashing(
      [
        Item.of("minecraft:raw_gold").withChance(0.19),
        Item.of("minecraft:raw_copper").withChance(0.28),
        Item.of("minecraft:clay_ball").withChance(0.2),
        Item.of("thermal:raw_nickel").withChance(0.11),
        Item.of("thermal:raw_silver").withChance(0.13),
        Item.of("thermal:sulfur").withChance(0.04),
        Item.of("mekanism:fluorite_gem").withChance(0.07),
        Item.of("thermal:niter").withChance(0.03),
        Item.of("thermal:apatite").withChance(0.28),
      ],
      "#forge:sand"
    )
    .processingTime(600);

  event.remove({
    id: "create:splashing/soul_sand",
  });
  event.recipes
    .createSplashing(
      [
        Item.of("minecraft:quartz").withChance(0.1),
        Item.of("minecraft:glowstone_dust").withChance(0.09),
        Item.of("minecraft:gold_nugget").withChance(0.02),
      ],
      "minecraft:soul_sand"
    )
    .processingTime(600);

  event.recipes
    .createSplashing(
      [
        Item.of("minecraft:redstone").withChance(0.1),
        Item.of("ae2:sky_dust").withChance(0.03),
        Item.of("minecraft:bone_meal").withChance(0.1),
        Item.of("ae2:certus_quartz_dust").withChance(0.06),
        Item.of("tconstruct:earth_slime_crystal").withChance(0.01),
        Item.of("tconstruct:sky_slime_crystal").withChance(0.01),
      ],
      "ftbstoneblock:dust"
    )
    .processingTime(600);

  event.recipes
    .createSplashing(
      [
        Item.of("minecraft:chorus_flower").withChance(0.05),
        Item.of("minecraft:ender_pearl").withChance(0.07),
        Item.of("tconstruct:ender_slime_crystal").withChance(0.03),
      ],
      "ftbstoneblock:crushed_endstone"
    )
    .processingTime(600);
});
