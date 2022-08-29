import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddBasketProductDto } from 'dtos/basketApiDtos/addBasketProductDto/IAddBasketProductDto';
import { BasketProductType } from 'dtos/basketApiDtos/getBasketProductsDto/IGetBasketProduct';

interface IBasketSlice {
  isLoading: boolean;
  basketProducts: Array<BasketProductType>
  amountBasketProducts: number
}

const initialState: IBasketSlice = {
  isLoading: false,
  basketProducts: [],
  amountBasketProducts: 0
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true
    },
    setBasketProducts(state, action: PayloadAction<Array<BasketProductType>>) {
      state.basketProducts = action.payload
    },
    addRemBasketProduct(state, action: PayloadAction<BasketProductType>) {
      state.basketProducts = state.basketProducts.map(basketProduct => {
        if (basketProduct.productId === action.payload.productId) {
          basketProduct.amount = action.payload.amount
        }

        return basketProduct
      })
    },
    addNewBasketProduct(state, action: PayloadAction<BasketProductType>) {
      state.basketProducts = [...state.basketProducts, action.payload]
      state.amountBasketProducts = state.amountBasketProducts + 1
    },
    fullRemoveFromBasket(state, action: PayloadAction<number>) {
      state.basketProducts = state.basketProducts.filter(basketProduct => basketProduct.productId !== action.payload)
      if (state.amountBasketProducts > 0) {
        state.amountBasketProducts = state.amountBasketProducts - 1
      }
    },
    setAmountBasketProducts(state, action: PayloadAction<number>) {
      state.amountBasketProducts = action.payload
    }
  }
})

export default basketSlice.reducer