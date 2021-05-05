export default class Meme {
  address!: string;
  category!: string;
  year!: number;
  description?: string;
  type!: "image" | "video";

  constructor(props: Meme) {
    Object.assign(this, props);
  }
}
