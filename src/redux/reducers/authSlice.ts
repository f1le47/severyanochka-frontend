import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from 'dtos/userApiDtos/ICheckAuthDto';

interface AuthState {
  isAuth: boolean
  user: UserType
  isLoading: boolean
  error: string
  successMessage: string
}

const initialState: AuthState = {
  isAuth: false,
  user: {
    phoneNumber: '',
    name: '',
    surname: '',
    birthday: '',
    region: '',
    city: '',
    gender: 'male',
    role: '',
    isActivated: false
  },
  isLoading: false,
  error: '',
  successMessage: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true
    },
    setSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.successMessage = action.payload
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    setAuth(state, action: PayloadAction<UserType>) {
      state.isLoading = false
      state.isAuth = true
      state.user = action.payload
    },
    setWithoutError(state) {
      state.isLoading = false
    },
    setUserNullify(state) {
      state.isAuth = false
      state.user = {
        phoneNumber: '',
        name: '',
        surname: '',
        birthday: '',
        region: '',
        city: '',
        gender: 'male',
        role: '',
        isActivated: false
      }
    }
  }
})

export default userSlice.reducer