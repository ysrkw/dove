import * as v from "@valibot/valibot";
import { decodeTime, ulid } from "@std/ulid";
import { ValueObject } from "~/core";

const IdentifySchema = v.pipe(
  v.string(),
  v.ulid(),
);

type IdentifyInput = v.InferInput<typeof IdentifySchema>;

function defaultIdentify() {
  return ulid();
}

export class Identify extends ValueObject<"Identify", IdentifyInput> {
  static of(value: IdentifyInput = defaultIdentify()) {
    return new this(v.parse(IdentifySchema, value));
  }

  createAt(): Date {
    return new Date(decodeTime(this.value));
  }
}
