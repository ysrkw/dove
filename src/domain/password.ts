import { hash } from "@denorg/scrypt";
import * as v from "@valibot/valibot";
import { ValueObject } from "./core/mod.ts";

export const PasswordSchema = v.pipe(
  v.string(),
  v.minLength(8),
  v.maxLength(64),
  v.regex(/[a-z]/),
  v.regex(/[A-Z]/),
  v.regex(/[0-9]/),
);

type PasswordInput = v.InferInput<typeof PasswordSchema>;

export class Password extends ValueObject<"Password", PasswordInput> {
  static of(value: PasswordInput) {
    return new this(v.parse(PasswordSchema, value));
  }

  hash() {
    return hash(this.value);
  }
}
