import { Biography } from "~/domain/biography.ts";
import { Email } from "~/domain/email.ts";
import { Password } from "~/domain/password.ts";
import { PasswordHash } from "~/domain/password_hash.ts";
import { Name } from "~/domain/name.ts";
import { Username } from "~/domain/username.ts";
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
