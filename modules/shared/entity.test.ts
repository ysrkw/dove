import { assertInstanceOf } from "@std/assert";
import { Entity } from "./entity.ts";

interface UserProps {
  name: string;
}

class User extends Entity<"User", UserProps> {}

Deno.test(function createEntity() {
  const instance = new User({ name: "john doe" });

  assertInstanceOf(instance, User);
});
