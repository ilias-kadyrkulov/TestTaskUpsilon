import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
    TCreateProduct,
    TEditProduct,
    TProduct,
    TRequest,
    TResponse
} from './products.types'

export const productsAPI = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_URL
    }),
    tagTypes: ['Products'],
    endpoints: builder => ({
        getProducts: builder.query<TResponse, TRequest>({
            query: ({ limit = 8 }) => ({
                url: '',
                params: {
                    limit: limit
                }
            }),
            providesTags: ['Products']
        }),
        getSingleProduct: builder.query<TProduct, number>({
            query: id => ({
                url: `/${id}`
            })
        }),
        addNewProduct: builder.mutation<TProduct, TCreateProduct>({
            query: params => ({
                url: '',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            })
        }),
        updateProduct: builder.mutation<TProduct, TEditProduct>({
            query: ({id, ...restParams}) => ({
                url: `/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(restParams)
            }),
            invalidatesTags: ['Products']
        })
    })
})

export const {
    useLazyGetProductsQuery,
    useLazyGetSingleProductQuery,
    useAddNewProductMutation,
    useUpdateProductMutation
} = productsAPI
