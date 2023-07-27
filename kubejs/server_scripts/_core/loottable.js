onEvent("block.loot_tables", (event) => {
  event.addSimpleBlock("compactcrafting:field_projector");
  event.addSimpleBlock("compactcrafting:rescan_proxy");
  event.addSimpleBlock("compactcrafting:match_proxy");
});
