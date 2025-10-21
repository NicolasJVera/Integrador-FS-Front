import styled from "styled-components";
import { spin } from "../../animations/products/AnimatedGrid";

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
`;

export const Spinner = styled.div`
  border: 4px solid ${props => props.theme.colors.white}; 
  border-top: 4px solid ${props => props.theme.colors.primary}; 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: red;
  font-size: 1.2rem;
`;