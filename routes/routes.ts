import { Router } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import * as filmController from "../controllers/film.controller.ts";
import * as acteurController from "../controllers/acteur.controller.ts";

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

export const acteurRouter = new Router();
acteurRouter
  .get("/acteurs", acteurController.getAllActors)
  .get("/acteurs/:id", acteurController.getActorById)
  .get("/films/acteurs/:filmid", acteurController.getActorsByFilmID);

acteurRouter;