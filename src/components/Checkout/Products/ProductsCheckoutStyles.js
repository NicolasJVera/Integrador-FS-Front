import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.colors.white};
`;

export const TittleProductsStyled = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.title};
`;

export const ProductsTitleStyled = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.title};
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const PriceContainerStyled = styled.div`
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.text};
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const HrStyled = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 1rem 0;
`;

export const TotalStyled = styled(SubtotalStyled)`
  font-weight: 600;
  color: ${props => props.theme.colors.white};
  font-size: 1.1rem;
`;

export const PriceTotalStyled = styled.span`
  color: ${props => props.theme.colors.light};
  font-weight: 800;
`;