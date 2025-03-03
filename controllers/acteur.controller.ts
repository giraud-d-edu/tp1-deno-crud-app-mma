import * as acteurService from '../services/acteur.service.ts';
import * as filmService from '../services/film.service.ts';
import { RouterContext } from "https://deno.land/x/oak@v17.1.4/router.ts";


export const getAllActors = (ctx: RouterContext<"/acteurs">) => {
  ctx.response.body = acteurService.getAllActors();
};
export const getActorById = (ctx: RouterContext<"/acteurs/:id">) => {    
  const id = ctx.params.id;
  ctx.response.body = acteurService.getActorById(Number(id));
};

export const getActorsByFilmID = (ctx: RouterContext<"/acteurs/:filmid">) => {  
  const filmid = ctx.params.filmid;
  const film = filmService.getFilmById(Number(filmid));
  ctx.response.body = acteurService.getActorsByIds(film.actorIds);
};