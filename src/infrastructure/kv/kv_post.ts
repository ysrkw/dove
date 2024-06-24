export interface KvPost {
  id: string;
  user_id: string;
  text: string;
}

export function findAll(): Deno.KvKey {
  return ["post"];
}

export function findById(id: string): Deno.KvKey {
  return ["post", id];
}

export function findByUserId(user_id: string, id?: string): Deno.KvKey {
  return id ? ["post_by_user_id", user_id, id] : ["post_by_user_id", user_id];
}
