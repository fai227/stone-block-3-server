const sbPlayerTickScriptHolder = {
    train: {
        questId: "4BDDC7A2C3DCCDAB",
        requiredBiomes: [
            "minecraft:plains",
            "minecraft:lush_caves",
            "minecraft:nether_wastes",
            "minecraft:the_end",
            "minecraft:forest",
        ],
        defaultData: { "plains": false, "lush_caves": false, "nether_wastes": false, "the_end": false, "forest": false},
    },
    trainTracker(player) {
        let data = player.persistentData;

        if(data.trainQuest === undefined) {
            data.trainQuest = this.train.defaultData;
        }

        if(!Object.values(data.trainQuest).some((e) => e === 0)) {
            player.data.ftbquests.addProgress(this.train.questId, 1);
            return;
        }

        if(!player.alive) return;

        if(player.ridingEntity && player.ridingEntity.type === "create:carriage_contraption") {
            let biomeHolder = player.level.minecraftLevel.getBiome(player.getBlock().getPos());
            let foundBiome = this.train.requiredBiomes.find(e => biomeHolder.is(e));

            if (foundBiome) {
                let key = foundBiome.split(":")[1];
                data.trainQuest[key] = true;
            }
        } else {
            data.trainQuest = this.train.defaultData
        }
    }
}

let playerTimer = 0;
onEvent("player.tick", (e) => {
    playerTimer++;

    if(playerTimer > 4) {
        playerTimer = 0;

        sbPlayerTickScriptHolder.trainTracker(e.player);
    }
});