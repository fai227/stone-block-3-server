onEvent("block.place", (event) => {
  const BLOCK_BLACKLIST = [
    "chancecubes:chance_cube",
    "chancecubes:compact_giant_chance_cube",
  ];
  if (BLOCK_BLACKLIST.includes(event.block.id)) {
    if (event.level.dimension === "compactmachines:compact_world")
      event.cancel();
  }
});
