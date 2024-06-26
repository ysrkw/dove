import { ExpiredAt, Identify, ISessionRepository, Session } from "~/domain";
import {
  fallbackEvent,
  findById,
  findByUserId,
  KvSession,
} from "./kv/kv_session.ts";

export class SessionRepository implements ISessionRepository {
  constructor(private kv: Deno.Kv) {}

  async save(session: Session) {
    const value: KvSession = {
      id: session.id.value,
      user_id: session.props.userId.value,
      expired_at: session.props.expiredAt.value,
    };

    const expireIn = session.props.expiredAt.expireIn();

    const result = await this.kv
      .atomic()
      .check({ key: findById(value.id), versionstamp: null })
      .check({ key: findByUserId(value.user_id, value.id), versionstamp: null })
      .set(findById(value.id), value, { expireIn })
      .set(findByUserId(value.user_id, value.id), value, { expireIn })
      .commit();

    if (result.ok) {
      await this.kv.enqueue(session.domainEvents, {
        delay: 1000,
        keysIfUndelivered: fallbackEvent(value.id),
        backoffSchedule: [3000, 5000],
      });
    }
  }

  async findById(id: Identify) {
    const entry = await this.kv.get<KvSession>(findById(id.value));

    return entry.value ? this.factory(entry.value) : entry.value;
  }

  async findByUserId(userId: Identify) {
    const iterator = this.kv.list<KvSession>({
      prefix: findByUserId(userId.value),
    });

    const posts: Session[] = [];

    for await (const { value } of iterator) {
      posts.push(this.factory(value));
    }

    return posts;
  }

  private factory(session: KvSession): Session {
    return Session.create({
      userId: Identify.of(session.user_id),
      expiredAt: ExpiredAt.of(session.expired_at),
    }, Identify.of(session.id));
  }
}
