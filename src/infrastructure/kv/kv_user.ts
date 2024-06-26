export interface KvUser {
  id: string;
  email: string;
  password_hash: string;
  name: string;
  username: string;
  biography: string;
}

export function findById(id: string): Deno.KvKey {
  return ["user", id];
}

export function findByEmail(email: string): Deno.KvKey {
  return ["user_by_email", email];
}

export function findByUsername(username: string): Deno.KvKey {
  return ["user_by_username", username];
}

export function fallbackEvent(id: string): Deno.KvKey[] {
  return [["user_by_event", id, Date.now()]];
}
