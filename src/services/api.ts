import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-havokk.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantArray: builder.query<Food[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Food, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantArrayQuery, useGetRestaurantQuery } = api

export default api
