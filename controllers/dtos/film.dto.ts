import { z } from "../../deps.ts";

export const FilmDto = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.array(z.string()).nonempty("At least one category is required"),
  actors: z
    .array(
      z.object({
        id: z.number().int().positive("ID must be a positive integer"),
        role: z.string().min(1, "Role is required"),
      })
    )
    .nonempty("At least one actor is required"),
});

export type FilmDtoType = z.infer<typeof FilmDto>;
