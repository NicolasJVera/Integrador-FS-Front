import styled from 'styled-components';

export const MisOrdenesContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  min-height: calc(100vh - 200px);
  margin: 0 auto;
  padding: 5rem 0;
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
  

