import { CheckoutContainer, CheckoutWrapper, FormContainer, OrderSummaryContainer } from './CheckoutStyles';
import CheckoutForm from '../../components/Checkout/Form/CheckoutForm';
import ProductsCheckout from '../../components/Checkout/Products/ProductsCheckout';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { items: cartItems, shippingCost } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        {/* Columna izquierda: Formulario de envío */}
        <FormContainer>
          <CheckoutForm cartItems={cartItems} shippingCost={shippingCost} price={totalPrice}/>
        </FormContainer>

        {/* Columna derecha: Resumen del pedido */}
        <OrderSummaryContainer>
          <ProductsCheckout
            cartItems={cartItems}
            shippingCost={shippingCost}
            price={totalPrice}
          />
        </OrderSummaryContainer>
      </CheckoutWrapper>
    </CheckoutContainer>
  );
};

export default Checkout;