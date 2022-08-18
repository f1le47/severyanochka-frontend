import { IDefaultDto } from "dtos/IDefaultDto";

export interface IGetProductsDto extends IDefaultDto {
  products: Array<ProductType>
}

export interface ProductType {
  id: number;
  name: string;
  price: string;
  price_with_card: string;
  weight: string;
  brand: string;
  category: string;
  rating: number;
  img: string;
  discount?: number
}