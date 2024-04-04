import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TRequest, TResponse } from './products.types'

export const productsAPI = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_URL
    }),
    endpoints: builder => ({
        getProducts: builder.query<TResponse, TRequest>({
            query: ({ limit = 8 }) => ({
                url: '',
                params: {
                    limit: limit
                }
            })
        })
    })
})

export const { useGetProductsQuery } = productsAPI