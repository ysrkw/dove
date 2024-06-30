import { Hono } from "@hono/hono";

export const index = new Hono();

index.get("/", (ctx) => ctx.html(<h1>Hono!</h1>));
