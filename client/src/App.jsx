import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
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
