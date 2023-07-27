onEvent("recipes", (event) => {
  const crates = [
    {
      single: "minecraft:potato",
      crate: "farmersdelight:potato_crate",
    },
    {
      single: "minecraft:beetroot",
      crate: "farmersdelight:beetroot_crate",
    },
    {
      single: "minecraft:carrot",
      crate: "farmersdelight:carrot_crate",
    },
    {
      single: "farmersdelight:onion",
      crate: "farmersdelight:onion_crate",
    },
    {
      single: "farmersdelight:tomato",
      crate: "farmersdelight:tomato_crate",
    },
    {
      single: "farmersdelight:cabbage",
      crate: "farmersdelight:cabbage_crate",
    },
  ];

  crates.forEach((o) => {
    event.recipes.thermalPress(`9x ${o.single}`, [
      o.crate,
      "thermal:press_unpacking_die",
    ]);

    event.recipes.thermalPress(o.crate, [
      `9x ${o.single}`,
      "thermal:press_packing_3x3_die",
    ]);
  });
});
