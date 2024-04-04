import { TProduct } from '@/api/products.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: TProduct[] = []

const myProductsSlice = createSlice({
    name: 'myProductsSlice',
    initialState,
    reducers: {
        setNewProduct: (state, action: PayloadAction<TProduct>) => {
            state.push(action.payload)
        }
    }
})

export const myProductsSliceReducer = myProductsSlice.reducer
export const myProductsSliceActions = myProductsSlice.actions
