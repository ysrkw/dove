import { Identify } from "./identify.ts";

export interface IDomainEvent<E> {
  id: Identify;
  props: E;
}

export abstract class DomainEvent<T, P> implements IDomainEvent<P> {
  declare private __brand: T;

  constructor(
    public readonly props: P,
    public readonly id = Identify.of(),
  ) {}
}
