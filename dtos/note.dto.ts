import { z } from "https://deno.land/x/zod@v3.24.2/mod.ts";

export const NoteDto = z.object({
    id_film: z.number(),
    user: z.string(),
    note: z.number(),
})

export type NoteDtoType = z.infer<typeof NoteDto>;