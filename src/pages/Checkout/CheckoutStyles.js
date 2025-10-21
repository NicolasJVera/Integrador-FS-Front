import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const CheckoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormContainer = styled.div`
  background: ${props => props.theme.colors.black};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const OrderSummaryContainer = styled.div`
  background: ${props => props.theme.colors.black};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  color: white;
  height: fit-content;
  position: sticky;
  top: 2rem;
`;