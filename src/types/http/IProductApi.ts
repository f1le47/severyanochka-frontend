export interface IGetProducts {
  page: number
  amount: number
  min?: number
  max?: number
  categoryId?: number
}

export interface IGetProduct {
  id: number
}