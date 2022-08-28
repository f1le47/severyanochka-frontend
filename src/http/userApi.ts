import { $authInstance, $instance } from './index';
import { IConfirmCode, ILogin, IRegistration, IRestorePassword, IResendCode, INewPassword } from 'types/http/IUserApi';
import { DefaultDto } from 'dtos/DefaultDto';
import { CheckAuthDto } from 'dtos/userApiDtos/CheckAuthDto';

export const registration = async ({birthday, city, gender, name, password, phoneNumber, region, surname}: IRegistration) => {
  const response = await $instance.post('/user/registration', {phoneNumber, surname, name, password, birthday, region, city, gender})

  const responseDto = new DefaultDto({message: response.data.message, status: response.status})
  return {...responseDto}
}

export const login = async ({phoneNumber, password}: ILogin) => {
  const response = await $instance.post('/user/login', {phoneNumber, password})
  localStorage.setItem('accessToken', response.data.accessToken)

  const responseDto = new DefaultDto({message: response.data.message, status: response.status})
  return {...responseDto}
}

export const confirmCode = async ({code, phoneNumber}: IConfirmCode) => {
  const response = await $instance.post('/user/confirm-code', {code, phoneNumber})
  localStorage.setItem('accessToken', response.data.accessToken)

  const responseDto = new DefaultDto({message: response.data.message, status: response.status})
  return {...responseDto}
}

export const checkAuth = async () => {
  const response = await $authInstance.get('/user/auth')

  const responseDto = new CheckAuthDto({message: response.data.message, status: response.status, user: response.data.user})
  return {...responseDto}
}

export const logout = async () => {
  const response = await $authInstance.get('/user/logout')
  localStorage.removeItem('accessToken')

  const responseDto = new DefaultDto({message: response.data.message, status: response.status})
  return {...responseDto}
}

export const restorePassword = async ({phoneNumber}: IRestorePassword) => {
  const response = await $instance.post('/user/restore', {phoneNumber})

  const responseDto = new DefaultDto({message: response.data.message, status: response.status})
  return {...responseDto}
}

export const resendCode = async ({phoneNumber}: IResendCode) => {
  const response = await $instance.post('/user/resend-code', {phoneNumber})

  const responseDto = new DefaultDto({message: response.data.message, status: response.status})
  return {...responseDto}
}

export const refresh = async () => {
  const response = await $authInstance.get('/user/refresh')

  localStorage.setItem('accessToken', response.data.accessToken)
  
  const responseDto = new DefaultDto({message: response.data.message, status: response.status})
  return {...responseDto}
}

export const newPassword = async ({phoneNumber, password}: INewPassword) => {
  const response = await $instance.post('/user/new-password', {phoneNumber, password})

  const responseDto = new DefaultDto({message: response.data.message, status: response.status})
  return {...responseDto}
}
