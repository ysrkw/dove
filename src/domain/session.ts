import { AggregateRoot } from "~/core/mod.ts";
import { ExpiredAt, Identify } from "~/domain/mod.ts";

interface SessionProps {
  userId: Identify;
  expiredAt: ExpiredAt;
}

export class Session extends AggregateRoot<"Session", SessionProps> {
  static create(props: SessionProps, id = Identify.of()) {
    return new this(props, id);
  }
}
