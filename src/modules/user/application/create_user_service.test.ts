import { assertStrictEquals } from "@std/assert";
import {
  CreateUserCommand,
  CreateUserService,
} from "~/modules/user/application/create_user_service.ts";
import { UserRepository } from "~/modules/user/infrastructure/user_repository.ts";

Deno.test(async function isCreatedUser() {
  const kv = await Deno.openKv(":memory:");

  const userRepository = new UserRepository(kv);
  const createUser = new CreateUserService(userRepository);

  const input: Required<CreateUserCommand> = {
    email: "test@example.com",
    password: "PassW0rd!",
    username: "test",
  };

  const result = await createUser.execution(input);

  assertStrictEquals(result, void 0);

  kv.close();
});
