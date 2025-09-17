import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  return (
    <article className='card' tabIndex={0}>
      <div className='media'>
        {loading && <div className='skeleton' />}
        <img
          src={product.image}
          alt={product.title}
          loading='lazy'
          onLoad={() => setLoading(false)}
          style={{ display: loading ? 'none' : 'block' }}
        />
      </div>
      <div className='body'>
        <h3 className='title'>{product.title}</h3>
        <div className='meta'>
          <div className='price'>R$ {product.price.toFixed(2).replace('.', ',')}</div>
          <div className='rating'>★ {product.rating}</div>
        </div>
        <div className='actions'>
          <button className='btn solid' onClick={() => addToCart(product)}>
            Adicionar
          </button>
          <Link to={`/produto/${product.id}`} className='btn outline'>
            Detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}