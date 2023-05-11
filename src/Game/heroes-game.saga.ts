import {Injectable} from "@nestjs/common";
import {ICommand, ofType, Saga} from "@nestjs/cqrs";
import {map, Observable} from "rxjs";
import {HeroKilledDragonEvent} from "../Hero/event/hero-killed-dragon.event";

class DropAncientItemCommand {
    constructor(heroId: number, fakeItemID: any) {}
}

@Injectable()
export class HeroesGameSagas {
    @Saga()
    dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
        return events$.pipe(
            ofType(HeroKilledDragonEvent),
            map((event) =>
                new DropAncientItemCommand(event.heroId, 123)),
        );
    }
}

// Saga returns an Observable which contains a command