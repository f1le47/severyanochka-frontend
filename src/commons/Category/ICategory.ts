import { ProductType } from "dtos/productApiDtos/IGetProducts";

export type ICategory = {
  categoryName: string;
  categoryButton: string;
  categoryLink: string;
  products: Array<ProductType>
}