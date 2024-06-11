import { equal } from "@std/assert";

export interface IValueObject<V> {
  value: V;
  equals(vo: IValueObject<V>): boolean;
}

export abstract class ValueObject<T, V> implements IValueObject<V> {
  declare private __brand: T;

  constructor(public readonly value: V) {}

  equals(vo: ValueObject<T, V>): boolean {
    return equal(this.value, vo.value);
  }
}
