import { assertInstanceOf, assertStrictEquals } from "@std/assert";
import { PasswordHash } from "./password_hash.ts";

const SAMPLE =
  "c2NyeXB0ABEAAAAIAAAAAf/9gu2cCDC8q2k6iQ7bpbn2rUopnm9YWLJQ04/4v/Kil3GuizTs3+1wEyqcGLMD1f2S0XJrNd29Uy4gdGif2Dh7BNO3UtpI1fFK/v4yadZd";

Deno.test(function of() {
  const passwordHash = PasswordHash.of(SAMPLE);

  assertInstanceOf(passwordHash, PasswordHash);
});

Deno.test(function verify() {
  const password = PasswordHash.of(SAMPLE);

  assertStrictEquals(password.verify("Password"), false);
  assertStrictEquals(password.verify("PassW0rd!"), true);
});
