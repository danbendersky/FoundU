import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button'
import Nav from './components/Nav/Nav.jsx'
import FormPage from './pages/FormPage/FormPage.jsx'
import ItemPage from './pages/ItemPage/ItemPage.jsx';
function App() {
  const [page, setPage] = useState("ItemPage");
  return (
    <>
      <Nav />
      {page === "FormPage" && <FormPage />}
      {page === "ItemPage" && <ItemPage />}
    </>
  )
}

export default App
