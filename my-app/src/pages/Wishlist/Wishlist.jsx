import React, { useContext, useState } from 'react'

import "./WishList.css"

const Wishlist = () => {
  
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );
  const deleteFavorites =(id)=>{
    let item = favorites.find(item=>item._id==id)
    favorites.splice(favorites.indexOf(item),1)
    setFavorites([...favorites])
    localStorage.setItem("favorites",JSON.stringify([...favorites]))
  }
  const handleDelete = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  return (
    <>
      <button style={{ marginBottom: '5px' , marginLeft:'90%', fontWeight:'700',}} className='btn btn-danger' onClick={handleDelete}>Clear All</button>
      <div className='items'>
        {
          favorites.map((item, index) => {
            return <div className='item' key={index}>
              <img style={{ width: "320px", height: "280px" }} src={item.image} alt="" />
              <span>{item.desc}</span>
              <span>{item.price}</span>
              <button style={{ width: "100px", height: "40px", backgroundColor: 'red', color: 'white', border: "none", borderRadius: "5px" }} onClick={() => {
                deleteFavorites(item._id)
              }}
              >Delete</button>
            </div>
          })
        }
      </div>
    </>

  )
}

export default Wishlist