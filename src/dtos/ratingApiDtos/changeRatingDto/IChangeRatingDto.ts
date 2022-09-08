import { RatingType } from 'dtos/ratingApiDtos/getRatingDto/IGetRatingDto';
import { DefaultDto } from "dtos/DefaultDto";

export interface IChangeRatingDto extends DefaultDto {
  rating: RatingType
}