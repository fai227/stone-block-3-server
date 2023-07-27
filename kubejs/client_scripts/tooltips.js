// onEvent('item.tooltip', (tooltip) => {
// 	tooltip.add('ftbstoneblock:machines', [
// 		'lmao yeah right',
// 		"there's like a million machines",
// 		"ain't no way we're tagging them all",
// 	])
// })

onEvent("item.tooltip", (tooltip) => {
  tooltip.add(
    ["ae2:inscriber", "ae2things:advanced_inscriber"],
    [
      Text.red(
        "Inscribers have been disabled and replaced with Create Sequenced Crafting."
      ),
      Text.red(
        "If you already have one, it will still work, but you can't craft any more."
      ),
    ]
  );
});
