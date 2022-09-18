import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "dtos/productApiDtos/getProductsDto/IGetProducts";

interface IProductSlice {
  isLoading: boolean
  products: Array<ProductType>
  discountProducts: Array<ProductType>
  latestProducts: Array<ProductType>
  product: ProductType
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
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true
    },
    setLoaded(state) {
      state.isLoading = false
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
    }
  }
})

export default productSlice.reducer