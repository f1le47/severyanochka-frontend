export interface IRegistration {
  phoneNumber: string
  surname: string
  name: string
  password: string
  birthday: string
  region: string
  city: string
  gender: 'male' | 'female'
}

export interface ILogin {
  phoneNumber: string,
  password: string
}

export interface IConfirmCode {
  phoneNumber: string,
  code: number
}

export interface IRestorePassword {
  phoneNumber: string
}

export interface IResendCode {
  phoneNumber: string
}

export interface INewPassword {
  phoneNumber: string
  password: string
}