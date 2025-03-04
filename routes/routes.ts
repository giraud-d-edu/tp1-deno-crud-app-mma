import { Router } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import * as filmController from "../controllers/film.controller.ts";
import * as acteurController from "../controllers/acteur.controller.ts";
import * as noteController from "../controllers/note.controller.ts";
import { adminRoute, authenticatedRoute } from "../middleware.ts";

export const pingRouter = new Router();

pingRouter.get("/", (ctx) => {
  ctx.response.body = "Bienvenue sur l'API de MMA";
});

export const filmRouter = new Router();
filmRouter
  .get("/films", filmController.getAllFilms)
  .get("/films/:id", filmController.getFilmById)
  .get("/films/category/:category", filmController.getFilmsByCategory)
  .post("/films", adminRoute, filmController.addFilm)
  .put("/films/:id", adminRoute, filmController.updateFilm)
  .delete("/films/:id", adminRoute, filmController.deleteFilm);

export const acteurRouter = new Router();
acteurRouter
  .get("/acteurs", acteurController.getAllActors)
  .get("/acteurs/:id", acteurController.getActorById)
  .get("/acteurs/film/:filmid", acteurController.getActorsByFilmID)
  .post("/acteurs", adminRoute, acteurController.addActor)
  .put("/acteurs/:id", adminRoute, acteurController.updateActor)
  .delete("/acteurs/:id", adminRoute, acteurController.deleteActor);

export const noteRouter = new Router();
noteRouter
  .get("/note/:id", noteController.getNoteById)
  .get("/note/film/:id", noteController.getNotesByFilmId)
  .get("/note/user", authenticatedRoute, noteController.getNotesByUserId)
  .post("/note", authenticatedRoute, noteController.addNote)
  .put("/note/:id", authenticatedRoute, noteController.updateNote)
  .delete("/note/:id", authenticatedRoute, noteController.deleteNote);
