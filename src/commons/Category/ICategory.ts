import { ProductType } from "dtos/productApiDtos/getProductsDto/IGetProducts";

export type ICategory = {
  categoryName: string;
  categoryButton: string;
  categoryLink: string;
  products: Array<ProductType>
}