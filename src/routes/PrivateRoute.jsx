import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const location = useLocation();
  const { checkAuth } = useAuth();

  useEffect(() => {
    // Verificar la autenticación si no está cargando y no está autenticado
    if (!loading && !isAuthenticated) {
      checkAuth();
    }
  }, [isAuthenticated, loading, checkAuth]);

  // Mostrar un indicador de carga mientras se verifica la autenticación
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // Si el usuario está autenticado, renderizar los children
  // Si no, redirigir a la página de login con la ubicación actual
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
