import {
  Biography,
  Email,
  Name,
  Password,
  PasswordHash,
  Username,
} from "~/domain/mod.ts";
import { User } from "~/modules/user/domain/user.ts";
import { IUserRepository } from "~/modules/user/domain/user_repository.ts";

export interface CreateUserCommand {
  email: string;
  password: string;
  username: string;
}

export class CreateUserService {
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
