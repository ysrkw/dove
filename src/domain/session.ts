import { Entity } from "~/core/mod.ts";
import { ExpiredAt, Identify } from "~/domain/mod.ts";

interface SessionProps {
  expiredAt: ExpiredAt;
}

export class Session extends Entity<"Session", SessionProps> {
  static create(props: SessionProps, id = Identify.of()) {
    return new this(props, id);
  }
}
