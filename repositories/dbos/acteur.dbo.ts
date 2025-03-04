import { WithId } from "npm:mongodb@5.6.0";
import { ObjectId } from "../../dep.ts";
import Actor from "../../models/actor.model.ts";

export interface ActeurDBO {
  lastname: string;
  firstname: string;
}

export const ActeurDBOToModel: (acteur: WithId<ActeurDBO>) => Actor = (
  acteur
) => {
  return {
    id: acteur._id.toString(),
    lastname: acteur.lastname,
    firstname: acteur.firstname,
  };
};

export const ActeurModelToDBO: (acteur: Actor) => WithId<ActeurDBO> = (
  acteur
) => {
  return {
    _id: new ObjectId(acteur.id),
    lastname: acteur.lastname,
    firstname: acteur.firstname,
  };
};
