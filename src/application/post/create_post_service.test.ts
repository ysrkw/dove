import { assertStrictEquals } from "@std/assert";
import { PostRepository } from "~/infrastructure/mod.ts";
import { CreatePostCommand, CreatePostService } from "./create_post_service.ts";

Deno.test(async function isCreatedPost() {
  const postRepository = new PostRepository();
  const createPost = new CreatePostService(postRepository);

  const input: Required<CreatePostCommand> = {
    text: "Hello World",
  };

  const result = await createPost.execution(input);

  assertStrictEquals(result, void 0);
});
