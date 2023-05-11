import {EventsHandler, IEventHandler} from "@nestjs/cqrs";
import {HeroRepository} from "../../Hero/hero.repository";
import {HeroKilledDragonEvent} from "../../Hero/event/hero-killed-dragon.event";

@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler implements IEventHandler<HeroKilledDragonEvent> {
    constructor(private repository: HeroRepository) {}

    handle(event: HeroKilledDragonEvent) {

        // when any hero kills the dragon, the ancient item should be dropped //
        // new DropAncientItemCommand(event.heroId, fakeItemID)
    }
}