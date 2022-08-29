import { DefaultDto } from "dtos/DefaultDto"
import { IGetAmountBasketProductsDto } from "./IGetAmountBasketProductsDto"

class getAmountBasketProductsDto extends DefaultDto {
  amountBasketProducts: number

  constructor({amountBasketProducts, status, message}: IGetAmountBasketProductsDto) {
    super({message, status})

    this.amountBasketProducts = amountBasketProducts
  }
}

export default getAmountBasketProductsDto