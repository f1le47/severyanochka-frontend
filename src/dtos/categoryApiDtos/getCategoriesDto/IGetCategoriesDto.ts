import { IDefaultDto } from 'dtos/IDefaultDto';

export interface IGetCategoriesDto extends IDefaultDto {
  categories: Array<CategoryType>
}

export type CategoryType = {
  id: number;
  name: string
  img: string
}
