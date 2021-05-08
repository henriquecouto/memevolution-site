export default class Category {
  name!: string;
  color!: string;

  constructor(props: Category) {
    Object.assign(this, props);
  }
}
