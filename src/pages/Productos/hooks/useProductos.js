import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../services/services';
import { setLoading, setProductos, setError } from '../../../redux/slices/products/productsSlice';


export const useProductos = (filters = {}) => {
  const dispatch = useDispatch();
  const { productos, loading, error } = useSelector((state) => state.products);

  const fetchProductos = async (nuevosFiltros = {}) => {
    dispatch(setLoading(true));
    try {
      const response = await getProducts(nuevosFiltros);
      // console.log("Respuesta de API:", response); // Log: Ver qué llega
      dispatch(setProductos(response));
    } catch (err) {
      dispatch(setError(err.message || 'Error al obtener productos'));
    }
  };

  // Cargar productos cuando cambien los filtros
  useEffect(() => {
    fetchProductos(filters);
  }, [JSON.stringify(filters)]); // Dependencia en filtros para recargar si cambian

  return {
    productos,
    loading,
    error,
    fetchProductos,
  };
};