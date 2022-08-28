import { DefaultDto } from 'dtos/DefaultDto';
import { $authInstance } from "./index"
import {  IGetProducts } from "types/http/IProductApi"
import { GetFavoriteProductIdsDto } from "dtos/favoriteApiDtos/getFavoriteIdsDto/getFavoriteIdsDto"
import { GetProductPagesDto } from "dtos/productApiDtos/getProductPagesDto/getProductPagesDto"
import { GetFavoriteCategoriesDto } from 'dtos/favoriteApiDtos/getFavoriteCategoriesDto/getFavoriteCategoriesDto';
import { GetFavoriteProductDto } from 'dtos/favoriteApiDtos/getFavoriteProductsDto/getFavoriteProductsDto';
import { IAddFavoriteProduct, IRemoveFavoriteProduct } from 'types/http/IFavoriteApi';
import { GetFavoriteMinMaxPricesDto } from 'dtos/favoriteApiDtos/getFavoriteMinMaxPricesDto/getFavoriteMinMaxPricesDto';

class FavoriteApi {
  async getFavoriteProducts({page, amount, min = undefined, max = undefined, categoryId = undefined}: IGetProducts) {
    let response
    if (categoryId) {
      if (min && max) {
        response = await $authInstance.get(`/favorite/favorites?page=${page}&amount=${amount}&min=${min}&max=${max}&categoryId=${categoryId}`);
      } else {
        response = await $authInstance.get(`/favorite/favorites?page=${page}&amount=${amount}&categoryId=${categoryId}`);
      }
    } else {
      if (min && max) {
        response = await $authInstance.get(`/favorite/favorites?page=${page}&amount=${amount}&min=${min}&max=${max}`);
      } else {
        response = await $authInstance.get(`/favorite/favorites?page=${page}&amount=${amount}`);
      }
    }

    const responseDto = new GetFavoriteProductDto({
      favoriteProducts: response.data.favoriteProducts,
      amountFavoriteProducts: response.data.amountFavoriteProducts,
      message: response.data.message,
      status: response.status,
    })
    return {...responseDto}
  }
  async getFavoritePages() {
    const response = await $authInstance.get('/favorite/favorite-pages')

    const responseDto = new GetProductPagesDto({amountPages: response.data.amountPages, message: response.data.message, status: response.status})
    return {...responseDto}
  } 
  async getFavoriteProductIds() {
    const response = await $authInstance.get('/favorite/favorite-ids')

    const responseDto = new GetFavoriteProductIdsDto({
      message: response.data.message, 
      status: response.status, 
      favoriteProductIds: response.data.favoriteProductIds
    })
    return responseDto
  }
  async addFavoriteProduct({productId}: IAddFavoriteProduct) {
    const response = await $authInstance.post('/favorite/add-favorite', {productId})

    const responseDto = new DefaultDto({message: response.data.message, status: response.status})
    return {...responseDto}
  }
  async removeFavoriteProduct({productId}: IRemoveFavoriteProduct) {
    const response = await $authInstance.delete(`/favorite/favorite?productId=${productId}`)

    const responseDto = new DefaultDto({message: response.data.message, status: response.status})
    return {...responseDto}
  }
  async getFavoriteCategories() {
    const response = await $authInstance.get('/favorite/favorite-categories')

    const responseDto = new GetFavoriteCategoriesDto({
      message: response.data.message,
      status: response.status,
      favoriteCategories: response.data.favoriteCategories
    })
    return {...responseDto}
  }
  async getFavoriteMinMaxPrices() {
    const response = await $authInstance.get('/favorite/favorite-min-max-prices')

    const responseDto = new GetFavoriteMinMaxPricesDto({
      maxPrice: response.data.maxPrice,
      message: response.data.message,
      minPrice: response.data.minPrice,
      status: response.status
    })
    return {...responseDto}
  }
}

export default new FavoriteApi()