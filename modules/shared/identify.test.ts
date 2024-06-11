import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { Identify } from "./identify.ts";

Deno.test(function createIdentify() {
  const id = Identify.of();

  assertInstanceOf(id, Identify);
});

Deno.test(function inheritAnotherIdentifier() {
  const before = Identify.of();

  const id = Identify.of(before.value);

  assertStrictEquals(id.equals(before), true);
});
