export interface IGetRating {
  productId: number;
}

export interface IAddRating {
  rate: number
  comment: string
  productId: number
}

export interface IChangeRating {
  rate: number
  comment: string
  productId: number
}

export interface IDeleteRating {
  productId: number
}