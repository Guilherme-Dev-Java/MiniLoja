import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import './globals.css';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>
);