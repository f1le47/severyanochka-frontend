import { RatingType } from 'dtos/ratingApiDtos/getRatingDto/IGetRatingDto';
import { IDefaultDto } from "dtos/IDefaultDto";

export interface IAddRatingDto extends IDefaultDto {
  rating: RatingType
}