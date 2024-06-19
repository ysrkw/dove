import { assertStrictEquals } from "@std/assert";
import { CreatePostCommand, CreatePostService } from "./create_post_service.ts";
import { createPostRepository } from "../test/create_post_repository.ts";

const postRepository = createPostRepository();
const createPost = new CreatePostService(postRepository);

Deno.test(async function isCreatedPost() {
  const input: Required<CreatePostCommand> = {
    text: "Hello World",
  };

  const result = await createPost.execution(input);

  assertStrictEquals(result, void 0);
});
