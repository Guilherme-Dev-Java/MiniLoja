import React, { useState } from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const ShowMoreButton = styled.button`
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px 24px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: var(--primary);
    color: white;
  }
`;

export default function ProductGrid() {
  const [visibleProducts, setVisibleProducts] = useState(12);

  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 12);
  };

  return (
    <Container>
      <Grid>
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      {visibleProducts < products.length && (
        <ButtonWrapper>
          <ShowMoreButton onClick={handleShowMore}>Mostrar Mais</ShowMoreButton>
        </ButtonWrapper>
      )}
    </Container>
  );
}