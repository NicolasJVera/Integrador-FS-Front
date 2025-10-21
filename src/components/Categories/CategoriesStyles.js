
import styled from 'styled-components';
import { bump, neonGlow } from '../../animations/categories/filterButton';

export const CategoriesSection = styled.section`
  background: ${(props) => props.theme.colors.black};
  color: #ccc;
  padding: 10rem 0rem 1rem;
  text-align: center;
`;

export const CategoriesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const CategoriesSubtitle = styled.p`
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.text};
  color: #aaa;
  margin-bottom: 2rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Menú móvil
export const MobileMenuButton = styled.button`
  display: none;
  width: 90%;
  max-width: 300px;
  margin: 0 auto 1.5rem;
  padding: 1rem 1.5rem;
  background-color: #111;
  color: #fff;
  border: 1px solid #333;
  border-radius: 999px;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 90%;
  max-width: 300px;
  margin: 0 auto 2rem;
  background: #111;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  transition: max-height 0.3s ease-out, opacity 0.2s ease-out;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  position: absolute;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
`;

export const MobileMenuItem = styled.div`
  padding: 1rem 1.5rem;
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : '#fff')};
  font-family: ${(props) => props.theme.fonts.text};
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease;
  border-bottom: 1px solid #222;
  background: ${({ $active }) => ($active ? 'rgba(51, 204, 255, 0.1)' : 'transparent')};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const FilterButton = styled.button`
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.light : "#111"};
  color: ${({ $active, theme }) =>
    $active ? "#000" : theme.colors.white}; 
  border: none;
  font-family: ${(props) => props.theme.fonts.title};
  padding: 1rem 1.5rem;
  border-radius: 999px;
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    color: #33cfff;
    animation: ${bump} 0.3s ease, ${neonGlow} 2s infinite ease-in-out alternate;
    background-color: #000;
    box-shadow: 0 0 8px #33cfff, 0 0 16px #33cfff;
  }

  &:active {
    animation: ${bump} 0.3s ease;
  }
`;



export const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

export const CollectionCard = styled.div`
  background: linear-gradient(to bottom, #aaa, #111);
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  color: white;
  margin-bottom: 2rem;

  h3 {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  p {
    font-family: ${(props) => props.theme.fonts.text};
    font-size: 0.95rem;
    margin-top: 0.5rem;
  }
`;

export const ProductList = styled.div`
  text-align: left;
  max-width: 400px;
  width: 100%;
`;

export const ProductTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.title};
  margin-bottom: 1rem;
`;

export const ProductItem = styled.div`
  font-family: ${(props) => props.theme.fonts.text};
  background: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

