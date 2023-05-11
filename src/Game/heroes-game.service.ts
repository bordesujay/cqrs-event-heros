import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {Injectable} from "@nestjs/common";
import {KillDragonDto} from "../Dragon/dto/kill-dragon.dto";
import {KillDragonCommand} from "../Dragon/command/kill-dragon.command";
import {GetDragonDto} from "../Dragon/dto/get-dragon.dto";
import {Dragon} from "../Dragon/dragon.entity";
import {GetDragonQuery} from "../Dragon/query/get-dragon.query";

@Injectable()
export class HeroesGameService {
    constructor(private commandBus: CommandBus,
                private queryBus: QueryBus) {}

    async killDragon(heroId: number, killDragonDto: KillDragonDto) {
        return this.commandBus.execute(new KillDragonCommand(heroId, killDragonDto.dragonId));
    }

    async getDragon(getDragonDto: GetDragonDto):Promise<Dragon> {
        return this.queryBus.execute(new GetDragonQuery(getDragonDto));
    }
}