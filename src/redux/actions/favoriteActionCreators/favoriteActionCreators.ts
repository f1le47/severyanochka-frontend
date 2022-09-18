import { notificationSlice } from './../../reducers/notificationSlice';
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
      dispatch(favoriteSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(favoriteSlice.actions.setLoaded())
    } 
  },
  getFavoriteProductIds: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(favoriteSlice.actions.setLoading())
      const response = await FavoriteApi.getFavoriteProductIds()
      dispatch(favoriteSlice.actions.setFavoriteProductIds(response.favoriteIds))
      dispatch(favoriteSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(favoriteSlice.actions.setLoaded())
    }
  },
  addFavoriteProduct: ({productId}: IAddFavoriteProduct) => async (dispatch: AppDispatch) => {
    try {
      dispatch(favoriteSlice.actions.setLoading())
      const response = await FavoriteApi.addFavoriteProduct({productId})
      if (response.status === 200) {
        dispatch(favoriteSlice.actions.addFavoriteId(productId))
      }
      dispatch(favoriteSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(favoriteSlice.actions.setLoaded())
    }
  },
  removeFavoriteProduct: ({productId}: IRemoveFavoriteProduct) => async (dispatch: AppDispatch) => {
    try {
      dispatch(favoriteSlice.actions.setLoading())
      const response = await FavoriteApi.removeFavoriteProduct({productId})
      if (response.status === 200) {
        dispatch(favoriteSlice.actions.removeFavoriteId(productId))
      }
      dispatch(favoriteSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(favoriteSlice.actions.setLoaded())
    }
  },
  getFavoriteCategories: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(favoriteSlice.actions.setLoading())
      const response = await FavoriteApi.getFavoriteCategories()
      dispatch(favoriteSlice.actions.setFavoriteCategories(response.favoriteCategories))
      dispatch(favoriteSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(favoriteSlice.actions.setLoaded())
    }
  },
  getFavoriteMinMaxPrices: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(favoriteSlice.actions.setLoading())
      const response = await FavoriteApi.getFavoriteMinMaxPrices()
      dispatch(favoriteSlice.actions.setFavoriteMinMaxPrices([response.minPrice, response.maxPrice]))
      dispatch(favoriteSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(favoriteSlice.actions.setLoaded())
    }
  }
}