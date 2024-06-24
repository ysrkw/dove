import {
  Biography,
  Email,
  Name,
  Password,
  PasswordHash,
  User,
  Username,
} from "~/domain/mod.ts";
import { UserRepository } from "~/infrastructure/mod.ts";

export async function initUserRepository(kv: Deno.Kv) {
  const userRepository = new UserRepository(kv);

  const user = User.create({
    email: Email.of("john@example.com"),
    passwordHash: PasswordHash.of(Password.of("PassW0rd!").hash()),
    name: Name.of("John Doe"),
    username: Username.of("john_doe"),
    biography: Biography.of("Hello World"),
  });

  await userRepository.save(user);
}
