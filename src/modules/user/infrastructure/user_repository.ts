import { Identify } from "~/domain/identify.ts";
import { Email } from "~/domain/email.ts";
import { Name } from "~/domain/name.ts";
import { PasswordHash } from "~/domain/password_hash.ts";
import { Username } from "~/domain/username.ts";
import { Biography } from "~/domain/biography.ts";
import {
  findByEmail,
  findById,
  findByUsername,
  KvUser,
} from "~/infrastructure/kv/kv_user.ts";
import { IUserRepository } from "~/modules/user/domain/user_repository.ts";
import { User } from "~/modules/user/domain/user.ts";

export class UserRepository implements IUserRepository {
  constructor(private kv: Deno.Kv) {}

  async save(user: User) {
    const value: KvUser = {
      id: user.id.value,
      email: user.props.email.value,
      password_hash: user.props.passwordHash.value,
      name: user.props.name.value,
      username: user.props.username.value,
      biography: user.props.biography.value,
    };

    await this.kv
      .atomic()
      .check({ key: findById(value.id), versionstamp: null })
      .check({ key: findByEmail(value.email), versionstamp: null })
      .check({ key: findByUsername(value.username), versionstamp: null })
      .set(findById(value.id), value)
      .set(findByEmail(value.email), value)
      .set(findByUsername(value.username), value)
      .enqueue(user.domainEvents)
      .commit();
  }

  async findById(id: Identify) {
    const entry = await this.kv.get<KvUser>(findById(id.value));

    return entry.value ? this.factory(entry.value) : entry.value;
  }

  async findByEmail(email: Email) {
    const entry = await this.kv.get<KvUser>(findByEmail(email.value));

    return entry.value ? this.factory(entry.value) : entry.value;
  }

  async findByUsername(username: Username) {
    const entry = await this.kv.get<KvUser>(findByUsername(username.value));

    return entry.value ? this.factory(entry.value) : entry.value;
  }

  private factory(user: KvUser): User {
    return User.create({
      email: Email.of(user.email),
      passwordHash: PasswordHash.of(user.password_hash),
      name: Name.of(user.name),
      username: Username.of(user.username),
      biography: Biography.of(user.biography),
    }, Identify.of(user.id));
  }
}
