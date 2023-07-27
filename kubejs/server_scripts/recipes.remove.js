// priority: 99
onEvent("recipes", (event) => {
  event.remove({
    id: "torchbowmod:torch_bow",
  });
  event.remove({
    id: "engineersdecor:dependent/small_solar_panel_recipe",
  });
});
