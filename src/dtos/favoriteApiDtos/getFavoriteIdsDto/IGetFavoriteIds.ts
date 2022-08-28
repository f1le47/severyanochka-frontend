import { IDefaultDto } from "dtos/IDefaultDto";

export interface IGetFavoriteIds extends IDefaultDto {
  favoriteProductIds: Array<FavoriteProductIdType>
}

export type FavoriteProductIdType = {
  productId: number
}