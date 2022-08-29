import { DefaultDto } from "dtos/DefaultDto"
import { IAddBasketProductDto } from "./IAddBasketProductDto"

class AddBasketProductDto extends DefaultDto {
  basketProduct

  constructor({basketProduct, status, message}: IAddBasketProductDto) {
    super({status, message})

    this.basketProduct = basketProduct
  }
}

export default AddBasketProductDto