import React, { useEffect } from 'react'
import ImageSlider from './ImageSlider/ImageSlider'
import Category from './Category/Category';
import {  useSelector } from 'react-redux';
import ShowProducts from './showProducts/ShowProducts.jsx';

export default function Home() {
  const { allCreateProducts } = useSelector((state) => state.product);

  

  const getRandomProducts = (arr) => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  };
  const randomProducts = getRandomProducts(allCreateProducts || []);

  return (
    <div>
      <ImageSlider />
      <Category />
      <ShowProducts products={randomProducts} title={"Discover Our Products"}/>
    </div>
  )
}
