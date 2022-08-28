import { DefaultDto } from "dtos/DefaultDto";
import { IGetFavoriteMinMaxPrices } from "./IGetFavoriteMinMaxPrices";

export class GetFavoriteMinMaxPricesDto extends DefaultDto {
  minPrice;
  maxPrice;

  constructor({minPrice, maxPrice, status, message}: IGetFavoriteMinMaxPrices) {
    super ({message, status})
    
    this.minPrice = minPrice
    this.maxPrice = maxPrice
  }
}