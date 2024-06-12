import { assertStrictEquals } from "@std/assert";
import { AggregateRoot } from "./aggregate_root.ts";
import { DomainEvent } from "./domain_event.ts";

interface UserProps {
  name: string;
}

class User extends AggregateRoot<"User", UserProps> {}

interface UserActionedPayload {
  name: string;
}

class UserActioned extends DomainEvent<"UserActioned", UserActionedPayload> {}

Deno.test(function domainEvents() {
  const john = new User({ name: "john doe" });

  assertStrictEquals(john.domainEvents.length, 0);
});

Deno.test(function addDomainEvents() {
  const john = new User({ name: "john doe" });

  john.addDomainEvent(new UserActioned({ name: "foo" }));
  john.addDomainEvent(new UserActioned({ name: "bar" }));

  assertStrictEquals(john.domainEvents.length, 2);
});

Deno.test(function clearDomainEvents() {
  const john = new User({ name: "john doe" });

  john.addDomainEvent(new UserActioned({ name: "foo" }));
  john.addDomainEvent(new UserActioned({ name: "bar" }));
  john.clearDomainEvents();

  assertStrictEquals(john.domainEvents.length, 0);
});
