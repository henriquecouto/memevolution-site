import Category from "./Category";

export default class Meme {
  address!: string;
  category!: Category;
  year!: string;
  description?: string;
  type!: "image" | "video";

  constructor(props: Meme) {
    Object.assign(this, props);
  }
}
