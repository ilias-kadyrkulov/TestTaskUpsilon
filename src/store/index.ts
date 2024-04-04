import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { productsAPI } from '@/api/products.api'
import { myProductsSliceReducer } from './slices/myProducts.slice'
import { appSliceReducer } from './slices'

const rootReducer = combineReducers({
    [productsAPI.reducerPath]: productsAPI.reducer,
    myProductsReducer: myProductsSliceReducer,
    appReducer: appSliceReducer
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [productsAPI.reducerPath]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        }).concat(productsAPI.middleware),
    devTools: true
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
