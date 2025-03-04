import { z } from "https://deno.land/x/zod@v3.24.2/mod.ts";

export const NoteDto = z.object({
    id_film: z.number().int().positive("ID must be a positive integer"),
    user: z.string().min(1, "User is required"),
    note: z.number().int().min(0).max(5, "Note must be between 0 and 5"),
})

export type NoteDtoType = z.infer<typeof NoteDto>;