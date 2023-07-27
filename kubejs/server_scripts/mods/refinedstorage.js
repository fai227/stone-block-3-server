onEvent("recipes", (event) => {
  event.remove({ id: "refinedstorage:raw_basic_processor" });
  event.remove({ id: "refinedstorage:raw_improved_processor" });
  event.remove({ id: "refinedstorage:raw_advanced_processor" });

  event.recipes
    .createSequencedAssembly(
      "refinedstorage:raw_basic_processor",
      "#forge:ingots/iron",
      [
        event.recipes.createDeploying(
          "ftbstoneblock:incomplete_raw_basic_processor",
          [
            "ftbstoneblock:incomplete_raw_basic_processor",
            "refinedstorage:processor_binding",
          ]
        ),
        event.recipes.createDeploying(
          "ftbstoneblock:incomplete_raw_basic_processor",
          ["ftbstoneblock:incomplete_raw_basic_processor", "#forge:silicon"]
        ),
        event.recipes.createDeploying(
          "ftbstoneblock:incomplete_raw_basic_processor",
          [
            "ftbstoneblock:incomplete_raw_basic_processor",
            "#forge:dusts/redstone",
          ]
        ),
      ]
    )
    .transitionalItem("ftbstoneblock:incomplete_raw_basic_processor")
    .loops(1);

  event.recipes
    .createSequencedAssembly(
      "refinedstorage:raw_improved_processor",
      "#forge:ingots/gold",
      [
        event.recipes.createDeploying(
          "ftbstoneblock:incomplete_raw_improved_processor",
          [
            "ftbstoneblock:incomplete_raw_improved_processor",
            "refinedstorage:processor_binding",
          ]
        ),
        event.recipes.createDeploying(
          "ftbstoneblock:incomplete_raw_improved_processor",
          ["ftbstoneblock:incomplete_raw_improved_processor", "#forge:silicon"]
        ),
        event.recipes.createDeploying(
          "ftbstoneblock:incomplete_raw_improved_processor",
          [
            "ftbstoneblock:incomplete_raw_improved_processor",
            "#forge:dusts/redstone",
          ]
        ),
      ]
    )
    .transitionalItem("ftbstoneblock:incomplete_raw_improved_processor")
    .loops(1);

  event.recipes
    .createSequencedAssembly(
      "refinedstorage:raw_advanced_processor",
      "#forge:gems/diamond",
      [
        event.recipes.createDeploying(
          "ftbstoneblock:incomplete_raw_advanced_processor",
          [
            "ftbstoneblock:incomplete_raw_advanced_processor",
            "refinedstorage:processor_binding",
          ]
        ),
        event.recipes.createDeploying(
          "ftbstoneblock:incomplete_raw_advanced_processor",
          ["ftbstoneblock:incomplete_raw_advanced_processor", "#forge:silicon"]
        ),
        event.recipes.createDeploying(
          "ftbstoneblock:incomplete_raw_advanced_processor",
          [
            "ftbstoneblock:incomplete_raw_advanced_processor",
            "#forge:dusts/redstone",
          ]
        ),
      ]
    )
    .transitionalItem("ftbstoneblock:incomplete_raw_advanced_processor")
    .loops(1);

  event.shaped("refinedstorageaddons:wireless_crafting_grid", ["WAC"], {
    W: "refinedstorage:wireless_grid",
    A: "refinedstorage:advanced_processor",
    C: "minecraft:crafting_table",
  });
});
