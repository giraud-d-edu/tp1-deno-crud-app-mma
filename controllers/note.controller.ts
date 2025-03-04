import * as noteService from "../services/note.service.ts";
import { statusCodeHandler } from "../errors/StatusCodeHandler.ts";
import { RouterContext } from "../deps.ts";

export const getNoteById = async (ctx: RouterContext<"/note/:id">) => {
  try {
    const id = ctx.params.id;
    ctx.response.body = await noteService.getNoteById(id);
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const getNotesByFilmId = async (
  ctx: RouterContext<"/note/film/:id">
) => {
  try {
    const id_film = ctx.params.id;
    ctx.response.body = await noteService.getNotesByFilmId(id_film);
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const getNotesByUserId = async (ctx: RouterContext<"/user/note">) => {
  try {
    const username = ctx.request.headers.get("Authorization")?.split(" ")[1]!;
    ctx.response.body = await noteService.getNotesByUserId(username);
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const addNote = async (ctx: RouterContext<"/note">) => {
  try {
    const username = ctx.request.headers.get("Authorization")?.split(" ")[1]!;
    const note = await ctx.request.body.json();
    //const checkedNote: NoteDtoType = NoteDto.parse(note);
    await noteService.addNote({ ...note, user: username });
    ctx.response.body = "Note ajoutée";
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const updateNote = async (ctx: RouterContext<"/note/:id">) => {
  try {
    const id = ctx.params.id;
    const username = ctx.request.headers.get("Authorization")?.split(" ")[1]!;
    const note = await ctx.request.body.json();
    //const checkedNote: NoteDtoType = NoteDto.parse(note);
    await noteService.updateNote(id, { ...note, user: username });
    ctx.response.body = `Note ${id} mise à jour`;
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const deleteNote = async (ctx: RouterContext<"/note/:id">) => {
  try {
    const id = ctx.params.id;
    await noteService.deleteNote(id);
    ctx.response.body = `Note ${id} supprimée`;
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};
