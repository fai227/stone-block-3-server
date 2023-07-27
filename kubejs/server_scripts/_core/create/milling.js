// priority: 1000
onEvent("recipes", (event) => {
  event.remove({
    id: "create:milling/gravel",
  });
  event.recipes.createMilling(
    [
      Item.of("minecraft:coal").withChance(0.35),
      Item.of("minecraft:raw_iron").withChance(0.35),
      Item.of("create:raw_zinc").withChance(0.2),
      Item.of("minecraft:sand").withChance(0.4),
    ],
    "#forge:gravel"
  );

  event.remove({
    id: "create:milling/cobblestone",
  });
});

// const crushing = event.recipes.createCrushing;
// const milling = event.recipes.createMilling;
// const pressing = event.recipes.createPressing;
// const compacting = event.recipes.createCompacting;
// const mixing = event.recipes.createMixing;
// const splashing = event.recipes.createSplashing;
// const haunting = event.recipes.createHaunting;
// const filling = event.recipes.createFilling;
// const draining = event.recipes.createEmptying;
// const crafting = event.recipes.createMechanicalCrafting;
// const sequence = event.recipes.createSequencedAssembly;
// const deploying = event.recipes.createDeploying;
