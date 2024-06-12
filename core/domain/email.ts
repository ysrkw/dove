import { ValueObject } from "../value_object.ts";

export class Email extends ValueObject<"Email", string> {
  static of(value: string) {
    return new this(value);
  }

  local() {
    return this.value.split("@")[0];
  }

  domain() {
    return this.value.split("@")[1];
  }
}
