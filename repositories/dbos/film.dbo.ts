import { ObjectId } from "https://deno.land/x/mongo@v0.34.0/mod.ts";
import Film from "../../models/film.model.ts";

export interface FilmDBO {
  _id: ObjectId;
  category: string[];
  title: string;
  actors: { id: number; role: string }[];
}

export const FilmDBOtoModel = (film: FilmDBO): Film => {
  return {
    id: film._id.toString(),
    category: film.category,
    title: film.title,
    actors: film.actors,
  };
};

export const FilmModeltoDBO = (film: Film): FilmDBO => {
  return {
    _id: new ObjectId(film.id),
    category: film.category,
    title: film.title,
    actors: film.actors,
  };
};
