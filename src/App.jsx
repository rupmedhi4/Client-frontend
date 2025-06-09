import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routesHandler/routes';
import Header from './components/home/header/Header';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './slices/productsSlice';
import { toast } from 'react-toastify';
import { fetchAddToCart } from './slices/cartSlice';
import Modal from './components/Modal/Modal';
import AddToCart from './components/addToCart/AddToCart';

export default function App() {
  const dispatch = useDispatch()
  const { isCartOpen,cartData } = useSelector((state) => state.cart)
  const { isLogin } = useSelector((state) => state.auth)


  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        await dispatch(getAllProducts());
        await dispatch(fetchAddToCart());

      } catch (error) {
        toast.error("Something went wrong");
        console.log(error);
      }
    };

    fetchInitialData();
  }, [isLogin]);


  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Header />
        {
          isCartOpen &&
          <Modal>
            <AddToCart />
          </Modal>
        }
        <main className="flex-grow">
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}
