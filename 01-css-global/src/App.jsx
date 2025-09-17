import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductGrid />} />
        <Route path='/produto/:id' element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}