import { Identify, ISessionRepository } from "~/domain";

export interface ValidateSessionCommand {
  session_id: string;
}

export class ValidateSession {
  constructor(private sessionRepository: ISessionRepository) {}

  async execution(command: ValidateSessionCommand) {
    const id = Identify.of(command.session_id);

    const session = await this.sessionRepository.findById(id);

    if (!session) return false;

    return session.isValid();
  }
}
