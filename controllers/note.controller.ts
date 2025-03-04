import { RouterContext } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import * as noteService from "../services/note.service.ts";

export const getNoteById = (ctx: RouterContext<"/notes/:id">) => {
    const id = ctx.params.id;
    ctx.response.body = noteService.getNoteById(Number(id));
};

export const getNotesByFilmId = (ctx: RouterContext<"/notes/film/:id">) => {
    const id_film = ctx.params.id;
    ctx.response.body = noteService.getNotesByFilmId(Number(id_film));
};

export const getNotesByUserId = (ctx: RouterContext<"/notes/user/:id">) => {
    const id_user = ctx.params.id;
    ctx.response.body = noteService.getNotesByUserId(Number(id_user));
};

export const addNote = async (ctx: RouterContext) => {
    const note = await ctx.request.body();
    ctx.response.body = noteService.addNote(note);
};

export const updateNote = async (ctx: RouterContext<"/notes/:id">) => {
    const id = ctx.params.id;
    const note = await ctx.request.body();
    ctx.response.body = noteService.updateNote(Number(id), note);
};

export const deleteNote = (ctx: RouterContext<"/notes/:id">) => {
    const id = ctx.params.id;
    ctx.response.body = noteService.deleteNote(Number(id));
};
