import { hash } from "@denorg/scrypt";
import { ValueObject } from "../value_object.ts";

export class Password extends ValueObject<"Password", string> {
  static of(value: string) {
    return new this(value);
  }

  hash(): string {
    return hash(this.value);
  }
}
