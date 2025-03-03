import Film from "../models/film.model.ts";

const Films: Film[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    category: ["Drama"],
  },
  {
    id: 2,
    title: "The Godfather",
    category: ["Crime", "Drama"],
  },
  {
    id: 3,
    title: "The Dark Knight",
    category: ["Action", "Crime", "Drama"],
  },
];

export const getAllFilms = (): Film[] => Films;
export const getFilmById = (id: number): Film | undefined =>
  Films.find((film) => film.id === id);
export const getFilmsByCategory = (category: string): Film[] =>
  Films.filter((film) => film.category.includes(category));
