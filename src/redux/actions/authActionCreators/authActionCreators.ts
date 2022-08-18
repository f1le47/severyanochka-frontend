import { INewPassword } from './../../../types/http/IUserApi';
import { checkAuth, confirmCode, login, logout, registration, restorePassword, resendCode, newPassword } from 'http/userApi';
import { AppDispatch } from '../../store';
import { userSlice } from '../../reducers/userSlice';
import { IConfirmCode, ILogin, IRegistration, IResendCode, IRestorePassword } from 'types/http/IUserApi';

export const authActionCreators = {
  login: ({phoneNumber, password}: ILogin): any => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await login({password, phoneNumber})
      console.log(response)
      dispatch(userSlice.actions.setSuccess(response.message))
      dispatch(authActionCreators.checkAuth())
      return response.status
    } catch (e) {
      const error = e.response.data.message
      dispatch(userSlice.actions.setError(error))
    }
  },
  checkAuth: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await checkAuth()
      dispatch(userSlice.actions.setAuth(response.user))

      return response.status
    } catch (e) {
      dispatch(userSlice.actions.setWithoutError())
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await logout()
      dispatch(userSlice.actions.setSuccess(response.message))
      dispatch(userSlice.actions.setUserNullify())
      return response.status
    } catch(e) {
      dispatch(userSlice.actions.setError(e.response.data.message))
    }
  },
  registration: ({birthday, city, gender, name, password, phoneNumber, region, surname}: IRegistration): any => {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(userSlice.actions.setLoading())
        const response = await registration({birthday, city, gender, name, password, phoneNumber, region, surname})
        dispatch(userSlice.actions.setSuccess(response.message))

        return response.status
      } catch (e) {
        dispatch(userSlice.actions.setError(e.response.data.message))
      }
    }
  },
  confirmCode: ({phoneNumber, code}: IConfirmCode): any => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await confirmCode({phoneNumber, code})
      dispatch(userSlice.actions.setSuccess(response.message))
      dispatch(authActionCreators.checkAuth())
      return response.status
    } catch(e) {
      dispatch(userSlice.actions.setError(e.response.data.message))
    }
  },
  resendCode: ({phoneNumber}: IResendCode) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await resendCode({phoneNumber})
      dispatch(userSlice.actions.setSuccess(response.message))
      return response.status
    } catch (e) {
      dispatch(userSlice.actions.setError(e.response.data.message))
    }
  },
  restorePassword: ({phoneNumber}: IRestorePassword) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await restorePassword({phoneNumber})
      dispatch(userSlice.actions.setSuccess(response.message))
      return response.status
    } catch (e) {
      dispatch(userSlice.actions.setError(e.response.data.message))
    }
  },
  newPassword: ({phoneNumber, password}: INewPassword): any => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await newPassword({phoneNumber, password})
      dispatch(userSlice.actions.setSuccess(response.message))
      return response.status
    } catch (e) {
      dispatch(userSlice.actions.setError(e.response.data.message))
    }
  },
  clearLatestError: () => async (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.clearLatestError())
  },
  clearLatestSuccess: () => async (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.clearLatestSuccess())
  }
}