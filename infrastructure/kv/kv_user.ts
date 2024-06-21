export interface KvUser {
  id: string;
  name: string;
  username: string;
  password_hash: string;
}

export function getKvUser(id: string): Deno.KvKey {
  return ["users", id];
}

export function getKvUserByUsername(username: string): Deno.KvKey {
  return ["users_by_username", username];
}
