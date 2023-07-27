onEvent("recipes", (event) => {
  event.remove({ id: "mekanismgenerators:solar_panel" });
  event.remove({ id: "mekanismgenerators:module_solar_recharging_unit" });
  event.remove({ id: "mekanismgenerators:generator/solar" });
  event.remove({ id: "mekanismgenerators:generator/advanced_solar" });
  event.remove({ id: "mekanism:solar_neutron_activator" });
  event.remove({ id: "mekanismgenerators:activating/tritium" });
  event.remove({ id: "mekanism:processing/lategame/polonium" });
  event.remove({ id: "mekanismgenerators:generator/wind" });

  event.recipes.mekanism.centrifuging({
    input: { amount: 1, gas: "mekanism:lithium" },
    output: { gas: "mekanismgenerators:tritium", amount: 1 },
  });

  event.recipes.mekanism.reaction({
    itemInput: {
      ingredient: {
        item: "mekanism:dust_sulfur",
      },
    },
    fluidInput: {
      amount: 1000,
      tag: "minecraft:water",
    },
    gasInput: {
      amount: 100,
      gas: "mekanism:nuclear_waste",
    },
    gasOutput: {
      gas: "mekanism:polonium",
      amount: 10,
    },
    duration: 100,
  });
});
