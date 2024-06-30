import { Entity, IEntity } from "./entity.ts";
import { IDomainEvent } from "./domain_event.ts";

export interface IAggregateRoot<P extends unknown> extends IEntity<P> {
  domainEvents: IDomainEvent<unknown>[];
  addDomainEvent(domainEvent: IDomainEvent<unknown>): void;
  clearDomainEvents(): void;
}

export abstract class AggregateRoot<T extends string, P extends unknown>
  extends Entity<T, P>
  implements IAggregateRoot<P> {
  public readonly domainEvents: IDomainEvent<unknown>[] = [];

  addDomainEvent(domainEvent: IDomainEvent<unknown>): void {
    this.domainEvents.push(domainEvent);
  }

  clearDomainEvents(): void {
    this.domainEvents.length = 0;
  }
}
