export interface KvSession {
  id: string;
  user_id: string;
  expired_at: Date;
}

export function getKvSession(id: string): Deno.KvKey {
  return ["session", id];
}

export function getKvSessionByUserId(user_id: string): Deno.KvKey {
  return ["session_by_user_id", user_id];
}
