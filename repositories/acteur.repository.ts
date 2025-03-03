import Actor from '../models/actor.model';
const actors: Actor[] = 
[{id: 1, firstname: 'Tom', lastname: 'Hanks' }, { id: 2, firstname: 'Julia', lastname: 'Roberts' }];

export const getAllActors : () => Actor[] = () => {
    return actors;
}
export const getActorById : (id: number) => Actor = (id) => {
    const actor = actors.find((actor) => actor.id === id);
    if (!actor) {
        throw new Error(`Actor with id ${id} not found`);
    }
    return actor;
}

export const getActorsByIds : (ids: number[]) => Actor[] = (ids) => {
    return ids.map(id => actors.find(actor => actor.id === id)).filter(actor => actor !== undefined) as Actor[];
}

