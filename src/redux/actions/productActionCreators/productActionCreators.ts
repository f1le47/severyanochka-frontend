import { notificationSlice } from './../../reducers/notificationSlice';
import ProductApi from "http/productApi"
import {productSlice} from "redux/reducers/productSlice"
import { AppDispatch } from "redux/store"
import { IGetProduct, IGetProducts } from "types/http/IProductApi"

export const productActionCreators = {
  getProducts: ({page, amount}: IGetProducts) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.setLoading())
      const response = await ProductApi.getProducts({page, amount})
      dispatch(productSlice.actions.setProducts(response.products))
      dispatch(productSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(productSlice.actions.setLoaded())
    }
  },
  getDiscountProducts: ({page, amount}: IGetProducts) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.setLoading())
      const response = await ProductApi.getDiscountProducts({page, amount})
      dispatch(productSlice.actions.setDiscountProducts(response.products))
      dispatch(productSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(productSlice.actions.setLoaded())
    }
  },
  getLatestProducts: ({page, amount}: IGetProducts) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.setLoading())
      const response = await ProductApi.getLatestProducts({page, amount})
      dispatch(productSlice.actions.setLatestProducts(response.products))
      dispatch(productSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(productSlice.actions.setLoaded())
    }
  },
  getProduct: ({id}: IGetProduct) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.setLoading())
      const response = await ProductApi.getProduct({id})
      dispatch(productSlice.actions.setProduct(response.product))
      dispatch(productSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(productSlice.actions.setLoaded())
    }
  }
}