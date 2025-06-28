import React, { useEffect, useState } from 'react'
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
import { fetchUserData } from './slices/authSlice';
import SearchResults from './components/SearchResults/SearchResults';

export default function App() {
  const dispatch = useDispatch()
  const { isCartOpen, cartData } = useSelector((state) => state.cart)
  const { isLogin } = useSelector((state) => state.auth)
  const { allCreateProducts } = useSelector((state) => state.product);

  const [searchTerm, setSearchTerm] = useState("");


  const filteredProducts = allCreateProducts.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        await dispatch(getAllProducts());
        await dispatch(fetchAddToCart());
        await dispatch(fetchUserData());
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
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        {
          isCartOpen &&
          <Modal>
            <AddToCart />
          </Modal>
        }
       {
        searchTerm && <SearchResults products={filteredProducts} setSearchTerm={setSearchTerm}/>
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
