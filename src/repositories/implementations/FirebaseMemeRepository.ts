import Meme from "../../entities/Meme";
import {
  firebaseFirestore,
  firebaseStorage,
} from "../../utils/config/firebase";
import { memeCollection } from "../../utils/constants/collections";
import ICategoryRepository from "../CategoryRepository";
import IMemeRepository from "../MemeRepository";

class MemeWithPromiseAddress extends Meme {
  promiseAddress?: () => Promise<any>;

  constructor(props: MemeWithPromiseAddress) {
    super(props);
    Object.assign(this, props);
  }
}

export default class FirebaseMemeRepository implements IMemeRepository {
  memes: Array<Meme> = [];

  constructor(private categoryRepository: ICategoryRepository) {
    this.categoryRepository.loadAllCategories();
  }

  async loadAllMemes() {
    try {
      const snapshot = firebaseFirestore
        .collection(memeCollection)
        .orderBy("year")
        .get();

      const data: Array<MemeWithPromiseAddress> = [];

      (await snapshot).forEach((meme) => {
        const promiseAddress = async () =>
          firebaseStorage.ref(meme.data().address).getDownloadURL();

        const category = this.categoryRepository.getCategoryById(
          meme.data().category
        );

        data.push(
          new MemeWithPromiseAddress({
            ...(meme.data() as MemeWithPromiseAddress),
            category,
            promiseAddress,
          })
        );
      });

      this.memes = await Promise.all(
        data.map(async (meme) => {
          return {
            ...meme,
            address: await meme.promiseAddress?.(),
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  getMemesByCategory(id: string): Array<Meme> | undefined {
    return this.memes.filter((meme) => meme.category.id === id);
  }

  getMemesByYear(year: string): Array<Meme> | undefined {
    return this.memes.filter((meme) => meme.year === year);
  }

  getMemesYears(): Array<string> {
    const years = this.memes.map((meme) => meme.year).flat();
    return [...Array.from(new Set(years))];
  }
}
