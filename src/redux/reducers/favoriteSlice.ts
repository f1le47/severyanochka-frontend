import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryType } from 'dtos/categoryApiDtos/getCategoriesDto/IGetCategoriesDto';
import { FavoriteProductIdType } from 'dtos/favoriteApiDtos/getFavoriteIdsDto/IGetFavoriteIds';
import { ProductType } from 'dtos/productApiDtos/getProductsDto/IGetProducts';
interface IFavoriteSlice {
  isLoading: boolean
  favoriteProducts: Array<ProductType>
  favoriteItems: number
  favoriteProductIds: Array<FavoriteProductIdType>
  favoriteCategories: Array<CategoryType>
  minPrice: number
  maxPrice: number
  errors: Array<string>
}

const initialState: IFavoriteSlice = {
  isLoading: false,
  favoriteProducts: [],
  favoriteItems: 0,
  favoriteProductIds: [],
  favoriteCategories: [],
  minPrice: 0,
  maxPrice: 0,
  errors: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.errors = [action.payload, ...state.errors]
    },
    setFavoriteProducts(state, action: PayloadAction<Array<ProductType>>) {
      state.favoriteProducts = action.payload
    },
    setFavoriteItems(state, action: PayloadAction<number>) {
      state.favoriteItems = action.payload
    },
    setFavoriteProductIds(state, action: PayloadAction<Array<FavoriteProductIdType>>) {
      state.favoriteProductIds = action.payload
    },
    addFavoriteId(state, action: PayloadAction<number>) {
      state.favoriteProductIds = [...state.favoriteProductIds, {productId: action.payload}]
    },
    removeFavoriteId(state, action: PayloadAction<number>) {
      state.favoriteProductIds = state.favoriteProductIds.filter(favoriteId => favoriteId.productId !== action.payload)
    },
    setFavoriteCategories(state, action: PayloadAction<Array<CategoryType>>) {
      state.favoriteCategories = action.payload
    },
    setFavoriteMinMaxPrices(state, action: PayloadAction<Array<number>>) {
      state.minPrice = action.payload[0]
      state.maxPrice = action.payload[1]
    },
    clearLatestFavoriteError(state) {
      if (state.errors.length > 0) {
        const returnArr = [...state.errors]
        returnArr.pop()
        state.errors = returnArr
      }
    },
  }
})

export default favoriteSlice.reducer