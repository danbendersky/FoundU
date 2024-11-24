import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import FormPage from './pages/FormPage/FormPage.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import "leaflet/dist/leaflet.css";
function App() {
  const [page, setPage] = useState("ItemPage");
  return (
    <>
      <Nav />
      <MainPage />
    </>
  )
}



export default App
