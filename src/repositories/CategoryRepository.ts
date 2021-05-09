import Category from "../entities/Category";

export default interface ICategoryRepository {
  categories: Array<Category>;
  loadAllCategories: () => Promise<void>;
  getCategoryById: (id: string) => Category;
}
