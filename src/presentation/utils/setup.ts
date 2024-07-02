import { createMiddleware } from "@hono/hono/factory";
import { Env } from "../type.ts";

export const setup = createMiddleware<Env>(async (ctx, next) => {
  const kv = await Deno.openKv(":memory:");

  ctx.set("kv", kv);

  await next();

  kv.close();
});
