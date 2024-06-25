import { IUserRepository, Password, Username } from "~/domain/mod.ts";

export interface BasicAuthenticationCommand {
  username: string;
  password: string;
}

export class BasicAuthentication {
  constructor(private userRepository: IUserRepository) {}

  async execution(command: BasicAuthenticationCommand) {
    const username = Username.of(command.username);
    const password = Password.of(command.password);

    const user = await this.userRepository.findByUsername(username);

    if (!user) return false;

    if (!user.validPassword(password)) return false;

    return true;
  }
}
