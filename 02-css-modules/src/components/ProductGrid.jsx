import React, { useState } from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid() {
  const [page, setPage] = useState(1);
  const per = 6;
  const total = Math.ceil(products.length / per);
  const slice = products.slice((page - 1) * per, page * per);

  return (
    <main className={styles.container}>
      <section className={styles.productGrid} aria-label='Produtos'>
        {slice.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
      <nav className={styles.pagination} aria-label='Paginação'>
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? styles.active : ''}
          >
            {i + 1}
          </button>
        ))}
      </nav>
    </main>
  );
}