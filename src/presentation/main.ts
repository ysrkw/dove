import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";

const app = new Hono();

app.use(cors());
app.use(logger());

app.get("/", (c) => c.text("Hono!"));

Deno.serve(app.fetch);
