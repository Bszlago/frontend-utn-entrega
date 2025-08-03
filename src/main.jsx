import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import './index.css'
import ContactContextProvider from './Context/ContactContext.jsx'
import AppThemeContextProvider from './Context/AppThemeContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AppThemeContextProvider>
            <App />
        </AppThemeContextProvider>
    </BrowserRouter>
)