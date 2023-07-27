onEvent("recipes", (event) => {
  event
    .shaped("cobblefordays:tier_1", ["RRR", "WGL", "RRR"], {
      W: "minecraft:water_bucket",
      L: "minecraft:lava_bucket",
      G: "minecraft:glass",
      R: "ftbstoneblock:1x_compressed_stone",
    })
    .id("cobblefordays:tier_1");

  event.recipes.tconstruct
    .casting_basin({
      cast: Item.of("cobblefordays:tier_1").toJson(),
      cast_consumed: true,
      fluid: {
        name: "tconstruct:seared_stone",
        amount: 4000,
      },
      result: "cobblefordays:tier_2",
      cooling_time: 100,
    })
    .id("cobblefordays:tier_2");

  event.recipes.tconstruct
    .casting_basin({
      cast: Item.of("cobblefordays:tier_2").toJson(),
      cast_consumed: true,
      fluid: {
        name: "tconstruct:molten_iron",
        amount: 3240,
      },
      result: "cobblefordays:tier_3",
      cooling_time: 100,
    })
    .id("cobblefordays:tier_3");

  event.recipes.tconstruct
    .casting_basin({
      cast: Item.of("cobblefordays:tier_3").toJson(),
      cast_consumed: true,
      fluid: {
        name: "tconstruct:molten_gold",
        amount: 3240,
      },
      result: "cobblefordays:tier_4",
      cooling_time: 100,
    })
    .id("cobblefordays:tier_4");

  event.recipes.tconstruct
    .casting_basin({
      cast: Item.of("cobblefordays:tier_4").toJson(),
      cast_consumed: true,
      fluid: {
        name: "tconstruct:molten_diamond",
        amount: 3600,
      },
      result: "cobblefordays:tier_5",
      cooling_time: 100,
    })
    .id("cobblefordays:tier_5");
});
