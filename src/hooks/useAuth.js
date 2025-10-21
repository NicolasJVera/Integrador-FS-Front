import { useSelector, useDispatch } from 'react-redux';
import { login, register, logout, checkAuth } from '../redux/slices/auth/authThunks';
import { clearError as clearErrorAction } from '../redux/slices/auth/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading, error, errorDetails } = useSelector((state) => state.auth);

  return {
    // Estado
    isAuthenticated,
    user,
    loading,
    error,
    errorDetails,
    
    // Acciones
    login: (credentials) => dispatch(login(credentials)),
    register: (userData) => dispatch(register(userData)),
    logout: () => dispatch(logout()),
    checkAuth: () => dispatch(checkAuth()),
    clearAuthError: () => dispatch(clearErrorAction()),
  };
};

export default useAuth;
