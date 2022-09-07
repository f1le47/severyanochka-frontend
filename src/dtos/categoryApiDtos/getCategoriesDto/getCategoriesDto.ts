import { DefaultDto } from "dtos/DefaultDto";
import { IGetCategoriesDto } from "./IGetCategoriesDto";

export class GetCategoriesDto extends DefaultDto {
  categories;

  constructor({categories, status, message}: IGetCategoriesDto) {
    super({status, message});

    this.categories = categories;
  }
}