import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './store/index.ts'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import { ToastProvider } from 'react-toast-notifications'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ToastProvider>
                    <App />
                </ToastProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
