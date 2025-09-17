import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const prod = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!prod) {
    return (
      <main className='container'>
        <p>Produto não encontrado</p>
      </main>
    );
  }

  return (
    <main className='container'>
      <div className='flex flex-col lg:flex-row gap-6 lg:items-start items-center'>
        <img
          src={prod.image}
          alt={prod.title}
          loading='lazy'
          className='w-full max-w-sm lg:max-w-md h-auto rounded-xl object-cover shadow-lg'
        />
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>{prod.title}</h1>
          <p className='text-2xl font-bold text-primary'>R$ {prod.price.toFixed(2).replace('.', ',')}</p>
          <p className='text-muted text-lg'>★ {prod.rating}</p>
          <span className='bg-primary text-white text-xs font-semibold py-1 px-3 rounded-full w-fit'>{prod.tag}</span>
          <p className='text-muted leading-relaxed'>{prod.description}</p>
          <button
            className='py-3 px-6 rounded-lg bg-primary text-white font-semibold transition-colors hover:bg-blue-600'
            onClick={() => addToCart(prod)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </main>
  );
}