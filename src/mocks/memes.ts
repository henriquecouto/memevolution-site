import Category from "../entities/Category";
import Meme from "../entities/Meme";

export const memesMock = new Meme({
  address:
    "https://cbncuritiba.b-cdn.net/cbn/wp-content/uploads/2019/05/meme.png",
  category: new Category({ name: "teste", color: "#002100" }),
  year: 2012,
  description:
    "Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis?",
  type: "image",
});
