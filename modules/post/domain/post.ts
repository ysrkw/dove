import { AggregateRoot } from "../../../core/aggregate_root.ts";
import { Identify } from "../../../core/domain/identify.ts";
import { Text } from "./text.ts";

interface PostProps {
  text: Text;
}

export class Post extends AggregateRoot<"Post", PostProps> {
  static create(props: PostProps, id = Identify.of()) {
    return new this(props, id);
  }

  changeText(text: Text) {
    this.props.text = text;
  }
}
