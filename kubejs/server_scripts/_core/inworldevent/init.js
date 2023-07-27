// priority: 100
let timer = 0;
let events = [lootbeeEvent, wanderingtraderEvent, stickEvent, teaEvent];

onEvent("server.tick", (event) => {
  timer++;
  if (timer > 1000) {
    var ran = Math.random();
    timer = 0;

    //Get all player
    var players = event.server.players;

    //If no players return
    if (players.length === 0) return;

    //Choose a player to do the event for
    var chosenPlayer = players[Math.floor(Math.random() * players.length)];

    //Check players gamemode, so we only do this on players in survival.
    let denyModes = ["SPECTATOR", "CREATIVE", "ADVENTURE"];
    if (
      denyModes.includes(
        chosenPlayer.minecraftPlayer.gameMode.gameModeForPlayer.name()
      )
    )
      return;

    //Check if player is alive.
    if (!chosenPlayer.alive) return;

    //Check persistent data is available
    if (!chosenPlayer.persistentData) return;

    //If no timer exist on player make it and return
    if (!chosenPlayer.persistentData.timer) {
      chosenPlayer.persistentData.timer = 0;
      return;
    }

    //If player had an event happen within the last 15min do nothing
    if (chosenPlayer.persistentData.timer < 18000) return;

    //Creates a list of events the user player has disabled.
    var disabledEvents = [];
    if (chosenPlayer.persistentData.disabledEvents) {
      for (
        let i = 0;
        i < chosenPlayer.persistentData.disabledEvents.length;
        i++
      ) {
        disabledEvents.push(chosenPlayer.persistentData.disabledEvents[i]);
      }
    }

    //Filter event based on their chance, disabled events
    var filteredEvents = events.filter(
      (e) => ran <= e.chance && !disabledEvents.includes(e.name)
    );

    // chosenPlayer.tell(disabledEvents);
    // chosenPlayer.tell(filteredEvents);

    //Choose an event from the filtered list
    var chosenEvent =
      filteredEvents[Math.floor(Math.random() * filteredEvents.length)];

    // If no event return
    if (!chosenEvent) return;

    //Check for required biomes
    if (chosenEvent.requiredBiomes && chosenEvent.requiredBiomes.length > 0) {
      let biomeHolder = chosenPlayer.level.minecraftLevel.getBiome(
        chosenPlayer.getBlock().getPos()
      );
      let foundBiome = chosenEvent.requiredBiomes.find((e) =>
        biomeHolder.is(e)
      );

      if (!foundBiome) return;
    }

    //40% chance of no event for the player this time.
    if (ran > 0.4) {
      //   // chosenPlayer.tell("no event");
      chosenPlayer.persistentData.timer = 0;
      return;
    }

    if (
      chosenEvent.size >= 0 &&
      chosenEvent.minDistance &&
      chosenEvent.maxDistance
    ) {
      //10 Tries to find random location for the event to happen.
      let tries = 0;
      let spawnFound;
      let playerPos = new BlockPos(
        chosenPlayer.x,
        chosenPlayer.y,
        chosenPlayer.z
      );

      while (tries < 10 && !spawnFound) {
        let randomLoc = new Ku.Level(chosenPlayer.getLevel()).getRandomLocation(
          playerPos,
          chosenEvent.minDistance,
          chosenEvent.maxDistance
        );

        let spawnCheck = checkSpawnLocation(
          chosenPlayer.getLevel(),
          randomLoc,
          chosenEvent.size,
          chosenEvent.checkBlocks,
          chosenEvent.requireBlockBelow
        );
        if (spawnCheck.okay) {
          spawnFound = { pos: randomLoc, locationInfo: spawnCheck };
        } else {
          tries++;
        }
      }

      //If event and player has been chosen, start the event and restart players timer
      if (chosenEvent && chosenPlayer && spawnFound) {
        chosenEvent.execute(event, chosenPlayer, spawnFound);
        chosenPlayer.persistentData.timer = 0;
      }
    } else {
      //If event and player has been chosen, start the event and restart players timer
      if (chosenEvent && chosenPlayer) {
        chosenEvent.execute(event, chosenPlayer, null);
        chosenPlayer.persistentData.timer = 0;
      }
    }
  }
});

onEvent("player.tick", (event) => {
  //Ticking players timer.
  event.player.persistentData.timer >= 0
    ? event.player.persistentData.timer++
    : (event.player.persistentData.timer = 0);
});
