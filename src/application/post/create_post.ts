import { Identify, IPostRepository, Post, Text } from "~/domain/mod.ts";

export interface CreatePostCommand {
  user_id: string;
  text: string;
}

export class CreatePost {
  constructor(private postRepository: IPostRepository) {}

  async execution(command: CreatePostCommand) {
    const userId = Identify.of(command.user_id);
    const text = Text.of(command.text);

    const post = Post.create({ userId, text });

    await this.postRepository.save(post);
  }
}
