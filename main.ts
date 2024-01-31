import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { rawBoards } from "./routes/boards.ts";

const router = new Router();

const app = new Application();

app.use(rawBoards.routes());

await app.listen({ port: 8000 });