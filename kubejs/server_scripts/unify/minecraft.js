const unifyMinecraft = (obj, event) => {
  if (global.debug) console.log(`Unify: Minecraft - ${JSON.stringify(obj)}`);

  minecraftIngots(obj.name, obj.ingot, obj.nugget, event);
  minecraftNuggets(obj.name, obj.ingot, obj.nugget, event);
  minecraftFurnace(
    obj.name,
    obj.ingot,
    obj.gem,
    obj.dust,
    obj.ore,
    obj.crushed,
    event
  );
  minecraftGear(obj.name, obj.ingot, obj.gem, obj.gear, event);
};

const minecraftIngots = (name, ingot, nugget, event) => {
  if (ingot === "" || nugget === "") return;

  event.remove({
    type: "minecraft:crafting_shapeless",
    input: `#forge:nuggets/${name}`,
    output: `#forge:ingots/${name}`,
  });

  event.remove({
    type: "minecraft:crafting_shaped",
    input: `#forge:nuggets/${name}`,
    output: `#forge:ingots/${name}`,
  });

  event
    .shaped(ingot, ["NNN", "NNN", "NNN"], { N: `#forge:nuggets/${name}` })
    .id(`unify:minecraft/ingots/${name}`);
};

const minecraftNuggets = (name, ingot, nugget, event) => {
  if (ingot === "" || nugget === "") return;

  event.remove({
    type: "minecraft:crafting_shapeless",
    output: `#forge:nuggets/${name}`,
    input: `#forge:ingots/${name}`,
  });

  event.remove({
    type: "minecraft:crafting_shaped",
    output: `#forge:nuggets/${name}`,
    input: `#forge:ingots/${name}`,
  });

  event
    .shapeless(`9x ${nugget}`, `#forge:ingots/${name}`)
    .id(`unify:minecraft/nuggets/${name}`);
};

const minecraftFurnace = (name, ingot, gem, dust, ore, crushed, event) => {
  const { smelting, blasting } = event.recipes.minecraft;

  if (ingot !== "") {
    event.remove({
      output: `#forge:ingots/${name}`,
      type: "minecraft:smelting",
    });
    event.remove({
      output: `#forge:ingots/${name}`,
      type: "minecraft:blasting",
    });
  }

  if (gem !== "") {
    event.remove({
      output: `#forge:gems/${name}`,
      type: "minecraft:smelting",
    });
    event.remove({
      output: `#forge:gems/${name}`,
      type: "minecraft:blasting",
    });
  }

  let smeltInput = [];

  if (ingot !== "") {
    if (dust !== "") {
      smeltInput.push(`#forge:dusts/${name}`);
    }

    if (crushed !== "") {
      smeltInput.push(crushed);
    }
  }

  if (ore !== "") {
    smeltInput.push(`#forge:ores/${name}`);
    smeltInput.push(`#forge:raw_materials/${name}`);
  }

  if (smeltInput.length > 0) {
    smelting(ingot !== "" ? ingot : gem, smeltInput)
      .xp(0.7)
      .id(`unify:minecraft/smelting/${name}`);
    blasting(ingot !== "" ? ingot : gem, smeltInput)
      .xp(0.7)
      .id(`unify:minecraft/blasting/${name}`);
  }
};

const minecraftGear = (name, ingot, gem, gear, event) => {
  if (gear === "") return;

  event.remove({
    type: "minecraft:crafting_shaped",
    output: `#forge:gears/${name}`,
  });

  if (ingot !== "") {
    event
      .shaped(gear, [" N ", "NIN", " N "], {
        N: `#forge:ingots/${name}`,
        I: `#forge:nuggets/iron`,
      })
      .id(`unify:minecraft/gear/${name}`);
  }

  if (gem !== "") {
    event
      .shaped(gear, [" N ", "NIN", " N "], {
        N: `#forge:gems/${name}`,
        I: `#forge:nuggets/iron`,
      })
      .id(`unify:minecraft/gear/${name}`);
  }
};
