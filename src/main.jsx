import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirstSceneProvider } from './contexts/FirstSceneContext.jsx'
import { ContactFormProvider } from './contexts/ContactForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactFormProvider>
      <FirstSceneProvider>
        <App />
      </FirstSceneProvider>
    </ContactFormProvider>
  </React.StrictMode>,
)
