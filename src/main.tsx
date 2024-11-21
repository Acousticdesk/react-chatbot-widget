import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// todo akicha: remove the index/main/App files since we don't need them as we test in Storybook
// and ditribute the app as an npm package
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
