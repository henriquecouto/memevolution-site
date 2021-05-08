import Category from "./Category";

export default class Meme {
  address!: string;
  category!: Category;
  year!: number;
  description?: string;
  type!: "image" | "video";

  constructor(props: Meme) {
    Object.assign(this, props);
  }
}
