import { IDefaultDto } from 'dtos/IDefaultDto';
export interface IGetFavoriteMinMaxPrices extends IDefaultDto {
  minPrice: number
  maxPrice: number
}