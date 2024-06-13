import { delay } from "@std/async";
import { Identify } from "../../../core/domain/identify.ts";
import { Username } from "../../../core/domain/username.ts";
import { AuthUser } from "../domain/auth_user.ts";
import { IAuthUserRepository } from "../domain/auth_user_repository.ts";

export class AuthUserRepository implements IAuthUserRepository {
  private id = new Map<string, AuthUser>();
  private username = new Map<string, AuthUser>();
  private sessions = new Map<string, AuthUser>();

  constructor() {}

  async save(authUser: AuthUser): Promise<void> {
    await delay(0);
    this.id.set(authUser.id.value, authUser);
    this.username.set(authUser.props.username.value, authUser);
    for (const session of authUser.props.sessions) {
      this.sessions.set(session.id.value, authUser);
    }
  }

  async findByUsername(username: Username): Promise<AuthUser | undefined> {
    await delay(0);
    return this.username.get(username.value);
  }

  async findBySessionId(sessionId: Identify): Promise<AuthUser | undefined> {
    await delay(0);
    return this.sessions.get(sessionId.value);
  }
}
