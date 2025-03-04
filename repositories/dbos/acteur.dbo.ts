import { ObjectId } from 'https://deno.land/x/mongo@v0.34.0/mod.ts';
import Actor from '../../models/actor.model.ts';

export interface ActeurDBO {
    _id: ObjectId;
    lastname: string;
    firstname: string}

export const ActeurDBOToModel: (acteur : ActeurDBO) => Actor = (acteur) => {
    return {
        id: acteur._id.toString(),
        lastname: acteur.lastname,
        firstname: acteur.firstname
    }
}

export const ActeurModelToDBO: (acteur : Actor) => ActeurDBO = (acteur) => {
    return {
        _id: new ObjectId(acteur.id),
        lastname: acteur.lastname,
        firstname: acteur.firstname
    }
}