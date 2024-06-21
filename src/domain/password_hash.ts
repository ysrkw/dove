import { verify } from "@denorg/scrypt";
import { ValueObject } from "~/core/value_object.ts";

export class PasswordHash extends ValueObject<"PasswordHash", string> {
  static of(value: string) {
    return new this(value);
  }

  verify(password: string): boolean {
    return verify(password, this.value);
  }
}
