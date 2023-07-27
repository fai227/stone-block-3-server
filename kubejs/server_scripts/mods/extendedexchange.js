onEvent("recipes", (event) => {
  event.remove({ id: "extendedexchange:stone_table" });
  event.remove({ id: "extendedexchange:stone_table_1" });
  event.remove({ id: "extendedexchange:final_star" });
  event.remove({ id: "extendedexchange:final_star_shard" });
  event.remove({ id: "extendedexchange:collector/final" });
  event.remove({ id: "extendedexchange:relay/final" });
  event.remove({ id: "extendedexchange:power_flower/final" });
  event.remove({ id: "extendedexchange:compressed_collector/final" });
  event.remove({ id: "extendedexchange:alchemy_table" });
  event.remove({ id: "extendedexchange:tome_of_knowledge" });

  event.shaped("extendedexchange:alchemy_table", ["ABC", "TST", "WDW"], {
    A: "projecte:low_covalence_dust",
    B: "projecte:medium_covalence_dust",
    C: "projecte:high_covalence_dust",
    T: "minecraft:torch",
    S: "projecte:philosophers_stone",
    W: "#forge:rods/wooden",
    D: "#forge:gems/diamond",
  });

  event
    .shaped("extendedexchange:arcane_tablet", ["ACA", "SMS", "ABA"], {
      A: "extendedexchange:alchemy_table",
      B: "projecte:alchemical_chest",
      C: "minecraft:crafting_table",
      S: "projecte:philosophers_stone",
      M: "projecte:transmutation_tablet",
    })
    .id("extendedexchange:arcane_tablet");
});
