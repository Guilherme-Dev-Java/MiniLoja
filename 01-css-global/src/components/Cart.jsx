import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <main className='container'>
      <h1>Seu Carrinho</h1>
      {cart.length === 0 ? (
        <p>O seu carrinho está vazio. Adicione produtos para continuar.</p>
      ) : (
        <section className='cart-items'>
          {cart.map((item, index) => (
            <div key={item.id} className='cart-item'>
              <img src={item.image} alt={item.title} />
              <div className='item-info'>
                <h3>{item.title}</h3>
                <p className='price'>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                <div className='quantity-controls'>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
              <button className='remove-btn' onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
          ))}
          <div className='cart-total'>
            <h2>Total: R$ {totalPrice.toFixed(2).replace('.', ',')}</h2>
          </div>
        </section>
      )}
    </main>
  );
}