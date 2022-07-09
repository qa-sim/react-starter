import { createSlice } from '@reduxjs/toolkit'
import { AppState } from 'features/app/types'

const initialState = {
  isDarkMode: false,
} as AppState

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload
    },
  },
})

export default appSlice
