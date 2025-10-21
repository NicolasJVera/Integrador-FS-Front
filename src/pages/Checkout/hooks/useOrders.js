import { useDispatch, useSelector } from "react-redux";
import { createOrdersApi, getOrdersApi } from "../services/services";
import {
  createOrderFail,
  getOrdersFail,
  setOrders,
} from "../../../redux/slices/orders/ordersSlice";
import { useState } from "react";

export const useOrders = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);

  // Obtener órdenes
  const getOrders = async (token) => {
    try {
      const response = await getOrdersApi(token);
      dispatch(setOrders(response.orders || []));
      return response.orders || [];
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      dispatch(getOrdersFail(errorMessage));
      console.error("Error al obtener las órdenes:", errorMessage);
      throw error;
    }
  };

  // Crear orden
  const createOrder = async (orderData) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No hay token de autenticación disponible");
    }

    setIsLoading(true);
    try {
      const response = await createOrdersApi(orderData, token);
      return response;
    } catch (error) {
      console.error("Error en useOrders:", error);
      dispatch(
        createOrderFail(
          error.response?.data?.message || "Error al crear la orden"
        )
      );
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    createOrder,
    getOrders,
  };
};

// Obtener órdenes
//  const getOrders = async (token) => {
//   try {
//     const orders = await getOrdersApi(token);
////     dispatch(setOrders(orders));
//   } catch (error) {
//     const errorMessage = error.response?.data?.error || error.message;
//     dispatch(getOrdersFail(errorMessage));
//     console.error("Error al obtener las órdenes:", errorMessage);
//     throw error;
//   }
// };
