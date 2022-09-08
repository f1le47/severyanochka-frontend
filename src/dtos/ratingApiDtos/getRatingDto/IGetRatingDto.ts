import { IDefaultDto } from "dtos/IDefaultDto";

export interface IGetRatingDto extends IDefaultDto {
  ratings: Array<RatingType>
}

export type RatingType = {
  id: number
  rate: number;
  comment: string;
  date: string;
  userName: string;
  userId: number;
  productId: number;
}