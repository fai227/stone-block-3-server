onEvent("tags.items", (event) => {
  //Required tool for cobble to drop when mining Stone.
  event.add("ftbstoneblock:pickaxe", [
    "minecraft:wooden_pickaxe",
    "minecraft:stone_pickaxe",
    "minecraft:golden_pickaxe",
    "minecraft:iron_pickaxe",
    "minecraft:diamond_pickaxe",
    "minecraft:netherite_pickaxe",
    "tconstruct:pickaxe",
    "tconstruct:sledge_hammer",
    "tconstruct:pickadze",
    "projecte:dm_pick",
    "projecte:rm_pick",
    "botania:manasteel_pick",
    "botania:elementium_pickaxe",
    "botania:glass_pickaxe",
    "mekanismtools:bronze_pickaxe",
    "mekanismtools:lapis_lazuli_pickaxe",
    "mekanismtools:osmium_pickaxe",
    "mekanismtools:refined_glowstone_pickaxe",
    "mekanismtools:refined_obsidian_pickaxe",
    "mekanismtools:steel_pickaxe",
    "bloodmagic:soulpickaxe",
    "avaritia:infinity_pickaxe",
    "immersiveengineering:pickaxe_steel",
    "ae2:certus_quartz_pickaxe",
    "ae2:nether_quartz_pickaxe",
    "ae2:fluix_pickaxe",
    "mekanismtools:wood_paxel",
    "mekanismtools:stone_paxel",
    "mekanismtools:iron_paxel",
    "mekanismtools:diamond_paxel",
    "mekanismtools:gold_paxel",
    "mekanismtools:netherite_paxel",
    "mekanismtools:bronze_paxel",
    "mekanismtools:lapis_lazuli_paxel",
    "mekanismtools:osmium_paxel",
    "mekanismtools:refined_glowstone_paxel",
    "mekanismtools:refined_obsidian_paxel",
    "mekanismtools:steel_paxel",
    "mekanism:atomic_disassembler",
    "buildinggadgets:gadget_building",
    "mininggadgets:mininggadget_simple",
    "mininggadgets:mininggadget_fancy",
    "mininggadgets:mininggadget",
    "buildinggadgets:gadget_exchanging",
    "buildinggadgets:gadget_copy_paste",
    "buildinggadgets:gadget_destruction",
    "justhammers:diamond_destructor_hammer",
    "justhammers:diamond_hammer",
    "justhammers:diamond_impact_hammer",
    "justhammers:diamond_reinforced_hammer",
    "justhammers:diamond_reinforced_impact_hammer",
    "justhammers:gold_destructor_hammer",
    "justhammers:gold_hammer",
    "justhammers:gold_impact_hammer",
    "justhammers:gold_reinforced_hammer",
    "justhammers:gold_reinforced_impact_hammer",
    "justhammers:iron_destructor_hammer",
    "justhammers:iron_hammer",
    "justhammers:iron_impact_hammer",
    "justhammers:iron_reinforced_hammer",
    "justhammers:iron_reinforced_impact_hammer",
    "justhammers:netherite_destructor_hammer",
    "justhammers:netherite_hammer",
    "justhammers:netherite_impact_hammer",
    "justhammers:netherite_reinforced_hammer",
    "justhammers:netherite_reinforced_impact_hammer",
    "justhammers:stone_destructor_hammer",
    "justhammers:stone_hammer",
    "justhammers:stone_impact_hammer",
    "justhammers:stone_reinforced_hammer",
    "justhammers:stone_reinforced_impact_hammer",
    "ftbsbc:stone_hammer",
    "ftbsbc:iron_hammer",
    "ftbsbc:gold_hammer",
    "ftbsbc:diamond_hammer",
    "ftbsbc:netherite_hammer",
    "industrialforegoing:infinity_hammer",
    "projecte:dm_hammer",
    "projecte:rm_hammer",
    "ae2:entropy_manipulator",
    "botania:terra_pick",
    "projecte:rm_morning_star",
    "mekanism:meka_tool",
  ]);

  event.add("minecraft:chests", [
    "stonechest:chest_andesite",
    "stonechest:chest_calcite",
    "stonechest:chest_cobbled_deepslate",
    "stonechest:chest_cobblestone",
    "stonechest:chest_deepslate",
    "stonechest:chest_diorite",
    "stonechest:chest_granite",
    "stonechest:chest_prismarine",
    "stonechest:chest_stone",
    "stonechest:chest_tuff",
  ]);

  //Adding tags to Stone Chests
  event.add("minecraft:chests/stone", [
    "stonechest:chest_andesite",
    "stonechest:chest_calcite",
    "stonechest:chest_cobbled_deepslate",
    "stonechest:chest_cobblestone",
    "stonechest:chest_deepslate",
    "stonechest:chest_diorite",
    "stonechest:chest_granite",
    "stonechest:chest_prismarine",
    "stonechest:chest_stone",
    "stonechest:chest_tuff",
  ]);

  event.add("itemfilters:check_nbt", ["chickens:chicken_item", "patchouli:guide_book"]);

  event.add("forge:rods", ["ftbsbc:stone_rod"]);

  event.add("forge:raw_materials", ["powah:uraninite_raw"]);
  event.add("forge:raw_materials/uraninite", ["powah:uraninite_raw"]);

  event.add("ftbultimine:included_tools", ["mekanism:atomic_disassembler"]);

  event.add("thermal:crafting/dies", ["ftbstoneblock:press_rod_die"]);

  event.remove("forge:storage_blocks/copper", ["minecraft:cut_copper"]);

  event.add("balm:yellow_dyes", ["bloodmagic:sulfur"]);
});

