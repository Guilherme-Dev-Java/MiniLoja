import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  text-decoration: none;
  transition: all 0.2s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ImageWrapper = styled.div`
  background: white;
  border-radius: var(--radius);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius);
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.25;
`;

const ProductPrice = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--primary);
  margin-top: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const BaseButton = styled.button`
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
`;

const DetailsButton = styled(Link)`
  ${BaseButton};
  background: var(--primary);
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;

const AddButton = styled(BaseButton)`
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);

  &:hover {
    background: var(--border);
  }
`;

export default function ProductCard({ product }) {
  const { addItemToCart } = useCart();

  return (
    <StyledCard>
      <ImageWrapper>
        <ProductImage src={product.image} alt={product.name} loading="lazy" />
      </ImageWrapper>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductPrice>R${product.price}</ProductPrice>
      <ButtonGroup>
        <AddButton onClick={() => addItemToCart(product)}>Adicionar</AddButton>
        <DetailsButton to={`/produto/${product.id}`}>Detalhes</DetailsButton>
      </ButtonGroup>
    </StyledCard>
  );
}