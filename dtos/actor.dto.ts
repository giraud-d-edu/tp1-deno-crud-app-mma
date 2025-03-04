import z from "https://deno.land/x/zod@v3.24.2/index.ts";

export const ActorDto = z.object({
    firstname: z.string().min(1, "Firstname is required"),
    lastname: z.string().min(1, "Lastname is required"),
})

export type ActorDtoType = z.infer<typeof ActorDto>;