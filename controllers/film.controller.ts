import { RouterContext } from "https://deno.land/x/oak@v17.1.4/router.ts";
import * as filmService from "../services/film.service.ts";

export const getAllFilms = (ctx: RouterContext<"/films">) => {
  ctx.response.body = filmService.getAllFilms();
};
export const getFilmById = (ctx: RouterContext<"/films/:id">) => {
  const id = ctx.params.id;
  ctx.response.body = filmService.getFilmById(Number(id));
};
export const getFilmsByCategory = (ctx: RouterContext<"/films/:category">) => {
  const category = ctx.params.category;
  ctx.response.body = filmService.getFilmsByCategory(category);
};
