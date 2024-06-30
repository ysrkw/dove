import { app } from "~/presentation";

Deno.serve(app.fetch);

const kv = await Deno.openKv(":memory:");

await kv.listenQueue(console.log);
