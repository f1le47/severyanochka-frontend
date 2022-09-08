import { DefaultDto } from "dtos/DefaultDto";
import { IAddRatingDto } from "./IAddRatingDto";

export class AddRatingDto extends DefaultDto {
  rating;

  constructor({rating, status, message}: IAddRatingDto) {
    super({status, message})

    this.rating = rating
  }
}