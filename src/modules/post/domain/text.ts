import * as v from "@valibot/valibot";
import { ValueObject } from "~/core/value_object.ts";

const TextSchema = v.pipe(
  v.string(),
  v.minLength(1),
  v.maxLength(256),
);

export class Text extends ValueObject<"Text", string> {
  static of(value: string) {
    return new this(v.parse(TextSchema, value));
  }
}
