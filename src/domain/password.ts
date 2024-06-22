import { hash } from "@denorg/scrypt";
import * as v from "@valibot/valibot";
import { ValueObject } from "~/core/value_object.ts";

const PasswordSchema = v.pipe(
  v.string(),
  v.minLength(8),
  v.maxLength(64),
  v.regex(/[a-z]/),
  v.regex(/[A-Z]/),
  v.regex(/[0-9]/),
);

export class Password extends ValueObject<"Password", string> {
  static of(value: string) {
    return new this(v.parse(PasswordSchema, value));
  }

  hash(): string {
    return hash(this.value);
  }
}
