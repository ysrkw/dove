import { delay } from "@std/async";
import { IPostRepository, Post } from "~/domain/mod.ts";

export class PostRepository implements IPostRepository {
  private id = new Map<string, Post>();

  async save(post: Post): Promise<void> {
    await delay(0);

    this.id.set(post.id.value, post);
  }
}
