import { ValueObject } from "../../../core/value_object.ts";

export class Text extends ValueObject<"Text", string> {
  static of(value: string) {
    return new this(value);
  }
}
