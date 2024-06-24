import { assertInstanceOf } from "@std/assert";
import { Identify } from "./identify.ts";

Deno.test(function createAt() {
  const id = Identify.of();

  assertInstanceOf(id.createAt(), Date);
});
