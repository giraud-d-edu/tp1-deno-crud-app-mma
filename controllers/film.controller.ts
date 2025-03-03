import { RouterContext } from "https://deno.land/x/oak@v17.1.4/router.ts";
import * as filmService from "../services/film.service.ts";
import { statusCodeHandler } from "../errors/StatusCodeHandler.ts";

export const getAllFilms = (ctx: RouterContext<"/films">) => {
  try {
    ctx.response.body = filmService.getAllFilms();
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};
export const getFilmById = (ctx: RouterContext<"/films/:id">) => {
  try {
    const id = ctx.params.id;
    ctx.response.body = filmService.getFilmById(Number(id));
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};
export const getFilmsByCategory = (
  ctx: RouterContext<"/films/category/:category">
) => {
  try {
    const category = ctx.params.category;
    ctx.response.body = filmService.getFilmsByCategory(category);
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const addFilm = async (ctx: RouterContext<"/films">) => {
  try {
    const film = await ctx.request.body.json();
    filmService.addFilm(film);
    ctx.response.body = "Film ajouté";
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const updateFilm = async (ctx: RouterContext<"/films/:id">) => {
  try {
    const id = ctx.params.id;
    const film = await ctx.request.body.json();
    filmService.updateFilm(Number(id), film);
    ctx.response.body = `Film ${id} mis à jour`;
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const deleteFilm = (ctx: RouterContext<"/films/:id">) => {
  try {
    const id = ctx.params.id;
    filmService.deleteFilm(Number(id));
    ctx.response.body = `Film ${id} supprimé`;
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};
