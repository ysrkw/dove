import { Password } from "../../../core/domain/password.ts";
import { Username } from "../../../core/domain/username.ts";
import { IAuthUserRepository } from "../domain/auth_user_repository.ts";

interface BasicAuthenticationServiceCommand {
  username: string;
  password: string;
}

export class BasicAuthenticationService {
  constructor(private authUserRepository: IAuthUserRepository) {}

  async execution(command: BasicAuthenticationServiceCommand) {
    const username = Username.of(command.username);
    const password = Password.of(command.password);

    const authUser = await this.authUserRepository.findByUsername(username);

    return authUser ? authUser.validPassword(password) : false;
  }
}
