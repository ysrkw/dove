import {
  Biography,
  Email,
  Identify,
  Name,
  Password,
  PasswordHash,
  UserCreated,
  UserEmailChanged,
  Username,
  UserPasswordChanged,
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
  static create(props: UserProps, id?: Identify) {
    const user = new this(props, id);

    if (!id) user.addDomainEvent(new UserCreated(user.props.email));

    return user;
  }

  changeEmail(email: Email) {
    this.props.email = email;

    this.addDomainEvent(new UserEmailChanged(this.props.email));
  }

  changePassword(password: Password) {
    const passwordHash = PasswordHash.of(password.hash());

    this.props.passwordHash = passwordHash;

    this.addDomainEvent(new UserPasswordChanged(this.props.email));
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
