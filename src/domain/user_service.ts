import { Email, IUserRepository, User, Username } from "~/domain";

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async isEmailExists(email: Email): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);

    return user instanceof User;
  }

  async isUsernameExists(username: Username): Promise<boolean> {
    const user = await this.userRepository.findByUsername(username);

    return user instanceof User;
  }
}
