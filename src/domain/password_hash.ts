import * as v from "@valibot/valibot";
import { verify } from "@denorg/scrypt";
import { ValueObject } from "~/core/value_object.ts";

const PasswordHashSchema = v.pipe(
  v.string(),
  v.length(128),
);

export class PasswordHash extends ValueObject<"PasswordHash", string> {
  static of(value: string) {
    return new this(v.parse(PasswordHashSchema, value));
  }

  verify(password: string): boolean {
    return verify(password, this.value);
  }
}
