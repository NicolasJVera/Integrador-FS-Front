// src/components/navbar/Cart/CartIconStyles.js
import styled from 'styled-components';

export const CartLabel = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CartIcon = styled.i`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.white};
`;

export const CartBubble = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  text-align: center;
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.white};
  font-size: 10px;
  font-weight: 500;
  height: 18px;
  width: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1px;
  border-radius: 50%;
`;