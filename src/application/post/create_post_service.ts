import { IPostRepository, Post, Text } from "~/domain/mod.ts";

export interface CreatePostCommand {
  text: string;
}

export class CreatePostService {
  constructor(private postRepository: IPostRepository) {}

  async execution(command: CreatePostCommand) {
    const text = Text.of(command.text);
    const post = Post.create({ text });

    await this.postRepository.save(post);
  }
}
