import { assertRejects, assertStrictEquals } from "@std/assert";
import { Username } from "../../../core/domain/username.ts";
import { Password } from "../../../core/domain/password.ts";
import { PasswordHash } from "../../../core/domain/password_hash.ts";
import { User } from "../domain/user.ts";
import { UserRepository } from "../infrastructure/user_repository.ts";
import { BasicAuthenticationService } from "./basic_authentication_service.ts";

Deno.test(async function basicAuthenticationService(t) {
  const userRepository = new UserRepository();
  const username = Username.of("john_doe");
  const password = Password.of("PassW0rd!");
  const passwordHash = PasswordHash.of(password.hash());

  const user = User.create({ username, passwordHash, sessions: [] });

  await userRepository.save(user);

  await t.step(async function success() {
    const service = new BasicAuthenticationService(userRepository);

    const result = await service.execution({
      username: "john_doe",
      password: "PassW0rd!",
    });

    assertStrictEquals(result, void 0);
  });

  await t.step(function notUsernameExists() {
    const service = new BasicAuthenticationService(userRepository);

    const result = () =>
      service.execution({
        username: "foo",
        password: "PassW0rd!",
      });

    assertRejects(result);
  });

  await t.step(function notSamePassword() {
    const service = new BasicAuthenticationService(userRepository);

    const result = () =>
      service.execution({
        username: "john_doe",
        password: "password",
      });

    assertRejects(result);
  });
});
