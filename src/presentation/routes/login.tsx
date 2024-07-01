import { Hono } from "@hono/hono";
import { LoginPage } from "../pages/login_page.tsx";

export const login = new Hono();

login.get("/", (ctx) => ctx.html(<LoginPage />));

login.post("/", (ctx) => ctx.html(<LoginPage />));
