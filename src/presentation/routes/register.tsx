import { Hono } from "@hono/hono";
import { RegisterPage } from "../pages/register_page.tsx";

export function createRouteRegister() {
  const register = new Hono();

  register.get("/", (ctx) => ctx.html(<RegisterPage />));

  register.post("/", (ctx) => ctx.html(<RegisterPage />));

  return register;
}
