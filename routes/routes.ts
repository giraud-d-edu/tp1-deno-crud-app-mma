import { Router } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import * as filmController from "../controllers/film.controller.ts";

export const pingRouter = new Router();

pingRouter.get("/", (ctx) => {
  ctx.response.body = "Bienvenue sur l'API de MMA";
});

export const filmRouter = new Router();
filmRouter
  .get("/films", filmController.getAllFilms)
  .get("/films/:id", filmController.getFilmById)
  .get("/films/:category", filmController.getFilmsByCategory);

filmRouter;
