import * as v from "@valibot/valibot";
import { verify } from "@denorg/scrypt";
import { ValueObject } from "~/core";

const PasswordHashSchema = v.pipe(
  v.string(),
  v.length(128),
);

type PasswordHashInput = v.InferInput<typeof PasswordHashSchema>;

export class PasswordHash
  extends ValueObject<"PasswordHash", PasswordHashInput> {
  static of(value: PasswordHashInput) {
    return new this(v.parse(PasswordHashSchema, value));
  }

  verify(password: string): boolean {
    return verify(password, this.value);
  }
}
