let isCreateLoaded = Platform.mods.create;

const unifyCreate = (obj, event) => {
  if (!isCreateLoaded) return console.log("Unify: Create isn't loaded");
  if (global.debug) console.log(`Unify: Create - ${JSON.stringify(obj)}`);

  CreatePlate(obj.name, obj.plate, obj.ingot, event);
  CreateDust(obj.name, obj.ingot, obj.gem, obj.dust, event);
  CreateCrushed(
    obj.name,
    obj.crushed,
    obj.gem,
    obj.ore,
    obj.deepslateOre,
    obj.rawOre,
    obj.rawOreBlock,
    event
  );
};

const CreatePlate = (name, plate, ingot, event) => {
  if (plate === "") return;

  if (ingot) {
    event.remove({
      type: "create:pressing",
      output: `#forge:plates/${name}`,
    });

    event.recipes.createPressing(plate, [`#forge:ingots/${name}`]);
  }
};

const CreateDust = (name, ingot, gem, dust, event) => {
  if (dust === "") return;

  event.remove({
    type: "create:crushing",
    output: `#forge:dusts/${name}`,
  });

  if (ingot !== "") {
    event.recipes.createCrushing([dust], ingot);
  }

  if (gem !== "") {
    event.recipes.createCrushing([dust], gem);
  }
};

const CreateCrushed = (
  name,
  crushed,
  gem,
  ore,
  deepslateOre,
  rawOre,
  rawOreBlock,
  event
) => {
  if (crushed === "") return;

  if (ore) {
    event.remove({ id: `create:crushing/${name}_ore` });

    if (crushed !== "") {
      event.recipes.createCrushing(
        [
          `5x ${crushed}`,
          Item.of(crushed).withChance(0.75),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:cobblestone`).withChance(0.125),
        ],
        ore
      );
    }

    if (gem !== "") {
      event.recipes.createCrushing(
        [
          `1x ${gem}`,
          Item.of(gem).withChance(0.75),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:cobblestone`).withChance(0.125),
        ],
        ore
      );
    }
  }

  if (deepslateOre) {
    event.remove({ id: `create:crushing/deepslate_${name}_ore` });

    if (crushed !== "") {
      event.recipes.createCrushing(
        [
          `7x ${crushed}`,
          Item.of(crushed).withChance(0.25),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:cobbled_deepslate`).withChance(0.125),
        ],
        deepslateOre
      );
    }

    if (gem !== "") {
      event.recipes.createCrushing(
        [
          `2x ${gem}`,
          Item.of(gem).withChance(0.25),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:cobbled_deepslate`).withChance(0.125),
        ],
        deepslateOre
      );
    }
  }

  if (rawOre) {
    event.remove({ id: `create:crushing/raw_${name}` });
    event.remove({ id: `create:crushing/raw_${name}_ore` });

    event.recipes.createCrushing(
      [crushed, Item.of(`create:experience_nugget`).withChance(0.75)],
      `#forge:raw_materials/${name}`
    );
  }

  if (rawOreBlock) {
    event.remove({ id: `create:crushing/raw_${name}_block` });

    event.recipes.createCrushing(
      [
        `9x ${crushed}`,
        Item.of(`create:experience_nugget`, 9).withChance(0.75),
      ],
      `#forge:storage_blocks/raw_${name}`
    );
  }
};
