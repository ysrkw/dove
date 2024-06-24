import { Post } from "~/domain/mod.ts";

export interface IPostRepository {
  save(post: Post): Promise<void>;
}
