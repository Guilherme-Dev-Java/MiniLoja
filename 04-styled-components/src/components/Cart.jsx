import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom'; // Importe o Link aqui
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

// Estilo para o link de voltar
const BackLink = styled(Link)`
  font-size: 1rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const CartGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid var(--border);
  padding-top: 16px;
`;

const CartItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr auto auto;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
`;

const CartItemImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: var(--radius);
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CartItemTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
`;

const CartItemQuantity = styled.div`
  font-size: 0.875rem;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 8px;
`;

const QuantityButton = styled.button`
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 4px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background: var(--primary);
    color: white;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--muted);
  font-size: 1.25rem;
  cursor: pointer;
  
  &:hover {
    color: var(--text);
  }
`;

const CartItemPrice = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--primary);
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 16px;
`;

const EmptyCartMessage = styled.p`
  text-align: center;
  color: var(--muted);
  font-size: 1.25rem;
`;

const ClearCartButton = styled.button`
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px 24px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-left: auto;

  &:hover {
    background: var(--border);
  }
`;

export default function Cart() {
  const { cartItems, totalPrice, clearCart, changeItemQuantity, removeItemFromCart } = useCart();

  return (
    <Container>
      <BackLink to="/">← Voltar para a loja</BackLink>
      <PageTitle>Seu Carrinho de Compras</PageTitle>
      {cartItems.length === 0 ? (
        <EmptyCartMessage>Seu carrinho está vazio.</EmptyCartMessage>
      ) : (
        <>
          <CartGrid>
            {cartItems.map((item) => (
              <CartItemWrapper key={item.id}>
                <CartItemImage src={item.image} alt={item.name} />
                <CartItemDetails>
                  <CartItemTitle>{item.name}</CartItemTitle>
                  <CartItemQuantity>
                    <QuantityButton onClick={() => changeItemQuantity(item.id, 'decrease')}>-</QuantityButton>
                    {item.quantity}
                    <QuantityButton onClick={() => changeItemQuantity(item.id, 'increase')}>+</QuantityButton>
                  </CartItemQuantity>
                </CartItemDetails>
                <CartItemPrice>R${(item.price * item.quantity).toFixed(2)}</CartItemPrice>
                <RemoveButton onClick={() => removeItemFromCart(item.id)}>x</RemoveButton>
              </CartItemWrapper>
            ))}
          </CartGrid>
          <TotalWrapper>
            Total: R${totalPrice.toFixed(2)}
            <ClearCartButton onClick={clearCart}>Limpar Carrinho</ClearCartButton>
          </TotalWrapper>
        </>
      )}
    </Container>
  );
}