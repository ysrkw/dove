import { ExpiredAt, Identify, ISessionRepository, Session } from "~/domain";
import { ICommandModel } from "../core/mod.ts";

export interface CreateSessionCommand {
  user_id: string;
}

export class CreateSession implements ICommandModel<CreateSessionCommand> {
  constructor(private sessionRepository: ISessionRepository) {}

  async execution(command: CreateSessionCommand) {
    const userId = Identify.of(command.user_id);
    const expiredAt = ExpiredAt.of();

    const session = Session.create({
      userId,
      expiredAt,
    });

    await this.sessionRepository.save(session);
  }
}
