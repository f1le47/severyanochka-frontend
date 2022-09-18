import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from 'dtos/userApiDtos/checkAuthDto/ICheckAuthDto';
import { SavingsCardType } from 'dtos/userApiDtos/savingsCardDto/ISavingsCardDto';

interface IUserState {
  isAuth: boolean
  user: UserType
  savingsCard: SavingsCardType
  isLoading: boolean
}

const initialState: IUserState = {
  isAuth: false,
  user: {
    id: 0,
    phoneNumber: '',
    name: '',
    surname: '',
    birthday: '',
    region: '',
    city: '',
    gender: 'male',
    role: '',
    isActivated: false,
    haveSavingsCard: false,
  },
  savingsCard: {
    numberOfPoints: 0,
    userId: 0
  },
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true
    },
    setLoaded(state) {
      state.isLoading = false
    },
    setAuth(state, action: PayloadAction<UserType>) {
      state.isLoading = false
      state.isAuth = true
      state.user = action.payload
    },
    setUserNullify(state) {
      state.isAuth = false
      state.user = {
        id: 0,
        phoneNumber: '',
        name: '',
        surname: '',
        birthday: '',
        region: '',
        city: '',
        gender: 'male',
        role: '',
        isActivated: false,
        haveSavingsCard: false,
      }
    },
    setSavingsCard(state, action: PayloadAction<SavingsCardType>) {
      state.savingsCard = action.payload;
    }
  }
})

export default userSlice.reducer