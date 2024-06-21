export interface KvSession {
  id: string;
  user_id: string;
  expired_at: Date;
}

export function findAll(id: string): Deno.KvKey {
  return ["session", id];
}

export function findByPk(id: string): Deno.KvKey {
  return ["session", id];
}

export function findByUserId(user_id: string): Deno.KvKey {
  return ["session_by_user_id", user_id];
}
