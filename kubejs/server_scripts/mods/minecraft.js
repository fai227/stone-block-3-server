// priority: 99
onEvent("recipes", (event) => {
  event.campfireCooking("minecraft:torch", "minecraft:stick").cookingTime(0);
});

onEvent("recipes", (event) => {
  event.remove({ id: "minecraft:daylight_detector" });
  event.remove({ id: "minecraft:end_crystal" });
  event.remove({ id: "minecraft:magma_cream" });
  event.remove({ id: "minecraft:sticky_piston" });
  event.remove({ id: "minecraft:lead" });
  event.remove({ id: "minecraft:comparator" });
  event.remove({ id: "minecraft:glass_bottle" });
  event.remove({ id: "minecraft:beacon" });

  event.shaped("minecraft:sponge", [" W ", "WBW", " W "], {
    B: "minecraft:bucket",
    W: "#forge:wool/yellow",
  });

  event.smoking('minecraft:cooked_chicken', 'chickens:chicken_item').xp(0.35)
});
