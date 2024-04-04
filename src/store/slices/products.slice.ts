import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {}
})

export const productsSliceReducer = productsSlice.reducer
export const productsSliceActions = productsSlice.actions