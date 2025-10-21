import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CartContainer,
  CartHeader,
  CartTitleContainer,
  CartTitle,
  CartCount,
  CartCloseButton,
  CartItemsContainer,
  EmptyCartMessage,
  CartFooter,
  CartSummary,
  SummaryRow,
  CheckoutButton,
  ContinueShopping,
  DiscountRow,
  InfoRow,
  EmptyCartContainer,
  EmptyCartIcon,
  GoToShopButton,
} from "./CartStyles";

import CartItem from "./CartItem/CartItem";
import { useCart } from "./hooks/useCart";
import { IoClose } from "react-icons/io5";
import useShipping from "./hooks/useShipping";
import { formatPrice } from "../../utils/formatPrice";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

const Cart = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleGoToProducts = () => {
    onClose();
    navigate("/productos");
  };
  const {
    cartItems,
    total,
    count,
    handleUpdateQuantity,
    handleClearCart,
  } = useCart();

  // Usamos el hook useShipping para obtener el costo de envío y el total con envío
  const {
    envio,
    totalConEnvio,
    descuentoEnvio,
    restanteParaEnvioGratis,
    tieneEnvioGratis,
  } = useShipping(total);

  return (
    <CartContainer $isOpen={isOpen}>
      <CartHeader>
        <CartTitleContainer>
          <CartTitle>TU CARRITO</CartTitle>
          <CartCount>
            {count} {count === 1 ? "item" : "items"}
          </CartCount>
        </CartTitleContainer>
        <CartCloseButton onClick={onClose}>
          <IoClose size={20} />
        </CartCloseButton>
      </CartHeader>

      {cartItems.length === 0 ? (
        <EmptyCartContainer>
          <EmptyCartIcon>🛒</EmptyCartIcon>
          <EmptyCartMessage>Tu carrito está vacío.</EmptyCartMessage>

          <GoToShopButton onClick={handleGoToProducts}>
            Explorar productos
          </GoToShopButton>
        </EmptyCartContainer>
      ) : (
        <CartItemsContainer>
          {cartItems.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </CartItemsContainer>
      )}

      <CartFooter>
        {cartItems.length > 0 && (
          <>
            <CartSummary>
              <SummaryRow>
                <p>Subtotal</p>
                <span>{formatPrice(total)}</span>
              </SummaryRow>

              <SummaryRow>
                <p>Envío</p>
                <span>{formatPrice(envio)}</span>
              </SummaryRow>

              {tieneEnvioGratis && descuentoEnvio > 0 && (
                <DiscountRow>
                  <p>Descuento envío</p>
                  <span>-{formatPrice(descuentoEnvio)}</span>
                </DiscountRow>
              )}

              {!tieneEnvioGratis && restanteParaEnvioGratis > 0 && (
                <InfoRow>
                  <p>
                    Te faltan {formatPrice(restanteParaEnvioGratis)} para envío
                    gratis 🎁
                  </p>
                </InfoRow>
              )}

              <SummaryRow>
                <p>Total</p>
                <span>{formatPrice(totalConEnvio)}</span>
              </SummaryRow>
            </CartSummary>

            <CheckoutButton
              onClick={(e) => {
                e.preventDefault();
                onClose();
                navigate("/checkout");
              }}
            >
              <FaShoppingCart style={{ marginRight: "8px" }} />
              FINALIZAR COMPRA →
            </CheckoutButton>

            <ContinueShopping onClick={handleClearCart}>
              <FaTrashAlt style={{ marginRight: "8px" }} />
              Vaciar carrito
            </ContinueShopping>
          </>
        )}
      </CartFooter>
    </CartContainer>
  );
};

export default Cart;
