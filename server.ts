import { Application } from "./deps.ts";
import {
  acteurRouter,
  filmRouter,
  noteRouter,
  pingRouter,
} from "./routes/routes.ts";
const app = new Application();

app.use(pingRouter.routes());
app.use(pingRouter.allowedMethods());
app.use(filmRouter.routes());
app.use(filmRouter.allowedMethods());
app.use(acteurRouter.routes());
app.use(acteurRouter.allowedMethods());
app.use(noteRouter.routes());
app.use(noteRouter.allowedMethods());

console.log("Server started on http://localhost:8000");
await app.listen({ port: 8000 });
