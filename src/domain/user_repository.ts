import { Email, Identify, User, Username } from "~/domain";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findById(id: Identify): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
  findByUsername(username: Username): Promise<User | null>;
}
