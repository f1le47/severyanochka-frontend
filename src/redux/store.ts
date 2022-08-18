import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
// import { userAPI } from "services/UserService";
import userSlice from "./reducers/userSlice";

const rootReducer = combineReducers({
  user: userSlice,
  product: productSlice
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