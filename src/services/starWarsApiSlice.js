import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://swapi.dev/api/'

export const starWarsPeopleApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getStarWarsPeople: builder.query({
      query: (page) => `/people?page=${page}`,
    }),
    getStarWarsCurrentPeople: builder.query({
      query: (peopleIndex) => `/people/${peopleIndex}`,
    }),
  }),
})

export const { useGetStarWarsPeopleQuery, useGetStarWarsCurrentPeopleQuery } =
  starWarsPeopleApi
