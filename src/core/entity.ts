import { Identify } from "~/domain/identify.ts";

export interface IEntity<P extends unknown> {
  id: Identify;
  props: P;
  equals(entity: IEntity<P>): boolean;
}

export abstract class Entity<T extends string, P extends unknown>
  implements IEntity<P> {
  declare private __brand: T;

  constructor(
    public readonly props: P,
    public readonly id = Identify.of(),
  ) {}

  equals(entity: Entity<T, P>): boolean {
    return this.id.equals(entity.id);
  }
}
