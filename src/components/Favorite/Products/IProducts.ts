import { CategoryType, ProductType } from "dtos/productApiDtos/getProductsDto/IGetProducts";

export interface IProducts {
  handleClear: () => void
  countRange: Array<number>
  products: Array<ProductType>
  setCountRange: React.Dispatch<React.SetStateAction<number[]>>
  favoriteItems: number;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  minPrice: number
  maxPrice: number
  currentCategory: CategoryType | null
  setCurrentCategory: React.Dispatch<React.SetStateAction<null | CategoryType>>;
}