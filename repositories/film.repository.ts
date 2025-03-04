import NotFoundError from "../errors/NotFound.error.ts";
import Film from "../models/film.model.ts";

const films: Film[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    category: ["Drama"],
    actors: [
      { id: 1, role: "Andy Dufresne" },
      { id: 4, role: "Ellis Boyd 'Red' Redding" },
    ],
  },
  {
    id: 2,
    title: "The Godfather",
    category: ["Crime", "Drama"],
    actors: [
      { id: 8, role: "Don Vito Corleone" },
      { id: 10, role: "Michael Corleone" },
    ],
  },
  {
    id: 3,
    title: "The Dark Knight",
    category: ["Action", "Crime", "Drama"],
    actors: [
      { id: 10, role: "Bruce Wayne / Batman" },
      { id: 3, role: "Joker" },
    ],
  },
  {
    id: 4,
    title: "12 Angry",
    category: ["Drama"],
    actors: [
      { id: 1, role: "Juror 8" },
      { id: 4, role: "Juror 9" },
    ],
  },
];

export const getAllFilms = (): Film[] => films;
export const getFilmById = (id: number): Film => {
  const film = films.find((film) => film.id === id);
  if (!film) {
    throw new NotFoundError(`Film with id ${id} not found`);
  }
  return film;
};
export const getFilmsByCategory = (category: string): Film[] =>
  films.filter((film) => film.category.includes(category));

export const addFilm = (film: Film): boolean => {
  film.id = films.reduce((max, film) => (film.id > max ? film.id : max), 0) + 1;
  films.push(film);
  return true;
};

export const updateFilm = (id: number, film: Film): boolean => {
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    throw new NotFoundError(`Film with id ${id} not found`);
  }
  film.id = id;
  films[index] = film;
  return true;
};

export const deleteFilm = (id: number): boolean => {
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    throw new NotFoundError(`Film with id ${id} not found`);
  }
  films.splice(index, 1);
  return true;
};
