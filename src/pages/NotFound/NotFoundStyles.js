import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background || '#ffffff'};
  color: ${({ theme }) => theme.colors.text || '#333333'};
  font-family: ${({ theme }) => theme.fonts.primary || 'sans-serif'};
`;

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary || '#000000'};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.secondary || '#666666'};
  margin-bottom: 2rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Message = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight || '#888888'};
  margin-bottom: 3rem;
  max-width: 600px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

export const HomeButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary || '#000000'};
  color: ${({ theme }) => theme.colors.light || '#ffffff'};
  padding: 1rem 2.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  border: 2px solid transparent;
  
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary || '#000000'};
    border-color: ${({ theme }) => theme.colors.primary || '#000000'};
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 0.8rem;
  }
`;
