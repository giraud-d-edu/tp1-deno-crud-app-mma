import { ObjectId } from "https://deno.land/x/mongo@v0.34.0/mod.ts";
import Note from "../../models/note.model.ts";

export interface NoteDBO {
  _id: ObjectId;
  id_film: string;
  username: string;
  note: number;
}

export const NoteDBOtoModel = (note: NoteDBO): Note => {
  return {
    id: note._id.toString(),
    id_film: note.id_film,
    username: note.username,
    note: note.note,
  };
};

export const NoteModeltoDBO = (note: Note): NoteDBO => {
  return {
    _id: new ObjectId(note.id),
    id_film: note.id_film,
    username: note.username,
    note: note.note,
  };
};
