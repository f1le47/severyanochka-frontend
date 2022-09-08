import ratingApi from 'http/ratingApi';
import {ratingSlice} from 'redux/reducers/ratingSlice';
import { AppDispatch } from 'redux/store';
import { IAddRating, IChangeRating, IDeleteRating, IGetRating } from 'types/http/IRatingApi';
export const ratingActionCreators = {
  getRatings: ({productId}: IGetRating) => async (dispatch: AppDispatch) => {
    try {
      dispatch(ratingSlice.actions.setLoading())
      const response = await ratingApi.getRating({productId})
      dispatch(ratingSlice.actions.setRatings(response.ratings))
    } catch(e) {}
  },
  addRating: ({comment, productId, rate}: IAddRating) => async (dispatch: AppDispatch) => {
    try {
      dispatch(ratingSlice.actions.setLoading())
      const response = await ratingApi.addRating({productId, comment, rate})
      dispatch(ratingSlice.actions.addRating(response.rating))
    } catch(e) {}
  },
  changeRating: ({comment, productId, rate}: IChangeRating) => async (dispatch: AppDispatch) => {
    try {
      dispatch(ratingSlice.actions.setLoading())
      const response = await ratingApi.changeRating({productId, comment, rate})
      dispatch(ratingSlice.actions.changeRating(response.rating))
    } catch(e) {}
  },
  deleteRating: ({productId}: IDeleteRating) => async (dispatch: AppDispatch) => {
    try {
      dispatch(ratingSlice.actions.setLoading())
      const response = await ratingApi.deleteRating({productId})
      dispatch(ratingSlice.actions.deleteRating(productId))
    } catch(e) {}
  }
}