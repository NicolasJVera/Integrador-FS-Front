import styled from "styled-components";

export const Section = styled.section`
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.primary};
    padding: 8rem 2rem;
    text-align: center;
`

export const Title = styled.h2`
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 300;
    font-size: 3rem;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 1rem;
`

export const Subtitle = styled.p`
    font-family: ${(props) => props.theme.fonts.text};
    font-size: 1rem;
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 2rem;
`
export const NewsletterForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
    
    .form-row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      width: 100%;
      flex-wrap: nowrap;
    }

  input {
    padding: 15px 15px;
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    max-width: 400px;
    border: 1px solid rgb(51, 51, 51);
    border-radius: 5px;
    background-color: rgb(26, 26, 26);
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.primary};
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
    
    &.invalid {
      border-color: #ff4444;
    }
    
    &.valid {
      border-color: #00C851;
    }
  }

  .input-wrapper {
    flex: 1 1 auto;
    max-width: 400px;
    min-width: 200px;
    width: 100%;
    
    .error-message {
      color: #ff4444;
      font-size: 0.85rem;
      margin-top: 0.25rem;
      text-align: left;
      padding-left: 0.5rem;
    }
  }
  
  button {
    font-family: ${(props) => props.theme.fonts.title};
    padding: 15px 30px;
    border: none;
    border-radius: 4px;
    background: linear-gradient(to right, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.light});
    color: ${(props) => props.theme.colors.black};
    font-weight: bold;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s ease;
    flex: 0 0 auto;
    height: 50px; /* Ajusta según el alto de tu input */
    
    &:disabled {
      background: #666;
      cursor: not-allowed;
      opacity: 0.7;
    }
    
    &:not(:disabled):hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:hover {

      background: linear-gradient(to right, ${(props) => props.theme.colors.light}, ${(props) => props.theme.colors.primary});
      transition: all 0.3s ease-in-out;
    }
  }
`
export const ContactWrapper = styled.div`
  margin-top: 10rem;
`;

export const ContactForm = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  text-align: left;
  position: relative;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input, textarea {
    padding: 0.8rem 1rem;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #444;
    border-radius: 4px;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 2px rgba(51, 204, 255, 0.2);
    }
    
    &.error, &.invalid {
      border-color: #ff4d4f;
      
      &:focus {
        box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
      }
    }
  }
  
  .error-message {
    color: #ff4d4f;
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }

  .submit-btn {
    grid-column: 1 / -1;
    padding: 1rem;
    background: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.light});
    color: ${props => props.theme.colors.black};
    font-weight: 700;
    font-family: ${props => props.theme.fonts.title};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    max-width: 100%;
    margin: 0 auto;
    width: 100%;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
      background: linear-gradient(to right, ${props => props.theme.colors.light}, ${props => props.theme.colors.primary});
      transform: translateY(-2px);
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: #666;
    }
    
    @media (min-width: 769px) {
      max-width: 300px;
    }
  }

  label {
    font-family: ${props => props.theme.fonts.text};
    text-align: left;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.white};
    margin-bottom: 0.5rem;
    display: block;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  label {
    color: ${props => props.theme.colors.white};
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #444;
    border-radius: 4px;
    background-color: #1a1a1a;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.text};
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 2px rgba(51, 204, 255, 0.2);
    }
    
    &.error {
      border-color: #ff4d4f;
    }
  }
  
  .error-message {
    color: #ff4d4f;
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }
  
  ${props => props.style?.gridColumn === 'span 2' && `
    grid-column: span 2;
    
    @media (max-width: 768px) {
      grid-column: auto;
    }
  `}
`;

export const SuccessMessage = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(82, 196, 26, 0.1);
  color: #52c41a;
  padding: 12px 15px;
  border-radius: 4px;
  margin-top: 1rem;
  text-align: center;
  border: 1px solid rgba(82, 196, 26, 0.3);
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;