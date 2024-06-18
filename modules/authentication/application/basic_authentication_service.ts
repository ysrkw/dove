import { Password } from "../../../core/domain/password.ts";
import { Username } from "../../../core/domain/username.ts";
import { IUserRepository } from "../domain/user_repository.ts";

interface BasicAuthenticationCommand {
  username: string;
  password: string;
}

export class BasicAuthenticationService {
  constructor(private userRepository: IUserRepository) {}

  async execution(command: BasicAuthenticationCommand) {
    const username = Username.of(command.username);
    const password = Password.of(command.password);

    const authUser = await this.userRepository.findByUsername(username);

    if (!authUser) return false;

    if (!authUser.samePassword(password)) return false;

    authUser.createSession();

    await this.userRepository.save(authUser);

    return true;
  }
}
