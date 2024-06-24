import { assertStrictEquals } from "@std/assert";
import { Username } from "./username.ts";

Deno.test(function initial() {
  const username = Username.of("john_doe");

  assertStrictEquals(username.initial(), "J");
});
