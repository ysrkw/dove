import { Identify } from "./domain/identify.ts";

export interface IDomainEvent<P extends unknown> {
  id: Identify;
  payload: P;
}

export abstract class DomainEvent<T extends string, P extends unknown>
  implements IDomainEvent<P> {
  declare private __brand: T;

  constructor(
    public readonly payload: P,
    public readonly id = Identify.of(),
  ) {}
}
