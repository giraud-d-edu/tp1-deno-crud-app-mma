import { RouterContext } from "../deps.ts";
import { statusCodeHandler } from "../errors/StatusCodeHandler.ts";
import * as acteurService from "../services/acteur.service.ts";
import * as filmService from "../services/film.service.ts";

export const getAllActors = async (ctx: RouterContext<"/acteurs">) => {
  try {
    ctx.response.body = await acteurService.getAllActors();
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};
export const getActorById = async (ctx: RouterContext<"/acteurs/:id">) => {
  try {
    const id = ctx.params.id;
    ctx.response.body = await acteurService.getActorById(id);
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const getActorsByFilmID = async (
  ctx: RouterContext<"/acteurs/film/:filmid">
) => {
  try {
    const filmid = ctx.params.filmid;
    const film = await filmService.getFilmById(filmid);
    ctx.response.body = await acteurService.getActorsByIds(
      film.actors.map((actor) => actor.id)
    );
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const addActor = async (ctx: RouterContext<"/acteurs">) => {
  try {
    const actorParams = await ctx.request.body.json();
    await acteurService.addActor(actorParams);
    ctx.response.body = "Acteur ajouté";
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const updateActor = async (ctx: RouterContext<"/acteurs/:id">) => {
  try {
    const id = ctx.params.id;
    const actorParams = await ctx.request.body.json();
    await acteurService.updateActor(id, actorParams);
    ctx.response.body = `Acteur ${id} mis à jour`;
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const deleteActor = async (ctx: RouterContext<"/acteurs/:id">) => {
  try {
    const id = ctx.params.id;
    await acteurService.deleteActor(id);
    ctx.response.body = `Acteur ${id} supprimé`;
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};
