onEvent("recipes", (event) => {
  event.remove({ id: "powah:crafting/solar_panel_starter" });
  event.remove({ id: "powah:crafting/solar_panel_basic" });
  event.remove({ id: "powah:crafting/solar_panel_hardened" });
  event.remove({ id: "powah:crafting/solar_panel_blazing" });
  event.remove({ id: "powah:crafting/solar_panel_niotic" });
  event.remove({ id: "powah:crafting/solar_panel_spirited" });
  event.remove({ id: "powah:crafting/solar_panel_nitro" });

  event
    .custom({
      type: "powah:energizing",
      ingredients: [
        { item: "minecraft:iron_block" },
        { item: "minecraft:gold_block" },
      ],
      energy: 90000,
      result: Item.of("2x powah:energized_steel_block"),
    })
    .id("ftbstoneblock:powah/energizing/energized_steel_block");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [{ item: "botania:blaze_block" }],
      energy: 900000,
      result: {
        item: "powah:blazing_crystal_block",
      },
    })
    .id("ftbstoneblock:powah/energizing/blaze_block");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [{ item: "minecraft:diamond_block" }],
      energy: 2700000,
      result: {
        item: "powah:niotic_crystal_block",
      },
    })
    .id("ftbstoneblock:powah/energizing/niotic_block");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [{ item: "minecraft:emerald_block" }],
      energy: 9000000,
      result: {
        item: "powah:spirited_crystal_block",
      },
    })
    .id("ftbstoneblock:powah/energizing/spirited_block");
});
