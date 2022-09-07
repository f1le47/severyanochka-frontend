import { DefaultDto } from 'dtos/DefaultDto';
import { IGetMinMaxPricesDto } from './IGetMinMaxPricesDto';
export class GetMinMaxPricesDto extends DefaultDto {
  minPrice;
  maxPrice;

  constructor({maxPrice, status, message, minPrice}: IGetMinMaxPricesDto) {
    super({message, status})

    this.minPrice = minPrice
    this.maxPrice = maxPrice
  }
}