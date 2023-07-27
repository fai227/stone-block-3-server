onEvent("block.modification", (event) => {
  event.modify("minecraft:stone", (m) => {
    m.requiresTool = false;
  });

  event.modify("summoningrituals:altar", (m) => {
    m.destroySpeed = -1.0;
    m.explosionResistance = 3600000.0;
  });

  event.modify("minecraft:spawner", (m) => {
    m.destroySpeed = 50.0;
    m.explosionResistance = 1200.0;
  });

  // ftbsbc:bits_spawner
});
