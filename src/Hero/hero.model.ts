import {AggregateRoot} from "@nestjs/cqrs";
import {HeroKilledDragonEvent} from "./event/hero-killed-dragon.event";

// Events are asynchronous. They are dispatched either by models or directly using EventBus. //
// In order to dispatch events, models have to extend the AggregateRoot class. //
export class Hero extends AggregateRoot {
    constructor(private id: number) {
        super();
    }

    killEnemy(enemyId: number) {
        // The apply() method dispatches events when there is a //
        // relationship between the model and the EventPublisher class. //
        this.apply(new HeroKilledDragonEvent(this.id, enemyId));
    }
}