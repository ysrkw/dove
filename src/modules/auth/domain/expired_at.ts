import * as v from "@valibot/valibot";
import { ValueObject } from "~/core/value_object.ts";

const ExpiredAtSchema = v.date();

export class ExpiredAt extends ValueObject<"ExpiredAt", Date> {
  static of(value = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)) {
    return new this(v.parse(ExpiredAtSchema, value));
  }

  expiresIn(): number {
    return Math.floor(this.value.getTime() - Date.now() / 1000);
  }
}
