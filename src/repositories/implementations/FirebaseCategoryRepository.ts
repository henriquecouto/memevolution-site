import Category from "../../entities/Category";
import { firebaseFirestore } from "../../utils/config/firebase";
import { categoryCollection } from "../../utils/constants/collections";
import ICategoryRepository from "../CategoryRepository";

export default class FirebaseCategoryRepository implements ICategoryRepository {
  async getAllCategories(): Promise<Array<Category> | undefined> {
    try {
      const categories: Array<Category> = [];
      const snapshot = firebaseFirestore.collection(categoryCollection).get();
      (await snapshot).forEach((category) =>
        categories.push(new Category({ ...(category.data() as Category) }))
      );
      return categories;
    } catch (error) {
      console.log(error);
    }
  }
}
