import * as acteurRepository from "../repositories/acteur.repository.ts";
import Actor from "../models/actor.model.ts";

export const getAllActors: () => Promise<Actor[]> =
  acteurRepository.getAllActors;

export const getActorById: (id: string) => Promise<Actor> =
  acteurRepository.getActorById;

export const getActorsByIds: (ids: string[]) => Promise<Actor[]> =
  acteurRepository.getActorsByIds;

export const addActor: (actor: Actor) => Promise<boolean> =
  acteurRepository.addActor;

export const updateActor: (id: string, actor: Actor) => Promise<boolean> =
  acteurRepository.updateActor;

export const deleteActor: (id: string) => Promise<boolean> =
  acteurRepository.deleteActor;
