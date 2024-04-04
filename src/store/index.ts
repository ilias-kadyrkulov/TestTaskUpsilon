import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productsAPI } from '@/api/products.api'
import { productsSliceReducer } from './slices/products.slice'

const rootReducer = combineReducers({
    [productsAPI.reducerPath]: productsAPI.reducer,
    productsReducer: productsSliceReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(productsAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
