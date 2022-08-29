import { IDefaultDto } from "dtos/IDefaultDto";

export interface IGetProductsDto extends IDefaultDto {
  products: Array<ProductType>
}

export type ProductType = {
  id: number;
  name: string;
  price: number;
  weight: string;
  rating: number;
  img: string;
  brand: BrandType;
  category: CategoryType;
  discount: DiscountType | null;
  isFavorited: boolean;
}

export type BrandType = {
  id: number;
  name: string;
}

export type CategoryType = {
  id: number;
  name: string
}

export type DiscountType = {
  id: number;
  discount: number;
  priceWithCard: number;
  productId: number;
}