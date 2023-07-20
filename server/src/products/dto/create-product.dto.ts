import { ProductCategory } from '../entities/utility-types';

export class CreateProductDto {
  category: ProductCategory;
  name: string;
  price: number;
  compound: string;
  media: string;
}
