import * as v from "@valibot/valibot";
import { ValueObject } from "./core/mod.ts";

const NameSchema = v.pipe(
  v.string(),
  v.minLength(1),
  v.maxLength(32),
);

type NameInput = v.InferInput<typeof NameSchema>;

export class Name extends ValueObject<"Name", NameInput> {
  static of(value: NameInput) {
    return new this(v.parse(NameSchema, value));
  }

  initial() {
    return this.value.slice(0, 1).toUpperCase();
  }
}
