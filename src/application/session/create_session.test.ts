import { assertStrictEquals } from "@std/assert";
import { Identify } from "~/domain";
import { SessionRepository } from "~/infrastructure";
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
