import { Username } from "~/domain/username.ts";
import { Password } from "~/domain/password.ts";
import { PasswordHash } from "~/domain/password_hash.ts";
import { User } from "~/modules/auth/domain/user.ts";
import { UserRepository } from "~/modules/auth/infrastructure/user_repository.ts";

export async function createUserRepository() {
  const userRepository = new UserRepository();

  const username = Username.of("john_doe");
  const password = Password.of("PassW0rd!");
  const passwordHash = PasswordHash.of(password.hash());

  const user = User.create({ username, passwordHash, sessions: [] });

  await userRepository.save(user);

  return userRepository;
}
