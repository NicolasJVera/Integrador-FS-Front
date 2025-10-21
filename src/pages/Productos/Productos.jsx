import Categories from "../../components/Categories/Categories";
import CardsProducts from "../../components/Products/CardsProducts";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProductos } from "./hooks/useProductos";
import { Loading, Error, Spinner } from "./ProductosStyles";

function Productos() {
  const { pathname } = useLocation();
  const { productos, loading, error } = useProductos();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (loading) {
    return (
      <Loading>
        <Spinner />
        <p style={{ marginLeft: '10px' }}>Cargando productos...</p>
      </Loading>
    );
  }

  if (error) {
    return <Error>Error: {error}</Error>;
  }

  return (
    <>
      <Categories />
      <CardsProducts productos={productos} />
    </>
  );
}

export default Productos;