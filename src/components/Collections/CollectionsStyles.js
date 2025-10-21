import styled from "styled-components";

export const CollectionsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  padding: 2rem 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors.black};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 300;
  font-size: 3rem;
  margin-top: 3rem;
  font-family: ${(props) => props.theme.fonts.title};
  text-align: center;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-family: ${(props) => props.theme.fonts.text};
  text-align: center;
`;

export const Card = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgb(32, 255, 218);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
      border-radius: 12px;
      will-change: transform;
    }
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
    border-radius: 12px;
    will-change: transform;
  }
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.title};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    margin: 0.5rem 0;
    font-family: ${(props) => props.theme.fonts.text};
    opacity: 0.9;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-family: ${(props) => props.theme.fonts.text};
    transition: color 0.3s ease;
    margin-top: 1rem;
    justify-content: center;
    width: 100%;

    &:hover {
      color: ${(props) => props.theme.colors.light};
    }
  }
`;
