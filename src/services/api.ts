import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantArray: builder.query<Food[], void>({
      query: () => 'restaurante'
    }),
    getRestaurant: builder.query<Food, void>({
      query: () => 'restaurante'
    })
  })
})

export const { useGetRestaurantArrayQuery, useGetRestaurantQuery } = api

export default api
