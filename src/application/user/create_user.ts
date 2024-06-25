import {
  Biography,
  Email,
  IUserRepository,
  Name,
  Password,
  PasswordHash,
  User,
  Username,
} from "~/domain/mod.ts";

export interface CreateUserCommand {
  email: string;
  password: string;
  username: string;
}

export class CreateUser {
  constructor(private userRepository: IUserRepository) {}

  async execution(command: CreateUserCommand): Promise<void> {
    const email = Email.of(command.email);
    const password = Password.of(command.password);
    const username = Username.of(command.username);
    const passwordHash = PasswordHash.of(password.hash());

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
