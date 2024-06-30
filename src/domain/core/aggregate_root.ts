import { Entity, IEntity } from "./entity.ts";
import { IDomainEvent } from "./domain_event.ts";

export interface IAggregateRoot<Props extends unknown> extends IEntity<Props> {
  domainEvents: IDomainEvent<unknown>[];
  addDomainEvent(domainEvent: IDomainEvent<unknown>): void;
  clearDomainEvents(): void;
}

export abstract class AggregateRoot<Brand extends string, Props extends unknown>
  extends Entity<Brand, Props>
  implements IAggregateRoot<Props> {
  public readonly domainEvents: IDomainEvent<unknown>[] = [];

  addDomainEvent(domainEvent: IDomainEvent<unknown>): void {
    this.domainEvents.push(domainEvent);
  }

  clearDomainEvents(): void {
    this.domainEvents.length = 0;
  }
}
