import { IDefaultDto } from "dtos/IDefaultDto";

export interface IGetMinMaxPricesDto extends IDefaultDto {
  minPrice: number
  maxPrice: number
}