import {HeroRepository} from "../../Hero/hero.repository";
import {CommandHandler, EventPublisher, ICommandHandler} from "@nestjs/cqrs";
import {KillDragonCommand} from "../command/kill-dragon.command";

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
    constructor(
        private repository: HeroRepository,
        private publisher: EventPublisher,
    ) {
    }

    async execute(command: KillDragonCommand) {
        const {heroId, dragonId} = command;

        // The apply() method does not dispatch events yet because
        // there's no relationship between the model and the EventPublisher class.
        // How do we associate the model and the publisher?
        // By using a publisher mergeObjectContext() method inside our command handler.
        const hero = this.publisher.mergeObjectContext(
            await this.repository.findOneById(+heroId),
        );
        hero.killEnemy(dragonId);
        hero.commit();
    }
}