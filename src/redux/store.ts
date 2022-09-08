import categoriesSlice from './reducers/categoriesSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketSlice from "./reducers/basketSlice";
import favoriteSlice from "./reducers/favoriteSlice";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";
import ratingSlice from './reducers/ratingSlice';
// import { userAPI } from "services/UserService";

const rootReducer = combineReducers({
  user: userSlice,
  product: productSlice,
  favorite: favoriteSlice,
  basket: basketSlice,
  categories: categoriesSlice,
  rating: ratingSlice
  // [userAPI.reducerPath]: userAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDM) => {
    //   return getDM().concat(userAPI.middleware)
    // }
  })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default setupStore