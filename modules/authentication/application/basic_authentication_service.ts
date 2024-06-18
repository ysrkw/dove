import { Password } from "../../../core/domain/password.ts";
import { Username } from "../../../core/domain/username.ts";
import { IUserRepository } from "../domain/user_repository.ts";

export interface BasicAuthenticationCommand {
  username: string;
  password: string;
}

export class BasicAuthenticationService {
  constructor(private userRepository: IUserRepository) {}

  async execution(command: BasicAuthenticationCommand) {
    const username = Username.of(command.username);
    const password = Password.of(command.password);

    const user = await this.userRepository.findByUsername(username);

    if (!user) return false;

    if (!user.samePassword(password)) return false;

    return true;
  }
}
