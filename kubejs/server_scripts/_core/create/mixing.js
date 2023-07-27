// priority: 1000
onEvent("recipes", (event) => {
  event.recipes.createMixing("minecraft:soul_sand", [
    "#minecraft:sand",
    "ftbstoneblock:mob_soul",
    Fluid.of("minecraft:water", 250),
  ]);
});
