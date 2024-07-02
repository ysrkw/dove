import { Hono } from "@hono/hono";
import { vValidator } from "@hono/valibot-validator";
import * as v from "@valibot/valibot";
import { CreateUser } from "~/application";
import { EmailSchema, PasswordSchema, UsernameSchema } from "~/domain";
import { UserRepository } from "~/infrastructure";
import { RegisterPage } from "../pages/register_page.tsx";
import { Env } from "../type.ts";

export function createRouteRegister() {
  const register = new Hono<Env>();

  register.get("/", (ctx) => ctx.html(<RegisterPage />));

  const RegisterPostSchema = v.object({
    email: EmailSchema,
    password: PasswordSchema,
    username: UsernameSchema,
  });

  register.post("/", vValidator("form", RegisterPostSchema), async (ctx) => {
    const form = ctx.req.valid("form" as never);

    const userRepository = new UserRepository(ctx.var.kv);
    const createUser = new CreateUser(userRepository);

    await createUser.execution(form);

    return ctx.html(<RegisterPage />);
  });

  return register;
}
