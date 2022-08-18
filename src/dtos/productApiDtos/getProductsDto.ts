import { DefaultDto } from 'dtos/DefaultDto';
import { IGetProductsDto } from './IGetProducts';
export class GetProductsDto extends DefaultDto {
  products

  constructor({products, status, message}: IGetProductsDto) {
    super({message, status})

    this.products = products
  }
}