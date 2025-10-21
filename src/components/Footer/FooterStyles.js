import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 4rem 2rem;
  border-top: 1px solid #333;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
`;

export const FooterGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`

export const FooterTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

export const FooterText = styled.p`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 0.9rem;
  line-height: 1.5;
  color: #aaa;
`;

export const FooterLink = styled.a`
font-family: ${(props) => props.theme.fonts.text};
  font-size: 0.9rem;
  color: #ccc;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.light};
    text-decoration: underline;
  }
`;

export const ContactItem = styled.div`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.white};

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #222;
  margin-top: 2rem;
  padding-top: 1rem;
  font-size: 0.8rem;
  color: #888;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  svg {
    width: 20px;
    height: 20px;
    color: #ccc;

    &:hover {
      color: ${(props) => props.theme.colors.light};
    }
  }
`;
