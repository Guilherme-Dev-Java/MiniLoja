import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

function Yin() {
  return (
    <svg width='20' height='20' viewBox='0 0 64 64' aria-hidden='true'>
      <circle cx='32' cy='32' r='30' fill='black' />
      <path d='M32,2 A30,30 0 1,1 32,62 A15,15 0 1,0 32,32 A15,15 0 1,1 32,2' fill='white' />
      <circle cx='32' cy='17' r='5' fill='black' />
      <circle cx='32' cy='47' r='5' fill='white' />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
}

export default function Navbar() {
  const { toggle } = useTheme();
  const { cart } = useCart();

  return (
    <header className='fixed top-0 left-0 right-0 h-16 bg-surface border-b border-border flex items-center z-50 transition-colors'>
      <div className='max-w-7xl mx-auto px-4 flex justify-between items-center w-full'>
        <Link to='/' className='font-bold text-text'>
          <img src='/images/logo.png' alt='Logo da Minha Loja' className='h-16' />
        </Link>
        <div className='flex items-center gap-3'>
          <button aria-label='alternar tema' className='bg-transparent border-none cursor-pointer p-2 rounded-lg transition-colors hover:bg-border' onClick={toggle}>
            <Yin />
          </button>
          <Link to='/cart' className='relative bg-transparent border-none cursor-pointer p-2 rounded-lg transition-colors hover:bg-border flex items-center text-text' aria-live='polite'>
            <CartIcon />
            <span className='absolute top-[-8px] right-[-8px] bg-primary text-white text-xs font-bold px-2 py-1 rounded-full'>{cart.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}