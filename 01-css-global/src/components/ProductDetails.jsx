import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

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
      <div className='details'>
        <img src={prod.image} alt={prod.title} loading='lazy' />
        <div className='info'>
          <h1>{prod.title}</h1>
          <p className='price'>R$ {prod.price.toFixed(2).replace('.', ',')}</p>
          <p className='rating'>★ {prod.rating}</p>
          <span className='tag'>{prod.tag}</span>
          <p className='desc'>{prod.description}</p>
          <button className='btn solid' onClick={() => addToCart(prod)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </main>
  );
}