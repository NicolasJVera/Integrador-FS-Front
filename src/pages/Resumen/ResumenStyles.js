import styled from "styled-components";

export const OrderDetailContainer = styled.div`
  max-width: 1000px;
  margin: 10rem auto;
  padding: 0 1.5rem;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.text};
`;

export const OrderHeader = styled.div`
  background: ${props => props.theme.colors.background};
  padding: 1.5rem;
  border-radius: 10px;
  margin: 5rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h1 {
    margin:  0.5rem 0;
    font-size: 1.8rem;
    color: white;
  }
  
  p {
    margin: 0.3rem 0 0;
    opacity: 0.9;
    font-size: 0.95rem;
  }
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  margin: 1rem 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ProductInfo = styled.div`
  flex: 1;
  
  h3 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    color: ${props => props.theme.colors.primary};
  }
  
  p {
    margin: 0.3rem 0;
    font-size: 0.95rem;
    opacity: 0.9;
  }
`;

export const ProductPrice = styled.div`
  text-align: right;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.light};
  min-width: 120px;
`;

export const OrderSummary = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    margin-top: 0;
    color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.8rem;
    margin-bottom: 1.2rem;
  }
  
  p {
    display: flex;
    justify-content: space-between;
    margin: 0.8rem 0;
    font-size: 1rem;
    
    &:last-child {
      margin-top: 1.2rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;

export const ShippingDetails = styled(OrderSummary)`
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    display: flex;
    flex-wrap: wrap;
    
    span:first-child {
      width: 120px;
      opacity: 0.8;
    }
    
    span:last-child {
      flex: 1;
      font-weight: 500;
    }
  }
`;