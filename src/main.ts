import { app } from "./presentation/mod.ts";

Deno.serve(app.fetch);

const kv = await Deno.openKv(":memory:");

await kv.listenQueue(console.log);
