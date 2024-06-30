import { IUserRepository, Password, Username } from "~/domain";
import { IQueryModel } from "../core/mod.ts";

export interface AuthenticateUsernameQuery {
  username: string;
  password: string;
}

export class AuthenticateUsername
  implements IQueryModel<AuthenticateUsernameQuery, boolean> {
  constructor(private userRepository: IUserRepository) {}

  async execution(query: AuthenticateUsernameQuery) {
    const username = Username.of(query.username);
    const password = Password.of(query.password);

    const user = await this.userRepository.findByUsername(username);

    if (!user) return false;

    return user.samePassword(password);
  }
}
