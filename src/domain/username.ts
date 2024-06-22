import * as v from "@valibot/valibot";
import { ValueObject } from "~/core/value_object.ts";

const UsernameSchema = v.pipe(
  v.string(),
  v.minLength(4),
  v.maxLength(16),
  v.regex(/[a-zA-Z0-9_-]/),
);

export class Username extends ValueObject<"Username", string> {
  static of(value: string) {
    return new this(v.parse(UsernameSchema, value));
  }

  initial() {
    return this.value.slice(0, 1).toUpperCase();
  }
}
