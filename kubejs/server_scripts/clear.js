// priority: 99
onEvent("recipes", (event) => {
  const { shaped, shapeless } = event;
  const list = [
    "create:filter",
    "create:attribute_filter",
    "rftoolsutility:redstone_receiver",
    "rftoolsutility:redstone_transmitter",
  ];

  list.forEach((e) => {
    shapeless(e, [e]).id(`ftb:clear_recipes/${e.substring(e.indexOf(":") + 1)}`);
  });
});
