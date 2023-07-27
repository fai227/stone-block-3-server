onEvent("recipes", (event) => {
  const stoneOres = [
    {
      weight: 5000,
      ore: "mekanism:osmium_ore",
    },
    {
      weight: 3000,
      ore: "mekanism:uranium_ore",
    },
    {
      weight: 5000,
      ore: "mekanism:fluorite_ore",
    },
    {
      weight: 1000,
      ore: "rftoolsbase:dimensionalshard_overworld",
    },
    {
      weight: 5000,
      ore: "thermal:apatite_ore",
    },
    {
      weight: 5000,
      ore: "thermal:cinnabar_ore",
    },
    {
      weight: 5000,
      ore: "thermal:niter_ore",
    },
    {
      weight: 5000,
      ore: "thermal:sulfur_ore",
    },
    {
      weight: 5000,
      ore: "thermal:tin_ore",
    },
    {
      weight: 5000,
      ore: "thermal:lead_ore",
    },
    {
      weight: 5000,
      ore: "thermal:silver_ore",
    },
    {
      weight: 5000,
      ore: "thermal:nickel_ore",
    },
    {
      weight: 5000,
      ore: "immersiveengineering:ore_aluminum",
    },
    {
      weight: 5000,
      ore: "powah:uraninite_ore",
    },
    {
      weight: 5000,
      ore: "ae2:quartz_ore",
    },
    {
      weight: 5000,
      ore: "create:zinc_ore",
    },
  ];
  const deepslateOres = [
    {
      weight: 5000,
      ore: "mekanism:deepslate_osmium_ore",
    },
    {
      weight: 3000,
      ore: "mekanism:deepslate_uranium_ore",
    },
    {
      weight: 5000,
      ore: "mekanism:deepslate_fluorite_ore",
    },
    {
      weight: 5000,
      ore: "thermal:deepslate_apatite_ore",
    },
    {
      weight: 5000,
      ore: "thermal:deepslate_cinnabar_ore",
    },
    {
      weight: 5000,
      ore: "thermal:deepslate_niter_ore",
    },
    {
      weight: 5000,
      ore: "thermal:deepslate_sulfur_ore",
    },
    {
      weight: 5000,
      ore: "thermal:deepslate_tin_ore",
    },
    {
      weight: 5000,
      ore: "thermal:deepslate_lead_ore",
    },
    {
      weight: 5000,
      ore: "thermal:deepslate_silver_ore",
    },
    {
      weight: 5000,
      ore: "thermal:deepslate_nickel_ore",
    },
    {
      weight: 5000,
      ore: "immersiveengineering:deepslate_ore_aluminum",
    },
    {
      weight: 5000,
      ore: "powah:deepslate_uraninite_ore",
    },
    {
      weight: 5000,
      ore: "ae2:deepslate_quartz_ore",
    },
    {
      weight: 5000,
      ore: "create:deepslate_zinc_ore",
    },
  ];

  stoneOres.forEach((v) => {
    event.recipes.botania.orechid({
      input: "minecraft:stone",
      output: {
        type: "block",
        block: v.ore,
      },
      weight: v.weight,
    });
  });

  deepslateOres.forEach((v) => {
    event.recipes.botania.orechid({
      input: "minecraft:deepslate",
      output: {
        type: "block",
        block: v.ore,
      },
      weight: v.weight,
    });
  });

  event.recipes.botania.orechid_ignem({
    input: "minecraft:netherrack",
    output: {
      type: "block",
      block: "tconstruct:cobalt_ore",
    },
    weight: 800,
  });
});

onEvent("item.right_click", (event) => {
  if (event.item === "minecraft:glass_bottle") {
    let biomeHolder = event.player.level.minecraftLevel.getBiome(
      event.player.getBlock().getPos()
    );
    if (biomeHolder.is("minecraft:the_end")) {
      event.player.give("botania:ender_air_bottle");
      event.item.count--;
    }
  }
});
