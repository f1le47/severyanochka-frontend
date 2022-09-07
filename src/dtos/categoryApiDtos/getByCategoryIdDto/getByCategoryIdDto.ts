import { DefaultDto } from 'dtos/DefaultDto';
import { IGetByCategoryIdDto } from './IGetByCategoryIdDto';
export class GetByCategoryIdDto extends DefaultDto {
  productsById;
  amountProducts;

  constructor({productsById, amountProducts, message, status}: IGetByCategoryIdDto) {
    super({message, status})

    this.productsById = productsById
    this.amountProducts = amountProducts
  }
}