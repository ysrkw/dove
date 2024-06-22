import * as v from "@valibot/valibot";
import { decodeTime, ulid } from "@std/ulid";
import { ValueObject } from "~/core/value_object.ts";

const IdentifySchema = v.pipe(v.string(), v.ulid());

export class Identify extends ValueObject<"Identify", ReturnType<typeof ulid>> {
  static of(value = ulid()) {
    return new this(v.parse(IdentifySchema, value));
  }

  createAt(): Date {
    return new Date(decodeTime(this.value));
  }
}
