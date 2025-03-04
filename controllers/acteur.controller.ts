import { ActorDto, ActorDtoType } from "../dtos/actor.dto.ts";
import { statusCodeHandler } from "../errors/StatusCodeHandler.ts";
import * as acteurService from "../services/acteur.service.ts";
import * as filmService from "../services/film.service.ts";
import { RouterContext } from "https://deno.land/x/oak@v17.1.4/router.ts";

export const getAllActors = (ctx: RouterContext<"/acteurs">) => {
  try {
    ctx.response.body = acteurService.getAllActors();
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};
export const getActorById = (ctx: RouterContext<"/acteurs/:id">) => {
  try {
    const id = ctx.params.id;
    ctx.response.body = acteurService.getActorById(Number(id));
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const getActorsByFilmID = (
  ctx: RouterContext<"/acteurs/film/:filmid">
) => {
  try {
    const filmid = ctx.params.filmid;
    const film = filmService.getFilmById(Number(filmid));
    ctx.response.body = acteurService.getActorsByIds(
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
    const checkedActor: ActorDtoType = ActorDto.parse(actorParams);
    acteurService.addActor(checkedActor);
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
    acteurService.updateActor(Number(id), actorParams);
    ctx.response.body = `Acteur ${id} mis à jour`;
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const deleteActor = (ctx: RouterContext<"/acteurs/:id">) => {
  try {
    const id = ctx.params.id;
    acteurService.deleteActor(Number(id));
    ctx.response.body = `Acteur ${id} supprimé`;
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};
