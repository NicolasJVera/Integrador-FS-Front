import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { formatDate } from "../../utils/FormatDate";

import { 
  OrderDetailContainer, 
  OrderHeader, 
  OrderItem, 
  ProductImage, 
  ProductInfo, 
  ProductPrice, 
  OrderSummary, 
  ShippingDetails 
} from "./ResumenStyles";


function Resumen() {
  const { orderId } = useParams();
  const { orders } = useSelector((state) => state.orders);
  const order = orders.find((o) => o._id === orderId);

  if (!order) {
    
    return (
      <OrderDetailContainer>
        <h2>Orden no encontrada</h2>
        <p>No se pudo encontrar la orden solicitada.</p>
      </OrderDetailContainer>
    );
  }

  return (
    <OrderDetailContainer>
      <OrderHeader>
        <h1>Resumen de la Orden #{order._id.slice(-6)}</h1>
        <p>Realizada el {formatDate(order.createdAt)}</p>
        <p>Estado: <strong>{order.status || 'Completada'}</strong></p>
      </OrderHeader>
      
      <h2>Tus Productos</h2>
      {order.items.map((item) => (
        <OrderItem key={item._id}>
          <ProductImage 
            src={item.image} 
            alt={item.title} 
          />
          <ProductInfo>
            <h3>{item.title}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price.toFixed(2)}</p>
          </ProductInfo>
          <ProductPrice>
            ${(item.price * item.quantity).toFixed(2)}
          </ProductPrice>
        </OrderItem>
      ))}

      <OrderSummary>
        <h3>Resumen de la Orden</h3>
        <p>
          <span>Subtotal ({order.items.reduce((acc, item) => acc + item.quantity, 0)} productos):</span>
          <span>${order.subtotal?.toFixed(2) || '0.00'}</span>
        </p>
        <p>
          <span>Envío:</span>
          <span>${order.shippingCost?.toFixed(2) || '0.00'}</span>
        </p>
        <p>
          <span>Total:</span>
          <strong>${order.total?.toFixed(2) || '0.00'}</strong>
        </p>
      </OrderSummary>

      <ShippingDetails>
        <h3>Datos de Envío</h3>
        <p>
          <span>Nombre:</span>
          <span>{order.shippingDetails?.name || 'No especificado'}</span>
        </p>
        <p>
          <span>Dirección:</span>
          <span>{order.shippingDetails?.address || 'No especificada'}</span>
        </p>
        <p>
          <span>Localidad:</span>
          <span>{order.shippingDetails?.location || 'No especificada'}</span>
        </p>
        <p>
          <span>Código Postal:</span>
          <span>{order.shippingDetails?.postalCode || 'No especificado'}</span>
        </p>
        <p>
          <span>Teléfono:</span>
          <span>{order.shippingDetails?.cellphone || 'No especificado'}</span>
        </p>
      </ShippingDetails>
    </OrderDetailContainer>
  );
}

export default Resumen;