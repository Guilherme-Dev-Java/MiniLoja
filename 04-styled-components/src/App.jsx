import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path='/' element={<ProductGrid />} />
        <Route path='/produto/:id' element={<ProductDetails />} />
        <Route path='/carrinho' element={<Cart />} />
      </Routes>
    </>
  );
}