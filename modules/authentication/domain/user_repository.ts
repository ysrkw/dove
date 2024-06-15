import { Identify } from "../../../core/domain/identify.ts";
import { Username } from "../../../core/domain/username.ts";
import { User } from "./user.ts";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findByUsername(username: Username): Promise<User | null>;
  findBySessionId(sessionId: Identify): Promise<User | null>;
}
