import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { Password } from "./password.ts";

Deno.test(function of() {
  const password = Password.of("PassW0rd!");

  assertInstanceOf(password, Password);
});

Deno.test(function hash() {
  const password = Password.of("PassW0rd!");

  const hash = password.hash();

  assertStrictEquals(hash.length, 128);
});
