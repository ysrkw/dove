import {
  Biography,
  Email,
  IUserRepository,
  Name,
  Password,
  PasswordHash,
  User,
  Username,
  UserService,
} from "~/domain";
import { ICommandModel } from "../core/mod.ts";

export interface CreateUserCommand {
  email: string;
  password: string;
  username: string;
}

export class CreateUser implements ICommandModel<CreateUserCommand> {
  private userService: UserService;

  constructor(private userRepository: IUserRepository) {
    this.userService = new UserService(this.userRepository);
  }

  async execution(command: CreateUserCommand) {
    const email = Email.of(command.email);
    const password = Password.of(command.password);
    const username = Username.of(command.username);
    const passwordHash = PasswordHash.of(password.hash());

    if (await this.userService.isEmailExists(email)) {
      throw new Error();
    }

    if (await this.userService.isUsernameExists(username)) {
      throw new Error();
    }

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
