import { MisOrdenesContainerStyles, NoOrdersStyles } from "./CardMiOrdenStyles";
import CardMiorden from "./CardMiorden";

function CardsMisOrdenes({ orders = [] }) {
  return (
    <MisOrdenesContainerStyles>
      {orders.length > 0 ? (
        orders.map((order) => (
          <CardMiorden 
            key={order._id} 
            {...order} 
          />
        ))
      ) : (
        <NoOrdersStyles>No hay órdenes para mostrar</NoOrdersStyles>
      )}
    </MisOrdenesContainerStyles>
  );
}

export default CardsMisOrdenes;

