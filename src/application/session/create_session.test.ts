import { assertStrictEquals } from "@std/assert";
import { Identify } from "~/domain/mod.ts";
import { SessionRepository } from "~/infrastructure/mod.ts";
import { CreateSession, CreateSessionCommand } from "./create_session.ts";

Deno.test(async function isCreatedSession() {
  const kv = await Deno.openKv(":memory:");

  const sessionRepository = new SessionRepository(kv);
  const createSession = new CreateSession(sessionRepository);
  const userId = Identify.of();

  const input: Required<CreateSessionCommand> = {
    user_id: userId.value,
  };

  const result = await createSession.execution(input);

  assertStrictEquals(result, void 0);

  kv.close();
});
