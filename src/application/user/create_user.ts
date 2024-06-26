import {
  Biography,
  Email,
  IUserRepository,
  Name,
  Password,
  PasswordHash,
  User,
  Username,
} from "~/domain";
import { ICommandModel } from "../core/mod.ts";

export interface CreateUserCommand {
  email: string;
  password: string;
  username: string;
}

export class CreateUser implements ICommandModel<CreateUserCommand> {
  constructor(private userRepository: IUserRepository) {}

  async execution(command: CreateUserCommand) {
    const email = Email.of(command.email);
    const password = Password.of(command.password);
    const username = Username.of(command.username);
    const passwordHash = PasswordHash.of(password.hash());

    const sameEmail = await this.userRepository.findByEmail(email);

    if (sameEmail) throw new Error();

    const sameUsername = await this.userRepository.findByUsername(username);

    if (sameUsername) throw new Error();

    const user = User.create({
      email,
      passwordHash,
      name: Name.of(email.local()),
      username,
      biography: Biography.of(""),
    });

    await this.userRepository.save(user);
  }
}
