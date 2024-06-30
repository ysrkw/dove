import { Identify, ISessionRepository } from "~/domain";
import { IQueryModel } from "../core/mod.ts";

export interface ValidateSessionQuery {
  session_id: string;
}

export class ValidateSession
  implements IQueryModel<ValidateSessionQuery, boolean> {
  constructor(private sessionRepository: ISessionRepository) {}

  async execution(query: ValidateSessionQuery) {
    const id = Identify.of(query.session_id);

    const session = await this.sessionRepository.findById(id);

    if (!session) return false;

    return session.isValid();
  }
}
