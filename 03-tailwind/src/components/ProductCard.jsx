import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Skeleton from './Skeleton';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  return (
    <article className='bg-surface border border-border rounded-xl overflow-hidden flex flex-col transition-transform hover:translate-y-[-6px] hover:shadow-lg' tabIndex={0}>
      <div className='relative w-full h-0 pt-[100%]'>
        {loading && <Skeleton />}
        <img
          src={product.image}
          alt={product.title}
          loading='lazy'
          onLoad={() => setLoading(false)}
          className='absolute top-0 left-0 w-full h-full object-cover'
          style={{ display: loading ? 'none' : 'block' }}
        />
      </div>
      <div className='p-4 flex flex-col gap-3'>
        <h3 className='text-sm font-semibold leading-tight line-clamp-2'>{product.title}</h3>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-base'>
            R$ {product.price.toFixed(2).replace('.', ',')}
          </div>
          <div className='text-muted text-sm'>★ {product.rating}</div>
        </div>
        <div className='flex gap-2 items-center'>
          <button className='flex-1 py-2 px-3 rounded-lg bg-primary text-white border-transparent cursor-pointer transition-transform hover:scale-105' onClick={() => addToCart(product)}>
            Adicionar
          </button>
          <Link to={`/produto/${product.id}`} className='flex-1 py-2 px-3 rounded-lg bg-transparent text-text border border-border cursor-pointer transition-transform hover:scale-105 text-center'>
            Detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}