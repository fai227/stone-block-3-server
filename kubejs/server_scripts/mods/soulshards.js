onEvent("recipes", (event) => {
  event.remove({ id: "soulshards:vile_dust_alt" });
  event.remove({ id: "soulshards:vile_dust" });

  event.recipes.minecraft
    .blasting("soulshards:vile_dust", "minecraft:soul_sand")
    .xp(0.7)
    .id(`ftbstoneblock:blasting/vile_dust`);
  event.recipes.minecraft
    .blasting("soulshards:vile_dust", "minecraft:soul_soil")
    .xp(0.7)
    .id(`ftbstoneblock:blasting/vile_dust_alt`);
});
