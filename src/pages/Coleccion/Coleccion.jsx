import Collections from "../../components/Collections/Collections"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Coleccion() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return <Collections />;
}

export default Coleccion
