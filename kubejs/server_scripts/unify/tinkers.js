let isTinkersLoaded = Platform.mods.tconstruct;

const unifyTinkers = (obj, event) => {
  if (!isTinkersLoaded) return console.log("Unify: Tinkers isn't loaded");
  if (global.debug) console.log(`Unify: Tinkers - ${JSON.stringify(obj)}`);

  tinkersPlate(obj.name, obj.plate, obj.fluid, obj.gem, event);
  tinkersGear(obj.name, obj.gear, obj.fluid, obj.gem, event);
  tinkersWire(obj.name, obj.wire, obj.fluid, obj.gem, event);
};

const tinkersPlate = (name, item, fluid, gem, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:plates/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, gem ? 100 : 90)
    .singleUseCast("plate")
    .coolingTime(60)
    .id(`unify:tconstruct/plate/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, gem ? 100 : 90)
    .multiUseCast("plate")
    .coolingTime(60)
    .id(`unify:tconstruct/plate/multi_${name}`);
};

const tinkersGear = (name, item, fluid, gem, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:gears/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, gem ? 400 : 360)
    .singleUseCast("gear")
    .coolingTime(60)
    .id(`unify:tconstruct/gear/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, gem ? 400 : 360)
    .multiUseCast("gear")
    .coolingTime(60)
    .id(`unify:tconstruct/gear/multi_${name}`);
};

const tinkersWire = (name, item, fluid, gem, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:wires/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, 45)
    .singleUseCast("wire")
    .coolingTime(60)
    .id(`unify:tconstruct/wire/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, 45)
    .multiUseCast("wire")
    .coolingTime(60)
    .id(`unify:tconstruct/wire/multi_${name}`);
};
