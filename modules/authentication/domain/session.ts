import { Identify } from "../../../core/domain/identify.ts";
import { Entity } from "../../../core/entity.ts";
import { ExpiredAt } from "./expired_at.ts";

export interface SessionProps {
  expiredAt: ExpiredAt;
}

export class Session extends Entity<"Session", SessionProps> {
  static create(props: SessionProps, id = Identify.of()) {
    return new this(props, id);
  }
}
