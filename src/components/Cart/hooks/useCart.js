import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  clearCart,
} from "../../../redux/slices/cart/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleUpdateQuantity = (id, change) => {
    dispatch(updateQuantity({ id, change }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleBuy = () => {
    // alert("¡Gracias por tu compra!");
    dispatch(clearCart());
  };

  return {
    cartItems,
    total,
    count,
    handleUpdateQuantity,
    handleClearCart,
    handleBuy,
  };
};
