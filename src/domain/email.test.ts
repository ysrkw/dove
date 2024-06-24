import { assertStrictEquals } from "@std/assert";
import { Email } from "./email.ts";

Deno.test(function local() {
  const email = Email.of("test@example.com");

  assertStrictEquals(email.local(), "test");
});

Deno.test(function domain() {
  const email = Email.of("test@example.com");

  assertStrictEquals(email.domain(), "example.com");
});
