import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAPI } from "services/UserService";
import authSlice from "./reducers/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  [userAPI.reducerPath]: userAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDM) => {
      return getDM().concat(userAPI.middleware)
    }
  })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default setupStore