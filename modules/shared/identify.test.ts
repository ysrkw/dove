import { assertInstanceOf } from "@std/assert";
import { Identify } from "./identify.ts";

Deno.test(function createIdentify() {
  const id = Identify.of();

  assertInstanceOf(id, Identify);
});
