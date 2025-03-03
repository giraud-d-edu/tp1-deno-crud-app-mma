import { Router, Application } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import authenticatedRoute from "./middleware.ts";
const app = new Application();
const router = new Router();

router.get("/", authenticatedRoute, (ctx) => {
    ctx.response.body = "Hello World!";
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server started on http://localhost:8000");
await app.listen({ port: 8000 });