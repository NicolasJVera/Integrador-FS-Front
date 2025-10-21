import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  background: #1e1e1e;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 12px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  position: relative;
  padding-right: 20px;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 4px;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin: 0;
  font-weight: 500;
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.text};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.white};
  margin: 0;
  font-size: 0.85rem;
  font-family: ${props => props.theme.fonts.text};
  line-height: 1.4;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 240px;
`;

export const ProductTitle = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
`;

export const Text = styled.h3`
  color: #666;
  font-size: 1rem;
`;

export const Price = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  white-space: nowrap;
  margin-top: 4px;
`;

export const HandlerButton = styled.button`
  width: 25px;
  height: 25px;
  border: 1px solid ${props => props.theme.colors.black};
  background: white;
  color: ${props => props.theme.colors.black};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QuantityHandler = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 20px;
`;

export const Quantity = styled.span`
  min-width: 24px;
  text-align: center;
  font-weight: 500;
  color: #fff;
  font-size: 0.95rem;
`;

export const DeleteButton  = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.black};
  cursor: pointer;
  font-size: 1.1rem;
  padding: 5px;
  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;