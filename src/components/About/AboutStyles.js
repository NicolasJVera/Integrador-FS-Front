import styled from "styled-components";

export const AboutContainer = styled.section`
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  gap: 5rem;

  @media (max-width: 818px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
    gap: 2rem;
  }
`;

export const AboutText = styled.div`
  max-width: 600px;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 20px;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 28px;
    }
  }

  h4 {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 16px;
    }
  }

  p {
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.text};
    font-size: 16px;
    margin-bottom: 30px;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 14px;
    }
  }
`;

export const AboutImage = styled.div`
  img {
    width: 400px;
    height: 400px;
    display: block;
    object-fit: cover;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      width: 250px;
      height: 250px;
    }
  }
`
