import { assertStrictEquals } from "@std/assert";
import { AggregateRoot } from "~/core/aggregate_root.ts";
import { DomainEvent } from "~/core/domain_event.ts";
import { Identify } from "~/domain/identify.ts";

class UserCreated extends DomainEvent<"UserCreated", Identify> {}
class UserWaved extends DomainEvent<"UserWaved", Identify> {}

class User extends AggregateRoot<"User", string> {
  static create(props: string, id?: Identify) {
    const user = new this(props, id);

    if (!id) user.addDomainEvent(new UserCreated(user.id));

    return user;
  }
}

Deno.test(function initDomainEvents() {
  const john = User.create("john doe");

  assertStrictEquals(john.domainEvents.length, 1);
});

Deno.test(function addDomainEvents() {
  const john = User.create("john doe");

  john.addDomainEvent(new UserWaved(john.id));

  assertStrictEquals(john.domainEvents.length, 2);
});

Deno.test(function clearDomainEvents() {
  const john = User.create("john doe");

  john.clearDomainEvents();

  assertStrictEquals(john.domainEvents.length, 0);
});
