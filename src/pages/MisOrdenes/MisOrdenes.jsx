// src/pages/MisOrdenes/MisOrdenes.jsx
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { MisOrdenesContainer, TittleContainerStyles } from "./MisOrdenesStyles";
import CardsMisOrdenes from "../../components/MisOrdenes/CardsMisOrdenes";
import { useOrders } from "../Checkout/hooks/useOrders";

function MisOrdenes() {
  const { orders, loading, error } = useSelector((state) => state.orders);
  const { token } = useSelector((state) => state.auth);
  const { getOrders } = useOrders();

  // Cargar órdenes al montar el componente
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (token) {
          await getOrders(token);
        }
      } catch (error) {
        console.error('Error al cargar las órdenes:', error);
      }
    };

    fetchOrders();
  }, [getOrders, token]);

  return (
    <MisOrdenesContainer>
      <TittleContainerStyles>Mis Órdenes</TittleContainerStyles>
      <CardsMisOrdenes orders={orders || []} />
    </MisOrdenesContainer>
  );
}

export default MisOrdenes;