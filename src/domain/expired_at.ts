import * as v from "@valibot/valibot";
import { ValueObject } from "~/core";

const ExpiredAtSchema = v.date();

type ExpiredAtInput = v.InferInput<typeof ExpiredAtSchema>;

function defaultExpiredAt() {
  return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
}

export class ExpiredAt extends ValueObject<"ExpiredAt", ExpiredAtInput> {
  static of(value: ExpiredAtInput = defaultExpiredAt()) {
    return new this(v.parse(ExpiredAtSchema, value));
  }

  expireIn() {
    const millisecond = this.value.getTime() - Date.now();
    const second = Math.round(millisecond / 1000);

    return Math.max(0, second);
  }
}
