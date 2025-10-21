import { addToCart, removeFromCart, clearCart, updateQuantity } from './slices/cart/cartSlice';

// Exportar todas las acciones del carrito
export const cartActions = {
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity
};

export { addToCart, removeFromCart, clearCart, updateQuantity };
