onEvent("recipes", (event) => {
  event.recipes.ftbdripperDrip({
    inputBlock: "minecraft:dirt",
    outputBlock: "minecraft:clay",
    chance: 1.0,
  });

  event.recipes.ftbdripperDrip({
    inputBlock: "ftbstoneblock:1x_compressed_stone",
    outputBlock: "minecraft:iron_ore",
    chance: 0.15,
  });

  event.recipes.ftbdripperDrip({
    inputBlock: "ftbstoneblock:2x_compressed_stone",
    outputBlock: "minecraft:gold_ore",
    chance: 0.1,
  });

  event.recipes.ftbdripperDrip({
    inputBlock: "ftbstoneblock:3x_compressed_stone",
    outputBlock: "minecraft:diamond_ore",
    chance: 0.03,
  });

  event.recipes.ftbdripperDrip({
    inputBlock: "ftbstoneblock:1x_compressed_cobblestone",
    outputBlock: "minecraft:magma_block",
    fluid: "minecraft:lava",
    chance: 0.6,
  });

  event.recipes.ftbdripperDrip({
    inputBlock: "ftbstoneblock:1x_compressed_cobblestone",
    outputBlock: "ftbstoneblock:1x_compressed_gravel",
    chance: 0.15,
  });

  event.recipes.ftbdripperDrip({
    inputBlock: "ftbstoneblock:1x_compressed_gravel",
    outputBlock: "ftbstoneblock:1x_compressed_dirt",
    chance: 0.32,
  });

  event.recipes.ftbdripperDrip({
    inputBlock: "ftbstoneblock:1x_compressed_dirt",
    outputBlock: "ftbstoneblock:1x_compressed_sand",
    chance: 0.43,
  });

  event.recipes.ftbdripperDrip({
    inputBlock: "minecraft:sand",
    outputBlock: "thermal:oil_sand",
    fluid: "immersiveengineering:creosote",
    chance: 0.8,
  });

  event.recipes.ftbdripperDrip({
    inputBlock: "minecraft:red_sand",
    outputBlock: "thermal:oil_red_sand",
    fluid: "immersiveengineering:creosote",
    chance: 0.8,
  });
});
