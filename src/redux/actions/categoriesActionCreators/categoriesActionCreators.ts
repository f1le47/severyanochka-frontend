import { notificationSlice } from './../../reducers/notificationSlice';
import CategoryApi from "http/categoryApi";
import {categoriesSlice} from "redux/reducers/categoriesSlice";
import { AppDispatch } from "redux/store";
import { IGetByCategoryId, IMinMaxPrices } from "types/http/ICategoryApi";

export const categoriesActionCreators = {
  getCategories: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(categoriesSlice.actions.setLoading())
      const response = await CategoryApi.getCategories()
      dispatch(categoriesSlice.actions.setCategories(response.categories))
      dispatch(categoriesSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(categoriesSlice.actions.setLoaded())
    }
  },
  getByCategoryId: ({id, amount, page, max, min}: IGetByCategoryId) => async (dispatch: AppDispatch) => {
    try {
      dispatch(categoriesSlice.actions.setLoading())
      const response = await CategoryApi.getByCategoryId({id, page, amount, max, min})
      dispatch(categoriesSlice.actions.setProductsByCategoryId(response.productsById))
      dispatch(categoriesSlice.actions.setAmountProducts(response.amountProducts))
      dispatch(categoriesSlice.actions.setLoaded())
    } catch(e) {
      // dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(categoriesSlice.actions.setLoaded())
    }
  },
  getMinMaxPrices: ({id}: IMinMaxPrices) => async (dispatch: AppDispatch) => {
    try {
      dispatch(categoriesSlice.actions.setLoading())
      const response = await CategoryApi.getMinMaxPrices({id})
      dispatch(categoriesSlice.actions.setMinMaxPrices([response.minPrice, response.maxPrice]))
      dispatch(categoriesSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(categoriesSlice.actions.setLoaded())
    }
  }
}