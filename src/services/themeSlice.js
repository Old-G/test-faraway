import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    saveTheme: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { saveTheme } = themeSlice.actions

export default themeSlice.reducer
