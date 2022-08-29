import { DefaultDto } from "dtos/DefaultDto";
import { IGetBasketProduct } from "./IGetBasketProduct";

export class getBasketProductDto extends DefaultDto {
  basketProducts;

  constructor({basketProducts, message, status}: IGetBasketProduct) {
    super({message, status})

    this.basketProducts = basketProducts
  }
}