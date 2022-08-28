import FavoriteApi from "http/favoriteApi"
import { favoriteSlice } from "redux/reducers/favoriteSlice"
import { AppDispatch } from "redux/store"
import { IAddFavoriteProduct, IRemoveFavoriteProduct } from "types/http/IFavoriteApi"
import { IGetProducts } from "types/http/IProductApi"

export const favoriteActionCreators = {
  getFavoriteProducts: ({page, amount, min, max, categoryId}: IGetProducts) => async (dispatch: AppDispatch) => {
    try {
      dispatch(favoriteSlice.actions.setLoading())
      const response = await FavoriteApi.getFavoriteProducts({page, amount, min, max, categoryId})
      dispatch(favoriteSlice.actions.setFavoriteProducts(response.favoriteProducts))
      dispatch(favoriteSlice.actions.setFavoriteItems(response.amountFavoriteProducts))
    } catch(e) {
      dispatch(favoriteSlice.actions.setError(e.response.data.message))
    } 
  },
  getFavoriteProductIds: () => async (dispatch: AppDispatch) => {
    const response = await FavoriteApi.getFavoriteProductIds()
    dispatch(favoriteSlice.actions.setFavoriteProductIds(response.favoriteIds))
  },
  addFavoriteProduct: ({productId}: IAddFavoriteProduct) => async (dispatch: AppDispatch) => {
    try {
      dispatch(favoriteSlice.actions.setLoading())
      const response = await FavoriteApi.addFavoriteProduct({productId})
      if (response.status === 200) {
        dispatch(favoriteSlice.actions.addFavoriteId(productId))
      }
    } catch(e) {
      dispatch(favoriteSlice.actions.setError(e.response.data.message))
    }
  },
  removeFavoriteProduct: ({productId}: IRemoveFavoriteProduct) => async (dispatch: AppDispatch) => {
    try {
      dispatch(favoriteSlice.actions.setLoading())
      const response = await FavoriteApi.removeFavoriteProduct({productId})
      if (response.status === 200) {
        dispatch(favoriteSlice.actions.removeFavoriteId(productId))
      }
    } catch(e) {
      dispatch(favoriteSlice.actions.setError(e.response.data.message))
    }
  },
  getFavoriteCategories: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(favoriteSlice.actions.setLoading())
      const response = await FavoriteApi.getFavoriteCategories()
      dispatch(favoriteSlice.actions.setFavoriteCategories(response.favoriteCategories))
    } catch(e) {
      dispatch(favoriteSlice.actions.setError(e.response.data.message))
    }
  },
  getFavoriteMinMaxPrices: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(favoriteSlice.actions.setLoading())
      const response = await FavoriteApi.getFavoriteMinMaxPrices()
      dispatch(favoriteSlice.actions.setFavoriteMinMaxPrices([response.minPrice, response.maxPrice]))
    } catch(e) {
      dispatch(favoriteSlice.actions.setError(e.response.data.message))
    }
  },
  clearLatestFavoriteError: () => async (dispatch: AppDispatch) => {
    dispatch(favoriteSlice.actions.clearLatestFavoriteError())
  }
}