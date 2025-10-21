import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
  errorDetails: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
      state.errorDetails = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload?.user ?? null;
      state.token = action.payload?.token ?? null;
      state.loading = false;
      state.error = null;
      state.errorDetails = null;
      
      // Guardar token en localStorage
      if (state.token) {
        localStorage.setItem('token', state.token);
      }
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === 'string' ? action.payload : (action.payload?.message || 'Error al iniciar sesión');
      state.errorDetails = action.payload?.details || null;
    },
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
      state.errorDetails = null;
    },
    registerSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload?.user ?? null;
      state.token = action.payload?.token ?? null;
      state.loading = false;
      state.error = null;
      state.errorDetails = null;
      // Guarda en localStorage
          if (state.token) {
          localStorage.setItem('token', state.token);
  }
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === 'string' ? action.payload : (action.payload?.message || 'Error al registrarse');
      state.errorDetails = action.payload?.details || null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      state.errorDetails = null;
      localStorage.removeItem('token');
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearError: (state) => {
      state.loading = false;
      state.error = null;
      state.errorDetails = null;
    }
  }
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
  setUser,
  clearError
} = authSlice.actions;

export default authSlice.reducer;
