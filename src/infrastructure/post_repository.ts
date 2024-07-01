import { Identify, IPostRepository, Post, Text } from "~/domain";
import {
  fallbackEvent,
  findById,
  findByUserId,
  KvPost,
} from "./core/kv_post.ts";

export class PostRepository implements IPostRepository {
  constructor(private kv: Deno.Kv) {}

  async save(post: Post) {
    const value: KvPost = {
      id: post.id.value,
      user_id: post.props.userId.value,
      text: post.props.text.value,
    };

    const result = await this.kv
      .atomic()
      .check({ key: findById(value.id), versionstamp: null })
      .check({ key: findByUserId(value.user_id, value.id), versionstamp: null })
      .set(findById(value.id), value)
      .set(findByUserId(value.user_id, value.id), value)
      .commit();

    if (result.ok) {
      await this.kv.enqueue(post.domainEvents, {
        keysIfUndelivered: fallbackEvent(value.id),
      });
    }
  }

  async findById(id: Identify) {
    const entry = await this.kv.get<KvPost>(findById(id.value));

    return entry.value ? this.factory(entry.value) : entry.value;
  }

  async findByUserId(userId: Identify) {
    const iterator = this.kv.list<KvPost>({
      prefix: findByUserId(userId.value),
    });

    const posts: Post[] = [];

    for await (const { value } of iterator) {
      posts.push(this.factory(value));
    }

    return posts;
  }

  private factory(post: KvPost): Post {
    return Post.create({
      userId: Identify.of(post.user_id),
      text: Text.of(post.text),
    }, Identify.of(post.id));
  }
}
