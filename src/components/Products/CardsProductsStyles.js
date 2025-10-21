import styled from "styled-components";

export const ProductsSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.black},
    ${(props) => props.theme.colors.light}
  );
`;

export const ProductsTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 100;
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${(props) => props.theme.colors.primary},
      transparent
    );
  }
`;

export const ProductsSubtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  margin-bottom: 3rem;
  font-style: italic;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 520px;
  
  @media (max-width: 768px) {
    min-height: auto;
    height: auto;
    max-width: 100%;
    margin: 0 auto;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.6);
    
    @media (max-width: 768px) {
      transform: none;
      box-shadow: none;
    }
  }
`;


export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-height: none;
  overflow: hidden;
  display: block;
`;

export const ProductImage = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const ProductInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.background};
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 1px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.background},
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.background}
    );
  }
`;

export const ProductName = styled.h3`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
  margin: 0;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 500;
  position: relative;
  padding-bottom: 0.8rem;
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding-bottom: 0.6rem;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 1px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const ProductDesc = styled.p`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 0.9rem;
  margin-top: 2rem;
  color: ${(props) => props.theme.colors.secondary};
  line-height: 1.4;
  max-height: 2.8em; /* 2 líneas */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Cortar a 2 líneas */
  -webkit-box-orient: vertical;
`;

export const ProductPrice = styled.p`
  font-size: 1.4rem;
  margin: 2rem 0 1rem 0;
  color: ${(props) => props.theme.colors.light};
  font-weight: 600;
  text-align: center;
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem 0;
  }
`;

export const AddToCartButton = styled.button`
  position: absolute;
  bottom: 12rem;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  opacity: 0;
  padding: 0.7rem 1.4rem;
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  background: rgba(34, 204, 204, 0.38);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  white-space: nowrap;

  /* Mostrar siempre en móvil */
  @media (max-width: 768px) {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    bottom: 1.5rem;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
    padding: 0.8rem 1.5rem;
    font-weight: 600;
    border: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  ${Card}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  &:active {
    transform: translateX(-50%) translateY(0) scale(0.97);
  }
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
`;

export const ButtonCard = styled.button`
  font-family: ${(props) => props.theme.fonts.text};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid rgb(51, 51, 51);
  background: transparent;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.black};
    transform: translateY(-2px);
  }

  &.active {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.black};
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 12px ${(props) => props.theme.colors.primary};
    transform: scale(1.05);
  }
`;

export const Notification = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.text};
  color: ${props => props.theme.colors.white};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  top: 20px;
  width: auto;
  min-width: 200px;
  max-width: 90%;
  box-sizing: border-box;
  
  /* Ajustes para móviles */
  @media (max-width: 768px) {
    z-index: 1000;
    top: 500px;
    width: 50%;
    max-width: 320px;
    padding: 15px 20px;
    font-size: 16px;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-50%) translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
      transform: translateX(-50%) translateY(-30px);
    }
  }
`;

