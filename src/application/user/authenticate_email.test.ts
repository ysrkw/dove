import { assertStrictEquals } from "@std/assert";
import { UserRepository } from "~/infrastructure";
import { initUserRepository } from "./_init_user_repository.ts";
import {
  AuthenticateEmail,
  AuthenticateEmailCommand,
} from "./authenticate_email.ts";

Deno.test(async function isValidUser() {
  const kv = await Deno.openKv(":memory:");

  await initUserRepository(kv);
  const userRepository = new UserRepository(kv);
  const authenticateEmail = new AuthenticateEmail(userRepository);

  const input: Required<AuthenticateEmailCommand> = {
    email: "john@example.com",
    password: "PassW0rd!",
  };

  const result = await authenticateEmail.execution(input);

  assertStrictEquals(result, true);

  kv.close();
});

Deno.test(async function isInvalidUser() {
  const kv = await Deno.openKv(":memory:");

  await initUserRepository(kv);
  const userRepository = new UserRepository(kv);
  const authenticateEmail = new AuthenticateEmail(userRepository);

  const input: Required<AuthenticateEmailCommand> = {
    email: "john@example.com",
    password: "PassW0rd!_NG",
  };

  const result = await authenticateEmail.execution(input);

  assertStrictEquals(result, false);

  kv.close();
});

Deno.test(async function isNotExistsUser() {
  const kv = await Deno.openKv(":memory:");

  await initUserRepository(kv);
  const userRepository = new UserRepository(kv);
  const authenticateEmail = new AuthenticateEmail(userRepository);

  const input: Required<AuthenticateEmailCommand> = {
    email: "empty@example.com",
    password: "PassW0rd!",
  };

  const result = await authenticateEmail.execution(input);

  assertStrictEquals(result, false);

  kv.close();
});
