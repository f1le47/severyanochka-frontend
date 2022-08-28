import { IDefaultDto } from "dtos/IDefaultDto";
import { CategoryType } from "dtos/productApiDtos/getProductsDto/IGetProducts";

export interface IGetFavoriteCategories extends IDefaultDto {
  favoriteCategories: Array<CategoryType>
}