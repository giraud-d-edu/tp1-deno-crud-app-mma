import * as filmRepository from "../repositories/film.repository.ts";
import Film from "../models/film.model.ts";

export const getAllFilms = (): Film[] => filmRepository.getAllFilms();
export const getFilmById = (id: number): Film => {
  if (!id) {
    throw new Error("Invalid film id");
  }
  return filmRepository.getFilmById(id);
};
export const getFilmsByCategory = (category: string): Film[] =>
  filmRepository.getFilmsByCategory(category);
export const getFilmActors = (id: number): string[] => {
  const film = filmRepository.getFilmById(id);
  return film.actors.map((actor) => `Actor ${actor}`);
};
export const addFilm = (film: Film): boolean => filmRepository.addFilm(film);
export const updateFilm = (id: number, film: Film): boolean =>
  filmRepository.updateFilm(id, film);
export const deleteFilm = (id: number): boolean =>
  filmRepository.deleteFilm(id);
