import { Identify } from "./identify.ts";

export interface IEntity<P> {
  id: Identify;
  props: P;
  equals(entity: IEntity<P>): boolean;
}

export abstract class Entity<T, P> implements IEntity<P> {
  declare private __brand: T;

  constructor(
    public readonly props: P,
    public readonly id = Identify.of(),
  ) {}

  equals(entity: Entity<T, P>): boolean {
    return this.id.equals(entity.id);
  }
}
