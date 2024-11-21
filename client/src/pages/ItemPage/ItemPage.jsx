import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import Form from '../../components/Form/Form';
import './ItemPage.css';
import LostItemImg from "./blueBottle.png";

function ItemPage() {
    const [item, setItem] = useState("");

    const handleItemChange = (event) =>{
        setItem(event.target.value);
    }
    const lost = "Blue Water Bottle";
    const date = "October 30th, 2024 9:45 A.M"
  return (
    <>
    <div className = "parent">
        
        <input 
        className = "search"
        type = "text"
        value = {item}
        placeholder = "Search for an Item"
        onChange = {handleItemChange}/>
        
        <h1 className = "itemTitle">{lost}</h1>
        <img src = {LostItemImg}
        alt = "Lost Item"
        className = "itemImg"/>
        <h3 className = "description">Location: </h3>
        <a className = "link description" href = "#">Integrative Learning Center</a>
        <h3 className = "location description">Location Description: </h3>
        <p className = "mtop0 description">Found in the lobby of the ILC. In the blue chair. </p>
        <h3 className = "mtop0 description">Posted: </h3>
        <p className = "description mtop0">{date}</p>
        <button className = "claim">Claim your Item! ✅</button>
        
    </div>
       
    
    </>
  )
}

export default ItemPage

