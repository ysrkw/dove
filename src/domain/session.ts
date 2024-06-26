import { AggregateRoot } from "~/core";
import { ExpiredAt, Identify } from "~/domain";

interface SessionProps {
  userId: Identify;
  expiredAt: ExpiredAt;
}

export class Session extends AggregateRoot<"Session", SessionProps> {
  static create(props: SessionProps, id = Identify.of()) {
    return new this(props, id);
  }

  isValid() {
    return this.props.expiredAt.expireIn() > 0;
  }
}
