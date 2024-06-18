import { Post } from "./post.ts";

export interface IPostRepository {
  save(post: Post): Promise<void>;
}
