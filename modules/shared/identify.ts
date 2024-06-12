import { decodeTime, ulid } from "@std/ulid";
import { ValueObject } from "./value_object.ts";

export class Identify extends ValueObject<"Identify", ReturnType<typeof ulid>> {
  static of(value = ulid()) {
    return new this(value);
  }

  createAt(): Date {
    return new Date(decodeTime(this.value));
  }
}
