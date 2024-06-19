import { Post } from "../domain/post.ts";
import { IPostRepository } from "../domain/post_repository.ts";
import { Text } from "../domain/text.ts";

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
