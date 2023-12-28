import './App.css';

import  { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Routes from './routes/Product.routes';
const router=createBrowserRouter(Routes)

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
