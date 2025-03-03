import { Router, Application } from "https://deno.land/x/oak@v17.1.4/mod.ts";
const app = new Application();
const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello World!";
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server started on http://localhost:8000");
await app.listen({ port: 8000 });