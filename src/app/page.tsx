// import Image from 'next/image'
import Navbar from './components/Navbar';
import React from 'react';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Logo from './components/Logo';



export default function Home() {
  return (
    <div className='mainPage-container'>
      <Logo />
      <ProductList />
      {/* <Navbar /> */}
      <Footer />
    </div>
  );

}
