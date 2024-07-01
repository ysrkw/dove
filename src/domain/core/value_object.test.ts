import { assertStrictEquals } from "@std/assert";
import { ValueObject } from "./value_object.ts";

class TestText extends ValueObject<"TestText", string> {
  static of(value: string) {
    return new this(value);
  }
}

Deno.test(function sameValuesIsEqual() {
  const foo = TestText.of("same text");
  const bar = TestText.of("same text");

  assertStrictEquals(foo.equals(bar), true);
});

Deno.test(function differentValuesIsNotEqual() {
  const foo = TestText.of("foo");
  const bar = TestText.of("bar");

  assertStrictEquals(foo.equals(bar), false);
});
