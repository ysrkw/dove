import { assertStrictEquals } from "@std/assert";
import {
  BasicAuthenticationCommand,
  BasicAuthenticationService,
} from "~/modules/auth/application/basic_authentication_service.ts";
import { createUserRepository } from "~/modules/auth/application/_user_repository.ts";

const userRepository = await createUserRepository();
const basicAuthentication = new BasicAuthenticationService(userRepository);

Deno.test(async function isValidUser() {
  const input: Required<BasicAuthenticationCommand> = {
    username: "john_doe",
    password: "PassW0rd!",
  };

  const result = await basicAuthentication.execution(input);

  assertStrictEquals(result, true);
});

Deno.test(async function isInvalidUser() {
  const input: Required<BasicAuthenticationCommand> = {
    username: "john_doe",
    password: "password",
  };

  const result = await basicAuthentication.execution(input);

  assertStrictEquals(result, false);
});

Deno.test(async function isNotExistsUser() {
  const input: Required<BasicAuthenticationCommand> = {
    username: "foo",
    password: "PassW0rd!",
  };

  const result = await basicAuthentication.execution(input);

  assertStrictEquals(result, false);
});
