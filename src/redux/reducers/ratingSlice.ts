import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RatingType } from "dtos/ratingApiDtos/getRatingDto/IGetRatingDto";

interface IRatingSlice {
  isLoading: boolean;
  ratings: Array<RatingType>
}

const initialState: IRatingSlice = {
  isLoading: false,
  ratings: []
}

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true
    },
    setRatings(state, action: PayloadAction<Array<RatingType>>) {
      state.ratings = action.payload
    },
    addRating(state, action: PayloadAction<RatingType>) {
      state.ratings = [...state.ratings, action.payload]
    },
    changeRating(state, action: PayloadAction<RatingType>) {
      state.ratings = state.ratings.map(rating => {
        if (rating.id === action.payload.id) {
          rating = action.payload
        }
        return rating
      })
    },
    deleteRating(state, action: PayloadAction<number>) {
      state.ratings = state.ratings.filter(rating => rating.productId !== action.payload)
    }
  }
})

export default ratingSlice.reducer