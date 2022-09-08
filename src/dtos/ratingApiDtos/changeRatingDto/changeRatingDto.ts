import { DefaultDto } from "dtos/DefaultDto";
import { IChangeRatingDto } from "./IChangeRatingDto";

export class ChangeRatingDto extends DefaultDto {
  rating

  constructor({message, rating, status}: IChangeRatingDto) {
    super({message, status})

    this.rating = rating
  }
}