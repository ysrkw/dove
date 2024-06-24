import * as v from "@valibot/valibot";
import { ValueObject } from "~/core/mod.ts";

const BiographySchema = v.pipe(
  v.string(),
  v.minLength(0),
  v.maxLength(256),
);

type BiographyInput = v.InferInput<typeof BiographySchema>;

export class Biography extends ValueObject<"Biography", BiographyInput> {
  static of(value: BiographyInput) {
    return new this(v.parse(BiographySchema, value));
  }
}
