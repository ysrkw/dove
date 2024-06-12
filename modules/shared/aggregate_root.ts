import { IDomainEvent } from "./domain_event.ts";
import { IEntity } from "./entity.ts";
import { Identify } from "./identify.ts";

export interface IAggregateRoot<P> extends IEntity<P> {
  domainEvents: IDomainEvent<unknown>[];
  addDomainEvent(domainEvent: IDomainEvent<unknown>): void;
  clearDomainEvents(): void;
}

export abstract class AggregateRoot<T, P> implements IAggregateRoot<P> {
  declare private __brand: T;
  public readonly domainEvents: IDomainEvent<unknown>[] = [];

  constructor(
    public readonly props: P,
    public readonly id = Identify.of(),
  ) {}

  equals(entity: AggregateRoot<T, P>): boolean {
    return this.id.equals(entity.id);
  }

  addDomainEvent(domainEvent: IDomainEvent<unknown>): void {
    this.domainEvents.push(domainEvent);
  }

  clearDomainEvents(): void {
    this.domainEvents.length = 0;
  }
}
