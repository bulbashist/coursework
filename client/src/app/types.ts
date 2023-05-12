export interface IProduct {
  id: number;
  category: number;
  name?: string;
  price: number;
  compound?: string;
  media?: string;
}

export interface ICategory {
  id: number;
  name: string;
  mediaURI: string;
}
