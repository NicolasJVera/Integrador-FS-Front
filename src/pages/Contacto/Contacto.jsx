import Contact from "../../components/Contact/Contact"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Contacto() {
  const { pathname } = useLocation();
  
  useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
  
  return <Contact />;
}

export default Contacto
