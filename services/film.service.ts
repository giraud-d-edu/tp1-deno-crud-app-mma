import * as filmRepository from "../repositories/film.repository.ts";
import Film from "../models/film.model.ts";

export const getAllFilms = () => filmRepository.getAllFilms();
export const getFilmById = (id: string) => {
  if (!id) {
    throw new Error("Invalid film id");
  }
  return filmRepository.getFilmById(id);
};
export const getFilmsByCategory = (category: string) =>
  filmRepository.getFilmsByCategory(category);
export const getFilmActors = async (id: string) => {
  const film = await filmRepository.getFilmById(id);
  return film.actors.map((actor) => `Actor ${actor}`);
};
export const addFilm = (film: Film) => filmRepository.addFilm(film);
export const updateFilm = (id: string, film: Film) =>
  filmRepository.updateFilm(id, film);
export const deleteFilm = (id: string) => filmRepository.deleteFilm(id);
