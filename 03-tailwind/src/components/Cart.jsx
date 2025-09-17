import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className='container'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold mb-6'>Seu Carrinho</h1>
        {cart.length === 0 ? (
          <p className='text-center text-muted'>O seu carrinho está vazio.</p>
        ) : (
          <div className='flex flex-col gap-4'>
            <ul className='list-none p-0'>
              {cart.map((item) => (
                <li key={item.id} className='flex items-center gap-4 bg-surface rounded-xl p-4 mb-3 shadow'>
                  <img src={item.image} alt={item.title} className='w-20 h-20 object-cover rounded-xl' />
                  <div className='flex-grow'>
                    <h3 className='text-base font-semibold'>{item.title}</h3>
                    <p className='text-base font-bold text-primary mt-1'>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className='w-8 h-8 rounded-full bg-transparent text-text border border-border flex items-center justify-center text-xl'>-</button>
                    <span className='font-medium'>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className='w-8 h-8 rounded-full bg-transparent text-text border border-border flex items-center justify-center text-xl'>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className='text-muted text-3xl ml-4'>&times;</button>
                </li>
              ))}
            </ul>
            <div className='flex justify-end mt-4 text-lg font-bold'>
              <p>Total: R$ {total.toFixed(2).replace('.', ',')}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}