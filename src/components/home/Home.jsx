import React, { useEffect } from 'react'
import Header from './header/Header'
import ImageSlider from './ImageSlider/ImageSlider'
import Category from './Category/Category';
import RandomProducts from './randomProducts/RandomProducts.jsx';
import Footer from '../Footer/Footer.jsx';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../slices/productsSlice.js';
import { toast } from 'react-toastify';

export default function Home() {
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
    <div>
      <ImageSlider/>
      <Category/>
      <RandomProducts/>
    </div>
  )
}
