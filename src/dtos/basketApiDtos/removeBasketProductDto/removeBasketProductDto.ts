import { DefaultDto } from "dtos/DefaultDto"
import { IRemoveBasketProductDto } from './IRemoveBasketProductDto';

class RemoveBasketProductDto extends DefaultDto {
  basketProduct

  constructor({basketProduct, status, message}: IRemoveBasketProductDto) {
    super({status, message})

    this.basketProduct = basketProduct
  }
}

export default RemoveBasketProductDto