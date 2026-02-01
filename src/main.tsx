import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './assets/conponents/Navbar'
import Background from './assets/conponents/Background'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <Background/>
  </StrictMode>,
)
