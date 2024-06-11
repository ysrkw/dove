import { assertStrictEquals } from "@std/assert";
import { ValueObject } from "./value_object.ts";

Deno.test(function createValueObject() {
  class Text extends ValueObject<"Text", string> {}

  const instance = new Text("Hello World");

  assertStrictEquals(instance.value, "Hello World");
});

Deno.test(function sameValuesIsEqual() {
  class Text extends ValueObject<"Text", string> {}

  const a = new Text("same text");
  const b = new Text("same text");

  assertStrictEquals(a.equals(b), true);
});

Deno.test(function differentValuesIsNotEqual() {
  class Text extends ValueObject<"Text", string> {}

  const a = new Text("foo");
  const b = new Text("bar");

  assertStrictEquals(a.equals(b), false);
});
