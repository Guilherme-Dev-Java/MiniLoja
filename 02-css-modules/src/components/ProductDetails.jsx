import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';
import styles from './ProductDetails.module.css';

export default function ProductDetails() {
  const { id } = useParams();
  const prod = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!prod) {
    return (
      <main className={styles.container}>
        <p>Produto não encontrado</p>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <div className={styles.details}>
        <img
          src={prod.image}
          alt={prod.title}
          loading='lazy'
          className={styles.image}
        />
        <div className={styles.info}>
          <h1>{prod.title}</h1>
          <p className={styles.price}>R$ {prod.price.toFixed(2).replace('.', ',')}</p>
          <p className={styles.rating}>★ {prod.rating}</p>
          <span className={styles.tag}>{prod.tag}</span>
          <p className={styles.desc}>{prod.description}</p>
          <button
            className={`${styles.btn} ${styles.solid}`}
            onClick={() => addToCart(prod)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </main>
  );
}