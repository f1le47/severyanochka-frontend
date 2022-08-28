import { IGetFavoriteCategories } from './IGetFavoriteCategories';
import { DefaultDto } from "dtos/DefaultDto";

export class GetFavoriteCategoriesDto extends DefaultDto {
  favoriteCategories;

  constructor({favoriteCategories, status, message}: IGetFavoriteCategories) {
    super({status, message})

    this.favoriteCategories = favoriteCategories
  }
}