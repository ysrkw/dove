import { equal } from "@std/assert";

export interface IValueObject<V extends unknown> {
  value: V;
  equals(vo: IValueObject<V>): boolean;
}

export abstract class ValueObject<T extends string, V extends unknown>
  implements IValueObject<V> {
  declare private __brand: T;

  protected constructor(public readonly value: V) {}

  equals(vo: ValueObject<T, V>): boolean {
    return equal(this.value, vo.value);
  }
}
