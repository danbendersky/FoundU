import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import ItemPage from '../../components/ItemDescription/ItemDescription';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ItemPage />
  </StrictMode>,
)

