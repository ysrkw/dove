export interface KvPost {
  id: string;
  user_id: string;
  text: string;
}

export function findAll(): Deno.KvKey {
  return ["post"];
}

export function findByPk(id: string): Deno.KvKey {
  return ["post", id];
}

export function findByUserId(user_id: string): Deno.KvKey {
  return ["post_by_user_id", user_id];
}
