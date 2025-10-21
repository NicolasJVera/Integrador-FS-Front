import { login as loginService, register as registerService, logout as logoutService, getCurrentUser } from '../../../services/authService';
import { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logout as logoutAction, setUser, clearError } from './authSlice';

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await loginService(credentials);
    const { token, user } = response;
    
    if (!token) {
      throw new Error('No se recibió el token de autenticación');
    }
    
    // Guardar el token en el estado y en localStorage
    dispatch(loginSuccess({ 
      user: user || null,
      token: token
    }));
    
    // Si no recibimos el usuario, intentar obtenerlo
    if (!user) {
      try { 
        await dispatch(checkAuth()); 
      } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    }
    
    return response;
  } catch (error) {
    dispatch(loginFailure({ 
      message: error.response?.data?.message || error.message, 
      details: error.response?.data || null 
    }));
    throw error;
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerStart());
    const response = await registerService(userData);
    const { token, user } = response;
    
    if (token) {
      dispatch(registerSuccess({ user, token }));
      localStorage.setItem('token', token);  // Guarda en localStorage
      if (!user) {
        await dispatch(checkAuth());  // Obtén usuario
      }
    }
    
    return response;
  } catch (error) {
    dispatch(registerFailure({ message: error.message }));
    throw error;
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    // Si no hay token, evitar llamar al backend y devolver false silenciosamente
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      return false;
    }
    const response = await getCurrentUser();
    const user = response?.user;
    if (user) {
      dispatch(setUser(user));
      return true;
    }
    return false;
  } catch (error) {
    // Silenciar 401 esperados cuando no hay token válido
    if (error?.status === 401 || /token/i.test(error?.message || '')) {
      return false;
    }
    console.error('Error al verificar autenticación:', error);
    return false;
  }
};

export const logout = () => (dispatch) => {
  logoutService();
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  dispatch(clearError());
  dispatch(logoutAction());
};