export interface KvSession {
  id: string;
  user_id: string;
  expired_at: Date;
}

export function findAll(): Deno.KvKey {
  return ["session"];
}

export function findById(id: string): Deno.KvKey {
  return ["session", id];
}

export function findByUserId(user_id: string, id?: string): Deno.KvKey {
  return id
    ? ["session_by_user_id", user_id, id]
    : ["session_by_user_id", user_id];
}
