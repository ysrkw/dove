import { Entity } from "~/core/entity.ts";
import { Identify } from "~/domain/identify.ts";
import { ExpiredAt } from "~/modules/auth/domain/expired_at.ts";

interface SessionProps {
  expiredAt: ExpiredAt;
}

export class Session extends Entity<"Session", SessionProps> {
  static create(props: SessionProps, id = Identify.of()) {
    return new this(props, id);
  }
}
