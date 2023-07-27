// priority: 100

//Stop creation of nether portals
onForgeEvent(
  "net.minecraftforge.event.world.BlockEvent$PortalSpawnEvent",
  (event) => {
    event.setCanceled(true);
  }
);

//Starting items
onForgeEvent(
  "dev.ftb.ftbsbc.dimensions.level.DimensionCreatedEvent",
  (event) => {
    const player = event.player.asKJS();
    player.give("ftbquests:book");
  }
);
