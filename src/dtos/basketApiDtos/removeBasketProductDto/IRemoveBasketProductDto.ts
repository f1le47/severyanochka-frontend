import { BasketProductType } from './../getBasketProductsDto/IGetBasketProduct';
import { IDefaultDto } from "dtos/IDefaultDto";

export interface IRemoveBasketProductDto extends IDefaultDto {
  basketProduct: BasketProductType | []
}