import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { AggregateRoot } from "./aggregate_root.ts";
import { DomainEvent } from "./domain_event.ts";

interface UserProps {
  name: string;
}

class User extends AggregateRoot<"User", UserProps> {}

interface UserActionedProps {
  name: string;
}

class UserActioned extends DomainEvent<"UserActioned", UserActionedProps> {}

Deno.test(function createAggregateRoot() {
  const john = new User({ name: "john doe" });

  assertInstanceOf(john, User);
});

Deno.test(function holdArgumentProps() {
  const john = new User({ name: "john doe" });

  assertStrictEquals(john.props.name, "john doe");
});

Deno.test(function sameIdentifiesIsEqual() {
  const alice = new User({ name: "alice" });
  const bob = new User({ name: "bob" }, alice.id);

  assertStrictEquals(alice.equals(bob), true);
});

Deno.test(function differentIdentifiesIsNotEqual() {
  const alice = new User({ name: "alice" });
  const bob = new User({ name: "bob" });

  assertStrictEquals(alice.equals(bob), false);
});

Deno.test(function initDomainEvents() {
  const john = new User({ name: "john doe" });

  assertStrictEquals(john.domainEvents.length, 0);
});

Deno.test(function addDomainEvents() {
  const john = new User({ name: "john doe" });

  john.addDomainEvent(new UserActioned({ name: "1" }));
  john.addDomainEvent(new UserActioned({ name: "2" }));
  john.addDomainEvent(new UserActioned({ name: "3" }));

  assertStrictEquals(john.domainEvents.length, 3);
});

Deno.test(function clearDomainEvents() {
  const john = new User({ name: "john doe" });

  john.addDomainEvent(new UserActioned({ name: "1" }));
  john.addDomainEvent(new UserActioned({ name: "2" }));
  john.clearDomainEvents();

  assertStrictEquals(john.domainEvents.length, 0);
});
