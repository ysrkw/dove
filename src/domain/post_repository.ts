import { Identify, Post } from "~/domain/mod.ts";

export interface IPostRepository {
  save(post: Post): Promise<void>;
  findById(id: Identify): Promise<Post | null>;
  findByUserId(userId: Identify): Promise<Post[]>;
}
