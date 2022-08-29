import { IDefaultDto } from "dtos/IDefaultDto";
import { DiscountType } from "dtos/productApiDtos/getProductsDto/IGetProducts";

export interface IGetBasketProduct extends IDefaultDto {
  basketProducts: Array<BasketProductType>
}

export type BasketProductType = {
  productId: number
  name: string;
  price: number;
  discount: DiscountType | null
  amount: number
  img: string
}