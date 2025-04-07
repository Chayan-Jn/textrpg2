import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'
import { HealthProvider } from '../Contexts/PlayerHealth';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HealthProvider>
        <App/>
    </HealthProvider>
  </StrictMode>,
)
