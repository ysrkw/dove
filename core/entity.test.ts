import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { Entity } from "./entity.ts";

class User extends Entity<"User", string> {}

Deno.test(function createEntity() {
  const john = new User("john doe");

  assertInstanceOf(john, User);
});

Deno.test(function holdArgumentProps() {
  const john = new User("john doe");

  assertStrictEquals(john.props, "john doe");
});

Deno.test(function sameIdentifiesIsEqual() {
  const alice = new User("alice");
  const bob = new User("bob", alice.id);

  assertStrictEquals(alice.equals(bob), true);
});

Deno.test(function differentIdentifiesIsNotEqual() {
  const alice = new User("alice");
  const bob = new User("bob");

  assertStrictEquals(alice.equals(bob), false);
});
