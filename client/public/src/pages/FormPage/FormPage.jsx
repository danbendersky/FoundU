import "./FormPage.css"
import Form from '../../components/Form/Form';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)



