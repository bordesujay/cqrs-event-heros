import {Hero} from "./hero.model";

export class HeroRepository {
    findOneById(id: number):Hero {
        return new Hero(id);
    }

    async persist(hero: Hero) {}
}
