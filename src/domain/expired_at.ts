import * as v from "@valibot/valibot";
import { ValueObject } from "~/core/mod.ts";

const ExpiredAtSchema = v.date();

type ExpiredAtInput = v.InferInput<typeof ExpiredAtSchema>;

function defaultExpiredAt() {
  return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
}

export class ExpiredAt extends ValueObject<"ExpiredAt", ExpiredAtInput> {
  static of(value: ExpiredAtInput = defaultExpiredAt()) {
    return new this(v.parse(ExpiredAtSchema, value));
  }

  expiresIn(): number {
    return Math.floor(this.value.getTime() - Date.now() / 1000);
  }
}
