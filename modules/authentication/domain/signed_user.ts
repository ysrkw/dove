import { AggregateRoot } from "../../../core/aggregate_root.ts";
import { Identify } from "../../../core/domain/identify.ts";
import { PasswordHash } from "../../../core/domain/password_hash.ts";
import { Username } from "../../../core/domain/username.ts";
import { Session } from "./session.ts";

export interface SignedUserProps {
  username: Username;
  passwordHash: PasswordHash;
  sessions: Session[];
}

export class SignedUser extends AggregateRoot<"SignedUser", SignedUserProps> {
  static create(props: SignedUserProps, id = Identify.of()) {
    return new this(props, id);
  }
}
