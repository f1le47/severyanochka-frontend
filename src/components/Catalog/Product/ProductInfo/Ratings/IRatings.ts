import { RatingType } from "dtos/ratingApiDtos/getRatingDto/IGetRatingDto";

export interface IRatings {
  commonRating: number;
  ratings: Array<RatingType>
  productId: number
}