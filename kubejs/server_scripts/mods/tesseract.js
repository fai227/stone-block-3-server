onEvent("recipes", (event) => {
  event.remove({ id: "tesseract:tesseract" });
  event.shaped("tesseract:tesseract", ["XXX", "XZX", "XXX"], {
    X: "thermal:enderium_ingot",
    Z: "literalskyblock:void_block",
  });
});
