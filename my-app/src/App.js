import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routes from './routes/Product.routes';
import { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import axios from "axios"
import Maincontext from './context/context';
import toast from 'react-hot-toast';

const router = createBrowserRouter(Routes)
function App() {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [favorites, setFavorites] = useState(
    localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : []
  );



  const addToFavorites = (id) => {
    let item = product.find((item) => item._id === id);

    const storedFavorites = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : [];

    if (!storedFavorites.find((favItem) => favItem._id === id)) {
      const updatedFavorites = [...storedFavorites, item];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

      toast.success(' Fovoritesə əlavə olundu');
    } else {
      toast.error("item movcuddur")
    }
  };


  useEffect(() => {
    axios.get("http://localhost:8082/products").then(res => {
      console.log(res.data);
      setProduct(res.data)
      setLoading(false)
    }).catch(error => {
      setLoading(false)
      setError(error)
    })
  }, [])

  const datas = {
    product, setProduct,
    loading, setLoading,
    error, setError,
    favorites, setFavorites,
    addToFavorites
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
