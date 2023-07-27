// priority: 1000
onEvent("recipes", (event) => {
  const crushing = event.recipes.createCrushing;
  event.remove({ id: "create:crushing/gravel" });

  crushing(
    [
      Item.of("minecraft:coal").withChance(0.4),
      Item.of("minecraft:raw_iron").withChance(0.25),
      Item.of("create:raw_zinc").withChance(0.3),
      Item.of("mekanism:raw_osmium").withChance(0.13),
      Item.of("thermal:raw_lead").withChance(0.13),
      Item.of("immersiveengineering:raw_aluminum").withChance(0.3),
      Item.of("thermal:raw_tin").withChance(0.13),
    ],
    "#forge:gravel"
  ).processingTime(600);

  crushing(
    [
      Item.of("tconstruct:raw_cobalt").withChance(0.08),
      Item.of("tconstruct:debris_nugget").withChance(0.03),
      Item.of("tconstruct:ichor_slime_crystal").withChance(0.03),
    ],
    "ftbstoneblock:crushed_netherrack"
  ).processingTime(600);

  crushing(
    [
      Item.of("powah:uraninite_raw").withChance(0.08),
      Item.of("mekanism:raw_uranium").withChance(0.08),
    ],
    "ftbstoneblock:crushed_deepslate"
  ).processingTime(600);
});
