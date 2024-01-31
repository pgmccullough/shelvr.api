import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

export const rawBoards = router.get("/boards",(ctx: any) => {
  ctx.response.body = [1,2,4,3];
});