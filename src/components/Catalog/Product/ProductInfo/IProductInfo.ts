import { ProductType } from "dtos/productApiDtos/getProductsDto/IGetProducts";
import { RatingType } from "dtos/ratingApiDtos/getRatingDto/IGetRatingDto";

export interface IProductInfo {
  product: ProductType
  ratings: Array<RatingType>
}