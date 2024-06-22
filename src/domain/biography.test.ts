import { assertInstanceOf } from "@std/assert";
import { Biography } from "~/domain/biography.ts";

Deno.test(function of() {
  const biography = Biography.of("Hello World");

  assertInstanceOf(biography, Biography);
});
