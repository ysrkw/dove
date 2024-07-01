import { assertStrictEquals } from "@std/assert";
import { Identify } from "~/domain";
import { Entity } from "./entity.ts";

class TestUser extends Entity<"TestUser", string> {
  static create(props: string, id = Identify.of()) {
    return new this(props, id);
  }
}

Deno.test(function sameIdentifiesIsEqual() {
  const alice = TestUser.create("alice");
  const bob = TestUser.create("bob", alice.id);

  assertStrictEquals(alice.equals(bob), true);
});

Deno.test(function differentIdentifiesIsNotEqual() {
  const alice = TestUser.create("alice");
  const bob = TestUser.create("bob");

  assertStrictEquals(alice.equals(bob), false);
});
