import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const StyledNavbar = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledLogo = styled.img`
  width: 110px;
  height: 110px;
`;

const ThemeButton = styled.button`
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  font-size: 30px;

  &:hover {
    background: var(--primary);
    color: white;
  }
`;

const CartLink = styled(Link)`
  font-size: 24px;
  color: var(--text);
  text-decoration: none;
  position: relative;
`;

const CartCounter = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background-color: var(--primary);
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  padding: 2px 6px;
`;

export default function Navbar({ toggleTheme, theme }) {
  const { totalItems } = useCart();

  return (
    <StyledNavbar>
      <NavLinks>
        <Link to="/">
          <StyledLogo src="/images/logo.png" alt="Logo" />
        </Link>
      </NavLinks>
      <NavLinks>
        <ThemeButton onClick={toggleTheme}>
          ☯
        </ThemeButton>
        <CartLink to="/carrinho">
          🛒
          {totalItems > 0 && <CartCounter>{totalItems}</CartCounter>}
        </CartLink>
      </NavLinks>
    </StyledNavbar>
  );
}