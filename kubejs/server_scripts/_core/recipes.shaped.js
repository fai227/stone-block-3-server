// priority: 99
onEvent("recipes", (event) => {
  event.shaped("create:cogwheel", ["BBB", "BAB", "BBB"], {
    B: "#minecraft:wooden_buttons",
    A: "minecraft:polished_andesite",
  });

  event.remove({
    id: "create:crafting/kinetics/millstone",
  });
  event.shaped("create:millstone", [" P ", "ACA", " S "], {
    P: "#minecraft:planks",
    S: "#forge:stone",
    C: "create:cogwheel",
    A: "minecraft:polished_andesite",
  });

  event.remove({
    id: "create:crafting/kinetics/hand_crank",
  });
  event.shaped("create:hand_crank", [" R ", "PPP", "  A"], {
    P: "#minecraft:planks",
    R: "ftbsbc:stone_rod",
    A: "minecraft:polished_andesite",
  });

  event.shaped("minecraft:cobblestone", ["SS", "SS"], {
    S: "ftbstoneblock:stonepebble",
  });

  event.remove({
    id: "minecraft:crafting_table",
  });
  event.shaped("minecraft:crafting_table", ["SS", "SS"], {
    S: "minecraft:cobblestone",
  });

  for (let type in global.compressables) {
    let props = global.compressables[type];
    let maxLevel = props.maxLevel || global.maxCompress;
    for (let i = 0; i <= maxLevel; i++) {
      let sm =
        i > 1 ? `ftbstoneblock:${i - 1}x_compressed_${type}` : props.original;

      let lg =
        i > 0 ? `ftbstoneblock:${i}x_compressed_${type}` : props.original;

      if (i > 0) {
        event.shaped(lg, ["CCC", "CCC", "CCC"], {
          C: Item.of(sm),
        });
      }

      if (i > 0) event.shapeless(Item.of(sm, 9), lg);
    }
  }

  event.shaped("ftbstoneblock:press_rod_die", [" P ", "PSP", " P "], {
    P: "#forge:plates/invar",
    S: "#forge:rods/wooden",
  });
});
