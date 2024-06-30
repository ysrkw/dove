import { equal } from "@std/assert";

export interface IValueObject<Value extends unknown> {
  value: Value;
  equals(vo: IValueObject<Value>): boolean;
}

export abstract class ValueObject<Brand extends string, Value extends unknown>
  implements IValueObject<Value> {
  declare private __brand: Brand;

  protected constructor(public readonly value: Value) {}

  equals(vo: ValueObject<Brand, Value>): boolean {
    return equal(this.value, vo.value);
  }
}
