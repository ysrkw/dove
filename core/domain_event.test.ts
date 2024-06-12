import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { DomainEvent } from "./domain_event.ts";

interface UserActionedPayload {
  name: string;
}

class UserActioned extends DomainEvent<"UserActioned", UserActionedPayload> {}

Deno.test(function createDomainEvent() {
  const event = new UserActioned({ name: "Hello World" });

  assertInstanceOf(event, UserActioned);
});

Deno.test(function holdArgumentPayload() {
  const event = new UserActioned({ name: "Hello World" });

  assertStrictEquals(event.payload.name, "Hello World");
});
