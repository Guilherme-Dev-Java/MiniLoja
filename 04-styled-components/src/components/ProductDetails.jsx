import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BackLink = styled(Link)`
  font-size: 1rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
`;

const ProductPrice = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--primary);
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: var(--muted);
`;

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <Container>
        <p>Produto não encontrado.</p>
      </Container>
    );
  }

  return (
    <Container>
      <BackLink to="/">← Voltar para a loja</BackLink>
      <DetailsWrapper>
        <ProductImage src={product.image} alt={product.name} />
        <InfoWrapper>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>R${product.price}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
        </InfoWrapper>
      </DetailsWrapper>
    </Container>
  );
}