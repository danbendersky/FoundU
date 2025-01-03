import React from 'react'

function Item({ item }) {
  return (
    <>
        <h1 className = "itemTitle">{ item.title }</h1>
        <img src = { item.imageUrl}
        alt = "Lost Item"
        className = "itemImg"/>
        <h3 className = "location description">Location Description: </h3>
        <p className = "mtop0 description">{ item.description }</p>
        <h3 className = "mtop0 description">Posted: </h3>
        <p className = "description mtop0">{ item.date}</p>
        <button className = "claim">Claim your Item! ✅</button>
    </>
  )
}


export default Item
