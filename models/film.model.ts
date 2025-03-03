export default interface Film {
  id: number;
  category: string[];
  title: string;
  actors: { id: number; role: string }[];
}
