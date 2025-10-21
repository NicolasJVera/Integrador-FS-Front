import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createOrdersApi = async (orderData, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders`, orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error en createOrdersApi:", error);
    throw error;
  }
};

export const getOrdersApi = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error en getOrdersApi:", error);
    throw error;
  }
};
