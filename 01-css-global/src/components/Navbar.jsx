import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'

// Componente para o ícone de tema
function Yin() {
  return (<svg width='20' height='20' viewBox='0 0 64 64' aria-hidden='true'><circle cx='32' cy='32' r='30' fill='black' /><path d='M32,2 A30,30 0 1,1 32,62 A15,15 0 1,0 32,32 A15,15 0 1,1 32,2' fill='white' /><circle cx='32' cy='17' r='5' fill='black' /><circle cx='32' cy='47' r='5' fill='white' /></svg>)
}

// NOVO: Componente para o ícone de carrinho
function CartIcon() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>)
}

export default function Navbar() {
  const { toggle } = useTheme()
  const { cart } = useCart()

  return (
    <header className='navbar'>
      <div className='nav-inner'>
        <Link to='/' className='logo' style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src='/images/logo.png'
            alt='Logo Nerdcore Brasil'
            style={{ height: '100px' }}
          />
          Nerdcore Brasil
        </Link>
        <div className='actions'>
          <button aria-label='alternar tema' className='theme-btn' onClick={toggle}>
            <Yin />
          </button>

          <Link to='/cart' className='cart' aria-live='polite' style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <CartIcon />
            <span className='badge'>{cart.length}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}