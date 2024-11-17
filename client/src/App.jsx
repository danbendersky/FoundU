import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button'
import Nav from './components/Nav/Nav.jsx'
import FormPage from './pages/FormPage/FormPage.jsx'
function App() {
  return (
    <>
      <Nav />
      <FormPage />
    </>
  )
}

export default App
