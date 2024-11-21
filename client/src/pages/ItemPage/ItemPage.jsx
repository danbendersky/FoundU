import { useState } from 'react'
import './ItemPage.css';
import Item from './Item'

function ItemPage() {
    const [item, setItem] = useState(
      {
        id: 1,
        imageUrl: "https://i.postimg.cc/YScH2ZNj/image.png",
        title: "Blue Water Bottle",
        description: "Found in the lobby of the ILC. In the blue chair.",
        date: "October 30th, 2024 9:45 A.M"
      }
    );
    
    const [search, setSearch] = useState()

    const handleItemChange = (event) =>{
        setSearch(event.value)
    }


  return (
    <>
    <div className = "parent">
        
        <input 
        className = "search"
        type = "text"
        value = {search}
        placeholder = "Search for an Item"
        onChange = {handleItemChange}/>
        
        <Item item={item} />

    </div>
       
    
    </>
  )
}

export default ItemPage

