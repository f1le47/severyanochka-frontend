import { RatingType } from "dtos/ratingApiDtos/getRatingDto/IGetRatingDto";

export interface IComment {
  rating: RatingType
  productId: number
}