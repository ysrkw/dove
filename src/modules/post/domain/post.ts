import { AggregateRoot } from "~/core/aggregate_root.ts";
import { Identify } from "~/domain/identify.ts";
import { Text } from "~/modules/post/domain/text.ts";

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
