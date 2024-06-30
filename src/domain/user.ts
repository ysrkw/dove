import {
  Biography,
  Email,
  Identify,
  Name,
  Password,
  PasswordHash,
  Username,
} from "~/domain";
import { AggregateRoot } from "./core/mod.ts";

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

  samePassword(password: Password) {
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
