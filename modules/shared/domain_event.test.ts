import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { DomainEvent } from "./domain_event.ts";

interface UserCreatedProps {
  email: string;
}

class UserCreated extends DomainEvent<"UserCreated", UserCreatedProps> {}

Deno.test(function createDomainEvent() {
  const instance = new UserCreated({ email: "test@example.com" });

  assertInstanceOf(instance, UserCreated);
});

Deno.test(function holdArgumentProps() {
  const instance = new UserCreated({ email: "test@example.com" });

  assertStrictEquals(instance.props.email, "test@example.com");
});
