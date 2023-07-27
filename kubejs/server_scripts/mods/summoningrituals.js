// priority: 99
onEvent("recipes", (event) => {
  event.recipes.summoningrituals
    .altar("ftbstoneblock:ritual_starter")
    .mobOutput(
      SummoningOutput.mob("skeleton")
        .count(2)
        .offset(-5, 2, -3)
        .spread(3, 0, 3)
        .data({
          Health: 50,
          Attributes: [{ Name: "generic.max_health", Base: 50 }],
        })
    )
    .mobOutput(
      SummoningOutput.mob("skeleton")
        .count(2)
        .offset(5, 2, 3)
        .spread(3, 0, 3)
        .data({
          Health: 50,
          Attributes: [{ Name: "generic.max_health", Base: 50 }],
        })
    )
    .mobOutput(
      SummoningOutput.mob("mother_silverfish:mother_silverfish")
        .offset(0, 2, 0)
        .count(1)
    )
    .mobOutput(
      SummoningOutput.mob("skeleton")
        .count(2)
        .offset(-5, 2, 3)
        .spread(3, 0, 3)
        .data({
          Health: 50,
          Attributes: [{ Name: "generic.max_health", Base: 50 }],
        })
    )
    .mobOutput(
      SummoningOutput.mob("skeleton")
        .count(2)
        .offset(5, 2, -3)
        .spread(3, 0, 3)
        .data({
          Health: 50,
          Attributes: [{ Name: "generic.max_health", Base: 50 }],
        })
    )
    .input("16x ftbstoneblock:cold_silverfish_shard")
    .input("16x minecraft:egg")
    .input("16x ftbstoneblock:warm_silverfish_shard")
    .recipeTime(300);
});

onEvent("summoningrituals.complete", (event) => {
  if (!event.player) return;
  event.player.data.ftbquests.addProgress("270B4B1DD2491CF2", 1);
});
