import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Maincontext from '../context/context';
import "./Card.css"

const Card = ({ item }) => {
  const { addToFavorites } = useContext(Maincontext)
  return (
    <>
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "30px" }}>
        <img src={item.image} alt="" style={{ width: "350px", height: "320px", marginTop: "10px" }} />
        <span style={{ marginTop: "10px" }}>{item.desc}</span>
        <span style={{ marginTop: "10px" }}>{item.price}</span>
        <button className='addToWishList' onClick={() => {
          addToFavorites(item._id)
        }}>Add To Wishlist</button>
        <Link className='addToDetail' to={`/${item._id}`} style={{textDecoration:"none",color:"black", marginTop:"10px",fontWeight:"700"}}>Detail</Link>
        <Toaster />
      </div>
    </>
  )
}

export default Card