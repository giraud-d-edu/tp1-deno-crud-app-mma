import * as noteRepository from '../repositories/note.repository.ts';

export const getNoteById = (id: number) => {
    if (!id) {
        throw new Error("Invalid note id");
    }
    return noteRepository.getNoteById(id);
}

export const getNotesByFilmId = (id_film: number) => {
    if (!id_film) {
        throw new Error("Invalid film id");
    }
    return noteRepository.getNotesByFilmId(id_film);
}

export const getNotesByUserId = (id_user: number) => {
    if (!id_user) {
        throw new Error("Invalid user id");
    }
    return noteRepository.getNotesByUserId(id_user);
}

export const addNote = (note: any) => {
    if (!note) {
        throw new Error("Invalid note");
    }
    return noteRepository.addNote(note);
}

export const updateNote = (id: number, note: any) => {
    if (!id || !note) {
        throw new Error("Invalid note id or note");
    }
    return noteRepository.updateNote(id, note);
}

export const deleteNote = (id: number) => {
    if (!id) {
        throw new Error("Invalid note id");
    }
    return noteRepository
}