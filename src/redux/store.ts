import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from './reducers/categoriesSlice';
import basketSlice from "./reducers/basketSlice";
import favoriteSlice from "./reducers/favoriteSlice";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";
import ratingSlice from './reducers/ratingSlice';
import notificationSlice from './reducers/notificationSlice';

const rootReducer = combineReducers({
  user: userSlice,
  product: productSlice,
  favorite: favoriteSlice,
  basket: basketSlice,
  categories: categoriesSlice,
  rating: ratingSlice,
  notification: notificationSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default setupStore