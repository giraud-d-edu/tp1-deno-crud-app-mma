export default interface Film {
  id: string;
  category: string[];
  title: string;
  actors: { id: number; role: string }[];
}
