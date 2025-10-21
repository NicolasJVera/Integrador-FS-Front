import { useSelector } from 'react-redux';
import { CartLabel, CartIcon, CartBubble } from './CartIconStyles';

const CartIconComponent = ({ onClick }) => {

  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);

  return (
    <CartLabel onClick={onClick}>
      <CartIcon className="fa-solid fa-cart-shopping" />
      {itemCount > 0 && <CartBubble>{itemCount}</CartBubble>}
    </CartLabel>
  );
};

export default CartIconComponent;