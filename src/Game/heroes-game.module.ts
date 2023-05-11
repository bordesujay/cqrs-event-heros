import {HeroRepository} from "../Hero/hero.repository";
import {HeroesGameSagas} from "./heroes-game.saga";
import {HeroesGameService} from "./heroes-game.service";
import {CqrsModule} from "@nestjs/cqrs";
import {HeroKilledDragonHandler} from "../Dragon/handler/hero-killed-dragon.handler";
import {KillDragonHandler} from "../Dragon/handler/kill-dragon.handler";
import { Module } from '@nestjs/common';
import {GetDragonHandler} from "../Dragon/handler/get-dragon.handler";

let DropAncientItemHandler;

export const CommandHandlers = [KillDragonHandler, DropAncientItemHandler];
export const QueryHandlers = [GetDragonHandler];
let HeroFoundItemHandler;
export const EventHandlers =  [HeroKilledDragonHandler, HeroFoundItemHandler];

let HeroesGameController;

@Module({
    imports: [CqrsModule],
    controllers: [HeroesGameController],
    providers: [
        HeroesGameService,
        HeroesGameSagas,
        ...CommandHandlers,
        ...EventHandlers,
        ...QueryHandlers,
        HeroRepository,
    ]
})
export class HeroesGameModule {}
