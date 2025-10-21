import styled from "styled-components";
import { Link } from "react-router-dom";
 
export const NavbarContainer = styled.header`
    background-color: ${props => props.theme.colors.black};
    padding: 20px 20px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const LogoContainer = styled.div`
    a {
        display: block;
    }
`

export const Logo = styled.img`
  width: 100px;
  height: auto;

  @media (max-width: 1000px) {
    width: 80px;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1000px) {
    gap: 20px;
  }
`;

export const Overlay = styled.div`
  display: ${props => props.visible === "true" ? 'block' : 'none'};
  position: fixed;
  top: 145px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ProfileLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

  &:hover {
    animation: scale 0.3s ease-in-out;
    background-color: ${props => props.theme.colors.light};
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

// export const UserName = styled.span`
//   font-family: ${props => props.theme.fonts.text};
//   font-weight: 600;
//   color: #fff;
// `;

export const LogoutButton = styled.button`
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  padding: 7px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    animation: scale 0.3s ease-in-out;
    background-color: ${props => props.theme.colors.light};
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  `;

export const AuthButtons = styled.div`
  font-family: ${props => props.theme.fonts.title};
  font-size: 12px;
  display: flex;
  gap: 12px;
  color: ${props => props.theme.colors.white};
  padding: 7px;
  border-radius: 8px;
  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  `;

export const AuthButtonLogin = styled(Link)`
  font-family: ${props => props.theme.fonts.title};
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  padding: 7px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    animation: scale 0.3s ease-in-out;
    background-color: ${props => props.theme.colors.light};
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const AuthButtonRegister = styled(Link)`
  font-family: ${props => props.theme.fonts.title};
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  padding: 7px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    animation: scale 0.3s ease-in-out;
    background-color: ${props => props.theme.colors.light};
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
