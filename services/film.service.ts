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
  return film.actorIds.map((actorId) => `Actor ${actorId}`);
};
