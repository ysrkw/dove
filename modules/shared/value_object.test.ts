import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { ValueObject } from "./value_object.ts";

class Text extends ValueObject<"Text", string> {}

Deno.test(function createValueObject() {
  const text = new Text("Hello World");

  assertInstanceOf(text, Text);
});

Deno.test(function holdArgumentValue() {
  const text = new Text("Hello World");

  assertStrictEquals(text.value, "Hello World");
});

Deno.test(function sameValuesIsEqual() {
  const foo = new Text("same text");
  const bar = new Text("same text");

  assertStrictEquals(foo.equals(bar), true);
});

Deno.test(function differentValuesIsNotEqual() {
  const foo = new Text("foo");
  const bar = new Text("bar");

  assertStrictEquals(foo.equals(bar), false);
});
