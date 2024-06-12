import { ValueObject } from "../value_object.ts";

export class Username extends ValueObject<"Username", string> {
  static of(value: string) {
    return new this(value);
  }

  initial() {
    return this.value.slice(0, 1).toUpperCase();
  }
}
