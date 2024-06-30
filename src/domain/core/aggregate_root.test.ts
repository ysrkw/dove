import { assertStrictEquals } from "@std/assert";
import { Identify } from "~/domain";
import { AggregateRoot } from "./aggregate_root.ts";
import { DomainEvent } from "./domain_event.ts";

class TestUserWaved extends DomainEvent<"TestUserWaved", string> {}
class TestUser extends AggregateRoot<"TestUser", string> {
  static create(props: string, id = Identify.of()) {
    return new this(props, id);
  }

  wave() {
    this.addDomainEvent(new TestUserWaved("wave"));
  }
}

Deno.test(function initDomainEvents() {
  const john = TestUser.create("john doe");

  assertStrictEquals(john.domainEvents.length, 0);
});

Deno.test(function addDomainEvents() {
  const john = TestUser.create("john doe");

  john.wave();
  john.wave();
  john.wave();

  assertStrictEquals(john.domainEvents.length, 3);
});

Deno.test(function clearDomainEvents() {
  const john = TestUser.create("john doe");

  john.wave();
  john.wave();
  john.clearDomainEvents();

  assertStrictEquals(john.domainEvents.length, 0);
});
