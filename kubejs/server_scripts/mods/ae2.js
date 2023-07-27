onEvent("recipes", (event) => {
  //Certus dust
  event.recipes.createCrushing(
    ["ae2:certus_quartz_dust"],
    `#forge:gems/certus_quartz`
  );
  event.recipes.immersiveengineeringCrusher(
    "ae2:certus_quartz_dust",
    `#forge:gems/certus_quartz`
  );
  event.recipes.thermal.pulverizer(
    "ae2:certus_quartz_dust",
    `#forge:gems/certus_quartz`
  );

  event.recipes.immersiveengineeringCrusher(
    "5x ae2:certus_quartz_dust",
    `#forge:ores/certus_quartz`
  );
  event.recipes.thermal.pulverizer(
    ["5x ae2:certus_quartz_dust", Item.of("minecraft:gravel").withChance(0.2)],
    `#forge:ores/certus_quartz`
  );

  //Fluix Dust
  event.recipes.createCrushing(["ae2:fluix_dust"], `#forge:gems/fluix`);
  event.recipes.immersiveengineeringCrusher(
    "ae2:fluix_dust",
    `#forge:gems/fluix`
  );
  event.recipes.thermal.pulverizer("ae2:fluix_dust", `#forge:gems/fluix`);

  //Sky Stone Dust
  event.recipes.createCrushing(["ae2:sky_dust"], `ae2:sky_stone_block`);
  event.recipes.immersiveengineeringCrusher(
    "ae2:sky_dust",
    `ae2:sky_stone_block`
  );
  event.recipes.thermal.pulverizer("ae2:sky_dust", `ae2:sky_stone_block`);

  //Calculation Press
  event.recipes.thermalPress("ae2:calculation_processor_press", [
    "minecraft:iron_block",
    `ae2:certus_quartz_crystal`,
  ]);
  event.recipes.immersiveengineeringMetalPress(
    "ae2:calculation_processor_press",
    "minecraft:iron_block",
    `ae2:certus_quartz_crystal`
  );

  //Engineering Press
  event.recipes.thermalPress("ae2:engineering_processor_press", [
    "minecraft:iron_block",
    "minecraft:diamond",
  ]);
  event.recipes.immersiveengineeringMetalPress(
    "ae2:engineering_processor_press",
    "minecraft:iron_block",
    "minecraft:diamond"
  );

  //Logic Press
  event.recipes.thermalPress("ae2:logic_processor_press", [
    "minecraft:iron_block",
    "minecraft:gold_ingot",
  ]);
  event.recipes.immersiveengineeringMetalPress(
    "ae2:logic_processor_press",
    "minecraft:iron_block",
    "minecraft:gold_ingot"
  );

  //Logic Press
  event.recipes.thermalPress("ae2:silicon_press", [
    "minecraft:iron_block",
    "ae2:silicon",
  ]);
  event.recipes.immersiveengineeringMetalPress(
    "ae2:silicon_press",
    "minecraft:iron_block",
    "ae2:silicon"
  );

  //Ender Dust
  event.recipes.immersiveengineeringCrusher(
    "ae2:ender_dust",
    "minecraft:ender_pearl"
  );
  event.recipes.mekanismCrushing("ae2:ender_dust", "minecraft:ender_pearl");

  event.recipes.create.deploying({
    ingredients: [
      Ingredient.of("ae2:silicon").toJson(),
      Ingredient.of("ae2:silicon_press").toJson(),
    ],
    results: [Item.of("ae2:printed_silicon").toResultJson()],
    keepHeldItem: true,
  });

  event.recipes.create.deploying({
    ingredients: [
      Ingredient.of("minecraft:gold_ingot").toJson(),
      Ingredient.of("ae2:logic_processor_press").toJson(),
    ],
    results: [Item.of("ae2:printed_logic_processor").toResultJson()],
    keepHeldItem: true,
  });

  event.recipes.create.deploying({
    ingredients: [
      Ingredient.of("ae2:certus_quartz_crystal").toJson(),
      Ingredient.of("ae2:calculation_processor_press").toJson(),
    ],
    results: [Item.of("ae2:printed_calculation_processor").toResultJson()],
    keepHeldItem: true,
  });

  event.recipes.create.deploying({
    ingredients: [
      Ingredient.of("minecraft:diamond").toJson(),
      Ingredient.of("ae2:engineering_processor_press").toJson(),
    ],
    results: [Item.of("ae2:printed_engineering_processor").toResultJson()],
    keepHeldItem: true,
  });

  const ilp = "ftbstoneblock:incomplete_printed_logic_processor";
  event.recipes
    .createSequencedAssembly(
      "ae2:logic_processor",
      "ae2:printed_logic_processor",
      [
        event.recipes.createDeploying(ilp, [ilp, "ae2:printed_silicon"]),
        event.recipes.createDeploying(ilp, [ilp, "minecraft:redstone"]),
        event.recipes.createPressing(ilp, ilp),
      ]
    )
    .transitionalItem(ilp)
    .loops(1);

  const icp = "ftbstoneblock:incomplete_printed_calculation_processor";
  event.recipes
    .createSequencedAssembly(
      "ae2:calculation_processor",
      "ae2:printed_calculation_processor",
      [
        event.recipes.createDeploying(icp, [icp, "ae2:printed_silicon"]),
        event.recipes.createDeploying(icp, [icp, "minecraft:redstone"]),
        event.recipes.createPressing(icp, icp),
      ]
    )
    .transitionalItem(icp)
    .loops(1);

  const iep = "ftbstoneblock:incomplete_printed_engineering_processor";
  event.recipes
    .createSequencedAssembly(
      "ae2:engineering_processor",
      "ae2:printed_engineering_processor",
      [
        event.recipes.createDeploying(iep, [iep, "ae2:printed_silicon"]),
        event.recipes.createDeploying(iep, [iep, "minecraft:redstone"]),
        event.recipes.createPressing(iep, iep),
      ]
    )
    .transitionalItem(iep)
    .loops(1);

  event.recipes.create.deploying({
    ingredients: [
      Ingredient.of("minecraft:iron_block").toJson(),
      Ingredient.of("ae2:silicon_press").toJson(),
    ],
    results: [Item.of("ae2:silicon_press").toResultJson()],
    keepHeldItem: true,
  });

  event.recipes.create.deploying({
    ingredients: [
      Ingredient.of("minecraft:iron_block").toJson(),
      Ingredient.of("ae2:logic_processor_press").toJson(),
    ],
    results: [Item.of("ae2:logic_processor_press").toResultJson()],
    keepHeldItem: true,
  });

  event.recipes.create.deploying({
    ingredients: [
      Ingredient.of("minecraft:iron_block").toJson(),
      Ingredient.of("ae2:calculation_processor_press").toJson(),
    ],
    results: [Item.of("ae2:calculation_processor_press").toResultJson()],
    keepHeldItem: true,
  });

  event.recipes.create.deploying({
    ingredients: [
      Ingredient.of("minecraft:iron_block").toJson(),
      Ingredient.of("ae2:engineering_processor_press").toJson(),
    ],
    results: [Item.of("ae2:engineering_processor_press").toResultJson()],
    keepHeldItem: true,
  });

  event.recipes.create.deploying({
    ingredients: [
      Ingredient.of("minecraft:iron_block").toJson(),
      Ingredient.of("ae2:silicon").toJson(),
    ],
    results: [Item.of("ae2:silicon_press").toResultJson()],
  });

  event.recipes.create.deploying({
    ingredients: [
      Ingredient.of("minecraft:iron_block").toJson(),
      Ingredient.of("minecraft:gold_ingot").toJson(),
    ],
    results: [Item.of("ae2:logic_processor_press").toResultJson()],
  });

  event.recipes.create.deploying({
    ingredients: [
      Ingredient.of("minecraft:iron_block").toJson(),
      Ingredient.of("ae2:certus_quartz_crystal").toJson(),
    ],
    results: [Item.of("ae2:calculation_processor_press").toResultJson()],
  });

  event.recipes.create.deploying({
    ingredients: [
      Ingredient.of("minecraft:iron_block").toJson(),
      Ingredient.of("minecraft:diamond").toJson(),
    ],
    results: [Item.of("ae2:engineering_processor_press").toResultJson()],
  });

  event.remove({ id: "ae2:network/blocks/inscribers" });
});
