import React, { useState } from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const [page, setPage] = useState(1);
  const per = 12;
  const total = Math.ceil(products.length / per);
  const slice = products.slice((page - 1) * per, page * per);

  return (
    <main className='container'>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4' aria-label='Produtos'>
        {slice.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
      <nav className='flex justify-center mt-8 gap-2' aria-label='Paginação'>
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`py-2 px-4 rounded-full transition-colors ${
              page === i + 1 ? 'bg-primary text-white' : 'bg-surface text-text hover:bg-border'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </nav>
    </main>
  );
}