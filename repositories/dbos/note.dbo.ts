import { ObjectId, WithId } from "../../deps.ts";
import Note from "../../models/note.model.ts";

export interface NoteDBO {
  id_film: string;
  username: string;
  note: number;
}

export const NoteDBOtoModel = (note: WithId<NoteDBO>): Note => {
  return {
    id: note._id.toString(),
    id_film: note.id_film,
    username: note.username,
    note: note.note,
  };
};

export const NoteModeltoDBO = (note: Note): WithId<NoteDBO> => {
  return {
    _id: new ObjectId(note.id),
    id_film: note.id_film,
    username: note.username,
    note: note.note,
  };
};
