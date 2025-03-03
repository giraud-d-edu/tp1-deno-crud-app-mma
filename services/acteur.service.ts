import * as acteurRepository from "../repositories/acteur.repository.ts";
import Actor from "../models/actor.model.ts";

export const getAllActors: () => Actor[] = acteurRepository.getAllActors;

export const getActorById: (id: number) => Actor =
  acteurRepository.getActorById;

export const getActorsByIds: (ids: number[]) => Actor[] =
  acteurRepository.getActorsByIds;

export const addActor: (actor: Actor) => boolean = acteurRepository.addActor;

export const updateActor: (id: number, actor: Actor) => boolean =
  acteurRepository.updateActor;

export const deleteActor: (id: number) => boolean =
  acteurRepository.deleteActor;
