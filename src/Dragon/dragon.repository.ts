import {Dragon} from "./dragon.entity";

export class DragonRepository {
    findOneById(id: number):Dragon {
        return new Dragon(id);
    }
}
