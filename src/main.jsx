import { createRoot } from 'react-dom/client'
import { Route, Routes } from 'react-router'
import App from './App.jsx'
import './index.css'
import ContactContextProvider from '.ContactContext.jsx'
import AppThemeContextProvider from './Context/AppThemeContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AppThemeContextProvider>
            <App />
        </AppThemeContextProvider>
    </BrowserRouter>
)