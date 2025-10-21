import { createSlice } from "@reduxjs/toolkit";
import { productsMock } from "../../../mock/products";

const INITIAL_STATE = {
  productos: [],
  productoSeleccionado: null,
  loading: false,
  error: null,
  productsMock: productsMock, // Mock de productos para pruebas
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProductos: (state, action) => {
      state.productos = action.payload;
      state.loading = false;
      state.error = null;
    },
    setProductoSeleccionado: (state, action) => {
      state.productoSeleccionado = action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearProductoSeleccionado: (state) => {
      state.productoSeleccionado = null;
    },
    getProducts: (state) => {
      return state;
    },
  },
});

export const {
  setLoading,
  setProductos,
  setProductoSeleccionado,
  setError,
  clearProductoSeleccionado,
  getProducts,
} = productsSlice.actions;

export default productsSlice.reducer;