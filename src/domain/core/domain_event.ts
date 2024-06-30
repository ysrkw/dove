import { Identify } from "~/domain";

export interface IDomainEvent<P extends unknown> {
  id: Identify;
  payload: P;
}

export abstract class DomainEvent<T extends string, P extends unknown>
  implements IDomainEvent<P> {
  declare private __brand: T;
  public readonly id = Identify.of();

  public constructor(public readonly payload: P) {}
}
