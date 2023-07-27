onEvent("recipes", (event) => {
  event.recipes.createMixing(
    [
      "ftbstoneblock:silverfish_heart",
      "ars_nouveau:summon_focus",
      Item.of("ftbstoneblock:cold_silverfish_shard", 16),
    ],
    [
      "ftbstoneblock:silverfish_heart",
      "botania:terrasteel_block",
      "ars_nouveau:summon_focus",
      "bloodmagic:etherealslate",
      "minecraft:dragon_egg",
      "minecraft:blue_ice",
    ]
  );

  event.recipes
    .createMixing(
      [
        "ftbstoneblock:silverfish_heart",
        "ars_nouveau:summon_focus",
        Item.of("ftbstoneblock:warm_silverfish_shard", 16),
      ],
      [
        "ftbstoneblock:silverfish_heart",
        "botania:terrasteel_block",
        "ars_nouveau:summon_focus",
        "bloodmagic:etherealslate",
        "minecraft:dragon_egg",
        Fluid.of("minecraft:lava", 1000),
      ]
    )
    .superheated();
});
