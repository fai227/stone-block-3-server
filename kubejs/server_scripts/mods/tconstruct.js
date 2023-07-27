onEvent("recipes", (event) => {
  event.remove({ id: "tconstruct:common/flint" });
  event.remove({ id: "tconstruct:common/glass/vanilla/daylight_detector" });

  event.recipes.thermal.centrifuge({
    ingredient: {
      item: "minecraft:honey_bottle",
    },
    result: [
      {
        item: "minecraft:glass_bottle",
      },
      {
        fluid: "tconstruct:honey",
        amount: 250,
      },
    ],
    energy: 400,
  });

  event.recipes.thermal.centrifuge({
    ingredient: {
      item: "minecraft:honeycomb",
    },
    result: [
      {
        fluid: "tconstruct:honey",
        amount: 100,
      },
    ],
  });

  event.recipes.thermal.crucible({
    ingredient: {
      item: "minecraft:honey_block",
    },
    result: [
      {
        fluid: "tconstruct:honey",
        amount: 1000,
      },
    ],
    energy: 2000,
  });

  event.recipes.thermal.chiller({
    ingredient: {
      fluid: "tconstruct:honey",
      amount: 1000,
    },
    result: [
      {
        item: "minecraft:honey_block",
      },
    ],
    energy: 2000,
  });

  event.recipes.create.mixing({
    ingredients: [
      {
        item: "minecraft:honey_block",
      },
    ],
    results: [
      {
        fluid: "tconstruct:honey",
        amount: 1000,
      },
    ],
    heatRequirement: "heated",
  });

  event.recipes.create
    .emptying({
      ingredients: [
        {
          item: "minecraft:honey_bottle",
        },
      ],
      results: [
        {
          item: "minecraft:glass_bottle",
        },
        {
          fluid: "tconstruct:honey",
          amount: 250,
        },
      ],
    })
    .id("create:emptying/honey_bottle");

  const chickens = [
    { c: "chickens:iron_chicken", f: "tconstruct:molten_iron", a: 10 },
    { c: "chickens:lead_chicken", f: "tconstruct:molten_lead", a: 10 },
    { c: "chickens:ender_chicken", f: "tconstruct:molten_ender", a: 10 },
    { c: "chickens:zinc_chicken", f: "tconstruct:molten_zinc", a: 10 },
    { c: "chickens:glass_chicken", f: "tconstruct:molten_glass", a: 10 },
    { c: "chickens:blaze_chicken", f: "tconstruct:blazing_blood", a: 10 },
    { c: "chickens:nickel_chicken", f: "tconstruct:molten_nickel", a: 10 },
    { c: "chickens:soulsand_chicken", f: "tconstruct:liquid_soul", a: 10 },
    { c: "chickens:uranium_chicken", f: "tconstruct:molten_uranium", a: 10 },
    { c: "chickens:netherite_chicken", f: "tconstruct:molten_netherite", a: 10 },
    { c: "chickens:copper_chicken", f: "tconstruct:molten_copper", a: 10 },
    { c: "chickens:magma_chicken", f: "tconstruct:magma", a: 10 },
    { c: "chickens:obsidian_chicken", f: "tconstruct:molten_obsidian", a: 10 },
    { c: "chickens:quartz_chicken", f: "tconstruct:molten_quartz", a: 10 },
    { c: "chickens:tin_chicken", f: "tconstruct:molten_tin", a: 10 },
    { c: "chickens:aluminum_chicken", f: "tconstruct:molten_aluminum", a: 10 },
    { c: "chickens:osmium_chicken", f: "tconstruct:molten_osmium", a: 10 },
    { c: "chickens:gold_chicken", f: "tconstruct:molten_gold", a: 10 },
    { c: "chickens:diamond_chicken", f: "tconstruct:molten_diamond", a: 10 },
    { c: "chickens:clay_chicken", f: "tconstruct:molten_clay", a: 10 },
    { c: "chickens:emerald_chicken", f: "tconstruct:molten_emerald", a: 10 },
    { c: "chickens:cobalt_chicken", f: "tconstruct:molten_cobalt", a: 10 },
    { c: "chickens:silver_chicken", f: "tconstruct:molten_silver", a: 10 },
  ];

  chickens.forEach((e) => {
    event.recipes.tconstruct.entity_melting({
      entity: {
        type: e.c,
      },
      result: {
        fluid: e.f,
        amount: e.a,
      },
      damage: 2,
    });
  });
});
