import { createApp } from "~/presentation";

const app = createApp();

Deno.serve(app.fetch);
