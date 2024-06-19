import { PostRepository } from "../infrastructure/post_repository.ts";

export function createPostRepository() {
  const postRepository = new PostRepository();

  return postRepository;
}
