import { Email, IUserRepository, Password } from "~/domain";
import { IQueryModel } from "../core/mod.ts";

export interface AuthenticateEmailQuery {
  email: string;
  password: string;
}

export class AuthenticateEmail
  implements IQueryModel<AuthenticateEmailQuery, boolean> {
  constructor(private userRepository: IUserRepository) {}

  async execution(query: AuthenticateEmailQuery) {
    const email = Email.of(query.email);
    const password = Password.of(query.password);

    const user = await this.userRepository.findByEmail(email);

    if (!user) return false;

    return user.samePassword(password);
  }
}
