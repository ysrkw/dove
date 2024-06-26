import * as v from "@valibot/valibot";
import { ValueObject } from "~/core";

const TextSchema = v.pipe(
  v.string(),
  v.minLength(1),
  v.maxLength(256),
);

type TextInput = v.InferInput<typeof TextSchema>;

export class Text extends ValueObject<"Text", TextInput> {
  static of(value: TextInput) {
    return new this(v.parse(TextSchema, value));
  }

  hashtags() {
    const results = this.value.match(/#(\w{2,24})/g);

    return results ? Array.from(results) : [];
  }
}
