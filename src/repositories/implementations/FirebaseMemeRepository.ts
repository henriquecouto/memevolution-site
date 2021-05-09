import Meme from "../../entities/Meme";
import { firebaseFirestore } from "../../utils/config/firebase";
import { memeCollection } from "../../utils/constants/collections";
import ICategoryRepository from "../CategoryRepository";
import IMemeRepository from "../MemeRepository";

export default class FirebaseMemeRepository implements IMemeRepository {
  memes: Array<Meme> = [];

  constructor(private categoryRepository: ICategoryRepository) {
    this.categoryRepository.loadAllCategories();
  }

  async loadAllMemes() {
    const snapshot = firebaseFirestore
      .collection(memeCollection)
      .orderBy("year")
      .get();
    (await snapshot).forEach((meme) =>
      this.memes.push(
        new Meme({
          ...(meme.data() as Meme),
          category: this.categoryRepository.getCategoryById(
            meme.data().category
          ),
        })
      )
    );
  }

  getMemesByYear(year: string): Array<Meme> | undefined {
    return this.memes.filter((meme) => meme.year === year);
  }

  getMemesYears(): Array<string> {
    const years = this.memes.map((meme) => meme.year).flat();
    return [...Array.from(new Set(years))];
  }
}
