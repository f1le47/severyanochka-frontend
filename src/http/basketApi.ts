import { getBasketProductDto } from "dtos/basketApiDtos/getBasketProductsDto/getBasketProductDto"
import { IAddBasketProduct, IRemoveBasketProduct } from "types/http/IBasketApi"
import { $authInstance } from "./index"
import AddBasketProductDto from 'dtos/basketApiDtos/addBasketProductDto/addBasketProductDto';
import RemoveBasketProductDto from 'dtos/basketApiDtos/removeBasketProductDto/removeBasketProductDto';
import getAmountBasketProductsDto from 'dtos/basketApiDtos/getAmountBasketProductsDto/getAmountBasketProductsDto';

class BasketApi {
  async getBasketProducts() {
    const response = await $authInstance.get('/basket/basket-products')

    const responseDto = new getBasketProductDto({
      basketProducts: response.data.basketProducts,
      message: response.data.message,
      status: response.status
    })
    return {...responseDto}
  }
  async getAmountBasketProducts() {
    const response = await $authInstance.get('/basket/amount-basket-products')

    const responseDto = new getAmountBasketProductsDto({
      amountBasketProducts: response.data.amountBasketProducts,
      message: response.data.message,
      status: response.status
    })
    return {...responseDto}
  }
  async addBasketProduct({productId}: IAddBasketProduct) {
    const response = await $authInstance.post('/basket/add-basket-product', {productId})

    const responseDto = new AddBasketProductDto({message: response.data.message, status: response.status, basketProduct: response.data.basketProduct})
    return {...responseDto}
  }
  async removeBasketProduct({productId}: IRemoveBasketProduct) {
    const response = await $authInstance.delete(`/basket/remove-basket-product?productId=${productId}`)

    const responseDto = new RemoveBasketProductDto({message: response.data.message, status: response.status, basketProduct: response.data.basketProduct})
    return {...responseDto}
  }
}

export default new BasketApi()