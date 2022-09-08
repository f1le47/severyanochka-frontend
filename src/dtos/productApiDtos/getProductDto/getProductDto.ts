import { DefaultDto } from 'dtos/DefaultDto';
import { IGetProductDto } from './IGetProductDto';
export class GetProductDto extends DefaultDto {
  product;

  constructor({message, status, product}: IGetProductDto) {
    super({status, message})

    this.product = product;
  }
}