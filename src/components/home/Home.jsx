import React from 'react'
import Header from './header/Header'
import ImageSlider from './ImageSlider/ImageSlider'
import Category from './Category/Category';
import RandomProducts from './randomProducts/RandomProducts.jsx';
import Footer from '../Footer/Footer.jsx';

export default function Home() {
  return (
    <div>
      <ImageSlider/>
      <Category/>
      <RandomProducts/>
    </div>
  )
}
