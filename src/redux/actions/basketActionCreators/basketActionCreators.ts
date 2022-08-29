import { IAddBasketProduct } from 'types/http/IBasketApi';
import { IRemoveBasketProduct } from './../../../types/http/IBasketApi';
import basketApi from 'http/basketApi';
import {basketSlice} from 'redux/reducers/basketSlice';
import { AppDispatch } from 'redux/store';
export const basketActionCreators = {
  getBasketProducts: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(basketSlice.actions.setLoading())
      const response = await basketApi.getBasketProducts()
      dispatch(basketSlice.actions.setBasketProducts(response.basketProducts))
    } catch(e) {}
  },
  addBasketProduct: ({productId}: IAddBasketProduct) => async (dispatch: AppDispatch) => {
    try {
      dispatch(basketSlice.actions.setLoading())
      const response = await basketApi.addBasketProduct({productId})
      dispatch(basketSlice.actions.addRemBasketProduct(response.basketProduct))
    } catch(e) {}
  },
  addNewBasketProduct: ({productId}: IAddBasketProduct) => async (dispatch: AppDispatch) => {
    try {
      dispatch(basketSlice.actions.setLoading())
      const response = await basketApi.addBasketProduct({productId})
      dispatch(basketSlice.actions.addNewBasketProduct(response.basketProduct))
    } catch(e) {}
  },
  removeBasketProduct: ({productId}: IRemoveBasketProduct) => async (dispatch: AppDispatch) => {
    try {
      dispatch(basketSlice.actions.setLoading())
      const response = await basketApi.removeBasketProduct({productId})
      if (!Array.isArray(response.basketProduct)) {
        dispatch(basketSlice.actions.addRemBasketProduct(response.basketProduct))
      } else {
        dispatch(basketSlice.actions.fullRemoveFromBasket(productId))
      }
    } catch(e) {}
  },
  getAmountBasketProducts: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(basketSlice.actions.setLoading())
      const response = await basketApi.getAmountBasketProducts()
      dispatch(basketSlice.actions.setAmountBasketProducts(response.amountBasketProducts))
    } catch(e) {}
  }
}