import { assertStrictEquals } from "@std/assert";
import { Identify } from "~/domain/mod.ts";
import { PostRepository } from "~/infrastructure/mod.ts";
import { CreatePost, CreatePostCommand } from "./create_post.ts";

Deno.test(async function isCreatedPost() {
  const kv = await Deno.openKv(":memory:");

  const postRepository = new PostRepository(kv);
  const createPost = new CreatePost(postRepository);
  const userId = Identify.of();

  const input: Required<CreatePostCommand> = {
    user_id: userId.value,
    text: "Hello World",
  };

  const result = await createPost.execution(input);

  assertStrictEquals(result, void 0);

  kv.close();
});
