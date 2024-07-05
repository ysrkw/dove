import { Email, IUserRepository, Username } from "~/domain";

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async isUsernameAvailable(username: Username): Promise<boolean> {
    const user = await this.userRepository.findByUsername(username);

    return user === null;
  }

  async isEmailAvailable(email: Email): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);

    return user === null;
  }
}
