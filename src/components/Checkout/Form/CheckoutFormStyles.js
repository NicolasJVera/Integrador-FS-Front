import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const CheckoutDatosStyles = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const TittleDatosStyles = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 300;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  padding: 15px 15px;
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  max-width: 400px;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 5px;
  background-color: rgb(26, 26, 26);
  transition: all 0.3s ease;
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
  
  ${props => props.hasError && `
    border-color: #ff4757;
  `}
`;

export const InputWrapper = styled.div`
  width: 100%;
  
`;

export const Label = styled.label`
  display: block;
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 0.5rem;
  text-align: left;
  width: 100%;
`;

export const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  width: 100%;
  max-width: 400px;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

// export const Error = styled.div`
//   color: #ff4757;
//   font-size: 0.875rem;
//   margin-top: 0.5rem;
// `;

// export const Success = styled.div`
//   color: #2ecc71;
//   font-size: 0.875rem;
//   margin-top: 0.5rem;
// `;

export const Submit = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }
`;

export const Loader = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top: 4px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #ff4757;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  text-align: left;
  min-height: 1.2rem;
  font-family: ${(props) => props.theme.fonts.text};
`;

