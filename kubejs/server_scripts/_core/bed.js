onEvent("block.right_click", (event) => {
  if (event.block.hasTag("minecraft:beds")) {
    if (event.block.dimension === "minecraft:overworld") {
      event.cancel();
      return;
    }

    if (event.block.biomeId !== "minecraft:plains") {
      event.cancel();
      event.block.set("minecraft:air");
      let explosion = event.block.createExplosion();
      explosion.strength(5);
      explosion.exploder(event.player);
      explosion.destroysTerrain(true);
      explosion.explode();
    }
  }

  if (event.block === "minecraft:respawn_anchor") {
    if (event.block.biomeId !== "minecraft:nether_wastes") {
      if (event.block.properties.charges > 1) {
        event.cancel();
        event.block.set("minecraft:air");
        let explosion = event.block.createExplosion();
        explosion.strength(5);
        explosion.exploder(event.player);
        explosion.destroysTerrain(true);
        explosion.explode();
      }
    }
  }
});
