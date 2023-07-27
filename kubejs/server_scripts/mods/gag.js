onEvent("recipes", (event) => {
  event.remove({ id: "gag:escape_rope" });
});

onEvent("tags.block_entity_type", (event) => {
  event.add("gag:do_not_accelerate", ["projecte:dm_pedestal"]);
});
