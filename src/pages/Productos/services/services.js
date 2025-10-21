import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProducts = async (filters = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      params: filters
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener producto con ID ${id}:`, error);
    throw error;
  }
};