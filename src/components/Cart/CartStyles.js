// src/components/navbar/Cart/CartStyles.js
import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  z-index: 1000;
  width: 100%;
  max-width: 430px;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a, #0d0d0d);
  overflow-y: auto;
  transform: ${(props) =>
    props.$isOpen ? "translate(0%)" : "translate(100%)"};
  transition: all 0.3s ease-in-out;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 480px) {
    padding: 15px;
    width: 100%;
    max-width: 100%;
  }
`;


export const CartHeader = styled.div`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
  background: #14141480;
  border-bottom: 1px solid #50505033;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(5px);
  
  @media (max-width: 480px) {
    padding: 12px 15px;
    font-size: 18px;
  }
`;

export const CartTitleContainer = styled.div`
  align-items: center;
  gap: 12px;
  display: flex;
`;

export const CartTitle = styled.h2`
  background: linear-gradient(90deg, #72bcc0, #59d0ffef);
  color: #0000;
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 0;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 1.3rem;
`;

export const CartCount = styled.span`
  color: #999;
  margin-left: 5px;
  font-size: 0.8rem;
`;

export const CartCloseButton = styled.button`
  color: #ccc;
  cursor: pointer;
  background: 0 0;
  border: none;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  transition: all 0.2s;
  display: flex;
`;

export const CartItemsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  scrollbar-width: thin;
  scrollbar-color: #59d0ff #222;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #59d0ff;
    border-radius: 3px;
  }
`;


export const Items = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 360px;
    background: var(--gray-bg);
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 15px;
`;

export const CartSummary = styled.div`
  margin-bottom: 40px;
`;

export const SummaryRow = styled.div`
  color: #ccc;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.95rem;
  display: flex;
`;

export const CheckoutButton = styled.button`
  color: #000;
  cursor: pointer;
  background: linear-gradient(90deg, #72bcc0, #59d0ffef);
  border: none;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  padding: 14px;
  font-family: Cinzel Decorative, serif;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.3s;
  display: flex;

  &:hover {
    background: linear-gradient(90deg, #59d0ffef, #72bcc0);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px #59d0ff33;
  }

  &:active {
  transform: scale(0.97);
}
`;

export const ContinueShopping = styled.button`
  color: #ccc;
  cursor: pointer;
  background: 0 0;
  border: 1px solid #5050504d;
  border-radius: 8px;
  width: 100%;
  padding: 12px;
  font-size: 0.9rem;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background: #5050501a;
    border-color: #72bcc04d;
  }
`;

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  object-fit: cover;
`;

export const CartTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1; 
  min-width: 0; 
`;

export const CartItemTitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin: 0;
  margin-bottom: 2px;
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CartItemPrice = styled.p`
  color: ${(props) => props.theme.colors.white};
  margin: 5px 0;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.text};
`;

export const Quantity = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  min-width: 20px;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.text};
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;

export const QuantityButton = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
  background-color: rgba(51, 51, 51, 0.25);
  border: 1px solid ${(props) => props.theme.colors.light};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
  }
`;

export const EmptyCartContainer = styled.div`
  text-align: center;
  padding: 12rem 2rem;
`;

export const EmptyCartIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const GoToShopButton = styled.button`
 font-family: ${(props) => props.theme.fonts.title};
  color: #ccc;
  cursor: pointer;
  background: 0 0;
  border: 1px solid #5050504d;
  border-radius: 8px;
  width: 100%;
  padding: 12px;
  font-size: 0.9rem;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background: #5050501a;
    border-color: #72bcc04d;
  }
`;

export const EmptyCartMessage = styled.p`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 1.3rem;
  margin: 2rem;
  font-family: ${(props) => props.theme.fonts.title};

  h6 {
    margin-top: 0.6rem;
    color: ${(props) => props.theme.colors.white};
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

export const DiscountRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #6eff9c;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 4px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #59d0ff;
  font-size: 0.85rem;
  padding: 4px 0;
`;

export const CartFooter = styled.div`
  padding: 1rem;
  background-color: #111;
  border-top: 1px solid #333;
  position: sticky;
  bottom: 0;
  z-index: 10;
`;
