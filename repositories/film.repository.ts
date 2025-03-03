import Film from "../models/film.model.ts";

const films: Film[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    category: ["Drama"],
    actorIds: [1, 2],
  },
  {
    id: 2,
    title: "The Godfather",
    category: ["Crime", "Drama"],
    actorIds: [1],
  },
  {
    id: 3,
    title: "The Dark Knight",
    category: ["Action", "Crime", "Drama"],
    actorIds: [2],
  },
];

export const getAllFilms = (): Film[] => films;
export const getFilmById = (id: number): Film => {
  const film = films.find((film) => film.id === id);
  if (!film) {
    throw new Error(`Film with id ${id} not found`);
  }
  return film;
};
export const getFilmsByCategory = (category: string): Film[] =>
  films.filter((film) => film.category.includes(category));
