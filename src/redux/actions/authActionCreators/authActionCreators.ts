import { notificationSlice } from './../../reducers/notificationSlice';
import { INewPassword } from './../../../types/http/IUserApi';
import { checkAuth, confirmCode, login, logout, registration, restorePassword, resendCode, newPassword, savingsCard } from 'http/userApi';
import { AppDispatch } from '../../store';
import { userSlice } from '../../reducers/userSlice';
import { IConfirmCode, ILogin, IRegistration, IResendCode, IRestorePassword } from 'types/http/IUserApi';

export const authActionCreators = {
  login: ({phoneNumber, password}: ILogin): any => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await login({password, phoneNumber})
      dispatch(notificationSlice.actions.setSuccess(response.message))
      dispatch(authActionCreators.checkAuth()) // НЕ ПРАВИЛЬНАЯ ЛОГИКА
      dispatch(userSlice.actions.setLoaded())
      return response.status
    } catch (e) {
      const error = e.response.data.message
      dispatch(notificationSlice.actions.setError(error))
      dispatch(userSlice.actions.setLoaded())
    }
  },
  checkAuth: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await checkAuth()
      dispatch(userSlice.actions.setAuth(response.user))
      dispatch(userSlice.actions.setLoaded())
      return response.status
    } catch (e) {
      dispatch(userSlice.actions.setLoaded())
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await logout()
      dispatch(notificationSlice.actions.setSuccess(response.message))
      dispatch(userSlice.actions.setUserNullify())
      dispatch(userSlice.actions.setLoaded())
      return response.status
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(userSlice.actions.setLoaded())
    }
  },
  registration: ({birthday, city, gender, name, password, phoneNumber, region, surname}: IRegistration): any => {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(userSlice.actions.setLoading())
        const response = await registration({birthday, city, gender, name, password, phoneNumber, region, surname})
        dispatch(notificationSlice.actions.setSuccess(response.message))
        dispatch(userSlice.actions.setLoaded())
        return response.status
      } catch (e) {
        dispatch(notificationSlice.actions.setError(e.response.data.message))
        dispatch(userSlice.actions.setLoaded())
      }
    }
  },
  confirmCode: ({phoneNumber, code}: IConfirmCode): any => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await confirmCode({phoneNumber, code})
      dispatch(notificationSlice.actions.setSuccess(response.message))
      dispatch(authActionCreators.checkAuth())
      dispatch(userSlice.actions.setLoaded())
      return response.status
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(userSlice.actions.setLoaded())
    }
  },
  resendCode: ({phoneNumber}: IResendCode) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await resendCode({phoneNumber})
      dispatch(notificationSlice.actions.setSuccess(response.message))
      dispatch(userSlice.actions.setLoaded())
      return response.status
    } catch (e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(userSlice.actions.setLoaded())
    }
  },
  restorePassword: ({phoneNumber}: IRestorePassword) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await restorePassword({phoneNumber})
      dispatch(notificationSlice.actions.setSuccess(response.message))
      dispatch(userSlice.actions.setLoaded())
      return response.status
    } catch (e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(userSlice.actions.setLoaded())
    }
  },
  newPassword: ({phoneNumber, password}: INewPassword): any => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await newPassword({phoneNumber, password})
      dispatch(notificationSlice.actions.setSuccess(response.message))
      dispatch(userSlice.actions.setLoaded())
      return response.status
    } catch (e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(userSlice.actions.setLoaded())
    }
  },
  savingsCard: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.setLoading())
      const response = await savingsCard()
      dispatch(userSlice.actions.setSavingsCard(response.savingsCard))
      dispatch(userSlice.actions.setLoaded())
    } catch(e) {
      dispatch(userSlice.actions.setLoaded())
    }
  }
}