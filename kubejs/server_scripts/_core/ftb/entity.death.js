// priority: 100
onEvent("entity.death", (event) => {
  if (
    event.entity.type !== "minecraft:player" &&
    Utils.random.nextDouble() < 0.2
  ) {
    const entity = event.level.createEntity("item");
    entity.item = "ftbstoneblock:mob_soul";
    entity.setPosition(event.entity.x, event.entity.y, event.entity.z);
    entity.spawn();
  }
});
