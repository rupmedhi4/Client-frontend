import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routesHandler/routes';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './slices/productsSlice';
import { toast } from 'react-toastify';
import Header from './components/home/header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await dispatch(getAllProducts())
        if (res.type !== "product/getAllProducts/fulfilled") {
          toast.error("Something went wrong in fetching data try again...");
        }
      } catch (error) {
        toast.error("Something went wrong in fetching data try again...");
        console.log(error);
      }
    }
    fetchProducts()
  }, [])
  
  return (
    <Router>
      <Header/>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
        <Footer/>
    </Router>
  )
}
