import { Email } from "~/domain/email.ts";
import { Identify } from "~/domain/identify.ts";
import { Username } from "~/domain/username.ts";
import { User } from "~/modules/user/domain/user.ts";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findById(id: Identify): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
  findByUsername(username: Username): Promise<User | null>;
}
