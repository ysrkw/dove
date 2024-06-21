import { ValueObject } from "~/core/value_object.ts";

export class ExpiredAt extends ValueObject<"ExpiredAt", Date> {
  static of(value = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)) {
    return new this(value);
  }

  expiresIn(): number {
    return Math.floor(this.value.getTime() - Date.now() / 1000);
  }
}
