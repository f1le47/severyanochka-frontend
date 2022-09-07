import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CategoryType } from "dtos/categoryApiDtos/getCategoriesDto/IGetCategoriesDto"
import { ProductType } from "dtos/productApiDtos/getProductsDto/IGetProducts"

interface ICategoriesSlice {
  isLoading: boolean
  categories: Array<CategoryType>
  productsByCategoryId: Array<ProductType>
  amountProducts: number
  minPrice: number
  maxPrice: number
}

const initialState: ICategoriesSlice = {
  isLoading: false,
  categories: [],
  productsByCategoryId: [],
  amountProducts: 0,
  minPrice: 0,
  maxPrice: 1,
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true;
    },
    setLoaded(state) {
      state.isLoading = false;
    },
    setCategories(state, action: PayloadAction<Array<CategoryType>>) {
      state.categories = action.payload;
    },
    setProductsByCategoryId(state, action: PayloadAction<Array<ProductType>>) {
      state.productsByCategoryId = action.payload;
    },
    setAmountProducts(state, action: PayloadAction<number>) {
      state.amountProducts = action.payload;
    },
    setMinMaxPrices(state, action: PayloadAction<[number, number]>) {
      state.minPrice = action.payload[0];
      state.maxPrice = action.payload[1];
    }
  }
})

export default categoriesSlice.reducer