import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routes from './routes/Product.routes';
import { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import axios from "axios"
import Maincontext from './context/context';

const router = createBrowserRouter(Routes)
function App() {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [wishListItems, setWishListItems] = useState(localStorage.getItem("wishlistItems" ? JSON.parse(localStorage.getItem("wishlistItems")) : []))

  useEffect(() => {
    axios.get("http://localhost:8082/products/").then(res => {
      console.log(res.data);
      setProduct(res.data)
      setLoading(false)
    }).catch(error => {
      setLoading(false)
      setError(error)
    })
  }, [])

  const deletedWishList = (id) => {
    const target = wishListItems.find(item => item._id === id)
    wishListItems.splice(wishListItems.indexOf(target), 1)
    localStorage.setItem("wishlistItem", JSON.stringify([...wishListItems, target]))
  }

  const addToWishList = (item) => {
    const target = wishListItems.find(wishListItems => wishListItems._id === item._id)
    if (target) {
      console.error("item movcuddur");
    }
    else {
      setWishListItems([...wishListItems])
      localStorage.setItem("wishlistItem", JSON.stringify([...wishListItems, item]))
    }
  }

  const datas = {
    product, setProduct,
    loading, setLoading,
    error, setError,
    wishListItems, setWishListItems,
    addToWishList, deletedWishList
  }
  return (
    <>
      <Maincontext.Provider value={datas}>
        <RouterProvider router={router}>
          <Home />
        </RouterProvider>
      </Maincontext.Provider>
    </>

  );
}

export default App;
