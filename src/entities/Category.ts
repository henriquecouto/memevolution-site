export default class Category {
  id?: string;
  name!: string;
  color!: string;

  constructor(props: Category) {
    Object.assign(this, props);
  }
}
