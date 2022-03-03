import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  people: {},
}

export const starWarsPeopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    savePeople: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { savePeople } = starWarsPeopleSlice.actions

export default starWarsPeopleSlice.reducer
