import { Identify } from "./domain/identify.ts";

export interface IDomainEvent<P> {
  id: Identify;
  payload: P;
}

export abstract class DomainEvent<T, P> implements IDomainEvent<P> {
  declare private __brand: T;

  constructor(
    public readonly payload: P,
    public readonly id = Identify.of(),
  ) {}
}
