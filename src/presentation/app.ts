import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
import { secureHeaders } from "@hono/hono/secure-headers";
import { createRouteIndex } from "./routes/index.tsx";
import { createRouteLogin } from "./routes/login.tsx";
import { createRouteRegister } from "./routes/register.tsx";
import { setup } from "./utils/setup.ts";
import { Env } from "./type.ts";

export function createApp() {
  const app = new Hono<Env>();

  app.use(cors());
  app.use(logger());
  app.use(secureHeaders());

  app.use(setup);

  app.route("/", createRouteIndex());
  app.route("/login", createRouteLogin());
  app.route("/register", createRouteRegister());

  return app;
}
