import { AggregateRoot } from "~/core/aggregate_root.ts";
import { Biography } from "~/domain/biography.ts";
import { Email } from "~/domain/email.ts";
import { Identify } from "~/domain/identify.ts";
import { Name } from "~/domain/name.ts";
import { Password } from "~/domain/password.ts";
import { PasswordHash } from "~/domain/password_hash.ts";
import { Username } from "~/domain/username.ts";

interface UserProps {
  email: Email;
  passwordHash: PasswordHash;
  name: Name;
  username: Username;
  biography: Biography;
}

export class User extends AggregateRoot<"User", UserProps> {
  static create(props: UserProps, id = Identify.of()) {
    return new this(props, id);
  }

  changeEmail(email: Email) {
    this.props.email = email;
  }

  changePassword(password: Password) {
    const passwordHash = PasswordHash.of(password.hash());

    this.props.passwordHash = passwordHash;
  }

  validPassword(password: Password) {
    return this.props.passwordHash.verify(password.value);
  }

  changeName(name: Name) {
    this.props.name = name;
  }

  changeUsername(username: Username) {
    this.props.username = username;
  }

  changeBiography(biography: Biography) {
    this.props.biography = biography;
  }
}
