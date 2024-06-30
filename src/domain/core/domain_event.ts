import { Identify } from "~/domain";

export interface IDomainEvent<Payload extends unknown> {
  id: Identify;
  payload: Payload;
}

export abstract class DomainEvent<Brand extends string, Payload extends unknown>
  implements IDomainEvent<Payload> {
  declare private __brand: Brand;
  public readonly id = Identify.of();

  public constructor(public readonly payload: Payload) {}
}
