import * as v from "@valibot/valibot";
import { ValueObject } from "~/core";

const EmailSchema = v.pipe(
  v.string(),
  v.email(),
);

type EmailInput = v.InferInput<typeof EmailSchema>;

export class Email extends ValueObject<"Email", EmailInput> {
  static of(value: EmailInput) {
    return new this(v.parse(EmailSchema, value));
  }

  local() {
    return this.value.split("@")[0];
  }

  domain() {
    return this.value.split("@")[1];
  }
}
