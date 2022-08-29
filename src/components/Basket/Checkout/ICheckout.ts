import { BasketProductType } from "dtos/basketApiDtos/getBasketProductsDto/IGetBasketProduct";

export interface ICheckout {
  basketProducts: Array<BasketProductType>
}