import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "dtos/productApiDtos/getProductsDto/IGetProducts";

interface IProductSlice {
  isLoading: boolean
  products: Array<ProductType>
  discountProducts: Array<ProductType>
  latestProducts: Array<ProductType>
  product: ProductType
  errors: Array<string>
}

const initialState: IProductSlice = {
  isLoading: false,
  products: [],
  discountProducts: [],
  latestProducts: [],
  product: {
    id: 0,
    name: '',
    brand: {id: 0, name: ''},
    category: {id: 0, name: '', img: ''},
    discount: null,
    img: '',
    isFavorited: false,
    price: 0,
    rating: 0,
    weight: 0
  },
  errors: [],
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
    setProduct(state, action: PayloadAction<ProductType>) {
      state.product = action.payload
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