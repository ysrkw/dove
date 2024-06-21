export interface KvUser {
  id: string;
  name: string;
  username: string;
  password_hash: string;
}

export function findAll(): Deno.KvKey {
  return ["user"];
}

export function findByPk(id: string): Deno.KvKey {
  return ["user", id];
}

export function findByUsername(username: string): Deno.KvKey {
  return ["user_by_username", username];
}
