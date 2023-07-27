let isThermalLoaded = Platform.mods.thermal;

const unifyThermal = (obj, event) => {
  if (!isThermalLoaded) return console.log("Unify: Thermal isn't loaded");
  if (global.debug) console.log(`Unify: Thermal - ${JSON.stringify(obj)}`);

  thermalRaw(obj.name, obj.rawOre, obj.rawOreBlock, event);
  thermalDust(
    obj.name,
    obj.dust,
    obj.ore,
    obj.ingot,
    obj.gem,
    obj.rawOre,
    event
  );
  thermalsPlate(obj.name, obj.plate, event);
  thermalsGear(obj.name, obj.ingot, obj.gem, obj.gear, event);
  thermalsRod(obj.name, obj.rod, event);
  thermalsChiller(obj.name, obj.fluid, obj.rod, obj.ingot, event);
};

const thermalRaw = (name, rawOre, rawOreBlock, event) => {
  if (rawOre === "" && rawOreBlock === "") return;

  event.remove({
    type: "thermal:press",
    output: `#forge:raw_materials/${name}`,
  });

  event.recipes.thermalPress(`9x ${rawOre}`, [
    `#forge:storage_blocks/raw_${name}`,
    "thermal:press_unpacking_die",
  ]);

  event.remove({
    type: "thermal:press",
    output: `#forge:storage_blocks/raw_${name}`,
  });

  event.recipes.thermalPress(rawOreBlock, [
    `9x #forge:raw_materials/${name}`,
    "thermal:press_packing_3x3_die",
  ]);
};

const thermalDust = (name, dust, ore, ingot, gem, rawOre, event) => {
  if (dust === "") return;

  event.remove({
    type: "thermal:pulverizer",
    output: `#forge:dusts/${name}`,
  });
  event.remove({
    type: "thermal:pulverizer",
    output: `#forge:gems/${name}`,
  });

  if (ore !== "") {
    if (gem !== "") {
      event.recipes.thermal.pulverizer(
        [`2x ${gem}`, Item.of("minecraft:gravel").withChance(0.2)],
        `#forge:ores/${name}`
      );
    }
    if (ingot !== "") {
      event.recipes.thermal.pulverizer(
        [`2x ${dust}`, Item.of("minecraft:gravel").withChance(0.2)],
        `#forge:ores/${name}`
      );
    }
  }

  if (ingot !== "") {
    event.recipes.thermal.pulverizer(`${dust}`, `#forge:ingots/${name}`);
  }

  if (gem !== "") {
    event.recipes.thermal.pulverizer(dust, `#forge:gems/${name}`);
  }

  if (!Ingredient.of(`#forge:storage_blocks/raw_${name}`).isEmpty()) {
    event.recipes.thermal.pulverizer(
      `12x ${dust}`,
      `#forge:storage_blocks/raw_${name}`
    );
  }

  if (rawOre !== "") {
    event.recipes.thermal.pulverizer(
      [`${dust}`, Item.of(dust).withChance(0.3333)],
      `#forge:raw_materials/${name}`
    );
  }
};

const thermalsPlate = (name, plate, event) => {
  if (plate === "") return;

  event.remove({
    type: "thermal:press",
    output: `#forge:plates/${name}`,
  });

  event.recipes.thermalPress(plate, [`#forge:ingots/${name}`]);
};

const thermalsGear = (name, ingot, gem, gear, event) => {
  if (gear === "") return;

  event.remove({
    type: "thermal:press",
    output: `#forge:gears/${name}`,
  });

  if (ingot !== "") {
    event.recipes.thermalPress(gear, [
      `4x #forge:ingots/${name}`,
      "thermal:press_gear_die",
    ]);
  }

  if (gem !== "") {
    event.recipes.thermalPress(gear, [
      `4x #forge:gems/${name}`,
      "thermal:press_gear_die",
    ]);
  }
};

const thermalsRod = (name, rod, event) => {
  if (rod === "") return;

  event.recipes.thermalPress(`2x ${rod}`, [
    `#forge:ingots/${name}`,
    "ftbstoneblock:press_rod_die",
  ]);
};

const thermalsChiller = (name, fluid, rod, ingot, event) => {
  if (fluid === "") return;

  if (ingot) {
    event.remove({
      type: "thermal:chiller",
      output: `#forge:ingots/${name}`,
    });
    event.recipes.thermal.chiller({
      ingredients: [
        {
          fluid: fluid,
          amount: 90,
        },
        {
          item: "thermal:chiller_ingot_cast",
        },
      ],
      result: [
        {
          item: ingot,
          count: 1,
        },
      ],
      energy: 5000,
    });
  }

  if (rod) {
    event.remove({
      type: "thermal:chiller",
      output: `#forge:rods/${name}`,
    });
    event.recipes.thermal.chiller({
      ingredients: [
        {
          fluid: fluid,
          amount: 45,
        },
        {
          item: "thermal:chiller_rod_cast",
        },
      ],
      result: [
        {
          item: rod,
          count: 1,
        },
      ],
      energy: 2400,
    });
  }
};
