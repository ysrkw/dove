import { Post } from "~/modules/post/domain/post.ts";

export interface IPostRepository {
  save(post: Post): Promise<void>;
}
