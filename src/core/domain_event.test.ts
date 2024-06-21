import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { DomainEvent } from "~/core/domain_event.ts";

class UserCreated extends DomainEvent<"UserCreated", string> {}

Deno.test(function createDomainEvent() {
  const event = new UserCreated("test@example.com");

  assertInstanceOf(event, UserCreated);
});

Deno.test(function holdArgumentPayload() {
  const event = new UserCreated("test@example.com");

  assertStrictEquals(event.payload, "test@example.com");
});
