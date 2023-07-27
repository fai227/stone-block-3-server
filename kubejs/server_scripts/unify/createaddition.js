let isCALoaded = Platform.mods.createaddition;

const unifyCA = (obj, event) => {
  if (!isCALoaded) return console.log("Unify: Create Addition isn't loaded");
  if (global.debug) console.log(`Unify: CA - ${JSON.stringify(obj)}`);

  CARod(obj.name, obj.rod, obj.ingot, event);
  CAWire(obj.name, obj.wire, obj.plate, event);
};

const CARod = (name, rod, ingot, event) => {
  if (rod === "") return;

  if (ingot) {
    event.remove({
      type: "createaddition:rolling",
      output: `#forge:rods/${name}`,
    });

    event.recipes.createaddition.rolling({
      input: Ingredient.of(`#forge:ingots/${name}`).toJson(),
      result: Item.of(`2x ${rod}`).toResultJson(),
    });
  }
};

const CAWire = (name, wire, plate, event) => {
  if (wire === "") return;

  if (plate) {
    event.remove({
      type: "createaddition:rolling",
      output: `#forge:wires/${name}`,
    });

    event.recipes.createaddition.rolling({
      input: Ingredient.of(`#forge:plates/${name}`).toJson(),
      result: Item.of(`2x ${wire}`).toResultJson(),
    });
  }
};
