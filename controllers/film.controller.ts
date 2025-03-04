import * as filmService from "../services/film.service.ts";
import { statusCodeHandler } from "../errors/StatusCodeHandler.ts";
import { RouterContext } from "../deps.ts";

export const getAllFilms = async (ctx: RouterContext<"/films">) => {
  try {
    ctx.response.body = await filmService.getAllFilms();
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};
export const getFilmById = async (ctx: RouterContext<"/films/:id">) => {
  try {
    const id = ctx.params.id;
    ctx.response.body = await filmService.getFilmById(id);
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};
export const getFilmsByCategory = async (
  ctx: RouterContext<"/films/category/:category">
) => {
  try {
    const category = ctx.params.category;
    ctx.response.body = await filmService.getFilmsByCategory(category);
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const addFilm = async (ctx: RouterContext<"/films">) => {
  try {
    const film = await ctx.request.body.json();
    //const checkedFilm: FilmDtoType = FilmDto.parse(film);
    await filmService.addFilm(film);
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
    //const checkedFilm: FilmDtoType = FilmDto.parse(film);
    await filmService.updateFilm(id, film);
    ctx.response.body = `Film ${id} mis à jour`;
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const deleteFilm = async (ctx: RouterContext<"/films/:id">) => {
  try {
    const id = ctx.params.id;
    await filmService.deleteFilm(id);
    ctx.response.body = `Film ${id} supprimé`;
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};
