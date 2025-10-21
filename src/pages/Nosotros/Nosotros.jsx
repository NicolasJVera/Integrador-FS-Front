import About from "../../components/About/About"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Nosotros() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <About />;
}

export default Nosotros
