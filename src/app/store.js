import { configureStore } from '@reduxjs/toolkit'
import { starWarsPeopleApi } from '../services/starWarsApiSlice'
import starWarsPeopleReducer from '../services/starWarsPeopleSlice'
import themeReducer from '../services/themeSlice'
import paginationReducer from '../services/paginationSlice'

export const store = configureStore({
  reducer: {
    [starWarsPeopleApi.reducerPath]: starWarsPeopleApi.reducer,
    starWarsPeople: starWarsPeopleReducer,
    theme: themeReducer,
    page: paginationReducer,
  },
})
