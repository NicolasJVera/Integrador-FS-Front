import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled.section`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.57)), url(/hero/soul-eater.gif);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.title};
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    height: 100vh;
    padding: 0 0.5rem;
  }
`;

export const HeroContent = styled(motion.div)`
  max-width: 800px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 10px;
    max-width: 100%;
  }
`;

export const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to top, ${props => props.theme.colors.white}, ${props => props.theme.colors.primary});
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }
`;

export const Description = styled(motion.p)`
  font-size: 1rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.8;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
    line-height: 1.7;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 1.2rem;
    padding: 0 0.3rem;
    line-height: 1.6;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled(motion.a)`
  cursor: pointer;
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: ${({ secondary, theme }) =>
    secondary ? "transparent" : theme.colors.black};
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.primary : theme.colors.white};
  border: ${({ secondary, theme }) =>
    secondary ? `1px solid ${theme.colors.primary}` : "none"};
  text-decoration: none;
  border-radius: 1rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  min-width: 150px;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ secondary, theme }) =>
      secondary
        ? "rgba(54, 130, 136, 0.1)"
        : `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.black})`};
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: ${({ secondary }) => (secondary ? "#theme.colors.primary" : "")};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    &:before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
    min-width: 130px;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    min-width: 120px;
  }
`;
