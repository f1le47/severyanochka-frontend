import { $instance } from "./index"
import { IGetProducts } from "types/http/IProductApi";
import { GetProductsDto } from "dtos/productApiDtos/getProductsDto";

class ProductApi {
  async getProducts({page, amount}: IGetProducts) {
    const response = await $instance.get(`/products/products?page=${page}&amount=${amount}`);

    const responseDto = new GetProductsDto({products: response.data.products, message: response.data.message, status: response.status})
    return {...responseDto}
  }
  async getDiscountProducts({page, amount}: IGetProducts) {
    const response = await $instance.get(`/products/discount-products?page=${page}&amount=${amount}`);

    const responseDto = new GetProductsDto({products: response.data.discountProducts, message: response.data.message, status: response.status})
    return {...responseDto}
  }
  async getLatestProducts({page, amount}: IGetProducts) {
    const response = await $instance.get(`/products/latest-products?page=${page}&amount=${amount}`);

    const responseDto = new GetProductsDto({products: response.data.latestProducts, message: response.data.message, status: response.status})
    return {...responseDto}
  }
}

export default new ProductApi()