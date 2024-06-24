import { AggregateRoot } from "~/core/mod.ts";
import { Identify, Text } from "~/domain/mod.ts";

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
