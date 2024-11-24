import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import ItemPage from '../../components/ItemDescription/ItemDescription';
import Nav from '../../components/Nav/Nav.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <ItemPage />
  </StrictMode>,
)

