import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router';

import './index.scss'

import MainLayout from './layouts/MainLayout'
import AppRouter from './layouts/AppRouter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppRouter/>
  </StrictMode>,
)
