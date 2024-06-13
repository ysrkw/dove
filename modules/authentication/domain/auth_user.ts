import { AggregateRoot } from "../../../core/aggregate_root.ts";
import { Identify } from "../../../core/domain/identify.ts";
import { Password } from "../../../core/domain/password.ts";
import { PasswordHash } from "../../../core/domain/password_hash.ts";
import { Username } from "../../../core/domain/username.ts";
import { ExpiredAt } from "./expired_at.ts";
import { Session } from "./session.ts";

export interface AuthUserProps {
  username: Username;
  passwordHash: PasswordHash;
  sessions: Session[];
}

export class AuthUser extends AggregateRoot<"AuthUser", AuthUserProps> {
  static create(props: AuthUserProps, id = Identify.of()) {
    return new this(props, id);
  }

  samePassword(password: Password): boolean {
    return this.props.passwordHash.verify(password.value);
  }

  createSession(): void {
    const session = Session.create({ expiredAt: ExpiredAt.of() });

    this.props.sessions.push(session);
  }
}
