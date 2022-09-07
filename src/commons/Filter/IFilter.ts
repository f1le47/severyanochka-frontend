import { CategoryType } from "dtos/categoryApiDtos/getCategoriesDto/IGetCategoriesDto";


export interface IFilter {
  handleClear: () => void
  handleBlurRange: (event: React.ChangeEvent<{}>, newValue: number | number[]) => void;
  countRange: number[];
  setCountRange: React.Dispatch<React.SetStateAction<number[]>>
  categories?: Array<CategoryType>
  setCurrentCategory?: React.Dispatch<React.SetStateAction<null | CategoryType>>
  minPrice: number
  maxPrice: number
}