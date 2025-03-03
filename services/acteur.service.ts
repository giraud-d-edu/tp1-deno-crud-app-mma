import * as acteurRepository from '../repositories/acteur.repository.ts';
import Actor from '../models/actor.model.ts';

export const getAllActors: () => Actor[] = acteurRepository.getAllActors;

export const getActorById: (id: number) => Actor = acteurRepository.getActorById;

export const getActorsByIds: (ids: number[]) => Actor[] = acteurRepository.getActorsByIds;
