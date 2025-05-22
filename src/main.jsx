import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import { DatesProvider } from '@mantine/dates';
import '@mantine/core/styles.css';
import App from './App.jsx'
import { MantineProvider } from '@mantine/core';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <MantineProvider defaultColorScheme="dark">
        <DatesProvider settings={{ locale: 'ru' }}>
          <App />
        </DatesProvider>
      </MantineProvider>
    </HashRouter>
  </StrictMode>,
)
