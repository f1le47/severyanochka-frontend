import { CategoryType } from "dtos/productApiDtos/getProductsDto/IGetProducts";

export interface IFilter {
  handleClear: () => void
  handleBlurRange: (event: React.ChangeEvent<{}>, newValue: number | number[]) => void;
  countRange: number[];
  setCountRange: React.Dispatch<React.SetStateAction<number[]>>
  favoriteCategories: Array<CategoryType>
  minPrice: number
  maxPrice: number
  setCurrentCategory: React.Dispatch<React.SetStateAction<null | CategoryType>>
}