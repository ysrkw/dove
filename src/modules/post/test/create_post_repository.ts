import { PostRepository } from "~/modules/post/infrastructure/post_repository.ts";

export function createPostRepository() {
  const postRepository = new PostRepository();

  return postRepository;
}
