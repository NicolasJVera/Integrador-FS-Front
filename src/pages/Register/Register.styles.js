import styled from 'styled-components';

export const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.black};
  padding: 20px;
`;

export const RegisterCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.white};
  margin-bottom: 30px;
  font-family: ${props => props.theme.fonts.text};
  font-size: 1rem;
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    margin-left: 5px;
    font-weight: 600;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.light};
      text-decoration: underline;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.text};
  font-size: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(114, 188, 192, 0.3);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: #ff6b6b;
  font-size: 0.875rem;
  margin-top: 5px;
  font-family: ${props => props.theme.fonts.text};
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.black};
  border: none;
  border-radius: 4px;
  font-family: ${props => props.theme.fonts.title};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  
  &:hover {
    background: ${props => props.theme.colors.light};
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: ${props => props.theme.colors.black};
  animation: spin 1s ease-in-out infinite;
  margin-right: 10px;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export const LoginLink = styled.div`
  text-align: center;
  margin-top: 20px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.text};
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    margin-left: 5px;
    font-weight: 600;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.light};
      text-decoration: underline;
    }
  }
`;
