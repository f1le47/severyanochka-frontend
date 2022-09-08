import { ProductType } from './../getProductsDto/IGetProducts';
import { IDefaultDto } from "dtos/IDefaultDto";

export interface IGetProductDto extends IDefaultDto {
  product: ProductType
}