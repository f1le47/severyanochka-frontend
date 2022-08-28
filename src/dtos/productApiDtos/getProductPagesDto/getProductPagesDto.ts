import { DefaultDto } from '../../DefaultDto';
import { IGetProductPages } from './IGetProductPages';
export class GetProductPagesDto extends DefaultDto {
  amountPages

  constructor({amountPages, status, message}: IGetProductPages) {
    super({status, message});

    this.amountPages = amountPages;
  }
} 