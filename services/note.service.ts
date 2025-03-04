import BadRequestError from "../errors/BadRequest.error.ts";
import Note from "../models/note.model.ts";
import * as noteRepository from "../repositories/note.repository.ts";

export const getNoteById = (id: number) => {
  if (!id) {
    throw new BadRequestError("Invalid note id");
  }
  return noteRepository.getNoteById(id);
};

export const getNotesByFilmId = (id_film: number) => {
  if (!id_film) {
    throw new BadRequestError("Invalid film id");
  }
  return noteRepository.getNotesByFilmId(id_film);
};

export const getNotesByUserId = (username: string) => {
  if (!username) {
    throw new BadRequestError("Invalid username");
  }
  return noteRepository.getNotesByUserName(username);
};

export const addNote = (note: Note, username: string) => {
  if (!note) {
    throw new BadRequestError("Invalid note");
  }
  return noteRepository.addNote(note, username);
};

export const updateNote = (id: number, note: Note, username: string) => {
  if (!id || !note) {
    throw new BadRequestError("Invalid note id or note");
  }
  return noteRepository.updateNote(id, note, username);
};

export const deleteNote = (id: number) => {
  if (!id) {
    throw new BadRequestError("Invalid note id");
  }
  return noteRepository;
};
