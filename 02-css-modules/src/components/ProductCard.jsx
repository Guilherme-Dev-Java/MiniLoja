import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './ProductCard.module.css'; // Importa o módulo CSS
import Skeleton from './Skeleton';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  return (
    <article className={styles.card} tabIndex={0}>
      <div className={styles.media}>
        {loading && <Skeleton />}
        <img
          src={product.image}
          alt={product.title}
          loading='lazy'
          onLoad={() => setLoading(false)}
          style={{ display: loading ? 'none' : 'block' }}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.meta}>
          <div className={styles.price}>
            R$ {product.price.toFixed(2).replace('.', ',')}
          </div>
          <div className={styles.rating}>★ {product.rating}</div>
        </div>
        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.solid}`} onClick={() => addToCart(product)}>
            Adicionar
          </button>
          <Link to={`/produto/${product.id}`} className={`${styles.btn} ${styles.outline}`}>
            Detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}