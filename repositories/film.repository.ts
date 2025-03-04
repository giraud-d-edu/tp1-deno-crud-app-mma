import { filmCollection } from "../db/mongo.ts";
import { ObjectId } from "../dep.ts";
import NotFoundError from "../errors/NotFound.error.ts";
import Film from "../models/film.model.ts";
import { FilmDBOtoModel, FilmModeltoDBO } from "./dbos/film.dbo.ts";

export const getAllFilms = async (): Promise<Film[]> => {
  const films = await filmCollection.find().toArray();
  return films.map(FilmDBOtoModel);
};
export const getFilmById = async (id: string): Promise<Film> => {
  const film = await filmCollection.findOne({ _id: new ObjectId(id) });

  if (!film) {
    throw new NotFoundError(`Film with id ${id} not found`);
  }
  return FilmDBOtoModel(film);
};
export const getFilmsByCategory = async (category: string): Promise<Film[]> => {
  const films = await filmCollection
    .find({ category: { $in: [category] } })
    .toArray();
  return films.map(FilmDBOtoModel);
};

export const addFilm = async (film: Film): Promise<boolean> => {
  const result = await filmCollection.insertOne(FilmModeltoDBO(film));
  if (!result.acknowledged) {
    throw new Error("Film not added");
  }
  return result.acknowledged;
};

export const updateFilm = async (id: string, film: Film): Promise<boolean> => {
  const result = await filmCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: FilmModeltoDBO(film) }
  );
  if (!result.modifiedCount) {
    throw new NotFoundError(`Film with id ${id} not found`);
  }
  return result.modifiedCount > 0;
};

export const deleteFilm = async (id: string): Promise<boolean> => {
  const result = await filmCollection.deleteOne({ _id: new ObjectId(id) });
  if (!result.deletedCount) {
    throw new NotFoundError(`Film with id ${id} not found`);
  }
  return result.deletedCount > 0;
};
