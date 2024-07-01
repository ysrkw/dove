import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
import { secureHeaders } from "@hono/hono/secure-headers";
import { index } from "./routes/index.tsx";
import { login } from "./routes/login.tsx";

export const app = new Hono<{ Variables: { kv: Deno.Kv } }>();

app.use(cors());
app.use(logger());
app.use(secureHeaders());

app.use(async (ctx, next) => {
  const kv = await Deno.openKv(":memory:");

  ctx.set("kv", kv);

  await next();

  kv.close();
});

app.route("/", index);
app.route("/login", login);
