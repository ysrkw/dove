import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { DomainEvent } from "./domain_event.ts";

interface UserActionedProps {
  name: string;
}

class UserActioned extends DomainEvent<"UserActioned", UserActionedProps> {}

Deno.test(function createDomainEvent() {
  const instance = new UserActioned({ name: "Hello World" });

  assertInstanceOf(instance, UserActioned);
});

Deno.test(function holdArgumentPayload() {
  const instance = new UserActioned({ name: "Hello World" });

  assertStrictEquals(instance.payload.name, "Hello World");
});
