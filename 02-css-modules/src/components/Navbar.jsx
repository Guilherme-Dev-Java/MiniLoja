import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import styles from './Navbar.module.css';

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

// SVG do ícone do carrinho
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
    <header className={styles.navbar}>
      <div className={styles.navInner}>
        <Link to='/' className={styles.logo}>
          <img src='/images/logo.png' alt='Logo da Minha Loja' className={styles.logoImg} />
        </Link>
        <div className={styles.actions}>
          <button aria-label='alternar tema' className={styles.themeBtn} onClick={toggle}>
            <Yin />
          </button>
          <Link to='/cart' className={styles.cart} aria-live='polite'>
            <CartIcon />
            <span className={styles.badge}>{cart.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}