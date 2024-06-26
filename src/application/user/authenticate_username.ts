import { IUserRepository, Password, Username } from "~/domain";

export interface AuthenticateUsernameCommand {
  username: string;
  password: string;
}

export class AuthenticateUsername {
  constructor(private userRepository: IUserRepository) {}

  async execution(command: AuthenticateUsernameCommand) {
    const username = Username.of(command.username);
    const password = Password.of(command.password);

    const user = await this.userRepository.findByUsername(username);

    if (!user) return false;

    return user.samePassword(password);
  }
}
