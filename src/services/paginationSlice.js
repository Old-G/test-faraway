import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const paginationSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = paginationSlice.actions

export default paginationSlice.reducer
