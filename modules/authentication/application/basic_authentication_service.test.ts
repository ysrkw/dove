import { assertStrictEquals } from "@std/assert";
import { BasicAuthenticationService } from "./basic_authentication_service.ts";
import { createUserRepository } from "../test/create_user_repository.ts";

const userRepository = await createUserRepository();

Deno.test(async function success() {
  const service = new BasicAuthenticationService(userRepository);

  const result = await service.execution({
    username: "john_doe",
    password: "PassW0rd!",
  });

  assertStrictEquals(result, true);
});

Deno.test(async function notUsernameExists() {
  const service = new BasicAuthenticationService(userRepository);

  const result = await service.execution({
    username: "foo",
    password: "PassW0rd!",
  });

  assertStrictEquals(result, false);
});

Deno.test(async function notSamePassword() {
  const service = new BasicAuthenticationService(userRepository);

  const result = await service.execution({
    username: "john_doe",
    password: "password",
  });

  assertStrictEquals(result, false);
});
