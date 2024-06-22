import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { Name } from "~/domain/name.ts";

Deno.test(function of() {
  const name = Name.of("John");

  assertInstanceOf(name, Name);
});

Deno.test(function initial() {
  const name = Name.of("john");

  assertStrictEquals(name.initial(), "J");
});
