import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from 'dtos/userApiDtos/ICheckAuthDto';

interface IUserState {
  isAuth: boolean
  user: UserType
  isLoading: boolean
  errors: Array<string>
  successes: Array<string>
}

const initialState: IUserState = {
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
  errors: [],
  successes: []
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
      state.successes = [action.payload, ...state.successes]
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.errors = [action.payload, ...state.errors]
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
    },
    clearLatestError(state) {
      if (state.errors.length > 0) {
        const returnArr = [...state.errors]
        returnArr.pop()
        state.errors = returnArr
      }
    },
    clearLatestSuccess(state) {
      if (state.successes.length > 0) {
        const returnArr = [...state.successes]
        returnArr.pop()
        state.successes = returnArr
      }
    }
  }
})

export default userSlice.reducer