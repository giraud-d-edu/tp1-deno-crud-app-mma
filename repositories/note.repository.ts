import { trace } from "node:console";
import { noteCollection } from "../db/mongo.ts";
import { ObjectId } from "../deps.ts";
import NotFoundError from "../errors/NotFound.error.ts";
import Note from "../models/note.model.ts";
import { NoteDBOtoModel } from "./dbos/note.dbo.ts";

export const getNoteById = async (id: string): Promise<Note> => {
  const note = await noteCollection.findOne({ _id: new ObjectId(id) });
  if (!note) {
    throw new NotFoundError(`Note with id ${id} not found`);
  }
  return NoteDBOtoModel(note);
};

export const getNotesByFilmId = async (id_film: string): Promise<Note[]> => {
  const notes = await noteCollection.find({ id_film: id_film }).toArray();
  return notes.map(NoteDBOtoModel);
};

export const getNotesByUserName = async (username: string): Promise<Note[]> => {
  const notes = await noteCollection.find({ user: username }).toArray();
  trace(notes);
  return notes.map(NoteDBOtoModel);
};

export const addNote = async (note: Note): Promise<boolean> => {
  const result = await noteCollection.insertOne(note);
  if (!result.acknowledged) {
    throw new Error("Note not added");
  }
  return result.acknowledged;
};

export const updateNote = async (id: string, note: Note): Promise<boolean> => {
  const result = await noteCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: note }
  );
  if (!result.modifiedCount) {
    throw new NotFoundError(`Note with id ${id} not found`);
  }
  return result.modifiedCount > 0;
};

export const deleteNote = async (id: string): Promise<boolean> => {
  const result = await noteCollection.deleteOne({ _id: new ObjectId(id) });
  if (!result.deletedCount) {
    throw new NotFoundError(`Note with id ${id} not found`);
  }
  return result.deletedCount > 0;
};
