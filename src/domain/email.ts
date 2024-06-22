import * as v from "@valibot/valibot";
import { ValueObject } from "~/core/value_object.ts";

const EmailSchema = v.pipe(
  v.string(),
  v.email(),
);

export class Email extends ValueObject<"Email", string> {
  static of(value: string) {
    return new this(v.parse(EmailSchema, value));
  }

  local() {
    return this.value.split("@")[0];
  }

  domain() {
    return this.value.split("@")[1];
  }
}
