import Note from "../models/note.model.ts";

const notes: Note[] = [
    {
        id: 1,
        id_film: 1,
        id_user: 1,
        note: 5,
    },
    {
        id: 2,
        id_film: 2,
        id_user: 1,
        note: 4,
    },
    {
        id: 3,
        id_film: 3,
        id_user: 1,
        note: 3,
    },
]

export const getNoteById = (id: number) => {
    return notes.find(note => note.id === id);
};

export const getNotesByFilmId = (id_film: number) => {
    return notes.filter(note => note.id_film === id_film);
};

export const getNotesByUserId = (id_user: number) => {
    return notes.filter(note => note.id_user === id_user);
};

export const addNote = (note: Note) => {
    note.id = notes.reduce((max, note) => (note.id > max ? note.id : max), 0) + 1;
    notes.push(note);
    return true;
};

export const updateNote = (id: number, note: Note) => {
    const index = notes.findIndex(note => note.id === id);
    if (index === -1) {
        return false;
    }
    notes[index] = note;
    return true;
};

export const deleteNote = (id: number) => {
    const index = notes.findIndex(note => note.id === id);
    if (index === -1) {
        return false;
    }
    notes.splice(index, 1);
    return true;
};