import { MenuLabel, MenuIcon, NavList, NavItem, NavLink } from "./MenuStyles";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import menuIcon from "/icons/menu.svg";

const Menu = ({ isOpen, onToggleMenu }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  // Actualizar el enlace activo cuando cambia la ruta
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink("home");
    else if (path.includes("productos")) setActiveLink("productos");
    else if (path.includes("coleccion")) setActiveLink("coleccion");
    else if (path.includes("nosotros")) setActiveLink("nosotros");
    else if (path.includes("contacto")) setActiveLink("contacto");
  }, [location]);

  // Función para manejar el cierre del menú al hacer clic en un enlace
  const handleLinkClick = (to) => {
    setActiveLink(to);
    onToggleMenu(); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <>
      <MenuLabel onClick={onToggleMenu}>
        <MenuIcon src={menuIcon} alt="Menú" />
      </MenuLabel>
      <NavList className={isOpen ? "open-menu" : ""}>
        <NavItem>
          <NavLink
            to="/"
            className={`nav-link ${activeLink === "home" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink
            to="/coleccion"
            className={`nav-link ${activeLink === "coleccion" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("coleccion")} 
          >
            Colecciones
          </NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink
            to="/productos"
            className={`nav-link ${activeLink === "productos" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("productos")} 
          >
            Productos
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="/nosotros"
            className={`nav-link ${activeLink === "nosotros" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("nosotros")} 
          >
            Nosotros
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="/contacto"
            className={`nav-link ${activeLink === "contacto" ? "active-link" : ""}`}
            onClick={() => handleLinkClick("contacto")} 
          >
            Contacto
          </NavLink>
        </NavItem>
      </NavList>
    </>
  );
};

export default Menu;
