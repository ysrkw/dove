import { assertStrictEquals } from "@std/assert";
import { UserRepository } from "~/infrastructure/mod.ts";
import { CreateUser, CreateUserCommand } from "./create_user.ts";

Deno.test(async function isCreatedUser() {
  const kv = await Deno.openKv(":memory:");

  const userRepository = new UserRepository(kv);
  const createUser = new CreateUser(userRepository);

  const input: Required<CreateUserCommand> = {
    email: "test@example.com",
    password: "PassW0rd!",
    username: "test",
  };

  const result = await createUser.execution(input);

  assertStrictEquals(result, void 0);

  kv.close();
});
