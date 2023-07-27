let isIELoaded = Platform.mods.immersiveengineering;

const unifyIE = (obj, event) => {
  if (!isIELoaded) return console.log("Unify: IE isn't loaded");
  if (global.debug) console.log(`Unify: IE - ${JSON.stringify(obj)}`);

  IEDust(
    obj.name,
    obj.dust,
    obj.ore,
    obj.ingot,
    obj.gem,
    obj.rawOre,
    obj.rawOreBlock,
    event
  );
  IEPlate(obj.name, obj.plate, obj.ingot, obj.gem, event);
  IERod(obj.name, obj.rod, obj.ingot, obj.gem, event);
  IEGear(obj.name, obj.gear, obj.ingot, obj.gem, event);
  IEWire(obj.name, obj.wire, obj.plate, obj.ingot, event);
};

const IEDust = (name, dust, ore, ingot, gem, rawOre, rawOreBlock, event) => {
  if (dust === "") return;

  if (ore !== "") {
    event.remove({
      id: `immersiveengineering:crafting/hammercrushing_${name}`,
    });

    if (gem !== "") {
      event.remove({
        type: "immersiveengineering:crusher",
        input: `#forge:ores/${name}`,
        output: `#forge:gems/${name}`,
      });

      event.recipes.immersiveengineeringCrusher(
        `2x ${gem}`,
        `#forge:ores/${name}`
      );
    }

    if (ingot !== "") {
      event.remove({
        type: "immersiveengineering:crusher",
        input: `#forge:ores/${name}`,
      });

      event.shapeless(dust, [
        [`#forge:ores/${name}`],
        Item.of("immersiveengineering:hammer").ignoreNBT(),
      ]);

      event.recipes.immersiveengineeringCrusher(
        `2x ${dust}`,
        `#forge:ores/${name}`
      );
    }
  }

  if (ingot !== "") {
    event.remove({
      type: "immersiveengineering:crusher",
      input: `#forge:ingots/${name}`,
      output: `#forge:dusts/${name}`,
    });
    event.recipes.immersiveengineeringCrusher(
      `${dust}`,
      `#forge:ingots/${name}`
    );
  }

  if (gem !== "") {
    event.remove({
      type: "immersiveengineering:crusher",
      input: `#forge:gems/${name}`,
      output: `#forge:dusts/${name}`,
    });
    event.recipes.immersiveengineeringCrusher(`${dust}`, `#forge:gems/${name}`);
  }

  if (rawOreBlock !== "") {
    event.remove({
      type: "immersiveengineering:crusher",
      input: `#forge:storage_blocks/raw_${name}`,
      output: `#forge:dusts/${name}`,
    });
    event.recipes.immersiveengineeringCrusher(
      `12x ${dust}`,
      `#forge:storage_blocks/raw_${name}`
    );
  }

  if (rawOre !== "") {
    event.remove({
      type: "immersiveengineering:crusher",
      input: `#forge:raw_materials/${name}`,
      output: `#forge:dusts/${name}`,
    });
    event.remove({
      id: `immersiveengineering:crafting/raw_hammercrushing_${name}`,
    });

    event.shapeless(dust, [
      [`#forge:raw_materials/${name}`],
      Item.of("immersiveengineering:hammer").ignoreNBT(),
    ]);

    event.recipes.immersiveengineeringCrusher(
      `${dust}`,
      `#forge:raw_materials/${name}`,
      [Item.of(dust).withChance(0.3333)]
    );
  }
};

const IEPlate = (name, plate, ingot, gem, event) => {
  if (plate === "") return;

  event.remove({
    id: `immersiveengineering:crafting/plate_${name}_hammering`,
  });

  event.remove({
    id: `immersiveengineering:metalpress/plate_${name}`,
  });

  if (ingot !== "") {
    event.shapeless(plate, [
      `#forge:ingots/${name}`,
      Item.of("immersiveengineering:hammer").ignoreNBT(),
    ]);

    event.recipes.immersiveengineeringMetalPress(
      plate,
      `#forge:ingots/${name}`,
      "immersiveengineering:mold_plate"
    );
  }

  if (gem !== "") {
    event.shapeless(plate, [
      `#forge:gems/${name}`,
      Item.of("immersiveengineering:hammer").ignoreNBT(),
    ]);

    event.recipes.immersiveengineeringMetalPress(
      plate,
      `#forge:gems/${name}`,
      "immersiveengineering:mold_plate"
    );
  }
};

const IERod = (name, rod, ingot, gem, event) => {
  if (rod === "") return;

  event.remove({
    id: `immersiveengineering:metalpress/rod_${name}`,
  });

  if (ingot !== "") {
    event.recipes.immersiveengineeringMetalPress(
      Item.of(rod, 2),
      `#forge:ingots/${name}`,
      "immersiveengineering:mold_rod"
    );
  }

  if (gem !== "") {
    event.recipes.immersiveengineeringMetalPress(
      Item.of(rod, 2),
      `#forge:gems/${name}`,
      "immersiveengineering:mold_rod"
    );
  }
};

const IEGear = (name, gear, ingot, gem, event) => {
  if (gear === "") return;

  if (ingot !== "") {
    event.remove({
      id: `immersiveengineering:metalpress/gear_${name}`,
    });

    event.recipes.immersiveengineeringMetalPress(
      gear,
      `4x #forge:ingots/${name}`,
      "immersiveengineering:mold_gear"
    );
  }

  if (gem !== "") {
    event.remove({
      id: `immersiveengineering:metalpress/gear_${name}`,
    });

    event.recipes.immersiveengineeringMetalPress(
      gear,
      `4x #forge:gems/${name}`,
      "immersiveengineering:mold_gear"
    );
  }
};

const IEWire = (name, wire, plate, ingot, event) => {
  if (wire === "") return;

  if (plate !== "") {
    event.remove({
      id: `immersiveengineering:crafting/wire_${name}`,
    });

    event.shapeless(wire, [
      [`#forge:plates/${name}`],
      Item.of("immersiveengineering:wirecutter").ignoreNBT(),
    ]);
  }

  if (ingot !== "") {
    event.remove({
      id: `immersiveengineering:metalpress/wire_${name}`,
    });

    event.recipes.immersiveengineeringMetalPress(
      Item.of(wire, 2),
      `#forge:ingots/${name}`,
      "immersiveengineering:mold_wire"
    );
  }
};
