import { Link } from "react-router-dom";
import styled from "styled-components";
import { bump, neonGlow } from "../../../animations/categories/filterButton";

export const MenuLabel = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.title};
  gap: 30px;
  
  @media (max-width: 1000px) {
    position: fixed;
    top: 80px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${props => props.theme.colors.black};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 50px;
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    transform: translateX(-100%);
    
    &.open-menu {
      transform: translateX(0);
      left: 0;
      padding-top: 80px;
      margin-top: 60px;
    }
  }
`;

export const NavItem = styled.li`
  list-style: none;
  color: white;
  cursor: pointer;
  
  @media (max-width: 1000px) {
    margin: 15px 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgb(51, 51, 51);
  }
`;

export const NavLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  padding: 10px;
  display: inline-block;
  width: 100%;
  border-radius: 999px;
  
  &:hover {
    color: #33cfff;
    background-color: #000;

  }

  &.active-link {
    color: ${props => props.theme.colors.light};
  }
`;

