import { CategoryType } from "dtos/categoryApiDtos/getCategoriesDto/IGetCategoriesDto";
import { IDefaultDto } from "dtos/IDefaultDto";

export interface IGetFavoriteCategories extends IDefaultDto {
  favoriteCategories: Array<CategoryType>
}