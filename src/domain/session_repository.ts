import { Identify, Session } from "~/domain/mod.ts";

export interface ISessionRepository {
  save(session: Session): Promise<void>;
  findById(id: Identify): Promise<Session | null>;
  findByUserId(userId: Identify): Promise<Session[]>;
}
