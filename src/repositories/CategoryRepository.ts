import Category from "../entities/Category";

export default interface ICategoryRepository {
  getAllCategories: () => Promise<Array<Category> | undefined>;
}
