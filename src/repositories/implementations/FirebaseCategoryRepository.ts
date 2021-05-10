import Category from "../../entities/Category";
import { firebaseFirestore } from "../../utils/config/firebase";
import { categoryCollection } from "../../utils/constants/collections";
import ICategoryRepository from "../CategoryRepository";

export default class FirebaseCategoryRepository implements ICategoryRepository {
  categories: Array<Category> = [];

  async loadAllCategories() {
    try {
      const snapshot = firebaseFirestore.collection(categoryCollection).get();
      (await snapshot).forEach((category) =>
        this.categories.push(
          new Category({ ...(category.data() as Category), id: category.id })
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  getCategoryById(id: string): Category {
    const category = this.categories.find((category) => category?.id === id);
    if (!category) {
      return new Category({ name: "Sem Categoria", color: "#212121" });
    }
    return category;
  }
}
