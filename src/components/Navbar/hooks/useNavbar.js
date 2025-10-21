// src/hooks/useNavbar.js
import { useState } from "react";
import { useCart } from "./useCart";

export const useNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cartItems, total, count, addToCart, updateItemQuantity, clearAllCart } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isCartOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
  };

  const buyProducts = () => {
    if (cartItems.length === 0) {
      alert("No hay productos en el carrito para comprar.");
      return;
    }

    const confirmacion = confirm(
      "¿Estás seguro de que deseas comprar los productos en tu carrito?"
    );
    if (confirmacion) {
      clearAllCart();
      alert("¡Compra realizada con éxito!");
    }
  };

  return {
    isMenuOpen,
    isCartOpen,
    cartItems,
    total,
    count,
    toggleMenu,
    toggleCart,
    closeAll,
    buyProducts,
  };
};
