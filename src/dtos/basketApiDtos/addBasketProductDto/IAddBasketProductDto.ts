import { BasketProductType } from 'dtos/basketApiDtos/getBasketProductsDto/IGetBasketProduct';
import { IDefaultDto } from "dtos/IDefaultDto";

export interface IAddBasketProductDto extends IDefaultDto {
  basketProduct: BasketProductType
}