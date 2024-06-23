import { Email, Identify, Username } from "~/domain/mod.ts";
import { User } from "~/modules/user/domain/user.ts";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findById(id: Identify): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
  findByUsername(username: Username): Promise<User | null>;
}
