import { world } from "@minecraft/server";

world.afterEvents.itemCompleteUse.subscribe(use => {
    try {
        let p = use.source;
        let item = use.itemStack;

        if (item.typeId == "thecoberto:haste_potion") {
            p.runCommandAsync("effect @s haste 1800 1 false")
        }

    } catch (e) {

    }
})