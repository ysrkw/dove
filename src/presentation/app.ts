import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
import { secureHeaders } from "@hono/hono/secure-headers";
import { createRouteIndex } from "./routes/index.tsx";
import { createRouteLogin } from "./routes/login.tsx";
import { createRouteRegister } from "./routes/register.tsx";

export function createApp() {
  const app = new Hono<{ Variables: { kv: Deno.Kv } }>();

  app.use(cors());
  app.use(logger());
  app.use(secureHeaders());

  app.use(async (ctx, next) => {
    const kv = await Deno.openKv(":memory:");

    ctx.set("kv", kv);

    await next();

    kv.close();
  });

  app.route("/", createRouteIndex());
  app.route("/login", createRouteLogin());
  app.route("/register", createRouteRegister());

  return app;
}
