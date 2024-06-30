import { assertStrictEquals } from "@std/assert";
import { UserRepository } from "~/infrastructure";
import { initUserRepository } from "./_init_user_repository.ts";
import {
  AuthenticateUsername,
  AuthenticateUsernameQuery,
} from "./authenticate_username.ts";

Deno.test(async function isValidUser() {
  const kv = await Deno.openKv(":memory:");

  await initUserRepository(kv);
  const userRepository = new UserRepository(kv);
  const authenticateUsername = new AuthenticateUsername(userRepository);

  const input: Required<AuthenticateUsernameQuery> = {
    username: "john_doe",
    password: "PassW0rd!",
  };

  const result = await authenticateUsername.execution(input);

  assertStrictEquals(result, true);

  kv.close();
});

Deno.test(async function isInvalidUser() {
  const kv = await Deno.openKv(":memory:");

  await initUserRepository(kv);
  const userRepository = new UserRepository(kv);
  const authenticateUsername = new AuthenticateUsername(userRepository);

  const input: Required<AuthenticateUsernameQuery> = {
    username: "john_doe",
    password: "PassW0rd!_NG",
  };

  const result = await authenticateUsername.execution(input);

  assertStrictEquals(result, false);

  kv.close();
});

Deno.test(async function isNotExistsUser() {
  const kv = await Deno.openKv(":memory:");

  await initUserRepository(kv);
  const userRepository = new UserRepository(kv);
  const authenticateUsername = new AuthenticateUsername(userRepository);

  const input: Required<AuthenticateUsernameQuery> = {
    username: "john_smith",
    password: "PassW0rd!",
  };

  const result = await authenticateUsername.execution(input);

  assertStrictEquals(result, false);

  kv.close();
});
