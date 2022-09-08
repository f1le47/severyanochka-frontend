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
    } catch(e) {
      dispatch(productSlice.actions.setError(e.response.data.message))
    }
  },
  getDiscountProducts: ({page, amount}: IGetProducts) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.setLoading())
      const response = await ProductApi.getDiscountProducts({page, amount})
      dispatch(productSlice.actions.setDiscountProducts(response.products))
    } catch(e) {
      dispatch(productSlice.actions.setError(e.response.data.message))
    }
  },
  getLatestProducts: ({page, amount}: IGetProducts) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.setLoading())
      const response = await ProductApi.getLatestProducts({page, amount})
      dispatch(productSlice.actions.setLatestProducts(response.products))
    } catch(e) {
      dispatch(productSlice.actions.setError(e.response.data.message))
    }
  },
  getProduct: ({id}: IGetProduct) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.setLoading())
      const response = await ProductApi.getProduct({id})
      dispatch(productSlice.actions.setProduct(response.product))
    } catch(e) {}
  },
  clearLatestProductError: () => async (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.clearLatestProductError())
  }
}