import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { ValueObject } from "./value_object.ts";

class Text extends ValueObject<"Text", string> {}

Deno.test(function createValueObject() {
  const instance = new Text("Hello World");

  assertInstanceOf(instance, Text);
});

Deno.test(function holdArgumentValue() {
  const instance = new Text("Hello World");

  assertStrictEquals(instance.value, "Hello World");
});

Deno.test(function sameValuesIsEqual() {
  const a = new Text("same text");
  const b = new Text("same text");

  assertStrictEquals(a.equals(b), true);
});

Deno.test(function differentValuesIsNotEqual() {
  const a = new Text("foo");
  const b = new Text("bar");

  assertStrictEquals(a.equals(b), false);
});
