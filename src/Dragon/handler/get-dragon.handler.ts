import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {DragonRepository} from "../dragon.repository";
import {GetDragonDto} from "../dto/get-dragon.dto";
import {GetDragonQuery} from "../query/get-dragon.query";

@QueryHandler(GetDragonQuery)
export class GetDragonHandler implements IQueryHandler<GetDragonQuery> {
    constructor(private readonly dragonRepository: DragonRepository) {}

    async execute(query: GetDragonDto) {
        return this.dragonRepository.findOneById(query.id);
    }
}