onEvent("tags.blocks", (event) => {
  //Change the required tool level from Iron to Diamond
  event.remove("minecraft:needs_iron_tool", [
    "minecraft:deepslate",
    "minecraft:cobbled_deepslate",
    "minecraft:polished_deepslate",
  ]);

  event.add("minecraft:needs_diamond_tool", [
    "minecraft:deepslate",
    "minecraft:cobbled_deepslate",
    "minecraft:polished_deepslate",
  ]);

  //Ultiminer blacklist
  event.add("ftbultimine:excluded_blocks", [
    "minecraft:stone",
    "chancecubes:chance_cube",
    "chancecubes:giant_chance_cube",
  ]);

  //Crafting table is made of stone :)
  event.remove("minecraft:mineable/axe", ["minecraft:crafting_table"]);
  event.add("minecraft:mineable/pickaxe", ["minecraft:crafting_table"]);

  //Add mineable tag to cobble for days
  event.add("minecraft:mineable/pickaxe", [
    "cobblefordays:tier_1",
    "cobblefordays:tier_2",
    "cobblefordays:tier_3",
    "cobblefordays:tier_4",
    "cobblefordays:tier_5",
  ]);

  event.add("minecraft:mineable/pickaxe", [
    "compactcrafting:field_projector",
    "compactcrafting:rescan_proxy",
    "compactcrafting:match_proxy",
    "@ironchest",
  ]);

  event.add("minecraft:wither_immune", ["summoningrituals:indestructible_altar"]);

  event.add("minecraft:dragon_immune", ["summoningrituals:indestructible_altar"]);

  event.add("ftbstoneblock:squatgrow_blacklist", [/botania:.*_buried_petals/]);

  event.add("mekanism:cardboard_blacklist", [
    "ftbsbc:bits_spawner",
    "bloodmagic:teleposer",
    "@compactmachines",
    "@avaritia",
    /mcwfurnitures:.*_counter/
  ]);

  event.add("create:wrench_pickup", [
    "ftbsbc:iron_auto_hammer",
    "ftbsbc:gold_auto_hammer",
    "ftbsbc:diamond_auto_hammer",
    "ftbsbc:netherite_auto_hammer",
  ]);

  //Help mitigate crashes related to copy pasting tile entities
  //https://github.com/FTBTeam/FTB-Modpack-Issues/issues/2460
  //Also see https://github.com/Direwolf20-MC/BuildingGadgets/issues/724
  event.add("buildinggagdets:blacklist/generic", [
    "ae2:cable_bus",
    "laserio:laser_connector",
    "laserio:laser_node",
    "refinedstorage:cable",
    "refinedstorage:constructor",
    "refinedstorage:destructor",
    "refinedstorage:external_storage",
    "refinedstorage:importer",
    "refinedstorage:exporter",
  ]);
});

onEvent("tags.entity_types", (event) => {
  event.add("industrialforegoing:mob_crusher_blacklist", [
    "mother_silverfish:mother_silverfish",
    "mother_silverfish:leech_silverfish",
    "mother_silverfish:poison_silverfish",
    "mother_silverfish:special_falling_block",
    "mother_silverfish:thief_silverfish",
  ]);
  event.add("industrialforegoing:mob_imprisonment_tool_blacklist", [
    "luggage:luggage"
  ])
});

onEvent("tags.fluids", (event) => {
  event.add("forge:experience", ["experienceobelisk:raw_experience"]);
});

onEvent("tags.block_entity_type", (event) => {
  event.add("projecte:blacklist/time_watch", [
    "@create",
    "@createaddition",
    "@pipez",
    "rftoolsutility:timer",
    "mekanism:basic_universal_cable",
    "mekanism:advanced_universal_cable",
    "mekanism:elite_universal_cable",
    "mekanism:ultimate_universal_cable",
    "mekanism:basic_mechanical_pipe",
    "mekanism:advanced_mechanical_pipe",
    "mekanism:elite_mechanical_pipe",
    "mekanism:ultimate_mechanical_pipe",
    "mekanism:basic_pressurized_tube",
    "mekanism:advanced_pressurized_tube",
    "mekanism:elite_pressurized_tube",
    "mekanism:ultimate_pressurized_tube",
    "mekanism:basic_logistical_transporter",
    "mekanism:advanced_logistical_transporter",
    "mekanism:elite_logistical_transporter",
    "mekanism:ultimate_logistical_transporter",
    "mekanism:restrictive_transporter",
    "mekanism:diversion_transporter",
    "mekanism:basic_thermodynamic_conductor",
    "mekanism:advanced_thermodynamic_conductor",
    "mekanism:elite_thermodynamic_conductor",
    "mekanism:ultimate_thermodynamic_conductor",
    "mininggadgets:renderblock",
  ]);
});
