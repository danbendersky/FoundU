import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import FormPage from './pages/FormPage/FormPage.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
function App() {
  return (
    <>
      <Nav />
      <MainPage />
    </>
  )
}



export default App
