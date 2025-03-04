import { z } from "../../deps.ts";

export const ActorDto = z.object({
  firstname: z.string().min(1, "Firstname is required"),
  lastname: z.string().min(1, "Lastname is required"),
});

export type ActorDtoType = z.infer<typeof ActorDto>;
