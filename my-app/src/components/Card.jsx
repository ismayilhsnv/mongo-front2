import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Maincontext from '../context/context';

const Card = ({ item }) => {
  const { addToWishList } = useContext(Maincontext)
  return (
    <>
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "30px" }}>
        <span style={{ marginTop: "10px" }}>{item.desc}</span>
        <img src={item.image} alt="" style={{ width: "400px", height: "300px", marginTop: "10px" }} />
        <span style={{ marginTop: "10px" }}>{item.price}</span>
        <button onClick={() => {
          addToWishList(item)
        }}>Add To Wishlist</button>
        <Link to={`/${item._id}`}>Detail</Link>
        <Toaster />
      </div>
    </>
  )
}

export default Card