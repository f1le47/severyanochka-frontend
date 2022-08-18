import { IDefaultDto } from "dtos/IDefaultDto";

export interface IGetProductsDto extends IDefaultDto {
  products: Array<ProductType>
}

export interface ProductType {
  id: number;
  name: string;
  price: string;
  weight: string;
  isDiscount: boolean;
  brand: string;
  category: string;
  rating: number;
  img: string;
  discount?: string;
  priceWithCard?: string;
}