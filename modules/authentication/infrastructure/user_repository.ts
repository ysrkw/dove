import { delay } from "@std/async";
import { Identify } from "../../../core/domain/identify.ts";
import { Username } from "../../../core/domain/username.ts";
import { User } from "../domain/user.ts";
import { IUserRepository } from "../domain/user_repository.ts";

export class UserRepository implements IUserRepository {
  private id = new Map<string, User>();
  private username = new Map<string, User>();
  private sessions = new Map<string, User>();

  constructor() {}

  async save(user: User): Promise<void> {
    await delay(0);

    this.id.set(user.id.value, user);
    this.username.set(user.props.username.value, user);

    for (const session of user.props.sessions) {
      this.sessions.set(session.id.value, user);
    }
  }

  async findByUsername(username: Username): Promise<User | null> {
    await delay(0);

    const user = this.username.get(username.value);

    return user ? user : null;
  }

  async findBySessionId(sessionId: Identify): Promise<User | null> {
    await delay(0);

    const user = this.sessions.get(sessionId.value);

    return user ? user : null;
  }
}