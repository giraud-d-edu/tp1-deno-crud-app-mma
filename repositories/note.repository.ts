import NotFoundError from "../errors/NotFound.error.ts";
import Note from "../models/note.model.ts";

const notes: Note[] = [
  {
    id: 1,
    id_film: 1,
    username: "user1",
    note: 5,
  },
  {
    id: 2,
    id_film: 2,
    username: "user2",
    note: 4,
  },
  {
    id: 3,
    id_film: 3,
    username: "user3",
    note: 3,
  },
  {
    id: 4,
    id_film: 4,
    username: "user4",
    note: 2,
  },
  {
    id: 5,
    id_film: 2,
    username: "user5",
    note: 1,
  },
  {
    id: 6,
    id_film: 1,
    username: "user6",
    note: 5,
  },
];

export const getNoteById = (id: number): Note => {
  const note = notes.find((note) => note.id === id);
  if (!note) {
    throw new NotFoundError(`Note with id ${id} not found`);
  }
  return note;
};

export const getNotesByFilmId = (id_film: number): Note[] => {
  return notes.filter((note) => note.id_film === id_film);
};

export const getNotesByUserName = (username: string): Note[] => {
  return notes.filter((note) => note.username === username);
};

export const addNote = (note: Note): boolean => {
  note.id = notes.reduce((max, note) => (note.id > max ? note.id : max), 0) + 1;
  notes.push(note);
  return true;
};

export const updateNote = (id: number, note: Note): boolean => {
  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) {
    throw new NotFoundError(`Film with id ${id} not found`);
  }
  notes[index] = note;
  return true;
};

export const deleteNote = (id: number): boolean => {
  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) {
    throw new NotFoundError(`Film with id ${id} not found`);
  }
  notes.splice(index, 1);
  return true;
};
