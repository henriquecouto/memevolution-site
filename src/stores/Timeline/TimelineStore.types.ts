import IMemeRepository from "../../repositories/MemeRepository";

export interface TimelineProviderProps {
  memeRepository: IMemeRepository;
}

export interface TimelineStateType<T> {
  years: Array<Year<T>>;
  loadByCategory: (id: string) => Array<T>;
}

export class Year<T> {
  name!: string;
  values?: Array<T>;

  constructor(props: Year<T>) {
    Object.assign(this, props);
  }
}
