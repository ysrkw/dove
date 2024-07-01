import { Hono } from "@hono/hono";
import { IndexPage } from "../pages/index_page.tsx";

export function createRouteIndex() {
  const index = new Hono();

  index.get("/", (ctx) => ctx.html(<IndexPage />));

  return index;
}
