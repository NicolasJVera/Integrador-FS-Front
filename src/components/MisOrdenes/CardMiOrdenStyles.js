import styled from "styled-components";

export const MisOrdenesContainerStyles = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1500px;
  margin: 0 auto;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const CardMiordenContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);          
  }
`;

export const TittleContainerStyles = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fonts.title};
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;  

export const NoOrdersStyles = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;
  text-align: center;
`;

export const TextContainerStyles = styled.div`
  color: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const TitleStyles = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

export const DateStyles = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 1rem;
`;

export const ItemsCountStyles = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 1rem;
`;

export const IDStyles = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 1rem;
`;

export const TotalStyles = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 1rem;
`;