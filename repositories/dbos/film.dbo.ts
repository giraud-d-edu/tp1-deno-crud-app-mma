import { ObjectId, WithId } from "../../dep.ts";
import Film from "../../models/film.model.ts";

export interface FilmDBO {
  category: string[];
  title: string;
  actors: { id: string; role: string }[];
}

export const FilmDBOtoModel = (film: WithId<FilmDBO>): Film => {
  return {
    id: film._id.toString(),
    category: film.category,
    title: film.title,
    actors: film.actors,
  };
};

export const FilmModeltoDBO = (film: Film): WithId<FilmDBO> => {
  return {
    _id: new ObjectId(film.id),
    category: film.category,
    title: film.title,
    actors: film.actors,
  };
};
