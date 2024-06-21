import { delay } from "@std/async";
import { Post } from "~/modules/post/domain/post.ts";
import { IPostRepository } from "~/modules/post/domain/post_repository.ts";

export class PostRepository implements IPostRepository {
  private id = new Map<string, Post>();

  async save(post: Post): Promise<void> {
    await delay(0);

    this.id.set(post.id.value, post);
  }
}
