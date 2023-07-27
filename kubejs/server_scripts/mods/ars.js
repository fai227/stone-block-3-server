// priority: 99
onEvent("recipes", (event) => {
  event
    .shapeless("ars_nouveau:novice_spell_book", [
      "ars_nouveau:novice_spell_book",
      "#forge:dyes",
    ])
    .id("ars_nouveau:novice_book_dye");

  event.recipes.ars_nouveau
    .enchanting_apparatus({
      reagent: [
        {
          item: "ars_nouveau:drygmy_shard",
        },
      ],
      pedestalItems: [
        {
          item: {
            item: "ftbstoneblock:silverfish_heart",
          },
        },
        {
          item: {
            item: "ftbstoneblock:silverfish_heart",
          },
        },
        {
          item: {
            item: "ftbstoneblock:silverfish_heart",
          },
        },
        {
          item: {
            item: "ftbstoneblock:silverfish_heart",
          },
        },
        {
          item: {
            tag: "forge:seeds",
          },
        },
        {
          item: {
            tag: "forge:gems/source",
          },
        },
        {
          item: {
            tag: "forge:gems/source",
          },
        },
        {
          item: {
            tag: "forge:gems/source",
          },
        },
      ],
      output: {
        item: "ars_nouveau:drygmy_charm",
      },
      sourceCost: 0,
      keepNbtOfReagent: false,
    })
    .id("ars_nouveau:drygmy_charm");
});
