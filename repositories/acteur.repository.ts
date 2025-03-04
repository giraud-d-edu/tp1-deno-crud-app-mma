import NotFoundError from "../errors/NotFound.error.ts";
import Actor from "../models/actor.model.ts";
const actors: Actor[] = [
  { id: 1, firstname: "Tom", lastname: "Hanks" },
  { id: 2, firstname: "Julia", lastname: "Roberts" },
  { id: 3, firstname: "Leonardo", lastname: "DiCaprio" },
  { id: 4, firstname: "Morgan", lastname: "Freeman" },
  { id: 5, firstname: "Scarlett", lastname: "Johansson" },
  { id: 6, firstname: "Brad", lastname: "Pitt" },
  { id: 7, firstname: "Angelina", lastname: "Jolie" },
  { id: 8, firstname: "Johnny", lastname: "Depp" },
  { id: 9, firstname: "Meryl", lastname: "Streep" },
  { id: 10, firstname: "Robert", lastname: "Downey Jr." },
];

export const getAllActors: () => Actor[] = () => {
  return actors;
};
export const getActorById: (id: number) => Actor = (id) => {
  const actor = actors.find((actor) => actor.id === id);
  if (!actor) {
    throw new NotFoundError(`Actor with id ${id} not found`);
  }
  return actor;
};

export const getActorsByIds: (ids: number[]) => Actor[] = (ids) => {
  return ids
    .map((id) => actors.find((actor) => actor.id === id))
    .filter((actor) => actor !== undefined) as Actor[];
};

export const addActor: (actor: Actor) => boolean = (actor): boolean => {
  const maxId = actors.reduce(
    (max, actor) => (actor.id > max ? actor.id : max),
    0
  );
  actor.id = maxId + 1;
  actors.push(actor);
  return true;
};

export const updateActor: (id: number, actor: Actor) => boolean = (
  id,
  actor
) => {
  actor.id = id;
  const index = actors.findIndex((actor) => actor.id === id);
  if (index === -1) {
    throw new NotFoundError(`Actor with id ${id} not found`);
  }
  actors[index] = actor;
  return true;
};

export const deleteActor: (id: number) => boolean = (id) => {
  const index = actors.findIndex((actor) => actor.id === id);
  if (index === -1) {
    throw new NotFoundError(`Actor with id ${id} not found`);
  }
  actors.splice(index, 1);
  return true;
};
