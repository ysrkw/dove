import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { Email } from "~/domain/email.ts";

Deno.test(function of() {
  const email = Email.of("test@example.com");

  assertInstanceOf(email, Email);
});

Deno.test(function local() {
  const email = Email.of("test@example.com");

  assertStrictEquals(email.local(), "test");
});

Deno.test(function domain() {
  const email = Email.of("test@example.com");

  assertStrictEquals(email.domain(), "example.com");
});
