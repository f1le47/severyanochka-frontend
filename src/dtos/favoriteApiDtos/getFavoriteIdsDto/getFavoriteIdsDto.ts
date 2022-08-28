import { DefaultDto } from "dtos/DefaultDto";
import { IGetFavoriteIds } from "./IGetFavoriteIds";

export class GetFavoriteProductIdsDto extends DefaultDto {
  favoriteIds;

  constructor({favoriteProductIds, message, status}: IGetFavoriteIds) {
    super({message, status})
    this.favoriteIds = favoriteProductIds
  }
}