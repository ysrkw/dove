import { Identify } from "~/domain";

export interface IEntity<Props extends unknown> {
  id: Identify;
  props: Props;
  equals(entity: IEntity<Props>): boolean;
}

export abstract class Entity<Brand extends string, Props extends unknown>
  implements IEntity<Props> {
  declare private __brand: Brand;

  protected constructor(
    public readonly props: Props,
    public readonly id = Identify.of(),
  ) {}

  equals(entity: Entity<Brand, Props>): boolean {
    return this.id.equals(entity.id);
  }
}
