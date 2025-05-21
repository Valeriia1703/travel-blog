import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import App from './App.jsx'
import { MantineProvider } from '@mantine/core';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <MantineProvider defaultColorScheme="dark">
        <App />
      </MantineProvider>
    </HashRouter>
  </StrictMode>,
)
