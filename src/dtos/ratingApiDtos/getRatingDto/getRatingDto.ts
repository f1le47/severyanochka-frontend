import { DefaultDto } from "dtos/DefaultDto";
import { IGetRatingDto } from "./IGetRatingDto";

export class GetRatingDto extends DefaultDto {
  ratings;

  constructor({message, status, ratings}: IGetRatingDto) {
    super({status, message})

    this.ratings = ratings
  }
}