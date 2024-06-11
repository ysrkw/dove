import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { Entity } from "./entity.ts";

interface UserProps {
  name: string;
}

class User extends Entity<"User", UserProps> {}

Deno.test(function createEntity() {
  const instance = new User({ name: "john doe" });

  assertInstanceOf(instance, User);
});

Deno.test(function holdArgumentProps() {
  const instance = new User({ name: "john doe" });

  assertStrictEquals(instance.props.name, "john doe");
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
