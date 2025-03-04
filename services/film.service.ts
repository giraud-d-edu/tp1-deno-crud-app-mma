import * as filmRepository from "../repositories/film.repository.ts";
import Film from "../models/film.model.ts";

export const getAllFilms = (): Promise<Film[]> => filmRepository.getAllFilms();
export const getFilmById = (id: string): Promise<Film> => {
  if (!id) {
    throw new Error("Invalid film id");
  }
  return filmRepository.getFilmById(id);
};
export const getFilmsByCategory = (category: string): Promise<Film[]> =>
  filmRepository.getFilmsByCategory(category);
export const getFilmActors = async (id: string): Promise<string[]> => {
  const film = await filmRepository.getFilmById(id);
  return film.actors.map((actor) => `Actor ${actor}`);
};
export const addFilm = (film: Film): Promise<boolean> =>
  filmRepository.addFilm(film);
export const updateFilm = (id: string, film: Film): Promise<boolean> =>
  filmRepository.updateFilm(id, film);
export const deleteFilm = (id: string): Promise<boolean> =>
  filmRepository.deleteFilm(id);
