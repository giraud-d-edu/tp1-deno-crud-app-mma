import { MongoClient } from "../dep.ts";
import { FilmDBO } from "../repositories/dbos/film.dbo.ts";
import { NoteDBO } from "../repositories/dbos/note.dbo.ts";
import { ActeurDBO } from "../repositories/dbos/acteur.dbo.ts";

const MONGO_URI = Deno.env.get("MONGO_URI");
const MONGO_DB = Deno.env.get("MONGO_DB");

if (!MONGO_URI) {
  console.error("MONGODB_URI is not set");
  Deno.exit(1);
}
if (!MONGO_DB) {
  console.error("MONGODB_DB is not set");
  Deno.exit(1);
}
const client = new MongoClient(MONGO_URI);

try {
  await client.connect();

  await client.db("admin").command({ ping: 1 });

  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);

  Deno.exit(1);
}
const db = client.db(MONGO_DB);

export const filmCollection = db.collection<FilmDBO>("Films");
export const noteCollection = db.collection<NoteDBO>("Notes");
export const actorCollection = db.collection<ActeurDBO>("Acteurs");
