import { Identify } from "~/domain/identify.ts";
import { Username } from "~/domain/username.ts";
import { User } from "~/modules/auth/domain/user.ts";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findByUsername(username: Username): Promise<User | null>;
  findBySessionId(sessionId: Identify): Promise<User | null>;
}
