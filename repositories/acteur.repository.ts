import NotFoundError from "../errors/NotFound.error.ts";
import Actor from "../models/actor.model.ts";
import { actorCollection } from "../db/mongo.ts";
import { ActeurDBOToModel, ActeurModelToDBO } from "./dbos/acteur.dbo.ts";
import { ObjectId } from "../dep.ts";

export async function getAllActors(): Promise<Actor[]> {
  const allActors = await actorCollection.find().toArray();
  return allActors.map(ActeurDBOToModel);
}

export const getActorById: (id: string) => Promise<Actor> = async (id) => {
  const actorDBO = await actorCollection.findOne({ _id: new ObjectId(id) });
  if (!actorDBO) {
    throw new NotFoundError(`Actor with id ${id} not found`);
  }
  return ActeurDBOToModel(actorDBO);
};

export const getActorsByIds: (ids: string[]) => Promise<Actor[]> = async (
  ids
) => {
  const actorsDBO = await Promise.all(
    ids.map(async (id) => {
      const actorDBO = await actorCollection.findOne({ _id: new ObjectId(id) });
      if (!actorDBO) {
        throw new NotFoundError(`Actor with id ${id} not found`);
      }
      return actorDBO;
    })
  );
  return actorsDBO.map(ActeurDBOToModel);
};

export const addActor: (actor: Actor) => Promise<boolean> = async (
  actor
): Promise<boolean> => {
  const result = await actorCollection.insertOne(ActeurModelToDBO(actor));
  if (!result.acknowledged) {
    throw new Error("Actor not added");
  }
  return result.acknowledged;
};

export const updateActor: (
  id: string,
  actor: Actor
) => Promise<boolean> = async (id, actor) => {
  const result = await actorCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: ActeurModelToDBO(actor) }
  );
  if (!result.modifiedCount) {
    throw new NotFoundError(`Actor with id ${id} not found`);
  }
  return result.modifiedCount > 0;
};

export const deleteActor: (id: string) => Promise<boolean> = async (id) => {
  const result = await actorCollection.deleteOne({ _id: new ObjectId(id) });
  if (!result.deletedCount) {
    throw new NotFoundError(`Actor with id ${id} not found`);
  }
  return result.deletedCount > 0;
};
