import Meme from "../entities/Meme";

export default interface IMemeRepository {
  memes: Array<Meme>;
  loadAllMemes: () => Promise<void>;
  getMemesByYear: (year: string) => Array<Meme> | undefined;
  getMemesByCategory: (id: string) => Array<Meme> | undefined;
  getMemesYears: () => Array<string>;
}
