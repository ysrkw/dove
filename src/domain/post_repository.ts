import { Identify, Post } from "~/domain";

export interface IPostRepository {
  save(post: Post): Promise<void>;
  findById(id: Identify): Promise<Post | null>;
  findByUserId(userId: Identify): Promise<Post[]>;
}
