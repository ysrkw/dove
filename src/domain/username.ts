import * as v from "@valibot/valibot";
import { ValueObject } from "~/core";

const UsernameSchema = v.pipe(
  v.string(),
  v.minLength(4),
  v.maxLength(16),
  v.regex(/[a-zA-Z0-9_-]/),
);

type UsernameInput = v.InferInput<typeof UsernameSchema>;

export class Username extends ValueObject<"Username", UsernameInput> {
  static of(value: UsernameInput) {
    return new this(v.parse(UsernameSchema, value));
  }

  initial() {
    return this.value.slice(0, 1).toUpperCase();
  }
}
