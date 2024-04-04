import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TList } from '../types/app.types'

type TState = {
    activeProductList: TList
}

const initialState: TState = {
    activeProductList: 'Fake Store Products'
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setActiveProductList: (state, action: PayloadAction<TList>) => {
            state.activeProductList = action.payload
        }
    }
})

export const appSliceReducer = appSlice.reducer
export const appSliceActions = appSlice.actions
