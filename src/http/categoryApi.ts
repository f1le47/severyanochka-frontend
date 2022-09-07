import { GetByCategoryIdDto } from 'dtos/categoryApiDtos/getByCategoryIdDto/getByCategoryIdDto'
import { GetCategoriesDto } from 'dtos/categoryApiDtos/getCategoriesDto/getCategoriesDto'
import { GetMinMaxPricesDto } from 'dtos/categoryApiDtos/getMinMaxPricesDto/getMinMaxPricesDto'
import { IGetByCategoryId, IMinMaxPrices } from 'types/http/ICategoryApi'
import {$instance} from './index'

class CategoryApi {
  async getCategories() {
    const response = await $instance.get('/category/categories')

    const responseDto = new GetCategoriesDto({
      message: response.data.message,
      categories: response.data.categories,
      status: response.status
    })
    return {...responseDto}
  }
  async getByCategoryId({id, page, amount, min = undefined, max = undefined}: IGetByCategoryId) {
    let response
    if (!!min || !!max) {
      response = await $instance.get(`/category/get-by-category-id?id=${id}&page=${page}&amount=${amount}&min=${min}&max=${max}`)
    } else {
      response = await $instance.get(`/category/get-by-category-id?id=${id}&page=${page}&amount=${amount}`)
    }

    const responseDto = new GetByCategoryIdDto({
      productsById: response.data.productsById,
      amountProducts: response.data.amountProducts,
      message: response.data.message,
      status: response.status
    })
    return {...responseDto}
  }
  async getMinMaxPrices({id}: IMinMaxPrices) {
    const response = await $instance.get(`/category/min-max-prices?id=${id}`)

    const responseDto = new GetMinMaxPricesDto({
      maxPrice: response.data.maxPrice,
      minPrice: response.data.minPrice,
      message: response.data.message,
      status: response.status
    })
    return {...responseDto}
  }
}

export default new CategoryApi()