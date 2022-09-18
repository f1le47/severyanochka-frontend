import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface INotificationSlice {
  errors: Array<string>
  successes: Array<string>
}

const initialState: INotificationSlice = {
  errors: [],
  successes: [],
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setSuccess(state, action: PayloadAction<string>) {
      if (!!action.payload) {
        state.successes = [action.payload, ...state.successes]
      }
    },
    setError(state, action: PayloadAction<string>) {
      if (!!action.payload) {
        state.errors = [action.payload, ...state.errors]
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

export default notificationSlice.reducer