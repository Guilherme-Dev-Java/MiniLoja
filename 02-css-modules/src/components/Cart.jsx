import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './Cart.module.css';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className='container'>
      <div className={styles.cartPage}>
        <h1>Seu Carrinho</h1>
        {cart.length === 0 ? (
          <p>O seu carrinho está vazio.</p>
        ) : (
          <div className={styles.cartItems}>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.title} className={styles.image} />
                  <div className={styles.info}>
                    <h3>{item.title}</h3>
                    <p className={styles.price}>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                  </div>
                  <div className={styles.quantityControls}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>
                    &times;
                  </button>
                </li>
              ))}
            </ul>
            <div className={styles.cartSummary}>
              <p>Total: R$ {total.toFixed(2).replace('.', ',')}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}