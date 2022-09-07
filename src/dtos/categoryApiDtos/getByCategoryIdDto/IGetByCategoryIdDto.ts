import { IDefaultDto } from "dtos/IDefaultDto";
import { ProductType } from "dtos/productApiDtos/getProductsDto/IGetProducts";

export interface IGetByCategoryIdDto extends IDefaultDto {
  productsById: Array<ProductType>
  amountProducts: number
}