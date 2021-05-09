import Meme from "../entities/Meme";

export default interface IMemeRepository {
  memes: Array<Meme>;
  loadAllMemes: () => void;
  getMemesByYear: (year: string) => Array<Meme> | undefined;
  getMemesYears: () => Array<string>;
}
