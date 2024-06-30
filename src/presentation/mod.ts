import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
import { secureHeaders } from "@hono/hono/secure-headers";
import { index } from "./routes/index.tsx";

export const app = new Hono();

app.use(cors());
app.use(logger());
app.use(secureHeaders());

app.route("/", index);
