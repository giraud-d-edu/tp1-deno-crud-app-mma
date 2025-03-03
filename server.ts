import { Application } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import authenticatedRoute from "./middleware.ts";
import { filmRouter, pingRouter } from "./routes/routes.ts";
const app = new Application();

app.use(pingRouter.routes());
app.use(pingRouter.allowedMethods());
app.use(filmRouter.routes());
app.use(filmRouter.allowedMethods());

console.log("Server started on http://localhost:8000");
await app.listen({ port: 8000 });
