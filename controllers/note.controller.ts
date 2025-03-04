import { RouterContext } from "https://deno.land/x/oak@v17.1.4/mod.ts";
import * as noteService from "../services/note.service.ts";
import { statusCodeHandler } from "../errors/StatusCodeHandler.ts";

export const getNoteById = (ctx: RouterContext<"/note/:id">) => {
  try {
    const id = ctx.params.id;
    ctx.response.body = noteService.getNoteById(Number(id));
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const getNotesByFilmId = (ctx: RouterContext<"/note/film/:id">) => {
  try {
    const id_film = ctx.params.id;
    ctx.response.body = noteService.getNotesByFilmId(Number(id_film));
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const getNotesByUserId = (ctx: RouterContext<"/note/user">) => {
  try {
    const username = ctx.request.headers.get("Authorization")?.split(" ")[1]!;
    ctx.response.body = noteService.getNotesByUserId(username);
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const addNote = async (ctx: RouterContext<"/note">) => {
  try {
    const username = ctx.request.headers.get("Authorization")?.split(" ")[1];
    const note = await ctx.request.body.json();
    ctx.response.body = noteService.addNote(note);
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const updateNote = async (ctx: RouterContext<"/note/:id">) => {
  try {
    const id = ctx.params.id;
    const note = await ctx.request.body.json();
    ctx.response.body = noteService.updateNote(Number(id), note);
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};

export const deleteNote = (ctx: RouterContext<"/note/:id">) => {
  try {
    const id = ctx.params.id;
    ctx.response.body = noteService.deleteNote(Number(id));
  } catch (error) {
    ctx.response.status = statusCodeHandler(error);
    ctx.response.body = (error as Error).message;
  }
};
