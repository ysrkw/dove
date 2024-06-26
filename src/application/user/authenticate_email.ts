import { Email, IUserRepository, Password } from "~/domain";

export interface AuthenticateEmailCommand {
  email: string;
  password: string;
}

export class AuthenticateEmail {
  constructor(private userRepository: IUserRepository) {}

  async execution(command: AuthenticateEmailCommand) {
    const email = Email.of(command.email);
    const password = Password.of(command.password);

    const user = await this.userRepository.findByEmail(email);

    if (!user) return false;
    if (!user.validPassword(password)) return false;
    return true;
  }
}
