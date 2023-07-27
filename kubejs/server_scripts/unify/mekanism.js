let isMekanismLoaded = Platform.mods.mekanism;

const unifyMekanism = (obj, event) => {
  if (!isMekanismLoaded) return console.log("Unify: Mekanism isn't loaded");
  if (global.debug) console.log(`Unify: Mekanism - ${JSON.stringify(obj)}`);

  mekanismDust(
    obj.name,
    obj.dust,
    obj.ore,
    obj.ingot,
    obj.gem,
    obj.rawOre,
    obj.rawOreBlock,
    obj.dirtyDust,
    event
  );
};

const mekanismDust = (
  name,
  dust,
  ore,
  ingot,
  gem,
  rawOre,
  rawBlock,
  dirtyDust,
  event
) => {
  if (dust === "") return;
  if (ingot !== "") {
    event.remove({
      type: "mekanism:crushing",
      input: `#forge:ingots/${name}`,
      output: `#forge:dusts/${name}`,
    });

    event.recipes.mekanismCrushing(`${dust}`, `#forge:ingots/${name}`);
  }

  if (ore !== "") {
    if (gem !== "") {
      event.remove({
        type: "mekanism:enriching",
        input: `#forge:ores/${name}`,
        output: `#forge:gems/${name}`,
      });
      event.recipes.mekanismEnriching(`2x ${gem}`, `#forge:ores/${name}`);
    }

    if (ingot !== "") {
      event.remove({
        type: "mekanism:enriching",
        input: `#forge:ores/${name}`,
        output: `#forge:dusts/${name}`,
      });
      event.recipes.mekanismEnriching(`2x ${dust}`, `#forge:ores/${name}`);
    }
  }

  if (rawBlock !== "") {
    event.remove({
      type: "mekanism:enriching",
      input: `#forge:storage_blocks/raw_${name}`,
      output: `#forge:dusts/${name}`,
    });
    event.recipes.mekanismEnriching(
      `12x ${dust}`,
      `#forge:storage_blocks/raw_${name}`
    );
  }

  if (gem !== "") {
    event.remove({
      type: "mekanism:enriching",
      input: `#forge:dusts/${name}`,
      output: `#forge:gems/${name}`,
    });
    event.recipes.mekanismEnriching(gem, dust);
  }

  if (dirtyDust !== "") {
    event.remove({
      type: "mekanism:enriching",
      input: `#mekanism:dirty_dusts/${name}`,
      output: `#forge:dusts/${name}`,
    });
    event.recipes.mekanismEnriching(`${dust}`, `#mekanism:dirty_dusts/${name}`);
  }

  if (rawOre !== "") {
    event.remove({
      type: "mekanism:enriching",
      input: `#forge:raw_materials/${name}`,
      output: `#forge:dusts/${name}`,
    });
    event.recipes.mekanismEnriching(
      `4x ${dust}`,
      `3x #forge:raw_materials/${name}`
    );
  }
};

//TODO mekanism:processing/copper/ore/from_raw
//TODO mekanism:processing/copper/ore/deepslate_from_raw
//TODO mekanism 5x ore processing
