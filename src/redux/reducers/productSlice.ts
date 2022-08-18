import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "dtos/productApiDtos/IGetProducts";

interface IProductSlice {
  isLoading: boolean
  products: Array<ProductType>
  discountProducts: Array<ProductType>
  latestProducts: Array<ProductType>
  errors: Array<string>
}

const initialState: IProductSlice = {
  products: [],
  discountProducts: [],
  latestProducts: [],
  errors: [],
  isLoading: false
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.errors = [action.payload, ...state.errors]
    },
    setProducts(state, action: PayloadAction<Array<ProductType>>) {
      state.products = action.payload
    },
    setDiscountProducts(state, action: PayloadAction<Array<ProductType>>) {
      state.discountProducts = action.payload
    },
    setLatestProducts(state, action: PayloadAction<Array<ProductType>>) {
      state.latestProducts = action.payload
    },
    clearLatestProductError(state) {
      if (state.errors.length > 0) {
        const returnArr = [...state.errors]
        returnArr.pop()
        state.errors = returnArr
      }
    },
  }
})

export default productSlice.reducer