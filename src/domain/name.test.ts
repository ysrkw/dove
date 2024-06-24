import { assertStrictEquals } from "@std/assert";
import { Name } from "./name.ts";

Deno.test(function initial() {
  const name = Name.of("john");

  assertStrictEquals(name.initial(), "J");
});
