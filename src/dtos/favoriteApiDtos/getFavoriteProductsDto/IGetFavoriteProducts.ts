import { ProductType } from 'dtos/productApiDtos/getProductsDto/IGetProducts';
import { IDefaultDto } from "dtos/IDefaultDto";

export interface IGetFavoriteProductsDto extends IDefaultDto {
  favoriteProducts: Array<ProductType>
  amountFavoriteProducts: number
}